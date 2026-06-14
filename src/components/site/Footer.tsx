import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Star } from "lucide-react";
import logoColor from "@/assets/logo-color.png.asset.json";
import { BRAND, NAV_LINKS, waLink } from "@/lib/brand";

const SERVICES = [
  "Infant Oral Care",
  "Preventive Dentistry",
  "Dental Checkups",
  "Tooth-Colored Fillings",
  "Emergency Dental Care",
];

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-[image:var(--gradient-footer)] text-white">
      <div className="pointer-events-none absolute -top-10 left-1/2 h-40 w-[140%] -translate-x-1/2 rounded-[100%] bg-white/10 blur-2xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logoColor.url} alt="Growing Smiles" className="h-14 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-white/80">
            Expert, fear-free pediatric dental care in a warm, welcoming environment in Powai,
            Mumbai — where every little smile grows with confidence.
          </p>
          <a
            href={BRAND.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur"
          >
            <Star className="h-4 w-4 fill-yellow text-yellow" /> {BRAND.rating} on Google Reviews
          </a>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white/90">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.to} hash={l.hash || undefined} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white/90">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            {SERVICES.map((s) => (
              <li key={s}>
                <Link to="/" hash="#services" className="hover:text-white">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white/90">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{BRAND.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="h-4 w-4 shrink-0" />
              <a href={`tel:${BRAND.phone}`} className="hover:text-white">
                {BRAND.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="h-4 w-4 shrink-0" />
              <a href={`mailto:${BRAND.email}`} className="hover:text-white">
                {BRAND.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{BRAND.hours}</span>
            </li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-navy shadow-soft transition-transform hover:scale-105"
            >
              Book Appointment
            </Link>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/15 px-5 py-6 text-center sm:px-6">
        <p className="font-display text-lg font-semibold">{BRAND.tagline}</p>
        <p className="mt-2 text-xs text-white/70">
          © {new Date().getFullYear()} {BRAND.full}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
