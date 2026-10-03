// ─────────────────────────────────────────────────────────────
//  كل بيانات الصفحة من هنا. عدّل هنا فقط.
// ─────────────────────────────────────────────────────────────

export const site = {
  url: "https://www.solanaeast.org", // ← غيّرها بالدومين الفعلي
  agency: "solana",
  project: "سولانا إيست لين",
  projectEn: "Solana East Lane",
  developer: "أورا للتطوير العقاري",
  developerEn: "ORA Developers",
  phone: "01038154693",
  phoneIntl: "+201038154693",
  phoneDisplay: "01038154693",
  whatsapp: "201038154693",
  email: "leads@solanaeast.org",

  // ← Google Ads: ضع الـ tag و labels قبل النشر
  gtag: "",
  conv: {
    whatsapp: "",
    call: "",
    email: "",
  },
} as const;

export const interests = [
  "شقة بغرفة نوم",
  "شقة بغرفتي نوم",
  "شقة بثلاث غرف نوم",
  "عيادة — ميديكا",
] as const;

export const waMessage = (interest?: string | null) =>
  interest
    ? `مرحبًا، أرغب في الاستفسار عن ${interest} في مشروع سولانا إيست لين من أورا، والاطلاع على الأسعار والوحدات المتاحة.`
    : "مرحبًا، أرغب في الاستفسار عن مشروع سولانا إيست لين من أورا، والاطلاع على الأسعار والوحدات المتاحة.";

export const WA_DEFAULT = waMessage();

