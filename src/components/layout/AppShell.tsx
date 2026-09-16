import type { ReactNode } from 'react';

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div
      className="flex h-[100dvh] w-full flex-col overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 100% 60% at 50% 0%, #0f2240 0%, #0a1628 40%, #060d1a 100%)',
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      {children}
    </div>
  );
}
