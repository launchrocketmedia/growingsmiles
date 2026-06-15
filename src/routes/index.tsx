import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Baby,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Stethoscope,
  Microscope,
  Phone as PhoneIcon,
  Star,
  CheckCircle2,
  CalendarCheck,
  UserCheck,
  MessageCircleHeart,
  Smile,
  Droplets,
  Shield,
  Layers,
  Brush,
  Activity,
  Siren,
  Brain,
  Accessibility,
  ArrowRight,
  Quote,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { CloudField } from "@/components/site/Clouds";
import { BRAND, waLink } from "@/lib/brand";
import drJyoti from "@/assets/dr-jyoti.png.asset.json";
import drJyotiClinic from "@/assets/dr-jyoti-clinic.png.asset.json";
import fearFree from "@/assets/fear-free.png.asset.json";
import childCare from "@/assets/child-care.png.asset.json";
import community from "@/assets/community.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Growing Smiles | Pediatric Dentist Dr. Jyoti Magoo, Powai Mumbai" },
      {
        name: "description",
        content:
          "Gentle, fear-free pediatric dentistry in Powai, Mumbai. Dr. Jyoti Magoo creates positive dental experiences for children. Book your child's appointment today.",
      },
      { property: "og:title", content: "Growing Smiles | Pediatric Dentistry by Dr. Jyoti Magoo" },
      {
        property: "og:description",
        content: "Expert, fear-free pediatric dental care for healthy, confident smiles in Powai, Mumbai.",
      },
      { property: "og:image", content: drJyoti.url },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: BRAND.full,
          description:
            "Pediatric dentistry providing fear-free, child-friendly dental care in Powai, Mumbai.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Unit 220, Lake Primrose Commercial Complex, Powai",
            addressLocality: "Mumbai",
            addressRegion: "Maharashtra",
            postalCode: "400072",
            addressCountry: "IN",
          },
          telephone: BRAND.phone,
          email: BRAND.email,
          openingHours: "Mo-Sa 10:00-19:00",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: BRAND.rating,
            reviewCount: BRAND.reviewCount,
          },
        }),
      },
    ],
  }),
  component: Home,
});

const TRUST = ["Pediatric Specialist", "Child-Friendly Care", "Trusted by Families", "Positive Reviews"];

const WHY = [
  { icon: HeartHandshake, title: "Gentle Treatment Philosophy", text: "Every step is paced to your child's comfort, never rushed." },
  { icon: Stethoscope, title: "Experienced Pediatric Dentist", text: "Specialised, child-focused care backed by years of practice." },
  { icon: Smile, title: "Child-Friendly Environment", text: "A bright, playful space designed to put little ones at ease." },
  { icon: Microscope, title: "Modern Technology", text: "Safe, advanced tools for precise and minimal treatment." },
  { icon: UserCheck, title: "Personalized Care", text: "Tailored plans for each child's age, needs and temperament." },
  { icon: Siren, title: "Emergency Support", text: "Prompt, reassuring help when your child needs it most." },
  { icon: ShieldCheck, title: "Preventive Dentistry", text: "Early habits and check-ups that keep smiles healthy for life." },
];

const SERVICES = [
  { icon: Baby, title: "Infant Oral Care", text: "Gentle first visits and guidance for your baby's earliest teeth." },
  { icon: ShieldCheck, title: "Preventive Dentistry", text: "Routine care that stops problems before they start." },
  { icon: Stethoscope, title: "Dental Checkups", text: "Comprehensive, calm assessments at every growth stage." },
  { icon: Droplets, title: "Fluoride Treatments", text: "Strengthening enamel to protect against decay." },
  { icon: Shield, title: "Sealants", text: "Protective coatings that shield little molars." },
  { icon: Layers, title: "Tooth-Colored Fillings", text: "Natural-looking, safe restorations for tiny teeth." },
  { icon: Activity, title: "Pediatric Root Canal", text: "Pain-free treatment to save and protect baby teeth." },
  { icon: Siren, title: "Emergency Dental Care", text: "Fast, gentle relief for unexpected dental needs." },
  { icon: Brain, title: "Habit Counseling", text: "Friendly guidance for thumb-sucking and more." },
  { icon: Accessibility, title: "Special Needs Dentistry", text: "Patient, individualised care for every child." },
];

