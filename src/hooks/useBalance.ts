import { useQuery } from '@tanstack/react-query';
import { MOCK_BALANCE } from '@/lib/mockData';
import type { Balance } from '@/lib/types';

async function fetchBalance(): Promise<Balance> {
  await new Promise((r) => setTimeout(r, 100));
  return MOCK_BALANCE;
}

export function useBalance() {
  return useQuery({
    queryKey: ['balance'],
    queryFn: fetchBalance,
    staleTime: 30_000,
  });
}
