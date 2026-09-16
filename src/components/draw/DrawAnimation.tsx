import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { MOCK_CURRENT_DRAW } from '@/lib/mockData';
import Ball from '@/components/board/Ball';

interface DrawAnimationProps {
  picks: number[];
  onComplete: () => void;
}

export default function DrawAnimation({ picks, onComplete }: DrawAnimationProps) {
  const drawNumbers = MOCK_CURRENT_DRAW.numbers;
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    if (revealedCount >= drawNumbers.length) {
      const timer = setTimeout(onComplete, 800);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => setRevealedCount((c) => c + 1), 180);
    return () => clearTimeout(timer);
  }, [revealedCount, drawNumbers.length, onComplete]);

  const revealed = drawNumbers.slice(0, revealedCount);
  const pickSet = new Set(picks);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6 animate-fade-in"
      style={{ background: 'rgba(6, 13, 26, 0.92)', backdropFilter: 'blur(8px)' }}
    >
      <div className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#3b9dff]">
          Live Draw
        </p>
        <p className="mt-1 text-2xl font-black text-white">Drawing 20 numbers</p>
      </div>

      <div className="grid grid-cols-5 gap-2.5 sm:grid-cols-7">
        {revealed.map((d) => (
          <div key={d.number} className="relative">
            <Ball number={d.number} state="drawn" size="md" />
            {pickSet.has(d.number) && (
              <span
                className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#3b9dff] text-[8px] font-black text-white"
                style={{ boxShadow: '0 0 6px rgba(59,157,255,0.8)' }}
              >
                <X className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
            )}
          </div>
        ))}
        {revealedCount < drawNumbers.length && (
          <div className="flex h-10 w-10 items-center justify-center">
            <div
              className="h-6 w-6 rounded-full border-2 border-[#3b9dff] border-t-transparent animate-spin"
              style={{ animationDuration: '0.6s' }}
            />
          </div>
        )}
      </div>

      <p className="mt-8 text-sm text-white/40">
        {revealedCount} of {drawNumbers.length} drawn
      </p>
    </div>
  );
}
