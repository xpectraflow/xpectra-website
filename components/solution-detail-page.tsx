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
import { solutionsData, satelliteAITData } from '@/lib/solutions-data';

export default function SolutionDetailPage({ slug }: { slug: string }) {
  const data = solutionsData[slug] || solutionsData.satellite || solutionsData.aerospace;
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeAITPhase, setActiveAITPhase] = useState(0);
  const isSatellitePage = slug === "satellite";

  const defaultCarousel = [
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

  const satelliteCarousel = [
    {
      title: "2. EMI/EMC Anechoic Chamber Non-Interference",
      desc: "Electromagnetic Interference / Electromagnetic Compatibility testing in an anechoic chamber. Conducted & radiated emissions checks ensure transponders, power buses, batteries, and thrusters don't cross-interfere.",
      img: "/satellite-emc-chamber.png"
    },
    {
      title: "3. CATR RF Pattern & Gravity-Offload Array Deployment",
      desc: "Compact Antenna Test Range (CATR) pattern testing & link budget verification. Solar array and antenna deployment testing using gravity-offload rigs (simulating 0g deployment).",
      img: "/stage-hardware-binding.png"
    },
    {
      title: "5. HIL Simulation & Software Validation Test Bed (ISRO AOCS)",
      desc: "Hardware-in-the-Loop simulation & ISRO Software Validation Test Bed for AOCS (Attitude & Orbit Control System) validation. Mission sequence rehearsal & Day-in-the-Life (DITL) testing.",
      img: "/stage-realtime-ingest.png"
    }
  ];

  const carouselItems = isSatellitePage ? satelliteCarousel : defaultCarousel;

  return (
    <div className="relative min-h-screen w-full bg-[#050608] text-white overflow-x-hidden">
      <Header />

      <main className="pt-24 pb-24 space-y-24">
        {/* 1. HERO SECTION (Sift Style: Dark Atmospheric Backdrop with Video Banner) */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-white/10">
          {/* Background Media / Video Overlay */}
          <div className="absolute inset-0 bg-black z-0">
            <img
              src={data.heroImage}
              alt={data.title}
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
              <span>ISRO (URSC/ISAC, SDSC-SHAR) & SPACEX (HAWTHORNE/STARBASE) AIT FLOW</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
            >
              {isSatellitePage ? "Satellite AIT & Ground Segment Validation" : data.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-2xl font-light text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              {isSatellitePage
                ? "Standard Assembly, Integration & Testing (AIT/ATLO) with nanosecond telemetry precision from cleanroom TVAC chambers to on-orbit commissioning."
                : data.tagline}
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
                  <span>Explore AIT Pipeline</span>
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
                <span>{isSatellitePage ? "01 / QUALIFICATION & ACCEPTANCE" : "XPECTRA FOR AEROSPACE"}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                {isSatellitePage
                  ? "Thermal Vacuum (TVAC/TBTV) & Multi-Axis Dynamic Telemetry"
                  : "Every sensor lands at the rate it was recorded, up to 10kHz and beyond"}
              </h2>
              <p className="text-white/70 text-base leading-relaxed font-light">
                {isSatellitePage
                  ? "Simulate orbital vacuum with hot/soak/cold cycles in TVAC chambers while logging thousands of thermistors, heaters, and vacuum pressure channels. ISRO standard Thermal Balance Thermal Vacuum (TBTV) tests in the Space Simulation Chamber (ISAC/URSC/IISU) run with zero packet drop, capturing transient thermal spikes and vibration loads."
                  : "Ingest tens of thousands of data channels at the rate each sensor recorded, up to 10kHz and beyond, with sub-second latency from sensor to simulation to flight test. Capture everything, so a pressure spike lasting microseconds reads as clearly as a slow thermal drift."}
              </p>

              {/* Sub-capabilities tags */}
              {isSatellitePage && (
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="font-bold text-white mb-0.5">TVAC / TBTV Cycling</div>
                    <div className="text-white/60 text-[11px]">ISRO URSC simulation chamber thermal math model validation</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="font-bold text-white mb-0.5">Mechanical & Mass</div>
                    <div className="text-white/60 text-[11px]">Vibration, acoustic max-Q, shock & CG/MOI spin balance</div>
                  </div>
                </div>
              )}

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
                  src={isSatellitePage ? "/satellite-tvac-chamber.png" : "/aerospace-ui.png"}
                  alt={isSatellitePage ? "Satellite TVAC Chamber Telemetry" : "Sift Aerospace Telemetry Dashboard"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90 bg-black/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                    <span>{isSatellitePage ? "TVAC CHAMBER MONITORING ONLINE" : "HIGH-FREQUENCY INGEST ACTIVE"}</span>
                  </span>
                  <span className="text-white font-bold">{isSatellitePage ? "8.9E-07 Torr" : "> 10,000 Hz"}</span>
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
                  {isSatellitePage ? "RF, EMC & Software Validation Workflows" : "Designed for Mission-Critical Fidelity"}
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : carouselItems.length - 1))}
                  className="p-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveSlide((prev) => (prev < carouselItems.length - 1 ? prev + 1 : 0))}
                  className="p-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Slider Card Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-block text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/10">
                  FEATURE 0{activeSlide + 1} / 0{carouselItems.length}
                </div>
                <h3 className="text-2xl font-bold text-white leading-snug">
                  {carouselItems[activeSlide].title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed font-light">
                  {carouselItems[activeSlide].desc}
                </p>
                <div className="flex items-center gap-2 pt-2">
                  {carouselItems.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeSlide ? "w-8 bg-white" : "w-2 bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-xl">
                  <img
                    src={carouselItems[activeSlide].img}
                    alt={carouselItems[activeSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SIFT PROGRAM TIMELINE (01 DEVELOP -> 02 VALIDATE -> 03 OPERATE) */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
              {isSatellitePage
                ? "One telemetry platform from cleanroom AIT to orbital commissioning"
                : "One platform, from your first prototype to your orbital fleet"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 01: DEVELOP / AIT */}
            <div className="rounded-3xl border border-white/10 bg-[#0c0d10] p-8 flex flex-col justify-between hover:border-white/30 transition-all">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 font-bold">
                    01
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-wider uppercase">
                    {isSatellitePage ? "4. FUNCTIONAL & AIT/ATLO" : "DEVELOP"}
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>{isSatellitePage ? "SpaceX ATLO & ISRO AIT integration campaign flows." : "Validate your flight software and subsystems across every phase of development."}</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>{isSatellitePage ? "Comprehensive Performance Test (CPT) baseline, post-env & pre-ship." : "Trace anomalies across your control surfaces, avionics, and propulsion."}</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>{isSatellitePage ? "Bus & payload integration, TT&C loop tests, static load & modal survey." : "Build faster with insight from every test and simulation."}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 02: VALIDATE / PRE-LAUNCH */}
            <div className="rounded-3xl border border-white/10 bg-[#0c0d10] p-8 flex flex-col justify-between hover:border-white/30 transition-all">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 font-bold">
                    02
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-wider uppercase">
                    {isSatellitePage ? "7 & 8. LAUNCH SITE & SPACEX" : "VALIDATE"}
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>{isSatellitePage ? "SDSC SHAR (ISRO) & Cape Canaveral / Vandenberg / Starbase (SpaceX) pre-launch." : "Automated structural and thermal checks speed up campaign sign-off."}</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>{isSatellitePage ? "Propellant fueling, Final Health Check (FHC), encapsulation & mate/de-mate." : "Produce structured evidence for AS9100, FAA, and ITAR compliance."}</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>{isSatellitePage ? "SpaceX PPF facility processing, Wet Dress Rehearsal (WDR) & static fire." : "Eliminate manual data wrangling between environmental tests."}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 03: OPERATE / ON-ORBIT */}
            <div className="rounded-3xl border border-white/10 bg-[#0c0d10] p-8 flex flex-col justify-between hover:border-white/30 transition-all">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 font-bold">
                    03
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-wider uppercase">
                    {isSatellitePage ? "9. ON-ORBIT & LEOP" : "OPERATE"}
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>{isSatellitePage ? "LEOP (Launch and Early Orbit Phase) acquisition & solar array locking." : "Monitor propulsion, control, and fleet health in real time."}</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>{isSatellitePage ? "In-Orbit Testing (IOT) checks all satellite subsystems post-launch." : "Evaluate telemetry at high frequency during flight operations."}</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>{isSatellitePage ? "Commissioning phase handoff to mission ops and payload customers." : "Compare flight performance against vehicle test history."}</span>
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

        {/* 7. NEW SATELLITE AIT 9-PHASE VISUAL CAMPAIGN NAVIGATOR WITH IMAGES & CARDS */}
        {isSatellitePage && (
          <section className="max-w-7xl mx-auto px-6 lg:px-8" id="ait-validation-flow">
            <div className="rounded-3xl border border-white/15 bg-[#0c0d10] p-8 md:p-12 shadow-2xl relative overflow-hidden">
              
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-white/90 mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>9-PHASE SATELLITE AIT & GROUND SEGMENT PIPELINE</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {satelliteAITData.title}
                </h2>
                <p className="text-white/70 text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed">
                  {satelliteAITData.subtitle}
                </p>
              </div>

              {/* 9-Phase Tab Selector Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-white/10">
                {satelliteAITData.sections.map((sec, idx) => (
                  <button
                    key={sec.id}
                    onClick={() => setActiveAITPhase(idx)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-mono shrink-0 transition-all flex items-center gap-2 border ${
                      activeAITPhase === idx
                        ? 'bg-white text-black font-bold border-white shadow-lg scale-[1.03]'
                        : 'bg-white/5 text-white/70 hover:text-white border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                      activeAITPhase === idx ? 'bg-black text-white font-bold' : 'bg-white/10 text-white/80'
                    }`}>
                      0{sec.id}
                    </span>
                    <span>{sec.shortName || `Phase 0${sec.id}`}</span>
                  </button>
                ))}
              </div>

              {/* Featured Active Phase Visual Display Card */}
              {(() => {
                const currentSec = satelliteAITData.sections[activeAITPhase] || satelliteAITData.sections[0];
                return (
                  <div className="rounded-2xl border border-white/20 bg-zinc-950/90 p-6 md:p-10 mb-16 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      
                      {/* Left Details Column */}
                      <div className="lg:col-span-6 space-y-6">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-bold">
                            PHASE 0{currentSec.id} / 09
                          </span>
                          <span className="text-xs font-mono text-white/60">
                            {currentSec.badge}
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                          {currentSec.title}
                        </h3>

                        {currentSec.subsections ? (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                            {currentSec.subsections.map((sub, sIdx) => (
                              <div key={sIdx} className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/25 hover:bg-white/[0.07] transition-all flex flex-col justify-between min-h-[180px]">
                                <div>
                                  <div className="flex items-center justify-between text-[10px] font-mono font-bold text-white/90 uppercase tracking-wider mb-2.5 pb-1.5 border-b border-white/10">
                                    <span>{sub.category}</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                                  </div>
                                  <div className="space-y-2.5">
                                    {sub.items.map((item, iIdx) => (
                                      <div key={iIdx} className="text-xs space-y-0.5">
                                        <div className="font-semibold text-white flex items-start gap-1.5">
                                          <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                                          <span>{item.name}</span>
                                        </div>
                                        <p className="text-[11px] text-white/60 pl-5 font-light leading-relaxed">
                                          {item.desc}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            {currentSec.items?.map((item, iIdx) => (
                              <div key={iIdx} className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/25 hover:bg-white/[0.07] transition-all flex flex-col justify-between min-h-[90px]">
                                <div>
                                  <div className="text-xs font-bold text-white mb-1 flex items-start gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                                    <span>{item.name}</span>
                                  </div>
                                  <p className="text-[11px] text-white/60 font-light leading-relaxed pl-5">
                                    {item.desc}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Phase Navigation Controls */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <button
                            disabled={activeAITPhase === 0}
                            onClick={() => setActiveAITPhase((prev) => Math.max(0, prev - 1))}
                            className="text-xs font-mono px-4 py-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/15 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1.5"
                          >
                            <ChevronLeft className="w-4 h-4" />
                            <span>Previous Phase</span>
                          </button>

                          <span className="text-xs font-mono text-white/50">
                            {activeAITPhase + 1} of {satelliteAITData.sections.length}
                          </span>

                          <button
                            disabled={activeAITPhase === satelliteAITData.sections.length - 1}
                            onClick={() => setActiveAITPhase((prev) => Math.min(satelliteAITData.sections.length - 1, prev + 1))}
                            className="text-xs font-mono px-4 py-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/15 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1.5"
                          >
                            <span>Next Phase</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>

                      </div>

                      {/* Right Visual Image Card */}
                      <div className="lg:col-span-6">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl group">
                          <img
                            src={currentSec.img}
                            alt={currentSec.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                          
                          {/* Live Telemetry Overlay */}
                          <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md p-3.5 rounded-xl border border-white/15 flex items-center justify-between text-xs font-mono">
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                              <span className="text-white font-bold uppercase">{currentSec.badge}</span>
                            </div>
                            <span className="text-white/70">ISRO / SPACEX READY</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })()}

              {/* 9-CARD VISUAL GRID AT A GLANCE (Showing ALL 9 Phases with Images) */}
              <div className="border-t border-white/10 pt-12">
                <div className="text-center mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Full 9-Phase AIT Campaign Visual Overview
                  </h3>
                  <p className="text-xs md:text-sm text-white/60 mt-1">
                    Click any phase card to jump into detailed telemetry view
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {satelliteAITData.sections.map((sec, sIdx) => (
                    <div
                      key={sec.id}
                      onClick={() => setActiveAITPhase(sIdx)}
                      className={`rounded-2xl border p-5 transition-all cursor-pointer flex flex-col justify-between group ${
                        activeAITPhase === sIdx
                          ? 'border-white bg-white/10 shadow-2xl scale-[1.02]'
                          : 'border-white/10 bg-zinc-950/80 hover:border-white/30 hover:bg-white/5'
                      }`}
                    >
                      <div>
                        {/* Thumbnail Image */}
                        <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 mb-4 bg-black">
                          <img
                            src={sec.img}
                            alt={sec.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono font-bold text-white border border-white/20">
                            PHASE 0{sec.id}
                          </div>
                        </div>

                        <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                          {sec.title}
                        </h4>

                        <p className="text-[11px] text-white/60 line-clamp-3 leading-relaxed font-light">
                          {sec.subsections
                            ? sec.subsections.map(s => s.category).join(', ')
                            : sec.items?.map(i => i.name).join(' · ')}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/70">
                        <span>{sec.badge}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        )}

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
