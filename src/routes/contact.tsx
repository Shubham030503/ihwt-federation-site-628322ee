import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { REGISTRATION_URL } from "@/lib/constants";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — IHWT Federation" },
      { name: "description", content: "Reach the IHWT secretariat for membership, partnerships, events and media enquiries." },
      { property: "og:title", content: "Contact IHWT" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <div className="bg-background">
      <Navbar />
      <section className="pt-32 pb-12 bg-[color:var(--color-navy-deep)] text-white">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold">Get in <span className="text-gradient-gold">Touch</span></h1>
          <p className="mt-6 text-lg text-white/75 max-w-2xl">Our secretariat replies within one business day.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              { Icon: MapPin, t: "Address", d: "Global Secretariat, Dubai — UAE" },
              { Icon: Phone, t: "Phone", d: "+971 000 000 000" },
              { Icon: Mail, t: "Email", d: "info@ihwt-federation.org" },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-6 flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-gold">
                  <Icon className="h-5 w-5 text-[color:var(--color-navy-deep)]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{t}</div>
                  <div className="mt-1 font-semibold">{d}</div>
                </div>
              </div>
            ))}
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
            <button className="w-full gradient-gold rounded-full py-3 font-semibold text-[color:var(--color-navy-deep)] shadow-gold">Send Message</button>
            <p className="text-xs text-muted-foreground text-center">Submissions are processed via the official IHWT registration form.</p>
          </form>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  ),
});
