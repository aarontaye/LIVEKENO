import { Download } from 'lucide-react';
import { reports } from '@/admin/lib/adminMockData';

export default function ReportDownloadList() {
  return (
    <div className="rounded-xl border border-[rgba(232,169,59,0.12)] bg-[#0a0e17] p-4 sm:p-5">
      <h3 className="mb-4 text-sm font-bold text-white">Available Reports</h3>
      <div className="space-y-2">
        {reports.map((r) => (
          <div key={r.name} className="flex flex-col gap-2 rounded-lg border border-white/5 bg-[#05070d] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">{r.name}</p>
              <p className="text-xs text-[#7a8a9e]">{r.description} · Updated {r.updated}</p>
            </div>
            <button className="flex min-h-[44px] items-center gap-2 rounded-lg border border-[rgba(232,169,59,0.3)] bg-transparent px-3 py-1.5 text-xs font-semibold text-[#e8a93b] hover:bg-[rgba(232,169,59,0.05)]">
              <Download className="h-3.5 w-3.5" /> Download CSV
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
