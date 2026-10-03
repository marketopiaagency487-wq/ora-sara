"use client";

import { site, waLink, waMessage, mailLink } from "@/lib/site";
import { track } from "@/lib/track";

type L = { className?: string; children: React.ReactNode; interest?: string | null; "aria-label"?: string };

export function WaLink({ className, children, interest, ...rest }: L) {
  return (
    <a
      href={waLink(waMessage(interest))}
      target="_blank"
      rel="noopener"
      onClick={() => track("whatsapp")}
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}

export function CallLink({ className, children, ...rest }: L) {
  return (
    <a href={`tel:${site.phoneIntl}`} onClick={() => track("call")} className={className} {...rest}>
      {children}
    </a>
  );
}

export function MailLink({ className, children, interest, ...rest }: L) {
  return (
    <a href={mailLink(interest)} onClick={() => track("email")} className={className} {...rest}>
      {children}
    </a>
  );
}
