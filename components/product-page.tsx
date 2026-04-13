"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SiteShell } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import {
    ArrowRight, ChevronDown, CheckCircle2, Server, Database, Activity,
    ShieldCheck, Zap, BarChart3, DatabaseBackup, Combine, Workflow, Cpu, LayoutDashboard
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

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
        <div className="w-full p-12 md:p-20 bg-card-bg/40 border border-white/5 rounded-[3rem] backdrop-blur-3xl overflow-hidden relative group">
            {/* Background Atmosphere */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-orange/5 blur-[120px] rounded-full -mr-[20rem] -mt-[20rem] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-brand-blue/5 blur-[120px] rounded-full -ml-[20rem] -mb-[20rem] animate-pulse" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full">
                {/* Node 1: Sensor Stack */}
                <div className="flex flex-col items-center gap-4 w-[120px]">
                    <div className="w-18 h-18 p-4 rounded-xl bg-white/[0.03] flex items-center justify-center border border-white/10 relative overflow-hidden group/node transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]">
                        <Image
                            src="/labview.webp"
                            alt="LabVIEW"
                            fill
                            className="object-contain p-3 grayscale group-hover/node:grayscale-0 transition-all duration-500 opacity-50 group-hover/node:opacity-100"
                        />
                    </div>
                    <div className="text-center">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Sensor Stack</p>
                        <p className="text-[9px] font-mono text-white/30 uppercase mt-1 tracking-wider whitespace-nowrap">NI-DAQ / LabVIEW</p>
                    </div>
                </div>

                {/* Connector 1 */}
                <div className="hidden md:flex items-center flex-1">
                    <div className="h-px w-full bg-white/10" />
                </div>

                {/* Node 2: Xpectra Core */}
                <div className="flex flex-col items-center gap-4 w-[120px]">
                    <div className="relative">
                        <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full opacity-30" />
                        <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-2xl shadow-white/10 p-3 relative z-10 transition-transform duration-500 hover:scale-105">
                            <Image src="/logo.svg" alt="Xpectra Hub" width={60} height={60} className="brightness-100" />
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-white">Xpectra Core</p>
                        <p className="text-[9px] font-mono text-white/40 uppercase mt-1 tracking-widest whitespace-nowrap">gRPC / Go Engine</p>
                    </div>
                </div>

                {/* Connector 2 */}
                <div className="hidden md:flex items-center flex-1">
                    <div className="h-px w-full bg-white/10" />
                </div>

                {/* Node 3: Storage */}
                <div className="flex flex-col items-center gap-4 w-[120px]">
                    <div className="w-18 h-18 rounded-xl bg-white/[0.03] flex items-center justify-center border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500">
                        <Database className="text-white/40" size={24} />
                    </div>
                    <div className="text-center">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Storage</p>
                        <p className="text-[9px] font-mono text-white/30 uppercase mt-1 tracking-wider whitespace-nowrap">XpectraDB</p>
                    </div>
                </div>

                {/* Connector 3 */}
                <div className="hidden md:flex items-center flex-1">
                    <div className="h-px w-full bg-white/10" />
                </div>

                {/* Node 4: Console */}
                <div className="flex flex-col items-center gap-4 w-[120px]">
                    <div className="w-18 h-18 rounded-xl bg-white/[0.03] flex items-center justify-center border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500">
                        <Server className="text-white/40" size={24} />
                    </div>
                    <div className="text-center">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Console</p>
                        <p className="text-[9px] font-mono text-white/30 uppercase mt-1 tracking-wider whitespace-nowrap">Web UI</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FeatureGrid = () => {
    const features = [
        {
            id: "ingestion",
            icon: Combine,
            title: "Standardized Ingestion",
            description: "Across sensors and missions. No more rewriting scripts every experiment."
        },
        {
            id: "validation",
            icon: ShieldCheck,
            title: "Real-time Validation",
            description: "Schema, timestamps, dropouts — caught instantly before they cascade."
        },
        {
            id: "observability",
            icon: LayoutDashboard,
            title: "Dynamic Observability",
            description: "Interactive dashboards that let you choose what you want to see, when you want it."
        },
        {
            id: "diagnostics",
            icon: Cpu,
            title: "Hardware Diagnostics",
            description: "Track sensor performance over test cycles to identify statistical drift."
        },
        {
            id: "pipelines",
            icon: Workflow,
            title: "Reusable Pipelines",
            description: "Build ingestion logic once and reuse it across every future experiment."
        },
        {
            id: "query",
            icon: DatabaseBackup,
            title: "Historical Query Engine",
            description: "Query terabytes of historical telemetry in sub-second timeframes."
        }
    ];

    return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
                <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                    <Card className="h-full p-8 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                        <CardHeader className="p-0 pb-4">
                            <div className="mb-4 p-3 w-fit rounded-lg bg-white/10 border border-white/20">
                                <feature.icon className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <CardDescription className="text-white/60 leading-relaxed text-sm">{feature.description}</CardDescription>
                        </CardContent>
                    </Card>
                </motion.div>
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
                            <p className="text-2xl sm:text-3xl text-white/70 leading-relaxed mb-10">
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
                            <p className="text-white/50 max-w-sm mb-1 text-lg leading-relaxed">
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
                                                0{i + 1}
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
                                <div className="aspect-video rounded-[2rem] bg-card-bg/50 border border-white/5 shadow-2xl overflow-hidden relative group/hero">
                                    <Image
                                        src="/hero.png"
                                        alt="Xpectra Mission Control"
                                        fill
                                        className="object-contain transition-transform duration-700"
                                    />
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
