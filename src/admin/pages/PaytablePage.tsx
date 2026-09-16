import AdminShell from '@/admin/components/layout/AdminShell';
import VersionList from '@/admin/components/paytable/VersionList';
import PaytableGrid from '@/admin/components/paytable/PaytableGrid';
import PublishPanel from '@/admin/components/paytable/PublishPanel';
import ChangeLog from '@/admin/components/paytable/ChangeLog';

export default function PaytablePage() {
  return (
    <AdminShell>
      <div className="mb-6"><h1 className="text-2xl font-black text-white">Games & Paytables</h1><p className="text-sm text-[#7a8a9e]">Manage payout multipliers and publish new versions</p></div>
      <div className="mb-6"><VersionList /></div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2"><PaytableGrid /></div>
        <div className="space-y-4"><PublishPanel /><ChangeLog /></div>
      </div>
    </AdminShell>
  );
}
