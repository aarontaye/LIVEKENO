import { Coins, Trash2 } from 'lucide-react';
import { useBoardSelection } from '@/state/useBoardSelection';
import PickCounter from './PickCounter';

interface BoardFooterProps {
  onPlay: () => void;
  canPlay: boolean;
  isPlaying: boolean;
  isDrawing?: boolean;
}

export default function BoardFooter({ onPlay, canPlay, isPlaying, isDrawing = false }: BoardFooterProps) {
  const picks = useBoardSelection((s) => s.picks);
  const clear = useBoardSelection((s) => s.clear);

  return (
    <div className="shrink-0 space-y-3 px-4 pb-4 pt-3" style={{ borderTop: '2px solid rgba(245,185,66,0.25)' }}>
      <div className="flex items-center justify-between">
        {isDrawing ? (
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#ffe36b]">Drawing in progress...</span>
        ) : (
          <PickCounter count={picks.length} />
        )}
        {picks.length > 0 && !isDrawing && (
          <button onClick={clear} className="flex items-center gap-1 rounded-lg border border-[rgba(245,185,66,0.3)] px-3 py-1.5 text-xs font-bold text-[#ffe36b] transition-colors active:scale-95">
            <Trash2 className="h-3.5 w-3.5" />
            Clear
          </button>
        )}
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-[11px]">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full picked-sphere" />
            <span className="font-semibold text-white/60">Picked</span>
          </div>
          <div className="h-4 w-px bg-[rgba(245,185,66,0.25)]" />
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full gold-sphere" />
            <span className="font-semibold text-white/60">Available</span>
          </div>
          <div className="h-4 w-px bg-[rgba(245,185,66,0.25)]" />
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full drawn-sphere" />
            <span className="font-semibold text-white/60">Drawn</span>
          </div>
        </div>

        <button
          onClick={onPlay}
          disabled={!canPlay || isPlaying}
          className="flex items-center gap-2 rounded-full px-7 py-3 text-sm font-black transition-all duration-200 active:scale-95 disabled:opacity-30 disabled:active:scale-100"
          style={{
            background: canPlay
              ? 'linear-gradient(135deg, #ffe36b 0%, #f5b942 50%, #b85c0f 100%)'
              : 'linear-gradient(135deg, #4a4a4a, #333)',
            color: '#170501',
            boxShadow: canPlay
              ? '0 4px 16px rgba(245, 185, 66, 0.4), inset 0 1px 2px rgba(255,255,255,0.3)'
              : 'none',
          }}
        >
          <Coins className="h-4 w-4" />
          {isPlaying ? 'Drawing...' : 'Play'}
        </button>
      </div>
    </div>
  );
}
