import dynamic from "next/dynamic";
import { ClientStrip } from "@/components/ClientStrip";
import { Hero } from "@/components/Hero";
import { SiteChrome } from "@/components/SiteChrome";

const Preloader = dynamic(() =>
  import("@/components/Preloader").then((mod) => ({ default: mod.Preloader }))
);

const WorkGallery = dynamic(() =>
  import("@/components/WorkGallery").then((mod) => ({ default: mod.WorkGallery }))
);

const Marquee = dynamic(() => import("@/components/Marquee").then((mod) => ({ default: mod.Marquee })));

const Manifesto = dynamic(() =>
  import("@/components/Manifesto").then((mod) => ({ default: mod.Manifesto }))
);

const Services = dynamic(() => import("@/components/Services").then((mod) => ({ default: mod.Services })));

const Testimonials = dynamic(() =>
  import("@/components/Testimonials").then((mod) => ({ default: mod.Testimonials }))
);

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
