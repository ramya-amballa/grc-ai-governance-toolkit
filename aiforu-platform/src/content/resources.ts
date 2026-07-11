import type { Resource } from "@/types";

/**
 * Resources — frameworks, checklists, playbooks, reference
 * architectures and toolkits. Designed as the platform's largest
 * long-term collection: `type` and `accessTier` drive the filters on
 * /resources so this can grow to hundreds of entries without a
 * redesign. `accessTier: "Premium"` is a labelling placeholder only —
 * no gating/paywall is wired up in Phase 2.
 */
export const resources: Resource[] = [
  {
    slug: "ai-governance-maturity-framework",
    title: "[Resource Title Placeholder — AI Governance Maturity Framework]",
    type: "Framework",
    accessTier: "Free",
    domainSlugs: ["ai-governance"],
    description: "[Resource Description Placeholder]",
    featured: true,
  },
  {
    slug: "ai-governance-decision-playbook",
    title: "[Resource Title Placeholder — AI Governance Decision Playbook]",
    type: "Playbook",
    accessTier: "Premium",
    domainSlugs: ["ai-governance", "responsible-ai"],
    description: "[Resource Description Placeholder]",
    featured: true,
  },
  {
    slug: "third-party-risk-assessment-checklist",
    title: "[Resource Title Placeholder — Third Party Risk Assessment Checklist]",
    type: "Checklist",
    accessTier: "Free",
    domainSlugs: ["third-party-governance"],
    description: "[Resource Description Placeholder]",
    featured: true,
  },
  {
    slug: "dpdp-readiness-briefing",
    title: "[Resource Title Placeholder — DPDP Readiness Briefing]",
    type: "Briefing",
    accessTier: "Free",
    domainSlugs: ["dpdp-governance-readiness"],
    description: "[Resource Description Placeholder]",
    featured: true,
  },
  {
    slug: "dpdp-compliance-toolkit",
    title: "[Resource Title Placeholder — DPDP Compliance Toolkit]",
    type: "Toolkit",
    accessTier: "Premium",
    domainSlugs: ["dpdp-governance-readiness", "operational-compliance"],
    description: "[Resource Description Placeholder]",
    featured: false,
  },
  {
    slug: "governance-operating-model-template",
    title: "[Resource Title Placeholder — Governance Operating Model Template]",
    type: "Template",
    accessTier: "Premium",
    domainSlugs: ["governance-transformation"],
    description: "[Resource Description Placeholder]",
    featured: false,
  },
  {
    slug: "technology-risk-whitepaper",
    title: "[Resource Title Placeholder — Technology Risk Whitepaper]",
    type: "Whitepaper",
    accessTier: "Free",
    domainSlugs: ["technology-risk"],
    description: "[Resource Description Placeholder]",
    featured: false,
  },
  {
    slug: "cyber-governance-reference-architecture",
    title: "[Resource Title Placeholder — Cyber Governance Reference Architecture]",
    type: "Reference Architecture",
    accessTier: "Premium",
    domainSlugs: ["cyber-governance"],
    description: "[Resource Description Placeholder]",
    featured: false,
  },
  {
    slug: "government-digital-governance-artefact-pack",
    title: "[Resource Title Placeholder — Government Digital Governance Artefact Pack]",
    type: "Toolkit",
    accessTier: "Free",
    domainSlugs: ["government-digital-governance"],
    description: "[Resource Description Placeholder]",
    featured: true,
  },
  {
    slug: "audit-readiness-checklist",
    title: "[Resource Title Placeholder — Audit Readiness Checklist]",
    type: "Checklist",
    accessTier: "Free",
    domainSlugs: ["audit-readiness"],
    description: "[Resource Description Placeholder]",
    featured: false,
  },
];

export function getResourceBySlug(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}
