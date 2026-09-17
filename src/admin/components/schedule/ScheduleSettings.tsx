import { useState } from 'react';
import { TriangleAlert as AlertTriangle, Pause, Play } from 'lucide-react';

export default function ScheduleSettings() {
  const [frequency, setFrequency] = useState('5 min');
  const [nextDraw, setNextDraw] = useState('14:35');
  const [paused, setPaused] = useState(false);
  const [confirming, setConfirming] = useState<'pause' | 'resume' | null>(null);

  function fire(action: 'pause' | 'resume') {
    setPaused(action === 'pause');
    setConfirming(null);
  }

  return (
    <div className="rounded-xl border border-[rgba(232,169,59,0.12)] bg-[#0a0e17] p-4 sm:p-5">
      <h3 className="mb-4 text-sm font-bold text-white">Draw Schedule Settings</h3>
      <div className="space-y-4">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-[#7a8a9e]">Draw Frequency</label>
          <select value={frequency} onChange={(e) => setFrequency(e.target.value)} className="mt-1.5 min-h-[44px] w-full rounded-lg border border-white/10 bg-[#05070d] px-3 py-2.5 text-sm text-white outline-none focus:border-[rgba(232,169,59,0.3)]">
            <option>1 min</option><option>3 min</option><option>5 min</option><option>10 min</option><option>15 min</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-[#7a8a9e]">Next Draw Time</label>
          <input value={nextDraw} onChange={(e) => setNextDraw(e.target.value)} className="mt-1.5 min-h-[44px] w-full rounded-lg border border-white/10 bg-[#05070d] px-3 py-2.5 text-sm text-white outline-none focus:border-[rgba(232,169,59,0.3)]" />
        </div>
        <div className="flex items-center gap-3 pt-2">
          {paused ? (
            <button onClick={() => setConfirming('resume')} className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg bg-[rgba(61,220,132,0.1)] border border-[rgba(61,220,132,0.3)] py-2.5 text-sm font-semibold text-[#3ddc84] hover:bg-[rgba(61,220,132,0.15)]"><Play className="h-4 w-4" /> Resume Draws</button>
          ) : (
            <button onClick={() => setConfirming('pause')} className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg bg-[rgba(232,93,93,0.1)] border border-[rgba(232,93,93,0.3)] py-2.5 text-sm font-semibold text-[#e85d5d] hover:bg-[rgba(232,93,93,0.15)]"><Pause className="h-4 w-4" /> Pause Draws</button>
          )}
        </div>
        {paused && <p className="text-center text-xs text-[#e85d5d]">Draws are currently paused. No new draws will run.</p>}
      </div>
      {confirming && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setConfirming(null)}>
          <div className="w-full max-w-sm rounded-xl border border-[rgba(232,169,59,0.2)] bg-[#0a0e17] p-5 sm:p-6" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(232,93,93,0.1)]"><AlertTriangle className="h-5 w-5 text-[#e85d5d]" /></div>
              <div><p className="font-bold text-white">{confirming === 'pause' ? 'Pause all draws?' : 'Resume draws?'}</p><p className="text-xs text-[#7a8a9e]">{confirming === 'pause' ? 'This stops all live draws immediately.' : 'Draws will resume on the next scheduled time.'}</p></div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setConfirming(null)} className="min-h-[44px] flex-1 rounded-lg border border-white/10 py-2 text-sm font-semibold text-[#7a8a9e] hover:bg-white/5">Cancel</button>
              <button onClick={() => fire(confirming)} className={`min-h-[44px] flex-1 rounded-lg py-2 text-sm font-bold ${confirming === 'pause' ? 'bg-[#e85d5d] text-white' : 'bg-gradient-to-r from-[#f0d680] to-[#a8842f] text-[#0a1628]'}`}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
