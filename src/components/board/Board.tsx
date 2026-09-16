import { KENO_RANGE } from '@/lib/mockData';
import type { BallState } from '@/lib/types';
import Ball from './Ball';

interface BoardProps {
  picks: number[];
  drawnNumbers: number[];
  onToggle: (n: number) => void;
  isDrawing?: boolean;
}

export default function Board({ picks, drawnNumbers, onToggle, isDrawing = false }: BoardProps) {
  const pickSet = new Set(picks);
  const drawnSet = new Set(drawnNumbers);
  const numbers = Array.from({ length: KENO_RANGE }, (_, i) => i + 1);

  function stateFor(number: number): BallState {
    if (drawnSet.has(number)) return 'drawn';
    if (isDrawing) return pickSet.has(number) ? 'picked' : 'dimmed';
    return pickSet.has(number) ? 'picked' : 'available';
  }

  return <div className="grid w-full gap-1.5" style={{ gridTemplateColumns: 'repeat(8, 1fr)' }}>
    {numbers.map((number, index) => <div key={number} className="flex items-center justify-center"><Ball number={number} state={stateFor(number)} onToggle={onToggle} size="sm" index={index} isHit={drawnSet.has(number) && pickSet.has(number)} /></div>)}
  </div>;
}
