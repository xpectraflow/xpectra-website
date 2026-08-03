"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Activity, Sparkles } from 'lucide-react';
import { solutionsListSummary, solutionsData } from '@/lib/solutions-data';

const solutionsList = solutionsListSummary.map((item) => {
  const detail = solutionsData[item.id] || {};
  return {
    id: item.id,
    icon: item.icon,
    title: item.title,
    tagline: item.desc,
    description: detail.description || item.desc,
    features: detail.keyFeatures?.slice(0, 4).map((f: any) => f.title) || [
      "High-frequency sensor channel ingestion",
      "Microsecond timestamp alignment & PTP IEEE 1588",
      "Automated anomaly detection rules & alerts",
      "Open columnar export (Parquet & HDF5)"
    ],
    image: detail.heroImage || "/propulsion.jpg",
    badge: item.badge
  };
});

export default function SolutionsPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#050608] text-white overflow-x-hidden">
      <Header />

      <main className="pt-28 pb-20">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-white/80" />
            <span>Tailored Engineering Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.15]"
          >
            Telemetry Solutions Built for <span className="bg-gradient-to-r from-white via-white/80 to-zinc-400 bg-clip-text text-transparent">Extreme Engineering</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed"
          >
            From hot-fire rocket engine tests to autonomous fleet deployments, Xpectra standardizes sensor streams at scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <a href="https://app.xpectraflow.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 h-12 rounded-xl">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link href="/product">
              <Button size="lg" variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10 px-8 h-12 rounded-xl">
                Explore Product Architecture
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* SOLUTIONS GRID */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 gap-12">
            {solutionsList.map((sol, index) => {
              const IconComponent = sol.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={sol.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-white/10 bg-[#0c0d10]/80 p-8 lg:p-10 backdrop-blur-xl relative overflow-hidden group hover:border-white/20 transition-all duration-300`}
                >
                  {/* Text Content */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-widest text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        {sol.badge}
                      </span>
                    </div>

                    <Link href={`/solutions/${sol.id}`} className="group/title block">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover/title:text-white/80 transition-colors cursor-pointer">{sol.title}</h2>
                    </Link>
                    <p className="text-sm font-mono text-white/70 mb-4">{sol.tagline}</p>
                    <p className="text-white/60 text-base leading-relaxed mb-6 font-light">{sol.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {sol.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-white/80">
                          <CheckCircle2 className="w-4 h-4 text-white/90 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <Link href={`/solutions/${sol.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80 transition-colors">
                        Explore {sol.title} Page <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a href="https://app.xpectraflow.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-mono text-white/50 hover:text-white transition-colors">
                        Deploy Pilot →
                      </a>
                    </div>
                  </div>

                  {/* Image Preview */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Link href={`/solutions/${sol.id}`} className="block">
                      <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/50 group-hover:border-white/20 transition-all cursor-pointer">
                        <img
                          src={sol.image}
                          alt={sol.title}
                          className="w-full h-full object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/70 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                          <span className="flex items-center gap-1.5">
                            <Activity className="w-3.5 h-3.5 text-white" />
                            LIVE STREAM READY
                          </span>
                          <span>VIEW DETAILS →</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-12 lg:p-16 relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Have a custom hardware setup?</h2>
            <p className="text-white/60 max-w-xl mx-auto text-base mb-8 font-light">
              Our engineering team builds custom protocol adapters and edge ingestion binaries for specialized test stands.
            </p>
            <a href="https://app.xpectraflow.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold px-8 h-12 rounded-xl">
                Talk to Engineering
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
