import { Approach } from "@/components/Approach";
import { ContactCta } from "@/components/ContactCta";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Marquee } from "@/components/Marquee";
import { Preloader } from "@/components/Preloader";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Services } from "@/components/Services";
import { SiteChrome } from "@/components/SiteChrome";
import { WorkGallery } from "@/components/WorkGallery";

export default function Home() {
  return (
    <>
      <Preloader />
      <SiteChrome mainClassName={undefined}>
        <Hero />
        <WorkGallery limit={8} />
        <Marquee />
        <Manifesto />
        <Services />
        <Approach />
        <ProcessTimeline />
        <ContactCta />
      </SiteChrome>
    </>
  );
}
