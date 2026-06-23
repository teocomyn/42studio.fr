import dynamic from "next/dynamic";
import { ClientStrip } from "@/components/ClientStrip";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Marquee } from "@/components/Marquee";
import { Preloader } from "@/components/Preloader";
import { Services } from "@/components/Services";
import { SiteChrome } from "@/components/SiteChrome";
import { Testimonials } from "@/components/Testimonials";
import { WorkGallery } from "@/components/WorkGallery";

const ProcessTimeline = dynamic(() =>
  import("@/components/ProcessTimeline").then((mod) => ({ default: mod.ProcessTimeline }))
);

const ContactCta = dynamic(() =>
  import("@/components/ContactCta").then((mod) => ({ default: mod.ContactCta }))
);

export default function Home() {
  return (
    <>
      <Preloader />
      <SiteChrome mainClassName={undefined}>
        <Hero />
        <ClientStrip />
        <WorkGallery limit={8} />
        <Marquee />
        <Manifesto />
        <Services />
        <Testimonials />
        <ProcessTimeline />
        <ContactCta />
      </SiteChrome>
    </>
  );
}
