import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { RegisterButton } from "@/components/RegisterButton";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — IHWT Federation" },
      { name: "description", content: "The International Health, Wellness & Tourism Federation unites leaders across 50+ countries to shape the future of global health." },
      { property: "og:title", content: "About IHWT" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <div className="bg-background">
      <Navbar />
      <section className="pt-32 pb-20 bg-[color:var(--color-navy-deep)] text-white">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold">About <span className="text-gradient-gold">IHWT</span></h1>
          <p className="mt-6 text-lg text-white/75 max-w-3xl">
            We are a global federation uniting hospitals, wellness brands, tourism boards, investors and visionary leaders — building the connective tissue of the next era in health.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-3 gap-6">
          {[
            { t: "Mission", d: "Connect, accredit and elevate the global health, wellness and medical tourism ecosystem through world-class events and partnerships." },
            { t: "Vision", d: "A world where quality care knows no borders and wellness is accessible to every community." },
            { t: "Core Values", d: "Integrity. Excellence. Inclusion. Innovation. Collaboration." },
          ].map((b) => (
            <div key={b.t} className="rounded-3xl border border-border bg-card p-8">
              <div className="text-xs uppercase tracking-widest text-[color:var(--color-gold)]">{b.t}</div>
              <p className="mt-3 text-base">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-secondary/50">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Join the movement</h2>
          <p className="mt-4 text-muted-foreground">Become a member and help shape the global agenda.</p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <RegisterButton variant="gold">Become a Member</RegisterButton>
            <Link to="/events" className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:border-[color:var(--color-gold)] transition">View Events</Link>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  ),
});
