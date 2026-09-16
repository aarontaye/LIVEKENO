import { Coins, Heart, TrendingUp, Users } from 'lucide-react';
import AdminShell from '@/admin/components/layout/AdminShell';
import MetricCard from '@/admin/components/dashboard/MetricCard';
import WageredPayoutsChart from '@/admin/components/dashboard/WageredPayoutsChart';
import GameDistributionDonut from '@/admin/components/dashboard/GameDistributionDonut';
import RecentBetsTable from '@/admin/components/dashboard/RecentBetsTable';
import { useDashboardMetrics } from '@/admin/hooks/useDashboardMetrics';

export default function DashboardPage() {
  const { data } = useDashboardMetrics();
  const icons = [<TrendingUp className="h-5 w-5" />, <Coins className="h-5 w-5" />, <TrendingUp className="h-5 w-5" />, <Heart className="h-5 w-5" />];
  const tones = ['blue', 'gold', 'green', 'green'] as const;
  return (
    <AdminShell>
      <div className="mb-6"><h1 className="text-2xl font-black text-white">Dashboard</h1><p className="text-sm text-[#7a8a9e]">Live overview of platform activity</p></div>
      <div className="mb-6 grid grid-cols-4 gap-4">
        {data?.metrics.map((m, i) => <MetricCard key={m.label} label={m.label} value={m.value} change={m.change} tone={tones[i]} icon={icons[i]} />)}
      </div>
      <div className="mb-6 grid grid-cols-3 gap-4">
        <div className="col-span-2"><WageredPayoutsChart /></div>
        <GameDistributionDonut />
      </div>
      <RecentBetsTable />
    </AdminShell>
  );
}
