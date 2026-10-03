const location = [
  ["الموقع", "شارع التسعين الجنوبي — التجمع الخامس"],
  ["مساحة المشروع", "26.6 فدان"],
  ["الواجهة", "1.1 كم على شارع التسعين"],
  ["المباني", "8 مبانٍ، منها مبنى طبي واحد"],
  ["الارتفاعات", "G+3.5 للسكني · G+3 للعيادات"],
];

export default function About() {
  return (
    <section id="location" className="mx-auto max-w-[1240px] px-5 pt-16 md:px-8 md:pt-24">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-[28px] font-semibold md:text-[44px]">الموقع</h2>
          <p className="mt-3 text-[15px] leading-8 text-mute md:text-[17px] md:leading-9">
            يقع المشروع مباشرةً على شارع التسعين الجنوبي، أحد أهم المحاور التجارية
            والإدارية في القاهرة الجديدة، بما يمنح العيادات والوحدات حضورًا مباشرًا
            على الشارع.
          </p>
          <dl className="mt-6 border-t-2 border-ink">
            {location.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-6 border-b border-line py-3.5 text-[15px]">
                <dt className="text-mute">{k}</dt>
                <dd className="text-end font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h2 className="text-[28px] font-semibold md:text-[44px]">المطوّر</h2>
          <p className="mt-3 text-[15px] leading-8 text-mute md:text-[17px] md:leading-9">
            أورا للتطوير العقاري، التابعة لرجل الأعمال المهندس نجيب ساويرس. تأسست
            باسم Gemini وأُعيدت تسميتها إلى أورا عام 2018، ومن مشروعاتها ZED في الشيخ
            زايد والقاهرة الجديدة، وSolana في نيو زايد، وسولانا إيست في التجمع الخامس.
          </p>
          <img
            src="/images/medica-facade.webp"
            alt="واجهة مبنى العيادات ميديكا"
            loading="lazy"
            className="mt-6 h-[220px] w-full rounded-md object-cover md:h-[300px]"
          />
        </div>
      </div>
    </section>
  );
}
