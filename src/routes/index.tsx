import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Award, Building2, Calendar, ChevronLeft, ChevronRight, Globe,
  HandshakeIcon, Heart, MapPin, Plane, Quote, Sparkles, Star, Trophy, Users, Stethoscope,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RegisterButton } from "@/components/RegisterButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Countdown } from "@/components/Countdown";
import { REGISTRATION_URL } from "@/lib/constants";
import hero from "@/assets/hero.jpg";
import evExpo from "@/assets/event-expo.jpg";
import evMed from "@/assets/event-medical.jpg";
import evInv from "@/assets/event-investment.jpg";
import evWell from "@/assets/event-wellness.jpg";
import evAwards from "@/assets/event-awards.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IHWT — Global Health, Wellness & Medical Tourism Federation" },
      { name: "description", content: "Empowering international partnerships through healthcare, wellness, medical tourism, conferences, trade and innovation." },
      { property: "og:title", content: "IHWT — International Federation" },
      { property: "og:description", content: "Connecting global healthcare, wellness and medical tourism ecosystems." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const stats = [
  { v: "50+", l: "Countries" },
  { v: "500+", l: "Global Partners" },
  { v: "100+", l: "Events" },
  { v: "10,000+", l: "Delegates" },
];

const services = [
  { icon: Stethoscope, t: "Healthcare Ecosystem", d: "Building robust global healthcare networks across borders." },
  { icon: Plane, t: "Medical Tourism", d: "Promoting cross-border medical travel and patient mobility." },
  { icon: Heart, t: "Wellness Tourism", d: "Curating world-class wellness experiences and destinations." },
  { icon: Calendar, t: "International Conferences", d: "Premier global conferences that shape industry direction." },
  { icon: Globe, t: "Global Expos", d: "Large-scale exhibitions connecting buyers, sellers and innovators." },
  { icon: HandshakeIcon, t: "B2B Matchmaking", d: "Curated business meetings with verified decision-makers." },
  { icon: Building2, t: "Industry Partnerships", d: "Strategic alliances with hospitals, brands and tourism boards." },
  { icon: Trophy, t: "Awards & Recognition", d: "Honoring excellence across the global health ecosystem." },
];

const events = [
  { img: evExpo, t: "Global Health & Wellness Expo", date: "March 12–14, 2027", loc: "Dubai, UAE", d: "The largest gathering of health, wellness and medical tourism leaders worldwide." },
  { img: evMed, t: "International Medical Tourism Summit", date: "May 8–10, 2027", loc: "Bangkok, Thailand", d: "Connecting hospitals, facilitators and destinations driving global patient mobility." },
  { img: evInv, t: "Global Healthcare Investment Forum", date: "July 22–23, 2027", loc: "Singapore", d: "Where capital meets the most promising healthcare ventures and infrastructure." },
  { img: evWell, t: "Wellness Tourism Congress", date: "September 18–20, 2027", loc: "Bali, Indonesia", d: "Resort medicine, longevity and the future of wellness destinations." },
  { img: evAwards, t: "International Healthcare Excellence Awards", date: "November 15, 2027", loc: "London, UK", d: "A black-tie gala recognising the most outstanding institutions and individuals." },
];

const memberships = [
  { tier: "Individual", price: "Starting $499/yr", perks: ["Global directory access", "Event discounts", "Member newsletter", "Networking lounge"], featured: false },
  { tier: "Corporate", price: "Starting $2,499/yr", perks: ["10 delegate seats", "Speaker opportunities", "Logo on partner page", "Marketplace listing", "B2B introductions"], featured: true },
  { tier: "Strategic Partnership", price: "Custom", perks: ["Co-branded events", "Board advisory seat", "Dedicated PR support", "Country exclusivity options", "Direct chapter access"], featured: false },
];

const awards = [
  "Best Hospital Award", "Best Wellness Brand Award", "Medical Tourism Excellence Award",
  "Healthcare Innovation Award", "Global Leadership Award",
];

const partners = ["MedGlobal", "WellnessPro", "VistaHealth", "Asclepius", "TerraCare", "BlueOcean", "Nordica", "Aurelia", "Helix", "Sanora"];

const testimonials = [
  { name: "Dr. Aisha Rahman", role: "Chief of Medical Tourism, KL", q: "IHWT has redefined how international hospitals collaborate. The B2B program alone delivered measurable pipeline within weeks." },
  { name: "Marco Bellini", role: "CEO, Wellness Group Italy", q: "An exceptional federation. The conferences are world-class and the partnerships are real, vetted and high-trust." },
  { name: "Priya Sharma", role: "Director, Global Health Council", q: "From strategy to execution, IHWT operates with the polish of the world's top industry bodies. Highly recommend." },
];

const news = [
  { tag: "Industry", t: "Global medical tourism set to cross $200B by 2028", d: "New IHWT research shows accelerating cross-border patient flows across Asia, MENA and LATAM corridors." },
  { tag: "Federation", t: "IHWT signs MoU with five national tourism boards", d: "Strategic alliances unlock co-marketing, accreditation pathways and joint expo presence." },
  { tag: "Innovation", t: "AI diagnostics on the IHWT Innovation Stage", d: "Twelve finalists pitch the future of preventive care at the upcoming Global Expo." },
];

const faqs = [
  { q: "Who can join IHWT?", a: "Hospitals, clinics, wellness brands, tourism boards, facilitators, investors, academics and individual professionals operating in the global health ecosystem." },
  { q: "How is registration processed?", a: "All registrations are submitted via our official Google Form. You will receive a confirmation and our membership team will be in touch within 2 business days." },
  { q: "Where are events hosted?", a: "Across major hubs including Dubai, Singapore, Bangkok, London, Bali and rotating regional chapters." },
  { q: "Can we sponsor or exhibit?", a: "Yes — strategic partnership and exhibition packages are available. Submit the registration form and select your interest area." },
  { q: "Is there an awards nomination fee?", a: "Self-nomination and peer-nomination are free. Finalists may be invited to the gala on standard delegate terms." },
];

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return <section id={id} className={`relative py-24 ${className}`}>{children}</section>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-gold)]/30 bg-[color:var(--color-gold)]/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[color:var(--color-gold)]">
      <Sparkles className="h-3 w-3" /> {children}
    </div>
  );
}

