const facts = [
  { v: "26.6", u: "", l: "فدان مساحة المشروع" },
  { v: "1.1", u: "كم", l: "واجهة على شارع التسعين" },
  { v: "8", u: "", l: "مبانٍ، منها مبنى طبي واحد" },
  { v: "5%", u: "", l: "جدية حجز", accent: true },
];

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1240px] px-5 pt-10 md:px-8 md:pt-16">
      <div className="flex flex-wrap items-end justify-between gap-6 md:gap-8">
        <div className="min-w-0 flex-[1_1_640px]">
          <p className="text-sm font-semibold text-walnut md:text-[15px]">
            إطلاق جديد من أورا للتطوير العقاري · شارع التسعين الجنوبي
          </p>
          <h1 className="mt-3 text-[44px] font-bold leading-[1.1] md:mt-4 md:whitespace-nowrap md:text-[80px] md:leading-[1.05]">
            سولانا إيست لين
          </h1>
        </div>
        <p className="flex-[0_1_400px] text-base leading-8 text-mute md:text-[19px] md:leading-9">
          مشروع متعدد الاستخدامات يضم شققًا فندقية مخدومة بالكامل، ومبنى العيادات
          الوحيد على واجهة شارع التسعين الجنوبي.
        </p>
      </div>

      <div className="mt-7 overflow-hidden rounded-md bg-line md:mt-10">
        <img
          src="/images/res-garden.webp"
          alt="المباني السكنية في سولانا إيست لين وسط المساحات الخضراء"
          className="h-[260px] w-full object-cover md:h-[560px]"
        />
      </div>

      <dl className="grid grid-cols-2 gap-px border-b border-line bg-line md:grid-cols-4">
        {facts.map((f) => (
          <div
            key={f.l}
            className="bg-paper px-4 py-5 first:pr-0 md:px-7 md:py-7 [&:nth-child(3)]:pr-0 md:[&:nth-child(3)]:pr-7"
          >
            <dd className={`num text-[28px] font-semibold md:text-[40px] ${f.accent ? "text-walnut" : ""}`}>
              {f.v}
              {f.u && <span className="ms-1.5 text-[15px] md:text-xl">{f.u}</span>}
            </dd>
            <dt className="mt-1 text-[13px] text-mute md:mt-1.5 md:text-[15px]">{f.l}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
