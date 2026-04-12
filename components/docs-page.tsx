"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SiteShell } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import {
  CodeBlock,
  CodeBlockCode,
  CodeBlockGroup,
} from "@/components/ui/code-block"
import { ArrowRight, Key, Zap, Eye, Terminal, CheckCircle2, Copy, Check } from 'lucide-react';

const Step = ({
  number,
  title,
  desc,
  children
}: {
  number: string,
  title: string,
  desc: string,
  children?: React.ReactNode
}) => {
  return (
    <div className="relative pl-12 md:pl-20 mb-32 group">
      {/* Connector Line */}
      <div className="absolute left-[23px] md:left-[39px] top-12 bottom-0 w-px bg-white/5 group-last:hidden" />

      {/* Number Circle */}
      <div className="absolute left-0 top-0 w-12 h-12 md:w-20 md:h-20 rounded-full bg-card-bg border border-border-subtle flex items-center justify-center font-mono text-xl md:text-3xl text-white/20 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500 shadow-2xl group-hover:shadow-white/10">
        {number}
      </div>

      <div className="max-w-4xl pt-2">
        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">{title}</h2>
        <p className="text-xl text-white/50 leading-relaxed mb-10 max-w-2xl">{desc}</p>

        {children && (
          <div className="rounded-[2rem] border border-border-subtle bg-black/40 backdrop-blur-3xl p-8 shadow-2xl">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

const DocsPage = () => {
  return (
    <SiteShell>
      <section className="relative pt-32 pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Hero */}
          <div className="max-w-3xl mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl sm:text-8xl font-black mb-10 tracking-tighter">
                Real results in <br />5 minutes.
              </h1>
              <p className="text-xl sm:text-2xl text-white/70 leading-relaxed">
                No complex configuration. No vendor lock-in. Just industrial-grade telemetry
                infrastructure, pre-configured for your sensors.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <Step
              number="01"
              title="Create a dataset."
              desc="Head to the Xpectra Console, name your mission, and generate an ingestion key. This key is your ticket to standardized, high-volume telemetry persistent storage."
            >
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                    <Key size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold">API Key Generated</p>
                    <p className="text-white/30 font-mono text-xs">x_prd_7829...ae21</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald text-xs font-mono">
                  <CheckCircle2 size={12} /> Ready for Ingest
                </div>
              </div>
            </Step>

            <Step
              number="02"
              title="Point your client."
              desc="Use our native libraries for Python, C++, or LabVIEW. Point your telemetry stream at our high-performance gRPC endpoint."
            >
              <div>
                <CodeBlock className="border-border-subtle bg-black/40">
                  <CodeBlockGroup className="border-border-subtle border-b px-4 py-1.5">
                    <div className="flex items-center gap-2">
                      <Terminal size={12} className="text-brand-blue" />
                      <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                        python_client.py
                      </span>
                    </div>
                  </CodeBlockGroup>
                  <CodeBlockCode
                    code={`import xpectra\n\n# Initialize with your ingest key\nclient = xpectra.Client("xp_live_a1b2c3d4")\n\n# Start streaming telemetry\nclient.stream("voltage_01", 24.5)`}
                    language="python"
                    theme="github-dark"
                  />
                </CodeBlock>
              </div>
            </Step>

            <Step
              number="03"
              title="Watch data appear."
              desc="Open the Mission Control Playground. Your data is being validated, standardized, and stored in XpectraDB in real-time."
            >
              <div className="relative aspect-video rounded-xl bg-black/60 border border-border-subtle/50 overflow-hidden flex items-center justify-center">
                <div className="flex flex-col items-center gap-4 group cursor-pointer">
                  <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-2xl shadow-white/20 group-hover:scale-110 transition-transform">
                    <Eye size={32} />
                  </div>
                  <p className="text-sm font-bold tracking-widest uppercase">Open Playground</p>
                </div>
                {/* Mock Chart background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none flex items-end p-8 gap-2">
                  {[40, 70, 50, 90, 60, 80, 45, 85, 55, 75].map((h, i) => (
                    <div key={i} className="flex-1 bg-white/20 rounded-t-lg" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </Step>
          </div>

          {/* Final CTA */}
          <div className="mt-20 p-12 md:p-20 rounded-[3rem] bg-white text-black text-center shadow-2xl shadow-white/10">
            <Zap size={48} className="mx-auto mb-8 text-black" />
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Your first test starts now.</h2>
            <Button
              size="lg"
              className="bg-black text-white hover:bg-black/90 font-bold px-12 py-8 rounded-full text-xl"
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
        </div>
      </section>
    </SiteShell>
  );
};

export default DocsPage;
