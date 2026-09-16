import type { ReactNode } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

export default function AdminShell({ children }: { children: ReactNode }) {
  return <div className="flex min-h-screen bg-[#05070d] text-[#dce5f0]"><Sidebar /><div className="min-w-0 flex-1"><TopBar /><main className="mx-auto max-w-[1440px] p-6">{children}</main></div></div>;
}
