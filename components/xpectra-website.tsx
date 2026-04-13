"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import {
  ArrowRight, CheckCircle2, Mail, Database, ShieldCheck, Zap, BarChart3,
  Activity, X, DatabaseBackup, Combine, Workflow, Cpu, LayoutDashboard
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SiteShell } from '@/components/site-shell';

import { AnimatedCarousel } from '@/components/ui/logo-carousel';

const XpectraWebsite = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const features = [
    {
      id: "lifecycle",
      icon: DatabaseBackup,
      title: "Smart Data Lifecycle Management",
      description: "Query events from terabytes of historical data in seconds using optimized database models",
    },
    {
      id: "validation",
      icon: ShieldCheck,
      title: "Real-time data validation",
      description: "Schema, timestamps, dropouts — caught instantly before they cascade into mission failures.",
    },
    {
      id: "ingestion",
      icon: Combine,
      title: "Standardized ingestion",
      description: "Across sensors and missions. No more rewriting scripts every experiment.",
    },
    {
      id: "pipelines",
      icon: Workflow,
      title: "Reusable pipelines",
      description: "That don't break every experiment. Build once, use forever.",
    },
    {
      id: "hardware",
      icon: Cpu,
      title: "Hardware Diagnostics",
      description: "Tracks sensor and component performance over multiple test cycles to identify statistical drift.",
    },
    {
      id: "observability",
      icon: LayoutDashboard,
      title: "Real-time Observability",
      description: "Dynamic dashboards that lets you choose what you want to see.",
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:arush@xpectraflow.com?subject=Pilot Request from ${formData.name}&body=${formData.message}`;
  };

  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-10 pt-12 pb-6 text-center overflow-hidden">
        {/* New Visual Background Elements */}
        <div className="flex flex-col items-end absolute -right-60 -top-10 blur-xl z-0 pointer-events-none">
          <div className="h-[15rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[8rem] from-purple-600/10 to-sky-600/10"></div>
          <div className="h-[15rem] rounded-full w-[90rem] z-1 bg-gradient-to-b blur-[8rem] from-pink-900/10 to-yellow-400/10"></div>
          <div className="h-[15rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[8rem] from-yellow-600/10 to-sky-500/10"></div>
        </div>
        <div className="absolute inset-0 z-0 bg-noise opacity-[0.03] pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl relative z-10"
        >
          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Infrastructure for mission critical sensor data
          </h1>
          <p className="mt-6  text-md sm:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            Xpectra validates, standardizes, and stores your sensor telemetry in real-time,
            so your engineers analyse data, not clean it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="h-12 rounded-full bg-white px-8 text-base font-medium text-black hover:bg-white/80"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request a pilot
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/product">
              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-full border border-gray-600 bg-transparent px-8 text-base font-medium text-white hover:bg-white/50"
              >
                See how it works
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Hero Image Integration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative mx-auto mt-20 w-full max-w-6xl px-4 z-10"
        >
          <div className="absolute inset-0 rounded-3xl shadow-2xl bg-white blur-[10rem] opacity-[0.07] pointer-events-none" />
          <Image
            src="/hero.png"
            alt="Xpectra Mission Control"
            width={1200}
            height={675}
            priority
            className="relative w-full h-auto shadow-2xl rounded-2xl border border-white/10 grayscale-[0.1] hover:grayscale-0 transition-all duration-1000"
          />
        </motion.div>

        {/* Logos Strip with Animated Carousel */}
        <div className="w-full relative z-10 border-t border-white/5 ">
          <AnimatedCarousel
            title="Works with your existing setup"
            logos={[
              "/labview.webp",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
              "https://cdn.worldvectorlogo.com/logos/national-instruments.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grpc/grpc-original.svg",
            ]}
            autoPlay={false}
            autoPlayInterval={3000}
            itemsPerViewDesktop={5}
            padding="pt-10 md:pt-14 pb-0"
            spacing="gap-15"
            titleClassName="text-[10px] font-mono uppercase tracking-[0.2em] text-white/75"
            logoContainerWidth="w-32 md:w-48"
            logoContainerHeight="h-16 md:h-20"
            logoImageHeight="h-16 md:h-24"
          />
          <div className="flex justify-center pb-12">
            <Link href="/integrations">
              <Button
                variant="ghost"
                className="mt-10 text-white/40 hover:text-white hover:bg-white/5 text-xs font-mono uppercase tracking-[0.2em] group h-auto py-2 px-4 rounded-full transition-all"
              >
                See all integrations <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>



      {/* Problem Section: The cost of "not yet" */}
      <section className="relative pt-8 pb-32 px-6 bg-black/40 backdrop-blur-md border-y border-border-subtle/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-8">
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
                <h3 className="text-2xl font-mono text-brand-red/80 mb-8 flex items-center gap-2">
                  <X className="h-4 w-4" /> Today
                </h3>
                {[
                  "One sensor anomaly invalidates weeks of test data",
                  "Failures surface post-test when hardware is disassembled",
                  "Collaboration breaks across team data formats"
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-brand-red/5 border border-brand-red/10 text-white/60 text-md leading-relaxed">
                    {item}
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-mono text-brand-emerald/80 mb-8 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> With Xpectra
                </h3>
                {[
                  "Anomalous sensors auto-flagged, clean data continues flowing",
                  "Real-time alerts catch issues before test completion",
                  "Unified data standards across teams and campaigns"
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-brand-emerald/5 border border-brand-emerald/10 text-white/90 text-md leading-relaxed">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What xpectra does Section */}
      <section id="features" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">What xpectra does</h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, i) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Card className="h-full p-6 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <CardHeader className="p-0 pb-4">
                    <div className="mb-4 p-3 w-fit rounded-lg bg-white/10 border border-white/20">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-white/60">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Pilot Section */}
      <section id="pilot" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">Start with a pilot</h2>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { label: "Duration", value: "30-45 Days" },
                { label: "Scope", value: "Live Workflow" },
                { label: "Outcome", value: "Go/No-Go" },
                { label: "Data", value: "Standardized" }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-lg bg-white/5 border border-white/10 text-left">
                  <div className="text-sm text-white/50 mb-2 font-mono uppercase tracking-wider">{item.label}</div>
                  <div className="text-lg font-semibold text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center">Request a pilot</h2>
            <p className="text-white/60 text-center mb-12">
              Let's discuss how xpectra can strengthen your sensor operations.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your sensor operations and challenges"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-white text-black hover:bg-gray-100 font-semibold"
              >
                Send request
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-white/50 text-sm mb-2">or email us directly:</p>
              <a
                href="mailto:arush@xpectraflow.com"
                className="text-white hover:text-white/80 transition-colors inline-flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                arush@xpectraflow.com
              </a>
            </div>
          </motion.div>
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
                <Link href="https://x.com/XpectraF3662" target="_blank">
                  <Button size="sm" variant="ghost" className="text-white/50 hover:text-white p-0 h-auto">Twitter</Button>
                </Link>
                <Link href="https://www.linkedin.com/company/xpectraflow" target="_blank">
                  <Button size="sm" variant="ghost" className="text-white/50 hover:text-white p-0 h-auto">LinkedIn</Button>
                </Link>
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
