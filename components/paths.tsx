const offers = [
  {
    en: "SERVICED APARTMENTS",
    title: "الشقق الفندقية المخدومة",
    body: "مبانٍ منخفضة الارتفاع G+3.5 وسط مساحات خضراء، بإدارة وخدمات فندقية من أورا. مناسبة للسكن أو لتحقيق عائد إيجاري.",
    tags: ["غرفة نوم", "غرفتا نوم", "3 غرف نوم"],
    from: "8.9",
    img: "/images/res-walkway.webp",
    alt: "ممشى بين المباني السكنية",
    cta: "أسعار الشقق",
    tab: "apartments",
  },
  {
    en: "MEDICA CLINICS",
    title: "عيادات ميديكا",
    body: "المبنى الطبي الوحيد في المشروع، بعيادات متشطبة بالكامل شاملة دورات المياه، وردهة استقبال مشتركة.",
    tags: ["من 57 م²", "حتى 155 م²", "G+3"],
    from: "14",
    img: "/images/medica-plaza.webp",
    alt: "ساحة مبنى العيادات ميديكا",
    cta: "أسعار العيادات",
    tab: "clinics",
  },
];

export default function Paths() {
  return (
    <section id="offers" className="mx-auto max-w-[1240px] px-5 pt-16 md:px-8 md:pt-24">
      <h2 className="text-[28px] font-semibold md:text-[44px]">طرحان في مشروع واحد</h2>
      <p className="mt-3 max-w-2xl text-[15px] leading-8 text-mute md:text-[17px]">
        اختر الطرح الأنسب لاحتياجك: للسكن والاستثمار، أو لممارسة نشاطك الطبي.
      </p>
      <div className="mt-7 grid gap-4 md:mt-9 md:grid-cols-2 md:gap-6">
        {offers.map((o) => (
          <article key={o.en} className="flex flex-col overflow-hidden rounded-md border border-line bg-card">
            <img src={o.img} alt={o.alt} loading="lazy" className="h-[200px] w-full object-cover md:h-[320px]" />
            <div className="flex flex-1 flex-col gap-4 p-5 md:gap-[18px] md:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[22px] font-semibold md:text-[30px]">{o.title}</h3>
                <span className="num hidden whitespace-nowrap text-[13px] tracking-[0.16em] text-mute xl:inline-block">{o.en}</span>
              </div>
              <p className="text-[15px] leading-8 text-mute md:text-[17px] md:leading-9">{o.body}</p>
              <ul className="flex flex-wrap gap-2">
                {o.tags.map((t) => (
                  <li key={t} className="rounded-full border border-line px-3.5 py-1.5 text-sm">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-end justify-between gap-4 border-t border-line pt-5">
                <div>
                  <p className="text-sm text-mute">تبدأ من</p>
                  <p className="mt-1">
                    <span className="num text-[28px] font-bold md:text-[34px]">{o.from}</span>
                    <span className="ms-1.5 text-base md:text-lg">مليون جنيه</span>
                  </p>
                </div>
                <a
                  href={`#prices-${o.tab}`}
                  className="whitespace-nowrap rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:bg-ink-2 md:px-[22px] md:py-3.5 md:text-[15px]"
                >
                  {o.cta}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
