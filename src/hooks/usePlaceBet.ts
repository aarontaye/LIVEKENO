import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MOCK_CURRENT_DRAW, MOCK_PAYTABLE, MAX_PICKS } from '@/lib/mockData';
import type { Draw, PlaceBetInput, PlaceBetResult } from '@/lib/types';

async function placeBet(input: PlaceBetInput): Promise<PlaceBetResult> {
  await new Promise((r) => setTimeout(r, 600));

  if (input.picks.length === 0 || input.picks.length > MAX_PICKS) {
    throw new Error('Invalid number of picks');
  }
  if (input.stake <= 0) {
    throw new Error('Stake must be greater than zero');
  }

  const drawnSet = new Set(MOCK_CURRENT_DRAW.numbers.map((d) => d.number));
  const hits = input.picks.filter((p) => drawnSet.has(p)).length;

  const tier = MOCK_PAYTABLE.find((t) => t.pickCount === input.picks.length);
  const entry = tier?.entries.find((e) => e.matches === hits);
  const payout = entry ? entry.payout * input.stake : 0;

  const drawWithResult: Draw = {
    ...MOCK_CURRENT_DRAW,
    id: `${MOCK_CURRENT_DRAW.id}-result`,
  };

  return {
    success: true,
    drawId: drawWithResult.id,
    picks: input.picks,
    stake: input.stake,
    message:
      hits > 0
        ? `You hit ${hits} of ${input.picks.length}! Payout: ${payout.toFixed(2)}`
        : `No hits this round. Better luck next time!`,
  };
}

export function usePlaceBet() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: placeBet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['balance'] });
    },
  });
}
