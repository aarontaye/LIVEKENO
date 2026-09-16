const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const today = 26;
const cells = Array.from({ length: 35 }, (_, i) => i - 2);

export default function DrawCalendar() {
  return (
    <div className="rounded-xl border border-[rgba(232,169,59,0.12)] bg-[#0a0e17] p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-bold text-white">April 2025</h3>
        <div className="flex items-center gap-2 text-[#7a8a9e]"><button className="hover:text-white">‹</button><button className="hover:text-white">›</button></div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-[#7a8a9e]">
        {days.map((d) => <div key={d} className="pb-1 font-semibold">{d}</div>)}
        {cells.map((c) => {
          const isToday = c === today;
          const inMonth = c >= 1 && c <= 30;
          return (
            <div key={c} className={`rounded-lg py-2 text-xs ${isToday ? 'bg-[rgba(232,169,59,0.15)] font-bold text-[#e8a93b] border border-[rgba(232,169,59,0.3)]' : inMonth ? 'text-[#dce5f0] hover:bg-white/5' : 'text-[#3a4452]'}`}>
              {inMonth ? c : ''}
            </div>
          );
        })}
      </div>
    </div>
  );
}
