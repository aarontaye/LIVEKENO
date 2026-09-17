import { useCallback, useState } from 'react';
import { BookOpen } from 'lucide-react';
import AppShell from '@/components/layout/AppShell';
import Header from '@/components/layout/Header';
import Board from '@/components/board/Board';
import BoardFooter from '@/components/board/BoardFooter';
import StakeInput from '@/components/bet/StakeInput';
import StatsBar from '@/components/bet/StatsBar';
import DrawAnimation from '@/components/draw/DrawAnimation';
import DrawResultOverlay from '@/components/draw/DrawResultOverlay';
import PaytableCard from '@/components/paytable/PaytableCard';
import { useBoardSelection } from '@/state/useBoardSelection';
import { useUIStore } from '@/state/useUIStore';
import { usePlaceBet } from '@/hooks/usePlaceBet';
import { MOCK_CURRENT_DRAW } from '@/lib/mockData';
import type { PlaceBetResult } from '@/lib/types';

export default function PlayPage() {
  const picks = useBoardSelection((s) => s.picks);
  const togglePick = useBoardSelection((s) => s.togglePick);
  const stake = useUIStore((s) => s.stake);
  const showResult = useUIStore((s) => s.showResult);
  const showPaytable = useUIStore((s) => s.showPaytable);
  const setShowResult = useUIStore((s) => s.setShowResult);
  const setShowPaytable = useUIStore((s) => s.setShowPaytable);

  const placeBet = usePlaceBet();
  const [result, setResult] = useState<PlaceBetResult | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [revealedNumbers, setRevealedNumbers] = useState<number[]>([]);

  const canPlay = picks.length >= 1 && picks.length <= 10 && !isDrawing;
  const drawnNumbers = showResult ? MOCK_CURRENT_DRAW.numbers.map((d) => d.number) : revealedNumbers;

  const handlePlay = useCallback(async () => {
    if (!canPlay) return;
    setIsDrawing(true);
    setRevealedNumbers([]);
    try {
      const res = await placeBet.mutateAsync({ picks, stake });
      setResult(res);
    } catch {
      setIsDrawing(false);
      setRevealedNumbers([]);
    }
  }, [canPlay, picks, stake, placeBet]);

  const handleReveal = useCallback((number: number) => {
    setRevealedNumbers((prev) => [...prev, number]);
  }, []);

  const handleAnimationComplete = useCallback(() => {
    setIsDrawing(false);
    setShowResult(true);
  }, [setShowResult]);

  const handleDismissResult = useCallback(() => {
    setShowResult(false);
    setResult(null);
    setRevealedNumbers([]);
  }, [setShowResult]);

  return (
    <AppShell>
      <Header isDrawing={isDrawing} revealedCount={revealedNumbers.length} />

      {isDrawing && (
        <DrawAnimation
          revealedNumbers={revealedNumbers}
          onReveal={handleReveal}
          onComplete={handleAnimationComplete}
        />
      )}

      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <div className="space-y-3 px-3 py-3 sm:px-4">
          <StatsBar pickCount={picks.length} />
          <StakeInput disabled={isDrawing} />
        </div>

        <div className="px-3 pb-4 sm:px-4">
          <div className="navy-panel rounded-2xl p-3">
            <div className="mb-3 flex items-center justify-between px-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f5b942]">
                {isDrawing ? 'Numbers being drawn' : 'Pick your numbers'}
              </p>
              <button
                onClick={() => setShowPaytable(true)}
                className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-bold text-[#ffe36b] active:opacity-70"
              >
                <BookOpen className="h-3.5 w-3.5" />
                Paytable
              </button>
            </div>
            <Board
              picks={picks}
              drawnNumbers={drawnNumbers}
              onToggle={togglePick}
              isDrawing={isDrawing}
            />
          </div>
        </div>
      </div>

      <BoardFooter
        onPlay={handlePlay}
        canPlay={canPlay}
        isPlaying={isDrawing}
        isDrawing={isDrawing}
      />

      {showResult && result && (
        <DrawResultOverlay result={result} onDismiss={handleDismissResult} />
      )}

      {showPaytable && (
        <PaytableCard pickCount={picks.length} onClose={() => setShowPaytable(false)} />
      )}
    </AppShell>
  );
}
