import type { Insight } from "@/types";

/**
 * Insights — the perspective library. `format` distinguishes original
 * Point of View pieces (frameworks, decision models, governance
 * perspectives — the site's signature content) from shorter
 * Governance Notes, Briefings and Field Notes, without splitting them
 * into separate collections or routes. The homepage's Point of View
 * section is simply insights.filter(i => i.format === "Point of View").
 */
export const insights: Insight[] = [
  {
    slug: "judgment-over-frameworks",
    title: "[Point of View Title Placeholder — Judgment Over Frameworks]",
    format: "Point of View",
    category: "Governance Philosophy",
    domainSlugs: ["ai-governance", "governance-transformation"],
    date: "2026-01-01",
    readTime: "[Read Time Placeholder]",
    excerpt: "[Point of View Excerpt Placeholder]",
    featured: true,
  },
  {
    slug: "governance-debt",
    title: "[Point of View Title Placeholder — Governance Debt]",
    format: "Point of View",
    category: "Risk Governance",
    domainSlugs: ["technology-risk", "enterprise-risk-governance"],
    date: "2026-01-01",
    readTime: "[Read Time Placeholder]",
    excerpt: "[Point of View Excerpt Placeholder]",
    featured: true,
  },
  {
    slug: "third-party-accountability-gap",
    title: "[Point of View Title Placeholder — The Third-Party Accountability Gap]",
    format: "Point of View",
    category: "Third Party Governance",
    domainSlugs: ["third-party-governance", "privacy-data-governance"],
    date: "2026-01-01",
    readTime: "[Read Time Placeholder]",
    excerpt: "[Point of View Excerpt Placeholder]",
    featured: true,
  },
  {
    slug: "ai-governance-board-oversight",
    title: "[Insight Title Placeholder — AI Governance & Board Oversight]",
    format: "Governance Note",
    category: "AI Governance",
    domainSlugs: ["ai-governance"],
    date: "2026-01-01",
    readTime: "[Read Time Placeholder]",
    excerpt: "[Insight Excerpt Placeholder]",
    featured: true,
  },
  {
    slug: "third-party-risk-in-regulated-sectors",
    title: "[Insight Title Placeholder — Third Party Risk]",
    format: "Briefing",
    category: "Third Party Governance",
    domainSlugs: ["third-party-governance"],
    date: "2026-01-01",
    readTime: "[Read Time Placeholder]",
    excerpt: "[Insight Excerpt Placeholder]",
    featured: false,
  },
  {
    slug: "dpdp-readiness-priorities",
    title: "[Insight Title Placeholder — DPDP Readiness Priorities]",
    format: "Briefing",
    category: "DPDP Governance & Readiness",
    domainSlugs: ["dpdp-governance-readiness"],
    date: "2026-01-01",
    readTime: "[Read Time Placeholder]",
    excerpt: "[Insight Excerpt Placeholder]",
    featured: true,
  },
  {
    slug: "technology-risk-appetite",
    title: "[Insight Title Placeholder — Technology Risk Appetite]",
    format: "Governance Note",
    category: "Technology Risk",
    domainSlugs: ["technology-risk"],
    date: "2026-01-01",
    readTime: "[Read Time Placeholder]",
    excerpt: "[Insight Excerpt Placeholder]",
    featured: false,
  },
  {
    slug: "government-digital-governance-maturity",
    title: "[Insight Title Placeholder — Government Digital Governance Maturity]",
    format: "Field Note",
    category: "Government Digital Governance",
    domainSlugs: ["government-digital-governance"],
    date: "2026-01-01",
    readTime: "[Read Time Placeholder]",
    excerpt: "[Insight Excerpt Placeholder]",
    featured: false,
  },
  {
    slug: "governance-transformation-operating-models",
    title: "[Insight Title Placeholder — Governance Transformation]",
    format: "Governance Note",
    category: "Governance Transformation",
    domainSlugs: ["governance-transformation"],
    date: "2026-01-01",
    readTime: "[Read Time Placeholder]",
    excerpt: "[Insight Excerpt Placeholder]",
    featured: true,
  },
];

export function getInsightBySlug(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}

export function getPointOfViewInsights() {
  return insights.filter((insight) => insight.format === "Point of View");
}
