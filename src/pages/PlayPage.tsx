import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import AppShell from '@/components/layout/AppShell';
import Header from '@/components/layout/Header';
import Board from '@/components/board/Board';
import BoardFooter from '@/components/board/BoardFooter';
import StakeInput from '@/components/bet/StakeInput';
import BetSummary from '@/components/bet/BetSummary';
import DrawAnimation from '@/components/draw/DrawAnimation';
import DrawResultOverlay from '@/components/draw/DrawResultOverlay';
import PaytableCard from '@/components/paytable/PaytableCard';
import { useBoardSelection } from '@/state/useBoardSelection';
import { useUIStore } from '@/state/useUIStore';
import { useCurrentDraw } from '@/hooks/useCurrentDraw';
import { usePlaceBet } from '@/hooks/usePlaceBet';
import type { PlaceBetResult } from '@/lib/types';

export default function PlayPage() {
  const picks = useBoardSelection((s) => s.picks);
  const togglePick = useBoardSelection((s) => s.togglePick);
  const stake = useUIStore((s) => s.stake);
  const isAnimating = useUIStore((s) => s.isAnimating);
  const showResult = useUIStore((s) => s.showResult);
  const showPaytable = useUIStore((s) => s.showPaytable);
  const setAnimating = useUIStore((s) => s.setAnimating);
  const setShowResult = useUIStore((s) => s.setShowResult);
  const setShowPaytable = useUIStore((s) => s.setShowPaytable);

  const { data: currentDraw } = useCurrentDraw();
  const placeBet = usePlaceBet();
  const [result, setResult] = useState<PlaceBetResult | null>(null);

  const canPlay = picks.length >= 1 && picks.length <= 10 && !isAnimating;
  const drawnNumbers = showResult && currentDraw ? currentDraw.numbers.map((d) => d.number) : [];

  async function handlePlay() {
    if (!canPlay) return;
    setAnimating(true);
    try {
      const res = await placeBet.mutateAsync({ picks, stake });
      setResult(res);
    } catch {
      setAnimating(false);
    }
  }

  function handleAnimationComplete() {
    setAnimating(false);
    setShowResult(true);
  }

  function handleDismissResult() {
    setShowResult(false);
    setResult(null);
  }

  return (
    <AppShell>
      <Header />

      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <div className="space-y-3 px-4 py-4">
          <BetSummary
            data={
              picks.length > 0
                ? { picks, stake, potentialPayout: 0, hitCount: 0 }
                : null
            }
          />

          <StakeInput />

          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Pick your numbers
            </p>
            <button
              onClick={() => setShowPaytable(true)}
              className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-[#3b9dff] active:opacity-70"
            >
              <BookOpen className="h-3.5 w-3.5" />
              Paytable
            </button>
          </div>
        </div>

        <div className="px-4 pb-4">
          <div className="navy-panel rounded-2xl p-3">
            <Board
              picks={picks}
              drawnNumbers={drawnNumbers}
              onToggle={togglePick}
            />
          </div>
        </div>
      </div>

      <BoardFooter
        onPlay={handlePlay}
        canPlay={canPlay}
        isPlaying={isAnimating}
      />

      {isAnimating && (
        <DrawAnimation picks={picks} onComplete={handleAnimationComplete} />
      )}

      {showResult && result && (
        <DrawResultOverlay result={result} onDismiss={handleDismissResult} />
      )}

      {showPaytable && (
        <PaytableCard
          pickCount={picks.length}
          onClose={() => setShowPaytable(false)}
        />
      )}
    </AppShell>
  );
}
