import { useEffect } from 'react';
import { Target } from 'lucide-react';
import { MOCK_CURRENT_DRAW } from '@/lib/mockData';

interface DrawAnimationProps {
  revealedNumbers: number[];
  onReveal: (number: number) => void;
  onComplete: () => void;
}

export default function DrawAnimation({ revealedNumbers, onReveal, onComplete }: DrawAnimationProps) {
  useEffect(() => {
    let index = 0;
    let timer: number;

    function tick() {
      if (index >= MOCK_CURRENT_DRAW.numbers.length) {
        onComplete();
        return;
      }
      onReveal(MOCK_CURRENT_DRAW.numbers[index].number);
      index += 1;
      timer = window.setTimeout(tick, 1000);
    }

    tick();

    return () => window.clearTimeout(timer);
  }, [onComplete, onReveal]);

  return (
    <div className="navy-panel mx-3 mt-3 flex items-center gap-3 rounded-2xl px-3 py-2.5 sm:mx-4">
      <Target className="h-5 w-5 shrink-0 animate-spin text-[#ffe36b]" style={{ animationDuration: '2s' }} />
      <span className="shrink-0 text-[10px] font-black uppercase tracking-[0.15em] text-[#ffe36b]">Drawing...</span>
      <div className="flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto hide-scrollbar">
        {revealedNumbers.map((n, i) => (
          <span key={`${n}-${i}`} className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full drawn-sphere text-[10px] font-black" style={{ color: '#170501' }}>
            {n}
          </span>
        ))}
        <span className="text-sm font-black tracking-widest text-[#ffe36b]">...</span>
      </div>
    </div>
  );
}
