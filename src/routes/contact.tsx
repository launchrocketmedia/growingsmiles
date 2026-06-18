import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Send, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Toaster, toast } from "sonner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { CloudField } from "@/components/site/Clouds";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { BRAND, waLink } from "@/lib/brand";

const REASONS = [
  "Routine Checkup & Cleaning",
  "First Dental Visit",
  "Tooth Pain / Emergency",
  "Cavity / Filling",
  "Braces / Orthodontics",
  "Other",
];

// 10:00 AM – 7:00 PM, every 30 minutes (Mon–Sat only)
const TIME_SLOTS = (() => {
  const slots: string[] = [];
  for (let h = 10; h <= 19; h++) {
    for (const m of [0, 30]) {
      if (h === 19 && m > 0) break; // stop at 7:00 PM
      const date = new Date();
      date.setHours(h, m, 0, 0);
      slots.push(format(date, "h:mm a"));
    }
  }
  return slots;
})();

// Phone: 10 digits, optionally prefixed with +91 (with optional space)
const isValidPhone = (raw: string) =>
  /^(\+91\s?)?[0-9]{10}$/.test(raw.trim());

// Standard email, exclude example.com
const isValidEmail = (raw: string) => {
  const value = raw.trim();
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return false;
  const domain = value.split("@")[1]?.toLowerCase();
  return domain !== "example.com";
};


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book an Appointment | Growing Smiles Pediatric Dentistry, Powai" },
      {
        name: "description",
        content:
          "Book your child's pediatric dental appointment at Growing Smiles in Powai, Mumbai. Call, WhatsApp or fill our easy appointment form.",
      },
      { property: "og:title", content: "Book Your Child's Appointment | Growing Smiles" },
      {
        property: "og:description",
        content: "Easy appointment booking for gentle pediatric dental care in Powai, Mumbai.",
      },
    ],
  }),
  component: Contact,
});

