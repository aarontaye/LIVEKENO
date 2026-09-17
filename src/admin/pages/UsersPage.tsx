import AdminShell from '@/admin/components/layout/AdminShell';
import UserTable from '@/admin/components/users/UserTable';
import KYCQueueList from '@/admin/components/users/KYCQueueList';
import AccountFlagsPanel from '@/admin/components/users/AccountFlagsPanel';

export default function UsersPage() {
  return (
    <AdminShell>
      <div className="mb-6"><h1 className="text-xl font-black text-white sm:text-2xl">Users & KYC</h1><p className="text-sm text-[#7a8a9e]">Manage player accounts and verification queue</p></div>
      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2"><UserTable /></div>
        <div className="space-y-4"><AccountFlagsPanel /></div>
      </div>
      <KYCQueueList />
    </AdminShell>
  );
}
