import { Minus, Plus } from 'lucide-react';
import { STAKE_PRESETS } from '@/lib/mockData';
import { useUIStore } from '@/state/useUIStore';

interface StakeInputProps { disabled?: boolean; }

export default function StakeInput({ disabled = false }: StakeInputProps) {
  const stake = useUIStore((s) => s.stake);
  const setStake = useUIStore((s) => s.setStake);
  function adjust(delta: number) { setStake(Math.max(1, stake + delta)); }

  return <div className={`space-y-3 transition-opacity ${disabled ? 'pointer-events-none opacity-40' : ''}`}>
    <div className="flex items-center justify-between"><label className="text-xs font-semibold uppercase tracking-wider text-white/40">Stake</label><div className="flex items-center gap-3">
      <button onClick={() => adjust(-1)} className="flex h-9 w-9 items-center justify-center rounded-lg navy-panel text-white/60" aria-label="Decrease stake"><Minus className="h-4 w-4" /></button>
      <div className="min-w-[80px] text-center"><span className="gold-text text-xl font-black tabular-nums">ETB {stake}</span></div>
      <button onClick={() => adjust(1)} className="flex h-9 w-9 items-center justify-center rounded-lg navy-panel text-white/60" aria-label="Increase stake"><Plus className="h-4 w-4" /></button>
    </div></div>
    <div className="flex gap-2">{STAKE_PRESETS.map((preset) => <button key={preset} onClick={() => setStake(preset)} className="flex-1 rounded-lg py-2 text-xs font-bold tabular-nums" style={{ background: stake === preset ? 'linear-gradient(135deg, #1a3a6e, #0f2240)' : 'rgba(255,255,255,0.04)', border: stake === preset ? '1px solid rgba(59,157,255,0.5)' : '1px solid rgba(255,255,255,0.06)', color: stake === preset ? '#5fb8ff' : 'rgba(255,255,255,0.5)' }}>ETB {preset}</button>)}</div>
  </div>;
}
