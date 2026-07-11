import Link from "next/link";
import { buildQueryString } from "@/lib/query";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  searchParams: Record<string, string | string[] | undefined>;
  basePath: string;
}

export function Pagination({ currentPage, totalPages, searchParams, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pageHref = (page: number) => basePath + buildQueryString(searchParams, { page: page === 1 ? undefined : String(page) });

  return (
    <nav aria-label="Pagination" className="mt-16 flex items-center justify-between border-t border-border pt-6">
      {currentPage > 1 ? (
        <Link href={pageHref(currentPage - 1)} className="text-sm text-ink hover:text-accent">
          &larr; Previous
        </Link>
      ) : (
        <span className="text-sm text-muted/40">&larr; Previous</span>
      )}

      <span className="font-mono text-xs uppercase tracking-widest text-muted">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages ? (
        <Link href={pageHref(currentPage + 1)} className="text-sm text-ink hover:text-accent">
          Next &rarr;
        </Link>
      ) : (
        <span className="text-sm text-muted/40">Next &rarr;</span>
      )}
    </nav>
  );
}
