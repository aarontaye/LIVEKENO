import { NavLink } from 'react-router-dom';
import { BarChart3, CalendarClock, FileBarChart, LayoutGrid, Settings, Users } from 'lucide-react';
import { useMobileNav } from '@/admin/state/useMobileNav';

const items = [
  { to: '/admin', label: 'Dashboard', icon: LayoutGrid, end: true },
  { to: '/admin/paytable', label: 'Games & Paytables', icon: BarChart3 },
  { to: '/admin/schedule', label: 'Draw Schedule', icon: CalendarClock },
  { to: '/admin/users', label: 'Users & KYC', icon: Users },
  { to: '/admin/reports', label: 'Reports', icon: FileBarChart },
  { to: '/admin/settings', label: 'Settings', icon: Settings },
];

export default function Sidebar() {
  const isOpen = useMobileNav((s) => s.isOpen);
  const close = useMobileNav((s) => s.close);

  return (
    <>
      {/* Overlay backdrop for mobile drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={close}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-60 shrink-0 flex-col border-r border-[rgba(232,169,59,0.12)] bg-[#070a12] transition-transform duration-300 lg:static lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center gap-2.5 px-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#f0d680] to-[#a8842f]">
            <span className="text-sm font-black text-[#0a1628]">K</span>
          </div>
          <div className="leading-none">
            <p className="text-base font-black tracking-tight text-white">KENO</p>
            <p className="text-[10px] font-medium uppercase tracking-widest text-[#e8a93b]">Admin Console</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1 px-3 py-4">
          {items.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={close}
              className={({ isActive }) =>
                `flex min-h-[44px] items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[rgba(232,169,59,0.1)] text-[#e8a93b]'
                    : 'text-[#7a8a9e] hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <Icon className="h-4 w-4" /> {label}
            </NavLink>
          ))}
        </nav>
        <div className="px-3 py-4 text-[10px] text-[#4a5868]">v1.3.0 · Build 2025.04.26</div>
      </aside>
    </>
  );
}
