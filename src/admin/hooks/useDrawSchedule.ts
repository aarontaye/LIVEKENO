import { useQuery } from '@tanstack/react-query';
import { scheduledDraws, pastDraws } from '@/admin/lib/adminMockData';

export function useDrawSchedule() {
  return useQuery({ queryKey: ['admin-draw-schedule'], queryFn: async () => { await new Promise((r) => setTimeout(r, 100)); return { upcoming: scheduledDraws, past: pastDraws }; }, staleTime: 60_000 });
}
