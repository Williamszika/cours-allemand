/* =====================================================================
   i18n.js — Multilingue & immersion progressive
   ---------------------------------------------------------------------
   • Détecte la langue de l'utilisateur (langue de l'appareil + option
     géolocalisation), toujours modifiable.
   • Cours A1/A2 expliqués dans la langue de l'utilisateur ; à partir de
     B1, immersion en allemand du niveau précédent (B1→A2, B2→B1,
     C1→B2, C2→C1).
   • Langues majeures « soignées » (interface traduite à la main) +
     repli automatique (API Translator du navigateur / lien Google) pour
     toutes les autres langues du monde.
   ===================================================================== */
window.I18N = (function () {
  /* ---- Registre des langues du monde (native = nom dans la langue) ---- */
  /* curated:1 = interface traduite à la main. rtl:1 = écriture droite→gauche. */
  var LANGS = [
    { c: "fr", n: "Français", f: "🇫🇷", curated: 1 },
    { c: "en", n: "English", f: "🇬🇧", curated: 1 },
    { c: "de", n: "Deutsch", f: "🇩🇪", curated: 1 },
    { c: "tr", n: "Türkçe", f: "🇹🇷", curated: 1 },
    { c: "ar", n: "العربية", f: "🇸🇦", rtl: 1, curated: 1 },
    { c: "ru", n: "Русский", f: "🇷🇺", curated: 1 },
    { c: "uk", n: "Українська", f: "🇺🇦", curated: 1 },
    { c: "fa", n: "فارسی", f: "🇮🇷", rtl: 1, curated: 1 },
    { c: "es", n: "Español", f: "🇪🇸", curated: 1 },
    { c: "it", n: "Italiano", f: "🇮🇹", curated: 1 },
    { c: "pt", n: "Português", f: "🇵🇹", curated: 1 },
    { c: "pl", n: "Polski", f: "🇵🇱", curated: 1 },
    { c: "ro", n: "Română", f: "🇷🇴", curated: 1 },
    { c: "nl", n: "Nederlands", f: "🇳🇱", curated: 1 },
    /* --- repli automatique (interface en anglais, cours auto-traduits) --- */
    { c: "sq", n: "Shqip", f: "🇦🇱" }, { c: "sr", n: "Српски", f: "🇷🇸" },
    { c: "hr", n: "Hrvatski", f: "🇭🇷" }, { c: "bs", n: "Bosanski", f: "🇧🇦" },
    { c: "el", n: "Ελληνικά", f: "🇬🇷" }, { c: "bg", n: "Български", f: "🇧🇬" },
    { c: "hu", n: "Magyar", f: "🇭🇺" }, { c: "cs", n: "Čeština", f: "🇨🇿" },
    { c: "sk", n: "Slovenčina", f: "🇸🇰" }, { c: "sl", n: "Slovenščina", f: "🇸🇮" },
    { c: "mk", n: "Македонски", f: "🇲🇰" }, { c: "ku", n: "Kurdî", f: "🏳️" },
    { c: "ckb", n: "کوردیی ناوەندی", f: "🏳️", rtl: 1 }, { c: "ps", n: "پښتو", f: "🇦🇫", rtl: 1 },
    { c: "ur", n: "اردو", f: "🇵🇰", rtl: 1 }, { c: "hi", n: "हिन्दी", f: "🇮🇳" },
    { c: "bn", n: "বাংলা", f: "🇧🇩" }, { c: "pa", n: "ਪੰਜਾਬੀ", f: "🇮🇳" },
    { c: "ta", n: "தமிழ்", f: "🇮🇳" }, { c: "he", n: "עברית", f: "🇮🇱", rtl: 1 },
    { c: "zh", n: "中文", f: "🇨🇳" }, { c: "ja", n: "日本語", f: "🇯🇵" },
    { c: "ko", n: "한국어", f: "🇰🇷" }, { c: "vi", n: "Tiếng Việt", f: "🇻🇳" },
    { c: "th", n: "ไทย", f: "🇹🇭" }, { c: "id", n: "Bahasa Indonesia", f: "🇮🇩" },
    { c: "ms", n: "Bahasa Melayu", f: "🇲🇾" }, { c: "tl", n: "Filipino", f: "🇵🇭" },
    { c: "sw", n: "Kiswahili", f: "🇰🇪" }, { c: "am", n: "አማርኛ", f: "🇪🇹" },
    { c: "ha", n: "Hausa", f: "🇳🇬" }, { c: "yo", n: "Yorùbá", f: "🇳🇬" },
    { c: "ig", n: "Igbo", f: "🇳🇬" }, { c: "so", n: "Soomaali", f: "🇸🇴" },
    { c: "ti", n: "ትግርኛ", f: "🇪🇷" }, { c: "lt", n: "Lietuvių", f: "🇱🇹" },
    { c: "lv", n: "Latviešu", f: "🇱🇻" }, { c: "et", n: "Eesti", f: "🇪🇪" },
    { c: "fi", n: "Suomi", f: "🇫🇮" }, { c: "sv", n: "Svenska", f: "🇸🇪" },
    { c: "da", n: "Dansk", f: "🇩🇰" }, { c: "no", n: "Norsk", f: "🇳🇴" },
    { c: "ka", n: "ქართული", f: "🇬🇪" }, { c: "hy", n: "Հայերեն", f: "🇦🇲" },
    { c: "az", n: "Azərbaycanca", f: "🇦🇿" }, { c: "kk", n: "Қазақша", f: "🇰🇿" },
    { c: "uz", n: "Oʻzbekcha", f: "🇺🇿" }, { c: "mn", n: "Монгол", f: "🇲🇳" },
    { c: "ne", n: "नेपाली", f: "🇳🇵" }, { c: "si", n: "සිංහල", f: "🇱🇰" },
    { c: "my", n: "မြန်မာ", f: "🇲🇲" }, { c: "km", n: "ខ្មែរ", f: "🇰🇭" }
  ];
  var BY = {}; LANGS.forEach(function (l) { BY[l.c] = l; });

  /* ---- Interface traduite à la main (langues majeures) ----
     Repli : langue → en → fr → clé. {lvl} est remplacé dynamiquement. */
  var UI = {
    fr: {
      tagline: "Apprends l'allemand de A1 à C2", choose_lang: "Quelle langue parles-tu ?",
      choose_lang_sub: "Tes cours A1 et A2 seront expliqués dans cette langue. Dès le niveau B1, tu apprendras directement en allemand simplifié.",
      detected: "Détectée", use_location: "📍 Utiliser ma position", locating: "Localisation…",
      search_lang: "Rechercher une langue…", continue: "Continuer", language: "Langue", change_lang: "Changer",
      course: "Le cours", the_rule: "La règle", the_essential: "L'essentiel", examples: "Exemples", more_examples: "Plus d'exemples en contexte",
      good_to_know: "Bon à savoir", attention: "Attention", listen_all: "Tout écouter", to_go_further: "Pour aller plus loin",
      in_german: "🇩🇪 Cours en allemand (niveau {lvl})", immersion_on: "Mode immersion activé",
      immersion_notice: "Dès B1, Zika t'explique en allemand simplifié (niveau {lvl}) pour t'immerger. 💪",
      auto_translated: "Traduction automatique", translating: "Traduction…", see_original: "Voir l'original (français)", translate_google: "Traduire avec Google"
    },
    en: {
      tagline: "Learn German from A1 to C2", choose_lang: "What language do you speak?",
      choose_lang_sub: "Your A1 and A2 lessons will be explained in this language. From level B1, you'll learn directly in simplified German.",
      detected: "Detected", use_location: "📍 Use my location", locating: "Locating…",
      search_lang: "Search a language…", continue: "Continue", language: "Language", change_lang: "Change",
      course: "The lesson", the_rule: "The rule", the_essential: "The essentials", examples: "Examples", more_examples: "More examples in context",
      good_to_know: "Good to know", attention: "Watch out", listen_all: "Play all", to_go_further: "Going further",
      in_german: "🇩🇪 Lesson in German (level {lvl})", immersion_on: "Immersion mode on",
      immersion_notice: "From B1, Zika explains in simplified German (level {lvl}) to immerse you. 💪",
      auto_translated: "Auto-translated", translating: "Translating…", see_original: "See original (French)", translate_google: "Translate with Google"
    },
    de: {
      tagline: "Lerne Deutsch von A1 bis C2", choose_lang: "Welche Sprache sprichst du?",
      choose_lang_sub: "Deine A1- und A2-Kurse werden in dieser Sprache erklärt. Ab Niveau B1 lernst du direkt auf einfachem Deutsch.",
      detected: "Erkannt", use_location: "📍 Standort verwenden", locating: "Ortung…",
      search_lang: "Sprache suchen…", continue: "Weiter", language: "Sprache", change_lang: "Ändern",
      course: "Der Kurs", the_rule: "Die Regel", the_essential: "Das Wichtigste", examples: "Beispiele", more_examples: "Mehr Beispiele im Kontext",
      good_to_know: "Gut zu wissen", attention: "Achtung", listen_all: "Alles anhören", to_go_further: "Zum Weiterlernen",
      in_german: "🇩🇪 Kurs auf Deutsch (Niveau {lvl})", immersion_on: "Immersionsmodus aktiv",
      immersion_notice: "Ab B1 erklärt Zika auf einfachem Deutsch (Niveau {lvl}). 💪",
      auto_translated: "Automatisch übersetzt", translating: "Übersetze…", see_original: "Original ansehen", translate_google: "Mit Google übersetzen"
    },
    tr: {
      tagline: "A1'den C2'ye Almanca öğren", choose_lang: "Hangi dili konuşuyorsun?",
      choose_lang_sub: "A1 ve A2 derslerin bu dilde anlatılacak. B1 seviyesinden itibaren doğrudan basit Almanca öğreneceksin.",
      detected: "Algılandı", use_location: "📍 Konumumu kullan", locating: "Konum alınıyor…",
      search_lang: "Dil ara…", continue: "Devam", language: "Dil", change_lang: "Değiştir",
      course: "Ders", the_rule: "Kural", the_essential: "Temel bilgiler", examples: "Örnekler",
      good_to_know: "Bilmekte fayda var", attention: "Dikkat", listen_all: "Tümünü dinle", to_go_further: "Daha ileri",
      in_german: "🇩🇪 Almanca ders ({lvl} seviyesi)", immersion_on: "Daldırma modu açık",
      immersion_notice: "B1'den itibaren Zika seni daldırmak için basit Almanca ({lvl}) anlatır. 💪",
      auto_translated: "Otomatik çeviri", translating: "Çevriliyor…", see_original: "Orijinali gör", translate_google: "Google ile çevir"
    },
    ar: {
      tagline: "تعلّم الألمانية من A1 إلى C2", choose_lang: "ما هي لغتك؟",
      choose_lang_sub: "ستُشرح دروس A1 وA2 بهذه اللغة. ومن المستوى B1 ستتعلّم مباشرة بالألمانية المبسّطة.",
      detected: "تم الكشف", use_location: "📍 استخدم موقعي", locating: "جارٍ تحديد الموقع…",
      search_lang: "ابحث عن لغة…", continue: "متابعة", language: "اللغة", change_lang: "تغيير",
      course: "الدرس", the_rule: "القاعدة", the_essential: "الأساسي", examples: "أمثلة",
      good_to_know: "من الجيد معرفته", attention: "انتبه", listen_all: "استمع للكل", to_go_further: "للتعمّق",
      in_german: "🇩🇪 الدرس بالألمانية (المستوى {lvl})", immersion_on: "وضع الانغماس مُفعّل",
      immersion_notice: "من B1، يشرح زيكا بالألمانية المبسّطة (المستوى {lvl}) لانغماسك. 💪",
      auto_translated: "ترجمة آلية", translating: "جارٍ الترجمة…", see_original: "عرض الأصل", translate_google: "ترجم عبر Google"
    },
    ru: {
      tagline: "Учите немецкий с A1 до C2", choose_lang: "На каком языке вы говорите?",
      choose_lang_sub: "Уроки A1 и A2 будут объясняться на этом языке. С уровня B1 вы будете учиться сразу на простом немецком.",
      detected: "Определён", use_location: "📍 Использовать геолокацию", locating: "Определение…",
      search_lang: "Поиск языка…", continue: "Продолжить", language: "Язык", change_lang: "Изменить",
      course: "Урок", the_rule: "Правило", the_essential: "Главное", examples: "Примеры",
      good_to_know: "Полезно знать", attention: "Внимание", listen_all: "Прослушать всё", to_go_further: "Для углубления",
      in_german: "🇩🇪 Урок на немецком (уровень {lvl})", immersion_on: "Режим погружения включён",
      immersion_notice: "С B1 Зика объясняет на простом немецком (уровень {lvl}) для погружения. 💪",
      auto_translated: "Автоперевод", translating: "Перевод…", see_original: "Показать оригинал", translate_google: "Перевести в Google"
    },
    uk: {
      tagline: "Вивчайте німецьку від A1 до C2", choose_lang: "Якою мовою ви розмовляєте?",
      choose_lang_sub: "Уроки A1 та A2 пояснюватимуться цією мовою. З рівня B1 ви навчатиметеся одразу простою німецькою.",
      detected: "Визначено", use_location: "📍 Використати геолокацію", locating: "Визначення…",
      search_lang: "Пошук мови…", continue: "Продовжити", language: "Мова", change_lang: "Змінити",
      course: "Урок", the_rule: "Правило", the_essential: "Головне", examples: "Приклади",
      good_to_know: "Корисно знати", attention: "Увага", listen_all: "Прослухати все", to_go_further: "Для поглиблення",
      in_german: "🇩🇪 Урок німецькою (рівень {lvl})", immersion_on: "Режим занурення увімкнено",
      immersion_notice: "З B1 Зіка пояснює простою німецькою (рівень {lvl}) для занурення. 💪",
      auto_translated: "Автопереклад", translating: "Переклад…", see_original: "Показати оригінал", translate_google: "Перекласти в Google"
    },
    fa: {
      tagline: "آلمانی را از A1 تا C2 یاد بگیرید", choose_lang: "به چه زبانی صحبت می‌کنید؟",
      choose_lang_sub: "درس‌های A1 و A2 به این زبان توضیح داده می‌شوند. از سطح B1 مستقیماً به آلمانیِ ساده یاد می‌گیرید.",
      detected: "شناسایی شد", use_location: "📍 استفاده از موقعیت من", locating: "در حال مکان‌یابی…",
      search_lang: "جستجوی زبان…", continue: "ادامه", language: "زبان", change_lang: "تغییر",
      course: "درس", the_rule: "قاعده", the_essential: "نکات اصلی", examples: "مثال‌ها",
      good_to_know: "خوب است بدانید", attention: "توجه", listen_all: "پخش همه", to_go_further: "برای پیشرفت بیشتر",
      in_german: "🇩🇪 درس به آلمانی (سطح {lvl})", immersion_on: "حالت غوطه‌وری فعال",
      immersion_notice: "از B1، زیکا به آلمانیِ ساده (سطح {lvl}) توضیح می‌دهد. 💪",
      auto_translated: "ترجمهٔ خودکار", translating: "در حال ترجمه…", see_original: "نمایش متن اصلی", translate_google: "ترجمه با Google"
    },
    es: {
      tagline: "Aprende alemán de A1 a C2", choose_lang: "¿Qué idioma hablas?",
      choose_lang_sub: "Tus cursos A1 y A2 se explicarán en este idioma. Desde el nivel B1, aprenderás directamente en alemán simplificado.",
      detected: "Detectado", use_location: "📍 Usar mi ubicación", locating: "Localizando…",
      search_lang: "Buscar un idioma…", continue: "Continuar", language: "Idioma", change_lang: "Cambiar",
      course: "La lección", the_rule: "La regla", the_essential: "Lo esencial", examples: "Ejemplos",
      good_to_know: "Bueno saberlo", attention: "Atención", listen_all: "Escuchar todo", to_go_further: "Para ir más lejos",
      in_german: "🇩🇪 Lección en alemán (nivel {lvl})", immersion_on: "Modo inmersión activado",
      immersion_notice: "Desde B1, Zika te explica en alemán simplificado (nivel {lvl}). 💪",
      auto_translated: "Traducción automática", translating: "Traduciendo…", see_original: "Ver el original", translate_google: "Traducir con Google"
    },
    it: {
      tagline: "Impara il tedesco da A1 a C2", choose_lang: "Che lingua parli?",
      choose_lang_sub: "Le lezioni A1 e A2 saranno spiegate in questa lingua. Dal livello B1 imparerai direttamente in tedesco semplificato.",
      detected: "Rilevata", use_location: "📍 Usa la mia posizione", locating: "Localizzazione…",
      search_lang: "Cerca una lingua…", continue: "Continua", language: "Lingua", change_lang: "Cambia",
      course: "La lezione", the_rule: "La regola", the_essential: "L'essenziale", examples: "Esempi",
      good_to_know: "Buono a sapersi", attention: "Attenzione", listen_all: "Ascolta tutto", to_go_further: "Per approfondire",
      in_german: "🇩🇪 Lezione in tedesco (livello {lvl})", immersion_on: "Modalità immersione attiva",
      immersion_notice: "Dal B1, Zika spiega in tedesco semplificato (livello {lvl}). 💪",
      auto_translated: "Traduzione automatica", translating: "Traduzione…", see_original: "Vedi l'originale", translate_google: "Traduci con Google"
    },
    pt: {
      tagline: "Aprenda alemão de A1 a C2", choose_lang: "Que idioma você fala?",
      choose_lang_sub: "Suas aulas A1 e A2 serão explicadas neste idioma. A partir do nível B1, você aprenderá diretamente em alemão simplificado.",
      detected: "Detectado", use_location: "📍 Usar a minha localização", locating: "Localizando…",
      search_lang: "Procurar um idioma…", continue: "Continuar", language: "Idioma", change_lang: "Alterar",
      course: "A lição", the_rule: "A regra", the_essential: "O essencial", examples: "Exemplos",
      good_to_know: "Bom saber", attention: "Atenção", listen_all: "Ouvir tudo", to_go_further: "Para ir além",
      in_german: "🇩🇪 Lição em alemão (nível {lvl})", immersion_on: "Modo imersão ativo",
      immersion_notice: "A partir do B1, o Zika explica em alemão simplificado (nível {lvl}). 💪",
      auto_translated: "Tradução automática", translating: "Traduzindo…", see_original: "Ver o original", translate_google: "Traduzir com Google"
    },
    pl: {
      tagline: "Ucz się niemieckiego od A1 do C2", choose_lang: "Jakim językiem mówisz?",
      choose_lang_sub: "Lekcje A1 i A2 będą objaśniane w tym języku. Od poziomu B1 będziesz uczyć się od razu w uproszczonym niemieckim.",
      detected: "Wykryto", use_location: "📍 Użyj mojej lokalizacji", locating: "Lokalizowanie…",
      search_lang: "Szukaj języka…", continue: "Dalej", language: "Język", change_lang: "Zmień",
      course: "Lekcja", the_rule: "Reguła", the_essential: "Najważniejsze", examples: "Przykłady",
      good_to_know: "Warto wiedzieć", attention: "Uwaga", listen_all: "Odtwórz wszystko", to_go_further: "Aby pójść dalej",
      in_german: "🇩🇪 Lekcja po niemiecku (poziom {lvl})", immersion_on: "Tryb immersji włączony",
      immersion_notice: "Od B1 Zika tłumaczy w uproszczonym niemieckim (poziom {lvl}). 💪",
      auto_translated: "Tłumaczenie automatyczne", translating: "Tłumaczenie…", see_original: "Zobacz oryginał", translate_google: "Przetłumacz w Google"
    },
    ro: {
      tagline: "Învață germana de la A1 la C2", choose_lang: "Ce limbă vorbești?",
      choose_lang_sub: "Lecțiile A1 și A2 vor fi explicate în această limbă. De la nivelul B1 vei învăța direct în germană simplificată.",
      detected: "Detectată", use_location: "📍 Folosește locația mea", locating: "Se localizează…",
      search_lang: "Caută o limbă…", continue: "Continuă", language: "Limba", change_lang: "Schimbă",
      course: "Lecția", the_rule: "Regula", the_essential: "Esențialul", examples: "Exemple",
      good_to_know: "Bine de știut", attention: "Atenție", listen_all: "Ascultă tot", to_go_further: "Pentru aprofundare",
      in_german: "🇩🇪 Lecție în germană (nivel {lvl})", immersion_on: "Mod imersiune activ",
      immersion_notice: "De la B1, Zika explică în germană simplificată (nivel {lvl}). 💪",
      auto_translated: "Traducere automată", translating: "Se traduce…", see_original: "Vezi originalul", translate_google: "Tradu cu Google"
    },
    nl: {
      tagline: "Leer Duits van A1 tot C2", choose_lang: "Welke taal spreek je?",
      choose_lang_sub: "Je A1- en A2-lessen worden in deze taal uitgelegd. Vanaf niveau B1 leer je direct in eenvoudig Duits.",
      detected: "Gedetecteerd", use_location: "📍 Mijn locatie gebruiken", locating: "Lokaliseren…",
      search_lang: "Zoek een taal…", continue: "Doorgaan", language: "Taal", change_lang: "Wijzigen",
      course: "De les", the_rule: "De regel", the_essential: "Het essentiële", examples: "Voorbeelden",
      good_to_know: "Goed om te weten", attention: "Let op", listen_all: "Alles afspelen", to_go_further: "Verdiepen",
      in_german: "🇩🇪 Les in het Duits (niveau {lvl})", immersion_on: "Immersiemodus aan",
      immersion_notice: "Vanaf B1 legt Zika uit in eenvoudig Duits (niveau {lvl}). 💪",
      auto_translated: "Automatisch vertaald", translating: "Vertalen…", see_original: "Origineel tonen", translate_google: "Vertalen met Google"
    }
  };

  /* ---- Centroïdes pays → langue (géolocalisation grossière, sans réseau) ---- */
  var GEO = [
    [51, 10, "de"], [47, 13, "de"], [47, 8, "de"], [46.6, 2.4, "fr"], [50.5, 4.5, "fr"],
    [40, -4, "es"], [39, -8, "pt"], [42, 12.5, "it"], [52, 5.3, "nl"], [52, 19, "pl"],
    [46, 25, "ro"], [55, 38, "ru"], [49, 32, "uk"], [39, 35, "tr"], [32, 53, "fa"],
    [24, 45, "ar"], [30, 31, "ar"], [33.9, 35.5, "ar"], [33, 44, "ar"], [34, 9, "ar"],
    [41, 20, "sq"], [44, 21, "sr"], [45.1, 15.2, "hr"], [44, 18, "bs"], [39, 22, "el"],
    [42.7, 25.5, "bg"], [47, 19.5, "hu"], [49.8, 15.5, "cs"], [48.7, 19.7, "sk"],
    [33, 65, "ps"], [30.4, 69.3, "ur"], [22, 79, "hi"], [24, 90, "bn"], [9, 8, "ha"],
    [7.9, 4, "yo"], [6, 38, "am"], [2, 45, "so"], [-1, 37, "sw"], [35, 105, "zh"],
    [36, 138, "ja"], [37, 127.5, "ko"], [16, 106, "vi"], [15, 101, "th"], [-2, 118, "id"],
    [60, 18, "sv"], [61, 9, "no"], [56, 10, "da"], [62, 26, "fi"], [42, 43.5, "ka"],
    [40.3, 45, "hy"], [40.4, 47.6, "az"], [48, 67, "kk"], [41.4, 64.6, "uz"]
  ];

  /* ---- État courant ---- */
  function reg() { return (window.Progress && window.Progress.getReglages && window.Progress.getReglages()) || {}; }
  function lang() {
    var c = reg().langue;
    return (c && BY[c]) ? c : detect();
  }
  function isChosen() { return !!reg().langueChoisie; }
  function setLang(c, persist) {
    if (!BY[c]) c = "en";
    if (window.Progress) window.Progress.setReglages({ langue: c, langueChoisie: persist === false ? reg().langueChoisie : true });
    applyDir();
    return c;
  }
  function info(c) { return BY[c || lang()] || BY.en; }
  function all() { return LANGS.slice(); }
  function isCurated(c) { return !!(BY[c || lang()] && BY[c || lang()].curated); }
  function isRTL(c) { return !!(BY[c || lang()] && BY[c || lang()].rtl); }

  function detect() {
    var navs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || "en"];
    for (var i = 0; i < navs.length; i++) {
      var base = String(navs[i] || "").toLowerCase().split("-")[0];
      if (base === "nb" || base === "nn") base = "no";
      if (base === "iw") base = "he";
      if (BY[base]) return base;
    }
    return "en";
  }
  function detectTimezone() {
    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      var m = { "Istanbul": "tr", "Tehran": "fa", "Moscow": "ru", "Kiev": "uk", "Kyiv": "uk",
        "Warsaw": "pl", "Bucharest": "ro", "Amsterdam": "nl", "Madrid": "es", "Rome": "it",
        "Lisbon": "pt", "Berlin": "de", "Vienna": "de", "Zurich": "de", "Paris": "fr",
        "Cairo": "ar", "Riyadh": "ar", "Baghdad": "ar", "Beirut": "ar", "Damascus": "ar",
        "Kabul": "ps", "Karachi": "ur", "Kolkata": "hi", "Dhaka": "bn", "Athens": "el",
        "Sofia": "bg", "Budapest": "hu", "Prague": "cs", "Belgrade": "sr", "Tirane": "sq" };
      for (var city in m) { if (tz.indexOf(city) >= 0) return m[city]; }
    } catch (e) {}
    return null;
  }
  /* Géolocalisation GPS → langue (centroïde le plus proche). Repli : fuseau horaire. */
  function detectGeo(cb) {
    function fallback() { cb(detectTimezone() || detect()); }
    if (!navigator.geolocation) return fallback();
    navigator.geolocation.getCurrentPosition(function (pos) {
      var la = pos.coords.latitude, lo = pos.coords.longitude, best = null, bd = 1e9;
      GEO.forEach(function (g) {
        var dla = (g[0] - la), dlo = (g[1] - lo) * Math.cos(la * Math.PI / 180);
        var d = dla * dla + dlo * dlo;
        if (d < bd) { bd = d; best = g[2]; }
      });
      cb(best || fallbackVal());
      function fallbackVal() { return detectTimezone() || detect(); }
    }, function () { fallback(); }, { timeout: 8000, maximumAge: 6e5 });
  }

  /* ---- Immersion : langue d'explication selon le niveau du cours ---- */
  var ORDRE = ["A1", "A2", "B1", "B2", "C1", "C2"];
  /* A1/A2 → langue de l'utilisateur ; B1→de(A2), B2→de(B1), C1→de(B2), C2→de(C1). */
  function explication(niveau) {
    var n = (niveau || "A1").toUpperCase();
    if (n === "A1" || n === "A2") return { lang: lang(), de: false, niveau: null };
    var idx = ORDRE.indexOf(n);
    var prev = ORDRE[Math.max(0, idx - 1)]; // B1→A2, B2→B1, C1→B2, C2→C1
    return { lang: "de", de: true, niveau: prev };
  }

  /* ---- Traduction de l'interface ---- */
  function t(key, vars) {
    var l = lang();
    var s = (UI[l] && UI[l][key]) || (UI.en && UI.en[key]) || (UI.fr && UI.fr[key]) || key;
    if (vars) for (var k in vars) s = s.replace("{" + k + "}", vars[k]);
    return s;
  }
  /* Idem mais dans une langue précise (utile pour l'allemand en immersion). */
  function tIn(l, key, vars) {
    var s = (UI[l] && UI[l][key]) || (UI.en && UI.en[key]) || (UI.fr && UI.fr[key]) || key;
    if (vars) for (var k in vars) s = s.replace("{" + k + "}", vars[k]);
    return s;
  }

  /* ---- Traduction automatique du contenu (repli) ----
     Utilise l'API Translator du navigateur si disponible (hors-ligne après
     téléchargement du modèle, Chrome/Android). Sinon, renvoie null et
     l'appelant propose un lien « Traduire avec Google ». Résultats mis en cache. */
  var cache = {};
  try { cache = JSON.parse(localStorage.getItem("i18n-tcache2") || "{}") || {}; } catch (e) {}
  // File d'attente : on limite les requêtes simultanées pour éviter les 429
  // (limites de débit des services de traduction gratuits).
  var Q = [], active = 0, MAXC = 5;
  function enqueue(fn) {
    return new Promise(function (res) { Q.push({ fn: fn, res: res }); pump(); });
  }
  function pump() {
    while (active < MAXC && Q.length) {
      var job = Q.shift(); active++;
      Promise.resolve().then(job.fn).then(function (v) { active--; job.res(v); pump(); },
        function () { active--; job.res(null); pump(); });
    }
  }
  var translators = {};
  function canAutoTranslate() {
    return typeof self !== "undefined" && (("Translator" in self) || (self.translation && self.translation.createTranslator));
  }
  function getTranslator(src, tgt) {
    var key = src + ">" + tgt;
    if (translators[key]) return translators[key];
    var p;
    if ("Translator" in self) {
      p = self.Translator.create({ sourceLanguage: src, targetLanguage: tgt });
    } else if (self.translation && self.translation.createTranslator) {
      p = self.translation.createTranslator({ sourceLanguage: src, targetLanguage: tgt });
    } else {
      p = Promise.reject(new Error("no-translator"));
    }
    translators[key] = p;
    return p;
  }
  function translate(text, tgt, src) {
    src = src || "fr";
    if (!text || tgt === src) return Promise.resolve(text);
    var ck = tgt + "|" + src + "|" + text;
    if (cache[ck]) return Promise.resolve(cache[ck]);
    // Traduction réseau sans clé (MyMemory → Google gtx), en file d'attente
    // (max 2 simultanées) pour éviter les 429. Résultats mis en cache.
    var work = enqueue(function () { return netTranslate(text, tgt, src); }).then(function (out) {
      if (out) { cache[ck] = out; try { localStorage.setItem("i18n-tcache2", JSON.stringify(cache)); } catch (e) {} }
      return out || null;
    }).catch(function () { return null; });
    var timeout = new Promise(function (r) { setTimeout(function () { r(null); }, 25000); });
    return Promise.race([work, timeout]);
  }
  function decodeEntities(s) {
    return String(s).replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#(\d+);/g, function (m, n) { return String.fromCharCode(+n); });
  }
  function netTranslate(text, tgt, src) {
    if (typeof fetch !== "function") return Promise.resolve(null);
    // Google gtx d'abord (meilleure qualité), repli MyMemory.
    return gtxTranslate(text, tgt, src).then(function (g) {
      return g ? g : mmTranslate(text, tgt, src);
    }).catch(function () { return mmTranslate(text, tgt, src); });
  }
  function mmTranslate(text, tgt, src) {
    var mm = "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(text) + "&langpair=" + encodeURIComponent(src + "|" + tgt);
    return fetch(mm).then(function (r) { return r.ok ? r.json() : null; }).then(function (j) {
      var t = j && j.responseData && j.responseData.translatedText;
      var junk = t && /(.)\1{7,}/.test(t);
      if (t && (j.responseStatus == 200 || j.responseStatus === "200") && !/MYMEMORY WARNING|INVALID/i.test(t) && !junk) return decodeEntities(t);
      return null;
    }).catch(function () { return null; });
  }
  function gtxTranslate(text, tgt, src) {
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=" + src + "&tl=" + tgt + "&q=" + encodeURIComponent(text);
    return fetch(url).then(function (r) { return r.ok ? r.json() : null; }).then(function (j) {
      if (j && j[0] && j[0].length) return j[0].map(function (s) { return s && s[0] ? s[0] : ""; }).join("");
      return null;
    }).catch(function () { return null; });
  }
  function googleUrl(text, tgt, src) {
    return "https://translate.google.com/?sl=" + (src || "fr") + "&tl=" + tgt + "&op=translate&text=" + encodeURIComponent(text);
  }

  function applyDir() {
    try { document.documentElement.setAttribute("dir", isRTL() ? "rtl" : "ltr"); document.documentElement.setAttribute("lang", lang()); } catch (e) {}
  }

  return {
    LANGS: LANGS, all: all, lang: lang, setLang: setLang, isChosen: isChosen, info: info,
    isCurated: isCurated, isRTL: isRTL, detect: detect, detectGeo: detectGeo,
    explication: explication, t: t, tIn: tIn, translate: translate, canAutoTranslate: canAutoTranslate,
    googleUrl: googleUrl, applyDir: applyDir
  };
})();
