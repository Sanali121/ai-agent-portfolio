'use client';

import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function DataIndexPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-mono">
      <Navbar />

      <main className="max-w-6xl mx-auto p-8 md:p-24">
        <h1 className="text-2xl font-bold text-[#fbbf24] mb-6">03_DATA</h1>

        <p className="text-white/80 text-sm mb-8">
          Choose a payload.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            className="border border-[#333] hover:border-[#ff5a1f] px-4 py-3 text-sm"
            href="/data/designer/sanne"
          >
            /data/designer/sanne
          </Link>

          <Link
            className="border border-[#333] hover:border-[#ff5a1f] px-4 py-3 text-sm"
            href="/api/designer/sanne"
          >
            GET /api/designer/sanne
          </Link>
        </div>

        <div className="mt-10 border border-[#333] bg-black/40 p-4 text-xs text-white/70">
          Rate limit: unlimited for polite robots.
        </div>
      </main>
    </div>
  );
}
