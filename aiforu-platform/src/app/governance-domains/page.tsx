import type { Metadata } from "next";
import { GovernanceCapabilityMap } from "@/components/governance/governance-capability-map";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Governance Domains",
  description: "[Governance Domains — Meta Description Placeholder]",
  path: "/governance-domains",
});

export default function GovernanceDomainsPage() {
  return (
    <>
      <PageHero
        eyebrow="Capability Map"
        title="Governance Domains"
        description="[Governance Domains — Page Description Placeholder. A structured map of the practice, not a services list — grouped so the taxonomy can grow without a redesign.]"
      />
      <section className="py-section-sm">
        <Container size="wide">
          <GovernanceCapabilityMap variant="full" />
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
