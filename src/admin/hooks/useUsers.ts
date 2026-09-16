import { useQuery } from '@tanstack/react-query';
import { users } from '@/admin/lib/adminMockData';

export function useUsers() {
  return useQuery({ queryKey: ['admin-users'], queryFn: async () => { await new Promise((r) => setTimeout(r, 100)); return users; }, staleTime: 30_000 });
}
