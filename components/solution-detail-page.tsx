"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Sparkles,
  Quote,
  ChevronRight,
  Play,
  MessageSquare,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Activity,
  Cpu,
  Layers,
  BarChart3,
  Sliders,
  Database,
  Lock,
  Globe,
  Share2,
  Zap,
  Radio,
  FileCode2,
  ChevronLeft
} from 'lucide-react';
import { solutionsData } from '@/lib/solutions-data';

export default function SolutionDetailPage({ slug }: { slug: string }) {
  const data = solutionsData[slug] || solutionsData.aerospace;
  const [activeSlide, setActiveSlide] = useState(0);

  const capabilitiesCarousel = [
    {
      title: "Every sample stays at its original rate",
      desc: "Your simulations, test beds, and flight tests stream into one timeline at the rate they were recorded. Separating storage from compute keeps every data channel queryable for the life of your program.",
      img: "/transient-capture.png"
    },
    {
      title: "Rules and baselines flag anomalies the moment they appear",
      desc: "Rules your team writes run continuously against incoming telemetry and flag deviations the moment they appear. What one teammate catches informs a new baseline your whole team uses for every future test.",
      img: "/timestamp-sync.png"
    },
    {
      title: "Root cause and certification evidence come from one place",
      desc: "Explore and Calculated Channels trace anomalies to their source, and Reports generate structured, shareable evidence for AS9100, FAA, and ITAR review.",
      img: "/airgapped-nvme.png"
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#050608] text-white overflow-x-hidden">
      <Header />

      <main className="pt-24 pb-24 space-y-24">
        {/* 1. HERO SECTION (Sift Style: Dark Atmospheric Backdrop with Video Banner) */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-white/10">
          {/* Background Media / Video Overlay */}
          <div className="absolute inset-0 bg-black z-0">
            <img
              src="/aerospace-ui.png"
              alt="Aerospace Telemetry"
              className="w-full h-full object-cover opacity-25 scale-105 filter blur-xs"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/70 to-[#050608]/40" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-60" />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-white/90 mb-6 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>SIFT-GRADE TELEMETRY FOR {data.title.toUpperCase()}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
            >
              {data.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-2xl font-light text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Capture data at the rate your sensors record it and cut flight-test review from days to hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a href="https://app.xpectraflow.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold px-8 h-13 rounded-xl text-base shadow-xl shadow-white/10">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#explore-platform">
                <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 h-13 rounded-xl text-base gap-2 backdrop-blur-md">
                  <Play className="w-4 h-4 fill-white/80" />
                  <span>Launch Platform UI</span>
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* 2. SIFT FEATURE DEEP-DIVE 1 (Text + Media Ingestion Grid) */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8" id="explore-platform">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white/60 font-semibold">
                <Radio className="w-4 h-4 text-white" />
                <span>XPECTRA FOR AEROSPACE</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Every sensor lands at the rate it was recorded, up to 10kHz and beyond
              </h2>
              <p className="text-white/70 text-base leading-relaxed font-light">
                Ingest tens of thousands of data channels at the rate each sensor recorded, up to 10kHz and beyond, with sub-second latency from sensor to simulation to flight test. Capture everything, so a pressure spike lasting microseconds reads as clearly as a slow thermal drift, and your flight-test review runs the moment telemetry lands.
              </p>
              <div className="pt-2">
                <a href="https://app.xpectraflow.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold px-7 h-12 rounded-xl text-sm">
                    Request a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Media (Telemetry Ingestion UI Display) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl group">
                <img
                  src="/aerospace-ui.png"
                  alt="Sift Aerospace Telemetry Dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90 bg-black/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                    <span>HIGH-FREQUENCY INGEST ACTIVE</span>
                  </span>
                  <span className="text-white font-bold">&gt; 10,000 Hz</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CAPABILITIES CAROUSEL / 3-CARD SHOWCASE (Sift Interactive Slider Style) */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-[#0c0d10] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
            {/* Header + Nav Arrows */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/60 font-bold block mb-1">
                  PLATFORM CAPABILITIES
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Designed for Mission-Critical Fidelity
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : capabilitiesCarousel.length - 1))}
                  className="p-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveSlide((prev) => (prev < capabilitiesCarousel.length - 1 ? prev + 1 : 0))}
                  className="p-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Carousel Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {capabilitiesCarousel.map((item, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer ${
                    activeSlide === idx
                      ? 'border-white/40 bg-white/[0.06] shadow-2xl scale-[1.02]'
                      : 'border-white/10 bg-zinc-950/60 opacity-60 hover:opacity-100 hover:border-white/20'
                  }`}
                >
                  <div>
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 mb-6 bg-black">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SIFT PROGRAM TIMELINE (01 DEVELOP -> 02 VALIDATE -> 03 OPERATE) */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
              One platform, from your first prototype to your orbital fleet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 01: DEVELOP */}
            <div className="rounded-3xl border border-white/10 bg-[#0c0d10] p-8 flex flex-col justify-between hover:border-white/30 transition-all">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 font-bold">
                    01
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-wider uppercase">
                    DEVELOP
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>Validate your flight software and subsystems across every phase of development.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>Trace anomalies across your control surfaces, avionics, and propulsion.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>Build faster with insight from every test and simulation.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 02: VALIDATE */}
            <div className="rounded-3xl border border-white/10 bg-[#0c0d10] p-8 flex flex-col justify-between hover:border-white/30 transition-all">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 font-bold">
                    02
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-wider uppercase">
                    VALIDATE
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>Run automated checks on your structural, thermal, and EMI data to catch issues early.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>Track parts, configs, and test results across your vehicles with full traceability.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>Generate structured evidence for FAA, AS9100, and ITAR review in minutes.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 03: OPERATE */}
            <div className="rounded-3xl border border-white/10 bg-[#0c0d10] p-8 flex flex-col justify-between hover:border-white/30 transition-all">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 font-bold">
                    03
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-wider uppercase">
                    OPERATE
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>Monitor propulsion, thermal, and control systems in real time across your vehicles and fleets.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>Surface off-nominal behavior the moment it appears, using rules your team writes.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>Catch component wear early by trending temperature, vibration, and power draw across your fleet.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. HIGH-IMPACT STATEMENT BANNER (Sift Banner Style) */}
        <section className="relative py-28 overflow-hidden border-y border-white/10 bg-black">
          <img
            src="/hotfire-stand.png"
            alt="Rocket engine hot-fire"
            className="absolute inset-0 w-full h-full object-cover opacity-20 filter blur-xs"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              One interface. One data model.
            </h2>
          </div>
        </section>

        {/* 6. KEY ARCHITECTURE GRID (Visualize. Validate. Operate. Evolve) */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Visualize. Validate. Operate. Evolve.
            </h2>
            <p className="text-white/60 text-base max-w-2xl mx-auto font-light">
              Xpectra replaces siloed tools and ad hoc dashboards with a mission-grade observability platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Unify Telemetry */}
            <div className="rounded-2xl border border-white/10 bg-[#0c0d10] p-6 hover:border-white/30 transition-all flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit text-white mb-6">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase mb-2">
                  Unify your telemetry
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  Unified telemetry, simulation, and operations data. Real-time and historical analysis at full fidelity.
                </p>
              </div>
            </div>

            {/* Card 2: Full Fidelity */}
            <div className="rounded-2xl border border-white/10 bg-[#0c0d10] p-6 hover:border-white/30 transition-all flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit text-white mb-6">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase mb-2">
                  Full fidelity analysis
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  Real-time and historical analysis at full fidelity with microsecond timestamp alignment.
                </p>
              </div>
            </div>

            {/* Card 3: Anomaly Detection */}
            <div className="rounded-2xl border border-white/10 bg-[#0c0d10] p-6 hover:border-white/30 transition-all flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit text-white mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase mb-2">
                  Anomaly detection
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  Rules-based validation, automated anomaly detection, and instant notification alerts.
                </p>
              </div>
            </div>

            {/* Card 4: Sharing & Permissions */}
            <div className="rounded-2xl border border-white/10 bg-[#0c0d10] p-6 hover:border-white/30 transition-all flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit text-white mb-6">
                  <Share2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase mb-2">
                  Sharing and permissions
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  Shareable views, annotations, and version-controlled reports for compliance review.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FORMAT COMPATIBILITY & DEPLOYMENT ENVIRONMENTS (Sift Ingestion Grid) */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-[#0c0d10] p-8 lg:p-12 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Your team ingests any aerospace telemetry, at the rate each sensor recorded
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-white/10 bg-zinc-950 flex flex-col justify-between">
                <FileCode2 className="w-8 h-8 text-white mb-4" />
                <p className="text-sm text-white/80 font-light leading-relaxed">
                  Ingest your telemetry in any format: <span className="text-white font-mono font-semibold">CSV, PX4, ULOG, ROS, TDMS, Parquet, HDF5</span>, and more.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-zinc-950 flex flex-col justify-between">
                <Lock className="w-8 h-8 text-white mb-4" />
                <p className="text-sm text-white/80 font-light leading-relaxed">
                  Run in your environment: <span className="text-white font-mono font-semibold">On-Prem, GovCloud, VPC</span>, or classified networks.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-zinc-950 flex flex-col justify-between">
                <Globe className="w-8 h-8 text-white mb-4" />
                <p className="text-sm text-white/80 font-light leading-relaxed">
                  Operate through <span className="text-white font-mono font-semibold">disconnected and low-bandwidth conditions</span> with local edge ring buffers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. BOTTOM CTA (Dual Buttons: Request Demo / Contact Sales) */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-12 lg:p-16 relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Ready to transform your aerospace telemetry?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg mb-8 font-light">
              Connect your test stand, vehicle fleet, or edge sensors in under 15 minutes with our native edge binaries.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://app.xpectraflow.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold px-8 h-13 rounded-xl text-base shadow-lg shadow-white/10">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:sales@xpectraflow.com">
                <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 h-13 rounded-xl text-base gap-2">
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Contact Sales</span>
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
