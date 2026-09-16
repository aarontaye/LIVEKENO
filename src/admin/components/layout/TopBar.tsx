import { Bell, ChevronDown } from 'lucide-react';
import { useAdminSession } from '@/admin/state/useAdminSession';

export default function TopBar() {
  const signOut = useAdminSession((s) => s.signOut);
  return (
    <header className="flex h-16 items-center justify-between border-b border-[rgba(232,169,59,0.12)] bg-[#070a12] px-6">
      <div className="flex items-center gap-2 rounded-full border border-[rgba(232,169,59,0.3)] bg-[rgba(232,169,59,0.06)] px-3 py-1">
        <span className="h-2 w-2 rounded-full bg-[#3ddc84]" />
        <span className="text-xs font-bold uppercase tracking-wider text-[#e8a93b]">Production</span>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative text-[#7a8a9e] hover:text-white"><Bell className="h-5 w-5" /><span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#e8a93b]" /></button>
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#1a3a6e] to-[#0f2240] text-xs font-bold text-[#5fb8ff]">AK</div>
          <div className="leading-none"><p className="text-sm font-semibold text-white">Abebe Kebede</p><p className="text-[10px] text-[#7a8a9e]">Super Admin</p></div>
          <button onClick={signOut} className="text-[#7a8a9e] hover:text-white"><ChevronDown className="h-4 w-4" /></button>
        </div>
      </div>
    </header>
  );
}
