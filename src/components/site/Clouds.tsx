export function Cloud({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 200 110"
      className={className}
      style={style}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M50 90c-20 0-36-14-36-32 0-16 12-29 28-31 5-16 20-27 38-27 21 0 38 15 41 35 16 1 29 13 29 29 0 15-13 26-29 26H50Z" />
    </svg>
  );
}

function Bubble({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <span
      className={`absolute rounded-full ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}

export function CloudField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Clouds */}
      <Cloud className="animate-float absolute left-[6%] top-[12%] w-24 text-white/70 sm:w-36" />
      <Cloud
        className="animate-float absolute right-[8%] top-[20%] w-20 text-white/60 sm:w-28"
        style={{ animationDelay: "1.2s" }}
      />
      <Cloud
        className="animate-float absolute left-[18%] bottom-[14%] w-16 text-white/50 sm:w-24"
        style={{ animationDelay: "2.1s" }}
      />
      <Cloud
        className="animate-float absolute right-[22%] bottom-[24%] w-14 text-white/40 sm:w-20"
        style={{ animationDelay: "0.6s" }}
      />
      <Cloud
        className="animate-float absolute left-[44%] top-[6%] w-16 text-white/45 sm:w-24"
        style={{ animationDelay: "1.8s", animationDuration: "7s" }}
      />
      <Cloud
        className="animate-float absolute right-[40%] bottom-[8%] w-12 text-white/35 sm:w-16"
        style={{ animationDelay: "2.6s", animationDuration: "8s" }}
      />

      {/* Floating bubbles */}
      <Bubble
        className="animate-float h-5 w-5 bg-primary/15 sm:h-7 sm:w-7"
        style={{ left: "12%", top: "40%", animationDelay: "0.4s", animationDuration: "6s" }}
      />
      <Bubble
        className="animate-float h-3 w-3 bg-green/20 sm:h-4 sm:w-4"
        style={{ left: "30%", top: "28%", animationDelay: "1.5s", animationDuration: "7s" }}
      />
      <Bubble
        className="animate-float h-6 w-6 bg-baby/40 sm:h-9 sm:w-9"
        style={{ right: "14%", top: "44%", animationDelay: "0.9s", animationDuration: "8s" }}
      />
      <Bubble
        className="animate-float h-3 w-3 bg-primary/20 sm:h-5 sm:w-5"
        style={{ right: "30%", top: "14%", animationDelay: "2.2s", animationDuration: "6.5s" }}
      />
      <Bubble
        className="animate-float h-4 w-4 bg-green/15 sm:h-6 sm:w-6"
        style={{ left: "50%", bottom: "18%", animationDelay: "1.1s", animationDuration: "7.5s" }}
      />
    </div>
  );
}
