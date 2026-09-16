import { useQuery } from '@tanstack/react-query';
import { adminMetrics, chartData, payoutData, recentBets } from '@/admin/lib/adminMockData';

export function useDashboardMetrics() {
  return useQuery({ queryKey: ['admin-metrics'], queryFn: async () => { await new Promise((r) => setTimeout(r, 100)); return { metrics: adminMetrics, chartData, payoutData, recentBets }; }, staleTime: 30_000 });
}
