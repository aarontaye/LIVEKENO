import { create } from 'zustand';
import { MAX_PICKS } from '@/lib/mockData';

interface UIState {
  stake: number;
  isAnimating: boolean;
  showResult: boolean;
  showPaytable: boolean;
  setStake: (stake: number) => void;
  setAnimating: (v: boolean) => void;
  setShowResult: (v: boolean) => void;
  setShowPaytable: (v: boolean) => void;
  reset: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  stake: 5,
  isAnimating: false,
  showResult: false,
  showPaytable: false,
  setStake: (stake) => set({ stake }),
  setAnimating: (isAnimating) => set({ isAnimating }),
  setShowResult: (showResult) => set({ showResult }),
  setShowPaytable: (showPaytable) => set({ showPaytable }),
  reset: () => set({ isAnimating: false, showResult: false, showPaytable: false, stake: 5 }),
}));
