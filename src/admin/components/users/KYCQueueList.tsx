import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { kycQueue } from '@/admin/lib/adminMockData';

export default function KYCQueueList() {
  const [queue, setQueue] = useState(kycQueue);
  const [confirming, setConfirming] = useState<{ id: string; action: 'approve' | 'reject' } | null>(null);

  function fire() {
    if (!confirming) return;
    setQueue((q) => q.filter((e) => e.id !== confirming.id));
    setConfirming(null);
  }

  return (
    <div className="rounded-xl border border-[rgba(232,169,59,0.12)] bg-[#0a0e17] p-5">
      <h3 className="mb-4 text-sm font-bold text-white">KYC Verification Queue</h3>
      <div className="space-y-3">
        {queue.map((entry) => (
          <div key={entry.id} className="flex items-center justify-between rounded-lg border border-white/5 bg-[#05070d] px-4 py-3">
            <div className="flex items-center gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#1a3a6e] to-[#0f2240] text-xs font-bold text-[#5fb8ff]">{entry.name.split(' ').map((n) => n[0]).join('')}</div>
              <div>
                <p className="text-sm font-semibold text-white">{entry.name}</p>
                <p className="text-xs text-[#7a8a9e]">{entry.document} · submitted {entry.submitted}</p>
              </div>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${entry.risk === 'Low' ? 'bg-[rgba(61,220,132,0.1)] text-[#3ddc84]' : entry.risk === 'Medium' ? 'bg-[rgba(232,169,59,0.1)] text-[#e8a93b]' : 'bg-[rgba(232,93,93,0.1)] text-[#e85d5d]'}`}>{entry.risk} risk</span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setConfirming({ id: entry.id, action: 'approve' })} className="rounded-lg bg-[rgba(61,220,132,0.1)] border border-[rgba(61,220,132,0.3)] px-3 py-1.5 text-xs font-semibold text-[#3ddc84] hover:bg-[rgba(61,220,132,0.15)]">Approve</button>
              <button onClick={() => setConfirming({ id: entry.id, action: 'reject' })} className="rounded-lg bg-[rgba(232,93,93,0.1)] border border-[rgba(232,93,93,0.3)] px-3 py-1.5 text-xs font-semibold text-[#e85d5d] hover:bg-[rgba(232,93,93,0.15)]">Reject</button>
            </div>
          </div>
        ))}
        {queue.length === 0 && <p className="py-8 text-center text-sm text-[#7a8a9e]">No pending KYC entries.</p>}
      </div>
      {confirming && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setConfirming(null)}>
          <div className="w-full max-w-sm rounded-xl border border-[rgba(232,169,59,0.2)] bg-[#0a0e17] p-6" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(232,169,59,0.1)]"><AlertTriangle className="h-5 w-5 text-[#e8a93b]" /></div>
              <div><p className="font-bold text-white">{confirming.action === 'approve' ? 'Approve KYC?' : 'Reject KYC?'}</p><p className="text-xs text-[#7a8a9e]">{confirming.action === 'approve' ? 'This will mark the user as verified.' : 'This will reject the submission and notify the user.'}</p></div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setConfirming(null)} className="flex-1 rounded-lg border border-white/10 py-2 text-sm font-semibold text-[#7a8a9e] hover:bg-white/5">Cancel</button>
              <button onClick={fire} className={`flex-1 rounded-lg py-2 text-sm font-bold ${confirming.action === 'approve' ? 'bg-[#3ddc84] text-[#0a0e17]' : 'bg-[#e85d5d] text-white'}`}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
