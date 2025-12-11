import Hero from "@/components/hero";
import Stats from "@/components/stats";
import BG from "@/components/lights-bg";
import Audience from "@/components/audience";
import { Services } from "@/components/services";
import { WhyChooseUsSection } from "@/components/why-choose-us";
import { ContactSection } from "@/components/contact";
import CTA from "@/components/final-cta"
import Footer from "@/components/footer";
import  Navbar  from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-full rounded-md  bg-black/96 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* <Spotlight /> */}
      <BG />
      <main className="max-w-6xl mx-auto relative z-50">
        <Navbar/>
        <Hero />
        <Stats />
        <Audience />
        <Services />
        <WhyChooseUsSection/>
        <ContactSection/>
        <CTA/>
        <Footer/>
      </main>
    </div>
  );
}
