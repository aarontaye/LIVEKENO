import { useState } from 'react';

export default function DateRangePicker() {
  const [from, setFrom] = useState('2025-04-19');
  const [to, setTo] = useState('2025-04-26');
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      <span className="text-xs font-semibold uppercase tracking-wider text-[#7a8a9e]">From</span>
      <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} className="min-h-[44px] rounded-lg border border-white/10 bg-[#05070d] px-3 py-2 text-sm text-white outline-none focus:border-[rgba(232,169,59,0.3)]" />
      <span className="text-xs font-semibold uppercase tracking-wider text-[#7a8a9e]">To</span>
      <input type="date" value={to} onChange={(e) => setTo(e.target.value)} className="min-h-[44px] rounded-lg border border-white/10 bg-[#05070d] px-3 py-2 text-sm text-white outline-none focus:border-[rgba(232,169,59,0.3)]" />
      <button className="min-h-[44px] rounded-lg bg-gradient-to-r from-[#f0d680] to-[#a8842f] px-4 py-2 text-sm font-bold text-[#0a1628]">Apply</button>
    </div>
  );
}
