import { X } from 'lucide-react';
import { MOCK_PAYTABLE } from '@/lib/mockData';

interface PaytableCardProps {
  pickCount: number;
  onClose: () => void;
}

export default function PaytableCard({ pickCount, onClose }: PaytableCardProps) {
  const tier = MOCK_PAYTABLE.find((t) => t.pickCount === pickCount);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center animate-fade-in"
      style={{ background: 'rgba(6, 13, 26, 0.85)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-t-3xl p-6 pb-8 animate-overlay-up"
        style={{
          background: 'linear-gradient(180deg, #142a4a 0%, #0a1628 100%)',
          borderTop: '1px solid rgba(59,157,255,0.15)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/15" />

        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-black text-white">Paytable</h2>
            <p className="text-xs text-white/40">
              {pickCount > 0
                ? `${pickCount} pick${pickCount > 1 ? 's' : ''} selected`
                : 'Pick numbers to see payouts'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-white/40 active:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {tier ? (
          <div className="space-y-1.5">
            <div className="grid grid-cols-2 gap-2 px-2 pb-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/30">
              <span>Matches</span>
              <span className="text-right">Payout (x stake)</span>
            </div>
            {tier.entries.map((entry) => (
              <div
                key={entry.matches}
                className="grid grid-cols-2 gap-2 rounded-xl px-3 py-2.5"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <span className="text-sm font-bold text-white">{entry.matches}</span>
                <span className="gold-text text-right text-sm font-bold tabular-nums">
                  {entry.payout}x
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {MOCK_PAYTABLE.map((t) => (
              <button
                key={t.pickCount}
                onClick={onClose}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition-colors active:bg-white/5"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <span className="text-sm font-bold text-white">{t.pickCount} picks</span>
                <span className="text-xs text-white/40">
                  up to {Math.max(...t.entries.map((e) => e.payout))}x
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
