import { useQuery } from '@tanstack/react-query';
import { kycQueue } from '@/admin/lib/adminMockData';

export function useKYCQueue() {
  return useQuery({ queryKey: ['admin-kyc-queue'], queryFn: async () => { await new Promise((r) => setTimeout(r, 100)); return kycQueue; }, staleTime: 30_000 });
}
