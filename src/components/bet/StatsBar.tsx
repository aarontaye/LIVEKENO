import { Target, TrendingUp } from 'lucide-react';
import { MOCK_PAYTABLE } from '@/lib/mockData';

interface StatsBarProps {
  pickCount: number;
  stake: number;
}

function getMaxPayout(pickCount: number, stake: number): number {
  const tier = MOCK_PAYTABLE.find((entry) => entry.pickCount === pickCount);
  if (!tier) return 0;

  const maxMultiplier = tier.entries.reduce(
    (max, entry) => Math.max(max, entry.payout),
    0,
  );
  return maxMultiplier * stake;
}

export default function StatsBar({ pickCount, stake }: StatsBarProps) {
  return (
    <section className="navy-panel grid grid-cols-2 rounded-2xl p-4" aria-label="Bet statistics">
      <div className="flex items-center gap-3 pr-4">
        <Target className="h-6 w-6 shrink-0 text-[#f5b942]" />
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f5b942]">Numbers</p>
          <p className="mt-1 text-3xl font-black tabular-nums leading-none text-white">{pickCount}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 border-l-2 border-[rgba(245,185,66,0.35)] pl-4">
        <TrendingUp className="h-6 w-6 shrink-0 text-[#f5b942]" />
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#f5b942]">Max Payout</p>
          <p className="mt-1 truncate text-2xl font-black tabular-nums leading-none text-[#ffe36b] sm:text-3xl">
            ETB {getMaxPayout(pickCount, stake).toLocaleString()}
          </p>
        </div>
      </div>
    </section>
  );
}
