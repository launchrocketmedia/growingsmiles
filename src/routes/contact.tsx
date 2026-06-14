import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Toaster, toast } from "sonner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { CloudField } from "@/components/site/Clouds";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BRAND, waLink } from "@/lib/brand";

const REASONS = [
  "Routine Checkup & Cleaning",
  "First Dental Visit",
  "Tooth Pain / Emergency",
  "Cavity / Filling",
  "Braces / Orthodontics",
  "Other",
];

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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
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
              className="rounded-[2rem] bg-card p-6 shadow-card sm:p-8"
            >
              <h2 className="text-2xl font-bold text-navy">Appointment Request</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill in a few details and we'll confirm your slot.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Parent Name" name="parentName" required />
                <Field label="Child Name" name="childName" required />
                <Field label="Phone Number" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" />
                <Field label="Preferred Date" name="date" type="date" />
                <Field label="Preferred Time" name="time" type="time" />
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
                <div key={i.label} className="rounded-2xl bg-card p-5 shadow-soft">
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
            <div className="overflow-hidden rounded-2xl shadow-soft">
              <iframe
                title="Growing Smiles location map"
                src={mapSrc}
                loading="lazy"
                className="h-64 w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="px-5 pb-4 sm:px-6">
        <Reveal className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-green px-6 py-14 text-center text-white shadow-float sm:px-12">
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
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
        className="mt-1.5 rounded-xl"
      />
    </div>
  );
}
