import type { GovernanceCluster } from "@/types";

/**
 * The four groupings of the governance domain capability map. Clusters
 * are a fixed, coarse taxonomy — domains are the unit that grows over
 * time. Adding a new domain means adding one entry to
 * governance-domains.ts with an existing cluster id; it does not
 * require a new cluster or a navigation change.
 */
export const governanceClusters: GovernanceCluster[] = [
  {
    id: "emerging-technology-governance",
    name: "Emerging Technology Governance",
    description: "[Cluster Description Placeholder — AI, responsible AI and digital governance.]",
  },
  {
    id: "risk-cyber-assurance",
    name: "Risk, Cyber & Assurance",
    description: "[Cluster Description Placeholder — technology risk, cyber governance, enterprise risk and audit readiness.]",
  },
  {
    id: "regulatory-privacy-third-party",
    name: "Regulatory, Privacy & Third-Party",
    description: "[Cluster Description Placeholder — privacy, DPDP readiness, third-party governance and operational compliance.]",
  },
  {
    id: "public-sector-transformation",
    name: "Public Sector & Transformation",
    description: "[Cluster Description Placeholder — government digital governance and governance transformation.]",
  },
];

export function getGovernanceCluster(id: string) {
  return governanceClusters.find((cluster) => cluster.id === id);
}
