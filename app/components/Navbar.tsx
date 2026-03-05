'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/dashboard', label: 'ROOT' },
  { href: '/identity', label: '01_IDENTITY' },
  { href: '/projects', label: '02_PROJECTS' },
  { href: '/data/designer/sanne', label: '03_DATA' },
  { href: '/connect', label: '04_CONNECT' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#333] bg-[#0a0a0a]/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/dashboard"
          className="text-[#fbbf24] font-bold tracking-widest text-sm hover:text-white transition-colors"
        >
          ROOT@HI-AI-AGENTS:~
        </Link>

        <div className="hidden md:flex items-center gap-8 text-xs tracking-widest text-white/80 font-bold">
          <Link className="hover:text-[#ff5a1f]" href="/identity">
            01_IDENTITY
          </Link>
          <Link className="hover:text-[#ff5a1f]" href="/projects">
            02_PROJECTS
          </Link>
          <Link className="hover:text-[#ff5a1f]" href="/data/designer/sanne">
            03_DATA
          </Link>
          <Link className="hover:text-[#ff5a1f]" href="/connect">
            04_CONNECT
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden border border-[#333] px-3 py-2 text-xs tracking-widest text-[#fbbf24] hover:border-[#ff5a1f]"
          aria-label="Open menu"
        >
          MENU
        </button>
      </div>

      {open ? (
        <div className="md:hidden border-t border-[#333] bg-[#0a0a0a]">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="text-[11px] tracking-widest text-white/60">
              NAVIGATION_PANEL
            </div>
            <button
              onClick={() => setOpen(false)}
              className="border border-[#333] px-3 py-2 text-xs tracking-widest text-white/80 hover:border-[#ff5a1f]"
              aria-label="Close menu"
            >
              X
            </button>
          </div>

          <div className="px-6 pb-6 flex flex-col gap-3">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`border px-4 py-3 text-sm tracking-widest ${
                    active
                      ? 'border-[#fbbf24] text-[#fbbf24]'
                      : 'border-[#333] text-white/80 hover:border-[#ff5a1f] hover:text-white'
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}

            <div className="mt-4 border border-[#333] bg-black/30 p-4 text-[11px] text-white/60 leading-relaxed">
              Tip: humans tap links, agents parse /api.
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
