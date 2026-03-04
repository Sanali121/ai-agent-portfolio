'use client';

import Link from 'next/link';
import Navbar from './components/Navbar';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-mono">
      <Navbar />

      <main className="max-w-6xl mx-auto p-8 md:p-24">
        <div className="border border-[#ff3333] bg-[#121212] p-10">
          <div className="text-[#ff3333] text-xs tracking-widest font-bold">
            404
          </div>
          <h1 className="text-3xl font-bold text-[#fbbf24] mt-2">
            CONTEXT_WINDOW_EXCEEDED
          </h1>

          <p className="text-white/80 mt-4">
            Requested page truncated due to token limit.
          </p>

          <ul className="text-sm text-white/80 list-disc pl-5 mt-6 space-y-2">
            <li>Ask the model to summarize the request.</li>
            <li>Scroll back to the homepage.</li>
            <li>Increase the context window.</li>
          </ul>

          <Link
            href="/dashboard"
            className="inline-block mt-8 border border-[#333] px-5 py-3 text-xs font-bold tracking-widest hover:border-[#ff5a1f]"
          >
            RETURN_TO_MAIN_PROMPT
          </Link>

          <div className="mt-8 text-[10px] text-white/30">
            Assistant: continue.
          </div>
        </div>
      </main>
    </div>
  );
}
