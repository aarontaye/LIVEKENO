import { create } from 'zustand';
import { MAX_PICKS } from '@/lib/mockData';

interface BoardSelectionState {
  picks: number[];
  togglePick: (n: number) => void;
  clear: () => void;
  isPicked: (n: number) => boolean;
  canPick: () => boolean;
}

export const useBoardSelection = create<BoardSelectionState>((set, get) => ({
  picks: [],
  togglePick: (n) => {
    const { picks } = get();
    if (picks.includes(n)) {
      set({ picks: picks.filter((p) => p !== n) });
    } else if (picks.length < MAX_PICKS) {
      set({ picks: [...picks, n].sort((a, b) => a - b) });
    }
  },
  clear: () => set({ picks: [] }),
  isPicked: (n) => get().picks.includes(n),
  canPick: () => get().picks.length < MAX_PICKS,
}));
