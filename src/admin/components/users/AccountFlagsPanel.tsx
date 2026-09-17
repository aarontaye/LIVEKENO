const flags = [
  { type: 'Fraud Risk', count: 2, tone: 'red' },
  { type: 'High Activity', count: 7, tone: 'gold' },
  { type: 'KYC Pending', count: 12, tone: 'gold' },
  { type: 'Self-Exclusion', count: 1, tone: 'red' },
];

const toneMap = { red: 'border-[rgba(232,93,93,0.3)] text-[#e85d5d]', gold: 'border-[rgba(232,169,59,0.3)] text-[#e8a93b]' };

export default function AccountFlagsPanel() {
  return (
    <div className="rounded-xl border border-[rgba(232,169,59,0.12)] bg-[#0a0e17] p-4 sm:p-5">
      <h3 className="mb-4 text-sm font-bold text-white">Account Flags</h3>
      <div className="grid grid-cols-2 gap-3">
        {flags.map((f) => (
          <div key={f.type} className={`rounded-lg border bg-[#05070d] p-4 ${toneMap[f.tone as 'red' | 'gold']}`}>
            <p className="text-xl font-black tabular-nums sm:text-2xl">{f.count}</p>
            <p className="mt-1 text-xs font-medium">{f.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
