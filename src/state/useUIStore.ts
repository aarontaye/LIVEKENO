import { create } from 'zustand';
interface UIState {
  stake: number;
  isAnimating: boolean;
  showResult: boolean;
  showPaytable: boolean;
  hasSeenSplash: boolean;
  setStake: (stake: number) => void;
  setAnimating: (v: boolean) => void;
  setShowResult: (v: boolean) => void;
  setShowPaytable: (v: boolean) => void;
  completeSplash: () => void;
  reset: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  stake: 5,
  isAnimating: false,
  showResult: false,
  showPaytable: false,
  hasSeenSplash: false,
  setStake: (stake) => set({ stake }),
  setAnimating: (isAnimating) => set({ isAnimating }),
  setShowResult: (showResult) => set({ showResult }),
  setShowPaytable: (showPaytable) => set({ showPaytable }),
  completeSplash: () => set({ hasSeenSplash: true }),
  reset: () => set({ isAnimating: false, showResult: false, showPaytable: false, stake: 5 }),
}));
