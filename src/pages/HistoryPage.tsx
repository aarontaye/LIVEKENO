import AppShell from '@/components/layout/AppShell';
import Header from '@/components/layout/Header';
import HistoryList from '@/components/history/HistoryList';
import { useDrawHistory } from '@/hooks/useDrawHistory';

export default function HistoryPage() {
  const { data: draws, isLoading } = useDrawHistory();

  return (
    <AppShell>
      <Header />
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <div className="px-4 pt-4 pb-2">
          <h2 className="text-lg font-black text-white">Draw History</h2>
          <p className="text-xs text-white/40">Recent Keno draws</p>
        </div>
        <HistoryList draws={draws ?? []} isLoading={isLoading} />
      </div>
    </AppShell>
  );
}
