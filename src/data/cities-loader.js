// Lightweight loader for Indian cities/towns from a public dataset.
// Falls back to local cities list if remote fetch is unavailable.

import localCities from "@/data/cities";

// Public dataset: Indian cities JSON (vinitshahdeo/Indian-Cities-Database)
// Large list (thousands). We will sample client-side.
const REMOTE_URL =
  "";

const toSlug = (name) =>
  String(name)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

/**
 * Fetch cities from remote dataset and return an array of names.
 * The remote format is an array of objects with { name }.
 */
export async function fetchRemoteCities() {
  try {
    const res = await fetch(REMOTE_URL, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    // Expect [{ name: "Agra" }, ...]
    const names = Array.isArray(data)
      ? data
          .map((item) => (typeof item === "string" ? item : item?.name))
          .filter(Boolean)
      : [];
    return names;
  } catch (err) {
    // Swallow errors; caller can fallback to local.
    return null;
  }
}

/**
 * Load cities with remote-first strategy, fallback to local.
 * Returns a de-duplicated array of names by slug.
 */
export async function loadCities() {
  const remote = await fetchRemoteCities();
  const base = remote && remote.length > 0 ? remote : localCities;

  // Deduplicate by slug for clean routing/UI
  const bySlug = new Map(base.map((n) => [toSlug(n), n]));
  return Array.from(bySlug.values());
}