const INFO = [
  { icon: MapPin, label: "Visit Us", value: BRAND.address },
  { icon: Phone, label: "Call Us", value: BRAND.phoneDisplay, href: `tel:${BRAND.phone}` },
  { icon: Mail, label: "Email Us", value: BRAND.email, href: `mailto:${BRAND.email}` },
  { icon: Clock, label: "Hours", value: BRAND.hours },
];

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [dirty, setDirty] = useState(false);

  // Desktop only: warn before leaving when the form has unsaved input.
  useEffect(() => {
    const isDesktop =
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 1024px)").matches &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!dirty || !isDesktop) return;
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [dirty]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");

    const next: Record<string, string> = {};

    if (!isValidPhone(phone)) {
      next.phone = "Enter a valid 10-digit number (e.g. 9876543210 or +91 9876543210).";
    }
    if (email && !isValidEmail(email)) {
      next.email = "Enter a valid email like contact@domain.com.";
    }
    if (!date) {
      next.date = "Please select a preferred date.";
    } else if (date.getDay() === 0) {
      next.date = "We're closed on Sundays. Please pick Monday–Saturday.";
    }
    if (!time) {
      next.time = "Please select a preferred time.";
    }

    setErrors(next);
    if (Object.keys(next).length > 0) {
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      setDate(undefined);
      setTime("");
      setErrors({});
      setDirty(false);
      toast.success("Thank you! We'll reach out shortly to confirm your appointment.");
    }, 700);
  };

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    "Growing Smiles Pediatric Dentistry Powai Mumbai 400072",
  )}&output=embed`;

  return (
    <SiteLayout>
      <Toaster position="top-center" richColors />

      <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32">
        <CloudField />
        <Reveal className="relative mx-auto max-w-3xl px-5 text-center sm:px-6">
          <span className="inline-block rounded-full glass px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-soft">
            Contact Growing Smiles
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
            Book Your Child's <span className="text-gradient">Appointment</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            We'd love to welcome your family. Reach out by form, call or WhatsApp and we'll help you
            find a time that works.
          </p>
        </Reveal>
      </section>

      <section className="px-5 pb-8 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <form
              onSubmit={onSubmit}
              onInput={() => setDirty(true)}
              noValidate
              className="rounded-[2rem] bg-card p-6 shadow-card sm:p-8"
            >
              <h2 className="text-2xl font-bold text-navy">Appointment Request</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill in a few details and we'll confirm your slot.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Parent Name" name="parentName" required />
                <Field label="Child Name" name="childName" required />
                <Field
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  required
                  error={errors.phone}
                  placeholder="+91 9876543210"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  error={errors.email}
                  placeholder="contact@domain.com"
                />

                {/* Preferred Date */}
                <div>
                  <Label className="text-sm font-semibold text-navy">
                    Preferred Date <span className="text-destructive">*</span>
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className={cn(
                          "mt-1.5 flex h-11 w-full items-center gap-2 rounded-xl border border-border bg-background px-3 text-left text-sm shadow-soft transition-colors hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40",
                          !date && "text-muted-foreground",
                          errors.date && "border-destructive",
                        )}
                      >
                        <CalendarIcon className="h-4 w-4 text-primary" />
                        {date ? format(date, "EEE, MMM d, yyyy") : "Select a date"}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(d) => {
                          setDate(d);
                          setErrors((prev) => ({ ...prev, date: "" }));
                        }}
                        disabled={(d) =>
                          d < new Date(new Date().setHours(0, 0, 0, 0)) || d.getDay() === 0
                        }
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.date && (
                    <p className="mt-1 text-xs font-medium text-destructive">{errors.date}</p>
                  )}
                </div>

                {/* Preferred Time */}
                <div>
                  <Label htmlFor="time" className="text-sm font-semibold text-navy">
                    Preferred Time <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={time}
                    onValueChange={(v) => {
                      setTime(v);
                      setErrors((prev) => ({ ...prev, time: "" }));
                    }}
                  >
                    <SelectTrigger
                      id="time"
                      className={cn(
                        "mt-1.5 h-11 rounded-xl border-border bg-background shadow-soft transition-colors hover:border-primary focus:ring-2 focus:ring-primary/40",
                        errors.time && "border-destructive",
                      )}
                    >
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      {TIME_SLOTS.map((t) => (
                        <SelectItem key={t} value={t} className="rounded-lg">
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.time && (
                    <p className="mt-1 text-xs font-medium text-destructive">{errors.time}</p>
                  )}
                  <p className="mt-1 text-xs text-muted-foreground">Mon–Sat, 10:00 AM – 7:00 PM</p>
                </div>
              </div>

              <div className="mt-4">
                <Label htmlFor="reason" className="text-sm font-semibold text-navy">
                  Reason for Visit
                </Label>
                <Select name="reason">
                  <SelectTrigger
                    id="reason"
                    className="mt-1.5 h-11 rounded-xl border-border bg-background shadow-soft transition-colors hover:border-primary focus:ring-2 focus:ring-primary/40"
                  >
                    <SelectValue placeholder="Select a reason" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    {REASONS.map((r) => (
                      <SelectItem key={r} value={r} className="rounded-lg">
                        {r}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="mt-4">
                <Label htmlFor="message" className="text-sm font-semibold text-navy">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us anything that helps us prepare for your child's visit."
                  className="mt-1.5 rounded-xl"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-7 py-3.5 text-base font-bold text-white shadow-float transition-transform hover:scale-[1.02] disabled:opacity-70"
              >
                <Send className="h-5 w-5" />
                {submitting ? "Sending..." : "Request Appointment"}
              </button>
            </form>
          </Reveal>

          {/* Info + map */}
          <Reveal delay={120} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {INFO.map((i) => (
                <div key={i.label} className="rounded-2xl bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-float">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-white">
                    <i.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-primary">
                    {i.label}
                  </p>
                  {i.href ? (
                    <a href={i.href} className="mt-1 block text-sm font-medium text-navy/80 hover:text-primary">
                      {i.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-medium text-navy/80">{i.value}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="relative h-64 overflow-hidden rounded-2xl shadow-soft">
              <iframe
                title="Growing Smiles location map"
                src={mapSrc}
                loading="lazy"
                className="absolute inset-x-0 top-0 h-80 w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="px-5 pb-4 sm:px-6">
        <Reveal className="mx-auto max-w-5xl">
          <div className="relative animate-float overflow-hidden rounded-[2.5rem] bg-green px-6 py-14 text-center text-white shadow-float transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-float sm:px-12" style={{ animationDuration: "6s" }}>
            <div className="pointer-events-none absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-white/15 blur-2xl" />
            <h2 className="relative text-3xl font-bold sm:text-4xl">Chat With Us On WhatsApp</h2>
            <p className="relative mx-auto mt-3 max-w-xl text-white/90">
              Prefer a quick chat? Message us on WhatsApp and we'll happily answer your questions and
              book your child's visit.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-bold text-green shadow-soft transition-transform hover:scale-105"
            >
              Message on WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <Label htmlFor={name} className="text-sm font-semibold text-navy">
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={cn("mt-1.5 rounded-xl", error && "border-destructive")}
      />
      {error && <p className="mt-1 text-xs font-medium text-destructive">{error}</p>}
    </div>
  );
}
