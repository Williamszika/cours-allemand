/* /api/exam — Examens différés : submit (stocke) / result (corrige à l'échéance). */
const { readJson, json, text, rateLimit, clientIp } = require("./_lib/http");
const { redis, loadUser, touchUser } = require("./_lib/store");
const tg = require("./_lib/tg");
const { isOwner } = require("./_lib/auth");
const ai = require("./_lib/ai");

module.exports = async function (req, res) {
  if (req.method !== "POST") return text(res, 405, "method");
  if (!tg.BOT_TOKEN) return text(res, 503, "exam not configured");
  if (await rateLimit(redis, clientIp(req), "exam", 120, 60)) return text(res, 429, "slow down");
  try {
    const body = await readJson(req);
    const v = tg.tgVerify(body.initData);
    if (!v || !v.user || !v.user.id) return text(res, 403, "bad initData");
    const id = String(v.user.id);
    const action = String(body.action || "result");
    const key = String(body.exam || "a2").replace(/[^a-z0-9-]/g, "").slice(0, 24);

    if (action === "submit") {
      const payload = (body.payload && typeof body.payload === "object") ? body.payload : {};
      const us = await touchUser(v, tg.tgName(v), function (u2) {
        u2.exams = u2.exams || {};
        u2.exams[key] = { exam: key, status: "pending", submittedAt: new Date().toISOString(), payload: payload };
      });
      const sub = us.exams[key];
      return json(res, 200, { ok: true, status: "pending", submittedAt: sub.submittedAt, availableAt: Date.parse(sub.submittedAt) + ai.GRADE_DELAY, delayMs: ai.GRADE_DELAY });
    }

    // action "result"
    let u = await loadUser(id);
    let ex = u && u.exams ? u.exams[key] : null;
    if (ex && ex.status === "pending") {
      const due = Date.now() - (Date.parse(ex.submittedAt) || 0) >= ai.GRADE_DELAY;
      const force = !!body.force && isOwner(id, body.key);
      if (due || force) await ai.gradeExam(id, key);
      u = await loadUser(id);
      ex = u && u.exams ? u.exams[key] : null;
    }
    if (!ex) return json(res, 200, { status: "none" });
    if (ex.status === "graded") return json(res, 200, { status: "graded", exam: ex.exam, submittedAt: ex.submittedAt, gradedAt: ex.gradedAt, result: ex.result, copy: (ex.payload && ex.payload.copy) || null });
    return json(res, 200, { status: "pending", exam: ex.exam, submittedAt: ex.submittedAt, availableAt: (Date.parse(ex.submittedAt) || Date.now()) + ai.GRADE_DELAY, delayMs: ai.GRADE_DELAY });
  } catch (e) { console.error("[exam]", e && e.message); text(res, 500, "exam error"); }
};
