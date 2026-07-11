import Link from "next/link";
import { buildQueryString } from "@/lib/query";
import { cn } from "@/lib/utils";

interface FilterPillsProps {
  label: string;
  filterKey: string;
  options: { label: string; value: string }[];
  searchParams: Record<string, string | string[] | undefined>;
  basePath: string;
}

/**
 * Server-rendered filter control: each pill is a plain link that sets
 * (or clears) one query param and resets pagination. No client JS,
 * so it works identically once content/*.ts grows to hundreds of
 * entries behind a real query layer.
 */
export function FilterPills({ label, filterKey, options, searchParams, basePath }: FilterPillsProps) {
  const active = searchParams[filterKey];
  const activeValue = Array.isArray(active) ? active[0] : active;

  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
      <span className="text-eyebrow uppercase tracking-widest text-muted mr-1">{label}</span>
      <Link
        href={basePath + buildQueryString(searchParams, { [filterKey]: undefined, page: undefined })}
        className={cn(
          "rounded-xs border px-3 py-1 text-sm transition-colors",
          !activeValue ? "border-ink text-ink" : "border-border text-muted hover:border-accent hover:text-ink",
        )}
      >
        All
      </Link>
      {options.map((option) => (
        <Link
          key={option.value}
          href={basePath + buildQueryString(searchParams, { [filterKey]: option.value, page: undefined })}
          className={cn(
            "rounded-xs border px-3 py-1 text-sm transition-colors",
            activeValue === option.value
              ? "border-ink text-ink"
              : "border-border text-muted hover:border-accent hover:text-ink",
          )}
        >
          {option.label}
        </Link>
      ))}
    </div>
  );
}
