import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, History } from 'lucide-react';
import { useBoardSelection } from '@/state/useBoardSelection';
import { useBalance } from '@/hooks/useBalance';
import { MAX_PICKS } from '@/lib/mockData';

interface HeaderProps {
  isDrawing?: boolean;
  revealedCount?: number;
}

export default function Header({ isDrawing = false, revealedCount = 0 }: HeaderProps) {
  const picks = useBoardSelection((s) => s.picks);
  const { data: balance } = useBalance();
  const location = useLocation();
  const isRoundActive = isDrawing || location.pathname === '/history' && false;
  const dots = Array.from({ length: MAX_PICKS }, (_, i) => i < picks.length);
  const revealed = Array.from({ length: revealedCount }, (_, i) => i);

  return (
    <header className="shrink-0 border-b border-[#183957] bg-[#071626]/90 px-4 py-3 backdrop-blur-md">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#f0d680] to-[#a8842f] shadow-[0_2px_8px_rgba(212,168,75,0.3)]">
            <span className="text-sm font-black text-[#0a1628]">K</span>
          </div>
          <div className="leading-none">
            <h1 className="text-lg font-black tracking-tight text-white">KENO</h1>
            <p className="text-[10px] font-medium uppercase tracking-widest text-[#3b9dff]">Live Draw</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {balance && (
            <div className="text-right leading-none">
              <p className="text-[9px] font-semibold uppercase tracking-wider text-white/40">Balance</p>
              <p className="gold-text text-sm font-bold tabular-nums">ETB {balance.amount.toLocaleString()}</p>
            </div>
          )}
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold tabular-nums text-white">{isRoundActive ? revealedCount : picks.length}</span>
              <span className="text-xs font-medium text-white/40">/ {isRoundActive ? 20 : MAX_PICKS}</span>
            </div>
            <div className="flex gap-1">
              {(isRoundActive ? revealed : dots).slice(0, isRoundActive ? 20 : MAX_PICKS).map((_, i) => (
                <span key={i} className={`h-1.5 w-1.5 rounded-full ${isRoundActive ? 'bg-[#f0c53d] shadow-[0_0_5px_rgba(240,197,61,0.7)]' : 'bg-[#3b9dff]'}`} />
              ))}
            </div>
          </div>
          <Link to={location.pathname === '/history' ? '/play' : '/history'} className="flex h-9 w-9 items-center justify-center rounded-xl text-white/50 transition-colors active:bg-white/10" aria-label={location.pathname === '/history' ? 'Back to play' : 'View history'}>
            {location.pathname === '/history' ? <ChevronRight className="h-5 w-5 rotate-180" /> : <History className="h-5 w-5" />}
          </Link>
        </div>
      </div>

      {isDrawing && (
        <div className="mt-3 flex items-center gap-2 overflow-hidden rounded-xl border border-[#d6a928] bg-[#0b1825] px-2.5 py-2 shadow-[0_0_12px_rgba(214,169,40,0.2)]">
          <span className="shrink-0 text-[10px] font-black uppercase text-[#f0c53d]">Drawing...</span>
          <div className="flex min-w-0 items-center gap-2 overflow-x-auto hide-scrollbar">
            {revealed.map((_, index) => <span key={index} className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#f0c53d] text-[9px] font-bold text-[#f0c53d]">{index + 1}</span>)}
            <span className="text-sm font-black tracking-widest text-[#f0c53d]">...</span>
          </div>
        </div>
      )}
    </header>
  );
}
