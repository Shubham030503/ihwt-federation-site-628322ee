import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { RegisterButton } from "@/components/RegisterButton";
import evAwards from "@/assets/event-awards.jpg";

const awards = [
  { t: "Best Hospital Award", d: "Honouring hospitals delivering exceptional clinical outcomes and patient experience." },
  { t: "Best Wellness Brand Award", d: "Recognising the most impactful wellness brands shaping global lifestyles." },
  { t: "Medical Tourism Excellence Award", d: "For destinations and operators leading cross-border patient care." },
  { t: "Healthcare Innovation Award", d: "Celebrating breakthroughs in technology, treatment and care delivery." },
  { t: "Global Leadership Award", d: "Presented to visionary leaders shaping the international health agenda." },
];

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Awards — IHWT Federation" },
      { name: "description", content: "The IHWT Global Awards celebrate excellence across healthcare, wellness, innovation and leadership." },
      { property: "og:title", content: "IHWT Global Awards" },
      { property: "og:url", content: "/awards" },
    ],
    links: [{ rel: "canonical", href: "/awards" }],
  }),
  component: () => (
    <div className="bg-background">
      <Navbar />
      <section className="relative pt-32 pb-16 bg-[color:var(--color-navy-deep)] text-white overflow-hidden">
        <img src={evAwards} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-navy-deep)]/80 to-[color:var(--color-navy-deep)]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold">IHWT <span className="text-gradient-gold">Global Awards</span></h1>
          <p className="mt-6 text-lg text-white/75 max-w-3xl">Five flagship categories. One stage. The world's most distinguished recognition in international health and wellness.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-6">
          {awards.map((a) => (
            <div key={a.t} className="rounded-2xl border border-border bg-card p-6 flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-gold">
                <Award className="h-6 w-6 text-[color:var(--color-navy-deep)]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{a.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.d}</p>
                <RegisterButton variant="ghost" className="mt-4 !px-4 !py-2 !text-xs">Nominate</RegisterButton>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  ),
});
