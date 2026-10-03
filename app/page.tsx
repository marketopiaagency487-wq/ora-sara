import Header from "@/components/header";
import Hero from "@/components/hero";
import Paths from "@/components/paths";
import Prices from "@/components/prices";
import Plans from "@/components/plans";
import Gallery from "@/components/gallery";
import About from "@/components/about";
import Faq from "@/components/faq";
import Contact from "@/components/contact";
import { MobileBar, CookieConsent, Footer } from "@/components/chrome";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Paths />
        <Prices />
        <Plans />
        <Gallery />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
      <CookieConsent />
    </>
  );
}
