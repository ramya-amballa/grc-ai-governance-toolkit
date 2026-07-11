import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { GovernanceDomainDetail } from "@/components/governance/governance-domain-detail";
import { BackLink } from "@/components/ui/back-link";
import { advisoryEngagements } from "@/content/advisory-engagements";
import { getGovernanceCluster } from "@/content/governance-clusters";
import { getGovernanceDomainBySlug, governanceDomains } from "@/content/governance-domains";
import { insights } from "@/content/insights";
import { resources } from "@/content/resources";
import { buildMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return governanceDomains.map((domain) => ({ slug: domain.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const domain = getGovernanceDomainBySlug(slug);
  if (!domain) return buildMetadata({ title: "Domain Not Found", noIndex: true });

  return buildMetadata({
    title: domain.name,
    description: domain.summary,
    path: `/governance-domains/${domain.slug}`,
  });
}

export default async function GovernanceDomainPage({ params }: PageProps) {
  const { slug } = await params;
  const domain = getGovernanceDomainBySlug(slug);
  if (!domain) notFound();

  const relatedEngagements = advisoryEngagements.filter((engagement) =>
    domain.relatedEngagementSlugs.includes(engagement.slug),
  );
  const relatedInsights = insights.filter((insight) => domain.relatedInsightSlugs.includes(insight.slug));
  const relatedResources = resources.filter((resource) => domain.relatedResourceSlugs.includes(resource.slug));
  const cluster = getGovernanceCluster(domain.cluster);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Governance Domains", href: "/governance-domains" },
          { label: domain.name, href: `/governance-domains/${domain.slug}` },
        ]}
      />
      <GovernanceDomainDetail
        domain={domain}
        cluster={cluster}
        relatedEngagements={relatedEngagements}
        relatedInsights={relatedInsights}
        relatedResources={relatedResources}
      />
      <BackLink href="/governance-domains" label="All Governance Domains" />
    </>
  );
}
