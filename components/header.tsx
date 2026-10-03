import { site } from "@/lib/site";
import { WaLink, CallLink } from "./contact-links";
import { WaIcon } from "./icons";

const nav = [
  { href: "#offers", label: "الطرح" },
  { href: "#prices", label: "الأسعار" },
  { href: "#plans", label: "أنظمة السداد" },
  { href: "#location", label: "الموقع" },
  { href: "#contact", label: "تواصل معنا" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-3.5 md:px-8 md:py-4">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="num whitespace-nowrap text-[13px] font-semibold tracking-[0.2em] md:text-[17px] md:tracking-[0.22em]">
            SOLANA EAST LANE
          </span>
          <span className="hidden text-[13px] text-mute sm:inline">by ORA</span>
        </a>
        <nav className="hidden gap-7 text-[15px] lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="transition hover:text-walnut">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <CallLink className="num whitespace-nowrap rounded-full border border-ink px-3.5 py-2.5 text-[13px] font-semibold transition hover:bg-ink hover:text-paper md:px-[18px] md:text-[15px]">
            {site.phoneDisplay}
          </CallLink>
          <WaLink className="hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-[15px] font-semibold text-paper transition hover:bg-ink-2 md:inline-flex">
            <WaIcon className="h-[18px] w-[18px]" />
            واتساب
          </WaLink>
        </div>
      </div>
    </header>
  );
}
