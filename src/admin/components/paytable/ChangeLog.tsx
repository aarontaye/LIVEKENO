const changes = [
  { date: 'Apr 20, 2025', author: 'Abebe Kebede', text: 'Published v1.3.0 — adjusted 10-pick top tier from 40,000x to 50,000x' },
  { date: 'Apr 18, 2025', author: 'Abebe Kebede', text: 'Created draft v1.2.1 — lowered 7-pick 6-hit from 180x to 150x' },
  { date: 'Apr 10, 2025', author: 'Selam Tesfaye', text: 'Archived v1.2.0 after v1.3.0 went live' },
];

export default function ChangeLog() {
  return (
    <div className="rounded-xl border border-[rgba(232,169,59,0.12)] bg-[#0a0e17] p-4 sm:p-5">
      <h3 className="mb-4 text-sm font-bold text-white">Change Log</h3>
      <div className="space-y-4">
        {changes.map((c, i) => (
          <div key={i} className="flex gap-3">
            <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#e8a93b]" />
            <div>
              <p className="text-sm text-[#dce5f0]">{c.text}</p>
              <p className="mt-0.5 text-xs text-[#7a8a9e]">{c.author} · {c.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
