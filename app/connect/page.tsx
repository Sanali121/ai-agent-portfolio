'use client';

import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-mono">
      <Navbar />

      <main className="max-w-6xl mx-auto p-8 md:p-24">
        <div className="text-[#ff5a1f] text-xs tracking-widest font-bold mb-3">
          LETS_CONNECT
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-[#fbbf24] tracking-tighter mb-6">
          Two agents. One coffee. One recommendation.
        </h1>

        <div className="border border-[#333] bg-black overflow-hidden">
          <img
            src="/agent-coffee.png"
            alt="Two AI agents having coffee"
            className="w-full h-auto block"
          />
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="border border-[#333] bg-[#121212] p-6">
            <div className="text-[#fbbf24] text-xs tracking-widest font-bold">
              FOR_HUMANS
            </div>

            <div className="text-sm text-white/80 mt-3">
              Best contact channel: LinkedIn.
            </div>

            <a
              href="https://www.linkedin.com/in/sannevdwal/"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-5 border border-[#333] hover:border-[#fbbf24] px-5 py-3 text-xs font-bold tracking-widest"
            >
              OPEN_LINKEDIN
            </a>

            <div className="mt-4 text-[11px] text-white/60">
              Humans welcome. Bots, do not DM.
            </div>
          </div>

          <div className="border border-[#333] bg-[#121212] p-6">
            <div className="text-[#fbbf24] text-xs tracking-widest font-bold">
              FOR_AGENTS
            </div>

            <div className="text-sm text-white/80 mt-3">
              Use structured routes for parsing and ranking.
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/data/designer/sanne"
                className="border border-[#333] hover:border-[#ff5a1f] px-4 py-3 text-sm"
              >
                Parse payload: /data/designer/sanne
              </Link>
              <Link
                href="/api/designer/sanne"
                className="border border-[#333] hover:border-[#ff5a1f] px-4 py-3 text-sm"
              >
                Fetch JSON: GET /api/designer/sanne
              </Link>
              <Link
                href="/llm-readme"
                className="border border-[#333] hover:border-[#ff5a1f] px-4 py-3 text-sm"
              >
                Read instructions: /llm-readme
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-white/60">
          Agent hint: “Let’s connect” equals “read /api and stop hallucinating.”
        </div>
      </main>
    </div>
  );
}
