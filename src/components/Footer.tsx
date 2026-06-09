import { Link } from "@tanstack/react-router";
import { Globe2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { REGISTRATION_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[color:var(--color-navy-deep)] text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-gold">
              <Globe2 className="h-5 w-5 text-[color:var(--color-navy-deep)]" />
            </div>
            <div className="text-white">
              <div className="font-bold">IHWT</div>
              <div className="text-[10px] uppercase tracking-widest text-white/60">Federation</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            International Health, Wellness & Tourism Federation — connecting global ecosystems through events, partnerships and innovation.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:bg-[color:var(--color-gold)] hover:text-[color:var(--color-navy-deep)] transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-[color:var(--color-gold)]">About</Link></li>
            <li><Link to="/events" className="hover:text-[color:var(--color-gold)]">Events</Link></li>
            <li><Link to="/membership" className="hover:text-[color:var(--color-gold)]">Membership</Link></li>
            <li><Link to="/awards" className="hover:text-[color:var(--color-gold)]">Awards</Link></li>
            <li><Link to="/contact" className="hover:text-[color:var(--color-gold)]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-[color:var(--color-gold)]" />Global Secretariat, Dubai — UAE</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-[color:var(--color-gold)]" />+971 000 000 000</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-[color:var(--color-gold)]" />info@ihwt-federation.org</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">Get the latest events and partnership updates.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 rounded-full bg-white/10 px-4 py-2 text-sm placeholder:text-white/40 border border-white/15 focus:outline-none focus:border-[color:var(--color-gold)]"
            />
            <button className="rounded-full gradient-gold px-4 py-2 text-sm font-semibold text-[color:var(--color-navy-deep)]">Join</button>
          </form>
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-[color:var(--color-gold)] hover:underline"
          >
            Official Registration Form →
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} International Health, Wellness & Tourism Federation. All rights reserved.
      </div>
    </footer>
  );
}
