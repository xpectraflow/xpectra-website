import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { DatabaseBackup, ShieldCheck, Combine, Workflow, Cpu, LayoutDashboard } from "lucide-react";


const getRootTheme = () => {
  if (typeof document === "undefined") {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  }

  const root = document.documentElement;
  if (root.classList.contains("dark")) return "dark";
  if (root.getAttribute("data-theme") === "dark" || root.dataset?.theme === "dark") return "dark";
  if (root.classList.contains("light")) return "light";

  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  return "light";
};

const useThemeSync = () => {
  // Initialize with 'light' to match the server-rendered HTML. 
  // The actual theme is applied immediately after mount in useEffect.
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    if (typeof document === "undefined") return;

    const sync = () => {
      const next = getRootTheme();
      setTheme((prev) => (prev === next ? prev : next));
    };

    sync();

    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    const media =
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(prefers-color-scheme: dark)")
        : null;

    const onMedia = () => sync();
    media?.addEventListener("change", onMedia);

    const onStorage = (event: StorageEvent) => {
      if (event.key === "hero-theme" || event.key === "bento-theme") sync();
    };

    if (typeof window !== "undefined") {
      window.addEventListener("storage", onStorage);
    }

    return () => {
      observer.disconnect();
      media?.removeEventListener("change", onMedia);
      if (typeof window !== "undefined") {
        window.removeEventListener("storage", onStorage);
      }
    };
  }, []);

  return [theme, setTheme] as const;
};

const DeckGlyph = ({ theme = "dark" }) => {
  const stroke = theme === "dark" ? "#f5f5f5" : "#111111";
  const fill = theme === "dark" ? "rgba(255,255,255,0.08)" : "rgba(17,17,17,0.08)";

  return (
    <svg viewBox="0 0 120 120" className="h-16 w-16" aria-hidden>
      <circle
        cx="60"
        cy="60"
        r="46"
        fill="none"
        stroke={stroke}
        strokeWidth="1.4"
        className="motion-safe:animate-[hero3-orbit_8.5s_linear_infinite] motion-reduce:animate-none"
        style={{ strokeDasharray: "18 14" }}
      />
      <rect
        x="34"
        y="34"
        width="52"
        height="52"
        rx="14"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.2"
        className="motion-safe:animate-[hero3-grid_5.4s_ease-in-out_infinite] motion-reduce:animate-none"
      />
      <circle cx="60" cy="60" r="7" fill={stroke} />
      <path
        d="M60 30v10M60 80v10M30 60h10M80 60h10"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinecap="round"
        className="motion-safe:animate-[hero3-pulse_6s_ease-in-out_infinite] motion-reduce:animate-none"
      />
    </svg>
  );
};

