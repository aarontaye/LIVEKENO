export type BallState = 'available' | 'picked' | 'drawn';

export interface KenoNumber {
  number: number;
  state: BallState;
}

export interface DrawNumber {
  number: number;
  order: number;
}

export interface Draw {
  id: string;
  drawNumber: number;
  drawnAt: string;
  numbers: DrawNumber[];
}

export interface PaytableEntry {
  picks: number;
  matches: number;
  payout: number;
}

export interface PaytableTier {
  pickCount: number;
  entries: PaytableEntry[];
}

export interface Balance {
  amount: number;
  currency: string;
}

export interface PlaceBetInput {
  picks: number[];
  stake: number;
}

export interface PlaceBetResult {
  success: boolean;
  drawId: string;
  picks: number[];
  stake: number;
  message: string;
}

export interface BetSummaryData {
  picks: number[];
  stake: number;
  potentialPayout: number;
  hitCount: number;
}
