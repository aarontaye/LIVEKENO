import { recentBets } from '@/admin/lib/adminMockData';

const statusStyle: Record<string, string> = { Won: 'text-[#3ddc84]', Lost: 'text-[#e85d5d]' };

export default function RecentBetsTable() {
  return (
    <div className="rounded-xl border border-[rgba(232,169,59,0.12)] bg-[#0a0e17] p-4 sm:p-5">
      <h3 className="mb-4 text-sm font-bold text-white">Recent Bets</h3>
      {/* Desktop table */}
      <table className="hidden w-full text-sm md:table">
        <thead>
          <tr className="border-b border-white/5 text-left text-[10px] uppercase tracking-wider text-[#7a8a9e]">
            <th className="pb-2 font-semibold">Bet ID</th>
            <th className="pb-2 font-semibold">User</th>
            <th className="pb-2 font-semibold">Picks</th>
            <th className="pb-2 font-semibold">Stake</th>
            <th className="pb-2 font-semibold">Payout</th>
            <th className="pb-2 font-semibold">Status</th>
            <th className="pb-2 font-semibold">Time</th>
          </tr>
        </thead>
        <tbody>
          {recentBets.map((bet) => (
            <tr key={bet.id} className="border-b border-white/5 last:border-0">
              <td className="py-2.5 font-mono text-xs text-[#5fb8ff]">{bet.id}</td>
              <td className="py-2.5 text-white">{bet.user}</td>
              <td className="py-2.5 tabular-nums text-[#dce5f0]">{bet.picks}</td>
              <td className="py-2.5 tabular-nums text-[#dce5f0]">ETB {bet.stake}</td>
              <td className="py-2.5 tabular-nums text-white">ETB {bet.payout.toLocaleString()}</td>
              <td className={`py-2.5 font-semibold ${statusStyle[bet.status] ?? 'text-[#7a8a9e]'}`}>{bet.status}</td>
              <td className="py-2.5 text-[#7a8a9e]">{bet.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Mobile stacked cards */}
      <div className="space-y-3 md:hidden">
        {recentBets.map((bet) => (
          <div key={bet.id} className="rounded-lg border border-white/5 bg-[#05070d] p-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#5fb8ff]">{bet.id}</span>
              <span className={`text-xs font-semibold ${statusStyle[bet.status] ?? 'text-[#7a8a9e]'}`}>{bet.status}</span>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-y-1.5 text-xs">
              <div><span className="text-[#7a8a9e]">User: </span><span className="text-white">{bet.user}</span></div>
              <div><span className="text-[#7a8a9e]">Picks: </span><span className="text-[#dce5f0]">{bet.picks}</span></div>
              <div><span className="text-[#7a8a9e]">Stake: </span><span className="text-[#dce5f0]">ETB {bet.stake}</span></div>
              <div><span className="text-[#7a8a9e]">Payout: </span><span className="text-white">ETB {bet.payout.toLocaleString()}</span></div>
              <div><span className="text-[#7a8a9e]">Time: </span><span className="text-[#7a8a9e]">{bet.time}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
