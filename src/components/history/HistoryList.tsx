import HistoryRow from './HistoryRow';
import type { Draw } from '@/lib/types';

interface HistoryListProps {
  draws: Draw[];
  isLoading: boolean;
}

export default function HistoryList({ draws, isLoading }: HistoryListProps) {
  if (isLoading) {
    return (
      <div className="space-y-3 px-4 py-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-20 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          />
        ))}
      </div>
    );
  }

  if (draws.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center px-4 py-20 text-center">
        <p className="text-sm text-white/40">No draw history yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-2.5 px-4 py-4">
      {draws.map((draw) => (
        <HistoryRow key={draw.id} draw={draw} />
      ))}
    </div>
  );
}
