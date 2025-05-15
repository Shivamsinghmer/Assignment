import HeroSection from "@/components/sections/hero-section";
import ProcessSection from "@/components/sections/process-section";
import ValuePropositionSection from "@/components/sections/value-proposition-section";
import SocialProofSection from "@/components/sections/social-proof-section";
import LeadGenerationForm from "@/components/sections/lead-generation-form";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProcessSection />
      <ValuePropositionSection />
      <SocialProofSection />
      <LeadGenerationForm />
    </>
  );
}
