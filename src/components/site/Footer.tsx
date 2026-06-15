import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import footerLogo from "@/assets/footer-logo.png.asset.json";
import { BRAND, NAV_LINKS } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-[image:var(--gradient-footer)] text-[var(--color-navy)]">
      <div className="pointer-events-none absolute -top-10 left-1/2 h-40 w-[140%] -translate-x-1/2 rounded-[100%] bg-[var(--color-navy)]/5 blur-2xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 md:grid-cols-3">
        {/* Brand */}
        <div>
          <img
            src={footerLogo.url}
            alt="Growing Smiles pediatric dentistry logo"
            className="h-28 w-auto drop-shadow-md sm:h-32"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-foreground)]/70">
            Expert, fear-free pediatric dental care in a warm, welcoming environment in Powai,
            Mumbai — where every little smile grows with confidence.
          </p>
        </div>

        {/* Visit */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-navy)]/90">Visit</h4>
          <ul className="mt-4 space-y-3 text-sm text-[var(--color-foreground)]/70">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{BRAND.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="h-4 w-4 shrink-0" />
              <a href={`tel:${BRAND.phone}`} className="hover:text-[var(--color-navy)]">
                {BRAND.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="h-4 w-4 shrink-0" />
              <a href={`mailto:${BRAND.email}`} className="hover:text-[var(--color-navy)]">
                {BRAND.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-navy)]/90">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-foreground)]/70">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.to} hash={l.hash || undefined} className="hover:text-[var(--color-navy)]">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="hover:text-[var(--color-navy)]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-[var(--color-navy)]/10 px-5 py-6 sm:px-6">
        <p className="mx-auto max-w-7xl text-center text-xs font-medium tracking-wide text-[var(--color-foreground)]/70">
          © 2026 Growing Smiles. All Rights Reserved.{" "}
          <a
            href="mailto:get.ayushdesigns@gmail.com"
            className="transition-colors hover:text-[var(--color-navy)]"
          >
            Built By <span className="font-semibold text-[var(--color-navy)]/90">Ayush</span>
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
