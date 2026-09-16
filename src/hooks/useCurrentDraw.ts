import { useQuery } from '@tanstack/react-query';
import { MOCK_CURRENT_DRAW } from '@/lib/mockData';
import type { Draw } from '@/lib/types';

async function fetchCurrentDraw(): Promise<Draw> {
  await new Promise((r) => setTimeout(r, 150));
  return MOCK_CURRENT_DRAW;
}

export function useCurrentDraw() {
  return useQuery({
    queryKey: ['current-draw'],
    queryFn: fetchCurrentDraw,
    staleTime: Infinity,
  });
}
