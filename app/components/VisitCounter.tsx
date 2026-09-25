/**
 * Server-side visit counter.
 * Runs on the server every time the homepage is requested, so it counts every visit,
 * including search-engine bots and link-preview crawlers that never run JavaScript.
 * The running total is kept in an Upstash Redis database (connected through Vercel → Storage).
 * If the database can't be reached, the counter is hidden and the reason is written to
 * Vercel's logs (project → Logs), so the page itself never breaks.
 */
const KEY = 'lucasmurrey:visits';

async function increment(): Promise<number | null> {
  const url = (process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL ?? '').replace(/\/+$/, '');
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    console.error('[VisitCounter] Missing KV_REST_API_URL or KV_REST_API_TOKEN');
    return null;
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(['INCR', KEY]),
      cache: 'no-store',
    });
    const data = (await res.json().catch(() => ({}))) as { result?: number | string; error?: string };
    if (!res.ok || data.error) {
      console.error('[VisitCounter] Upstash error', res.status, data.error);
      return null;
    }
    const n = Number(data.result);
    return Number.isFinite(n) ? n : null;
  } catch (err) {
    console.error('[VisitCounter] Request failed', err);
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
