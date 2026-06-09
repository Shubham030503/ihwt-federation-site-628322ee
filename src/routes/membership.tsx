import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { RegisterButton } from "@/components/RegisterButton";

const tiers = [
  { tier: "Individual", price: "Starting $499/yr", perks: ["Global directory access", "Event discounts", "Member newsletter", "Networking lounge"], featured: false },
  { tier: "Corporate", price: "Starting $2,499/yr", perks: ["10 delegate seats", "Speaker opportunities", "Logo on partner page", "Marketplace listing", "B2B introductions"], featured: true },
  { tier: "Strategic Partnership", price: "Custom", perks: ["Co-branded events", "Board advisory seat", "Dedicated PR support", "Country exclusivity", "Direct chapter access"], featured: false },
];

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership — IHWT Federation" },
      { name: "description", content: "Individual, corporate and strategic partnership tiers in the IHWT global health ecosystem." },
      { property: "og:title", content: "IHWT Membership" },
      { property: "og:url", content: "/membership" },
    ],
    links: [{ rel: "canonical", href: "/membership" }],
  }),
  component: () => (
    <div className="bg-background">
      <Navbar />
      <section className="pt-32 pb-16 bg-[color:var(--color-navy-deep)] text-white">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold">Become a <span className="text-gradient-gold">Member</span></h1>
          <p className="mt-6 text-lg text-white/75 max-w-3xl">Choose the tier that best fits your role in the global health and wellness industry.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-6">
          {tiers.map((m) => (
            <div key={m.tier} className={`relative rounded-3xl border p-8 ${m.featured ? "border-[color:var(--color-gold)] bg-[color:var(--color-navy-deep)] text-white shadow-gold scale-[1.02]" : "border-border bg-card"}`}>
              {m.featured && <div className="absolute -top-3 left-8 rounded-full gradient-gold px-3 py-1 text-[10px] uppercase tracking-widest text-[color:var(--color-navy-deep)] font-bold">Most popular</div>}
              <h3 className="text-2xl font-bold">{m.tier}</h3>
              <div className={`mt-2 text-sm ${m.featured ? "text-white/70" : "text-muted-foreground"}`}>{m.price}</div>
              <ul className="mt-6 space-y-3">
                {m.perks.map((p) => (
                  <li key={p} className="flex gap-2 text-sm"><Star className="h-4 w-4 text-[color:var(--color-gold)] mt-0.5 shrink-0" /> {p}</li>
                ))}
              </ul>
              <RegisterButton variant={m.featured ? "gold" : "ghost"} className="mt-8 w-full">Join Now</RegisterButton>
            </div>
          ))}
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  ),
});
