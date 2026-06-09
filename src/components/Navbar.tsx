import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Globe2 } from "lucide-react";
import { REGISTRATION_URL } from "@/lib/constants";

const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Membership", to: "/membership" },
  { label: "Awards", to: "/awards" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[color:var(--color-navy-deep)]/90 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-gold shadow-gold">
            <Globe2 className="h-5 w-5 text-[color:var(--color-navy-deep)]" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-wide">IHWT</div>
            <div className="text-[10px] uppercase tracking-[0.15em] text-white/60">Federation</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-white/80 hover:text-[color:var(--color-gold)] transition-colors"
              activeProps={{ className: "text-[color:var(--color-gold)]" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/register"
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white hover:bg-white/10 transition"
          >
            Register
          </Link>
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full gradient-gold px-5 py-2 text-sm font-semibold text-[color:var(--color-navy-deep)] shadow-gold hover:scale-105 transition"
          >
            Become a Member
          </a>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[color:var(--color-navy-deep)] border-t border-white/10 px-6 py-6 space-y-4">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block text-white/80 text-base"
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/register"
            onClick={() => setOpen(false)}
            className="block rounded-full gradient-gold px-5 py-2 text-center text-sm font-semibold text-[color:var(--color-navy-deep)]"
          >
            Register Now
          </Link>
        </div>
      )}
    </header>
  );
}
