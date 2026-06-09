import { useEffect, useState } from "react";

export function Countdown({ target }: { target: Date }) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff / 3600000) % 24);
    const m = Math.floor((diff / 60000) % 60);
    const s = Math.floor((diff / 1000) % 60);
    return { d, h, m, s };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  });
  const cell = (n: number, l: string) => (
    <div className="glass rounded-2xl px-4 py-3 text-center min-w-[78px]">
      <div className="text-2xl md:text-3xl font-bold text-[color:var(--color-gold)] font-display">
        {n.toString().padStart(2, "0")}
      </div>
      <div className="text-[10px] uppercase tracking-widest text-white/70">{l}</div>
    </div>
  );
  return (
    <div className="flex gap-3">
      {cell(t.d, "Days")}
      {cell(t.h, "Hours")}
      {cell(t.m, "Min")}
      {cell(t.s, "Sec")}
    </div>
  );
}
