import { useEffect } from 'react';
import { MOCK_CURRENT_DRAW } from '@/lib/mockData';

interface DrawAnimationProps {
  onReveal: (number: number) => void;
  onComplete: () => void;
}

export default function DrawAnimation({ onReveal, onComplete }: DrawAnimationProps) {
  useEffect(() => {
    let index = 0;
    let timer: number;

    function tick() {
      if (index >= MOCK_CURRENT_DRAW.numbers.length) {
        onComplete();
        return;
      }
      onReveal(MOCK_CURRENT_DRAW.numbers[index].number);
      index += 1;
      timer = window.setTimeout(tick, 1000);
    }

    tick();

    return () => window.clearTimeout(timer);
  }, [onComplete, onReveal]);

  return null;
}
