import { Reveal, Heading } from "./ui";
import CtaWhatsapp from "./cta-whatsapp";

const pillars = [
  {
    title: "أورا للتطوير العقاري",
    body: "مطوّر تابع للمهندس نجيب ساويرس، تأسس باسم Gemini وأُعيدت تسميته إلى أورا عام 2018.",
  },
  {
    title: "محفظة مشروعات متنوعة",
    body: "ZED في الشيخ زايد والقاهرة الجديدة، وSolana في نيو زايد، وسولانا إيست في التجمع الخامس.",
  },
  {
    title: "سولانا إيست لين",
    body: "26.6 فدان على شارع التسعين الجنوبي، تضم 8 مبانٍ منها مبنى طبي واحد.",
  },
  {
    title: "خبرة في الوحدات المخدومة",
    body: "إدارة أورا للخدمات والتشغيل تحافظ على قيمة الوحدة وتدعم عائدها الإيجاري.",
  },
];

export default function Developer() {
  return (
    <section id="developer" className="bg-ink-2 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div className="frame h-full min-h-[320px]">
            <img
              src="/images/medica-facade.webp"
              alt="واجهة مبنى ميديكا"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={70}>
          <Heading
            light
            eyebrow="The Developer"
            title="من يقف خلف المشروع"
            sub="يمثّل اسم المطوّر الضمانة الأهم في الطروحات الجديدة، وتُعد أورا من أبرز المطورين في السوق المصري."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <div key={p.title} style={{ transitionDelay: `${i * 40}ms` }}>
                <h3 className="text-base text-paper">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-8 text-paper/65">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
          <CtaWhatsapp
            message="مرحبًا، أرغب في الحصول على كتيّب مشروع سولانا إيست لين والوحدات المتاحة."
            className="mt-8 inline-block rounded-full border border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition hover:border-brass-2 hover:text-brass-2"
          >
            اطلب كتيّب المشروع
          </CtaWhatsapp>
        </Reveal>
      </div>
    </section>
  );
}