function Home() {
  const eventDate = useRef(new Date(Date.now() + 1000 * 60 * 60 * 24 * 78)).current;
  const [ti, setTi] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTi((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden flex items-center pt-24">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-navy-deep)]/95 via-[color:var(--color-navy-deep)]/85 to-[color:var(--color-navy-deep)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.78_0.14_85/0.15),transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-white">
          <div className="max-w-4xl animate-fade-up">
            <div className="mb-6"><Eyebrow>International Federation · Est. 2024</Eyebrow></div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Connecting Global <span className="text-gradient-gold">Healthcare, Wellness</span> & Medical Tourism Ecosystems
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">
              Empowering international partnerships through healthcare, wellness, medical tourism, conferences, trade and innovation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <RegisterButton variant="gold">Register Now <ArrowRight className="h-4 w-4" /></RegisterButton>
              <RegisterButton variant="outline">Become a Member</RegisterButton>
              <Link to="/events" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
                Explore Events
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
              {stats.map((s) => (
                <div key={s.l} className="glass rounded-2xl px-5 py-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient-gold font-display">{s.v}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div className="text-xs uppercase tracking-widest text-white/60 mb-3">Next flagship event begins in</div>
              <Countdown target={eventDate} />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Eyebrow>About IHWT</Eyebrow>
              <h2 className="mt-5 text-4xl md:text-5xl font-bold">A federation built for the next era of global health.</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                The International Health, Wellness & Tourism Federation (IHWT) unites hospitals, wellness brands, tourism boards, investors and visionary leaders across 50+ countries. We curate the events, partnerships and recognition that move the industry forward.
              </p>
              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {[
                  { t: "Mission", d: "Connect, accredit and elevate the global health ecosystem." },
                  { t: "Vision", d: "A world where quality care knows no borders." },
                  { t: "Values", d: "Integrity. Excellence. Inclusion. Innovation." },
                ].map((b) => (
                  <div key={b.t} className="rounded-2xl border border-border bg-card p-5">
                    <div className="text-sm font-semibold text-[color:var(--color-navy)]">{b.t}</div>
                    <div className="mt-2 text-sm text-muted-foreground">{b.d}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl gradient-gold opacity-20 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl">
                <img src={evExpo} alt="IHWT global community" loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold">Services that move the industry</h2>
            <p className="mt-4 text-muted-foreground">From ecosystem building to global recognition — eight pillars, one federation.</p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.t} className="group relative rounded-2xl border border-border bg-card p-6 hover:border-[color:var(--color-gold)]/50 hover:-translate-y-1 transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-gold mb-4">
                  <s.icon className="h-6 w-6 text-[color:var(--color-navy-deep)]" />
                </div>
                <h3 className="text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* EVENTS */}
      <Section id="events" className="bg-[color:var(--color-navy-deep)] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Flagship Events</Eyebrow>
              <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">Featured upcoming events</h2>
            </div>
            <Link to="/events" className="text-sm text-[color:var(--color-gold)] hover:underline inline-flex items-center gap-1">View all events <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((e) => (
              <article key={e.t} className="glass rounded-2xl overflow-hidden hover:-translate-y-1 transition group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={e.img} alt={e.t} loading="lazy" width={800} height={600} className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-white/70 mb-3">
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5 text-[color:var(--color-gold)]" />{e.date}</span>
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-[color:var(--color-gold)]" />{e.loc}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{e.t}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{e.d}</p>
                  <RegisterButton variant="ghost" className="mt-5 !px-5 !py-2">Register <ArrowRight className="h-4 w-4" /></RegisterButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* MEMBERSHIP */}
      <Section id="membership">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Membership</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold">Join the federation</h2>
            <p className="mt-4 text-muted-foreground">Three tiers crafted for individuals, organisations and strategic players.</p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {memberships.map((m) => (
              <div key={m.tier} className={`relative rounded-3xl border p-8 ${m.featured ? "border-[color:var(--color-gold)] bg-[color:var(--color-navy-deep)] text-white shadow-gold scale-[1.02]" : "border-border bg-card"}`}>
                {m.featured && <div className="absolute -top-3 left-8 rounded-full gradient-gold px-3 py-1 text-[10px] uppercase tracking-widest text-[color:var(--color-navy-deep)] font-bold">Most popular</div>}
                <h3 className="text-2xl font-bold">{m.tier}</h3>
                <div className={`mt-2 text-sm ${m.featured ? "text-white/70" : "text-muted-foreground"}`}>{m.price}</div>
                <ul className="mt-6 space-y-3">
                  {m.perks.map((p) => (
                    <li key={p} className="flex gap-2 text-sm">
                      <Star className="h-4 w-4 text-[color:var(--color-gold)] mt-0.5 shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
                <RegisterButton variant={m.featured ? "gold" : "ghost"} className="mt-8 w-full">Join Now</RegisterButton>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* AWARDS */}
      <Section id="awards" className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow>Recognition</Eyebrow>
              <h2 className="mt-5 text-4xl md:text-5xl font-bold">IHWT Global Awards</h2>
              <p className="mt-4 text-muted-foreground">Honouring institutions and individuals shaping the future of global health and wellness.</p>
              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {awards.map((a) => (
                  <div key={a} className="rounded-xl border border-border bg-card p-4 flex items-center gap-3">
                    <Award className="h-5 w-5 text-[color:var(--color-gold)]" />
                    <span className="text-sm font-medium">{a}</span>
                  </div>
                ))}
              </div>
              <RegisterButton variant="gold" className="mt-8">Nominate Now</RegisterButton>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl gradient-gold opacity-30 blur-3xl" />
              <img src={evAwards} alt="Awards trophy" loading="lazy" width={800} height={600} className="relative rounded-3xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </Section>

      {/* PARTNERS */}
      <Section className="bg-[color:var(--color-navy-deep)] text-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-10">
            <Eyebrow>Our Partners</Eyebrow>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {[...partners, ...partners].map((p, i) => (
                <div key={i} className="text-2xl md:text-3xl font-display font-bold text-white/40 hover:text-[color:var(--color-gold)] transition">
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* GALLERY */}
      <Section>
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Gallery</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold">Moments from our events</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 [grid-auto-rows:160px] md:[grid-auto-rows:200px]">
            {[evExpo, evMed, evInv, evWell, evAwards, evExpo].map((img, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl group ${i === 0 ? "col-span-2 row-span-2" : i === 3 ? "row-span-2" : ""}`}>
                <img src={img} alt="" loading="lazy" width={800} height={600} className="h-full w-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-deep)]/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="bg-[color:var(--color-navy-deep)] text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Eyebrow>Testimonials</Eyebrow>
          <Quote className="mx-auto mt-8 h-12 w-12 text-[color:var(--color-gold)]" />
          <p className="mt-6 text-2xl md:text-3xl font-display leading-snug min-h-[6rem]">
            "{testimonials[ti].q}"
          </p>
          <div className="mt-6">
            <div className="font-semibold text-[color:var(--color-gold)]">{testimonials[ti].name}</div>
            <div className="text-sm text-white/60">{testimonials[ti].role}</div>
          </div>
          <div className="mt-8 flex justify-center gap-3">
            <button onClick={() => setTi((i) => (i - 1 + testimonials.length) % testimonials.length)} className="rounded-full glass p-2"><ChevronLeft className="h-5 w-5" /></button>
            <button onClick={() => setTi((i) => (i + 1) % testimonials.length)} className="rounded-full glass p-2"><ChevronRight className="h-5 w-5" /></button>
          </div>
        </div>
      </Section>

      {/* NEWS */}
      <Section>
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <Eyebrow>News & Insights</Eyebrow>
              <h2 className="mt-5 text-4xl md:text-5xl font-bold">From the federation</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((n, i) => (
              <article key={i} className="rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-1 transition">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={[evMed, evInv, evWell][i]} alt="" loading="lazy" width={800} height={500} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] uppercase tracking-widest text-[color:var(--color-gold)] font-semibold">{n.tag}</span>
                  <h3 className="mt-2 text-lg font-semibold">{n.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{n.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-secondary/50">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold">Common questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-border bg-card p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <span className="font-semibold">{f.q}</span>
                  <span className="text-[color:var(--color-gold)] group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold">Let's build the future of global health together.</h2>
            <p className="mt-4 text-muted-foreground">Reach out to our secretariat or submit your registration via our official form.</p>
            <div className="mt-8 space-y-4 text-sm">
              <div className="flex gap-3"><MapPin className="h-5 w-5 text-[color:var(--color-gold)]" /> Global Secretariat, Dubai — UAE</div>
              <div className="flex gap-3"><Users className="h-5 w-5 text-[color:var(--color-gold)]" /> Regional chapters in 50+ countries</div>
            </div>
            <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-[color:var(--color-gold)] hover:underline">
              Open Official Registration Form <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); window.open(REGISTRATION_URL, "_blank"); }} className="rounded-3xl border border-border bg-card p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Name" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
              <input required type="email" placeholder="Email" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="Phone" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
              <input placeholder="Organization" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
            </div>
            <textarea placeholder="Message" rows={5} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
            <button className="w-full gradient-gold rounded-full py-3 font-semibold text-[color:var(--color-navy-deep)] shadow-gold hover:scale-[1.01] transition">
              Send Message
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Submissions are processed via our <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="text-[color:var(--color-gold)] underline">official IHWT registration form</a>.
            </p>
          </form>
        </div>
      </Section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
