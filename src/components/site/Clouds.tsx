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

export function CloudField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
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
    </div>
  );
}
