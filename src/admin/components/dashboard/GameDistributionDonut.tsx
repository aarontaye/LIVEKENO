const segments = [
  { label: 'Keno', value: 78, color: '#e8a93b' },
  { label: 'Mini Keno', value: 14, color: '#3b9dff' },
  { label: 'Instant Keno', value: 8, color: '#3ddc84' },
];

export default function GameDistributionDonut() {
  const total = segments.reduce((s, seg) => s + seg.value, 0);
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;
  return (
    <div className="rounded-xl border border-[rgba(232,169,59,0.12)] bg-[#0a0e17] p-5">
      <h3 className="text-sm font-bold text-white">Game Distribution</h3>
      <div className="mt-4 flex items-center gap-6">
        <svg width="140" height="140" viewBox="0 0 140 140">
          {segments.map((seg) => {
            const dash = (seg.value / total) * circumference;
            const el = <circle key={seg.label} cx="70" cy="70" r={radius} fill="none" stroke={seg.color} strokeWidth="14" strokeDasharray={`${dash} ${circumference - dash}`} strokeDashoffset={-offset} transform="rotate(-90 70 70)" />;
            offset += dash;
            return el;
          })}
          <text x="70" y="66" textAnchor="middle" className="fill-white text-lg font-black">78%</text>
          <text x="70" y="82" textAnchor="middle" className="fill-[#7a8a9e] text-[9px]">Keno</text>
        </svg>
        <div className="space-y-2">
          {segments.map((seg) => (
            <div key={seg.label} className="flex items-center gap-2 text-xs">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: seg.color }} />
              <span className="text-white">{seg.label}</span>
              <span className="text-[#7a8a9e]">{seg.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
