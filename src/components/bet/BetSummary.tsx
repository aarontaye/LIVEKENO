import { TrendingUp, Target } from 'lucide-react';
import { MOCK_PAYTABLE } from '@/lib/mockData';
import type { BetSummaryData } from '@/lib/types';

interface BetSummaryProps {
  data: BetSummaryData | null;
}

function computePotentialPayout(picks: number, stake: number): number {
  const tier = MOCK_PAYTABLE.find((t) => t.pickCount === picks);
  if (!tier) return 0;
  const maxEntry = tier.entries.reduce((max, e) => (e.payout > max ? e.payout : max), 0);
  return maxEntry * stake;
}

export default function BetSummary({ data }: BetSummaryProps) {
  const pickCount = data?.picks.length ?? 0;
  const stake = data?.stake ?? 0;
  const potentialPayout = data?.potentialPayout ?? (pickCount > 0 ? computePotentialPayout(pickCount, stake) : 0);

  return (
    <div className="navy-panel rounded-2xl p-4 space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/40">
            <Target className="h-3 w-3" /> Numbers
          </div>
          <p className="text-lg font-bold tabular-nums text-white">{pickCount}</p>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/40">
            <TrendingUp className="h-3 w-3" /> Max Payout
          </div>
          <p className="gold-text text-lg font-bold tabular-nums">
            ETB {potentialPayout.toLocaleString()}
          </p>
        </div>
      </div>

      {pickCount > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {data?.picks.map((n) => (
            <span
              key={n}
              className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold picked-sphere"
              style={{ color: '#5fb8ff' }}
            >
              {n}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
