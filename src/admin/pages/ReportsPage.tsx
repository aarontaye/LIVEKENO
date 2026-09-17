import AdminShell from '@/admin/components/layout/AdminShell';
import ReportSummaryCards from '@/admin/components/reports/ReportSummaryCards';
import DateRangePicker from '@/admin/components/reports/DateRangePicker';
import ReportDownloadList from '@/admin/components/reports/ReportDownloadList';
import GamePerformanceTable from '@/admin/components/reports/GamePerformanceTable';

export default function ReportsPage() {
  return (
    <AdminShell>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div><h1 className="text-xl font-black text-white sm:text-2xl">Reports</h1><p className="text-sm text-[#7a8a9e]">Revenue, payouts, and game performance</p></div>
        <DateRangePicker />
      </div>
      <div className="mb-6"><ReportSummaryCards /></div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ReportDownloadList />
        <GamePerformanceTable />
      </div>
    </AdminShell>
  );
}
