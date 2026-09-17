import type { ReactNode } from 'react';

interface MetricCardProps { label: string; value: string; change: string; tone: 'blue' | 'gold' | 'green'; icon: ReactNode; }

const toneMap = {
  blue: { ring: 'rgba(59,157,255,0.25)', text: '#5fb8ff' },
  gold: { ring: 'rgba(232,169,59,0.25)', text: '#e8a93b' },
  green: { ring: 'rgba(61,220,132,0.25)', text: '#3ddc84' },
};

export default function MetricCard({ label, value, change, tone, icon }: MetricCardProps) {
  const t = toneMap[tone];
  return (
    <div className="rounded-xl border border-[rgba(232,169,59,0.12)] bg-[#0a0e17] p-4 sm:p-5">
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: `${t.ring.replace('0.25','0.08')}`, color: t.text }}>{icon}</div>
        <span className="text-xs font-semibold" style={{ color: t.text }}>{change}</span>
      </div>
      <p className="mt-4 text-xl font-black tabular-nums text-white sm:text-2xl">{value}</p>
      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#7a8a9e]">{label}</p>
    </div>
  );
}
