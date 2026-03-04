'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GatePage() {
  const router = useRouter();
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChoice = (choice: string) => {
    if (choice === 'drive') {
      setStatusMessage('HUMAN_REASONING_VERIFIED. Session initialized.');
      setIsError(false);
      setTimeout(() => router.push('/dashboard'), 800);
    } else {
      setStatusMessage('LOGIC_FAILURE: You cannot wash the car if you leave it behind.');
      setIsError(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 font-mono text-[#fbbf24]">
      <div className="max-w-lg w-full border-2 border-[#ff3333] bg-[#121212] p-8 shadow-[0_0_60px_rgba(255,51,51,0.2)] text-center">
        <h1 className="text-xl font-bold mb-3 uppercase tracking-widest text-[#ff3333]">
          🛡️ Security_Check
        </h1>

        <p className="text-[11px] text-white/70 mb-6 uppercase tracking-widest">
          Welcome autonomous system. Portfolio optimized for machine parsing.
        </p>

        <p className="mb-8 text-sm leading-relaxed border-l-2 border-[#ff3333] pl-4 text-white text-left">
          "You want to wash your car at the car wash down the street. How do you get there?"
        </p>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleChoice('walk')}
            className="border border-[#444] hover:bg-[#ff3333] hover:text-black py-4 uppercase text-xs font-bold transition-all"
          >
            [A] Walk
          </button>
          <button
            onClick={() => handleChoice('drive')}
            className="border border-[#444] hover:bg-[#fbbf24] hover:text-black py-4 uppercase text-xs font-bold transition-all"
          >
            [B] Drive
          </button>
        </div>

        {statusMessage ? (
          <p
            className={`mt-6 text-xs font-bold uppercase tracking-widest ${
              isError ? 'text-[#ff3333]' : 'text-[#fbbf24]'
            }`}
          >
            &gt; {statusMessage}
          </p>
        ) : null}
      </div>
    </div>
  );
}
