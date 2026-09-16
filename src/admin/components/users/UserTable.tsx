import { useState } from 'react';
import { users } from '@/admin/lib/adminMockData';
import type { Status } from '@/admin/lib/adminTypes';

const statusStyle: Record<Status, string> = {
  Active: 'text-[#3ddc84]', Suspended: 'text-[#e85d5d]', Verified: 'text-[#3ddc84]',
  Pending: 'text-[#e8a93b]', Rejected: 'text-[#e85d5d]', Published: 'text-[#3ddc84]',
  Draft: 'text-[#e8a93b]', Archived: 'text-[#e85d5d]', Completed: 'text-[#3ddc84]',
  Scheduled: 'text-[#3ddc84]', Healthy: 'text-[#3ddc84]', Won: 'text-[#3ddc84]', Lost: 'text-[#e85d5d]',
};

export default function UserTable() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const filtered = users.filter((u) => {
    const q = u.name.toLowerCase().includes(query.toLowerCase()) || u.email.toLowerCase().includes(query.toLowerCase());
    const f = filter === 'All' || u.status === filter || u.verification === filter;
    return q && f;
  });

  return (
    <div className="rounded-xl border border-[rgba(232,169,59,0.12)] bg-[#0a0e17] p-5">
      <div className="mb-4 flex items-center justify-between gap-4">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name or email..." className="w-72 rounded-lg border border-white/10 bg-[#05070d] px-3 py-2 text-sm text-white outline-none focus:border-[rgba(232,169,59,0.3)]" />
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="rounded-lg border border-white/10 bg-[#05070d] px-3 py-2 text-sm text-white outline-none">
          <option>All</option><option>Active</option><option>Suspended</option><option>Verified</option><option>Pending</option><option>Rejected</option>
        </select>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/5 text-left text-[10px] uppercase tracking-wider text-[#7a8a9e]">
            <th className="pb-2 font-semibold">ID</th><th className="pb-2 font-semibold">Name</th><th className="pb-2 font-semibold">Email / Phone</th><th className="pb-2 font-semibold">Balance</th><th className="pb-2 font-semibold">Status</th><th className="pb-2 font-semibold">Verification</th><th className="pb-2 font-semibold">Flags</th><th className="pb-2 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((u) => (
            <tr key={u.id} className="border-b border-white/5 last:border-0">
              <td className="py-3 font-mono text-xs text-[#5fb8ff]">{u.id}</td>
              <td className="py-3 font-medium text-white">{u.name}</td>
              <td className="py-3 text-[#dce5f0]">{u.email}</td>
              <td className="py-3 tabular-nums text-[#e8a93b]">ETB {u.balance.toLocaleString()}</td>
              <td className={`py-3 font-semibold ${statusStyle[u.status]}`}>{u.status}</td>
              <td className={`py-3 font-semibold ${statusStyle[u.verification]}`}>{u.verification}</td>
              <td className="py-3">{u.flags.length > 0 ? u.flags.map((f) => <span key={f} className="rounded bg-[rgba(232,93,93,0.1)] px-1.5 py-0.5 text-[10px] font-bold text-[#e85d5d]">{f}</span>) : <span className="text-[#3a4452]">—</span>}</td>
              <td className="py-3"><button className="text-xs font-semibold text-[#5fb8ff] hover:underline">View</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
