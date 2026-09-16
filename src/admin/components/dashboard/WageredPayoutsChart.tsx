import { chartData, payoutData } from '@/admin/lib/adminMockData';

export default function WageredPayoutsChart() {
  const max = Math.max(...chartData, ...payoutData);
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  return (
    <div className="rounded-xl border border-[rgba(232,169,59,0.12)] bg-[#0a0e17] p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-white">Wagered vs Payouts</h3>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#e8a93b]" /><span className="text-[#7a8a9e]">Wagered</span></span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#3ddc84]" /><span className="text-[#7a8a9e]">Payouts</span></span>
        </div>
      </div>
      <div className="mt-6 flex h-44 items-end gap-3">
        {chartData.map((v, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div className="flex w-full items-end justify-center gap-1" style={{ height: '140px' }}>
              <div className="w-1/2 rounded-t bg-[#e8a93b]/80 transition-all" style={{ height: `${(v / max) * 100}%` }} />
              <div className="w-1/2 rounded-t bg-[#3ddc84]/70 transition-all" style={{ height: `${(payoutData[i] / max) * 100}%` }} />
            </div>
            <span className="text-[10px] text-[#7a8a9e]">{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
