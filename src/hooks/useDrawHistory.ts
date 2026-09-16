import { useQuery } from '@tanstack/react-query';
import { MOCK_DRAWS } from '@/lib/mockData';
import type { Draw } from '@/lib/types';

async function fetchDrawHistory(): Promise<Draw[]> {
  await new Promise((r) => setTimeout(r, 200));
  return MOCK_DRAWS.slice(1);
}

export function useDrawHistory() {
  return useQuery({
    queryKey: ['draw-history'],
    queryFn: fetchDrawHistory,
    staleTime: 60_000,
  });
}
