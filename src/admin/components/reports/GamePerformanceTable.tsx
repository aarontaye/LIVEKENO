const rows = [
  { game: 'Keno', bets: 14200, wagered: 845000, payouts: 612000, winRate: 43.1 },
  { game: 'Mini Keno', bets: 3100, wagered: 186000, payouts: 168000, winRate: 54.8 },
  { game: 'Instant Keno', bets: 1129, wagered: 53500, payouts: 112300, winRate: 99.4 },
];

export default function GamePerformanceTable() {
  return (
    <div className="rounded-xl border border-[rgba(232,169,59,0.12)] bg-[#0a0e17] p-4 sm:p-5">
      <h3 className="mb-4 text-sm font-bold text-white">Game Performance</h3>
      {/* Desktop table */}
      <table className="hidden w-full text-sm md:table">
        <thead>
          <tr className="border-b border-white/5 text-left text-[10px] uppercase tracking-wider text-[#7a8a9e]">
            <th className="pb-2 font-semibold">Game</th><th className="pb-2 font-semibold">Bets</th><th className="pb-2 font-semibold">Wagered</th><th className="pb-2 font-semibold">Payouts</th><th className="pb-2 font-semibold">Win Rate</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.game} className="border-b border-white/5 last:border-0">
              <td className="py-3 font-semibold text-white">{r.game}</td>
              <td className="py-3 tabular-nums text-[#dce5f0]">{r.bets.toLocaleString()}</td>
              <td className="py-3 tabular-nums text-[#e8a93b]">ETB {r.wagered.toLocaleString()}</td>
              <td className="py-3 tabular-nums text-[#3ddc84]">ETB {r.payouts.toLocaleString()}</td>
              <td className="py-3 tabular-nums text-white">{r.winRate}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Mobile stacked cards */}
      <div className="space-y-3 md:hidden">
        {rows.map((r) => (
          <div key={r.game} className="rounded-lg border border-white/5 bg-[#05070d] p-3">
            <p className="text-sm font-semibold text-white">{r.game}</p>
            <div className="mt-2 grid grid-cols-2 gap-y-1.5 text-xs">
              <div><span className="text-[#7a8a9e]">Bets: </span><span className="text-[#dce5f0]">{r.bets.toLocaleString()}</span></div>
              <div><span className="text-[#7a8a9e]">Win Rate: </span><span className="text-white">{r.winRate}%</span></div>
              <div><span className="text-[#7a8a9e]">Wagered: </span><span className="text-[#e8a93b]">ETB {r.wagered.toLocaleString()}</span></div>
              <div><span className="text-[#7a8a9e]">Payouts: </span><span className="text-[#3ddc84]">ETB {r.payouts.toLocaleString()}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
