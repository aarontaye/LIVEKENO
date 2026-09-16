import { KENO_RANGE } from '@/lib/mockData';
import type { BallState } from '@/lib/types';
import Ball from './Ball';

interface BoardProps {
  picks: number[];
  drawnNumbers: number[];
  onToggle: (n: number) => void;
}

export default function Board({ picks, drawnNumbers, onToggle }: BoardProps) {
  const pickSet = new Set(picks);
  const drawnSet = new Set(drawnNumbers);

  const numbers = Array.from({ length: KENO_RANGE }, (_, i) => i + 1);

  function stateFor(n: number): BallState {
    if (drawnSet.has(n)) return 'drawn';
    if (pickSet.has(n)) return 'picked';
    return 'available';
  }

  return (
    <div
      className="grid w-full gap-1.5"
      style={{
        gridTemplateColumns: 'repeat(8, 1fr)',
      }}
    >
      {numbers.map((n, i) => (
        <div key={n} className="flex items-center justify-center">
          <Ball number={n} state={stateFor(n)} onToggle={onToggle} size="sm" index={i} />
        </div>
      ))}
    </div>
  );
}
