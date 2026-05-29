"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SiteShell } from '@/components/site-shell';
import { Gavel, Globe, Cpu, Zap, AlertTriangle } from 'lucide-react';

const Section = ({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) => (
  <div className="mb-16 last:mb-0">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600">
        <Icon size={20} />
      </div>
      <h2 className="text-2xl font-bold tracking-tight uppercase tracking-widest text-sm font-mono opacity-50">{title}</h2>
    </div>
    <div className="text-lg text-slate-500 leading-relaxed space-y-4 max-w-3xl">
      {children}
    </div>
  </div>
);

export const TermsPage = () => {
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
            <p className="text-brand-orange font-mono text-sm uppercase tracking-[0.3em] mb-6">Agreement // v1.0</p>
            <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter">Terms of <br />Service.</h1>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-2xl">
              By accessing the Xpectra platform, you agree to these legal conditions. We've written them to be clear, enforceable, and technically sound.
            </p>
          </motion.div>

          <div className="space-y-24">
            <Section title="Acceptance of Terms" icon={Gavel}>
              <p>
                By using Xpectra (the "Service"), you agree to be bound by these Terms of Service. If you are using the Service on behalf of an organization, you agree to these terms for that organization and represent that you have the authority to do so.
              </p>
            </Section>

            <Section title="Usage Rights & SDKs" icon={Cpu}>
              <p>
                Xpectra grants you a limited, non-exclusive, non-transferable license to use our platform, APIs, and SDKs (Python, C++, LabVIEW, etc.) solely for the purposes of ingesting, validating, and viewing telemetry data.
              </p>
              <p>
                You shall not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reverse engineer or attempt to decode the internal telemetry standardization logic.</li>
                <li>Use the platform for any illegal testing or data ingestion.</li>
                <li>Bypass or attempt to bypass any infrastructure security controls.</li>
              </ul>
            </Section>

            <Section title="Data Integrity & Uptime" icon={Zap}>
              <p>
                We strive for 99.9% availability of our ingestion endpoints. While we build for "Mission Critical" reliability, Xpectra provides the service on an "at available" basis. 
              </p>
              <p>
                You are responsible for maintaining local backups of raw sensor data at the hardware edge before transmission to XpectraDB.
              </p>
            </Section>

            <Section title="Limitation of Liability" icon={AlertTriangle}>
              <p>
                To the maximum extent permitted by law, Xpectra shall not be liable for any indirect, incidental, or consequential damages resulting from data loss, system downtime, or testing failure. Our total liability is limited to the amount paid for the service in the previous twelve months.
              </p>
            </Section>

            <Section title="Modification of Service" icon={Globe}>
              <p>
                Xpectra is in active development. We reserve the right to modify or discontinue features to improve the technical foundation of the platform. We will provide reasonable notice for any breaking changes to API schemas.
              </p>
            </Section>

            <Section title="Contact Information" icon={Gavel}>
              <p>
                Questions about these terms should be directed to:
              </p>
              <div className="mt-8 p-6 rounded-2xl bg-slate-100 border border-slate-200 w-fit">
                <p className="text-slate-900 font-mono mb-1">arush@xpectraflow.com</p>
                <p className="text-xs text-slate-300 uppercase tracking-widest font-mono">Legal Ops // Xpectra Corporation</p>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </SiteShell>
  );
};
