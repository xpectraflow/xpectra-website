"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SiteShell } from '@/components/site-shell';
import { Shield, Lock, Eye, Server, Mail } from 'lucide-react';

const Section = ({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) => (
  <div className="mb-16 last:mb-0">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70">
        <Icon size={20} />
      </div>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
    </div>
    <div className="text-lg text-white/60 leading-relaxed space-y-4 max-w-3xl">
      {children}
    </div>
  </div>
);

export const PrivacyPage = () => {
  return (
    <SiteShell>
      <div className="relative pt-32 pb-48 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <p className="text-brand-blue font-mono text-sm uppercase tracking-[0.3em] mb-6">Policy Archive // v1.0</p>
            <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter">Privacy <br />Policy.</h1>
            <p className="text-xl md:text-2xl text-white/50 leading-relaxed max-w-2xl">
              At Xpectra, we build infrastructure for high-fidelity data. We treat your privacy and the integrity of your telemetry with same industrial-grade rigor.
            </p>
          </motion.div>

          <div className="space-y-24">
            <Section title="Information Collection" icon={Eye}>
              <p>
                We collect information necessary to provide and improve our telemetry services. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account Information: Name, email address, and professional affiliation.</li>
                <li>API Usage: Metadata related to your data streams, including ingestion rates and standardized schemas.</li>
                <li>Diagnostic Data: System performance records used to ensure sub-millisecond latency and high availability.</li>
              </ul>
            </Section>

            <Section title="Data Processing & Storage" icon={Server}>
              <p>
                Xpectra standardizes and stores sensor data in real-time. We process your data exclusively for the purpose of provide the Mission Control Playground and XpectraDB services.
              </p>
              <p>
                Telemetry data is stored in our high-durability infrastructure with redundancy across multiple availability zones. We do not sell or monetize your individual sensor data.
              </p>
            </Section>

            <Section title="Security Standards" icon={Lock}>
              <p>
                We implement industry-standard technical measures to protect your infrastructure:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>End-to-end encryption for all data in transit via TLS 1.3.</li>
                <li>Encryption at rest using AES-256 standards.</li>
                <li>Strict IAM (Identity and Access Management) controls.</li>
                <li>Regular automated vulnerability scanning of our edge endpoints.</li>
              </ul>
            </Section>

            <Section title="Communications & Marketing" icon={Mail}>
              <p>
                We use your contact information to send critical system alerts, technical updates, and occasional platform news. You can manage your communication preferences at any time.
              </p>
            </Section>

            <Section title="Contact & Governance" icon={Shield}>
              <p>
                This policy is effective as of April 2026. For any questions regarding your data or to exercise your rights under GDPR/CCPA, please contact our engineering team directly:
              </p>
              <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 w-fit">
                <p className="text-white font-mono mb-1">arush@xpectraflow.com</p>
                <p className="text-xs text-white/30 uppercase tracking-widest font-mono">Data Privacy Office</p>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </SiteShell>
  );
};
