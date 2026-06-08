import { Approach } from "@/components/Approach";
import { ContactCta } from "@/components/ContactCta";
import { Cursor } from "@/components/Cursor";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LenisProvider } from "@/components/LenisProvider";
import { Manifesto } from "@/components/Manifesto";
import { Marquee } from "@/components/Marquee";
import { Preloader } from "@/components/Preloader";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Services } from "@/components/Services";
import { WorkGallery } from "@/components/WorkGallery";

export default function Home() {
  return (
    <LenisProvider>
      <Preloader />
      <Cursor />
      <div className="site-shell">
        <div className="grid-overlay" />
        <Header />
        <main>
          <Hero />
          <Marquee />
          <Manifesto />
          <Services />
          <Approach />
          <WorkGallery />
          <ProcessTimeline />
          <ContactCta />
        </main>
      </div>
    </LenisProvider>
  );
}
