import type { Balance, Draw, PaytableTier } from './types';

const TOTAL_NUMBERS = 80;
const DRAW_SIZE = 20;

function pickNumbers(total: number, count: number, seed: number): number[] {
  const pool = Array.from({ length: total }, (_, i) => i + 1);
  let s = seed;
  for (let i = pool.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count).sort((a, b) => a - b);
}

function makeDraw(drawNumber: number, seed: number): Draw {
  const numbers = pickNumbers(TOTAL_NUMBERS, DRAW_SIZE, seed).map((n, i) => ({
    number: n,
    order: i + 1,
  }));
  const drawnAt = new Date(Date.now() - drawNumber * 5 * 60 * 1000);
  return {
    id: `draw-${drawNumber}`,
    drawNumber,
    drawnAt: drawnAt.toISOString(),
    numbers,
  };
}

export const MOCK_DRAWS: Draw[] = Array.from({ length: 11 }, (_, i) =>
  makeDraw(1000 - i, (i + 1) * 17)
);

export const MOCK_CURRENT_DRAW: Draw = MOCK_DRAWS[0];

export const MOCK_BALANCE: Balance = {
  amount: 2500,
  currency: 'USD',
};

const PAYOUT_TABLE: Record<number, [number, number][]> = {
  1: [[1, 4]],
  2: [[2, 12]],
  3: [[2, 2], [3, 38]],
  4: [[2, 1], [3, 5], [4, 85]],
  5: [[3, 3], [4, 12], [5, 600]],
  6: [[3, 2], [4, 5], [5, 50], [6, 1500]],
  7: [[3, 1], [4, 3], [5, 12], [6, 150], [7, 5000]],
  8: [[4, 2], [5, 8], [6, 50], [7, 800], [8, 15000]],
  9: [[4, 1], [5, 4], [6, 20], [7, 100], [8, 2000], [9, 30000]],
  10: [[5, 2], [6, 6], [7, 30], [8, 200], [9, 2000], [10, 50000]],
};

export const MOCK_PAYTABLE: PaytableTier[] = Object.entries(PAYOUT_TABLE).map(
  ([pickCount, entries]) => ({
    pickCount: Number(pickCount),
    entries: entries.map(([matches, payout]) => ({ picks: Number(pickCount), matches, payout })),
  })
);

export const STAKE_PRESETS = [1, 5, 10, 25];

export const MAX_PICKS = 10;
export const KENO_RANGE = TOTAL_NUMBERS;
