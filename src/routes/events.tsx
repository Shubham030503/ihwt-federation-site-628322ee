import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { RegisterButton } from "@/components/RegisterButton";
import evExpo from "@/assets/event-expo.jpg";
import evMed from "@/assets/event-medical.jpg";
import evInv from "@/assets/event-investment.jpg";
import evWell from "@/assets/event-wellness.jpg";
import evAwards from "@/assets/event-awards.jpg";

const events = [
  { img: evExpo, t: "Global Health & Wellness Expo", date: "March 12–14, 2027", loc: "Dubai, UAE", d: "The largest gathering of health, wellness and medical tourism leaders worldwide." },
  { img: evMed, t: "International Medical Tourism Summit", date: "May 8–10, 2027", loc: "Bangkok, Thailand", d: "Connecting hospitals, facilitators and destinations driving global patient mobility." },
  { img: evInv, t: "Global Healthcare Investment Forum", date: "July 22–23, 2027", loc: "Singapore", d: "Where capital meets the most promising healthcare ventures and infrastructure." },
  { img: evWell, t: "Wellness Tourism Congress", date: "September 18–20, 2027", loc: "Bali, Indonesia", d: "Resort medicine, longevity and the future of wellness destinations." },
  { img: evAwards, t: "International Healthcare Excellence Awards", date: "November 15, 2027", loc: "London, UK", d: "A black-tie gala recognising the most outstanding institutions and individuals." },
];

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — IHWT Federation" },
      { name: "description", content: "Discover flagship IHWT events across Dubai, Bangkok, Singapore, Bali and London." },
      { property: "og:title", content: "IHWT Events" },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: () => (
    <div className="bg-background">
      <Navbar />
      <section className="pt-32 pb-16 bg-[color:var(--color-navy-deep)] text-white">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold">Flagship <span className="text-gradient-gold">Events</span></h1>
          <p className="mt-6 text-lg text-white/75 max-w-3xl">The premier calendar of global gatherings shaping health, wellness and medical tourism.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e) => (
            <article key={e.t} className="rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-1 transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={e.img} alt={e.t} loading="lazy" width={800} height={600} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5 text-[color:var(--color-gold)]" />{e.date}</span>
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-[color:var(--color-gold)]" />{e.loc}</span>
                </div>
                <h3 className="text-xl font-semibold">{e.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
                <RegisterButton variant="ghost" className="mt-5 !px-5 !py-2">Register</RegisterButton>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  ),
});
