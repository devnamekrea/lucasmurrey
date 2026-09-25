/**
 * Server-side visit counter.
 * Runs on the server every time the homepage is requested, so it counts every visit,
 * including search-engine bots and link-preview crawlers that never run JavaScript.
 * The running total is kept in an Upstash Redis database (connected through Vercel → Storage).
 * If the database isn't connected yet, the counter simply doesn't appear.
 */
const KEY = 'lucasmurrey:visits';

async function increment(): Promise<number | null> {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  try {
    const res = await fetch(`${url}/incr/${KEY}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { result?: number | string };
    const n = Number(data.result);
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
}

export default async function VisitCounter() {
  const n = await increment();
  if (n === null) return null;
  return (
    <p className="mt-[0.4em]">
      {n.toLocaleString('en-US')} {n === 1 ? 'visit' : 'visits'}
    </p>
  );
}
