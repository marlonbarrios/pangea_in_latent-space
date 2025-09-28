// Define variables for Perlin noise offsets
let offsets = [
  { xoff: 500, yoff: 10, roff: 400 }, // Affect
  { xoff: 700, yoff: 20, roff: 500 }, // Cybernetics
  { xoff: 800, yoff: 30, roff: 550 }, // Techno-economy
  { xoff: 1000, yoff: 300, roff: 600 }, // Migratory
  { xoff: 1100, yoff: 400, roff: 700 }, // Cartography
  { xoff: 1200, yoff: 500, roff: 800 }, // Memory
  { xoff: 1300, yoff: 600, roff: 900 }, // Language
  { xoff: 1400, yoff: 700, roff: 1000 }, // Territorio
  { xoff: 1500, yoff: 800, roff: 1100 }, // Pangea_IA
  { xoff: 1600, yoff: 900, roff: 1200 }, // Pangea in latent space (Dortmund October 2025)
  { xoff: 1700, yoff: 1000, roff: 1300 }, // Marcel
  { xoff: 1800, yoff: 1100, roff: 1400 }, // Marlon
  { xoff: 1900, yoff: 1200, roff: 1500 }, // Malu
  { xoff: 2000, yoff: 1300, roff: 1600 }, // Lenara
  { xoff: 2100, yoff: 1400, roff: 1700 }, // Vera
  { xoff: 2200, yoff: 1500, roff: 1800 }, // Oliver
];

// Change default language to English
let currentLanguage = 'en'; // Changed from 'es' to 'en'

// Update translations object with 15 language support
const translations = {
  en: {
    name: "English",
    flag: "🇺🇸",
    concepts: [
      "affect",
      "cybernetics",
      "techno-economy",
      "migratory",
      "cartography",
      "memory",
      "language",
      "territorio",
      "pangea_ia",
      "pangea in latent space (dortmund october 2025)",
      "marcel",
      "marlon",
      "malu",
      "lenara",
      "vera",
      "oliver"
    ],
    controls: {
      title: "controls",
      lines: "lines",
      text: "legend",
      circles: "circles",
      boundary: "boundary",
      trails: "trails",
      fill: "fill",
      groups: "all groups",
      tealGroup: "teal group",
      yellowGroup: "yellow group",
      redGroup: "red group",
      demo: "demo mode",
      menu: "node menu"
    },
    boundary: "pangea in latent space",
    tectonics: "tectonics of otherness"
  },
  es: {
    name: "Español",
    flag: "🇪🇸",
    concepts: [
      "afecto",
      "cibernética",
      "tecno-economía",
      "migratorio",
      "cartografía",
      "memoria",
      "lenguaje",
      "territorio",
      "pangea_ia",
      "pangea en el espacio latente (dortmund octubre 2025)",
      "marcel",
      "marlon",
      "malu",
      "lenara",
      "vera",
      "oliver"
    ],
    controls: {
      title: "controles",
      lines: "líneas",
      text: "legenda",
      circles: "círculos",
      boundary: "borde",
      trails: "rastros",
      fill: "relleno",
      groups: "todos los grupos",
      tealGroup: "grupo turquesa",
      yellowGroup: "grupo amarillo",
      redGroup: "grupo rojo",
      demo: "modo demo",
      menu: "menú de nodos"
    },
    boundary: "pangea en el espacio latente",
    tectonics: "tectónicas de la otredad"
  },
  fr: {
    name: "Français",
    flag: "🇫🇷",
    concepts: [
      "Affect",
      "Cybernétique",
      "Techno-économie",
      "Migratoire",
      "Cartographie",
      "Mémoire",
      "Langage",
      "Territoire",
      "Pangea_IA",
      "Pangea dans l'espace latent (Dortmund Octobre 2025)",
      "marcel",
      "marlon",
      "malu",
      "lenara",
      "vera",
      "oliver"
    ],
    controls: {
      title: "CONTRÔLES",
      lines: "Lignes",
      text: "Légende",
      circles: "Cercles",
      boundary: "Frontière",
      trails: "Traces",
      fill: "Remplissage",
      groups: "Tous les Groupes",
      tealGroup: "Groupe Sarcelle",
      yellowGroup: "Groupe Jaune",
      redGroup: "Groupe Rouge",
      demo: "mode démo",
      menu: "menu des nœuds"
    },
    boundary: "pangea dans l'espace latent",
    tectonics: "TECTONIQUES DE L'ALTÉRITÉ"
  },
  de: {
    name: "Deutsch",
    flag: "🇩🇪",
    concepts: [
      "affect",
      "kybernetik",
      "techno-ökonomie",
      "wandernd",
      "kartographie",
      "gedächtnis",
      "sprache",
      "territorio",
      "pangea_ia",
      "pangea im latenten raum (dortmund oktober 2025)",
      "marcel",
      "marlon",
      "malu",
      "lenara",
      "vera",
      "oliver"
    ],
    controls: {
      title: "STEUERUNG",
      lines: "Linien",
      text: "Legende",
      circles: "Kreise",
      boundary: "Grenze",
      trails: "Spuren",
      fill: "Füllung",
      groups: "Alle Gruppen",
      tealGroup: "Türkise Gruppe",
      yellowGroup: "Gelbe Gruppe",
      redGroup: "Rote Gruppe",
      demo: "Demo-Modus",
      menu: "Knotenmenu"
    },
    boundary: "pangea im latenten raum",
    tectonics: "TEKTONIK DER ANDERSARTIGKEIT"
  },
  pt: {
    name: "Português",
    flag: "🇵🇹",
    concepts: [
      "afeto",
      "cibernética",
      "tecno-economia",
      "migratório",
      "cartografia",
      "memória",
      "linguagem",
      "territorio",
      "pangea_ia",
      "pangea no espaço latente (dortmund outubro 2025)",
      "marcel",
      "marlon",
      "malu",
      "lenara",
      "vera",
      "oliver"
    ],
    controls: {
      title: "CONTROLES",
      lines: "Linhas",
      text: "Legenda",
      circles: "Círculos",
      boundary: "Fronteira",
      trails: "Rastros",
      fill: "Preenchimento",
      groups: "Todos os Grupos",
      tealGroup: "Grupo Turquesa",
      yellowGroup: "Grupo Amarelo",
      redGroup: "Grupo Vermelho",
      demo: "modo demo",
      menu: "menu de nós"
    },
    boundary: "pangea no espaço latente",
    tectonics: "TECTÔNICAS DA ALTERIDADE"
  },
  it: {
    name: "Italiano",
    flag: "🇮🇹",
    concepts: [
      "affetto",
      "cibernetica",
      "tecno-economia",
      "migratorio",
      "cartografia",
      "memoria",
      "linguaggio",
      "territorio",
      "pangea_ia",
      "pangea nello spazio latente (dortmund ottobre 2025)",
      "marcel",
      "marlon",
      "malu",
      "lenara",
      "vera",
      "oliver"
    ],
    controls: {
      title: "CONTROLLI",
      lines: "Linee",
      text: "Legenda",
      circles: "Cerchi",
      boundary: "Confine",
      trails: "Tracce",
      fill: "Riempimento",
      groups: "Tutti i Gruppi",
      tealGroup: "Gruppo Turchese",
      yellowGroup: "Gruppo Giallo",
      redGroup: "Gruppo Rosso",
      demo: "modalità demo",
      menu: "menu nodi"
    },
    boundary: "pangea nello spazio latente",
    tectonics: "TETTONICHE DELL'ALTERITÀ"
  },
  ru: {
    name: "Русский",
    flag: "🇷🇺",
    concepts: [
      "аффект",
      "кибернетика",
      "техно-экономика",
      "миграционный",
      "картография",
      "память",
      "язык",
      "territorio",
      "pangea_ia",
      "пангея в латентном пространстве (дортмунд октябрь 2025)",
      "marcel",
      "marlon",
      "malu",
      "lenara",
      "vera",
      "oliver"
    ],
    controls: {
      title: "УПРАВЛЕНИЕ",
      lines: "Линии",
      text: "Легенда",
      circles: "Круги",
      boundary: "Граница",
      trails: "Следы",
      fill: "Заливка",
      groups: "Все Группы",
      tealGroup: "Бирюзовая Группа",
      yellowGroup: "Желтая Группа",
      redGroup: "Красная Группа",
      demo: "демо режим",
      menu: "меню узлов"
    },
    boundary: "пангея в латентном пространстве",
    tectonics: "ТЕКТОНИКИ ИНАКОВОСТИ"
  },
  zh: {
    name: "中文",
    flag: "🇨🇳",
    concepts: [
      "盘古_AI | 去殖民人工智能",
      "他者性的微妙向量",
      "多元宇宙引擎",
      "移民者",
      "转录赋格与填补空白",
      "追寻被盗的幽灵",
      "变形者 | 未来总有人为你而在",
      "黑暗启蒙、技术共和国与其他构造学"
    ],
    controls: {
      title: "控制",
      lines: "线条",
      text: "图例",
      circles: "圆圈",
      boundary: "边界",
      trails: "轨迹",
      fill: "填充",
      groups: "所有组",
      tealGroup: "青色组",
      yellowGroup: "黄色组",
      redGroup: "红色组",
      demo: "演示模式",
      menu: "节点菜单"
    },
    boundary: "潜在空间中的盘古大陆",
    tectonics: "他者性的构造学"
  },
  ja: {
    name: "日本語",
    flag: "🇯🇵",
    concepts: [
      "パンゲア_AI | 脱植民地AI",
      "他者性の微細なベクトル",
      "多元宇宙エンジン",
      "移民者",
      "転写フーガと隙間を埋める",
      "盗まれた幽霊を追って",
      "プロテウス | 未来にはいつもあなたのための誰かがいる",
      "暗い啓蒙、テクノ共和国、その他のテクトニクス"
    ],
    controls: {
      title: "コントロール",
      lines: "線",
      text: "凡例",
      circles: "円",
      boundary: "境界",
      trails: "軌跡",
      fill: "塗りつぶし",
      groups: "全グループ",
      tealGroup: "ティールグループ",
      yellowGroup: "イエローグループ",
      redGroup: "レッドグループ",
      demo: "デモモード",
      menu: "ノードメニュー"
    },
    boundary: "潜在空間のパンゲア",
    tectonics: "他者性のテクトニクス"
  },
  ar: {
    name: "العربية",
    flag: "🇸🇦",
    concepts: [
      "بانجيا_الذكاء_الاصطناعي | الذكاء الاصطناعي اللاستعماري",
      "متجهات خفية للآخرية",
      "محرك متعدد الأكوان",
      "المهاجر",
      "فوجة النسخ وسد الثغرات",
      "في البحث عن الأشباح المسروقة",
      "بروتيوس | هناك دائماً شخص لك في المستقبل",
      "التنوير المظلم، الجمهورية التقنية، وتكتونيات أخرى"
    ],
    controls: {
      title: "التحكم",
      lines: "خطوط",
      text: "وسيلة الإيضاح",
      circles: "دوائر",
      boundary: "حدود",
      trails: "مسارات",
      fill: "تعبئة",
      groups: "جميع المجموعات",
      tealGroup: "المجموعة الزرقاء المخضرة",
      yellowGroup: "المجموعة الصفراء",
      redGroup: "المجموعة الحمراء",
      demo: "وضع العرض التوضيحي",
      menu: "قائمة العقد"
    },
    boundary: "بانجيا في الفضاء الكامن",
    tectonics: "تكتونيات الآخرية"
  },
  hi: {
    name: "हिन्दी",
    flag: "🇮🇳",
    concepts: [
      "पैंजिया_एआई | उपनिवेशवाद-विरोधी एआई",
      "अन्यता के सूक्ष्म सदिश",
      "बहुविश्व इंजन",
      "प्रवासी",
      "ट्रांसक्रिप्शनल फ्यूग और अंतराल भरना",
      "चुराए गए भूतों की खोज में",
      "प्रोटियस | भविष्य में हमेशा आपके लिए कोई न कोई है",
      "अंधकार प्रबोधन, तकनीकी गणराज्य, और अन्य भूगर्भशास्त्र"
    ],
    controls: {
      title: "नियंत्रण",
      lines: "रेखाएं",
      text: "किंवदंती",
      circles: "वृत्त",
      boundary: "सीमा",
      trails: "पगडंडियां",
      fill: "भरना",
      groups: "सभी समूह",
      tealGroup: "टील समूह",
      yellowGroup: "पीला समूह",
      redGroup: "लाल समूह",
      demo: "डेमो मोड",
      menu: "नोड मेनू"
    },
    boundary: "गुप्त स्थान में पैंजिया",
    tectonics: "अन्यता के भूगर्भशास्त्र"
  },
  ko: {
    name: "한국어",
    flag: "🇰🇷",
    concepts: [
      "판게아_AI | 탈식민 인공지능",
      "타자성의 미묘한 벡터",
      "다원우주 엔진",
      "이민자",
      "전사 푸가와 간극 메우기",
      "도난당한 유령들을 찾아서",
      "프로테우스 | 미래에는 항상 당신을 위한 누군가가 있다",
      "어둠의 계몽, 테크노 공화국, 그리고 다른 지각구조학"
    ],
    controls: {
      title: "제어",
      lines: "선",
      text: "범례",
      circles: "원",
      boundary: "경계",
      trails: "궤적",
      fill: "채우기",
      groups: "모든 그룹",
      tealGroup: "청록색 그룹",
      yellowGroup: "노란색 그룹",
      redGroup: "빨간색 그룹",
      demo: "데모 모드",
      menu: "노드 메뉴"
    },
    boundary: "잠재 공간의 판게아",
    tectonics: "타자성의 지각구조학"
  },
  sw: {
    name: "Kiswahili",
    flag: "🇰🇪",
    concepts: [
      "Pangea_AI | AI ya Kuondoa Ukoloni",
      "Mielekeo Finyu ya Utofauti",
      "Injini ya Ulimwengu Mwingi",
      "Mhamiaji",
      "Fugue ya Kunakili na Kujaza Mapengo",
      "Kutafuta Mizuka Iliyoibiwa",
      "Proteus | Kuna Mtu Daima Kwako Katika Siku Zijazo",
      "Mwanga wa Giza, Jamhuri ya Teknolojia, na Tektoniki Nyingine"
    ],
    controls: {
      title: "UDHIBITI",
      lines: "Mistari",
      text: "Ufafanuzi",
      circles: "Mzunguko",
      boundary: "Mpaka",
      trails: "Njia",
      fill: "Kujaza",
      groups: "Makundi Yote",
      tealGroup: "Kundi la Teal",
      yellowGroup: "Kundi la Manjano",
      redGroup: "Kundi la Nyekundu",
      demo: "hali ya onyesho",
      menu: "menyu ya nodi"
    },
    boundary: "pangea katika nafasi ya siri",
    tectonics: "TEKTONIKI INOŚCI"
  },
  qu: {
    name: "Runasimi",
    flag: "🏳️",
    concepts: [
      "Pangea_AI | Mana Yachay Antikolonial",
      "Huk Kayninpa Llumpay Vectorkuna",
      "Achka Pachakuna Motor",
      "Puriq Runa",
      "Qillqay Fugue Chinkasqa Huntachiy",
      "Suwa Ayakuna Maskay",
      "Proteus | Hamuq Pachapi Kanki Pipas",
      "Yana K'anchay, Tekno Republika, Huk Tektonikakuna"
    ],
    controls: {
      title: "KAMACHIY",
      lines: "Siqi",
      text: "Willakuy",
      circles: "Muyuy",
      boundary: "Sayay",
      trails: "Ñan",
      fill: "Hunt'ay",
      groups: "Llapa Huñu",
      tealGroup: "Teal Huñu",
      yellowGroup: "Q'illu Huñu",
      redGroup: "Puka Huñu",
      demo: "demo kaq",
      menu: "nodo menu"
    },
    boundary: "pangea pakasqa espaciopi",
    tectonics: "HUKKUNAKUNA TEKTONIKAKUNA"
  },
  tr: {
    name: "Türkçe",
    flag: "🇹🇷",
    concepts: [
      "Etki",
      "Sibernetik",
      "Tekno-ekonomi",
      "Göçebe",
      "Haritacılık",
      "Hafıza",
      "Dil",
      "Territorio",
      "Pangea_IA",
      "Gizli uzayda pangea (Dortmund Ekim 2025)"
    ],
    controls: {
      title: "KONTROLLER",
      lines: "Çizgiler",
      text: "Açıklama",
      circles: "Daireler",
      boundary: "Sınır",
      trails: "İzler",
      fill: "Dolgu",
      groups: "Tüm Gruplar",
      tealGroup: "Deniz Yeşili Grup",
      yellowGroup: "Sarı Grup",
      redGroup: "Kırmızı Grup",
      demo: "demo modu",
      menu: "düğüm menüsü"
    },
    boundary: "gizli uzayda pangea",
    tectonics: "ÖTEKİLİĞİN TEKTONİKLERİ"
  }
};
  
  // Visibility flags
