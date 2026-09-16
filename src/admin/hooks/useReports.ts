import { useQuery } from '@tanstack/react-query';
import { reports } from '@/admin/lib/adminMockData';

export function useReports() {
  return useQuery({ queryKey: ['admin-reports'], queryFn: async () => { await new Promise((r) => setTimeout(r, 100)); return reports; }, staleTime: 60_000 });
}