export const mailLink = (interest?: string | null) => {
  const subject = `استفسار — سولانا إيست لين${interest ? ` (${interest})` : ""}`;
  const body = `${waMessage(interest)}\n\nالاسم:\nرقم الهاتف:\n`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const waLink = (msg: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

// ─────────────────────────────  المشروع  ─────────────────────────────

export const location = {
  headline: "مباشرةً على شارع التسعين الجنوبي",
  body:
    "يقع سولانا إيست لين في التجمع الخامس بالقاهرة الجديدة مباشرةً على شارع التسعين الجنوبي، على مساحة 26.6 فدان وبواجهة تمتد 1.1 كم.",
  points: [
    { name: "الموقع", detail: "شارع التسعين الجنوبي — التجمع الخامس" },
    { name: "مساحة المشروع", detail: "26.6 فدان" },
    { name: "الواجهة على التسعين", detail: "1.1 كم" },
    { name: "عدد المباني", detail: "8 مبانٍ" },
    { name: "الارتفاعات", detail: "G+3 للعيادات · G+3.5 للسكني" },
    { name: "المطور", detail: "أورا للتطوير العقاري" },
  ],
};

// أرقام المشروع
export const infrastructure = [
  { title: "26.6 فدان", body: "مساحة المشروع على شارع التسعين الجنوبي مباشرة." },
  { title: "1.1 كم واجهة", body: "واجهة ممتدة على الشارع تمنح النشاط التجاري والطبي حضورًا مباشرًا." },
  { title: "8 مبانٍ", body: "مبنى واحد مخصص للعيادات، وبقية المباني سكنية مخدومة." },
  { title: "متشطب بالكامل", body: "العيادات متشطبة بالكامل شاملة دورات المياه، والشقق مخدومة بالكامل." },
];

// لماذا الآن
export const investment = [
  {
    stat: "1",
    unit: "مبنى",
    title: "مبنى طبي واحد فقط",
    body: "مبنى واحد فقط من أصل 8 مبانٍ مخصص للعيادات، ما يجعل المعروض الطبي على واجهة التسعين محدودًا.",
  },
  {
    stat: "5%",
    unit: "جدية حجز",
    title: "أسعار مرحلة الإطلاق",
    body: "إطلاق جديد بجدية حجز 5%، وتمثّل أسعار الإطلاق عادةً أفضل نقطة دخول في المشروع.",
  },
  {
    stat: "1.1",
    unit: "كم واجهة",
    title: "على شارع التسعين مباشرة",
    body: "موقع مباشر على أحد أهم المحاور في التجمع الخامس، بسهولة وصول وظهور واضح.",
  },
  {
    stat: "9",
    unit: "سنوات",
    title: "فترات سداد ممتدة",
    body: "تقسيط الشقق المخدومة حتى 9 سنوات، والعيادات 5% مقدم و5% بعد 3 أشهر والرصيد على 8.5 سنوات.",
  },
];

export const amenities = [
  { title: "شقق مخدومة بالكامل", body: "إدارة وخدمات فندقية للوحدات السكنية — مناسبة للسكن أو للإيجار." },
  { title: "تشغيل وإدارة من المطوّر", body: "تتولى أورا إدارة الخدمات، بما يحافظ على قيمة الوحدة وعائدها الإيجاري." },
  { title: "ردهة استقبال للعيادات", body: "ردهة استقبال مشتركة بتشطيبات فندقية في مبنى ميديكا." },
  { title: "عيادات متشطبة بالكامل", body: "تُسلَّم العيادة جاهزة للتجهيز الطبي دون أعمال تشطيب." },
  { title: "محلات وصيدليات ومقاهٍ", body: "دور أرضي تجاري يضم صيدليات ومحلات ومقاهي على الممشى." },
  { title: "ممشى وساحات مفتوحة", body: "ممرات مشاة ومناطق جلوس ومساحات خضراء بين المباني." },
];

// ─────────────────────────────  المنتجات  ─────────────────────────────

export type Unit = {
  type: string;
  spec: string;
  price: number;
  image: string;
};

export type Product = {
  slug: string;
  name: string;
  nameEn: string;
  eyebrow: string;
  intro: string;
  scarcity: string;
  eoi: string;
  dp: number; // للحاسبة
  dpLabel: string;
  years: number;
  plan: string;
  terms: [string, string][];
  image: string;
  highlights: string[];
  groups: { title: string; note?: string; units: Unit[] }[];
};

export const products: Product[] = [
  {
    slug: "serviced",
    name: "شقق فندقية مخدومة",
    nameEn: "SERVICED APARTMENTS",
    eyebrow: "New Launch",
    intro:
      "شقق فندقية بإدارة وخدمات أورا في مبانٍ G+3.5 وسط مساحات خضراء على شارع التسعين الجنوبي، بغرفة أو غرفتين أو ثلاث غرف، للسكن أو الاستثمار.",
    scarcity: "إطلاق جديد بعدد محدود",
    eoi: "5%",
    dp: 5,
    dpLabel: "جدية حجز 5%",
    years: 9,
    plan: "تقسيط حتى 9 سنوات",
    terms: [
      ["جدية الحجز", "5%"],
      ["التقسيط", "حتى 9 سنوات"],
      ["المبنى", "G+3.5"],
      ["التشطيب", "مخدومة بالكامل"],
    ],
    image: "/images/res-walkway.webp",
    highlights: [
      "إدارة وخدمات فندقية متكاملة",
      "مبانٍ G+3.5 وسط مساحات خضراء",
      "مباشرةً على شارع التسعين الجنوبي",
      "تبدأ من 8.9 مليون جنيه",
    ],
    groups: [
      {
        title: "شقق",
        units: [
          { type: "شقة فندقية", spec: "غرفة نوم واحدة", price: 8_900_000, image: "/images/res-building-a.webp" },
          { type: "شقة فندقية", spec: "غرفتا نوم", price: 13_900_000, image: "/images/res-building-cd.webp" },
          { type: "شقة فندقية", spec: "3 غرف نوم", price: 18_000_000, image: "/images/res-building-lm.webp" },
        ],
      },
    ],
  },
  {
    slug: "medica",
    name: "عيادات ميديكا",
    nameEn: "MEDICA CLINICS",
    eyebrow: "Medical Building",
    intro:
      "المبنى الطبي الوحيد في المشروع على واجهة شارع التسعين، بعيادات من 57 إلى 155 م² متشطبة بالكامل شاملة دورات المياه، في مبنى G+3 بردهة استقبال مشتركة.",
    scarcity: "مبنى طبي واحد فقط من 8 مبانٍ",
    eoi: "5%",
    dp: 10,
    dpLabel: "5% مقدم + 5% بعد 3 أشهر",
    years: 8.5,
    plan: "8.5 سنة أقساط متساوية",
    terms: [
      ["المقدم", "5%"],
      ["بعد 3 أشهر", "5%"],
      ["التقسيط", "8.5 سنة"],
      ["التشطيب", "متشطبة بالكامل"],
    ],
    image: "/images/medica-plaza.webp",
    highlights: [
      "متشطبة بالكامل شاملة دورات المياه",
      "ردهة استقبال مشتركة",
      "صيدليات ومحلات في الدور الأرضي",
      "تبدأ من 14 مليون جنيه",
    ],
    groups: [
      {
        title: "عيادات",
        units: [
          { type: "عيادة", spec: "57 – 65 م²", price: 14_000_000, image: "/images/medica-clinic.webp" },
          { type: "عيادة", spec: "73 م²", price: 18_000_000, image: "/images/medica-office.webp" },
          { type: "عيادة", spec: "83 م²", price: 20_000_000, image: "/images/medica-reception.webp" },
          { type: "عيادة", spec: "93 م²", price: 23_000_000, image: "/images/medica-facade.webp" },
          { type: "عيادة", spec: "135 – 155 م²", price: 36_000_000, image: "/images/medica-street.webp" },
        ],
      },
    ],
  },
];

export const allUnits = products.flatMap((p) =>
  p.groups.flatMap((g) => g.units.map((u) => ({ ...u, product: p.name })))
);

export const minPrice = Math.min(...allUnits.map((u) => u.price));

// ─────────────────────────────  الأسئلة  ─────────────────────────────

export const faqs = [
  {
    q: "ما نظام السداد في الشقق الفندقية؟",
    a: "جدية حجز 5% مع إمكانية التقسيط حتى 9 سنوات. يُعتمد جدول السداد الرسمي الصادر عن أورا عند التعاقد.",
  },
  {
    q: "ما نظام السداد في عيادات ميديكا؟",
    a: "5% مقدم تعاقد، و5% بعد ثلاثة أشهر، ويُسدَّد الرصيد على 8.5 سنوات بأقساط متساوية، إضافةً إلى وديعة صيانة 10%.",
  },
  {
    q: "أين يقع المشروع؟",
    a: "مباشرةً على شارع التسعين الجنوبي في التجمع الخامس بالقاهرة الجديدة، على مساحة 26.6 فدان وبواجهة تمتد 1.1 كم.",
  },
  {
    q: "ما مستوى تشطيب العيادات؟",
    a: "تُسلَّم العيادات متشطبة بالكامل شاملة دورات المياه، في مبنى طبي بارتفاع أرضي وثلاثة أدوار مع ردهة استقبال مشتركة.",
  },
  {
    q: "من المطوّر؟",
    a: "أورا للتطوير العقاري، التابعة لرجل الأعمال المهندس نجيب ساويرس.",
  },
  {
    q: "كيف يمكنني الحجز؟",
    a: `تواصل مع فريق المبيعات عبر واتساب أو الهاتف على ${site.phoneDisplay} أو البريد الإلكتروني، وسنوافيك بالوحدات المتاحة وأسعار الإطلاق وخطوات سداد جدية الحجز.`,
  },
];

export const fmt = (n: number) => n.toLocaleString("en-US");
