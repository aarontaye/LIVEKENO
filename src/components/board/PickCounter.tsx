import { MAX_PICKS } from '@/lib/mockData';

interface PickCounterProps {
  count: number;
}

export default function PickCounter({ count }: PickCounterProps) {
  const remaining = MAX_PICKS - count;
  const segments = Array.from({ length: MAX_PICKS }, (_, i) => i < count);

  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-1">
        {segments.map((filled, i) => (
          <span
            key={i}
            className="h-2 w-2 rounded-full transition-all duration-300"
            style={{
              background: filled ? '#ffe36b' : 'rgba(255,255,255,0.12)',
              boxShadow: filled ? '0 0 6px rgba(255,227,107,0.6)' : 'none',
              transform: filled ? 'scale(1.1)' : 'scale(1)',
            }}
          />
        ))}
      </div>
      <div className="text-xs">
        <span className="font-bold tabular-nums text-white">{count}</span>
        <span className="text-white/40"> / {MAX_PICKS} picks</span>
        {remaining > 0 && count > 0 && (
          <span className="ml-2 text-[#ffe36b]">({remaining} left)</span>
        )}
      </div>
    </div>
  );
}
