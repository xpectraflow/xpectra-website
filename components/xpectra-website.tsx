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
      description: "Schema, timestamps, dropouts caught instantly before they cascade into mission failures.",
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
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
            <Link href="/#contact" aria-label="Request a pilot for Xpectra">
              <Button
                size="lg"
                className="h-12 rounded-full bg-white px-8 text-base font-medium text-black hover:bg-white/80"
              >
                Request a pilot
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/#demo-video" aria-label="Watch how Xpectra works">
              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 text-base font-medium text-white hover:bg-white/10"
              >
                <Play className="mr-2 h-4 w-4 fill-white" />
                How it works
              </Button>
            </Link>
            <Link href="/product" aria-label="Learn more about Xpectra product">
              <Button
                variant="ghost"
                size="lg"
                className="h-12 rounded-full text-base font-medium text-white/50 hover:text-white"
              >
                Learn more
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Hero Video Integration */}
        <motion.div
          id="demo-video"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative mx-auto mt-20 w-full max-w-6xl px-4 z-10"
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
                 <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                   <Play size={32} className="fill-white translate-x-1" />
                 </div>
               </div>
             </div>
          </div>
        </motion.div>

        {/* Logos Strip with Animated Carousel */}
        <div className="w-full relative z-10 border-t border-white/5 ">
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
            itemsPerViewDesktop={5}
            padding="pt-10 md:pt-14 pb-10"
            spacing="gap-12"
            titleClassName="text-[10px] font-mono uppercase tracking-[0.2em] text-white/75"
            logoContainerWidth="w-32 md:w-44"
            logoContainerHeight="h-20 md:h-28"
            logoImageHeight="h-14 md:h-20"
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
      </section>



      {/* Problem Section: The cost of "not yet" */}
      <section className="relative pt-8 pb-32 px-6 bg-black/40 backdrop-blur-md border-y border-border-subtle/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.8fr] gap-8 lg:gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-8">
                Every delayed decision means another test cycle lost to bad data.
              </h2>
              <div className="p-8 rounded-3xl bg-card-bg border border-border-subtle backdrop-blur-xl relative group">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                <span className="text-6xl font-black text-white mb-4 block">40%</span>
                <p className="text-xl text-white/70 italic leading-relaxed">
                  "Engineers spend 40% of test prep rewriting the same ingestion scripts."
                </p>
                <div className="mt-6 h-px w-20 bg-white/20" />
                <p className="mt-6 text-white/50 font-mono text-xs uppercase tracking-wider">
                  That's not a productivity problem. It's a missing infrastructure layer.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 items-stretch">
              <div className="sm:pb-4">
                <h3 className="text-xl font-mono text-brand-red/80 flex items-center gap-2">
                  <X className="h-4 w-4" /> Today
                </h3>
              </div>
              <div className="sm:pb-4">
                <h3 className="text-xl font-mono text-brand-emerald/80 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> With Xpectra
                </h3>
              </div>
              
              {[
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
              ].map((point, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col">
                    <div className="p-5 rounded-2xl bg-brand-red/5 border border-brand-red/10 text-white/60 text-md leading-relaxed hover:bg-brand-red/[0.08] transition-colors cursor-default h-full">
                      {point.today}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="p-5 rounded-2xl bg-brand-emerald/5 border border-brand-emerald/10 text-white/90 text-md leading-relaxed hover:bg-brand-emerald/[0.08] transition-colors cursor-default h-full">
                      {point.xpectra}
                    </div>
                  </div>
                </React.Fragment>
              ))}
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
                { label: "Duration", value: "30-45 days, one sprint" },
                { label: "Scope", value: "One sensor workflow you already run" },
                { label: "Outcome", value: "Clear go/no-go with your own data" },
                { label: "Data", value: "Your historical data, analysis-ready" }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-lg bg-white/5 border border-white/10 text-left">
                  <div className="text-sm text-white/50 mb-2 font-mono uppercase tracking-wider">{item.label}</div>
                  <div className="text-lg font-semibold text-white">{item.value}</div>
                </div>
              ))}
            </div>

            <p className="text-xl text-white/40 font-mono text-center max-w-2xl mx-auto leading-relaxed">
              No procurement cycles. No ripping out existing tools. <span className="text-white">We plug into your workflow.</span>
            </p>
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

    </SiteShell>
  );
};

export default XpectraWebsite;
