import { Minus, Plus } from 'lucide-react';
import { STAKE_PRESETS } from '@/lib/mockData';
import { useUIStore } from '@/state/useUIStore';

interface StakeInputProps { disabled?: boolean; }

export default function StakeInput({ disabled = false }: StakeInputProps) {
  const stake = useUIStore((s) => s.stake);
  const setStake = useUIStore((s) => s.setStake);
  function adjust(delta: number) { setStake(Math.max(1, stake + delta)); }

  return (
    <div className={`navy-panel rounded-2xl p-4 transition-opacity ${disabled ? 'pointer-events-none opacity-40' : ''}`}>
      <div className="flex items-center justify-between">
        <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f5b942]">Stake</label>
        <div className="flex items-center gap-3">
          <button onClick={() => adjust(-1)} className="flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(245,185,66,0.3)] bg-[#170501] text-[#ffe36b] active:scale-90" aria-label="Decrease stake">
            <Minus className="h-5 w-5" />
          </button>
          <div className="min-w-[90px] text-center">
            <span className="text-2xl font-black tabular-nums text-[#ffe36b]" style={{ textShadow: '0 0 12px rgba(255,227,107,0.4)' }}>ETB {stake}</span>
          </div>
          <button onClick={() => adjust(1)} className="flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(245,185,66,0.3)] bg-[#170501] text-[#ffe36b] active:scale-90" aria-label="Increase stake">
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        {STAKE_PRESETS.map((preset) => (
          <button
            key={preset}
            onClick={() => setStake(preset)}
            className="flex-1 rounded-lg py-2.5 text-xs font-bold tabular-nums transition-all active:scale-95"
            style={{
              background: stake === preset
                ? 'linear-gradient(135deg, #ffe36b 0%, #f5b942 50%, #b85c0f 100%)'
                : 'rgba(255,255,255,0.03)',
              border: stake === preset
                ? '2px solid #f5b942'
                : '1px solid rgba(245,185,66,0.2)',
              color: stake === preset ? '#170501' : 'rgba(255,255,255,0.5)',
              boxShadow: stake === preset ? '0 0 12px rgba(245,185,66,0.4)' : 'none',
            }}
          >
            ETB {preset}
          </button>
        ))}
      </div>
    </div>
  );
}
