"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SiteShell } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import {
  CodeBlock,
  CodeBlockCode,
  CodeBlockGroup,
} from "@/components/ui/code-block"
import { ArrowRight, Check, Copy, Terminal, Cpu, FileText, Globe, Box } from 'lucide-react';

const IntegrationCard = ({
  icon,
  isImage,
  name,
  desc,
  language,
  snippet
}: {
  icon: any,
  isImage?: boolean,
  name: string,
  desc: string,
  language: string,
  snippet: string
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group p-8 rounded-[2rem] bg-card-bg border border-border-subtle backdrop-blur-3xl hover:border-white/20 transition-all duration-300 flex flex-col h-full">
      <div className="flex items-start justify-between mb-8">
        <div className="p-4 w-16 h-16 rounded-2xl bg-card-bg text-white/70 group-hover:text-white transition-colors relative flex items-center justify-center overflow-hidden">
          {isImage ? (
            <Image
              src={icon}
              alt={name}
              fill
              className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          ) : (
            React.createElement(icon, { size: 28 })
          )}
        </div>
        <div className="px-3 py-1 rounded-full bg-card-bg border border-border-subtle text-[10px] font-mono text-white/30 uppercase tracking-widest">
          Native
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-3">{name}</h3>
      <p className="text-white/50 text-base leading-relaxed mb-8 flex-grow">{desc}</p>

      <CodeBlock className="border-border-subtle bg-black/40">
        <CodeBlockGroup className="border-border-subtle border-b px-4 py-1.5">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
              {language}
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 hover:bg-white/10"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-brand-emerald" />
            ) : (
              <Copy className="h-3.5 w-3.5 text-white/40" />
            )}
          </Button>
        </CodeBlockGroup>
        <CodeBlockCode code={snippet} language={language} theme="github-dark" />
      </CodeBlock>
    </div>
  );
};

const IntegrationsPage = () => {
  const integrations = [
    {
      icon: "/labview.webp",
      isImage: true,
      name: "LabVIEW",
      desc: "Connect your NI instruments directly. Standardized VIs for high-speed streaming without middleware.",
      language: "text",
      snippet: "// Xpectra VI Reference\nConnect.vi (\"XPECTRA_API_KEY\")\nStream.vi (ch=\"sensor_main\")"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      isImage: true,
      name: "Python",
      desc: "5 lines to start streaming telemetry. Perfect for data scientists and rapid prototyping.",
      language: "python",
      snippet: "import xpectra\n\nclient = xpectra.Client(\"XPECTRA_API_KEY\")\nclient.stream(\"sensor_01\", val=22.5)"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      isImage: true,
      name: "C++ / gRPC",
      desc: "Low-latency gRPC client for embedded or real-time systems. Native Protobuf definitions.",
      language: "cpp",
      snippet: "auto sdk = xpectra::SDK::Connect(\"XPECTRA_API_KEY\");\nsdk->push(\"vibration_01\", 104.2);"
    },
    {
      icon: "https://cdn.worldvectorlogo.com/logos/national-instruments.svg",
      isImage: true,
      name: "NI-DAQmx",
      desc: "Direct ingestion from NI hardware. High-sample rate support with sub-second persistence.",
      language: "bash",
      snippet: "xpectra-ni run-task \"Mission_01\" \\\n  --key \"XPECTRA_API_KEY\""
    },
    {
      icon: FileText,
      name: "CSV / Batch",
      desc: "Batch upload historical data. We handle schema inference and time-alignment automatically.",
      language: "bash",
      snippet: "xpectra ingest archive_data.csv \\\n  --api-key \"XPECTRA_API_KEY\""
    },
    {
      icon: Globe,
      name: "REST / HTTP",
      desc: "Simple webhook or JSON ingestion for web-enabled hardware and edge gateways.",
      language: "json",
      snippet: "POST https://ingest.xpectra.io/v1/telemetry\nAuth: Bearer XPECTRA_API_KEY\n{ \"val\": 22.1 }"
    }
  ];

  return (
    <SiteShell>
      <section className="relative pt-32 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="max-w-3xl mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl sm:text-8xl font-black mb-10 tracking-tighter">
                Your sensors <br />already work.
              </h1>
              <p className="text-xl sm:text-2xl text-white/70 leading-relaxed mb-10">
                Now make their data work too. Xpectra supports every major hardware client
                and DAQ system — with zero vendor lock-in.
              </p>
            </motion.div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
            {integrations.map((item, i) => (
              <IntegrationCard key={i} {...item} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto">
            <div className="p-12 md:p-20 rounded-[3rem] bg-white/90 text-black text-center relative overflow-hidden group">
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-6xl font-black mb-8 tracking-tight">Don't see your hardware?</h2>
                <p className="text-xl text-black/60 mb-12 max-w-lg mx-auto">
                  If it outputs data, we can ingest it. Talk to our engineering team about custom integrations.
                </p>
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-black/90 font-bold px-12 py-8 rounded-full text-xl"
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.href = '/#contact';
                  }}
                >
                  Talk to us
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </div>

              {/* Decorative background logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none scale-150">
                <span className="text-[20rem] font-black">X</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA (from Home) */}
      <footer className="relative py-20 px-6 border-t border-border-subtle/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <p className="text-white/50 text-xl max-w-sm text-center md:text-left">
              Bridge the gap between raw hardware and analysis-ready data.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-border-subtle text-white hover:bg-white/10 font-bold px-12 py-8 rounded-full text-lg"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else window.location.href = '/#contact';
              }}
            >
              Start a pilot
            </Button>
          </div>
        </div>
      </footer>
    </SiteShell>
  );
};

export default IntegrationsPage;
