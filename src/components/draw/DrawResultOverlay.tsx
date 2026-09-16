import { FileX2, Play, Trophy, X } from 'lucide-react';
import type { PlaceBetResult } from '@/lib/types';
import { useBoardSelection } from '@/state/useBoardSelection';

interface DrawResultOverlayProps {
  result: PlaceBetResult;
  onDismiss: () => void;
}

export default function DrawResultOverlay({ result, onDismiss }: DrawResultOverlayProps) {
  const clear = useBoardSelection((s) => s.clear);
  const isWin = result.hits > 0;

  function resetRound() {
    clear();
    onDismiss();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020711]/75 px-4 py-6 backdrop-blur-sm animate-fade-in">
      <section
        className="relative w-full max-w-[360px] rounded-2xl border border-[#16446c] bg-[#0a0e17] p-4 shadow-2xl animate-overlay-up"
        role="dialog"
        aria-modal="true"
        aria-labelledby="draw-complete-title"
      >
        <button
          type="button"
          onClick={resetRound}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10"
          aria-label="Close draw result"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-4 text-center">
          <div className={`relative mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full ${isWin ? 'bg-[#3a2c09]' : 'bg-[#172233]'}`}>
            {isWin ? <Trophy className="h-8 w-8 text-[#f0c53d]" /> : <FileX2 className="h-8 w-8 text-[#9aa8bb]" />}
            {isWin && [0, 1, 2, 3, 4, 5].map((dot) => (
              <span key={dot} className="absolute h-1.5 w-1.5 rounded-full bg-[#f0c53d]" style={{ transform: `rotate(${dot * 60}deg) translateY(-34px)` }} />
            ))}
          </div>
          <h2 id="draw-complete-title" className="text-xl font-black text-white">Draw complete</h2>
          <p className="mt-1 text-sm text-white/65">You matched {result.hits} out of {result.picks.length} picks.</p>
        </div>

        <div className={`rounded-xl border px-4 py-3 text-center ${isWin ? 'border-[#3ddc84] bg-[#063126]/70' : 'border-[#214363] bg-[#102238]'}`}>
          {isWin && <p className="text-xs font-bold uppercase tracking-wider text-[#3ddc84]">You won</p>}
          <p className={`mt-0.5 text-2xl font-black tabular-nums ${isWin ? 'text-[#3ddc84]' : 'text-white'}`}>ETB {result.payout.toLocaleString()}</p>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-white/65">Payout</p>
        </div>

        <div className="mt-3 grid grid-cols-3 divide-x divide-[#214363] rounded-xl bg-[#102238] px-2 py-3 text-center">
          <div><p className="text-lg font-black text-white">{result.picks.length}</p><p className="text-[10px] text-white/60">Total picks</p></div>
          <div><p className="text-lg font-black text-white">{result.hits}</p><p className="text-[10px] text-white/60">Hits</p></div>
          <div><p className="text-lg font-black text-white">{result.payout.toLocaleString()}</p><p className="text-[10px] text-white/60">Payout</p></div>
        </div>

        <button
          type="button"
          onClick={resetRound}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ffe36b] via-[#f2c63d] to-[#d69b18] py-3.5 text-sm font-black text-[#10151f] shadow-[0_6px_18px_rgba(240,197,61,0.25)] transition-transform active:scale-95"
        >
          <Play className="h-4 w-4 fill-current" />
          Play again
        </button>
      </section>
    </div>
  );
}
