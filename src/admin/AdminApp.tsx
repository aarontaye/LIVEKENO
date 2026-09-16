import { Navigate, Route, Routes } from 'react-router-dom';
import { useAdminSession } from '@/admin/state/useAdminSession';
import LoginPage from '@/admin/pages/LoginPage';
import DashboardPage from '@/admin/pages/DashboardPage';
import PaytablePage from '@/admin/pages/PaytablePage';
import SchedulePage from '@/admin/pages/SchedulePage';
import UsersPage from '@/admin/pages/UsersPage';
import ReportsPage from '@/admin/pages/ReportsPage';

export default function AdminApp() {
  const isAuthenticated = useAdminSession((s) => s.isAuthenticated);

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/admin/login" replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="login" element={<Navigate to="/admin" replace />} />
      <Route index element={<DashboardPage />} />
      <Route path="paytable" element={<PaytablePage />} />
      <Route path="schedule" element={<SchedulePage />} />
      <Route path="users" element={<UsersPage />} />
      <Route path="reports" element={<ReportsPage />} />
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
}