const JOURNEY = [
  { icon: CalendarCheck, title: "Book Appointment", text: "Reach out by call, WhatsApp or our form — we make it easy." },
  { icon: UserCheck, title: "Meet the Doctor", text: "A warm welcome that helps your child feel at home." },
  { icon: MessageCircleHeart, title: "Gentle Consultation", text: "Unhurried, friendly assessment built on trust." },
  { icon: Stethoscope, title: "Personalized Treatment", text: "A care plan tailored to your child's smile." },
  { icon: Smile, title: "Healthy Smile", text: "Confident kids and lasting, happy smiles." },
];

const REVIEWS = [
  { name: "Priya S.", text: "Dr. Jyoti is incredibly patient and kind. My daughter actually looks forward to her dental visits now!", stars: 5 },
  { name: "Rahul M.", text: "The clinic is so warm and child-friendly. My son had zero fear during his first checkup. Highly recommend.", stars: 5 },
  { name: "Aisha K.", text: "Best pediatric dentist in Powai. Gentle, professional and genuinely caring with kids.", stars: 5 },
  { name: "Neha D.", text: "From the playful interiors to the gentle treatment, everything is designed for children. Wonderful experience.", stars: 5 },
  { name: "Vikram J.", text: "Dr. Jyoti explained everything calmly and made my toddler comfortable. Truly fear-free dentistry.", stars: 5 },
  { name: "Sneha P.", text: "My twins were nervous at first, but the friendly staff and Dr. Jyoti put them completely at ease. Fantastic care.", stars: 5 },
  { name: "Arjun T.", text: "Spotless clinic, modern equipment and a doctor who genuinely loves working with kids. Couldn't ask for more.", stars: 5 },
  { name: "Meera R.", text: "We drive across the city for our daughter's appointments — it's that worth it. Gentle, thorough and caring.", stars: 5 },
];

const FAQS = [
  { q: "At what age should my child first visit the dentist?", a: "We recommend your child's first dental visit by their first birthday, or within six months of the first tooth appearing. Early visits help build comfort and prevent problems." },
  { q: "How do you make visits fear-free for children?", a: "We use a gentle, unhurried approach with playful explanations, a child-friendly environment and lots of reassurance — so every child feels safe and confident." },
  { q: "Do you treat children with special needs?", a: "Yes. Dr. Jyoti provides patient, individualised care tailored to each child's needs and temperament in a calm, supportive setting." },
  { q: "What should I do in a dental emergency?", a: "Call us right away. We offer prompt emergency support and will guide you on immediate steps while we arrange to see your child quickly." },
  { q: "Are the treatments safe for baby teeth?", a: "Absolutely. We use modern, child-safe technology and minimally invasive techniques designed specifically for growing smiles." },
];

