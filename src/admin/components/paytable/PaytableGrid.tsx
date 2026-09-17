import { useState } from 'react';

const pickCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const initialGrid: Record<number, Record<number, number>> = {
  1: { 1: 4 }, 2: { 2: 12 }, 3: { 2: 2, 3: 38 }, 4: { 2: 1, 3: 5, 4: 85 },
  5: { 3: 3, 4: 12, 5: 600 }, 6: { 3: 2, 4: 5, 5: 50, 6: 1500 },
  7: { 3: 1, 4: 3, 5: 12, 6: 150, 7: 5000 },
  8: { 4: 2, 5: 8, 6: 50, 7: 800, 8: 15000 },
  9: { 4: 1, 5: 4, 6: 20, 7: 100, 8: 2000, 9: 30000 },
  10: { 5: 2, 6: 6, 7: 30, 8: 200, 9: 2000, 10: 50000 },
};

export default function PaytableGrid() {
  const [grid, setGrid] = useState(initialGrid);
  const [editing, setEditing] = useState<{ pick: number; match: number } | null>(null);

  function setVal(pick: number, match: number, val: string) {
    const n = Math.max(0, Math.min(99999, Number(val) || 0));
    setGrid((g) => ({ ...g, [pick]: { ...g[pick], [match]: n } }));
  }

  return (
    <div className="rounded-xl border border-[rgba(232,169,59,0.12)] bg-[#0a0e17] p-4 sm:p-5">
      <h3 className="mb-4 text-sm font-bold text-white">Payout Multipliers (x stake)</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="sticky left-0 z-10 bg-[#0a0e17] p-2 text-left text-[10px] uppercase tracking-wider text-[#7a8a9e]">Picks \ Hits</th>
              {pickCounts.map((h) => <th key={h} className="p-2 text-center text-[10px] uppercase tracking-wider text-[#7a8a9e]">{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {pickCounts.map((pick) => (
              <tr key={pick} className="border-t border-white/5">
                <td className="sticky left-0 z-10 bg-[#0a0e17] p-2 font-bold text-white">{pick}</td>
                {pickCounts.map((match) => {
                  const val = grid[pick]?.[match];
                  const isEditing = editing?.pick === pick && editing?.match === match;
                  return (
                    <td key={match} className="p-1 text-center">
                      {val !== undefined ? (
                        isEditing ? (
                          <input autoFocus value={val} onChange={(e) => setVal(pick, match, e.target.value)} onBlur={() => setEditing(null)} className="w-16 rounded border border-[rgba(232,169,59,0.3)] bg-[#05070d] px-2 py-1 text-center text-xs text-white outline-none" />
                        ) : (
                          <button onClick={() => setEditing({ pick, match })} className="min-h-[44px] rounded px-2 py-1 tabular-nums text-[#e8a93b] hover:bg-white/5">{val}x</button>
                        )
                      ) : <span className="text-[#3a4452]">—</span>}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-[10px] text-[#4a5868] md:hidden">Scroll horizontally to view all columns →</p>
    </div>
  );
}
