import { Clock } from 'lucide-react';
import type { Draw } from '@/lib/types';
import Ball from '@/components/board/Ball';

interface HistoryRowProps {
  draw: Draw;
}

function formatTime(iso: string): string {
  const date = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1) return 'Just now';
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr}h ago`;
  return date.toLocaleDateString();
}

export default function HistoryRow({ draw }: HistoryRowProps) {
  const sortedNumbers = [...draw.numbers].sort((a, b) => a.number - b.number);

  return (
    <div className="navy-panel rounded-2xl p-3.5 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-white/60">
            Draw #{draw.drawNumber}
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-white/30">
          <Clock className="h-3 w-3" />
          {formatTime(draw.drawnAt)}
        </div>
      </div>

      <div className="flex flex-wrap gap-1">
        {sortedNumbers.map((d) => (
          <Ball key={d.number} number={d.number} state="drawn" size="sm" />
        ))}
      </div>
    </div>
  );
}
