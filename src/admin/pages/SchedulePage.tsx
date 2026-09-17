import AdminShell from '@/admin/components/layout/AdminShell';
import ScheduleSettings from '@/admin/components/schedule/ScheduleSettings';
import DrawCalendar from '@/admin/components/schedule/DrawCalendar';
import UpcomingDrawsList from '@/admin/components/schedule/UpcomingDrawsList';
import PastDrawsTable from '@/admin/components/schedule/PastDrawsTable';

export default function SchedulePage() {
  return (
    <AdminShell>
      <div className="mb-6"><h1 className="text-xl font-black text-white sm:text-2xl">Draw Schedule</h1><p className="text-sm text-[#7a8a9e]">Manage draw frequency and view past results</p></div>
      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <ScheduleSettings />
        <DrawCalendar />
        <UpcomingDrawsList />
      </div>
      <PastDrawsTable />
    </AdminShell>
  );
}
