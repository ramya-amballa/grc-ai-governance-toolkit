import type { Metadata } from "next";
import Link from "next/link";
import { AdvisoryEngagementGrid } from "@/components/advisory/advisory-engagement-grid";
import { ArticleGrid } from "@/components/article/article-grid";
import { GovernanceCapabilityMap } from "@/components/governance/governance-capability-map";
import { CtaBand } from "@/components/sections/cta-band";
import { CurrentPrioritiesSection } from "@/components/sections/current-priorities-section";
import { PointOfViewSection } from "@/components/sections/point-of-view-section";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, personSchema } from "@/components/seo/schema";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Placeholder } from "@/components/ui/placeholder";
import { SectionHeading } from "@/components/ui/section-heading";
import { advisoryEngagements } from "@/content/advisory-engagements";
import { currentPriorities } from "@/content/current-priorities";
import { getPointOfViewInsights, insights } from "@/content/insights";
import { buildMetadata } from "@/lib/metadata";
import { primaryCta, secondaryCta } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "[Homepage Title Placeholder]",
  description: "[Homepage Meta Description Placeholder]",
  path: "/",
});

export default function HomePage() {
  const featuredEngagements = advisoryEngagements.filter((engagement) => engagement.featured).slice(0, 3);
  const pointOfViewPieces = getPointOfViewInsights().filter((piece) => piece.featured).slice(0, 3);
  const featuredInsights = insights
    .filter((insight) => insight.featured && insight.format !== "Point of View")
    .slice(0, 3);

  return (
    <>
      <JsonLd data={personSchema()} />
      <JsonLd data={organizationSchema()} />

      {/* Hero */}
      <section className="border-b border-border py-section-lg">
        <Container size="wide">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Eyebrow>Independent Advisory</Eyebrow>
              <h1 className="mt-6 max-w-4xl font-serif text-display-lg text-ink balance">
                [Hero Title Placeholder]
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted pretty">
                [Executive Introduction Placeholder — one to two sentences establishing independent advisory
                positioning and point of view, not a services pitch.]
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Button href={primaryCta.href} variant="primary" size="lg">
                  {primaryCta.label}
                </Button>
                <Link href={secondaryCta.href} className="text-sm text-ink underline underline-offset-4 decoration-border hover:decoration-accent hover:text-accent">
                  {secondaryCta.label} &rarr;
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4">
              <Placeholder label="Executive Portrait Placeholder" aspect="portrait" />
            </div>
          </div>
        </Container>
      </section>

      <CurrentPrioritiesSection snapshot={currentPriorities} />

      <PointOfViewSection pieces={pointOfViewPieces} />

      {/* Why organisations engage her */}
      <section className="border-t border-border py-section">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="About Ramya" title="[Why Organisations Engage Her — Heading Placeholder]" />
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-lg leading-relaxed text-ink pretty">[Why Organisations Engage Her — Paragraph Placeholder 1]</p>
              <p className="mt-6 text-base leading-relaxed text-muted pretty">
                [Why Organisations Engage Her — Paragraph Placeholder 2]
              </p>
              <Link href="/about" className="mt-6 inline-block text-sm text-accent underline underline-offset-4">
                [Read Full Profile Placeholder]
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Governance domains — capability map */}
      <section className="border-t border-border py-section">
        <Container size="wide">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Capability Map"
              title="Governance Domains"
              description="[Governance Domains Section Description Placeholder]"
            />
            <Button href="/governance-domains" variant="ghost">
              View the full map &rarr;
            </Button>
          </div>
          <div className="mt-12">
            <GovernanceCapabilityMap variant="compact" />
          </div>
        </Container>
      </section>

      {/* Selected advisory engagements */}
      <section className="border-t border-border py-section">
        <Container size="wide">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Selected Work"
              title="Selected Advisory Engagements"
              description="[Selected Advisory Engagements Section Description Placeholder]"
            />
            <Button href="/selected-advisory-engagements" variant="ghost">
              View all engagements &rarr;
            </Button>
          </div>
          <div className="mt-12">
            <AdvisoryEngagementGrid engagements={featuredEngagements} />
          </div>
        </Container>
      </section>

      {/* Insights */}
      <section className="border-t border-border py-section">
        <Container size="wide">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Perspective"
              title="Insights"
              description="[Insights Section Description Placeholder]"
            />
            <Button href="/insights" variant="ghost">
              View all insights &rarr;
            </Button>
          </div>
          <div className="mt-12">
            <ArticleGrid insights={featuredInsights} />
          </div>
        </Container>
      </section>

      <CtaBand
        title="[Homepage Closing CTA Title Placeholder]"
        description="[Homepage Closing CTA Description Placeholder]"
      />
    </>
  );
}
