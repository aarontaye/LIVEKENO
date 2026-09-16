import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';

export default function PublishPanel() {
  const [confirming, setConfirming] = useState<'draft' | 'publish' | null>(null);
  const [msg, setMsg] = useState('');

  function fire(action: 'draft' | 'publish') {
    setMsg(action === 'draft' ? 'Draft saved.' : 'Paytable published. Now live for all players.');
    setConfirming(null);
  }

  return (
    <div className="rounded-xl border border-[rgba(232,169,59,0.12)] bg-[#0a0e17] p-5">
      <h3 className="mb-4 text-sm font-bold text-white">Publish</h3>
      <div className="space-y-3">
        <button onClick={() => setConfirming('draft')} className="w-full rounded-lg border border-[rgba(232,169,59,0.3)] bg-transparent py-2.5 text-sm font-semibold text-[#e8a93b] hover:bg-[rgba(232,169,59,0.05)]">Save as Draft</button>
        <button onClick={() => setConfirming('publish')} className="w-full rounded-lg bg-gradient-to-r from-[#f0d680] to-[#a8842f] py-2.5 text-sm font-bold text-[#0a1628] hover:opacity-90">Publish Paytable</button>
        {msg && <p className="text-center text-xs text-[#3ddc84]">{msg}</p>}
      </div>
      {confirming && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setConfirming(null)}>
          <div className="w-full max-w-sm rounded-xl border border-[rgba(232,169,59,0.2)] bg-[#0a0e17] p-6" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(232,169,59,0.1)]"><AlertTriangle className="h-5 w-5 text-[#e8a93b]" /></div>
              <div><p className="font-bold text-white">{confirming === 'publish' ? 'Publish Paytable?' : 'Save Draft?'}</p><p className="text-xs text-[#7a8a9e]">{confirming === 'publish' ? 'This will overwrite the live paytable for all players.' : 'Drafts are not visible to players.'}</p></div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setConfirming(null)} className="flex-1 rounded-lg border border-white/10 py-2 text-sm font-semibold text-[#7a8a9e] hover:bg-white/5">Cancel</button>
              <button onClick={() => fire(confirming)} className="flex-1 rounded-lg bg-gradient-to-r from-[#f0d680] to-[#a8842f] py-2 text-sm font-bold text-[#0a1628]">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
