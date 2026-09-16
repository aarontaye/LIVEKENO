const rows = [
  { game: 'Keno', bets: 14200, wagered: 845000, payouts: 612000, winRate: 43.1 },
  { game: 'Mini Keno', bets: 3100, wagered: 186000, payouts: 168000, winRate: 54.8 },
  { game: 'Instant Keno', bets: 1129, wagered: 53500, payouts: 112300, winRate: 99.4 },
];

export default function GamePerformanceTable() {
  return (
    <div className="rounded-xl border border-[rgba(232,169,59,0.12)] bg-[#0a0e17] p-5">
      <h3 className="mb-4 text-sm font-bold text-white">Game Performance</h3>
      <table className="w-full text-sm">
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
    </div>
  );
}
