"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import {
  ArrowRight, CheckCircle2, Mail, Database, ShieldCheck, Zap, BarChart3,
  Activity, X, DatabaseBackup, Combine, Workflow, Cpu, LayoutDashboard, Play
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SiteShell } from '@/components/site-shell';
import HeroOrbitDeck, { HeroModeWidget } from "@/components/ui/hero-modern";
import { requestPilotAction } from "@/app/actions/request-pilot";

import dynamic from 'next/dynamic';
const AnimatedCarousel = dynamic(() => import('@/components/ui/logo-carousel').then(mod => mod.AnimatedCarousel), {
  ssr: false,
  loading: () => <div className="h-40" />
});

const XpectraWebsite = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ success: boolean; message: string } | null>(null);

  const comparisonPairs = [
    {
      today: "One sensor anomaly invalidates weeks of test data",
      xpectra: "Anomalous sensors auto-flagged instantly"
    },
    {
      today: "Failures surface post-test when hardware is disassembled",
      xpectra: "Real-time alerts catch issues before teardown"
    },
    {
      today: "Collaboration breaks across team data formats",
      xpectra: "Unified data standards across all missions"
    },
    {
      today: "Engineers spend 2+ days per test rewriting initial scripts",
      xpectra: "Standardized ingestion logic ready for reuse"
    },
    {
      today: "Test results are tied to the engineer, not the platform",
      xpectra: "Full mission context vaulted for anyone to query"
    }
  ];


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    
    const formDataObj = new FormData();
    formDataObj.append("email", formData.email);
    
    const response = await requestPilotAction(formDataObj);
    
    setFormStatus({
      success: response.success,
      message: response.success ? response.message : response.error
    });
    
    if (response.success) {
      setFormData({ ...formData, email: '' });
    }
    setIsSubmitting(false);
  };

  return (
    <SiteShell>
      {/* New Hero Section from 21st.dev */}
      <HeroOrbitDeck headerRightWidget={
          <motion.div
            id="demo-video"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative w-full z-10 rounded-3xl border border-white/12 bg-white/6 p-3 sm:p-4 transition hover:bg-white/10"
          >
          <div className="absolute inset-0 rounded-3xl shadow-2xl bg-white blur-[10rem] opacity-[0.07] pointer-events-none" />
          <div className="relative aspect-video w-full shadow-2xl rounded-2xl border border-white/10 overflow-hidden bg-black/40 backdrop-blur-3xl group cursor-pointer"
            onClick={() => {
              const container = document.getElementById('video-container');
              if (container) {
                container.innerHTML = `<iframe 
                     src="https://www.youtube.com/embed/CLUqwdlTMtw?rel=0&modestbranding=1&autoplay=1" 
                     title="Xpectra Demo"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                     allowFullScreen
                     class="absolute inset-0 w-full h-full"
                   ></iframe>`;
              }
            }}
          >
            <div id="video-container" className="absolute inset-0 w-full h-full">
              <Image
                src="/hero.png"
                alt="Xpectra Demo Video Preview"
                fill
                className="object-cover opacity-60 transition-opacity group-hover:opacity-80"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Ripple effect rings */}
                <div className="absolute w-20 h-20 rounded-full bg-white/30 motion-safe:animate-ping [animation-duration:3s]" />
                <div className="absolute w-20 h-20 rounded-full bg-white/20 motion-safe:animate-ping [animation-duration:3s] [animation-delay:1.5s]" />
                
                <div className="relative z-10 w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play size={32} className="fill-white translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      }>

        <div className="grid gap-10 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] xl:items-stretch">
          <div className="min-w-0">
            <HeroModeWidget />
          </div>

          {/* Logos Strip with Animated Carousel */}
          <div className="min-w-0 w-full relative z-10 rounded-3xl border border-white/12 bg-white/6 p-6 md:p-8 transition hover:bg-white/10 flex flex-col justify-center">
          <AnimatedCarousel
            title="Works with your existing setup"
            logos={[
              { src: "/labview.webp", name: "LabVIEW" },
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", name: "Python" },
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", name: "C++" },
              { src: "https://cdn.worldvectorlogo.com/logos/national-instruments.svg", name: "NI-DAQ" },
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grpc/grpc-original.svg", name: "gRPC" },
            ]}
            autoPlay={false}
            autoPlayInterval={3000}
            itemsPerViewMobile={2}
            itemsPerViewDesktop={3}
            padding="pt-6 md:pt-10 pb-6 md:pb-10"
            spacing="gap-12"
            titleClassName="text-[10px] font-mono uppercase tracking-[0.2em] text-white/75"
            logoContainerWidth="w-28 md:w-44"
            logoContainerHeight="h-16 md:h-28"
            logoImageHeight="h-10 md:h-20"
          />
          <div className="flex justify-center pb-12">
            <Link href="/integrations" aria-label="See all Xpectra integrations">
              <Button
                variant="ghost"
                className="mt-10 text-white/40 hover:text-white hover:bg-white/5 text-xs font-mono uppercase tracking-[0.2em] group h-auto py-2 px-4 rounded-full transition-all"
              >
                See all integrations <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
        </div>
        {/* 3-Column Problem / Comparison Grid */}
        <div className="grid gap-10 lg:grid-cols-3 lg:items-stretch">
          {/* Column 1: Problem Statement */}
          <div className="relative z-10 rounded-3xl border border-white/12 bg-white/6 p-8 transition hover:bg-white/10 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-8">
              Every delayed decision means another test cycle lost to bad data.
            </h2>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-xl">
              <span className="text-5xl font-black text-white mb-2 block">40%</span>
              <p className="text-sm text-white/70 italic leading-relaxed">
                "Engineers spend 40% of test prep rewriting the same ingestion scripts."
              </p>
              <div className="mt-4 h-px w-16 bg-white/10" />
              <p className="mt-4 text-white/45 font-mono text-[10px] uppercase tracking-wider">
                That's not a productivity problem. It's a missing infrastructure layer.
              </p>
            </div>
          </div>

          {/* Column 2: Today */}
          <div className="relative z-10 rounded-3xl border border-brand-red/20 bg-brand-red/5 p-8 transition hover:bg-brand-red/10 flex flex-col gap-4">
            <h3 className="text-sm font-mono text-brand-red flex items-center gap-2 uppercase tracking-widest mb-2">
              <X className="h-4 w-4" /> Today
            </h3>
            {comparisonPairs.map((point, i) => (
              <div key={`today-${i}`} className="p-5 rounded-2xl bg-brand-red/[0.03] border border-brand-red/10 text-white/65 text-sm leading-relaxed shadow-sm flex-1 flex items-center">
                {point.today}
              </div>
            ))}
          </div>

          {/* Column 3: With Xpectra */}
          <div className="relative z-10 rounded-3xl border border-brand-emerald/40 bg-brand-emerald/10 p-8 transition hover:bg-brand-emerald/20 flex flex-col gap-4">
            <h3 className="text-sm font-mono text-brand-emerald flex items-center gap-2 uppercase tracking-widest mb-2">
              <CheckCircle2 className="h-4 w-4" /> With Xpectra
            </h3>
            {comparisonPairs.map((point, i) => (
              <div key={`xpectra-${i}`} className="p-5 rounded-2xl bg-brand-emerald/[0.15] border border-brand-emerald/30 text-white font-semibold text-sm leading-relaxed shadow-[0_0_15px_rgba(16,185,129,0.15)] flex-1 flex items-center">
                {point.xpectra}
              </div>
            ))}
          </div>
        </div>
      </HeroOrbitDeck>





      {/* Pilot Section */}
      <section id="pilot" className="relative pt-0 -mt-8 pb-24 px-6 md:px-10 lg:px-16 xl:px-24 bg-[#040404] overflow-hidden">
        {/* Continuous Dotted Background */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-80"
          style={{
            backgroundImage: "radial-gradient(circle at 25% 25%, rgba(250,250,250,0.08) 0.7px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(250,250,250,0.08) 0.7px, transparent 1px)",
            backgroundSize: "12px 12px",
            backgroundRepeat: "repeat",
          }}
        />
        
        <div className="w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] gap-10 lg:items-stretch"
          >
            {/* Left side: Pilot Info */}
            <div className="relative z-10 rounded-3xl border border-white/12 bg-white/6 p-8 transition hover:bg-white/10 flex flex-col h-full">
              
              <div className="flex items-start justify-between gap-4 mb-10">
                <div className="space-y-3 text-left">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/50">Action</p>
                  <h2 className="text-xl font-semibold tracking-tight text-white">Start with a pilot</h2>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10 mb-10">
                {[
                  { label: "Duration", value: "30-45 days, one sprint" },
                  { label: "Scope", value: "One sensor workflow you already run" },
                  { label: "Outcome", value: "Clear go/no-go with your own data" },
                  { label: "Data", value: "Your historical data, analysis-ready" }
                ].map((item, i) => (
                  <div key={i} className="text-left">
                    <div className="text-xs text-white/50 mb-2 font-mono uppercase tracking-wider">{item.label}</div>
                    <div className="text-base font-medium text-white/90">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-white/10">
                <p className="text-sm text-white/50 font-mono text-left leading-relaxed">
                  No procurement cycles. No ripping out existing tools. <br/><span className="text-white mt-1 inline-block">We plug into your workflow.</span>
                </p>
              </div>
            </div>

            {/* Right side: Request Form */}
            <div id="contact" className="relative z-10 rounded-3xl border border-white/12 bg-white/6 p-8 transition hover:bg-white/10 flex flex-col h-full">
              
              <div className="flex items-start justify-between gap-4 mb-8">
                <div className="space-y-3 text-left">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/50">Contact</p>
                  <h2 className="text-xl font-semibold tracking-tight text-white">Request a pilot</h2>
                </div>
              </div>

              <p className="text-white/60 mb-8 text-sm">
                Let's discuss how xpectra can strengthen your sensor operations.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12 rounded-xl px-4"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 bg-white text-black hover:bg-gray-200 font-bold transition-all duration-300 rounded-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send request"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>
                {formStatus && (
                  <div className={`mt-4 p-3 rounded-xl border text-sm ${formStatus.success ? 'bg-brand-emerald/10 border-brand-emerald/20 text-brand-emerald' : 'bg-brand-red/10 border-brand-red/20 text-brand-red'}`}>
                    {formStatus.message}
                  </div>
                )}
              </form>

              <div className="mt-auto pt-8 border-t border-transparent text-center">
                <p className="text-white/40 text-xs mb-3 uppercase tracking-wider font-mono">Or email us directly</p>
                <a
                  href="mailto:arush@xpectraflow.com"
                  className="text-white hover:text-white/80 transition-colors inline-flex items-center gap-2 font-medium text-sm"
                >
                  <Mail className="h-4 w-4" />
                  arush@xpectraflow.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </SiteShell>
  );
};

export default XpectraWebsite;
