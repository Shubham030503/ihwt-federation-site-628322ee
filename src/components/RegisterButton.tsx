import { REGISTRATION_URL } from "@/lib/constants";
import type { ReactNode } from "react";

type Variant = "gold" | "outline" | "ghost";

export function RegisterButton({
  children,
  variant = "gold",
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";
  const styles: Record<Variant, string> = {
    gold: "gradient-gold text-[color:var(--color-navy-deep)] shadow-gold hover:scale-105",
    outline: "border-2 border-white/30 text-white hover:bg-white/10",
    ghost: "border border-[color:var(--color-gold)]/40 text-[color:var(--color-gold)] hover:bg-[color:var(--color-gold)]/10",
  };
  return (
    <a
      href={REGISTRATION_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
