import { scheduledDraws } from '@/admin/lib/adminMockData';

export default function UpcomingDrawsList() {
  return (
    <div className="rounded-xl border border-[rgba(232,169,59,0.12)] bg-[#0a0e17] p-4 sm:p-5">
      <h3 className="mb-4 text-sm font-bold text-white">Upcoming Draws</h3>
      <div className="space-y-2">
        {scheduledDraws.map((d) => (
          <div key={d.id} className="flex items-center justify-between rounded-lg border border-white/5 bg-[#05070d] px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold tabular-nums text-white">{d.time}</span>
              <span className="font-mono text-xs text-[#7a8a9e]">{d.id}</span>
            </div>
            <span className="rounded-full bg-[rgba(61,220,132,0.1)] px-2 py-0.5 text-[10px] font-bold text-[#3ddc84]">{d.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
