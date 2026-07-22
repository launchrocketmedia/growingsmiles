import { useEffect, useState } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const scrollToHash = (hash: string) => {
    const id = hash.replace("#", "");
    if (!id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleNav = (
    e: React.MouseEvent,
    to: string,
    hash: string,
  ) => {
    // For in-page section links, handle scrolling manually so it works
    // reliably on mobile and when already on the target route.
    if (to === "/") {
      e.preventDefault();
      setOpen(false);
      if (pathname === "/") {
        scrollToHash(hash);
      } else {
        navigate({ to: "/" }).then(() => {
          setTimeout(() => scrollToHash(hash), 100);
        });
      }
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled ? "glass shadow-soft" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="flex shrink-0 items-center"
          aria-label="Growing Smiles home"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <img src={logoNavy} alt="Growing Smiles" className="h-11 w-auto sm:h-14" />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash || undefined}
              onClick={(e) => handleNav(e, l.to, l.hash)}
              className="text-sm font-semibold text-navy/80 transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.03] hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="text-sm font-semibold text-navy/80 transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.03] hover:text-primary"
          >
            Contact
          </Link>
        </div>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="animate-float rounded-full bg-[image:var(--gradient-primary)] px-6 py-2.5 text-sm font-bold text-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-float"
            style={{ animationDuration: "5s" }}
          >
            Book Appointment
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="rounded-full p-2 text-navy lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-7 w-7" />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-[image:var(--gradient-sky)] transition-all duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <img src={logoNavy} alt="Growing Smiles" className="h-9 w-auto" />
          <button
            onClick={() => setOpen(false)}
            className="rounded-full p-2 text-navy"
            aria-label="Close menu"
          >
            <X className="h-7 w-7" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-6 pt-16">
          {NAV_LINKS.map((l, i) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash || undefined}
              onClick={(e) => handleNav(e, l.to, l.hash)}
              className="text-2xl font-bold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.03] hover:text-primary"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="text-2xl font-bold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.03] hover:text-primary"
          >
            Contact
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-[image:var(--gradient-primary)] px-8 py-3.5 text-lg font-bold text-white shadow-float transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-float"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
