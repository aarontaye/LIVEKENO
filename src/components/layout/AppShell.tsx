import type { ReactNode } from 'react';
import appBackground from '@/assets/file_000000005a7c81f4ac9d7d3b881f6b49.png';

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div
      className="flex h-[100dvh] w-full flex-col overflow-hidden"
      style={{
        backgroundColor: '#05070D',
        backgroundImage: `url(${appBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      {children}
    </div>
  );
}
