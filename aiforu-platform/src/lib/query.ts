type SearchParams = Record<string, string | string[] | undefined>;

/**
 * Merges `updates` into the current search params and serializes the
 * result. Passing `undefined` for a key removes it (used to clear a
 * filter or reset pagination when a filter changes).
 */
export function buildQueryString(current: SearchParams, updates: Record<string, string | undefined>): string {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(current)) {
    if (value === undefined || key in updates) continue;
    if (Array.isArray(value)) {
      value.forEach((v) => params.append(key, v));
    } else {
      params.set(key, value);
    }
  }

  for (const [key, value] of Object.entries(updates)) {
    if (value !== undefined) params.set(key, value);
  }

  const query = params.toString();
  return query ? `?${query}` : "";
}
