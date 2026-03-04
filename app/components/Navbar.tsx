'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
  { href: '/identity', label: '01_IDENTITY' },
  { href: '/projects', label: '02_PROJECTS' },
  { href: '/data', label: '03_DATA' },
  { href: '/llm-readme', label: 'LLM_README' },
  { href: '/terms-for-agents', label: 'TOS_AGENTS' },
  { href: '/connect', label: "LET'S_CONNECT" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-[#121212]/90 backdrop-blur border-b border-[#333] px-6 py-4 flex justify-between items-center text-sm uppercase tracking-widest font-bold font-mono">
      <Link
        href="/dashboard"
        className="text-[#fbbf24] tracking-tighter hover:text-white transition-colors"
      >
        ROOT@SANSHINE:~
      </Link>

      <div className="hidden md:flex gap-8 items-center">
        {nav.map((x) => {
          const active = pathname === x.href || pathname.startsWith(x.href + '/');
          const isConnect = x.href === '/connect';

          return (
            <Link
              key={x.href}
              href={x.href}
              className={
                isConnect
                  ? `border px-3 py-2 text-xs font-bold tracking-widest transition-colors ${
                      active
                        ? 'border-[#fbbf24] text-[#fbbf24]'
                        : 'border-[#333] hover:border-[#fbbf24] text-white'
                    }`
                  : `transition-colors ${active ? 'text-[#ff5a1f]' : 'hover:text-[#ff5a1f]'}`
              }
            >
              {x.label}
            </Link>
          );
        })}
      </div>

      <span className="text-[#ff3333] animate-pulse text-xs hidden md:block">
        ● LIVE_FEED
      </span>
    </nav>
  );
}
