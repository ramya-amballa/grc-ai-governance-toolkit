import type { CurrentPrioritiesSnapshot } from "@/types";

/**
 * A "now page" style snapshot of active focus — not a news feed, not
 * a project list. Update `updatedAt` every time `items` changes so
 * staleness is visible in the data itself; a homepage warning can
 * later be added if this drifts too far out of date.
 */
export const currentPriorities: CurrentPrioritiesSnapshot = {
  updatedAt: "2026-07",
  items: [
    { label: "[Current Priority Placeholder — AI governance implementation]", domainSlug: "ai-governance" },
    { label: "[Current Priority Placeholder — DPDP readiness]", domainSlug: "dpdp-governance-readiness" },
    { label: "[Current Priority Placeholder — Government digital governance]", domainSlug: "government-digital-governance" },
    { label: "[Current Priority Placeholder — Technology risk]", domainSlug: "technology-risk" },
    { label: "[Current Priority Placeholder — Executive governance frameworks]", domainSlug: "governance-transformation" },
  ],
};
