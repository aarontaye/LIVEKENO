import type { BallState } from '@/lib/types';

interface BallProps {
  number: number;
  state: BallState;
  onToggle?: (n: number) => void;
  size?: 'sm' | 'md' | 'lg';
  index?: number;
  isHit?: boolean;
}

const sizeMap = { sm: 'h-8 w-8 text-xs', md: 'h-10 w-10 text-sm', lg: 'h-12 w-12 text-base' };

export default function Ball({ number, state, onToggle, size = 'md', index, isHit = false }: BallProps) {
  const isInteractive = state === 'available' || state === 'picked';
  const sphereClass = state === 'picked' ? 'picked-sphere' : state === 'drawn' ? 'drawn-sphere' : state === 'dimmed' ? 'dimmed-sphere' : 'gold-sphere';
  const textColor = state === 'picked' ? '#5fb8ff' : state === 'dimmed' ? '#77745f' : '#170501';

  return (
    <button type="button" disabled={!isInteractive} onClick={isInteractive ? () => onToggle?.(number) : undefined} className={`relative flex items-center justify-center rounded-full font-bold tabular-nums transition-transform duration-150 ${sphereClass} ${sizeMap[size]} ${isInteractive ? 'cursor-pointer active:scale-90' : 'cursor-default'} ${isHit ? 'animate-pulse-glow' : ''} ${state === 'drawn' ? 'animate-drawn-reveal' : ''}`} style={{ color: textColor, animationDelay: state === 'drawn' ? `${(index ?? 0) * 40}ms` : '0ms' }} aria-pressed={state === 'picked'} aria-label={`Number ${number}, ${state}`}>
      <span className="relative z-10 drop-shadow-sm">{number}</span>
      {state === 'picked' && <span className="absolute inset-0 rounded-full" style={{ boxShadow: 'inset 0 1px 3px rgba(95,184,255,0.4)' }} />}
    </button>
  );
}
