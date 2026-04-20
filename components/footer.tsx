"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Linkedin, ShieldCheck } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-24 px-6 border-t border-border-subtle/50 bg-background/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-2 max-w-sm">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image src="/logo.svg" alt="Xpectra Logo" width={32} height={32} />
              <span className="font-mono text-xl font-bold tracking-tighter uppercase">XPECTRA</span>
            </Link>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Mission-critical telemetry infrastructure. We standardize and validate sensor data at the edge so you can focus on the results that matter.
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/xpectraflow/" target="_blank" className="text-white/40 hover:text-white transition-colors">
                <Github size={20} />
              </Link>
              <Link href="https://x.com/XpectraF3662" target="_blank" className="text-white/40 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="https://www.linkedin.com/company/xpectraflow" target="_blank" className="text-white/40 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Platform Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/30 mb-2">Platform</h4>
            <Link href="/product" className="text-sm text-white/60 hover:text-white transition-colors">Product Overview</Link>
            <Link href="/integrations" className="text-sm text-white/60 hover:text-white transition-colors">Integrations</Link>
            <Link href="/quickstart" className="text-sm text-white/60 hover:text-white transition-colors">Quickstart Guide</Link>
            <Link href="/#mission-control" className="text-sm text-white/60 hover:text-white transition-colors">Mission Control</Link>
          </div>

          {/* Solutions Column (SEO Keywords) */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/30 mb-2">Solutions</h4>
            <span className="text-sm text-white/60 cursor-default">Aerospace Telemetry</span>
            <span className="text-sm text-white/60 cursor-default">Defense Systems</span>
            <span className="text-sm text-white/60 cursor-default">Automotive Testing</span>
            <span className="text-sm text-white/60 cursor-default">In-Flight Data</span>
          </div>

          {/* Resources & Trust Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/30 mb-2">Company</h4>
            <Link href="/#contact" className="text-sm text-white/60 hover:text-white transition-colors">Contact Sales</Link>
          </div>
        </div>

        <div className="pt-12 border-t border-border-subtle/30 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono uppercase tracking-[0.2em] text-white/20">
          <p>© {currentYear} Xpectra Corporation. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
