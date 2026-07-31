"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import {
    ArrowRight, ChevronRight, Check, Code2, Database, Activity, Play, Pause, FastForward,
    RotateCcw, Search, Terminal, Cpu, Zap, GitBranch, Github, Layers, Server, Shield,
    Sparkles, Sliders, BarChart3, LineChart, FileText, ArrowUpRight, Copy, Share2, Globe,
    Lock, Workflow, Radio, HardDrive, RefreshCw, Box, ExternalLink, Calculator, Gauge,
    Rocket, Car, Bot
} from 'lucide-react';

function cn(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}

/* =========================================================================
   STICKY SECTION NAVIGATION (xpectraflow.com Dark Glassmorphism Theme)
   ========================================================================= */
const SectionNav = () => {
    const [activeSection, setActiveSection] = useState('formats');

    const navItems = [
        { id: 'formats', label: 'Formats' },
        { id: 'playback', label: 'Playback' },
        { id: 'playground', label: 'Playground' },
        { id: 'statistics', label: 'Statistics' },
        { id: 'realtime', label: 'Real-Time' },
        { id: 'opensource', label: 'Open Source' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPos = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPos) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="sticky top-16 z-30 w-full bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
                <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-2">
                    {navItems.map(item => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={cn(
                                "px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-[0.15em] transition-all whitespace-nowrap",
                                activeSection === item.id
                                    ? "bg-white text-black font-semibold shadow-md"
                                    : "text-white/60 hover:text-white hover:bg-white/10"
                            )}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
                <div className="hidden md:flex items-center gap-3 font-mono text-[11px] text-white/40 uppercase tracking-widest">
                    <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        API v2.4 Active
                    </span>
                </div>
            </div>
        </div>
    );
};

/* =========================================================================
   MOCKUP CONTAINER (16:9 GIF / Video Placeholder - xpectraflow.com Frame)
   ========================================================================= */
interface VideoPlaceholderProps {
    title: string;
    tag: string;
    videoSrc?: string;
    poster?: string;
    children?: React.ReactNode;
}

const VideoPlaceholder = ({ title, tag, videoSrc, poster, children }: VideoPlaceholderProps) => {
    const isYouTube = videoSrc && (videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be'));
    const isVimeo = videoSrc && videoSrc.includes('vimeo.com');

    if (poster && !videoSrc) {
        return (
            <div className="w-full aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0c0d10]/95 relative group transition-all duration-500 hover:border-white/25 flex items-center justify-center">
                <img
                    src={poster}
                    alt={title}
                    className="w-full h-full object-cover bg-black/90"
                />
            </div>
        );
    }

    return (
        <div className="w-full aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0c0d10]/95 relative group transition-all duration-500 hover:border-white/25">
            {/* Header bar of developer tool */}
            <div className="h-10 bg-white/[0.03] border-b border-white/10 px-5 flex items-center justify-between text-xs text-white/50 font-mono z-10 relative">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    </div>
                    <span className="ml-3 text-white/80 font-medium text-[11px] tracking-wide">{title}</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white/90 text-[10px] font-mono font-semibold uppercase tracking-widest">
                    {tag}
                </span>
            </div>

            {/* Content: Video / GIF or Fallback Mockup UI */}
            {videoSrc ? (
                <div className="w-full h-[calc(100%-2.5rem)] relative overflow-hidden bg-black flex items-center justify-center">
                    {isYouTube || isVimeo ? (
                        <iframe
                            src={videoSrc}
                            title={title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full border-0"
                        />
                    ) : (
                        <video
                            src={videoSrc}
                            poster={poster}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>
            ) : (
                <div className="p-6 h-[calc(100%-2.5rem)] relative flex flex-col justify-between overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
                    {children}

                    {/* Corner Video Label Indicator */}
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                        <VideoIcon className="w-3.5 h-3.5 text-white/80" />
                        <span>Video / GIF Supported</span>
                    </div>
                </div>
            )}
        </div>
    );
};

const VideoIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
    </svg>
);

interface MockupProps {
    videoSrc?: string;
    poster?: string;
}

/* =========================================================================
   MOCKUP 1: FORMAT DETECTION & PARSING PIPELINE
   ========================================================================= */
const FormatMockup = ({ videoSrc, poster }: MockupProps) => {
    return (
        <VideoPlaceholder title="xpectra-ingest --detect-schema" tag="Format Engine" videoSrc={videoSrc} poster={poster ?? "/xpectra-core-diagram.jpg"}>
            <div className="space-y-3 font-mono text-xs text-white/80">
                <div className="flex items-center justify-between text-[11px] text-white/50 border-b border-white/10 pb-2">
                    <span>Input Stream: <strong className="text-white">flight_campaign_04.tdms</strong></span>
                    <span className="text-emerald-400 font-semibold">✓ Auto-Detected Schema</span>
                </div>
                <div className="space-y-2 text-[11px]">
                    <div className="flex items-center gap-2 text-white/70">
                        <span className="text-white/40">01</span>
                        <span>Ingesting TDMS Binary Header (NI-DAQmx 2026.1)</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                        <span className="text-white/40">02</span>
                        <span>Extracted 256 telemetry channels @ 100 kHz sample rate</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 font-bold">
                        <span>03</span>
                        <span>Converted byte stream -&gt; Apache Arrow Columnar Chunk [Zero-Copy]</span>
                    </div>
                </div>

                <div className="pt-2 grid grid-cols-3 gap-2 text-center">
                    <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-[10px]">
                        <span className="text-white/40 block uppercase tracking-wider">Channels</span>
                        <strong className="text-white font-bold text-xs">256 CH</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-[10px]">
                        <span className="text-white/40 block uppercase tracking-wider">Sampling</span>
                        <strong className="text-white font-bold text-xs">100,000 Hz</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-[10px]">
                        <span className="text-white/40 block uppercase tracking-wider">Dropouts</span>
                        <strong className="text-emerald-400 font-bold text-xs">0.00 %</strong>
                    </div>
                </div>
            </div>
        </VideoPlaceholder>
    );
};

/* =========================================================================
   MOCKUP 2: INTERACTIVE PLAYBACK CONTROL UI
   ========================================================================= */
const PlaybackMockup = ({ videoSrc, poster }: MockupProps) => {
    const [progress, setProgress] = useState(38);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        if (!isPlaying) return;
        const interval = setInterval(() => {
            setProgress(p => (p >= 100 ? 0 : p + 1.2));
        }, 100);
        return () => clearInterval(interval);
    }, [isPlaying]);

    return (
        <VideoPlaceholder title="Telemetry Playback --session-id=4821" tag="Playback UI" videoSrc={videoSrc ?? "/video.engin.mp4"} poster={poster ?? "/dashboard-preview.png"}>
            <div className="flex flex-col justify-between h-full font-mono text-xs">
                <div className="flex items-center justify-between text-[11px] text-white/50">
                    <span>TIMECODE: <strong className="text-white">00:14:{(progress * 0.6).toFixed(2)}s</strong></span>
                    <span className="text-white/80 font-bold">SPEED: 1.0x (REALTIME)</span>
                </div>

                {/* Animated multi-channel signal waveform */}
                <div className="h-24 bg-black/60 rounded-xl border border-white/10 p-3 flex flex-col justify-end relative overflow-hidden">
                    <div className="absolute top-2 left-2 text-[10px] text-white/40">Ch_1: Vibration_X | Ch_2: Temp_Core</div>
                    <div className="w-full h-14 flex items-end gap-1">
                        {Array.from({ length: 36 }).map((_, i) => {
                            const val = Math.abs(Math.sin((i + progress / 2) * 0.3)) * 80 + 15;
                            return (
                                <div
                                    key={i}
                                    style={{ height: `${val}%` }}
                                    className={cn(
                                        "flex-1 rounded-t transition-all duration-75",
                                        i * 2.77 <= progress ? "bg-white" : "bg-white/15"
                                    )}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* Control bar */}
                <div className="flex items-center gap-3 pt-1">
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-8 h-8 rounded-full bg-white hover:bg-slate-200 text-black flex items-center justify-center transition-transform hover:scale-105 shrink-0"
                    >
                        {isPlaying ? <Pause className="w-3.5 h-3.5 fill-black" /> : <Play className="w-3.5 h-3.5 fill-black ml-0.5" />}
                    </button>
                    <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-white" style={{ width: `${progress}%` }} />
                    </div>
                </div>
            </div>
        </VideoPlaceholder>
    );
};

/* =========================================================================
   MOCKUP 3: DATA PLAYGROUND CODE NOTEBOOK
   ========================================================================= */
const PlaygroundMockup = ({ videoSrc, poster }: MockupProps) => {
    return (
        <VideoPlaceholder title="Xpectra Playground --notebook.ipynb" tag="Data Playground" videoSrc={videoSrc} poster={poster ?? "/dashboard-preview.png"}>
            <div className="space-y-3 font-mono text-xs">
                {/* Code Cell */}
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                    <p className="text-white/40 text-[10px]">In [1]: <span className="text-white font-bold">import</span> xpectra <span className="text-white font-bold">as</span> xp</p>
                    <p className="text-white/90 text-[11px]">
                        df = xp.query(<span className="text-emerald-400">&quot;SELECT timestamp, vibe_x, temp_a FROM 'test_run_09'&quot;</span>)
                    </p>
                    <p className="text-white/90 text-[11px]">
                        df.<span className="text-yellow-300">plot_cross_channel</span>(x=<span className="text-emerald-400">&quot;timestamp&quot;</span>, window=<span className="text-emerald-400">&quot;10ms&quot;</span>)
                    </p>
                </div>

                {/* Output Chart Preview */}
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between text-[11px]">
                    <div>
                        <span className="text-white/40 block text-[10px] uppercase">AI Insight</span>
                        <strong className="text-emerald-400">✓ 0 Anomaly breaches detected in 1.4M rows</strong>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-[10px] font-bold">Export Parquet</span>
                </div>
            </div>
        </VideoPlaceholder>
    );
};

/* =========================================================================
   MOCKUP 4: SUPERFAST STATISTICS ENGINE DASHBOARD
   ========================================================================= */
const StatisticsMockup = ({ videoSrc, poster }: MockupProps) => {
    return (
        <VideoPlaceholder title="combuster testing demo" tag="Stats Engine" videoSrc={videoSrc} poster={poster ?? "/hero-sensor.png"}>
            <div className="space-y-3 font-mono text-xs">
                <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 bg-black/60 rounded-xl border border-white/10">
                        <span className="text-[10px] text-white/40 uppercase">Throughput</span>
                        <p className="text-xl font-bold text-white mt-1">10,000,000</p>
                        <p className="text-[10px] text-white/50">samples / 8.4 ms</p>
                    </div>
                    <div className="p-3 bg-black/60 rounded-xl border border-white/10">
                        <span className="text-[10px] text-white/40 uppercase">FFT Decomposition</span>
                        <p className="text-xl font-bold text-emerald-400 mt-1">1024-Point</p>
                        <p className="text-[10px] text-white/50">Real-time spectrum</p>
                    </div>
                </div>

                <div className="p-3 bg-black/60 rounded-xl border border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-white/50">Rolling RMS: <strong className="text-white">4.12 g</strong></span>
                    <span className="text-white/50">Peak Anomaly: <strong className="text-amber-400">+9.82 g</strong></span>
                    <span className="text-white/50">P99 Latency: <strong className="text-emerald-400">&lt; 1 ms</strong></span>
                </div>
            </div>
        </VideoPlaceholder>
    );
};

/* =========================================================================
   MOCKUP 5: REAL-TIME STREAMING PIPELINE
   ========================================================================= */
const RealtimeMockup = ({ videoSrc, poster }: MockupProps) => {
    return (
        <VideoPlaceholder title="Propeller test" tag="Real-Time Engine" videoSrc={videoSrc} poster={poster ?? "/realtime-preview.png"}>
            <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-[11px] border-b border-white/10 pb-2">
                    <span className="text-white/50">Ingestion Protocols: <strong className="text-white">gRPC / MQTT / Kafka</strong></span>
                    <span className="text-white font-bold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        LIVE STREAMING
                    </span>
                </div>

                <div className="p-3 bg-black/60 rounded-xl border border-white/10 space-y-2">
                    <div className="flex justify-between text-[10px] text-white/40">
                        <span>Ring Buffer Usage</span>
                        <span>0.00% Packet Loss</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-white w-[28%]" />
                    </div>
                </div>

                <div className="text-[10px] text-white/60 bg-black/80 p-2.5 rounded-lg border border-white/10">
                    <p className="text-emerald-400">✓ gRPC stream connected: 500,000 msg/sec ingested into memory buffer</p>
                </div>
            </div>
        </VideoPlaceholder>
    );
};

/* =========================================================================
   MOCKUP 6: GITHUB OPEN SOURCE CARD
   ========================================================================= */
const GithubMockup = ({ videoSrc, poster }: MockupProps) => {
    return (
        <div className="w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0c0d10]/95 relative group transition-all duration-500 hover:border-white/25">
            {/* Header bar of developer tool */}
            <div className="h-10 bg-white/[0.03] border-b border-white/10 px-5 flex items-center justify-between text-xs text-white/50 font-mono z-10 relative">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    </div>
                    <span className="ml-3 text-white/80 font-medium text-[11px] tracking-wide">github.com/xpectraflow/xpectra</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white/90 text-[10px] font-mono font-semibold uppercase tracking-widest">
                    Open Source
                </span>
            </div>

            <div className="p-4 space-y-3 font-mono text-xs relative overflow-hidden">
                {/* Subtle Faded GitHub Octocat Watermark */}
                <Github className="absolute -right-8 -bottom-10 w-48 h-48 text-white/[0.04] pointer-events-none -rotate-12" />

                {/* Repository Header with Glowing GitHub Logo */}
                <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-black/70 rounded-2xl border border-white/15 relative z-10 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/20 via-white/10 to-white/5 border border-white/25 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.15)] shrink-0">
                            <Github className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                        </div>
                        <div>
                            <div className="flex items-center gap-1.5">
                                <span className="font-bold text-white text-xs tracking-wide">
                                    xpectraflow / xpectra
                                </span>
                            </div>
                            <p className="text-[9px] text-white/50 font-sans">Open Source Telemetry Core SDK</p>
                        </div>
                    </div>
                    <a
                        href="https://github.com/xpectraflow/xpectra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-black font-bold text-[11px] hover:bg-slate-100 transition-all shadow-md shrink-0 cursor-pointer"
                    >
                        <Github className="w-3.5 h-3.5 text-black" />
                        <span>★ 2.4k Star</span>
                    </a>
                </div>

                {/* Grid Status Metrics */}
                <div className="grid grid-cols-2 gap-2 text-[10px] relative z-10">
                    <div className="p-2.5 bg-black/60 rounded-xl border border-white/10 text-white/80">
                        <span className="text-white/40 block text-[9px] uppercase tracking-wider">Latest Release</span>
                        <strong className="text-emerald-400 font-bold text-[11px] mt-0.5 block">v2.4.0-stable</strong>
                    </div>
                    <div className="p-2.5 bg-black/60 rounded-xl border border-white/10 text-white/80">
                        <span className="text-white/40 block text-[9px] uppercase tracking-wider">CI/CD Pipeline</span>
                        <strong className="text-white font-bold text-[11px] flex items-center gap-1 mt-0.5">
                            <Check className="w-3 h-3 text-emerald-400" /> Passing 100%
                        </strong>
                    </div>
                </div>

                {/* Terminal Quick Clone */}
                <div className="p-2.5 bg-black/80 rounded-xl border border-white/10 flex items-center justify-between text-[10px] relative z-10">
                    <div className="flex items-center gap-1.5 overflow-hidden">
                        <Github className="w-3 h-3 text-white/50 shrink-0" />
                        <span className="text-white/40 truncate">$ <span className="text-white">git clone xpectra.git</span></span>
                    </div>
                    <span className="text-emerald-400 font-semibold text-[9px] uppercase tracking-wider shrink-0 ml-1">MIT</span>
                </div>
            </div>
        </div>
    );
};

/* =========================================================================
   MOCKUP 7: LIGHTWEIGHT CLIENT ARCHITECTURE FLOW
   ========================================================================= */
const ArchitectureMockup = ({ videoSrc, poster }: MockupProps) => {
    return (
        <VideoPlaceholder title="Xpectra Architecture Topology" tag="Architecture" videoSrc={videoSrc} poster={poster}>
            <div className="h-full flex flex-col justify-center font-mono text-xs">
                <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
                    <div className="p-3 bg-black/60 rounded-xl border border-white/10">
                        <span className="text-white font-bold block">Sensors &amp; DAQ</span>
                        <span className="text-white/40">Hardware Layer</span>
                    </div>
                    <div className="p-3 bg-black/60 rounded-xl border border-white/10">
                        <span className="text-emerald-400 font-bold block">Client SDK</span>
                        <span className="text-white/40">Lightweight Agent</span>
                    </div>
                    <div className="p-3 bg-black/60 rounded-xl border border-white/30">
                        <span className="text-white font-bold block">Xpectra Engine</span>
                        <span className="text-white/60">Validation &amp; Ingest</span>
                    </div>
                    <div className="p-3 bg-black/60 rounded-xl border border-white/10">
                        <span className="text-white font-bold block">Storage &amp; UI</span>
                        <span className="text-white/40">Columnar DB / UI</span>
                    </div>
                </div>
                <div className="mt-4 text-center text-[10px] text-white/40">
                    <span>Low Footprint (&lt; 15MB Binary) • Distributed Cloud &amp; Air-Gapped Ready</span>
                </div>
            </div>
        </VideoPlaceholder>
    );
};

/* =========================================================================
   MOCKUP 8: CLIENT ENGINE MOCKUP
   ========================================================================= */
const ClientEngineMockup = ({ videoSrc, poster }: MockupProps) => {
    return (
        <VideoPlaceholder title="xpectra-client-engine --wasmer=v2.4" tag="Client Engine" videoSrc={videoSrc} poster={poster ?? "/client-engine-preview.png"}>
            <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-[11px] border-b border-white/10 pb-2">
                    <span className="text-white/50">Client Runtime: <strong className="text-white">Rust + WASM / SIMD</strong></span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        0ms LATENCY
                    </span>
                </div>
                <div className="p-3 bg-black/60 rounded-xl border border-white/10 space-y-2">
                    <div className="flex justify-between text-[10px] text-white/40">
                        <span>Local Memory Buffer</span>
                        <span>100% Client-Side</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400 w-[85%]" />
                    </div>
                </div>
            </div>
        </VideoPlaceholder>
    );
};

/* =========================================================================
   MAIN PRODUCT PAGE COMPONENT (Exact xpectraflow.com Theme & Fonts)
   ========================================================================= */
const ProductPage = () => {
    const formats = [
        "CSV", "Excel", "TDMS", "MDF / MF4", "CCSDS", "ROS 1 / ROS 2",
        "PX4 ULog", "BIN Logs", "CAN Bus", "MQTT", "JSON", "Parquet",
        "HDF5", "PCAP", "Serial", "TCP / UDP", "WebSocket"
    ];

    return (
        <SiteShell>
            <div className="min-h-screen bg-[#050505] bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:24px_24px] text-white font-sans">

                {/* HERO HEADER */}
                <section className="pt-24 pb-20 px-6 border-b border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none" />

                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] tracking-tight mb-8 font-normal">
                            Infrastructure for mission critical sensor data
                        </h1>

                        <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12 font-sans font-normal">
                            Compress launch timelines. Accelerate test. Maximize test facility ROI.
                        </p>

                        {/* Button + Stats Strip (Exact match to xpectraflow.com screenshot) */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                            <Link href="/#contact">
                                <button className="rounded-full bg-white text-black hover:bg-slate-200 font-semibold px-7 py-4 text-xs tracking-[0.15em] uppercase flex items-center gap-2.5 shadow-2xl transition-transform hover:scale-105 cursor-pointer">
                                    <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
                                    REQUEST PILOT →
                                </button>
                            </Link>

                            <a
                                href="https://github.com/xpectraflow/xpectra"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-7 py-4 rounded-full border border-white/20 bg-white/[0.04] text-white hover:bg-white/10 transition-all font-semibold text-xs tracking-[0.15em] uppercase flex items-center justify-center gap-2.5 hover:scale-105 cursor-pointer shadow-2xl"
                            >
                                <Github className="w-4 h-4 text-white shrink-0" />
                                <span>VIEW ON GITHUB →</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* MAIN ALTERNATING SECTIONS WRAPPER */}
                <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">

                    {/* =========================================================================
                        SECTION 1: Universal Data Format Support (Left Image, Right Content)
                       ========================================================================= */}
                    <section id="formats" className="scroll-mt-36">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            {/* Left Side: 16:9 GIF Placeholder */}
                            <div className="lg:col-span-6">
                                <FormatMockup poster="/xpectra-core-diagram.jpg" />
                            </div>

                            {/* Right Side: Content */}
                            <div className="lg:col-span-6 space-y-6">
                                <div>
                                    <div className="flex items-center justify-between font-mono text-xs text-white/40 tracking-[0.25em] uppercase border-b border-white/10 pb-2 mb-4">
                                        <span>DATA INGESTION</span>
                                        <span>READY</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight font-normal">
                                        Universal Data Format Support
                                    </h2>
                                    <p className="text-white/60 text-base md:text-lg mt-3 leading-relaxed font-sans">
                                        Import telemetry from virtually any engineering data source without manual cleanup or script rewrites.
                                    </p>
                                </div>

                                {/* Supported Formats Badges */}
                                <div className="space-y-3">
                                    <span className="text-xs font-mono font-semibold text-white/40 uppercase tracking-widest">
                                        Supported Native Formats
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {formats.map(fmt => (
                                            <span
                                                key={fmt}
                                                className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white/90 text-xs font-mono font-semibold hover:border-white/30 hover:bg-white/10 transition-all cursor-default"
                                            >
                                                {fmt}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Text */}
                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-white/70 font-mono flex items-center justify-between">
                                    <span>Don&apos;t see your format? Build your own parser using the Xpectra SDK.</span>
                                    <ArrowUpRight className="w-4 h-4 text-white shrink-0 ml-2" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* =========================================================================
                        SECTION 2: Interactive Playback (Right Image, Left Content)
                       ========================================================================= */}
                    <section id="playback" className="scroll-mt-36">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            {/* Left Side: Content */}
                            <div className="lg:col-span-6 space-y-4">
                                <div>
                                    <div className="flex items-center justify-between font-mono text-xs text-white/40 tracking-[0.25em] uppercase border-b border-white/10 pb-1.5 mb-2.5">
                                        <span>TIME REPLAY</span>
                                        <span>SYNCHRONIZED</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight font-normal">
                                        Interactive Playback
                                    </h2>
                                    <p className="text-white/60 text-sm md:text-base mt-2 leading-relaxed font-sans">
                                        Replay recorded telemetry exactly as it happened with nanosecond timestamp sync.
                                    </p>
                                </div>

                                {/* Features List */}
                                <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
                                    {[
                                        { title: "Event Markers", desc: "Automatic incident & anomaly flags." },
                                        { title: "Multi-stream Synchronization", desc: "Align 250+ DAQ channels on one clock." },
                                        { title: "Variable Speed", desc: "Slow-motion to 50x fast forward." },
                                        { title: "Timeline Scrubbing", desc: "Jump to anomaly timecodes instantly." },
                                        { title: "Frame-by-frame Playback", desc: "Inspect microsecond transient glitches." },
                                        { title: "Telemetry Playback", desc: "Frame-accurate stream playback control." }
                                    ].map(f => (
                                        <div key={f.title} className="px-3.5 py-2.5 rounded-xl bg-[#0c0d10]/90 border border-white/10 hover:border-white/20 transition-all">
                                            <h4 className="font-bold text-white text-xs md:text-sm font-sans">{f.title}</h4>
                                            <p className="text-[11px] text-white/50 mt-0.5 leading-normal">{f.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: 16:9 GIF Placeholder */}
                            <div className="lg:col-span-6">
                                <PlaybackMockup videoSrc="/video.engin.mp4" />
                            </div>
                        </div>
                    </section>

                    {/* =========================================================================
                        SECTION 3: Data Playground (Left Image, Right Content)
                       ========================================================================= */}
                    <section id="playground" className="scroll-mt-36">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            {/* Left Side: 16:9 GIF Placeholder */}
                            <div className="lg:col-span-6">
                                <PlaygroundMockup poster="/dashboard-preview.png" />
                            </div>

                            {/* Right Side: Content */}
                            <div className="lg:col-span-6 space-y-4">
                                <div>
                                    <div className="flex items-center justify-between font-mono text-xs text-white/40 tracking-[0.25em] uppercase border-b border-white/10 pb-1.5 mb-2.5">
                                        <span>ANALYTICS SANDBOX</span>
                                        <span>INTERACTIVE</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight font-normal">
                                        Data Playground
                                    </h2>
                                    <p className="text-white/60 text-sm md:text-base mt-2 leading-relaxed font-sans">
                                        Explore telemetry without writing complex data processing pipelines.
                                    </p>
                                </div>

                                {/* Features List */}
                                <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
                                    {[
                                        { title: "AI Assisted Analysis", desc: "Natural language query & anomaly flags." },
                                        { title: "Signal Plotting", desc: "Multi-channel zoom-linked browser charts." },
                                        { title: "Compare Channels", desc: "Overlay test campaign signals side-by-side." },
                                        { title: "SQL Query", desc: "Execute ANSI SQL directly on time-series." },
                                        { title: "Python Notebook", desc: "Integrated Pandas & Polars Jupyter kernels." },
                                        { title: "Export Results", desc: "One-click export to Parquet, CSV, or Arrow." }
                                    ].map(f => (
                                        <div key={f.title} className="px-3.5 py-2.5 rounded-xl bg-[#0c0d10]/90 border border-white/10 hover:border-white/20 transition-all">
                                            <h4 className="font-bold text-white text-xs md:text-sm font-sans">{f.title}</h4>
                                            <p className="text-[11px] text-white/50 mt-0.5 leading-normal">{f.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* =========================================================================
                        SECTION 4: Superfast Statistics Engine (Right Image, Left Content)
                       ========================================================================= */}
                    <section id="statistics" className="scroll-mt-36">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            {/* Left Side: Content */}
                            <div className="lg:col-span-6 space-y-6">
                                <div>
                                    <div className="flex items-center justify-between font-mono text-xs text-white/40 tracking-[0.25em] uppercase border-b border-white/10 pb-2 mb-4">
                                        <span>PERFORMANCE ENGINE</span>
                                        <span>SIMD / GPU</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight font-normal">
                                        Superfast Statistics Engine
                                    </h2>
                                    <p className="text-white/60 text-base md:text-lg mt-3 leading-relaxed font-sans">
                                        Built for millions of telemetry samples with sub-second aggregate computation.
                                    </p>
                                </div>

                                {/* Features Badges Grid */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {[
                                        "Mean", "RMS", "FFT", "Peak Detection",
                                        "Histogram", "Window Functions", "Rolling Statistics",
                                        "Correlation", "Custom Formula Engine"
                                    ].map(stat => (
                                        <span
                                            key={stat}
                                            className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-white/90 text-xs font-mono font-semibold hover:border-white/30 transition-all cursor-default"
                                        >
                                            ✓ {stat}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: Image / Mockup */}
                            <div className="lg:col-span-6">
                                <StatisticsMockup />
                            </div>
                        </div>
                    </section>

                    {/* =========================================================================
                        SECTION 5: Real-Time Streaming (Left Image, Right Content)
                       ========================================================================= */}
                    <section id="realtime" className="scroll-mt-36">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            {/* Left Side: Image / Mockup */}
                            <div className="lg:col-span-6">
                                <RealtimeMockup />
                            </div>

                            {/* Right Side: Content */}
                            <div className="lg:col-span-6 space-y-4">
                                <div>
                                    <div className="flex items-center justify-between font-mono text-xs text-white/40 tracking-[0.25em] uppercase border-b border-white/10 pb-1.5 mb-2.5">
                                        <span>REAL-TIME STREAMING</span>
                                        <span>ULTRA LOW LATENCY</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight font-normal">
                                        Real-Time Streaming
                                    </h2>
                                    <p className="text-white/60 text-sm md:text-base mt-2 leading-relaxed font-sans">
                                        Process live telemetry streams with ultra-low latency and zero packet loss.
                                    </p>
                                </div>

                                {/* Features List */}
                                <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
                                    {[
                                        { title: "High Availability", desc: "Multi-region failover & zero data loss." },
                                        { title: "Low Latency", desc: "Sub-millisecond ingestion to storage pipeline." },
                                        { title: "Live Processing", desc: "Ingest 500k+ msg/sec per cluster node." },
                                        { title: "Auto Buffering", desc: "Zero-loss ring buffer against backpressure." },
                                        { title: "Stream Validation", desc: "Enforce schemas & resequence out-of-order logs." },
                                        { title: "Event Triggering", desc: "Real-time webhooks on threshold breach." }
                                    ].map(f => (
                                        <div key={f.title} className="px-3.5 py-2.5 rounded-xl bg-[#0c0d10]/90 border border-white/10 hover:border-white/20 transition-all">
                                            <h4 className="font-bold text-white text-xs md:text-sm font-sans">{f.title}</h4>
                                            <p className="text-[11px] text-white/50 mt-0.5 leading-normal">{f.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* =========================================================================
                        SECTION 6: Client Engine (Left GIF/Mockup, Right Client-Engine Content)
                       ========================================================================= */}
                    <section id="client-engine" className="scroll-mt-36">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            {/* Left Side: Client Engine Content */}
                            <div className="lg:col-span-6 space-y-4">
                                <div>
                                    <div className="flex items-center justify-between font-mono text-xs text-white/40 tracking-[0.25em] uppercase border-b border-white/10 pb-1.5 mb-2.5">
                                        <span>CLIENT ENGINE</span>
                                        <span>EDGE &amp; WASM COMPUTE</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight font-normal">
                                        Client Engine
                                    </h2>
                                    <p className="text-white/60 text-sm md:text-base mt-2 leading-relaxed font-sans">
                                        High-performance local processing engine running directly in your browser or edge hardware for zero-latency telemetry manipulation and offline evaluation.
                                    </p>
                                </div>

                                {/* Features List Grid */}
                                <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
                                    {[
                                        { title: "Local WASM Processing", desc: "Execute sub-millisecond filter & FFT math client-side." },
                                        { title: "Zero Network Latency", desc: "Instant chart rendering & local formula evaluation." },
                                        { title: "Offline Cache & Sync", desc: "Buffer test telemetry locally & auto-sync when online." },
                                        { title: "Multi-Threaded Workers", desc: "Parallel Web Workers for smooth 120 FPS signal plotting." },
                                        { title: "Native Edge Bindings", desc: "C++, Rust, and Python SDKs for embedded DAQ hardware." },
                                        { title: "Air-Gapped Security", desc: "Keep sensitive telemetry enclosed inside local client memory." }
                                    ].map(f => (
                                        <div key={f.title} className="px-3.5 py-2.5 rounded-xl bg-[#0c0d10]/90 border border-white/10 hover:border-white/20 transition-all">
                                            <h4 className="font-bold text-white text-xs md:text-sm font-sans">{f.title}</h4>
                                            <p className="text-[11px] text-white/50 mt-0.5 leading-normal">{f.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: Image / Mockup */}
                            <div className="lg:col-span-6">
                                <ClientEngineMockup poster="/client-engine-preview.png" />
                            </div>
                        </div>
                    </section>

                </div>

                {/* BOTTOM ENTERPRISE CTA */}
                <section className="py-28 px-6 bg-[#040404] text-white text-center border-t border-white/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.05),transparent_60%)]" />
                    <div className="max-w-3xl mx-auto space-y-6 relative z-10">
                        <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight font-normal">
                            Ready to modernize your telemetry stack?
                        </h2>
                        <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto font-sans font-normal">
                            Deploy Xpectra in your environment with a 30-day enterprise evaluation.
                        </p>
                        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/#contact">
                                <button className="rounded-full bg-white text-black hover:bg-slate-200 font-semibold px-8 py-4 text-xs tracking-[0.15em] uppercase flex items-center gap-2 shadow-2xl transition-transform hover:scale-105 cursor-pointer">
                                    <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
                                    REQUEST PILOT →
                                </button>
                            </Link>
                            <a
                                href="https://github.com/xpectraflow/xpectra"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-7 py-4 rounded-full border border-white/20 bg-white/[0.04] text-white hover:bg-white/10 transition-all font-semibold text-xs tracking-[0.15em] uppercase flex items-center justify-center gap-2.5 hover:scale-105 cursor-pointer shadow-2xl"
                            >
                                <Github className="w-4 h-4 text-white shrink-0" />
                                <span>VIEW ON GITHUB →</span>
                            </a>
                        </div>
                    </div>
                </section>

            </div>
        </SiteShell>
    );
};

export default ProductPage;



