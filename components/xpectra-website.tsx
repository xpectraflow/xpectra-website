"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle2, Mail, Database, ShieldCheck, Zap, BarChart3, Activity, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SiteShell } from '@/components/site-shell';

const IntegrationLogos = () => {
  const logos = [
    { name: "LabVIEW", src: "/labview.webp", isLocal: true },
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "NI DAQ", src: "https://cdn.worldvectorlogo.com/logos/national-instruments.svg" },
    { name: "gRPC", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grpc/grpc-original.svg" }
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
      {logos.map((logo) => (
        <div key={logo.name} className="relative h-8 md:h-12 w-24 md:w-32 flex items-center justify-center group">
          <Image
            src={logo.src}
            alt={`${logo.name} logo`}
            fill
            className="object-contain"
            sizes="(max-w-768px) 96px, 128px"
          />
          {/* Tooltip on hover */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] pointer-events-none">
            {logo.name}
          </div>
        </div>
      ))}
    </div>
  );
};

// Simple utility for class merging
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

const XpectraWebsite = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:xpectraflow@gmail.com?subject=Pilot Request from ${formData.name}&body=${formData.message}`;
  };

  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <h1 className="text-balance text-5xl sm:text-7xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
            Make sensor data<br />
            <span className="bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
              reusable across missions.
            </span>
          </h1>
          <p className="text-lg sm:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            Xpectra validates, standardizes, and stores your sensor telemetry in real-time,
            so your engineers ship results, not scripts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-semibold text-lg px-10 py-8 rounded-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request a pilot
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/product">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold text-lg px-10 py-8 rounded-full"
              >
                See how it works
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Logos Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 w-full"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/30 mb-8">Works with your existing setup</p>
          <IntegrationLogos />
        </motion.div>
      </section>

      {/* Problem Section: The cost of "not yet" */}
      <section className="relative py-32 px-6 bg-black/40 backdrop-blur-md border-y border-border-subtle/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-8">
                Every delayed decision means another test cycle lost to bad data.
              </h2>
              <div className="p-8 rounded-3xl bg-card-bg border border-border-subtle backdrop-blur-xl">
                <span className="text-6xl font-black text-white mb-4 block">40%</span>
                <p className="text-xl text-white/70 italic leading-relaxed">
                  "Engineers spend 40% of test prep rewriting the same ingestion scripts."
                </p>
                <div className="mt-6 h-px w-20 bg-white/20" />
                <p className="mt-6 text-white/50 font-mono text-sm uppercase tracking-wider">
                  That's not a productivity problem. It's a missing infrastructure layer.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-6">
                <h3 className="text-xl font-mono text-brand-red/80 mb-8 flex items-center gap-2">
                  <X className="h-4 w-4" /> Today
                </h3>
                {[
                  "One sensor anomaly invalidates weeks of test data",
                  "Failures surface post-test when hardware is disassembled",
                  "Collaboration breaks across team data formats"
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-brand-red/5 border border-brand-red/10 text-white/60 text-sm leading-relaxed">
                    {item}
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-mono text-brand-emerald/80 mb-8 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> With Xpectra
                </h3>
                {[
                  "Anomalous sensors auto-flagged, clean data continues flowing",
                  "Real-time alerts catch issues before test completion",
                  "Unified data standards across teams and campaigns"
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-brand-emerald/5 border border-brand-emerald/10 text-white/90 text-sm leading-relaxed">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
              The platform your data ops team doesn't have yet.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Panel 1: Ingest */}
            <Card className="bg-card-bg border-border-subtle hover:border-white/20 transition-all overflow-hidden group">
              <div className="h-64 bg-black/40 flex items-center justify-center p-8 border-b border-border-subtle relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="font-mono text-[10px] text-white/40 leading-relaxed overflow-hidden">
                  <span className="text-brand-blue">import</span> xpectra<br />
                  client = xpectra.Client(<span className="text-brand-emerald">"api_key"</span>)<br />
                  <span className="text-white/20"># Streaming telemetry...</span><br />
                  client.stream(<span className="text-brand-emerald">"sensor_01"</span>, value)
                </div>
              </div>
              <CardHeader>
                <div className="mb-4 p-3 w-fit rounded-xl bg-brand-blue/10 text-brand-blue">
                  <Zap size={24} />
                </div>
                <CardTitle className="text-white text-2xl font-bold">Ingest</CardTitle>
                <CardDescription className="text-white/60 text-base">
                  Plug in your existing clients. No rewrites. Native support for Python, C++, and LabVIEW.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Panel 2: Validate */}
            <Card className="bg-card-bg border-border-subtle hover:border-white/20 transition-all overflow-hidden group">
              <div className="h-64 bg-black/40 flex items-center justify-center p-8 border-b border-border-subtle relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-emerald/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex justify-between items-center px-3 py-2 rounded bg-brand-emerald/10 border border-brand-emerald/20">
                    <span className="text-[10px] font-mono text-brand-emerald">VOLTAGE_OK</span>
                    <CheckCircle2 size={12} className="text-brand-emerald" />
                  </div>
                  <div className="flex justify-between items-center px-3 py-2 rounded bg-brand-red/10 border border-brand-red/20">
                    <span className="text-[10px] font-mono text-brand-red">DROPOUT_DETECTED</span>
                    <X size={12} className="text-brand-red" />
                  </div>
                  <div className="flex justify-between items-center px-3 py-2 rounded bg-brand-emerald/10 border border-brand-emerald/20">
                    <span className="text-[10px] font-mono text-brand-emerald">SCHEMA_MATCH</span>
                    <CheckCircle2 size={12} className="text-brand-emerald" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <div className="mb-4 p-3 w-fit rounded-xl bg-brand-emerald/10 text-brand-emerald">
                  <ShieldCheck size={24} />
                </div>
                <CardTitle className="text-white text-2xl font-bold">Validate</CardTitle>
                <CardDescription className="text-white/60 text-base">
                  Catch dropout, schema drift, and outliers in real time. Never waste a test on bad bits again.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Panel 3: Explore */}
            <Card className="bg-card-bg border-border-subtle hover:border-white/20 transition-all overflow-hidden group">
              <div className="h-64 bg-black/40 flex items-center justify-center p-4 border-b border-border-subtle relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Mock Playground */}
                <div className="w-full h-full rounded border border-border-subtle bg-[#0a0a0a] flex flex-col overflow-hidden">
                  <div className="h-4 border-b border-border-subtle bg-white/5 flex items-center px-2">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-red/50" />
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald/50" />
                    </div>
                  </div>
                  <div className="flex-1 flex items-end p-2 gap-1">
                    {[40, 70, 45, 90, 65, 80, 50, 85].map((h, i) => (
                      <div key={i} className="flex-1 bg-brand-orange/30 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
              <CardHeader>
                <div className="mb-4 p-3 w-fit rounded-xl bg-brand-orange/10 text-brand-orange">
                  <BarChart3 size={24} />
                </div>
                <CardTitle className="text-white text-2xl font-bold">Explore</CardTitle>
                <CardDescription className="text-white/60 text-base">
                  Query terabytes. Plot anything. Export anywhere. Your historical data, always analysis-ready.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrations Strip Teaser */}
      <section className="relative py-20 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Speaks your hardware's language natively.</h2>
            <p className="text-white/50 text-lg">LabVIEW · Python · C++ · NI-DAQ · gRPC · CSV · HTTP</p>
          </div>
          <Link href="/integrations">
            <Button variant="link" className="text-white text-lg group">
              See all integrations <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Pilot Section */}
      <section id="pilot" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-bold mb-12">Run a pilot. Seeing is believing.</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-3xl bg-card-bg border border-border-subtle text-left">
              <p className="text-white/40 font-mono text-xs uppercase tracking-widest mb-6">Real World Impact</p>
              <p className="text-2xl font-medium leading-relaxed">
                "Teams running pilots typically catch their first <span className="text-white underline decoration-white/30 underline-offset-8">silent failure</span> within 72 hours of going live."
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Duration", value: "30-45 Days" },
                { label: "Scope", value: "Live Workflow" },
                { label: "Outcome", value: "Go/No-Go" },
                { label: "Data", value: "Standardized" }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card-bg border border-border-subtle flex flex-col justify-center text-left">
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-tighter mb-1">{item.label}</span>
                  <span className="text-sm font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6 bg-black/40 backdrop-blur-sm border-t border-border-subtle/50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-6xl font-bold mb-6">Request a pilot</h2>
            <p className="text-white/60 text-lg">
              Let's discuss how xpectra can strengthen your sensor operations.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <Input
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-card-bg border-border-subtle text-white placeholder:text-white/40 h-14 rounded-xl"
              />
              <Input
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-card-bg border-border-subtle text-white placeholder:text-white/40 h-14 rounded-xl"
              />
            </div>
            <Textarea
              placeholder="Tell us about your sensor operations and challenges"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="bg-card-bg border-border-subtle text-white placeholder:text-white/40 rounded-xl p-4"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-white text-black hover:bg-gray-100 font-bold h-16 rounded-xl text-lg shadow-xl shadow-white/5"
            >
              Send request
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-white/50 text-sm mb-4">or contact us directly:</p>
            <a
              href="mailto:xpectraflow@gmail.com"
              className="px-6 py-3 rounded-full bg-card-bg border border-border-subtle text-white hover:bg-white/10 transition-colors inline-flex items-center gap-3"
            >
              <Mail className="h-4 w-4" />
              xpectraflow@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-6 border-t border-border-subtle/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-20">
            <div className="max-w-sm">
              <div className="flex items-center gap-3 mb-6">
                <Image src="/logo.svg" alt="logo" width={32} height={32} />
                <span className="font-mono text-xl font-bold tracking-tighter">xpectra</span>
              </div>
              <p className="text-white/50 text-lg leading-relaxed">
                Your next test will generate data. The question is whether it'll still be useful in a year.
              </p>
              <div className="mt-8 flex gap-4">
                <Button size="sm" variant="ghost" className="text-white/50 hover:text-white p-0 h-auto">Twitter</Button>
                <Button size="sm" variant="ghost" className="text-white/50 hover:text-white p-0 h-auto">LinkedIn</Button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-20">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-mono uppercase tracking-widest text-white/30">Platform</span>
                <Link href="/product" className="text-white/70 hover:text-white transition-colors">Product</Link>
                <Link href="/integrations" className="text-white/70 hover:text-white transition-colors">Integrations</Link>
                <Link href="/docs" className="text-white/70 hover:text-white transition-colors">Quickstart</Link>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xs font-mono uppercase tracking-widest text-white/30">Company</span>
                <Link href="/team" className="text-white/70 hover:text-white transition-colors">Team</Link>
                <Link href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </div>
          <p className="text-white/20 text-sm font-mono tracking-tighter font-medium">© 2026 Xpectra. Mission critical telemetry infrastructure.</p>
        </div>
      </footer>
    </SiteShell>
  );
};

export default XpectraWebsite;
