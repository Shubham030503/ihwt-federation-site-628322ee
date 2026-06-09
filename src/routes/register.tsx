import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RegisterButton } from "@/components/RegisterButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { REGISTRATION_URL, REGISTRATION_EMBED_URL } from "@/lib/constants";
import { CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register — IHWT Federation" },
      { name: "description", content: "Register for IHWT membership, events, awards or partnerships via our official registration form." },
      { property: "og:title", content: "Register — IHWT Federation" },
      { property: "og:url", content: "/register" },
    ],
    links: [{ rel: "canonical", href: "/register" }],
  }),
  component: Register,
});

function Register() {
  return (
    <div className="bg-background">
      <Navbar />

      <section className="relative pt-32 pb-16 bg-[color:var(--color-navy-deep)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.78_0.14_85/0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-gold)]/30 bg-[color:var(--color-gold)]/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[color:var(--color-gold)]">
            Official Registration
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold">Register with <span className="text-gradient-gold">IHWT</span></h1>
          <p className="mt-5 text-white/75 max-w-2xl mx-auto">
            Membership, events, awards and partnership applications are processed through our official registration form.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <RegisterButton variant="gold">Open Registration Form <ExternalLink className="h-4 w-4" /></RegisterButton>
            <a href="#form" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
              Fill form below <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border border-[color:var(--color-gold)]/30 bg-[color:var(--color-gold)]/5 p-6 flex gap-4">
            <CheckCircle2 className="h-6 w-6 text-[color:var(--color-gold)] shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold">All registrations are processed through the official IHWT registration form.</div>
              <p className="mt-1 text-sm text-muted-foreground">
                You'll receive an automatic confirmation. Our team will reach out within 2 business days with next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="form" className="pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-2xl">
            <iframe
              src={REGISTRATION_EMBED_URL}
              title="IHWT Registration Form"
              width="100%"
              height={1400}
              loading="lazy"
              className="w-full block"
            >
              Loading...
            </iframe>
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Form not loading? <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="text-[color:var(--color-gold)] underline">Open it in a new tab</a>.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
