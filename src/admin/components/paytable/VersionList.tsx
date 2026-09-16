import { versions } from '@/admin/lib/adminMockData';
import type { Status } from '@/admin/lib/adminTypes';

const statusStyle: Record<Status, string> = {
  Published: 'bg-[rgba(61,220,132,0.1)] text-[#3ddc84] border-[rgba(61,220,132,0.3)]',
  Draft: 'bg-[rgba(232,169,59,0.1)] text-[#e8a93b] border-[rgba(232,169,59,0.3)]',
  Archived: 'bg-[rgba(232,93,93,0.1)] text-[#e85d5d] border-[rgba(232,93,93,0.3)]',
  Active: 'text-[#3ddc84]', Suspended: 'text-[#e85d5d]', Pending: 'text-[#e8a93b]',
  Verified: 'text-[#3ddc84]', Rejected: 'text-[#e85d5d]', Completed: 'text-[#3ddc84]',
  Scheduled: 'text-[#3ddc84]', Healthy: 'text-[#3ddc84]', Won: 'text-[#3ddc84]', Lost: 'text-[#e85d5d]',
};

export default function VersionList() {
  return (
    <div className="rounded-xl border border-[rgba(232,169,59,0.12)] bg-[#0a0e17] p-5">
      <h3 className="mb-4 text-sm font-bold text-white">Paytable Versions</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/5 text-left text-[10px] uppercase tracking-wider text-[#7a8a9e]">
            <th className="pb-2 font-semibold">Version</th>
            <th className="pb-2 font-semibold">Status</th>
            <th className="pb-2 font-semibold">Effective From</th>
            <th className="pb-2 font-semibold">Created By</th>
            <th className="pb-2 font-semibold">Updated</th>
            <th className="pb-2 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {versions.map((v) => (
            <tr key={v.version} className="border-b border-white/5 last:border-0">
              <td className="py-3 font-mono text-xs text-white">{v.version}</td>
              <td className="py-3"><span className={`inline-block rounded-full border px-2 py-0.5 text-[10px] font-bold ${statusStyle[v.status]}`}>{v.status}</span></td>
              <td className="py-3 text-[#dce5f0]">{v.effectiveFrom}</td>
              <td className="py-3 text-[#dce5f0]">{v.createdBy}</td>
              <td className="py-3 text-[#7a8a9e]">{v.updated}</td>
              <td className="py-3"><button className="text-xs font-semibold text-[#5fb8ff] hover:underline">View</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
