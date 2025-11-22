import axios from "axios";
import type { VercelRequest, VercelResponse } from "@vercel/node";

// In-memory cache (persists for warm serverless instances)
let cache: { data: string[] | null; ts: number } = { data: null, ts: 0 };
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (cache.data && Date.now() - cache.ts < CACHE_TTL_MS) {
      return res.status(200).json(cache.data);
    }

    const TARGET = process.env.COUNTRIES_API_URL || "https://www.apicountries.com/countries";
    const API_KEY = process.env.COUNTRIES_API_KEY;

    const response = await axios.get(TARGET, {
      params: req.query,
      timeout: 10000,
      headers: API_KEY ? { Authorization: `Bearer ${API_KEY}` } : undefined,
    });

    const data = response?.data;

    // Normalize to an array of country names (strings)
    let items: any[] = [];
    if (Array.isArray(data)) items = data;
    else if (Array.isArray(data?.data)) items = data.data;
    else items = [];

    const countryNames = items
      .map((c: any) => {
        if (!c) return null;
        if (typeof c === "string") return c;
        return (
          c?.name?.common ??
          c?.name ??
          c?.country ??
          c?.country_name ??
          c?.common_name ??
          c?.official ??
          null
        );
      })
      .filter(Boolean)
      .sort((a: string, b: string) => a.localeCompare(b));

    cache = { data: countryNames as string[], ts: Date.now() };
    return res.status(200).json(countryNames);
  } catch (err: any) {
    console.error("Serverless proxy error:", err?.message || err);
    return res.status(502).json({ error: "Failed to fetch countries" });
  }
}
