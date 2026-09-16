import { Link, useLocation } from 'react-router-dom';
import { History, ChevronRight } from 'lucide-react';
import { useBoardSelection } from '@/state/useBoardSelection';
import { useBalance } from '@/hooks/useBalance';
import { MAX_PICKS } from '@/lib/mockData';

export default function Header() {
  const picks = useBoardSelection((s) => s.picks);
  const { data: balance } = useBalance();
  const location = useLocation();
  const pickCount = picks.length;

  const dots = Array.from({ length: MAX_PICKS }, (_, i) => i < pickCount);

  return (
    <header
      className="flex items-center justify-between px-4 py-3 shrink-0"
      style={{
        borderBottom: '1px solid rgba(59, 157, 255, 0.1)',
        background: 'rgba(10, 22, 40, 0.6)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="flex items-center gap-2.5">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-xl"
          style={{
            background: 'linear-gradient(135deg, #d4a84b, #a8842f)',
            boxShadow: '0 2px 8px rgba(212, 168, 75, 0.3)',
          }}
        >
          <span className="text-sm font-black text-[#0a1628]">K</span>
        </div>
        <div className="leading-none">
          <h1 className="text-lg font-black tracking-tight text-white">KENO</h1>
          <p className="text-[10px] font-medium uppercase tracking-widest text-[#3b9dff]">
            Live Draw
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {balance && (
          <div className="text-right leading-none">
            <p className="text-[9px] font-semibold uppercase tracking-wider text-white/40">
              Balance
            </p>
            <p className="gold-text text-sm font-bold tabular-nums">
              ${balance.amount.toLocaleString()}
            </p>
          </div>
        )}

        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold tabular-nums text-white">
              {pickCount}
            </span>
            <span className="text-xs font-medium text-white/40">of {MAX_PICKS}</span>
          </div>
          <div className="flex gap-1">
            {dots.map((filled, i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 rounded-full transition-colors duration-200"
                style={{
                  background: filled ? '#3b9dff' : 'rgba(255,255,255,0.12)',
                  boxShadow: filled ? '0 0 4px rgba(59,157,255,0.6)' : 'none',
                }}
              />
            ))}
          </div>
        </div>

        <Link
          to={location.pathname === '/history' ? '/' : '/history'}
          className="flex h-9 w-9 items-center justify-center rounded-xl text-white/50 transition-colors active:bg-white/10"
          aria-label={location.pathname === '/history' ? 'Back to play' : 'View history'}
        >
          {location.pathname === '/history' ? (
            <ChevronRight className="h-5 w-5 rotate-180" />
          ) : (
            <History className="h-5 w-5" />
          )}
        </Link>
      </div>
    </header>
  );
}
