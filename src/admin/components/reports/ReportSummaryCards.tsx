const cards = [
  { label: 'Total Revenue', value: 'ETB 1,284,500', tone: 'gold' },
  { label: 'Total Payouts', value: 'ETB 892,300', tone: 'green' },
  { label: 'Payout Ratio', value: '69.5%', tone: 'blue' },
  { label: 'Active Players', value: '3,847', tone: 'blue' },
  { label: 'Total Bets', value: '18,429', tone: 'gold' },
];

const toneMap = { gold: 'text-[#e8a93b]', green: 'text-[#3ddc84]', blue: 'text-[#5fb8ff]' };

export default function ReportSummaryCards() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {cards.map((c) => (
        <div key={c.label} className="rounded-xl border border-[rgba(232,169,59,0.12)] bg-[#0a0e17] p-4">
          <p className={`text-lg font-black tabular-nums sm:text-xl ${toneMap[c.tone as 'gold' | 'green' | 'blue']}`}>{c.value}</p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#7a8a9e]">{c.label}</p>
        </div>
      ))}
    </div>
  );
}