let showLines = true;
let showEllipses = false;
let showText = false; // Make sure text is off by default
  
  let slider; // Slider for controlling animation speed

// Add these variables at the top with other global variables
let hoveredIndex = -1; // Track which circle is being hovered

// Add to the global variables
let showBoundary = true;

// Updated URLs object with single links per concept
const urls = {
  // English URLs
  "affect": "https://marlonbarrios.github.io/affects/",
  "cybernetics": "https://marlonbarrios.github.io/cybernetics/",
  "techno-economy": "https://marlonbarrios.github.io/techno-economy/",
  "migratory": "https://marlonbarrios.github.io/migratory/",
  "cartography": "https://marlonbarrios.github.io/cartography/",
  "memory": "https://marlonbarrios.github.io/memory/",
  "language": "https://marlonbarrios.github.io/language/",
  "territorio": "https://marlonbarrios.github.io/territorio/",
  "pangea_ia": "https://marlonbarrios.github.io/pangea_IA/",
  "pangea in latent space (dortmund october 2025)": "https://marlonbarrios.github.io/pangea_in_latent_space-_tectonics_of-_otherness/",
  "marcel": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",
  "marlon": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",
  "malu": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",
  "lenara": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",
  "vera": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",
  "oliver": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",

  // Spanish URLs (same destinations)
  "afecto": "https://marlonbarrios.github.io/affects/",
  "cibernética": "https://marlonbarrios.github.io/cybernetics/",
  "tecno-economía": "https://marlonbarrios.github.io/techno-economy/",
  "migratorio": "https://marlonbarrios.github.io/migratory/",
  "cartografía": "https://marlonbarrios.github.io/cartography/",
  "memoria": "https://marlonbarrios.github.io/memory/",
  "lenguaje": "https://marlonbarrios.github.io/language/",
  "territorio": "https://marlonbarrios.github.io/territorio/",
  "pangea_ia": "https://marlonbarrios.github.io/pangea_IA/",
  "pangea en el espacio latente (dortmund octubre 2025)": "https://marlonbarrios.github.io/pangea_in_latent_space-_tectonics_of-_otherness/",
  "marcel": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",
  "marlon": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",
  "malu": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",
  "lenara": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",
  "vera": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",
  "oliver": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",

  // French URLs (same destinations)
  "affect": "https://marlonbarrios.github.io/affects/",
  "cybernétique": "https://marlonbarrios.github.io/cybernetics/",
  "techno-économie": "https://marlonbarrios.github.io/techno-economy/",
  "migratoire": "https://marlonbarrios.github.io/migratory/",
  "cartographie": "https://marlonbarrios.github.io/cartography/",
  "mémoire": "https://marlonbarrios.github.io/memory/",
  "langage": "https://marlonbarrios.github.io/language/",
  "territoire": "https://marlonbarrios.github.io/territorio/",
  "pangea_ia": "https://marlonbarrios.github.io/pangea_IA/",
  "pangea dans l'espace latent (dortmund octobre 2025)": "https://marlonbarrios.github.io/pangea_in_latent_space-_tectonics_of-_otherness/",
  "marcel": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",
  "marlon": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",
  "malu": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",
  "lenara": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",
  "vera": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",
  "oliver": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",

  // Turkish URLs (same destinations)
  "etki": "https://marlonbarrios.github.io/affects/",
  "sibernetik": "https://marlonbarrios.github.io/cybernetics/",
  "tekno-ekonomi": "https://marlonbarrios.github.io/techno-economy/",
  "göçebe": "https://marlonbarrios.github.io/migratory/",
  "haritacılık": "https://marlonbarrios.github.io/cartography/",
  "hafıza": "https://marlonbarrios.github.io/memory/",
  "dil": "https://marlonbarrios.github.io/language/",
  "territorio": "https://marlonbarrios.github.io/territorio/",
  "pangea_ia": "https://marlonbarrios.github.io/pangea_IA/",
  "gizli uzayda pangea (dortmund ekim 2025)": "https://marlonbarrios.github.io/pangea_in_latent_space-_tectonics_of-_otherness/",
  "marcel": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",
  "marlon": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",
  "malu": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",
  "lenara": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",
  "vera": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",
  "oliver": "https://theaterimdepot.de/de/programm/kalender/pangea-in-latent-space",

  // German URLs (same destinations)
  "affect": "https://marlonbarrios.github.io/affects/",
  "kybernetik": "https://marlonbarrios.github.io/cybernetics/",
  "techno-ökonomie": "https://marlonbarrios.github.io/techno-economy/",
  "wandernd": "https://marlonbarrios.github.io/migratory/",
  "kartographie": "https://marlonbarrios.github.io/cartography/",
  "gedächtnis": "https://marlonbarrios.github.io/memory/",
  "sprache": "https://marlonbarrios.github.io/language/",
  "territorio": "https://marlonbarrios.github.io/territorio/",
  "pangea_ia": "https://marlonbarrios.github.io/pangea_IA/",
  "pangea im latenten raum (dortmund oktober 2025)": "https://marlonbarrios.github.io/pangea_in_latent_space-_tectonics_of-_otherness/",

  // Portuguese URLs (same destinations)
  "afeto": "https://marlonbarrios.github.io/affects/",
  "cibernética": "https://marlonbarrios.github.io/cybernetics/",
  "tecno-economia": "https://marlonbarrios.github.io/techno-economy/",
  "migratório": "https://marlonbarrios.github.io/migratory/",
  "cartografia": "https://marlonbarrios.github.io/cartography/",
  "memória": "https://marlonbarrios.github.io/memory/",
  "linguagem": "https://marlonbarrios.github.io/language/",
  "territorio": "https://marlonbarrios.github.io/territorio/",
  "pangea_ia": "https://marlonbarrios.github.io/pangea_IA/",
  "pangea no espaço latente (dortmund outubro 2025)": "https://marlonbarrios.github.io/pangea_in_latent_space-_tectonics_of-_otherness/",

  // Italian URLs (same destinations)
  "affetto": "https://marlonbarrios.github.io/affects/",
  "cibernetica": "https://marlonbarrios.github.io/cybernetics/",
  "tecno-economia": "https://marlonbarrios.github.io/techno-economy/",
  "migratorio": "https://marlonbarrios.github.io/migratory/",
  "cartografia": "https://marlonbarrios.github.io/cartography/",
  "memoria": "https://marlonbarrios.github.io/memory/",
  "linguaggio": "https://marlonbarrios.github.io/language/",
  "territorio": "https://marlonbarrios.github.io/territorio/",
  "pangea_ia": "https://marlonbarrios.github.io/pangea_IA/",
  "pangea nello spazio latente (dortmund ottobre 2025)": "https://marlonbarrios.github.io/pangea_in_latent_space-_tectonics_of-_otherness/",

  // Russian URLs (same destinations)
  "аффект": "https://marlonbarrios.github.io/affects/",
  "кибернетика": "https://marlonbarrios.github.io/cybernetics/",
  "техно-экономика": "https://marlonbarrios.github.io/techno-economy/",
  "миграционный": "https://marlonbarrios.github.io/migratory/",
  "картография": "https://marlonbarrios.github.io/cartography/",
  "память": "https://marlonbarrios.github.io/memory/",
  "язык": "https://marlonbarrios.github.io/language/",
  "territorio": "https://marlonbarrios.github.io/territorio/",
  "pangea_ia": "https://marlonbarrios.github.io/pangea_IA/",
  "пангея в латентном пространстве (дортмунд октябрь 2025)": "https://marlonbarrios.github.io/pangea_in_latent_space-_tectonics_of-_otherness/",

  // Chinese URLs (same destinations)
  "情感": "https://marlonbarrios.github.io/affects/",
  "控制论": "https://marlonbarrios.github.io/cybernetics/",
  "技术经济": "https://marlonbarrios.github.io/techno-economy/",
  "迁移": "https://marlonbarrios.github.io/migratory/",
  "制图": "https://marlonbarrios.github.io/cartography/",
  "记忆": "https://marlonbarrios.github.io/memory/",
  "语言": "https://marlonbarrios.github.io/language/",
  "territorio": "https://marlonbarrios.github.io/territorio/",
  "pangea_ia": "https://marlonbarrios.github.io/pangea_IA/",
  "潜在空间中的盘古大陆（多特蒙德2025年10月）": "https://marlonbarrios.github.io/pangea_in_latent_space-_tectonics_of-_otherness/",

  // Japanese URLs (same destinations)
  "感情": "https://marlonbarrios.github.io/affects/",
  "サイバネティクス": "https://marlonbarrios.github.io/cybernetics/",
  "テクノ経済": "https://marlonbarrios.github.io/techno-economy/",
  "移住": "https://marlonbarrios.github.io/migratory/",
  "地図作成": "https://marlonbarrios.github.io/cartography/",
  "記憶": "https://marlonbarrios.github.io/memory/",
  "言語": "https://marlonbarrios.github.io/language/",
  "territorio": "https://marlonbarrios.github.io/territorio/",
  "pangea_ia": "https://marlonbarrios.github.io/pangea_IA/",
  "潜在空間のパンゲア（ドルトムント2025年10月）": "https://marlonbarrios.github.io/pangea_in_latent_space-_tectonics_of-_otherness/",

  // Arabic URLs (same destinations)
  "تأثير": "https://marlonbarrios.github.io/affects/",
  "السيبرانية": "https://marlonbarrios.github.io/cybernetics/",
  "الاقتصاد التقني": "https://marlonbarrios.github.io/techno-economy/",
  "هجرة": "https://marlonbarrios.github.io/migratory/",
  "رسم الخرائط": "https://marlonbarrios.github.io/cartography/",
  "ذاكرة": "https://marlonbarrios.github.io/memory/",
  "لغة": "https://marlonbarrios.github.io/language/",
  "territorio": "https://marlonbarrios.github.io/territorio/",
  "pangea_ia": "https://marlonbarrios.github.io/pangea_IA/",
  "بانجيا في الفضاء الكامن (دورتموند أكتوبر 2025)": "https://marlonbarrios.github.io/pangea_in_latent_space-_tectonics_of-_otherness/",

  // Hindi URLs (same destinations)
  "प्रभाव": "https://marlonbarrios.github.io/affects/",
  "साइबरनेटिक्स": "https://marlonbarrios.github.io/cybernetics/",
  "तकनीकी-अर्थव्यवस्था": "https://marlonbarrios.github.io/techno-economy/",
  "प्रवासी": "https://marlonbarrios.github.io/migratory/",
  "मानचित्रण": "https://marlonbarrios.github.io/cartography/",
  "स्मृति": "https://marlonbarrios.github.io/memory/",
  "भाषा": "https://marlonbarrios.github.io/language/",
  "territorio": "https://marlonbarrios.github.io/territorio/",
  "pangea_ia": "https://marlonbarrios.github.io/pangea_IA/",
  "गुप्त स्थान में पैंजिया (डॉर्टमुंड अक्टूबर 2025)": "https://marlonbarrios.github.io/pangea_in_latent_space-_tectonics_of-_otherness/",

  // Korean URLs (same destinations)
  "감정": "https://marlonbarrios.github.io/affects/",
  "사이버네틱스": "https://marlonbarrios.github.io/cybernetics/",
  "기술경제": "https://marlonbarrios.github.io/techno-economy/",
  "이주": "https://marlonbarrios.github.io/migratory/",
  "지도제작": "https://marlonbarrios.github.io/cartography/",
  "기억": "https://marlonbarrios.github.io/memory/",
  "언어": "https://marlonbarrios.github.io/language/",
  "territorio": "https://marlonbarrios.github.io/territorio/",
  "pangea_ia": "https://marlonbarrios.github.io/pangea_IA/",
  "잠재 공간의 판게아 (도르트문트 2025년 10월)": "https://marlonbarrios.github.io/pangea_in_latent_space-_tectonics_of-_otherness/",

  // Swahili URLs (same destinations)
  "athari": "https://marlonbarrios.github.io/affects/",
  "saibanetiiki": "https://marlonbarrios.github.io/cybernetics/",
  "uchumi wa kiteknolojia": "https://marlonbarrios.github.io/techno-economy/",
  "uhamiaji": "https://marlonbarrios.github.io/migratory/",
  "uchoraji ramani": "https://marlonbarrios.github.io/cartography/",
  "kumbukumbu": "https://marlonbarrios.github.io/memory/",
  "lugha": "https://marlonbarrios.github.io/language/",
  "territorio": "https://marlonbarrios.github.io/territorio/",
  "pangea_ia": "https://marlonbarrios.github.io/pangea_IA/",
  "pangea katika nafasi ya latent (dortmund oktoba 2025)": "https://marlonbarrios.github.io/pangea_in_latent_space-_tectonics_of-_otherness/",

  // Quechua URLs (same destinations)
  "kuyay": "https://marlonbarrios.github.io/affects/",
  "cibernética": "https://marlonbarrios.github.io/cybernetics/",
  "tecnología qullqi": "https://marlonbarrios.github.io/techno-economy/",
  "puriy": "https://marlonbarrios.github.io/migratory/",
  "mapa ruray": "https://marlonbarrios.github.io/cartography/",
  "yuyay": "https://marlonbarrios.github.io/memory/",
  "simi": "https://marlonbarrios.github.io/language/",
  "territorio": "https://marlonbarrios.github.io/territorio/",
  "pangea_ia": "https://marlonbarrios.github.io/pangea_IA/",
  "pangea pakana espaciopi (dortmund octubre 2025)": "https://marlonbarrios.github.io/pangea_in_latent_space-_tectonics_of-_otherness/"
};