function StoryRow({
  img,
  alt,
  eyebrow,
  title,
  children,
  reverse,
  tint,
}: {
  img: string;
  alt: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  reverse?: boolean;
  tint: string;
}) {
  return (
    <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 sm:px-6 lg:grid-cols-2 lg:gap-14">
      <Reveal className={reverse ? "lg:order-2" : ""}>
        <div className="relative">
          <div
            className="absolute -inset-3 rounded-[2rem] blur-2xl"
            style={{ background: tint, opacity: 0.5 }}
          />
          <img
            src={img}
            alt={alt}
            loading="lazy"
            className="relative w-full rounded-[2rem] object-cover shadow-card"
          />
        </div>
      </Reveal>
      <Reveal delay={120} className={reverse ? "lg:order-1" : ""}>
        <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">{title}</h2>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {children}
        </div>
      </Reveal>
    </div>
  );
}

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden pt-24 sm:pt-28">
        <CloudField />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 pb-12 sm:px-6 lg:grid-cols-12 lg:gap-6 lg:pb-20">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow-soft">
                <Sparkles className="h-4 w-4" /> Pediatric Dentistry • Powai, Mumbai
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-navy sm:text-5xl lg:text-6xl">
                Growing Healthy Smiles,{" "}
                <span className="text-gradient">One Child at a Time</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Expert pediatric dental care in a warm, welcoming environment where every child feels
                comfortable, confident, and cared for.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-full bg-[image:var(--gradient-primary)] px-7 py-3.5 text-base font-bold text-white shadow-float transition-transform hover:scale-105"
                >
                  Book Appointment
                </Link>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-base font-bold text-white shadow-soft transition-transform hover:scale-105"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {TRUST.map((t) => (
                  <span key={t} className="flex items-center gap-2 text-sm font-semibold text-navy/80">
                    <CheckCircle2 className="h-4 w-4 text-green" /> {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute left-1/2 top-6 h-[88%] w-[88%] -translate-x-1/2 rounded-[50%] bg-[image:var(--gradient-primary)] opacity-25 blur-2xl" />
              <div className="absolute left-1/2 bottom-0 h-[78%] w-[78%] -translate-x-1/2 rounded-t-[50%] bg-baby/60" />
              <img
                src={drJyoti.url}
                alt="Dr. Jyoti Magoo, Pediatric Dentist at Growing Smiles"
                className="relative z-10 mx-auto w-full max-w-sm drop-shadow-2xl lg:max-w-md"
                fetchPriority="high"
              />
              <div className="glass absolute -bottom-3 left-0 z-20 flex animate-float items-center gap-2 rounded-2xl px-4 py-3 shadow-card sm:-left-2" style={{ animationDuration: "6s" }}>
                <Star className="h-5 w-5 fill-yellow text-yellow" />
                <div>
                  <p className="text-sm font-bold leading-none text-navy">{BRAND.rating} Rating</p>
                  <p className="text-xs text-muted-foreground">Trusted by families</p>
                </div>
              </div>
              <div className="glass absolute right-0 top-1/3 z-20 flex animate-float items-center gap-2 rounded-2xl px-4 py-3 shadow-card" style={{ animationDelay: "1.5s", animationDuration: "6s" }}>
                <Smile className="h-5 w-5 text-green" />
                <p className="text-sm font-bold text-navy">Fear-Free Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative mx-auto max-w-sm pb-14 sm:pb-16">
                <div className="absolute inset-0 rounded-[2.5rem] bg-[image:var(--gradient-primary)] opacity-20 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2.5rem] bg-[image:var(--gradient-sky)] shadow-card">
                  <img src={drJyotiClinic.url} alt="Dr. Jyoti Magoo at Growing Smiles clinic" loading="lazy" className="mx-auto w-full" />
                </div>
                <div className="absolute -bottom-2 left-3 right-3 z-20 grid grid-cols-3 gap-2 sm:left-4 sm:right-4 sm:gap-3">
                  {[
                    { n: 10, s: "+", l: "Years of Care", d: 0 },
                    { n: 5000, s: "+", l: "Happy Smiles", d: 0 },
                    { n: 4.9, s: "★", l: "Avg. Rating", d: 1 },
                  ].map((stat) => (
                    <div key={stat.l} className="rounded-xl bg-white/95 p-2 text-center shadow-card backdrop-blur-sm sm:p-3">
                      <p className="text-lg font-extrabold text-primary sm:text-2xl">
                        <Counter to={stat.n} decimals={stat.d} />
                        {stat.s}
                      </p>
                      <p className="mt-0.5 text-[10px] font-semibold text-muted-foreground sm:text-xs">{stat.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-7">
            <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              About the Doctor
            </span>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">Meet Dr. Jyoti Magoo</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Dr. Jyoti Magoo is a dedicated pediatric dentist passionate about creating positive,
              fear-free dental experiences for children. With a gentle, child-first approach, she
              helps little ones build healthy habits and lasting, confident smiles.
            </p>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {[
                "Pediatric & Preventive Dentistry Specialist",
                "Founder, Growing Smiles, Powai",
                "Expert in fear-free, child-centered care",
                "Special needs & habit counseling",
              ].map((q) => (
                <li key={q} className="flex items-start gap-2 text-sm font-medium text-navy/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green" /> {q}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FEAR-FREE */}
      <section className="py-16 sm:py-20">
        <StoryRow
          img={fearFree.url}
          alt="Dr. Jyoti gently helping a toddler feel comfortable at the dentist"
          eyebrow="Fear-Free Dentistry"
          title="Making Every Dental Visit Comfortable and Fun"
          tint="var(--gradient-primary)"
        >
          <p>
            We turn nervous first visits into joyful ones. Through play, patience and a calm,
            reassuring approach, even the most anxious little ones learn that the dentist can be a
            friendly, happy place.
          </p>
          <p>
            Gentle care, child comfort and positive first experiences are at the heart of everything
            we do — building trust that lasts a lifetime.
          </p>
        </StoryRow>
      </section>

      {/* CHILD-CENTERED */}
      <section className="py-16 sm:py-20">
        <StoryRow
          img={childCare.url}
          alt="Dr. Jyoti engaging warmly with a young child"
          eyebrow="Child-Centered Care"
          title="Creating Positive Dental Experiences for Every Child"
          reverse
          tint="linear-gradient(135deg, oklch(0.74 0.1 195), oklch(0.72 0.15 150))"
        >
          <p>
            Every child is unique, and so is their care. We take the time to connect, comfort and
            engage each little patient — meeting them at their level with compassion and warmth.
          </p>
          <p>
            From the first hello to the final high-five, we create an environment built on trust,
            comfort and genuine connection.
          </p>
        </StoryRow>
      </section>

      {/* COMMUNITY */}
      <section className="py-16 sm:py-20">
        <StoryRow
          img={community.url}
          alt="Dr. Jyoti with a group of happy children at Growing Smiles"
          eyebrow="Community & Happy Smiles"
          title="A Place Where Little Smiles Grow With Confidence"
          tint="linear-gradient(135deg, oklch(0.84 0.15 85), oklch(0.74 0.13 230))"
        >
          <p>
            Growing Smiles is more than a clinic — it's a community where children feel celebrated and
            families feel at home. Happy faces and confident smiles are our greatest reward.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-2">
            {[
              { n: 5000, s: "+", l: "Smiles Created" },
              { n: 98, s: "%", l: "Happy Families" },
              { n: 180, s: "+", l: "5-Star Reviews" },
            ].map((stat) => (
              <div key={stat.l} className="rounded-2xl bg-card p-3 text-center shadow-soft">
                <p className="text-xl font-extrabold text-primary sm:text-2xl">
                  <Counter to={stat.n} />
                  {stat.s}
                </p>
                <p className="mt-1 text-[11px] font-semibold text-muted-foreground sm:text-xs">{stat.l}</p>
              </div>
            ))}
          </div>
        </StoryRow>
      </section>

      {/* WHY PARENTS TRUST US */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              Why Parents Trust Us
            </span>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
              Care Parents Believe In
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 60}>
                <div
                  className="group h-full rounded-3xl bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card animate-float"
                  style={{ animationDelay: `${i * 0.7}s`, animationDuration: "6s" }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)] text-white shadow-soft transition-transform group-hover:scale-110">
                    <w.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-navy">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-24 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              Our Services
            </span>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
              Complete Pediatric Dental Care
            </h2>
            <p className="mt-3 text-muted-foreground">
              Comprehensive, gentle treatments designed for growing smiles at every stage.
            </p>
          </Reveal>

          {/* Mobile swipeable */}
          <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:hidden">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} s={s} className="w-[78%] shrink-0 snap-center" />
            ))}
          </div>
          {/* Desktop grid */}
          <div className="mt-10 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 60}>
                <ServiceCard s={s} className="h-full animate-float" style={{ animationDelay: `${(i % 4) * 0.5}s`, animationDuration: "6s" }} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* PATIENT JOURNEY */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        {/* Abstract background shapes */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[8%] top-24 h-64 w-64 rounded-full bg-[image:var(--gradient-primary)] opacity-[0.07] blur-3xl" />
          <div className="absolute right-[6%] top-1/2 h-72 w-72 rounded-full bg-teal/20 opacity-30 blur-3xl" />
          <div className="absolute bottom-10 left-1/3 h-56 w-56 rounded-full bg-baby/30 opacity-30 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              Patient Journey
            </span>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
              Your Child's Path to a Healthy Smile
            </h2>
            <p className="mt-3 text-muted-foreground">
              A gentle, guided journey — every step designed around your child's comfort.
            </p>
          </Reveal>

          <div className="relative mt-16">
            {/* Flowing connector path (desktop) */}
            <svg
              className="pointer-events-none absolute left-0 top-0 hidden h-full w-full lg:block"
              preserveAspectRatio="none"
              viewBox="0 0 105 100"
              aria-hidden="true"
            >
              <path
                d="M45 6 C 90 14, 90 26, 45 34 C 0 42, 0 54, 45 62 C 90 70, 90 82, 45 90"
                fill="none"
                stroke="url(#journeyStroke)"
                strokeWidth="0.45"
                strokeDasharray="1.4 1.6"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="journeyStroke" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.74 0.13 230)" />
                  <stop offset="100%" stopColor="oklch(0.78 0.1 195)" />
                </linearGradient>
              </defs>
            </svg>

            <div className="flex flex-col gap-8 sm:gap-10">
              {JOURNEY.map((j, i) => {
                const align = i % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto";
                // staggered horizontal offsets for a flowing path
                const shift = ["lg:ml-[8%]", "lg:mr-[4%]", "lg:ml-[2%]", "lg:mr-[6%]", "lg:ml-[14%]"][i] ?? "";
                return (
                  <Reveal key={j.title} delay={i * 90} className={`w-full lg:w-[52%] ${align} ${shift}`}>
                    <div className="group relative animate-float rounded-3xl border border-white/60 bg-white/70 p-5 shadow-card backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float sm:p-6" style={{ animationDelay: `${i * 0.6}s`, animationDuration: "7s" }}>
                      <div className="flex items-start gap-4">
                        <div className="relative shrink-0">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)] text-white shadow-soft transition-transform group-hover:scale-110">
                            <j.icon className="h-7 w-7" />
                          </div>
                          <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-extrabold text-primary shadow-soft">
                            {i + 1}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <div className="inline-block rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                            Step {i + 1}
                          </div>
                          <h3 className="mt-2 text-lg font-bold text-navy">{j.title}</h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{j.text}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="scroll-mt-24 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-card px-4 py-2 shadow-soft">
              <GoogleG />
              <span className="text-sm font-bold text-navy">Google Reviews</span>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="text-4xl font-extrabold text-navy">{BRAND.rating}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow text-yellow" />
                ))}
              </div>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Based on {BRAND.reviewCount}+ verified Google reviews
            </p>
          </Reveal>

          <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className="relative w-[85%] shrink-0 snap-center rounded-3xl bg-card p-6 shadow-soft sm:w-[360px]"
              >
                <div className="absolute right-4 top-4 flex items-center justify-center rounded-full bg-white p-1.5 shadow-soft">
                  <GoogleG />
                </div>
                <Quote className="h-7 w-7 text-primary/30" />
                <div className="mt-2 flex">
                  {[...Array(r.stars)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-yellow text-yellow" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-navy/80">"{r.text}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] text-sm font-bold text-white">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy">{r.name}</p>
                    <p className="text-xs text-muted-foreground">Verified patient family</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={BRAND.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-bold text-white shadow-soft transition-transform hover:scale-105"
            >
              Read All Reviews
            </a>
            <a
              href={BRAND.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-card px-6 py-3 text-sm font-bold text-navy shadow-soft transition-transform hover:scale-105"
            >
              Leave a Review
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="scroll-mt-24 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <Reveal className="text-center">
            <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              FAQs
            </span>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">Questions Parents Ask</h2>
          </Reveal>
          <Reveal delay={100}>
            <Accordion type="single" collapsible className="mt-10 space-y-3">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="overflow-hidden rounded-2xl border-none bg-card px-5 shadow-soft"
                >
                  <AccordionTrigger className="py-5 text-left text-base font-bold text-navy hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-8 sm:px-6">
        <Reveal className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[image:var(--gradient-primary)] px-6 py-14 text-center text-white shadow-float sm:px-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/15 blur-2xl" />
            <h2 className="relative text-3xl font-bold sm:text-4xl">
              Ready to Grow a Healthy Smile?
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-white/90">
              Book your child's appointment today and give them a gentle, fear-free dental experience.
            </p>
            <div className="relative mt-7 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-white px-7 py-3.5 text-base font-bold text-navy shadow-soft transition-transform hover:scale-105"
              >
                Book Appointment
              </Link>
              <a
                href={`tel:${BRAND.phone}`}
                className="flex items-center gap-2 rounded-full bg-navy/30 px-7 py-3.5 text-base font-bold text-white backdrop-blur transition-transform hover:scale-105"
              >
                <PhoneIcon className="h-5 w-5" /> Call Now
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

function ServiceCard({
  s,
  className = "",
  style,
}: {
  s: { icon: React.ElementType; title: string; text: string };
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={style}
      className={`group rounded-3xl bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card ${className}`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-[image:var(--gradient-primary)] group-hover:text-white">
        <s.icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-navy">{s.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
      <Link
        to="/contact"
        className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary"
      >
        Learn More <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z" />
      <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z" />
    </svg>
  );
}
