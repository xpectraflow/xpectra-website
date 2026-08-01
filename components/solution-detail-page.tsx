"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Sparkles,
  ArrowLeft,
} from 'lucide-react';
import { solutionsData } from '@/lib/solutions-data';

export default function SolutionDetailPage({ slug }: { slug: string }) {
  const data = solutionsData[slug] || solutionsData.aerospace;

  return (
    <div className="relative min-h-screen w-full bg-[#050608] text-white overflow-x-hidden">
      <Header />

      <main className="pt-28 pb-20">
        {/* BACK LINK */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
          <Link href="/solutions" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to All Solutions
          </Link>
        </div>

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center rounded-3xl border border-white/10 bg-[#0c0d10]/90 p-8 lg:p-12 backdrop-blur-2xl">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400 mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{data.badge} Solution</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
                {data.title}
              </h1>

              <p className="text-base md:text-lg font-mono text-emerald-400/90 mb-4">
                {data.tagline}
              </p>

              <p className="text-white/70 text-base leading-relaxed mb-8 font-light max-w-xl">
                {data.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="https://app.xpectraflow.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-6 h-12 rounded-xl">
                    Request {data.badge} Pilot
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="#demo" className="inline-flex items-center justify-center">
                  <Button size="lg" variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10 px-6 h-12 rounded-xl">
                    Watch Demo
                  </Button>
                </a>
              </div>
            </div>

            {/* Right GIF / Video Media */}
            <div className="lg:col-span-5" id="demo">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black relative group">
                {data.heroVideo ? (
                  <video
                    src={data.heroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={data.heroImage}
                    alt={data.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/80 bg-black/70 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE TELEMETRY STREAM
                  </span>
                  <span>100 kHz SYNC</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOMER / PROOF BLOCK */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md">
            <p className="text-center text-xs font-mono uppercase tracking-[0.2em] text-white/50 mb-8">
              Proven Performance Metrics for {data.title}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {data.customerProof.map((cp, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-bold font-mono text-white tracking-tight">{cp.stat}</span>
                  <span className="text-xs text-white/60 mt-1 font-sans">{cp.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTIONS DEEP DIVES */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">Architected to Solve Extreme Industry Pain Points</h2>
            <p className="text-white/60 text-base max-w-2xl mx-auto font-light">
              How Xpectra replaces fragile legacy scripts with robust edge ingestion binaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.solutionDeepDives.map((dd, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-2xl border border-white/10 bg-[#0c0d10] p-6 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono text-emerald-400 mb-3 uppercase tracking-wider">Solution {idx + 1}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{dd.title}</h3>
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 mb-4">
                    <p className="text-xs text-red-300"><strong className="text-red-400 font-mono">CHALLENGE: </strong>{dd.problem}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <p className="text-xs text-emerald-300"><strong className="text-emerald-400 font-mono">XPECTRA APPROACH: </strong>{dd.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* LIFECYCLE STAGES */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">End-to-End Telemetry Lifecycle</h2>
            <p className="text-white/60 text-base max-w-2xl mx-auto font-light">
              From hardware connection to post-test compliance archive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.lifecycleStages.map((st, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 relative overflow-hidden group hover:border-emerald-500/40 transition-all">
                <div className="text-3xl font-mono font-bold text-white/20 mb-4 group-hover:text-emerald-400 transition-colors">
                  {st.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{st.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">{st.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">Key Technical Capabilities</h2>
            <p className="text-white/60 text-base max-w-2xl mx-auto font-light">
              Core features designed for high-concurrency sensor streaming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.keyFeatures.map((kf, idx) => {
              const IconComp = kf.icon;
              return (
                <div key={idx} className="rounded-2xl border border-white/10 bg-[#0c0d10] p-6 hover:border-white/20 transition-all">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit text-emerald-400 mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{kf.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed font-light">{kf.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* PROOF AND OUTCOMES */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-950/30 via-[#0c0d10] to-blue-950/30 p-8 lg:p-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">Quantified Engineering Outcomes</h2>
              <p className="text-white/60 text-base max-w-xl mx-auto font-light">
                Measurable results achieved by engineering teams using Xpectra.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.proofOutcomes.map((po, idx) => (
                <div key={idx} className="rounded-2xl border border-white/10 bg-black/40 p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold font-mono text-emerald-400 mb-2">{po.metric}</div>
                  <div className="text-sm font-semibold text-white mb-2">{po.label}</div>
                  <p className="text-xs text-white/60 font-light">{po.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-12 lg:p-16 relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Deploy Xpectra for {data.title}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg mb-8 font-light">
              Connect your test stand, vehicle fleet, or edge sensors in under 15 minutes with our native edge binaries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://app.xpectraflow.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold px-8 h-12 rounded-xl text-base">
                  Start {data.badge} Pilot
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/solutions">
                <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 h-12 rounded-xl text-base">
                  View Other Industry Solutions
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