// Add new global variables for boundary animation
let boundaryNoiseOffset = 0;
const NOISE_INCREMENT = 0.02;
const ELASTICITY = 40; // Controls how much the boundary can stretch

// Add to global variables
let controlPanelWidth = 180;  // Narrower width
let controlPanelHeight = 290; // Fixed height to fit all controls (increased for M key)
let controlPanelMargin = 20;  // Fixed margin

// Update the COLORS object with the new palette
const COLORS = {
  darkBlue: "#26547c",
  red: "#ef476f",
  yellow: "#ffd166",
  teal: "#06d6a0",
  white: "#fcfcfc"
};

// Add new global variable
let showPangeaConnections = false;

// Add a new constant for base node size
const BASE_NODE_SIZE = 10; // Further reduced from 15 to make circles even smaller

// Update the boundary text variables
const BOUNDARY_TEXT = "pangea in latent space";
let boundaryPosition = 0;
let textWave = 10; // Increased from 0 to 10
const BOUNDARY_OFFSET =-50; // Increased from 60 to 100 to keep text further from boundary

// Add new state variable at the top
let useVisualTrails = false;
let frozenPositions = null; // Cache positions when tectonics is 0
let previousSpeed = -1; // Track speed changes
let showBoundaryFill = true; // New variable for boundary fill

// Menu system variables
let showNodeMenu = false;
let nodeMenuX = 50;
let nodeMenuY = 50;

// Add these variables at the top
let outsideBoids = [];
let insideBoids = [];
const NUM_OUTSIDE_BOIDS = 60;  // Back to original
const NUM_INSIDE_BOIDS = 45;   // Back to original
const NUM_CHASE_BOIDS = 50;    // Back to original

// Add new boid array
let chaseBoids = [];  // Third population
let showGroups = true;  // Changed from showPopulation
let showOutsideGroup = true;  // Changed from showOutsidePopulation
let showInsideGroup = true;   // Changed from showInsidePopulation
let showChaseGroup = true;    // Changed from showChasePopulation

// Add global variable to track hovered topic
let hoveredTopicIndex = -1; // DISABLED - no list interface

// Demo mode variables
let demoMode = false;
let demoTimer = 0;
let demoInterval = 5000; // 5 seconds per state
let currentDemoState = 0;
let demoStates = [];

// Add a constant to identify the special node
const PANGEA_LATENT_SPACE_INDEX = 9; // Index of "Pangea in latent space" in the concepts array

// Add variables for link popup menu
let showLinkMenu = false;
let linkMenuX = 0;
let linkMenuY = 0;
let linkMenuConcept = "";
let linkMenuLinks = {};

// Add Boid class
class Boid {
  constructor(x, y, type) {
    this.position = createVector(x, y);
    this.velocity = p5.Vector.random2D();
    this.velocity.setMag(random(2, 4));
    this.acceleration = createVector();
    this.maxForce = 0.15;
    this.maxSpeed = 2.5;
    this.type = type; // 'outside', 'inside', or 'chase'
    this.size = 4.0;
  }

  edges() {
    if (this.position.x > width) this.position.x = 0;
    if (this.position.x < 0) this.position.x = width;
    if (this.position.y > height) this.position.y = 0;
    if (this.position.y < 0) this.position.y = height;
  }

