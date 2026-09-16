import { Check, X, RotateCcw } from 'lucide-react';
import type { PlaceBetResult } from '@/lib/types';
import { useBoardSelection } from '@/state/useBoardSelection';
import { MOCK_CURRENT_DRAW } from '@/lib/mockData';
import Ball from '@/components/board/Ball';

interface DrawResultOverlayProps {
  result: PlaceBetResult;
  onDismiss: () => void;
}

export default function DrawResultOverlay({ result, onDismiss }: DrawResultOverlayProps) {
  const clear = useBoardSelection((s) => s.clear);
  const drawnSet = new Set(MOCK_CURRENT_DRAW.numbers.map((d) => d.number));

  const hits = result.picks.filter((p) => drawnSet.has(p));
  const misses = result.picks.filter((p) => !drawnSet.has(p));
  const isWin = hits.length > 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center animate-fade-in"
      style={{ background: 'rgba(6, 13, 26, 0.85)', backdropFilter: 'blur(6px)' }}
      onClick={onDismiss}
    >
      <div
        className="w-full max-w-md rounded-t-3xl p-6 pb-8 animate-overlay-up"
        style={{
          background: 'linear-gradient(180deg, #142a4a 0%, #0a1628 100%)',
          borderTop: '1px solid rgba(59,157,255,0.15)',
          boxShadow: '0 -8px 32px rgba(0,0,0,0.4)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-white/15" />

        <div className="mb-5 text-center">
          <div
            className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full"
            style={{
              background: isWin
                ? 'linear-gradient(135deg, #f0d680, #d4a84b)'
                : 'rgba(255,255,255,0.06)',
              boxShadow: isWin ? '0 0 20px rgba(212,168,75,0.3)' : 'none',
            }}
          >
            {isWin ? (
              <Check className="h-7 w-7 text-[#0a1628]" strokeWidth={3} />
            ) : (
              <X className="h-7 w-7 text-white/40" strokeWidth={3} />
            )}
          </div>
          <h2 className={`text-2xl font-black ${isWin ? 'gold-text' : 'text-white/60'}`}>
            {isWin ? 'Winner!' : 'No Win'}
          </h2>
          <p className="mt-1 text-sm text-white/50">{result.message}</p>
        </div>

        <div className="mb-5 space-y-2">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
            Your Numbers
          </p>
          <div className="flex flex-wrap gap-1.5">
            {result.picks.map((n) => {
              const hit = drawnSet.has(n);
              return (
                <div key={n} className="relative">
                  <Ball
                    number={n}
                    state={hit ? 'drawn' : 'picked'}
                    size="sm"
                  />
                  {hit && (
                    <span
                      className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#3b9dff]"
                      style={{ boxShadow: '0 0 6px rgba(59,157,255,0.8)' }}
                    >
                      <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          {misses.length > 0 && (
            <p className="pt-1 text-[11px] text-white/30">
              {hits.length} hit · {misses.length} missed
            </p>
          )}
        </div>

        <button
          onClick={() => {
            clear();
            onDismiss();
          }}
          className="flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold transition-all active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #f0d680 0%, #d4a84b 50%, #a8842f 100%)',
            color: '#0a1628',
            boxShadow: '0 4px 16px rgba(212,168,75,0.3)',
          }}
        >
          <RotateCcw className="h-4 w-4" />
          Play Again
        </button>
      </div>
    </div>
  );
}
