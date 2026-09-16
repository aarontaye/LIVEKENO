import { useEffect } from 'react';
import { MOCK_CURRENT_DRAW } from '@/lib/mockData';

interface DrawAnimationProps {
  onReveal: (number: number) => void;
  onComplete: () => void;
}

export default function DrawAnimation({ onReveal, onComplete }: DrawAnimationProps) {
  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      const next = MOCK_CURRENT_DRAW.numbers[index];
      if (!next) {
        window.clearInterval(timer);
        onComplete();
        return;
      }
      onReveal(next.number);
      index += 1;
      if (index === MOCK_CURRENT_DRAW.numbers.length) {
        window.clearInterval(timer);
        window.setTimeout(onComplete, 450);
      }
    }, 190);

    return () => window.clearInterval(timer);
  }, [onComplete, onReveal]);

  return null;
}