  align(boids) {
    let perceptionRadius = 40;
    let steering = createVector();
    let total = 0;
    for (let other of boids) {
      let d = dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
      if (other != this && d < perceptionRadius) {
        steering.add(other.velocity);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  cohesion(boids) {
    let perceptionRadius = 80;
    let steering = createVector();
    let total = 0;
    for (let other of boids) {
      let d = dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
      if (other != this && d < perceptionRadius) {
        steering.add(other.position);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.sub(this.position);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  separation(boids) {
    let perceptionRadius = 40;
    let steering = createVector();
    let total = 0;
    for (let other of boids) {
      let d = dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
      if (other != this && d < perceptionRadius) {
        let diff = p5.Vector.sub(this.position, other.position);
        diff.div(d * d);
        steering.add(diff);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  seekBoundary(hull) {
    if (!hull || hull.length < 3) return createVector();
    
    let steering = createVector();
    let closestPoint = null;
    let minDist = Infinity;
    
    // Find closest point on boundary
    for (let i = 0; i < hull.length; i++) {
      let point = hull[i];
      let nextPoint = hull[(i + 1) % hull.length];
      
      // Find closest point on the line segment
      let closest = this.getClosestPointOnLine(point, nextPoint);
      let d = dist(this.position.x, this.position.y, closest.x, closest.y);
      
      if (d < minDist) {
        minDist = d;
        closestPoint = closest;
      }
    }
    
    if (closestPoint) {
      // All boids try to stay inside
      if (minDist < 50) {
        // If close to boundary, steer away from it
        steering = p5.Vector.sub(this.position, closestPoint);
      } else if (!this.isInsideHull(hull)) {
        // If outside, steer back inside
        steering = p5.Vector.sub(closestPoint, this.position);
        steering.mult(2); // Stronger force to return inside
      }
      
      if (steering.mag() > 0) {
        steering.setMag(this.maxSpeed);
        steering.sub(this.velocity);
        steering.limit(this.maxForce * 1.5); // Stronger boundary force
      }
    }
    
    return steering;
  }

  // Helper method to check if boid is inside hull
  isInsideHull(hull) {
    let inside = false;
    for (let i = 0, j = hull.length - 1; i < hull.length; j = i++) {
      let xi = hull[i].x, yi = hull[i].y;
      let xj = hull[j].x, yj = hull[j].y;
      
      if (((yi > this.position.y) !== (yj > this.position.y)) &&
          (this.position.x < (xj - xi) * (this.position.y - yi) / (yj - yi) + xi)) {
        inside = !inside;
      }
    }
    return inside;
  }

  // Helper method to find closest point on line segment
  getClosestPointOnLine(a, b) {
    let ax = this.position.x - a.x;
    let ay = this.position.y - a.y;
    let bx = b.x - a.x;
    let by = b.y - a.y;
    
    let t = (ax * bx + ay * by) / (bx * bx + by * by);
    t = constrain(t, 0, 1);
    
    return createVector(
      a.x + t * bx,
      a.y + t * by
    );
  }

  // Add new method to avoid circles
  avoidCircles(positions) {
    let steering = createVector();
    
    positions.forEach((pos, index) => {
      if (index === 0) return; // Skip Pangea node
      
      let size = (pos.connections + 1) * BASE_NODE_SIZE;
      let d = dist(this.position.x, this.position.y, pos.x, pos.y);
      
      // If boid is too close to circle, steer away
      let avoidanceRadius = size/2 + 20; // Extra padding
      if (d < avoidanceRadius) {
        let diff = p5.Vector.sub(this.position, createVector(pos.x, pos.y));
        diff.div(d * d); // Stronger avoidance when closer
        steering.add(diff);
      }
    });
    
    if (steering.mag() > 0) {
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce * 2); // Stronger avoidance force
    }
    return steering;
  }

  // Add method to chase or be attracted to other populations
  chase(boids) {
    let steering = createVector();
    let perceptionRadius = 100;
    let total = 0;
    
    for (let other of boids) {
      if (other === this) continue;
      
      let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
      if (d < perceptionRadius) {
        let force = p5.Vector.sub(other.position, this.position);
        
        // Different behaviors based on type
        if (this.type === 'outside') {
          // Outside boids chase inside boids
          if (other.type === 'inside') force.mult(1);
          else if (other.type === 'chase') force.mult(-1);
        } else if (this.type === 'inside') {
          // Inside boids chase chase boids
          if (other.type === 'chase') force.mult(1);
          else if (other.type === 'outside') force.mult(-1);
        } else if (this.type === 'chase') {
          // Chase boids chase outside boids
          if (other.type === 'outside') force.mult(1);
          else if (other.type === 'inside') force.mult(-1);
        }
        
        steering.add(force);
        total++;
      }
    }
    
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  // Update flock method to include chase behavior
  flock(boids, hull, positions) {
    let alignment = this.align(boids);
    let cohesion = this.cohesion(boids);
    let separation = this.separation(boids);
    let boundary = this.seekBoundary(hull);
    let avoidance = this.avoidCircles(positions);
    let chase = this.chase(boids);
    
    alignment.mult(0.6);
    cohesion.mult(0.6);
    separation.mult(1.6);
    boundary.mult(1.0);
    avoidance.mult(2.2);
    chase.mult(1.5);  // Chase force
    
    this.acceleration.add(alignment);
    this.acceleration.add(cohesion);
    this.acceleration.add(separation);
    this.acceleration.add(boundary);
    this.acceleration.add(avoidance);
    this.acceleration.add(chase);
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.acceleration.mult(0);
  }

  show() {
    strokeWeight(this.size);
    // Different colors for each type
    let boidColor;
    if (this.type === 'outside') {
      boidColor = COLORS.teal + "CC";
    } else if (this.type === 'inside') {
      boidColor = COLORS.yellow + "CC";
    } else {
      boidColor = COLORS.red + "CC"; // Chase boids are red
    }
    stroke(boidColor);
    point(this.position.x, this.position.y);
  }
}
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
  background(COLORS.darkBlue);
  
  // Initialize with English
  currentLanguage = 'en';
  
  // Create slider with very low initial value
  slider = createSlider(0.0001, 0.003, 0.0001, 0.0001); // Further reduced max from 0.005 to 0.003
  slider.position(20, height - 40);
  slider.style('width', '120px');
  
  // Add language selector with English as default
  addLanguageSelector();
  
  // Initialize boids
  for (let i = 0; i < NUM_OUTSIDE_BOIDS; i++) {
    outsideBoids.push(new Boid(random(width), random(height), 'outside'));
  }
  
  // Initialize inside boids
  for (let i = 0; i < NUM_INSIDE_BOIDS; i++) {
    insideBoids.push(new Boid(width/2, height/2, 'inside'));
  }

  // Initialize chase boids
  for (let i = 0; i < NUM_CHASE_BOIDS; i++) {
    chaseBoids.push(new Boid(random(width), random(height), 'chase'));
  }
  
  // Update type for existing boids
  for (let boid of outsideBoids) {
    boid.type = 'outside';
  }
  for (let boid of insideBoids) {
    boid.type = 'inside';
  }
  
  updateControlPanelDimensions(); // Initialize panel dimensions
  
  // Initialize demo states
  initializeDemoStates();
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    
    // Update slider position responsively
  slider.position(20, height - 40);
    
    // Update language selector position to top-right
    if (languageSelect) {
      let rightMargin = 20; // Same margin as control panel
      languageSelect.position(width - controlPanelWidth - rightMargin, 20); // Same width as control panel
    }
    
    // Update control panel dimensions
    updateControlPanelDimensions();
  }
  
  function draw() {
    // Reset to crosshairs at start of each frame
    cursor(CROSS);
    
    // Handle demo mode
    if (demoMode) {
      handleDemoMode();
      
      // Debug info (remove this later)
      if (frameCount % 60 === 0) { // Every second
        let timeElapsed = millis() - demoTimer;
        let timeRemaining = demoInterval - timeElapsed;
        console.log('Demo mode active - Time remaining:', (timeRemaining / 1000).toFixed(1), 'seconds');
      }
    }

    // Instead of clearing with background, use transparent overlay
    if (useVisualTrails) {
      // Add multiple semi-transparent layers for more intense trails
      push();
      noStroke();
      
      // First layer - very transparent for long trails
      fill(COLORS.darkBlue + '10');
      rect(0, 0, width, height);
      
      // Second layer - slightly more opaque for medium trails
      fill(COLORS.darkBlue + '08');
      rect(0, 0, width, height);
      
      // Add a subtle blur effect
      drawingContext.filter = 'blur(1px)';
      pop();
    } else {
      background(COLORS.darkBlue);
      drawingContext.filter = 'none';
    }

    // Get speed from slider with very small increments
    let speed = slider.value();

    // Update positions with minimal movement - only if speed > 0
    if (speed > 0) {
    offsets.forEach(off => {
      off.xoff += speed;
      off.yoff += speed;
      off.roff += speed;
    });
    } else if (frameCount % 60 === 0) {
      // Debug: log first offset when speed is 0
      console.log('Speed is 0, first offset:', offsets[0].xoff.toFixed(6), offsets[0].yoff.toFixed(6));
    }

    // Draw all elements
    drawConceptsAndLines(speed);
    drawControlPanel();
    drawTopicsList();
  drawLinkMenu();
  drawNodeMenu();

    // Draw slider label with same style as concept text
    push();
    textAlign(LEFT, CENTER);
    textSize(16); // Match concept text size
    textStyle(BOLD); // Match concept text style
    
    // Add text shadow/outline effect like concept text
    stroke(0, 0, 0, 150); // Dark outline
    strokeWeight(3);
    fill(255, 255, 255, 255); // Bright white text
    text(translations[currentLanguage].tectonics, 20, height - 55);
    
    // Draw text again without stroke for clean appearance
    noStroke();
    fill(255, 255, 255, 255);
    text(translations[currentLanguage].tectonics, 20, height - 55);
    pop();
  }
  
  function drawConceptsAndLines(speed = 0) {
    let positions;
    
    // Check if speed just changed to 0 - if so, we need to calculate once more to cache
    let justStopped = (previousSpeed > 0 && speed === 0);
    
    // Debug logging
    if (speed === 0 && frameCount % 60 === 0) { // Log once per second when speed is 0
      console.log('Speed is 0. frozenPositions exists:', frozenPositions !== null, 'justStopped:', justStopped);
    }
    
    if (speed === 0 && frozenPositions !== null && !justStopped) {
      // Use cached positions when tectonics is frozen (and not just stopped)
      positions = frozenPositions;
      if (frameCount % 60 === 0) console.log('Using cached positions');
    } else {
      // Calculate new positions
      positions = offsets.map((off, index) => {
      let x = noise(off.xoff) * width;
      let y = noise(off.yoff) * height;
      
      // Keep all nodes within reasonable bounds to stay inside boundary
        let centerX = width/2;
        let centerY = height/2;
        let dx = x - centerX;
        let dy = y - centerY;
        let distance = sqrt(dx * dx + dy * dy);
        
      // Much tighter constraints to keep nodes well inside boundary
      let maxDistance;
      if (index === PANGEA_LATENT_SPACE_INDEX) {
        maxDistance = min(width, height) * 0.25; // Pangea node stays much closer to center
      } else {
        maxDistance = min(width, height) * 0.2; // All other nodes stay within 20% of screen (much tighter)
      }
      
        if (distance > maxDistance) {
          let angle = atan2(dy, dx);
          x = centerX + cos(angle) * maxDistance;
          y = centerY + sin(angle) * maxDistance;
      }
      
      return {
        x: x,
        y: y,
        connections: 0
      };
    });
    
    // Cache positions immediately when speed becomes 0
    if (speed === 0) {
      frozenPositions = positions.map(pos => ({...pos})); // Deep copy
    } else {
      frozenPositions = null; // Clear cache when moving
    }
    
    // Update previous speed for next frame
    previousSpeed = speed;
  }
  
  // Count connections without special case for index 0
      positions.forEach((pos, i) => {
        for (let j = i + 1; j < positions.length; j++) {
          let d = dist(pos.x, pos.y, positions[j].x, positions[j].y);
      if (d < 200) {
        positions[i].connections++;
        positions[j].connections++;
      }
    }
  });

  // Collision avoidance without skipping any nodes - only if tectonics is active
  if (speed > 0) {
  const REPULSION_STRENGTH = 0.5;
  const ITERATIONS = 5;
  const MIN_DISTANCE = 150;

  for (let iter = 0; iter < ITERATIONS; iter++) {
    positions.forEach((pos1, i) => {
      let size1 = (pos1.connections + 1) * BASE_NODE_SIZE;
      let radius1 = size1 / 2;

      positions.forEach((pos2, j) => {
        if (i >= j) return; // Only skip self and already processed
        
        let size2 = (pos2.connections + 1) * BASE_NODE_SIZE;
        let radius2 = size2 / 2;
        
        let minDist = Math.max((radius1 + radius2) * 1.2, MIN_DISTANCE);
        let d = dist(pos1.x, pos1.y, pos2.x, pos2.y);
        
        if (d < minDist) {
          let angle = atan2(pos2.y - pos1.y, pos2.x - pos1.x);
          let overlap = minDist - d;
          
          let moveX = cos(angle) * overlap * REPULSION_STRENGTH;
          let moveY = sin(angle) * overlap * REPULSION_STRENGTH;
          
          pos1.x -= moveX * 0.5;
          pos1.y -= moveY * 0.5;
          pos2.x += moveX * 0.5;
          pos2.y += moveY * 0.5;
          
          let padding = 50;
          pos1.x = constrain(pos1.x, radius1 + padding, width - radius1 - padding);
          pos1.y = constrain(pos1.y, radius1 + padding, height - radius1 - padding);
          pos2.x = constrain(pos2.x, radius2 + padding, width - radius2 - padding);
          pos2.y = constrain(pos2.y, radius2 + padding, height - radius2 - padding);
        }
      });
    });
    }
  }

  // Draw lines without skipping any nodes
  if (showLines) {
    positions.forEach((pos1, i) => {
      positions.forEach((pos2, j) => {
        if (i >= j) return;
        let d = dist(pos1.x, pos1.y, pos2.x, pos2.y);
        if (d < 200) {
          let thickness = map(d, 0, 200, 8, 1);
          stroke(COLORS.white);
          strokeWeight(thickness);
          line(pos1.x, pos1.y, pos2.x, pos2.y);
        }
      });
    });
  }

  // Draw boundary if enabled
  if (showBoundary) {
    let hullPoints = [];
    positions.forEach((pos, index) => {
      if (index === 0) return;
      let size = (pos.connections + 1) * 20;
      let radius = (size / 2) * 1.5; // Make boundary 50% larger than circles
      
      // Create more points around each circle for smoother boundary
      for (let angle = 0; angle < TWO_PI; angle += PI/8) {
        hullPoints.push({
          x: pos.x + cos(angle) * radius,
          y: pos.y + sin(angle) * radius
        });
      }
    });
    
    let hull = getConvexHull(hullPoints);
    if (hull.length > 2) {
      // Store points for text placement
      boundaryTextPoints = [];
      
      // Only draw fill if enabled
      if (showBoundaryFill) {
        beginShape();
        noStroke();
        let fillColor = color(COLORS.teal);
        fillColor.setAlpha(30); // More transparent fill
        fill(fillColor);
        
        // Draw the shape with fill
        for (let i = 0; i < hull.length; i++) {
          let point = hull[i];
          let nextPoint = hull[(i + 1) % hull.length];
          
          // Increase elasticity for larger boundary
          let dx = nextPoint.x - point.x;
          let dy = nextPoint.y - point.y;
          let distance = sqrt(dx * dx + dy * dy);
          
          let noiseFactor = noise(point.x * 0.01 + boundaryNoiseOffset, 
                                point.y * 0.01 + boundaryNoiseOffset);
          let displacement = map(noiseFactor, 0, 1, -ELASTICITY * 1.2, ELASTICITY * 1.2);
          
          let cp1x = point.x + dx/3 - dy * displacement/distance;
          let cp1y = point.y + dy/3 + dx * displacement/distance;
          let cp2x = point.x + 2*dx/3 + dy * displacement/distance;
          let cp2y = point.y + 2*dy/3 - dx * displacement/distance;
          
          if (i === 0) {
            vertex(point.x, point.y);
          }
          
          bezierVertex(cp1x, cp1y, cp2x, cp2y, nextPoint.x, nextPoint.y);
        }
        endShape(CLOSE);
      }
      
      // Draw the boundary stroke
      noFill();
      stroke(COLORS.teal);
      strokeWeight(2); // Thinner stroke for larger boundary
      
      beginShape();
      for (let i = 0; i < hull.length; i++) {
        let point = hull[i];
        let nextPoint = hull[(i + 1) % hull.length];
        
        let dx = nextPoint.x - point.x;
        let dy = nextPoint.y - point.y;
        let distance = sqrt(dx * dx + dy * dy);
        
        let noiseFactor = noise(point.x * 0.01 + boundaryNoiseOffset, 
                              point.y * 0.01 + boundaryNoiseOffset);
        let displacement = map(noiseFactor, 0, 1, -ELASTICITY * 1.2, ELASTICITY * 1.2);
        
        let cp1x = point.x + dx/3 - dy * displacement/distance;
        let cp1y = point.y + dy/3 + dx * displacement/distance;
        let cp2x = point.x + 2*dx/3 + dy * displacement/distance;
        let cp2y = point.y + 2*dy/3 - dx * displacement/distance;
        
        if (i === 0) {
          vertex(point.x, point.y);
        }
        
        bezierVertex(cp1x, cp1y, cp2x, cp2y, nextPoint.x, nextPoint.y);
      }
      endShape(CLOSE);
      
      // Draw the elastic text
      drawBoundaryText(hull);
      
      // Only update boundary animation if tectonics is active
      if (speed > 0) {
      boundaryNoiseOffset += NOISE_INCREMENT;
      }
    }
  }

  // Draw groups completely independently
  if (showGroups) {
    // Calculate hull for groups even if boundary is hidden
    let hullPoints = [];
    positions.forEach((pos, index) => {
      if (index === 0) return;
      hullPoints.push(pos);
    });
    let hull = getConvexHull(hullPoints);
    
    let allGroups = [
      ...(showOutsideGroup ? outsideBoids : []),
      ...(showInsideGroup ? insideBoids : []),
      ...(showChaseGroup ? chaseBoids : [])
    ];
    
    if (showOutsideGroup) {
      for (let member of outsideBoids) {
        member.edges();
        member.flock(allGroups, hull, positions);
        member.update();
        member.show();
      }
    }
    
    if (showInsideGroup) {
      for (let member of insideBoids) {
        member.edges();
        member.flock(allGroups, hull, positions);
        member.update();
        member.show();
      }
    }
    
    if (showChaseGroup) {
      for (let member of chaseBoids) {
        member.edges();
        member.flock(allGroups, hull, positions);
        member.update();
        member.show();
      }
    }
  }

  // Draw nodes
  positions.forEach((pos, index) => {
    let size = (pos.connections + 1) * BASE_NODE_SIZE;
    
    // Make "Pangea in latent space" node larger
    if (index === PANGEA_LATENT_SPACE_INDEX) {
      size = size * 1.5; // 50% larger than normal
    }
    
    // Check hover for circle
    let d = dist(mouseX, mouseY, pos.x, pos.y);
    if (d < size/2) {
      hoveredIndex = index;
      let englishConcept = getEnglishConceptName(index);
      if (urls[englishConcept]) {
        cursor(HAND);
      }
    }
    
    // Draw circles if enabled
    if (showEllipses) {
      // Draw highlight for list hover - make it more prominent
      if (false && index === hoveredTopicIndex) { // DISABLED - no list interface
        push();
        // Outer glow effect
        noFill();
        stroke(getColorForConcept(index));
        strokeWeight(4);
        ellipse(pos.x, pos.y, size + 20, size + 20);
        
        // Inner highlight
        stroke(255, 255, 255, 150);
        strokeWeight(2);
        ellipse(pos.x, pos.y, size + 10, size + 10);
        pop();
      }
      
      // Draw hover effect for direct circle hover
      if (d < size/2) {
        push();
        stroke(255, 255, 255, 100);
        strokeWeight(3);
        fill(255, 255, 255, 40);
        ellipse(pos.x, pos.y, size + 12, size + 12);
        pop();
      }
      
      // Draw base circle
      push();
      stroke(255, 255, 255, 100);
      strokeWeight(1);
      fill(getColorForConcept(index));
      ellipse(pos.x, pos.y, size, size);
      pop();
    }
    
    // Draw text if enabled
    if (showText) {
      push();
      textAlign(CENTER, CENTER);
      textSize(16); // Increased size for better visibility
      textStyle(BOLD); // Make text bold to distinguish from thin lines
      
      // Add text shadow/outline effect
      stroke(0, 0, 0, 150); // Dark outline
      strokeWeight(3);
      fill(255, 255, 255, 255); // Bright white text
      text(translations[currentLanguage].concepts[index], pos.x, pos.y);
      
      // Draw text again without stroke for clean appearance
      noStroke();
      fill(255, 255, 255, 255);
      text(translations[currentLanguage].concepts[index], pos.x, pos.y);
      pop();
    }
  });

  // Reset hover state if not hovering over any circle
  if (hoveredIndex === -1) {
    showPangeaConnections = false;
    cursor(AUTO);
  }
  
  // Reset topic hover if not in list area
  if (!showList || mouseX < 10 || mouseX > 310 || mouseY < 50 || mouseY > height - 60) {
    hoveredTopicIndex = -1; // DISABLED - no list interface
  }
}

function getColorForConcept(index) {
  // Use index to maintain same colors regardless of language
  switch (index) {
    case 0:  return color(239, 71, 111, 220);  // Coral red
    case 1:  return color(255, 209, 102, 220); // Golden yellow
    case 2:  return color(86, 163, 166, 220);  // Ocean blue
    case 3:  return color(255, 107, 107, 220); // Salmon pink
    case 4:  return color(167, 201, 87, 220);  // Lime green
    case 5:  return color(131, 96, 195, 220);  // Purple
    case 6:  return color(255, 170, 51, 220);  // Orange
    case 7:  return color(66, 103, 178, 220);  // Facebook blue
    case 8:  return color(255, 147, 188, 220); // Pink
    case 9:  return color(95, 204, 132, 220);  // Forest green
    case 10: return color(64, 156, 255, 220);  // Sky blue
    case 11: return color(180, 180, 180, 220); // Gray
    case 12: return color(255, 102, 102, 220); // Bright red
    case 13: return color(255, 153, 102, 220); // Bright orange
    default: return color(180, 180, 180, 220); // Default gray
  }
  }
  
  function keyPressed() {
    if (key === 'l') {
      showLines = !showLines;
    } else if (key === 'c') {
      showEllipses = !showEllipses;
    } else if (key === 't') {
      showText = !showText;
  } else if (key === 'b') {
    showBoundary = !showBoundary;
  } else if (key === 'v') {
    useVisualTrails = !useVisualTrails;
    if (!useVisualTrails) {
      background(COLORS.darkBlue);
    }
  } else if (key === 'f') {
    showBoundaryFill = !showBoundaryFill;
  } else if (key === 'p') {
    showGroups = !showGroups;
  } else if (key === '1') {
    showOutsideGroup = !showOutsideGroup;
  } else if (key === '2') {
    showInsideGroup = !showInsideGroup;
  } else if (key === '3') {
    showChaseGroup = !showChaseGroup;
  } else if (key === 'm' || key === 'M') {
    showNodeMenu = !showNodeMenu;
    } else if (key === 'Escape') {
      // Hide menus with Escape key
      if (showLinkMenu) {
        showLinkMenu = false;
      }
      if (showNodeMenu) {
        showNodeMenu = false;
      }
    } else if (key === 'd' || key === 'D') {
      // Toggle demo mode
      demoMode = !demoMode;
      demoTimer = millis();
      currentDemoState = 0;
      
      if (demoMode) {
        console.log('Demo mode: ON - Starting automated showcase');
        console.log('Demo timer initialized at:', demoTimer);
        console.log('Demo interval set to:', demoInterval, 'ms (', demoInterval/1000, 'seconds)');
        // Apply first demo state immediately
        applyDemoState(demoStates[currentDemoState]);
        console.log('Initial Demo State:', demoStates[currentDemoState].name);
      } else {
        console.log('Demo mode: OFF - Manual control restored');
      }
  }
}

// Add this new function to calculate the convex hull
function getConvexHull(points) {
  // Graham Scan algorithm for convex hull
  function cross(o, a, b) {
    return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
  }
  
  points.sort((a, b) => a.y === b.y ? a.x - b.x : a.y - b.y);
  
  let lower = [];
  for (let i = 0; i < points.length; i++) {
    while (lower.length >= 2 && cross(lower[lower.length-2], lower[lower.length-1], points[i]) <= 0) {
      lower.pop();
    }
    lower.push(points[i]);
  }
  
  let upper = [];
  for (let i = points.length - 1; i >= 0; i--) {
    while (upper.length >= 2 && cross(upper[upper.length-2], upper[upper.length-1], points[i]) <= 0) {
      upper.pop();
    }
    upper.push(points[i]);
  }
  
  upper.pop();
  lower.pop();
  return lower.concat(upper);
}

// Helper function to get the English concept name for URL lookup
function getEnglishConceptName(index) {
  return translations['en'].concepts[index];
}

// Add mouseClicked function
function mouseClicked() {
  // First check if clicking on node menu
  if (showNodeMenu) {
    let menuWidth = 400; // Increased from 300 to fit longer titles like Dortmund
    let menuHeight = translations[currentLanguage].concepts.length * 25 + 60;
    let menuX = nodeMenuX;
    let menuY = nodeMenuY;
    
    // Keep menu on screen (same logic as in drawNodeMenu)
    if (menuX + menuWidth > width - 20) menuX = width - menuWidth - 20;
    if (menuY + menuHeight > height - 20) menuY = height - menuHeight - 20;
    if (menuX < 20) menuX = 20;
    if (menuY < 20) menuY = 20;
    
    let startY = menuY + 50;
    let clickedOnMenu = false;
    
    translations[currentLanguage].concepts.forEach((concept, index) => {
      let englishConcept = getEnglishConceptName(index);
      let y = startY + index * 25;
      
      if (mouseX > menuX + 10 && mouseX < menuX + menuWidth - 10 &&
          mouseY > y && mouseY < y + 20) {
        if (urls[englishConcept]) {
          console.log('Opening URL from node menu:', urls[englishConcept]);
          window.open(urls[englishConcept], '_blank').focus();
          clickedOnMenu = true;
        }
      }
    });
    
    // If clicked outside menu, close it
    if (!clickedOnMenu && !(mouseX > menuX && mouseX < menuX + menuWidth && 
                           mouseY > menuY && mouseY < menuY + menuHeight)) {
      showNodeMenu = false;
    }
    
    // Don't process other clicks if we're in the menu
    if (clickedOnMenu || (mouseX > menuX && mouseX < menuX + menuWidth && 
                         mouseY > menuY && mouseY < menuY + menuHeight)) {
      return;
    }
  }
  
  // Then check if clicking on link menu circles
  if (showLinkMenu) {
    let linkKeys = Object.keys(linkMenuLinks);
    
    // Calculate dynamic positions (same logic as in drawLinkMenu)
    let totalDynamicWidth = linkKeys.reduce((sum, key) => sum + Math.max(80, Math.min(120, key.length * 4 + 60)) + 20, 0);
    let dynamicStartX = linkMenuX - (totalDynamicWidth / 2);
    
    // Adjust if off screen
    if (dynamicStartX < 50) dynamicStartX = 50;
    if (dynamicStartX + totalDynamicWidth > width - 50) dynamicStartX = width - totalDynamicWidth - 50;
    
    // Check each circle
    let clickedLink = false;
    linkKeys.forEach((linkKey, index) => {
      // Calculate this circle's size and position
      let dynamicCircleSize = Math.max(80, Math.min(120, linkKey.length * 4 + 60));
      
      let currentX = dynamicStartX;
      for (let i = 0; i < index; i++) {
        let prevSize = Math.max(80, Math.min(120, linkKeys[i].length * 4 + 60));
        currentX += prevSize + 20;
      }
      currentX += dynamicCircleSize / 2;
      
      let x = currentX;
      let y = linkMenuY;
      let d = dist(mouseX, mouseY, x, y);
      
      if (d < dynamicCircleSize / 2) {
        let url = linkMenuLinks[linkKey];
        console.log('Opening URL:', url);
        window.open(url, '_blank').focus();
        clickedLink = true;
      }
    });
    
    // Hide menu after any click
    showLinkMenu = false;
    return;
  }

  let positions = offsets.map(off => ({
    x: noise(off.xoff) * width,
    y: noise(off.yoff) * height,
    r: noise(off.roff) * 200,
    connections: 0
  }));

  // Calculate connections for accurate circle sizes
  positions.forEach((pos, i) => {
    for (let j = i + 1; j < positions.length; j++) {
        let d = dist(pos.x, pos.y, positions[j].x, positions[j].y);
        if (d < 200) {
          positions[i].connections++;
          positions[j].connections++;
      }
    }
  });

  // Check if click is within any circle
  positions.forEach((pos, index) => {
    let size = (pos.connections + 1) * BASE_NODE_SIZE;
    
    // Make "Pangea in latent space" node larger for click detection too
    if (index === PANGEA_LATENT_SPACE_INDEX) {
      size = size * 1.5; // 50% larger than normal
    }
    let d = dist(mouseX, mouseY, pos.x, pos.y);
    if (d < size/2) {
      let displayConcept = translations[currentLanguage].concepts[index];
      let englishConcept = getEnglishConceptName(index);
      console.log('Clicked on:', displayConcept, '(English key:', englishConcept + ')');
      
      if (urls[englishConcept]) {
        // Check if it's a single URL or multiple URLs
        if (typeof urls[englishConcept] === 'string') {
          // Single URL - open directly
          console.log('Opening single URL:', urls[englishConcept]);
        window.open(urls[englishConcept], '_blank').focus();
        } else if (typeof urls[englishConcept] === 'object') {
          // Multiple URLs - show menu
          linkMenuConcept = displayConcept;
          linkMenuLinks = urls[englishConcept];
          
          // Position menu near the clicked node, slightly to the right
          let nodeSize = size; // Use the calculated size
          linkMenuX = pos.x + nodeSize/2 + 80; // Position to the right of the node
          linkMenuY = pos.y; // Same vertical level as the node
          
          // Calculate total width for boundary checking
          let totalWidth = Object.keys(linkMenuLinks).reduce((sum, key) => 
            sum + Math.max(80, Math.min(120, key.length * 4 + 60)) + 20, 0);
          
          // Adjust if menu would go off screen
          if (linkMenuX + totalWidth/2 > width - 50) {
            // If too far right, position to the left of the node instead
            linkMenuX = pos.x - nodeSize/2 - 80;
          }
          if (linkMenuX - totalWidth/2 < 50) {
            // If still too far left, center it but keep it away from node
            linkMenuX = Math.max(50 + totalWidth/2, pos.x + 150);
          }
          
          // Keep vertical position on screen
          if (linkMenuY < 150) {
            linkMenuY = 150;
          }
          if (linkMenuY > height - 150) {
            linkMenuY = height - 150;
          }
          
          showLinkMenu = true;
          console.log('Showing menu for:', concept, 'with links:', linkMenuLinks);
        }
      } else {
        console.log('No URL found for:', concept);
      }
    }
  });
}

// Update drawControlPanel function
function drawControlPanel() {
  let rightMargin = 20; // Same margin as language menu
  let x = width - controlPanelWidth - rightMargin; // Align right edges
  let y = height - controlPanelHeight - controlPanelMargin; // Position at bottom right
  let controls = translations[currentLanguage].controls;
  
  // Main panel with lower opacity (more transparent)
  push();
  fill(COLORS.darkBlue + "AA"); // More transparent background (reduced from EE)
  noStroke();
  rect(x, y, controlPanelWidth, controlPanelHeight, 10);
  
  // Content
  textAlign(LEFT, TOP);
  textSize(14); // Fixed text size
  fill(COLORS.white);
  let textX = x + 15;
  let textY = y + 15;
  let lineHeight = 22; // Slightly increased for better readability
  
  // Title
  push();
  textStyle(NORMAL); // Changed from BOLD to NORMAL
  fill(COLORS.white);
  text(controls.title, textX, textY);
  pop();
  textY += lineHeight * 1.2;
  
  // Control items
  const items = [
    { key: 'L', prop: 'lines', state: showLines },
    { key: 'T', prop: 'text', state: showText },
    { key: 'B', prop: 'boundary', state: showBoundary },
    { key: 'C', prop: 'circles', state: showEllipses },
    { key: 'V', prop: 'trails', state: useVisualTrails },
    { key: 'F', prop: 'fill', state: showBoundaryFill },
    { key: 'P', prop: 'groups', state: showGroups },
    { key: '1', prop: 'tealGroup', state: showOutsideGroup },
    { key: '2', prop: 'yellowGroup', state: showInsideGroup },
    { key: '3', prop: 'redGroup', state: showChaseGroup },
    { key: 'D', prop: 'demo', state: demoMode },
    { key: 'M', prop: 'menu', state: showNodeMenu }
  ];

  items.forEach(item => {
    // Highlight active states more distinctly
    if (item.state) {
      fill(COLORS.white);
      textStyle(NORMAL); // Changed from BOLD to NORMAL
    } else {
      fill(COLORS.white + '88'); // Made inactive text more transparent
      textStyle(NORMAL);
    }
    text(`[${item.key}] ${controls[item.prop]}: ${item.state ? 'ON' : 'OFF'}`, textX, textY);
    textY += lineHeight;
  });
  
  pop();
}

// Helper function to draw text with letter spacing
function drawTextWithSpacing(txt, x, y, letterSpacing, fillColor) {
  fill(fillColor);
  let currentX = x;
  let totalWidth = 0;
  
  // Calculate total width first for centering
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] !== ' ') {
      totalWidth += textWidth(txt[i]) + letterSpacing;
    } else {
      totalWidth += textWidth(' ') + letterSpacing;
    }
  }
  totalWidth -= letterSpacing; // Remove last spacing
  
  // Start from left edge for centering
  currentX = x - totalWidth / 2;
  
  // Draw each character
  for (let i = 0; i < txt.length; i++) {
    let char = txt[i];
    text(char, currentX, y);
    if (char !== ' ') {
      currentX += textWidth(char) + letterSpacing;
    } else {
      currentX += textWidth(' ') + letterSpacing;
    }
  }
}

// Updated drawBoundaryText function
function drawBoundaryText(hull) {
  if (hull.length < 2) return;
  
  // Text properties - back to original size but not bold
  textSize(18); // Back to original size
  textAlign(CENTER, CENTER);
  textStyle(NORMAL); // Not bold
  noStroke(); // No border
  
  // Even slower animation speeds
  boundaryPosition = (boundaryPosition + 0.0001) % 1; // Much slower movement (was 0.0003)
  textWave = (textWave + 0.005) % TWO_PI; // Slower wave (was 0.01)
  
  // Find position on hull
  let totalLength = 0;
  let lengths = [];
  
  // Calculate total perimeter length
  for (let i = 0; i < hull.length; i++) {
    let point = hull[i];
    let nextPoint = hull[(i + 1) % hull.length];
    let segLength = dist(point.x, point.y, nextPoint.x, nextPoint.y);
    lengths.push(segLength);
    totalLength += segLength;
  }
  
  let targetLength = totalLength * boundaryPosition;
  let currentLength = 0;
  
  for (let i = 0; i < hull.length; i++) {
    let point = hull[i];
    let nextPoint = hull[(i + 1) % hull.length];
    let segLength = lengths[i];
    
    if (currentLength + segLength >= targetLength) {
      let t = (targetLength - currentLength) / segLength;
      let x = lerp(point.x, nextPoint.x, t);
      let y = lerp(point.y, nextPoint.y, t);
      
      // Calculate normal vector to move text away from boundary
      let dx = nextPoint.x - point.x;
      let dy = nextPoint.y - point.y;
      let length = sqrt(dx * dx + dy * dy);
      let normalX = -dy / length;
      let normalY = dx / length;
      
      // Move text position away from boundary
      x += normalX * BOUNDARY_OFFSET;
      y += normalY * BOUNDARY_OFFSET;
      
      push();
      translate(x, y);
      
      // Gentler floating motion
      let waveOffset = sin(textWave) * 1.5 + cos(textWave * 0.5) * 0.75;
      translate(0, waveOffset);
      
      // Check if mouse is near text
      let d = dist(mouseX, mouseY, x, y);
      if (d < 30) {
        // Just change color and cursor, no rectangle
        fill(COLORS.yellow);
        // Only show hand cursor if there's a URL
        let boundaryKey = translations['en'].boundary; // Use English key for URL lookup
        if (urls[boundaryKey]) {
          cursor(HAND);
        }
        if (mouseIsPressed && urls[boundaryKey]) {
          window.open(urls[boundaryKey], '_blank');
        }
      } else {
        // More subtle color pulsing with blue hue
        let fluidPulse = (sin(frameCount * 0.02 + textWave) * 0.3 + 0.7);
        let pulseColor = lerpColor(
          color(100, 150, 255), // Light blue hue
          color(COLORS.white), 
          fluidPulse
        );
        fill(pulseColor);
      }
      
      // Draw text without shadow (normal spacing) - blue hue
      fill(d < 30 ? COLORS.yellow : color(100, 150, 255)); // Light blue hue
      text(translations[currentLanguage].boundary, 0, 0);
      
      pop();
      break;
    }
    currentLength += segLength;
  }
}

// Language selector with HTML select dropdown
let languageSelect;

function addLanguageSelector() {
  let languageKeys = Object.keys(translations);
  
  // Create HTML select element
  languageSelect = createSelect();
  let rightMargin = 20; // Same margin as control panel
  languageSelect.position(width - controlPanelWidth - rightMargin, 20); // Same width as control panel
  languageSelect.style('z-index', '1000');
  languageSelect.style('padding', '8px 12px');
  languageSelect.style('font-size', '14px');
  languageSelect.style('border', 'none');
  languageSelect.style('border-radius', '4px');
  languageSelect.style('width', controlPanelWidth + 'px'); // Match control panel width
  languageSelect.style('background', 'rgba(38, 84, 124, 0.6)'); // More transparent (reduced from 0.9)
  languageSelect.style('color', 'white');
  languageSelect.style('cursor', 'pointer');
  languageSelect.style('box-shadow', '0 2px 8px rgba(0,0,0,0.3)');
  languageSelect.style('outline', 'none');
  
  // Add all language options
  languageKeys.forEach(langKey => {
    let optionText = translations[langKey].flag + ' ' + translations[langKey].name;
    languageSelect.option(optionText, langKey);
  });
  
  // Set current language as selected
  languageSelect.selected(currentLanguage);
  
  // Handle language change
  languageSelect.changed(() => {
    currentLanguage = languageSelect.value();
    console.log('Language changed to:', currentLanguage, translations[currentLanguage].name);
  });
  
  // Style the dropdown options (this works in most browsers)
  languageSelect.style('option', 'background: rgba(38, 84, 124, 0.9); color: white; padding: 8px;');
}

// Add new global variables
let showList = false; // Controls list visibility - DISABLED for testing
let listX = 20; // List position from left
let listY = 60; // List position from top (below language button)
let listSpacing = 28; // Reduced spacing for more compact list

// Update drawTopicsList function
function drawTopicsList() {
  if (!showList) return;

  push();
  // Draw semi-transparent background for list
  fill(COLORS.darkBlue + 'CC');
  noStroke();
  rect(10, 50, 300, height - 60, 10);

  // Draw list items
  textAlign(LEFT, TOP);
  textSize(16); // Increased from 14 to 16
  let y = listY;
  
  translations[currentLanguage].concepts.forEach((concept, index) => {
    // Check if mouse is over this item
    let isHover = mouseX > listX && mouseX < listX + 200 &&
                  mouseY > y && mouseY < y + listSpacing;
    
    if (isHover) {
      // hoveredTopicIndex = index; // DISABLED - no list interface
      
      // Draw circle highlight instead of box
      push();
      // Outer glow
      fill(getColorForConcept(index));
      noStroke();
      ellipse(listX - 10, y + 10, 12, 12);
      
      // Inner bright circle
      fill(255, 255, 255, 200);
      ellipse(listX - 10, y + 10, 6, 6);
      pop();
      
      // Use lighter, more visible colors for hover
      let hoverColor = lerpColor(color(255, 255, 255), getColorForConcept(index), 0.7);
      fill(hoverColor);
      cursor(HAND);
    } else {
      fill(255, 255, 255, 220); // Slightly transparent white for better readability
    }

    // Draw the text
    text(concept, listX, y);
    
    // Remove underline - no longer needed
    
    y += listSpacing;
  });
  pop();
}

// Add function to draw the link menu with circles
function drawLinkMenu() {
  if (!showLinkMenu) return;
  
  push();
  let linkKeys = Object.keys(linkMenuLinks);
  let circleSize = 80;
  let spacing = 100;
  
  // Calculate menu dimensions
  let totalWidth = linkKeys.length * spacing;
  let startX = linkMenuX - (totalWidth / 2);
  
  // Adjust position if it goes off screen
  if (startX < 50) startX = 50;
  if (startX + totalWidth > width - 50) startX = width - totalWidth - 50;
  
  // Draw title oval in center - make it more readable
  push();
  // Calculate title width for better sizing
  textSize(13);
  let titleWidth = textWidth(linkMenuConcept) + 40;
  let titleHeight = 35;
  
  fill(COLORS.darkBlue + "C0");
  stroke(COLORS.white + "AA");
  strokeWeight(1.5);
  ellipse(linkMenuX, linkMenuY - 60, titleWidth, titleHeight);
  
  // Better text styling
  fill(COLORS.white + "F0");
  textAlign(CENTER, CENTER);
  textSize(13);
  textStyle(NORMAL);
  text(linkMenuConcept, linkMenuX, linkMenuY - 60);
  pop();
  
  // Draw link circles
  linkKeys.forEach((linkKey, index) => {
    // Calculate circle size based on text length
    let textLength = linkKey.length;
    let dynamicCircleSize = Math.max(80, Math.min(120, textLength * 4 + 60));
    let dynamicSpacing = dynamicCircleSize + 20;
    
    // Recalculate positions with dynamic sizing
    let totalDynamicWidth = linkKeys.reduce((sum, key) => sum + Math.max(80, Math.min(120, key.length * 4 + 60)) + 20, 0);
    let dynamicStartX = linkMenuX - (totalDynamicWidth / 2);
    
    // Adjust if off screen
    if (dynamicStartX < 50) dynamicStartX = 50;
    if (dynamicStartX + totalDynamicWidth > width - 50) dynamicStartX = width - totalDynamicWidth - 50;
    
    // Calculate this circle's position
    let currentX = dynamicStartX;
    for (let i = 0; i < index; i++) {
      let prevSize = Math.max(80, Math.min(120, linkKeys[i].length * 4 + 60));
      currentX += prevSize + 20;
    }
    currentX += dynamicCircleSize / 2;
    
    let x = currentX;
    let y = linkMenuY;
    
    // Check if mouse is over this circle
    let d = dist(mouseX, mouseY, x, y);
    let isHover = d < dynamicCircleSize / 2;
    
    // Draw circle
    push();
      if (isHover) {
      // Hover effect - larger circle with glow
      fill(COLORS.teal + "40");
      stroke(COLORS.yellow);
      strokeWeight(2);
      ellipse(x, y, dynamicCircleSize + 8, dynamicCircleSize + 8);
      
      fill(COLORS.yellow);
      cursor(HAND);
      } else {
      fill(COLORS.darkBlue + "D0");
      stroke(COLORS.white + "CC");
      strokeWeight(1.5);
      ellipse(x, y, dynamicCircleSize, dynamicCircleSize);
      
      fill(COLORS.white + "EE");
    }
    
    // Draw text with better sizing and weight
    textAlign(CENTER, CENTER);
    let fontSize = Math.max(10, Math.min(13, dynamicCircleSize / 8));
    textSize(fontSize);
    textStyle(NORMAL);
    
    // Smart text wrapping based on circle size
    let words = linkKey.split(' ');
    let maxCharsPerLine = Math.floor(dynamicCircleSize / 8);
    
    if (linkKey.length <= maxCharsPerLine) {
      // Single line
      text(linkKey, x, y);
    } else if (words.length === 2) {
      // Two words, two lines
      text(words[0], x, y - fontSize/2 - 2);
      text(words[1], x, y + fontSize/2 + 2);
    } else if (words.length > 2) {
      // Multiple words, try to balance lines
      let midPoint = Math.ceil(words.length / 2);
      text(words.slice(0, midPoint).join(' '), x, y - fontSize/2 - 2);
      text(words.slice(midPoint).join(' '), x, y + fontSize/2 + 2);
    } else {
      // Long single word, try to break it
      let mid = Math.floor(linkKey.length / 2);
      text(linkKey.substring(0, mid), x, y - fontSize/2 - 2);
      text(linkKey.substring(mid), x, y + fontSize/2 + 2);
    }
    pop();
  });
  
  pop();
}

// Draw node menu when 'M' is pressed
function drawNodeMenu() {
  if (!showNodeMenu) return;
  
  push();
  
  // Semi-transparent background
  fill(COLORS.darkBlue + "E0");
  stroke(COLORS.white + "AA");
  strokeWeight(2);
  
  let menuWidth = 400; // Increased from 300 to fit longer titles like Dortmund
  let menuHeight = translations[currentLanguage].concepts.length * 25 + 60;
  let menuX = nodeMenuX;
  let menuY = nodeMenuY;
  
  // Keep menu on screen
  if (menuX + menuWidth > width - 20) menuX = width - menuWidth - 20;
  if (menuY + menuHeight > height - 20) menuY = height - menuHeight - 20;
  if (menuX < 20) menuX = 20;
  if (menuY < 20) menuY = 20;
  
  // Draw menu background
  rect(menuX, menuY, menuWidth, menuHeight, 10);
  
  // Draw title
  fill(COLORS.white);
  textAlign(LEFT, TOP);
  textSize(18);
  textStyle(BOLD);
  text("Node Links", menuX + 20, menuY + 20);
  
  // Draw close instruction
  textSize(12);
  textStyle(NORMAL);
  fill(COLORS.white + "CC");
  text("Press 'M' to close", menuX + menuWidth - 120, menuY + 20);
  
  // Draw node list
  let startY = menuY + 50;
  translations[currentLanguage].concepts.forEach((concept, index) => {
    let englishConcept = getEnglishConceptName(index);
    let y = startY + index * 25;
    
    // Check if mouse is over this item
    let isHovered = mouseX > menuX + 10 && mouseX < menuX + menuWidth - 10 &&
                   mouseY > y && mouseY < y + 20;
    
    // Highlight on hover
    if (isHovered) {
      fill(COLORS.teal + "40");
      noStroke();
      rect(menuX + 10, y, menuWidth - 20, 20, 5);
      cursor(HAND);
    }
    
    // Draw concept name only (no URL display) - bold with border like concept text
    textAlign(LEFT, CENTER);
    textSize(14);
    textStyle(BOLD); // Make text bold
    
    // Add text border (stroke) for better visibility
    stroke(0, 0, 0, 150); // Black border with transparency
    strokeWeight(2);
    fill(isHovered ? COLORS.white : COLORS.white + "DD");
    text(concept, menuX + 20, y + 10);
  });
  
  pop();
}

// Add click handler for list items
function mousePressed() {
  // List interface disabled - no list interactions
  if (false && showList) {
    let y = listY;
    translations[currentLanguage].concepts.forEach((concept, index) => {
      if (mouseX > listX && mouseX < listX + 200 &&
          mouseY > y && mouseY < y + listSpacing) {
        let englishConcept = getEnglishConceptName(index);
        if (urls[englishConcept]) {
          // Check if it's a single URL or multiple URLs
          if (typeof urls[englishConcept] === 'string') {
            // Single URL - open directly
          window.open(urls[englishConcept], '_blank');
          } else if (typeof urls[englishConcept] === 'object') {
            // Multiple URLs - show menu
            linkMenuConcept = concept;
            linkMenuLinks = urls[englishConcept];
            
            // Position menu near the clicked list item, to the right
            linkMenuX = listX + 240; // Position to the right of the list
            linkMenuY = y + 10; // Align with the list item
            
            // Calculate total width for boundary checking
            let totalWidth = Object.keys(linkMenuLinks).reduce((sum, key) => 
              sum + Math.max(80, Math.min(120, key.length * 4 + 60)) + 20, 0);
            
            // Adjust if menu would go off screen
            if (linkMenuX + totalWidth/2 > width - 50) {
              // If too far right, position closer to the list
              linkMenuX = width - totalWidth/2 - 50;
            }
            if (linkMenuX - totalWidth/2 < 50) {
              linkMenuX = 50 + totalWidth/2;
            }
            
            // Keep vertical position on screen
            if (linkMenuY < 150) {
              linkMenuY = 150;
            }
            if (linkMenuY > height - 150) {
              linkMenuY = height - 150;
            }
            
            showLinkMenu = true;
          }
        }
      }
      y += listSpacing;
    });
  }
  }

// Update control panel dimensions to be fixed and visible
function updateControlPanelDimensions() {
  controlPanelWidth = 180;  // Narrower width (reduced from 220)
  controlPanelHeight = 290; // Fixed height to fit all controls (increased for M key)
  controlPanelMargin = 20;  // Fixed margin
  
  // Ensure control panel fits on smaller screens
  if (width < controlPanelWidth + controlPanelMargin * 2) {
    controlPanelWidth = width - controlPanelMargin * 2;
  }
}

// Initialize demo states with all possible combinations
function initializeDemoStates() {
  demoStates = [
    // Basic states - individual elements
    { name: "Only Lines", lines: true, circles: false, text: false, boundary: false, trails: false, groups: false },
    { name: "Only Circles", lines: false, circles: true, text: false, boundary: false, trails: false, groups: false },
    { name: "Only Text", lines: false, circles: false, text: true, boundary: false, trails: false, groups: false },
    { name: "Only Boundary", lines: false, circles: false, text: false, boundary: true, trails: false, groups: false },
    { name: "Only Trails", lines: false, circles: false, text: false, boundary: false, trails: true, groups: false },
    { name: "Only Particles", lines: false, circles: false, text: false, boundary: false, trails: false, groups: true },
    
    // Combinations
    { name: "Lines + Circles", lines: true, circles: true, text: false, boundary: false, trails: false, groups: false },
    { name: "Circles + Text", lines: false, circles: true, text: true, boundary: false, trails: false, groups: false },
    { name: "Lines + Text", lines: true, circles: false, text: true, boundary: false, trails: false, groups: false },
    { name: "Boundary + Text", lines: false, circles: false, text: true, boundary: true, trails: false, groups: false },
    { name: "Trails + Particles", lines: false, circles: false, text: false, boundary: false, trails: true, groups: true },
    
    // Complex combinations
    { name: "Core Elements", lines: true, circles: true, text: true, boundary: false, trails: false, groups: false },
    { name: "With Boundary", lines: true, circles: true, text: true, boundary: true, trails: false, groups: false },
    { name: "With Trails", lines: true, circles: true, text: true, boundary: true, trails: true, groups: false },
    { name: "Everything", lines: true, circles: true, text: true, boundary: true, trails: true, groups: true }
  ];
}

// Handle demo mode cycling
function handleDemoMode() {
  let currentTime = millis();
  let timeElapsed = currentTime - demoTimer;
  
  if (timeElapsed > demoInterval) {
    // Move to random state instead of sequential
    let newState;
    do {
      newState = Math.floor(random(demoStates.length));
    } while (newState === currentDemoState && demoStates.length > 1); // Avoid repeating same state
    currentDemoState = newState;
    
    // Randomly decide whether to show 1 or 2 states (30% chance for 2 states)
    let useTwoStates = random() < 0.3;
    let primaryState = demoStates[currentDemoState];
    
    if (useTwoStates) {
      // Apply 2 states simultaneously for richer combinations
      let secondaryStateIndex;
      do {
        secondaryStateIndex = Math.floor(random(demoStates.length));
      } while (secondaryStateIndex === currentDemoState); // Ensure different secondary state
      let secondaryState = demoStates[secondaryStateIndex];
      applyCombinedDemoStates(primaryState, secondaryState);
      
      console.log('Demo State ' + (currentDemoState + 1) + '/' + demoStates.length + ' (COMBINED RANDOM):');
      console.log('Primary:', primaryState.name);
      console.log('Secondary:', secondaryState.name);
    } else {
      // Apply single state
      applyDemoState(primaryState);
      
      console.log('Demo State ' + (currentDemoState + 1) + '/' + demoStates.length + ' (SINGLE RANDOM):');
      console.log('State:', primaryState.name);
    }
    
    demoTimer = millis();
    console.log('=== DEMO STATE CHANGED ===');
    console.log('New timer set to:', demoTimer);
    
    // Also vary the tectonics intensity with Perlin noise (further reduced range)
    let noiseValue = noise(millis() * 0.0001);
    let newSliderValue = map(noiseValue, 0, 1, 0.0001, 0.003); // Further reduced from 0.005 to 0.003
    slider.value(newSliderValue);
    
    console.log('Tectonics speed:', newSliderValue.toFixed(6));
  }
}

// Apply a demo state
function applyDemoState(state) {
  showLines = state.lines;
  showEllipses = state.circles;
  showText = state.text;
  showBoundary = state.boundary;
  useVisualTrails = state.trails;
  showGroups = state.groups;
  
  // Randomly toggle individual particle groups when groups are enabled
  if (state.groups) {
    showOutsideGroup = random() > 0.3;
    showInsideGroup = random() > 0.3;
    showChaseGroup = random() > 0.3;
    // Ensure at least one group is visible
    if (!showOutsideGroup && !showInsideGroup && !showChaseGroup) {
      showOutsideGroup = true;
    }
    console.log('Particle groups:', 
      'Outside:', showOutsideGroup, 
      'Inside:', showInsideGroup, 
      'Chase:', showChaseGroup);
  } else {
    showOutsideGroup = false;
    showInsideGroup = false;
    showChaseGroup = false;
  }
  
  console.log('Applied state:', {
    lines: showLines,
    circles: showEllipses,
    text: showText,
    boundary: showBoundary,
    trails: useVisualTrails,
    groups: showGroups
  });
}

// Apply combined demo states (OR logic - if either state has a feature enabled, it's enabled)
function applyCombinedDemoStates(primaryState, secondaryState) {
  showLines = primaryState.lines || secondaryState.lines;
  showEllipses = primaryState.circles || secondaryState.circles;
  showText = primaryState.text || secondaryState.text;
  showBoundary = primaryState.boundary || secondaryState.boundary;
  useVisualTrails = primaryState.trails || secondaryState.trails;
  showGroups = primaryState.groups || secondaryState.groups;
  
  // Randomly toggle individual particle groups when groups are enabled
  if (showGroups) {
    showOutsideGroup = random() > 0.3;
    showInsideGroup = random() > 0.3;
    showChaseGroup = random() > 0.3;
    // Ensure at least one group is visible
    if (!showOutsideGroup && !showInsideGroup && !showChaseGroup) {
      showOutsideGroup = true;
    }
    console.log('Particle groups:', 
      'Outside:', showOutsideGroup, 
      'Inside:', showInsideGroup, 
      'Chase:', showChaseGroup);
  } else {
    showOutsideGroup = false;
    showInsideGroup = false;
    showChaseGroup = false;
  }
  
  console.log('Applied combined state:', {
    lines: showLines,
    circles: showEllipses,
    text: showText,
    boundary: showBoundary,
    trails: useVisualTrails,
    groups: showGroups
  });
}