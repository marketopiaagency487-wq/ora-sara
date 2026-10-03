"use client";

import { useEffect, useState } from "react";
import { products, fmt } from "@/lib/site";

type Tab = "apartments" | "clinics";

const lists: Record<Tab, { en: string; rows: { label: string; price: number }[] }> = {
  apartments: {
    en: "SERVICED APARTMENTS",
    rows: [
      { label: "شقة بغرفة نوم واحدة", price: products[0].groups[0].units[0].price },
      { label: "شقة بغرفتي نوم", price: products[0].groups[0].units[1].price },
      { label: "شقة بثلاث غرف نوم", price: products[0].groups[0].units[2].price },
    ],
  },
  clinics: {
    en: "MEDICA CLINICS",
    rows: products[1].groups[0].units.map((u) => ({ label: `عيادة ${u.spec}`, price: u.price })),
  },
};

function Board({ tab, hiddenOnMobile }: { tab: Tab; hiddenOnMobile: boolean }) {
  const l = lists[tab];
  return (
    <div id={`prices-${tab}`} className={`${hiddenOnMobile ? "hidden md:block" : ""} scroll-mt-24`}>
      <p className="num mb-2 text-[13px] font-semibold tracking-[0.16em] text-walnut md:text-sm">{l.en}</p>
      <ul className="border-t-2 border-ink">
        {l.rows.map((r) => (
          <li
            key={r.label}
            className={`flex items-baseline justify-between gap-4 border-b border-line ${
              tab === "apartments" ? "py-[18px] md:py-[22px]" : "py-[14px]"
            }`}
          >
            <span className="text-base md:text-lg">{r.label}</span>
            <span className="num text-[21px] font-semibold md:text-[25px]">{fmt(r.price)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Prices() {
  const [tab, setTab] = useState<Tab>("apartments");

  useEffect(() => {
    const sync = () => {
      if (location.hash === "#prices-clinics") setTab("clinics");
      if (location.hash === "#prices-apartments") setTab("apartments");
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return (
    <section id="prices" className="mx-auto max-w-[1240px] px-5 pt-16 md:px-8 md:pt-24">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-[28px] font-semibold md:text-[44px]">أسعار الإطلاق</h2>
        <p className="text-sm text-mute md:text-[15px]">أسعار بداية بالجنيه المصري، وقابلة للتغيير وفقًا للمتاح</p>
      </div>

      <div className="mt-5 flex rounded-full border border-ink p-1 md:hidden" role="tablist" aria-label="نوع الوحدة">
        {(
          [
            ["apartments", "الشقق"],
            ["clinics", "العيادات"],
          ] as const
        ).map(([k, l]) => (
          <button
            key={k}
            role="tab"
            aria-selected={tab === k}
            onClick={() => setTab(k)}
            className={`flex-1 rounded-full py-3 text-[15px] font-semibold transition ${
              tab === k ? "bg-ink text-paper" : "text-ink"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-14 md:mt-9 md:grid-cols-2">
        <Board tab="apartments" hiddenOnMobile={tab !== "apartments"} />
        <Board tab="clinics" hiddenOnMobile={tab !== "clinics"} />
      </div>
    </section>
  );
}
