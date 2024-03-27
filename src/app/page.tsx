import { AboutSection, ContactSection, Footer, Header, HeroSection, PricingSection } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <HeroSection/>
      <AboutSection/>
      <PricingSection/>
      <ContactSection/>
    </main>
      <Footer/>
    </>
  );
}
