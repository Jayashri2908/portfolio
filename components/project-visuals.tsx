export function UpscalerVisual() {
  return (
    <div
      aria-hidden
      className="relative h-full min-h-[260px] overflow-hidden border border-tron-cyan/15 bg-black/50 p-4 sm:p-5"
    >
      <div className="tron-grid-bg absolute inset-0 opacity-50" />
      <div className="relative flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-tron-dim">
        <span>IMG_PIPELINE // ACTIVE</span>
        <span className="flex items-center gap-1.5 text-tron-cyan">
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-tron-cyan" />
          GPU / CPU
        </span>
      </div>

      <div className="relative mt-4 flex items-center gap-3">
        <div className="relative h-28 flex-1 overflow-hidden border border-tron-line bg-[#020607] sm:h-32">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, #0a4e57, transparent 55%), radial-gradient(circle at 70% 70%, #3a1c08, transparent 55%)",
              filter: "blur(6px) saturate(0.7)",
              transform: "scale(1.15)",
            }}
          />
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:100%_5px]" />
          <span className="absolute bottom-2 left-2 font-mono text-[9px] uppercase tracking-widest text-tron-dim">
            INPUT // LOW-RES
          </span>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-1 font-mono text-[9px] text-tron-orange">
          <span className="h-px w-6 bg-tron-orange/60" />
          <span>4×</span>
          <span className="h-px w-6 bg-tron-orange/60" />
        </div>

        <div className="relative h-32 flex-1 overflow-hidden border border-tron-cyan/40 bg-[#020607] shadow-glow-cyan sm:h-36">
          <div
            className="absolute inset-0"
            style={{
              background:
                "conic-gradient(from 45deg at 35% 35%, #00f0ff 0deg, #0a4e57 80deg, #ff6b1a 160deg, #071b1f 230deg, #00f0ff 360deg)",
              opacity: 0.55,
            }}
          />
          <div className="tron-grid-bg absolute inset-0 opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-2xl font-bold tracking-[0.2em] text-white/90">
              HD
            </span>
          </div>
          <span className="absolute bottom-2 left-2 font-mono text-[9px] uppercase tracking-widest text-tron-cyan">
            OUTPUT // 4K
          </span>
        </div>
      </div>

      <div className="relative mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[9px] uppercase tracking-[0.14em] text-tron-dim">
        {["DOCKER", "REAL-ESRGAN", "GFPGAN", "NIQE"].map((step, index) => (
          <span key={step} className="flex items-center gap-3">
            {index > 0 ? <span className="text-tron-cyan/50">→</span> : null}
            <span className="border border-tron-line px-2 py-1 text-tron-text/70">
              {step}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function FdpVisual() {
  const rows = [
    { id: "USER_0421", role: "ADMIN", status: "ACTIVE" },
    { id: "USER_1187", role: "FACULTY", status: "APPROVED" },
    { id: "USER_2043", role: "FACULTY", status: "PENDING" },
    { id: "USER_3910", role: "COORD", status: "APPROVED" },
  ];

  return (
    <div
      aria-hidden
      className="relative h-full min-h-[260px] overflow-hidden border border-tron-orange/15 bg-black/50 p-4 sm:p-5"
    >
      <div className="tron-grid-bg absolute inset-0 opacity-40" />
      <div className="relative flex items-center justify-between border-b border-tron-line pb-2 font-mono text-[9px] uppercase tracking-[0.18em]">
        <span className="text-tron-text/70">FDP // CONTROL_PANEL</span>
        <span className="text-tron-orange">LIVE</span>
      </div>

      <div className="relative mt-3 space-y-1.5">
        {rows.map((row) => (
          <div
            key={row.id}
            className="flex items-center justify-between border border-tron-line/70 bg-black/40 px-2.5 py-1.5 font-mono text-[9px] tracking-[0.1em]"
          >
            <span className="text-tron-text/60">{row.id}</span>
            <span className="text-tron-cyan/70">{row.role}</span>
            <span
              className={
                row.status === "PENDING"
                  ? "text-tron-orange"
                  : "text-tron-cyan/80"
              }
            >
              {row.status}
            </span>
          </div>
        ))}
      </div>

      <div className="relative mt-3 grid grid-cols-3 gap-2">
        {[
          { value: "10K+", label: "USERS" },
          { value: "39", label: "APIS" },
          { value: "99.9%", label: "UPTIME" },
        ].map((metric) => (
          <div
            key={metric.label}
            className="border border-tron-line/70 bg-black/40 px-2 py-2 text-center"
          >
            <div className="font-display text-sm font-bold text-tron-orange">
              {metric.value}
            </div>
            <div className="mt-0.5 font-mono text-[8px] tracking-[0.18em] text-tron-dim">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-3 flex items-center justify-between border border-tron-line/60 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-tron-dim">
        <span>CERT_GEN // PDF + JPG</span>
        <span className="text-tron-orange">© LD-20250174733</span>
      </div>
    </div>
  );
}

export function BaldnessVisual() {
  return (
    <div
      aria-hidden
      className="relative h-full min-h-[260px] overflow-hidden border border-tron-cyan/15 bg-black/50 p-4 sm:p-5"
    >
      <div className="tron-grid-bg absolute inset-0 opacity-40" />
      <div className="relative flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-tron-dim">
        <span>MODEL // PREDICTION</span>
        <span className="text-tron-cyan">ONLINE</span>
      </div>

      <div className="relative mt-4 flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="h-40 w-40">
          <defs>
            <linearGradient id="gauge" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="100%" stopColor="#FF6B1A" />
            </linearGradient>
          </defs>
          <circle
            cx="100"
            cy="100"
            r="72"
            fill="none"
            stroke="rgba(0,240,255,0.08)"
            strokeWidth="1"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="6"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="url(#gauge)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="377"
            strokeDashoffset="117"
            transform="rotate(-90 100 100)"
          />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1="100"
              y1="24"
              x2="100"
              y2="30"
              stroke="rgba(0,240,255,0.35)"
              strokeWidth="1"
              transform={`rotate(${angle} 100 100)`}
            />
          ))}
          <text
            x="100"
            y="102"
            textAnchor="middle"
            className="fill-tron-text font-display"
            style={{ fontSize: "28px", fontWeight: 700 }}
          >
            69%
          </text>
          <text
            x="100"
            y="120"
            textAnchor="middle"
            className="fill-tron-dim font-mono"
            style={{ fontSize: "8px", letterSpacing: "2px" }}
          >
            PROBABILITY
          </text>
        </svg>
      </div>

      <div className="relative mt-3 grid grid-cols-3 gap-2 font-mono text-[8px] uppercase tracking-[0.12em]">
        {["GENETIC", "LIFESTYLE", "SCALP"].map((input) => (
          <div
            key={input}
            className="border border-tron-line/70 bg-black/40 px-2 py-1.5 text-center text-tron-text/60"
          >
            {input}
          </div>
        ))}
      </div>

      <div className="relative mt-2 text-center font-mono text-[8px] uppercase tracking-[0.18em] text-tron-dim">
        OpenCV // AGE-SPECIFIC ANALYSIS
      </div>
    </div>
  );
}

export function ProjectVisual({
  variant,
}: {
  variant: "upscaler" | "fdp" | "baldness";
}) {
  if (variant === "upscaler") return <UpscalerVisual />;
  if (variant === "fdp") return <FdpVisual />;
  return <BaldnessVisual />;
}
