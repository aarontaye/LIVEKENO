import { pastDraws } from '@/admin/lib/adminMockData';

export default function PastDrawsTable() {
  return (
    <div className="rounded-xl border border-[rgba(232,169,59,0.12)] bg-[#0a0e17] p-5">
      <h3 className="mb-4 text-sm font-bold text-white">Past Draws</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/5 text-left text-[10px] uppercase tracking-wider text-[#7a8a9e]">
            <th className="pb-2 font-semibold">Time</th>
            <th className="pb-2 font-semibold">Draw ID</th>
            <th className="pb-2 font-semibold">Numbers (20)</th>
            <th className="pb-2 font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {pastDraws.map((d) => (
            <tr key={d.id} className="border-b border-white/5 last:border-0">
              <td className="py-3 font-bold tabular-nums text-white">{d.time}</td>
              <td className="py-3 font-mono text-xs text-[#5fb8ff]">{d.id}</td>
              <td className="py-3">
                <div className="flex flex-wrap gap-1">
                  {d.numbers.map((n) => <span key={n} className="flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(232,169,59,0.1)] text-[10px] font-bold text-[#e8a93b]">{n}</span>)}
                </div>
              </td>
              <td className="py-3"><span className="rounded-full bg-[rgba(61,220,132,0.1)] px-2 py-0.5 text-[10px] font-bold text-[#3ddc84]">{d.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
