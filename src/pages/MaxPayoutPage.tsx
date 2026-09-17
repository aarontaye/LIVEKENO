import { Trophy } from 'lucide-react';
import AppShell from '@/components/layout/AppShell';
import Header from '@/components/layout/Header';
import { MOCK_PAYTABLE } from '@/lib/mockData';

export default function MaxPayoutPage() {
  return (
    <AppShell>
      <Header />
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <div className="px-3 pt-4 pb-2 sm:px-4">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-[#ffe36b]" />
            <h2 className="text-lg font-black text-white">Max Payout</h2>
          </div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#f5b942]">Payout multipliers by pick count</p>
        </div>

        <div className="space-y-3 px-3 py-3 sm:px-4">
          {MOCK_PAYTABLE.map((tier) => {
            const maxPayout = Math.max(...tier.entries.map((e) => e.payout));
            return (
              <div key={tier.pickCount} className="navy-panel rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#f5b942] bg-[#170501]">
                      <span className="text-sm font-black text-[#ffe36b]">{tier.pickCount}</span>
                    </div>
                    <div>
                      <p className="text-sm font-black text-white">{tier.pickCount} Pick{tier.pickCount > 1 ? 's' : ''}</p>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#f5b942]">Max payout: {maxPayout}x stake</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  {tier.entries.map((entry) => (
                    <div
                      key={entry.matches}
                      className="flex items-center justify-between rounded-lg px-3 py-2"
                      style={{ background: 'rgba(255,255,255,0.03)' }}
                    >
                      <span className="text-xs font-bold text-white/70">{entry.matches} match{entry.matches > 1 ? 'es' : ''}</span>
                      <span className="gold-text text-sm font-black tabular-nums">{entry.payout}x</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