export function HeroModeWidget() {
  const [theme] = useThemeSync();
  const [mode, setMode] = useState<"strategy" | "execution">("strategy");

  const palette = useMemo(
    () =>
      theme === "dark"
        ? {
          surface: "bg-black text-white",
          subtle: "text-white/60",
          border: "border-white/12",
          card: "bg-white/6",
          accent: "bg-white/12",
        }
        : {
          surface: "bg-white text-neutral-950",
          subtle: "text-neutral-600",
          border: "border-neutral-200/80",
          card: "bg-neutral-100/80",
          accent: "bg-neutral-100",
        },
    [theme]
  );

  const modes = useMemo(
    () => ({
      strategy: {
        title: "Data Ingestion",
        description:
          "Every hardware revision breaks your ingestion scripts. Xpectra fixes the middle layer so your data survives revisions and engineers analyze instead of rewrite.",
        items: [
          {
            title: "Script-free hardware revision",
            icon: Combine,
          },
          {
            title: "TDMS / MDF / HDF5 / Binary",
            icon: DatabaseBackup,
          },
          {
            title: "250+ channel DAQ support",
            icon: Cpu,
          },
          {
            title: "CAN / SpaceWire / Ethernet buses",
            icon: Workflow,
          },
          {
            title: "Real-time anomaly detection",
            icon: ShieldCheck,
          },
          {
            title: "Full test campaign audit trail",
            icon: LayoutDashboard,
          },
        ],
      },
      execution: {
        title: "Data Visualization",
        description:
          "Dynamic dashboards and full mission context vaulted for anyone to query. See the data that matters.",
        items: [],
      },
    }),
    []
  );

  const activeMode = modes[mode];

  return (
    <div className={`relative flex flex-col gap-6 rounded-3xl border p-8 transition ${palette.border} ${palette.card} h-full`}>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em]">Mode</p>
          <h2 className="text-xl font-semibold tracking-tight">{activeMode.title}</h2>
        </div>
        <DeckGlyph theme={theme} />
      </div>
      <p className={`text-sm leading-relaxed ${palette.subtle}`}>{activeMode.description}</p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setMode("strategy")}
          className={`flex-1 rounded-full border px-2 sm:px-4 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.1em] sm:tracking-[0.35em] transition ${mode === "strategy" ? "bg-white text-black dark:bg-white/90 dark:text-black" : `${palette.border} ${palette.accent}`
            }`}
        >
          Ingestion
        </button>
        <button
          type="button"
          onClick={() => setMode("execution")}
          className={`flex-1 rounded-full border px-2 sm:px-4 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.1em] sm:tracking-[0.35em] transition ${mode === "execution" ? "bg-white text-black dark:bg-white/90 dark:text-black" : `${palette.border} ${palette.accent}`
            }`}
        >
          Visualization
        </button>
      </div>
      {mode === "execution" ? (
        <div className="mt-2 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <img
            src="/dashboard-preview.png"
            alt="Xpectra Data Visualization Dashboard"
            className="w-full object-cover object-top"
          />
        </div>
      ) : (
        <ul className="grid grid-cols-2 gap-4 text-sm mt-4">
          {activeMode.items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li key={idx} className={`flex items-center gap-4 ${palette.subtle}`}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/80">
                  {Icon && <Icon className="h-5 w-5" />}
                </div>
                <span className="font-medium text-white/90">{item.title}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}


function HeroOrbitDeck({ children, headerRightWidget, problemStatement }: { children?: React.ReactNode; headerRightWidget?: React.ReactNode; problemStatement?: React.ReactNode }) {
  const [theme, setTheme] = useThemeSync();
  const sectionRef = useRef(null);


  const palette = useMemo(
    () =>
      theme === "dark"
        ? {
          surface: "bg-black text-white",
          subtle: "text-white/60",
          border: "border-white/12",
          card: "bg-white/6",
          accent: "bg-white/12",
          glow: "rgba(255,255,255,0.14)",
          background: {
            color: "#040404",
            layers: [
              "radial-gradient(ellipse 80% 60% at 10% -10%, rgba(255,255,255,0.15), transparent 60%)",
              "radial-gradient(ellipse 90% 70% at 90% -20%, rgba(120,120,120,0.12), transparent 70%)",
            ],
            dots:
              "radial-gradient(circle at 25% 25%, rgba(250,250,250,0.08) 0.7px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(250,250,250,0.08) 0.7px, transparent 1px)",
          },
        }
        : {
          surface: "bg-white text-neutral-950",
          subtle: "text-neutral-600",
          border: "border-neutral-200/80",
          card: "bg-neutral-100/80",
          accent: "bg-neutral-100",
          glow: "rgba(17,17,17,0.08)",
          background: {
            color: "#f5f5f4",
            layers: [
              "radial-gradient(ellipse 80% 60% at 10% -10%, rgba(15,15,15,0.12), transparent 60%)",
              "radial-gradient(ellipse 90% 70% at 90% -20%, rgba(15,15,15,0.08), transparent 70%)",
            ],
            dots:
              "radial-gradient(circle at 25% 25%, rgba(17,17,17,0.12) 0.7px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(17,17,17,0.08) 0.7px, transparent 1px)",
          },
        },
    [theme]
  );

  const metrics = [
    { label: "Setup time", value: "< 1h" },
    { label: "Data streams", value: "Unlimited" },
    { label: "Time saved", value: "> 40%" },
  ];


  const carouselSlides = [
    {
      badge: "Propulsion",
      counter: "01 / 06",
      vertical: "Liquid & Solid Rocket Testing",
      bullets: [
        "250 channels, 20-minute burn, 400 GB the moment the test stops",
        "Binary-to-TDMS conversion takes as long as the run itself",
        "Next team is already waiting at the stand",
        "Xpectra gives insights under 10 mins so your team analyzes, not waiting for data",
      ],
      specs: [
        { label: "Channels", value: "250+ per test run" },
        { label: "Turnaround", value: "10 min post-test ready" },
      ],
      image: "/propulsion.jpg",
      imageAlt: "Rocket propulsion test stand with engine firing",
    },
    {
      badge: "Aerospace",
      counter: "02 / 06",
      vertical: "Ground Engine Test Facility",
      bullets: [
        "2 to 3 days to close out a single test run",
        "Benchmarking against last month's data is a full day's job",
        "LabVIEW scripts that work today break after the next hardware revision",
        "Longer tests mean millions of data points with no fast way to query them",
      ],
      specs: [
        { label: "Format", value: "TDMS · MDF · Binary" },
        { label: "Benchmarking", value: "Auto cross-run compare" },
      ],
      image: "/hero-sensor.png",
      imageAlt: "Ground engine test facility sensor array rendering live telemetry",
    },
    {
      badge: "Satellite",
      counter: "03 / 06",
      vertical: "Satellite AIT & VnV",
      bullets: [
        "FlatSat generates a new dataset every hour",
        "SpaceWire, CAN, Ethernet. Three buses, three formats, three databases",
        "Your team flew to the test site. The pipeline broke. They stayed up all night",
        "Testers should be testing, not handling data",
      ],
      specs: [
        { label: "Bus Protocols", value: "SpaceWire · CAN · Ethernet" },
        { label: "Compatible", value: "YAMCS · RocksDB" },
      ],
      image: "/satellite.webp",
      imageAlt: "Satellite FlatSat test bench with multi-bus data streams",
    },
    {
      badge: "Aerial",
      counter: "04 / 06",
      vertical: "UAV & Drone Fleets",
      bullets: [
        "Every pilot has their own folder. Every site has its own format",
        "Firmware changed. Your logging script broke again",
        "No single view of what flew, where, and what failed",
        "Mission control across every drone you own, not just one brand",
      ],
      specs: [
        { label: "Aggregation", value: "Multi-drone · Multi-site" },
        { label: "Bus", value: "CAN · Custom firmware" },
      ],
      image: "/drone.jpg",
      imageAlt: "UAV drone in flight over test field",
    },
    {
      badge: "Mobility",
      counter: "05 / 06",
      vertical: "EV & Automotive Testing",
      bullets: [
        "10+ VCU versions live in the field right now",
        "Hardware redesign every 15 days, new revision breaks the CAN logger",
        "OTA pushed to 2,000 units. How many got it? You don't know",
        "GPS cold-start takes 6 minutes. Your protocol assumed 30 seconds",
      ],
      specs: [
        { label: "Protocol", value: "CAN bus · OTA · GSM" },
        { label: "Coverage", value: "Bench → Fleet VCU" },
      ],
      image: "/automobile.jpg",
      imageAlt: "Electric vehicle test bench with VCU and CAN bus analyzer",
    },
    {
      badge: "Robotics",
      counter: "06 / 06",
      vertical: "Industrial & Field Robotics",
      bullets: [
        "Every firmware update breaks your sensor integration again",
        "Simulation data and real field data live in separate silos, no correlation",
        "Multiple robot variants, multiple calibration files, zero unified view",
        "Field failures show up in logs nobody reads until the post-incident review",
      ],
      specs: [
        { label: "Integration", value: "ROS · CAN · Custom firmware" },
        { label: "Data", value: "Sim + field unified" },
      ],
      image: "/robots.jpg",
      imageAlt: "Industrial robot arm at test bench with sensor array",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [showDemo, setShowDemo] = useState(false);
  const slidesCount = carouselSlides.length;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoScroll = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slidesCount);
    }, 7000);
  }, [slidesCount]);

  useEffect(() => {
    startAutoScroll();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startAutoScroll]);

  useEffect(() => {
    if (!showDemo) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setShowDemo(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showDemo]);

  return (
    <div className={`relative isolate min-h-screen w-full overflow-hidden transition-colors duration-700 ${palette.surface}`}>
      <div
        className="pointer-events-none absolute inset-0 -z-30"
        style={{
          backgroundColor: palette.background.color,
          backgroundImage: palette.background.layers.join(", "),
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-80"
        style={{
          backgroundImage: palette.background.dots,
          backgroundSize: "12px 12px",
          backgroundRepeat: "repeat",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(60% 50% at 50% 10%, rgba(255,255,255,0.18), transparent 70%)"
              : "radial-gradient(60% 50% at 50% 10%, rgba(17,17,17,0.12), transparent 70%)",
          filter: "blur(22px)",
        }}
      />

      <section
        ref={sectionRef}
        className={`relative flex min-h-screen w-full flex-col gap-16 overflow-hidden px-6 py-24 transition-opacity duration-700 md:gap-20 md:px-10 lg:px-16 xl:px-24 motion-safe:animate-[hero3-intro_1s_cubic-bezier(.22,.68,0,1)_forwards]
          }`}
      >
        <header className="grid gap-10 overflow-hidden lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] lg:items-end">
          <div className="min-w-0 space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-6xl">
                Accelerate hardware testing <br />Compress launch timeline
              </h1>
              <p className={`max-w-2xl text-base md:text-2xl ${palette.subtle}`}>
                Run more experiments in your test facility window <br /> Get live alerts and instant insights at the testbed <br />Catch critical failures before disassembly
              </p>
            </div>
            {showDemo && createPortal(
              <div
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
                onClick={() => setShowDemo(false)}
              >
                <div
                  className="w-full max-w-4xl aspect-video p-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <iframe
                    src="https://www.youtube.com/embed/yRJlbAfxUm4?rel=0&modestbranding=1&autoplay=1"
                    title="Xpectra Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full rounded-lg"
                  />
                </div>
                <button
                  onClick={() => setShowDemo(false)}
                  className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
                  aria-label="Close video"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </button>
              </div>,
              document.body
            )}
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-3">
              {/* Primary — Request Pilot */}
              <a
                href="#pilot"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('pilot') || document.getElementById('contact');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    setTimeout(() => {
                      const emailInput = (document.getElementById("pilot-email") || el.querySelector('input[type="email"]')) as HTMLInputElement | null;
                      if (emailInput) emailInput.focus();
                    }, 400);
                  }
                }}
                className={`group inline-flex w-full sm:w-auto whitespace-nowrap justify-center items-center gap-3 rounded-full border px-6 py-3.5 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(255,255,255,0.12)] ${theme === "dark"
                  ? "bg-white text-black border-transparent"
                  : "bg-black text-white border-transparent"
                  }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full animate-pulse ${theme === "dark" ? "bg-black/50" : "bg-white/50"}`} />
                Request Pilot
              </a>

              {/* Secondary — Watch Demo */}
              <button
                type="button"
                onClick={() => setShowDemo(true)}
                className={`group inline-flex w-full sm:w-auto whitespace-nowrap justify-center items-center gap-2.5 rounded-full border px-6 py-3.5 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:scale-[1.02] ${theme === "dark"
                  ? "border-white/20 text-white/70 hover:border-white/40 hover:text-white"
                  : "border-black/20 text-black/60 hover:border-black/40 hover:text-black"
                  }`}
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M4.5 2.5L10.5 6.5L4.5 10.5V2.5Z" fill="currentColor" />
                </svg>
                Watch Demo
              </button>

              {/* Tertiary — Try Xpectra */}
              <a
                href="https://app.xpectraflow.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex w-full sm:w-auto whitespace-nowrap justify-center items-center gap-2.5 rounded-full border px-6 py-3.5 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:scale-[1.02] ${theme === "dark"
                  ? "border-white/10 text-white/40 hover:border-white/20 hover:text-white/60"
                  : "border-black/10 text-black/40 hover:border-black/20 hover:text-black/60"
                  }`}
              >
                Try Xpectra
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          <div className="min-w-0 w-full">{headerRightWidget ? headerRightWidget : <HeroModeWidget />}</div>
        </header>

        <div className="flex flex-col gap-10">
          {/* Problem statement — just below hero */}
          {problemStatement}

          {/* Section label */}
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-current opacity-40" />
            <span className="text-lg font-mono uppercase tracking-[0.25em] opacity-60">All-in-one Platform for complex hardware testing</span>
          </div>

          {/* Carousel */}
          <div className={`relative rounded-3xl border overflow-hidden transition ${palette.border} ${palette.card}`}>
            {/* Tab bar — all verticals visible and selectable */}
            <div className="relative">
              <div className={`flex overflow-x-auto border-b ${palette.border}`} style={{ scrollbarWidth: 'none' }}>
                {carouselSlides.map((slide, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setActiveSlide(idx); startAutoScroll(); }}
                    className={`shrink-0 px-5 py-4 text-xs font-mono uppercase tracking-[0.18em] whitespace-nowrap transition-all duration-200 border-b-2 -mb-px ${
                      idx === activeSlide
                        ? "border-white text-white"
                        : `border-transparent opacity-40 hover:opacity-70`
                    }`}
                  >
                    {slide.badge}
                  </button>
                ))}
              </div>
              {/* Right-edge fade hint for overflowing tabs on mobile */}
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 lg:hidden"
                style={{ background: theme === "dark" ? "linear-gradient(to left, rgba(4,4,4,0.9), transparent)" : "linear-gradient(to left, rgba(245,245,244,0.9), transparent)" }} />
            </div>

            {/* Slide area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
              {/* Image */}
              <div className="relative h-64 lg:h-auto overflow-hidden bg-black">
                {carouselSlides.map((slide, idx) => (
                  <img
                    key={idx}
                    src={slide.image}
                    alt={slide.imageAlt}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover grayscale mix-blend-screen transition-opacity duration-700 ${idx === activeSlide ? "opacity-80" : "opacity-0"
                      }`}
                  />
                ))}
                {/* Corner brackets */}
                <span className="pointer-events-none absolute top-3 left-3 w-4 h-4 border-t border-l border-white/30" />
                <span className="pointer-events-none absolute top-3 right-3 w-4 h-4 border-t border-r border-white/30" />
                <span className="pointer-events-none absolute bottom-3 left-3 w-4 h-4 border-b border-l border-white/30" />
                <span className="pointer-events-none absolute bottom-3 right-3 w-4 h-4 border-b border-r border-white/30" />
              </div>

              {/* Content */}
              <div className={`flex flex-col justify-between p-5 sm:p-8 lg:p-10 border-t lg:border-t-0 lg:border-l ${palette.border}`}>
                <div className="flex flex-col gap-4 sm:gap-5">
                  <p className="text-xs font-mono uppercase tracking-[0.35em] opacity-50">
                    {carouselSlides[activeSlide].badge}
                  </p>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug">
                    {carouselSlides[activeSlide].vertical}
                  </h3>
                  <ul className={`space-y-2 text-base leading-relaxed ${palette.subtle}`}>
                    {carouselSlides[activeSlide].bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-[6px] shrink-0 h-1.5 w-1.5 rounded-full bg-current opacity-60" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical specs footer */}
                <div className={`mt-6 sm:mt-8 pt-5 sm:pt-6 border-t ${palette.border} grid grid-cols-2 gap-4 sm:gap-6`}>
                  {carouselSlides[activeSlide].specs.map((spec) => (
                    <div key={spec.label}>
                      <div className="text-xs font-mono uppercase tracking-wider opacity-40 mb-1">{spec.label}</div>
                      <div className="text-base font-semibold">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {children}
        </div>
      </section>
    </div>
  );
}

export default HeroOrbitDeck;
export { HeroOrbitDeck };
