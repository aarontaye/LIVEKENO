import { useState } from 'react';
import { ChevronRight, History, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useBoardSelection } from '@/state/useBoardSelection';
import { useBalance } from '@/hooks/useBalance';
import { MAX_PICKS } from '@/lib/mockData';

interface HeaderProps {
  isDrawing?: boolean;
  revealedCount?: number;
}

export default function Header({ isDrawing = false, revealedCount = 0 }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const picks = useBoardSelection((s) => s.picks);
  const { data: balance } = useBalance();
  const location = useLocation();
  const isHistoryPage = location.pathname === '/history';
  const dots = Array.from({ length: MAX_PICKS }, (_, i) => i < picks.length);
  const revealed = Array.from({ length: revealedCount }, (_, i) => i);

  return (
    <>
      <header className="navy-panel mx-3 mt-3 shrink-0 rounded-2xl px-3 py-3 sm:mx-4 sm:px-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#ffe36b] transition-colors hover:bg-white/10"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="flex min-w-0 items-center gap-2.5">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#f5b942] bg-[#5b1607] shadow-[0_0_12px_rgba(245,185,66,0.45)]">
              <span className="absolute inset-1 rounded-full border border-[#ffe36b]" />
              <span className="relative text-xl font-black italic text-[#ffe36b]">L</span>
            </div>
            <div className="min-w-0 leading-none">
              <h1 className="truncate text-base font-black tracking-tight text-white sm:text-lg">LIVEKENO</h1>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#ffe36b]">Live Draw</p>
            </div>
          </div>

          <div className="ml-auto hidden h-10 w-px bg-[rgba(245,185,66,0.45)] sm:block" />
          <div className="hidden shrink-0 leading-none sm:block">
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#f5b942]">Balance</p>
            <p className="mt-1 text-sm font-black tabular-nums text-[#ffe36b]">ETB {balance?.amount.toLocaleString() ?? '—'}</p>
          </div>

          <div className="ml-auto flex shrink-0 flex-col items-end gap-1 sm:ml-0">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-black tabular-nums text-white">{isDrawing ? revealedCount : picks.length}</span>
              <span className="text-xs font-bold text-white/55">/ {isDrawing ? 20 : MAX_PICKS}</span>
            </div>
            <div className="flex gap-1">
              {(isDrawing ? revealed : dots).slice(0, isDrawing ? 20 : MAX_PICKS).map((_, i) => (
                <span key={i} className={`h-1.5 w-1.5 rounded-full ${isDrawing ? 'bg-[#ffe36b] shadow-[0_0_5px_rgba(255,227,107,0.8)]' : i < picks.length ? 'bg-[#3b9dff]' : 'bg-white/20'}`} />
              ))}
            </div>
          </div>

          <Link
            to={isHistoryPage ? '/play' : '/history'}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(245,185,66,0.45)] text-[#ffe36b] transition-colors hover:bg-white/10"
            aria-label={isHistoryPage ? 'Back to play' : 'View history'}
          >
            {isHistoryPage ? <ChevronRight className="h-5 w-5 rotate-180" /> : <History className="h-5 w-5" />}
          </Link>
        </div>
      </header>

      {isMenuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/60"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close navigation menu"
          />
          <aside className="fixed inset-y-0 left-0 z-50 w-72 border-r-2 border-[#f5b942] bg-gradient-to-b from-[#3a0d03] to-[#120301] p-5 shadow-[8px_0_30px_rgba(0,0,0,0.45)]" aria-label="Main navigation">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffe36b]">LIVEKENO</p>
              <button type="button" onClick={() => setIsMenuOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-xl text-white/70 hover:bg-white/10 hover:text-white" aria-label="Close navigation menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="space-y-2">
              <Link to="/play" onClick={() => setIsMenuOpen(false)} className="block rounded-xl border border-[rgba(245,185,66,0.35)] px-4 py-3 text-sm font-bold text-white hover:bg-white/10">Play Keno</Link>
              <Link to="/history" onClick={() => setIsMenuOpen(false)} className="block rounded-xl border border-[rgba(245,185,66,0.35)] px-4 py-3 text-sm font-bold text-white hover:bg-white/10">Draw History</Link>
            </nav>
          </aside>
        </>
      )}
    </>
  );
}
