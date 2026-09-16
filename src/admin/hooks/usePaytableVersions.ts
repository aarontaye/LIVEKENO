import { useQuery } from '@tanstack/react-query';
import { versions } from '@/admin/lib/adminMockData';

export function usePaytableVersions() {
  return useQuery({ queryKey: ['admin-paytable-versions'], queryFn: async () => { await new Promise((r) => setTimeout(r, 100)); return versions; }, staleTime: 60_000 });
}
