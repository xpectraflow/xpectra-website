"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiteShell } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, CheckCircle2, Server, Database, Activity, ShieldCheck, Zap, BarChart3 } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border-subtle">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className="text-xl font-medium group-hover:text-white transition-colors">{question}</span>
        <ChevronDown className={cn("transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-white/60 leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ArchitectureDiagram = () => {
    return (
        <div className="w-full p-12 bg-card-bg border border-border-subtle rounded-[3rem] backdrop-blur-3xl overflow-hidden relative group">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Hardware */}
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 p-3 rounded-2xl bg-white/10 flex items-center justify-center border border-border-subtle relative overflow-hidden group-hover:bg-white/20 transition-colors">
                        <Image 
                            src="/labview.webp" 
                            alt="LabVIEW" 
                            fill 
                            className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-white">Hardware</p>
                        <p className="text-[10px] font-mono text-white/30 uppercase mt-1">LabVIEW / NI-DAQ</p>
                    </div>
                </div>

                <ArrowRight className="hidden md:block text-white/10" />

                {/* Consumer */}
                <div className="flex flex-col items-center gap-4">
                    <div className="w-24 h-24 rounded-3xl bg-white text-black flex items-center justify-center shadow-2xl shadow-white/20">
                        <span className="font-mono font-black text-xl">X</span>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-white">Xpectra Consumer</p>
                        <p className="text-[10px] font-mono text-white/30 uppercase mt-1">Go / gRPC Ingest</p>
                    </div>
                </div>

                <ArrowRight className="hidden md:block text-white/10" />

                {/* Storage */}
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-border-subtle">
                        <Database className="text-white/60" />
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-white">Persistence</p>
                        <p className="text-[10px] font-mono text-white/30 uppercase mt-1">TimescaleDB</p>
                    </div>
                </div>

                <ArrowRight className="hidden md:block text-white/10" />

                {/* Web Console */}
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-border-subtle">
                        <Server className="text-white/60" />
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-white">Console</p>
                        <p className="text-[10px] font-mono text-white/30 uppercase mt-1">Next.js Web UI</p>
                    </div>
                </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-card-bg blur-[100px] rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-card-bg blur-[100px] rounded-full -ml-32 -mb-32" />
        </div>
    );
};

const FeatureGrid = () => {
    const features = [
        { title: "Standardized Ingestion", text: "Across sensors and missions. No more rewriting scripts every experiment." },
        { title: "Real-time Validation", text: "Schema, timestamps, dropouts — caught instantly before they cascade." },
        { title: "Dynamic Observability", text: "Interactive dashboards that let you choose what you want to see, when you want it." },
        { title: "Hardware Diagnostics", text: "Track sensor performance over test cycles to identify statistical drift." },
        { title: "Reusable Pipelines", text: "Build ingestion logic once and reuse it across every future experiment." },
        { title: "Historical Query Engine", text: "Query terabytes of historical telemetry in sub-second timeframes." }
    ];

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
                <div key={i} className="p-8 rounded-3xl bg-card-bg border border-border-subtle backdrop-blur-xl">
                    <CheckCircle2 className="text-white/40 mb-4" size={20} />
                    <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{f.text}</p>
                </div>
            ))}
        </div>
    );
};

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

