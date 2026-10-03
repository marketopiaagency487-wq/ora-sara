import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { site, fmt, minPrice } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "سولانا إيست لين من أورا | شقق فندقية وعيادات على التسعين الجنوبي",
  description: `سولانا إيست لين من أورا للتطوير العقاري على شارع التسعين الجنوبي بالتجمع الخامس. شقق فندقية مخدومة تبدأ من ${fmt(
    minPrice
  )} جنيه وعيادات ميديكا متشطبة بالكامل. جدية حجز 5% وتقسيط حتى 9 سنين.`,
  keywords: [
    "سولانا إيست لين",
    "Solana East Lane",
    "سولانا ايست اورا",
    "ميديكا سولانا",
    "Medica Solana",
    "عيادات التسعين الجنوبي",
    "شقق فندقية التجمع الخامس",
    "أورا للتطوير العقاري",
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: site.url,
    siteName: site.project,
    title: "سولانا إيست لين — أورا على التسعين الجنوبي",
    description: "شقق فندقية مخدومة تبدأ من 8.9 مليون جنيه، وعيادات تبدأ من 14 مليون جنيه. جدية حجز 5%.",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "سولانا إيست لين — أورا",
    description: "شقق فندقية وعيادات على التسعين الجنوبي. جدية حجز 5%.",
    images: ["/images/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1e1c19",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      name: site.agency,
      url: site.url,
      telephone: site.phoneIntl,
      email: site.email,
      areaServed: "New Cairo, Egypt",
      address: {
        "@type": "PostalAddress",
        addressLocality: "القاهرة الجديدة",
        addressRegion: "القاهرة",
        addressCountry: "EG",
      },
    },
    {
      "@type": "Place",
      name: "Solana East Lane by ORA",
      description:
        "مشروع من أورا للتطوير العقاري على مساحة 26.6 فدان على شارع التسعين الجنوبي، يضم شققًا فندقية مخدومة ومبنى عيادات.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "شارع التسعين الجنوبي، التجمع الخامس",
        addressRegion: "القاهرة",
        addressCountry: "EG",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alexandria:wght@400;500;600;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}

        {/* Google Ads — ضع الـ tag ID في lib/site.ts قبل النشر */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.gtag}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.gtag}');`}
        </Script>
      </body>
    </html>
  );
}
