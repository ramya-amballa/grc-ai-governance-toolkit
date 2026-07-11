import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { personSchema } from "@/components/seo/schema";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Placeholder } from "@/components/ui/placeholder";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "[About — Meta Description Placeholder]",
  path: "/about",
});

const environments = [
  "[Environment Placeholder — Financial Services]",
  "[Environment Placeholder — Government & Public Sector]",
  "[Environment Placeholder — Healthcare]",
  "[Environment Placeholder — Technology]",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema()} />

      {/* Identity */}
      <section className="border-b border-border py-section">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow>About {site.advisorName}</Eyebrow>
              <h1 className="mt-6 font-serif text-display text-ink balance">[About Page Title Placeholder]</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted pretty">[About — Lead Paragraph Placeholder]</p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <Placeholder label="Executive Portrait Placeholder" aspect="portrait" />
            </div>
          </div>
        </Container>
      </section>

      {/* Why I do this work */}
      <section className="py-section">
        <Container size="narrow">
          <h2 className="font-serif text-title text-ink">Why I Do This Work</h2>
          <div className="mt-6 space-y-6">
            <p className="text-base leading-relaxed text-ink pretty">[Why I Do This Work — Paragraph Placeholder 1]</p>
            <p className="text-base leading-relaxed text-ink pretty">[Why I Do This Work — Paragraph Placeholder 2]</p>
          </div>
        </Container>
      </section>

      <Divider />

      {/* How I think */}
      <section className="py-section">
        <Container size="narrow">
          <h2 className="font-serif text-title text-ink">How I Think About Governance</h2>
          <blockquote className="mt-6 border-l-2 border-accent pl-6 font-serif text-xl italic leading-relaxed text-ink">
            [Governance Philosophy — Pull-Quote Placeholder]
          </blockquote>
          <div className="mt-6 space-y-6">
            <p className="text-base leading-relaxed text-ink pretty">[How I Think — Paragraph Placeholder 1]</p>
            <p className="text-base leading-relaxed text-ink pretty">[How I Think — Paragraph Placeholder 2]</p>
          </div>
        </Container>
      </section>

      <Divider />

      {/* Experience across environments */}
      <section className="py-section">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="font-serif text-title text-ink">Experience Across Enterprise &amp; Regulated Environments</h2>
              <p className="mt-6 text-base leading-relaxed text-muted pretty">
                [Experience — Introductory Paragraph Placeholder. Qualitative description of the kinds of
                organisations and regulatory environments the work has spanned — not a chronological résumé.]
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="text-eyebrow uppercase tracking-widest text-muted">Environments</p>
              <ul className="mt-4 space-y-3 border-t border-border pt-4">
                {environments.map((environment) => (
                  <li key={environment} className="text-sm text-ink">
                    {environment}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted">[Credentials — Single-Line Placeholder]</p>
            </div>
          </div>
        </Container>
      </section>

      <Divider />

      {/* How I work */}
      <section className="py-section">
        <Container size="narrow">
          <h2 className="font-serif text-title text-ink">How I Work</h2>
          <div className="mt-6 space-y-6">
            <p className="text-base leading-relaxed text-ink pretty">[How I Work — Engagement Model Placeholder]</p>
            <p className="text-base leading-relaxed text-muted pretty">[How I Work — What I Don&apos;t Take On Placeholder]</p>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