const ProductPage = () => {
  return (
    <SiteShell>
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="max-w-3xl mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
                <h1 className="text-6xl sm:text-8xl font-black mb-10 tracking-tighter">
                  30 seconds to <br/>understand.
                </h1>
                <p className="text-xl sm:text-2xl text-white/70 leading-relaxed mb-10 animate-pulse">
                  Xpectra is the industrial-grade data layer for engineering teams who can't afford silent sensor failures. 
                  We standardize your telemetry ingestion and validation so your engineers spend 0% of their time on "data cleaning" 
                  and 100% on analysis.
                </p>
                <Button 
                    size="lg" 
                    className="bg-white text-black hover:bg-gray-100 font-bold px-10 py-8 rounded-full text-lg"
                    onClick={() => {
                        const el = document.getElementById('contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                        else window.location.href = '/#contact';
                    }}
                >
                    Get started in 5 minutes
                </Button>
            </motion.div>
          </div>

          {/* Architecture Diagram */}
          <div className="mb-40">
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12">
                <div className="max-w-xl">
                    <p className="text-xs font-mono uppercase tracking-[0.3em] text-white/30 mb-4">The Infrastructure</p>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">How Xpectra fits into your stack.</h2>
                </div>
                <p className="text-white/50 max-w-sm mb-1 text-sm leading-relaxed">
                    Designed to sit between your raw sensor hardware and downstream analysis tools without replacing a single algorithm.
                </p>
            </div>
            <ArchitectureDiagram />
          </div>

          {/* Playground Walkthrough */}
          <div className="mb-40">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                     <p className="text-xs font-mono uppercase tracking-[0.3em] text-white/30 mb-4">Hands-on Analysis</p>
                     <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">The Mission Control Playground.</h2>
                     <div className="space-y-12">
                         {[
                             { title: "Dataset Tree", desc: "Instantly navigate through historical missions, experiments, and sensor groups." },
                             { title: "Channel Selector", desc: "Select and overlay any number of sensors to find cross-channel correlations." },
                             { title: "Zoom-Linked Charts", desc: "Zoom into one chart and watch as every other chart follows in perfect sync." }
                         ].map((item, i) => (
                             <div key={i} className="flex gap-6 group">
                                  <div className="shrink-0 w-12 h-12 rounded-full border border-border-subtle flex items-center justify-center font-mono text-sm text-white/30 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all">
                                     0{i+1}
                                 </div>
                                 <div className="pt-1">
                                     <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                     <p className="text-white/50 leading-relaxed text-sm">{item.desc}</p>
                                 </div>
                             </div>
                         ))}
                     </div>
                </div>

                <div className="relative">
                     {/* Mock Browser/Playground */}
                     <div className="aspect-[4/3] rounded-[2rem] bg-card-bg border border-border-subtle shadow-2xl p-4 flex flex-col gap-4">
                        <div className="h-6 flex items-center gap-2 px-2 border-b border-white/5">
                            <div className="w-2 h-2 rounded-full bg-brand-red/30" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
                            <div className="w-2 h-2 rounded-full bg-brand-emerald/30" />
                        </div>
                        <div className="flex-1 flex gap-4">
                            <div className="w-1/3 bg-card-bg rounded-xl border border-white/5 p-4 flex flex-col gap-2">
                                <div className="h-4 w-full bg-white/10 rounded" />
                                <div className="h-4 w-2/3 bg-white/10 rounded" />
                                <div className="h-4 w-5/6 bg-white/10 rounded" />
                                <div className="mt-4 h-4 w-full bg-white/10 rounded opacity-50" />
                                <div className="h-4 w-2/3 bg-white/10 rounded opacity-50" />
                            </div>
                            <div className="flex-1 flex flex-col gap-4">
                                <div className="flex-1 bg-card-bg rounded-xl border border-white/5 relative overflow-hidden">
                                     <div className="absolute inset-0 flex items-end p-4 gap-1">
                                         {[30, 60, 40, 80, 50, 70, 45, 90].map((h, i) => (
                                             <div key={i} className="flex-1 bg-white/10 rounded-t-sm" style={{ height: `${h}%` }} />
                                         ))}
                                     </div>
                                </div>
                                <div className="h-24 bg-card-bg rounded-xl border border-white/5 relative overflow-hidden">
                                     <div className="absolute inset-0 flex items-center p-4">
                                         <div className="w-full h-px bg-white/10 relative">
                                             <div className="absolute inset-0 bg-brand-emerald/50 w-full animate-pulse" />
                                         </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                     </div>
                     {/* Floating Badge */}
                     <div className="absolute -bottom-10 -right-10 p-8 rounded-3xl bg-black border border-white/20 shadow-2xl backdrop-blur-3xl max-w-xs transition-transform hover:-translate-y-2">
                         <p className="text-sm font-mono text-white/40 mb-2 uppercase tracking-widest">Global Sync</p>
                         <p className="text-lg font-bold">"Query terabytes. Plot anything. Export anywhere."</p>
                     </div>
                </div>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="mb-40">
             <div className="text-center mb-16">
                 <p className="text-xs font-mono uppercase tracking-[0.3em] text-white/30 mb-4">Technical Scope</p>
                 <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Capabilities at a glance.</h2>
             </div>
             <FeatureGrid />
          </div>

          {/* FAQ Section */}
          <div className="mb-40 max-w-4xl mx-auto">
             <div className="text-center mb-16">
                 <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Questions and answers.</h2>
             </div>
             <div className="space-y-2">
                <FAQItem 
                    question="How long does a pilot take?" 
                    answer="30–45 days with one live sensor workflow. You'll get real-time validation and standardized storage, with a clear decision point at the end." 
                />
                <FAQItem 
                    question="Does Xpectra replace our existing tools?" 
                    answer="No. Xpectra sits between raw sensors and your downstream pipelines. It strengthens what you already run without replacing algorithms, firmware, or workflows." 
                />
                <FAQItem 
                    question="What kind of sensors does Xpectra support?" 
                    answer="Every major industrial sensor and hardware client. If it outputs data via gRPC, HTTP, or CSV, we ingest it natively." 
                />
                <FAQItem 
                    question="Is it too early for us to adopt Xpectra?" 
                    answer="Infrastructure is cheapest to build before you have a legacy problem. Teams typically adopt us during the prototyping phase to avoid debt later." 
                />
             </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6 border-t border-white/5 text-center">
         <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-6xl font-bold mb-10 tracking-tight">Ready to harden your data stack?</h2>
            <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 font-bold px-12 py-8 rounded-full text-xl"
                onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.href = '/#contact';
                }}
            >
                Request a pilot
                <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
         </div>
      </section>
    </SiteShell>
  );
};

export default ProductPage;
