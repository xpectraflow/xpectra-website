import React, { useEffect, useMemo, useRef, useState } from "react";
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
          "Standardize data across all missions instantly without rewriting scripts. Your historical data, analysis-ready.",
        items: [
          {
            title: "Standardized ingestion",
            icon: Combine,
          },
          {
            title: "Real-time data validation",
            icon: ShieldCheck,
          },
          {
            title: "Reusable pipelines",
            icon: Workflow,
          },
          {
            title: "Smart Data Lifecycle Management",
            icon: DatabaseBackup,
          },
          {
            title: "Hardware Diagnostics",
            icon: Cpu,
          },
          {
            title: "Real-time Observability",
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

function HeroOrbitDeck({ children, headerRightWidget }: { children?: React.ReactNode; headerRightWidget?: React.ReactNode }) {
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


  const protocols = [
    {
      name: "Data Ingestion",
      detail: "Connect any sensor and standardize data across tests instantly.",
      status: "Ready",
    },
    {
      name: "Real-time Validation",
      detail: "Schema, timestamps, dropouts caught instantly before they cascade.",
      status: "Active",
    },
    {
      name: "Data Querying",
      detail: "Query events from terabytes of historical data in seconds.",
      status: "Live",
    },
  ];

  const setSpotlight = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--hero3-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--hero3-y", `${event.clientY - rect.top}px`);
  };

  const clearSpotlight = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;
    target.style.removeProperty("--hero3-x");
    target.style.removeProperty("--hero3-y");
  };

  const showcaseImages = [
    {
      src: "/hero-sensor.png",
      alt: "Futuristic 3D wireframe diagram of a complex hardware sensor rendering telemetry data",
      label: "Live Engine telemetry",
      description: "Real-time validation"
    },
    {
      src: "/satellite-sensor.png",
      alt: "Futuristic 3D wireframe diagram of a satellite sensor rendering telemetry data",
      label: "Live satellite sensors telemetry",
      description: "Orbital sync"
    }
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

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
                Infrastructure for <br />mission critical sensor data
              </h1>
              <p className={`max-w-2xl text-base md:text-lg ${palette.subtle}`}>
                Compress launch timelines. Accelerate test.<br />
                Maximize test facility ROI.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group inline-flex w-full sm:w-auto whitespace-nowrap justify-center items-center gap-4 rounded-full border px-6 py-4 text-sm font-bold uppercase tracking-[0.25em] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] ${theme === "dark"
                  ? "bg-white text-black border-transparent"
                  : "bg-black text-white border-transparent"
                  }`}
              >
                <span className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full animate-pulse ${theme === "dark" ? "bg-black" : "bg-white"}`} />
                  Request Pilot
                </span>
                <span className="flex items-center group-hover:translate-x-1 transition-transform">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </span>
              </a>
              <div className={`hidden sm:flex w-full sm:w-auto divide-x divide-white/10 overflow-hidden rounded-full border text-xs uppercase ${palette.border}`}>
                {metrics.map((metric) => (
                  <div key={metric.label} className="flex flex-1 flex-col items-center px-3 sm:px-4 py-2 sm:items-start">
                    <span className={`text-[10px] tracking-[0.1em] whitespace-nowrap ${palette.subtle}`}>{metric.label}</span>
                    <span className="text-sm sm:text-base font-semibold tracking-tight">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="min-w-0 w-full">{headerRightWidget ? headerRightWidget : <HeroModeWidget />}</div>
        </header>

        <div className="flex flex-col gap-10">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)_minmax(0,0.9fr)] xl:items-stretch">
            <div className={`order-2 flex flex-col gap-6 rounded-3xl border p-8 transition ${palette.border} ${palette.card} xl:order-1`}>
              <div className="flex items-center justify-between">
                <h3 className="text-xs uppercase tracking-[0.35em]">Data Lifecycle</h3>
                <span className="text-xs uppercase tracking-[0.35em] opacity-60">v1.0</span>
              </div>
              <p className={`text-sm leading-relaxed ${palette.subtle}`}>
                Designed for hardware engineering teams where data clarity outruns everything. Query events from terabytes of historical data in seconds using optimized models.
              </p>
              <div className="grid gap-3">
                {["Real-time data validation", "Standardized ingestion logic", "Unified data standards"].map((item) => (
                  <div key={item} className="relative overflow-hidden rounded-2xl border px-4 py-3 text-xs uppercase tracking-[0.3em] transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(0,0,0,0.18)] dark:hover:shadow-[0_14px_40px_rgba(0,0,0,0.45)]">
                    <span>{item}</span>
                    <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 hover:opacity-100" style={{ background: `radial-gradient(180px circle at 50% 20%, ${palette.glow}, transparent 70%)` }} />
                  </div>
                ))}
              </div>
            </div>

            <figure className="order-1 overflow-hidden rounded-[32px] border transition xl:order-2" style={{ position: "relative" }}>
              <div className="relative w-full pb-[120%] sm:pb-[90%] lg:pb-[72%]">
                {showcaseImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover grayscale transition-all duration-1000 ease-out hover:scale-[1.03] ${idx === activeImageIndex ? "opacity-100" : "opacity-0"
                      }`}
                  />
                ))}
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50 mix-blend-soft-light dark:from-white/10" />
                <div className="pointer-events-none absolute inset-0 border border-white/10 mix-blend-overlay dark:border-white/20" />
                <span className="pointer-events-none absolute -left-16 top-16 h-40 w-40 rounded-full border border-white/15 opacity-70 motion-safe:animate-[hero3-glow_9s_ease-in-out_infinite]" />
                <span className="pointer-events-none absolute -right-12 bottom-16 h-48 w-48 rounded-full border border-white/10 opacity-40 motion-safe:animate-[hero3-drift_12s_ease-in-out_infinite]" />
              </div>
              <figcaption className={`flex items-center justify-between px-6 py-5 text-[10px] uppercase tracking-[0.2em] ${palette.subtle}`}>
                <span className="truncate pr-4">{showcaseImages[activeImageIndex].label}</span>
                <span className="flex items-center gap-2 shrink-0">
                  <span className="h-1 w-6 sm:w-8 bg-current" />
                  <span className="hidden sm:inline">{showcaseImages[activeImageIndex].description}</span>
                </span>
              </figcaption>
            </figure>

            <aside className={`order-3 flex flex-col gap-6 rounded-3xl border p-8 transition ${palette.border} ${palette.card} xl:order-3`}>
              <div className="flex items-center justify-between">
                <h3 className="text-xs uppercase tracking-[0.35em]">Test protocols</h3>
                <span className="text-xs uppercase tracking-[0.35em] opacity-60">Indexed</span>
              </div>
              <ul className="space-y-4">
                {protocols.map((protocol, index) => (
                  <li
                    key={protocol.name}
                    onMouseMove={setSpotlight}
                    onMouseLeave={clearSpotlight}
                    className="group relative overflow-hidden rounded-2xl border px-5 py-4 transition duration-500 hover:-translate-y-0.5"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          theme === "dark"
                            ? "radial-gradient(190px circle at var(--hero3-x, 50%) var(--hero3-y, 50%), rgba(255,255,255,0.18), transparent 72%)"
                            : "radial-gradient(190px circle at var(--hero3-x, 50%) var(--hero3-y, 50%), rgba(17,17,17,0.12), transparent 72%)",
                      }}
                    />
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.25em]">{protocol.name}</h4>
                      <span className="text-[10px] uppercase tracking-[0.35em] opacity-70">{protocol.status}</span>
                    </div>
                    <p className={`mt-3 text-sm leading-relaxed ${palette.subtle}`}>{protocol.detail}</p>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
          {children}
        </div>
      </section>
    </div>
  );
}

export default HeroOrbitDeck;
export { HeroOrbitDeck };
