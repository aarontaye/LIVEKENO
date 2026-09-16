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
    <div className="shrink-0 space-y-3 px-4 pb-4 pt-3" style={{ borderTop: '1px solid rgba(59,157,255,0.1)' }}>
      <div className="flex items-center justify-between">
        {isDrawing ? (
          <span className="text-xs font-bold uppercase tracking-wider text-[#f0c53d]">Drawing in progress...</span>
        ) : (
          <PickCounter count={picks.length} />
        )}
        {picks.length > 0 && !isDrawing && (
          <button onClick={clear} className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-white/40 transition-colors active:text-white/70">
            <Trash2 className="h-3.5 w-3.5" />
            Clear
          </button>
        )}
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-[11px]">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full picked-sphere" />
            <span className="text-white/50">Picked</span>
          </div>
          {isDrawing ? (
            <>
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full drawn-sphere animate-pulse-glow" />
                <span className="text-white/50">Drawn</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full dimmed-sphere" />
                <span className="text-white/50">Available</span>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full gold-sphere" />
              <span className="text-white/50">Available</span>
            </div>
          )}
        </div>

        <button
          onClick={onPlay}
          disabled={!canPlay || isPlaying}
          className="flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold transition-all duration-200 active:scale-95 disabled:opacity-30 disabled:active:scale-100"
          style={{
            background: canPlay
              ? 'linear-gradient(135deg, #f0d680 0%, #d4a84b 50%, #a8842f 100%)'
              : 'linear-gradient(135deg, #4a4a4a, #333)',
            color: '#0a1628',
            boxShadow: canPlay
              ? '0 4px 16px rgba(212, 168, 75, 0.35), inset 0 1px 2px rgba(255,255,255,0.3)'
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
