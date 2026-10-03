"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { WaLink, CallLink, MailLink } from "./contact-links";
import { WaIcon, PhoneIcon, MailIcon } from "./icons";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1.3fr_1fr_1fr] gap-2 border-t border-line bg-paper/95 px-3 py-2.5 backdrop-blur md:hidden">
      <WaLink className="flex items-center justify-center gap-2 rounded-full bg-wa py-3 text-sm font-semibold text-white">
        <WaIcon className="h-[18px] w-[18px]" />
        واتساب
      </WaLink>
      <CallLink className="flex items-center justify-center gap-1.5 rounded-full bg-ink py-3 text-sm font-semibold text-paper">
        <PhoneIcon className="h-4 w-4" />
        اتصال
      </CallLink>
      <MailLink className="flex items-center justify-center gap-1.5 rounded-full border border-ink py-3 text-sm font-semibold text-ink">
        <MailIcon className="h-4 w-4" />
        بريد
      </MailLink>
    </div>
  );
}

export function CookieConsent() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      if (!window.localStorage.getItem("cookie-ok")) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-x-3 bottom-20 z-50 mx-auto max-w-3xl rounded-md bg-ink px-5 py-4 text-paper shadow-xl md:bottom-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm leading-7 text-[#CFC6BA]">
          نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح وقياس أداء الحملات.
        </p>
        <button
          onClick={() => {
            try {
              window.localStorage.setItem("cookie-ok", "1");
            } catch {}
            setShow(false);
          }}
          className="rounded-full bg-paper px-5 py-2 text-sm font-semibold text-ink"
        >
          موافق
        </button>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink-2 bg-ink pb-24 text-[#A9A096] md:pb-0">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-5 py-7 text-[13px] leading-7 md:px-8">
        <p className="max-w-3xl">
          {site.agency} — وسيط عقاري معتمد، وهذا الموقع ليس الموقع الرسمي لأورا للتطوير
          العقاري. الأسعار ومساحات الوحدات وأنظمة السداد استرشادية وقابلة للتغيير.
        </p>
        <nav className="flex gap-5">
          <Link href="/about" className="hover:text-paper">من نحن</Link>
          <Link href="/privacy" className="hover:text-paper">سياسة الخصوصية</Link>
          <Link href="/disclaimer" className="hover:text-paper">إخلاء المسؤولية</Link>
        </nav>
      </div>
    </footer>
  );
}
