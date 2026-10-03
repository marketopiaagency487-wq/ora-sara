const shots = [
  { src: "/images/medica-clinic.webp", alt: "عيادة متشطبة في مبنى ميديكا" },
  { src: "/images/res-building-cd.webp", alt: "أحد المباني السكنية" },
  { src: "/images/medica-reception.webp", alt: "ردهة الاستقبال في مبنى العيادات" },
  { src: "/images/res-building-lm.webp", alt: "المباني السكنية وسط الأشجار" },
  { src: "/images/medica-office.webp", alt: "عيادة بإطلالة على شارع التسعين" },
  { src: "/images/res-building-a.webp", alt: "واجهة مبنى سكني" },
];

export default function Gallery() {
  return (
    <section className="mx-auto max-w-[1240px] px-5 pt-16 md:px-8 md:pt-24">
      <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-4">
        {shots.map((s) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            loading="lazy"
            className="h-[140px] w-full rounded-md object-cover md:h-[300px]"
          />
        ))}
      </div>
      <p className="mt-3 text-xs text-mute">الصور تصورات معمارية لأغراض توضيحية.</p>
    </section>
  );
}
