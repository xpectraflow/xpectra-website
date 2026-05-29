"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0c0c0c] text-white pt-8 pb-8 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-32">
          
          {/* Left Column - Brand & Copyright */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center p-1">
                <Image src="/logo.svg" alt="Xpectra Logo" width={24} height={24} className="invert" />
              </div>
              <span className="font-semibold text-xl tracking-tight">Xpectra</span>
            </Link>
            <p className="text-white/60 text-sm">
              © {currentYear} Xpectraflow Pvt Ltd.
            </p>
            <div className="mt-2">
              <Link href="/#contact">
                <Button className="bg-white hover:bg-gray-200 text-slate-900 font-medium px-8 rounded-md transition-colors">
                  Contact
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Columns - Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-extrabold tracking-[0.15em] text-white uppercase mb-2">Product</h3>
              <Link href="/product" className="text-[14px] text-white/70 hover:text-white transition-colors">Overview</Link>
              <Link href="/integrations" className="text-[14px] text-white/70 hover:text-white transition-colors">Integrations</Link>
              <Link href="/quickstart" className="text-[14px] text-white/70 hover:text-white transition-colors">Quickstart</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-extrabold tracking-[0.15em] text-white uppercase mb-2">Resources</h3>
              <Link href="/blog" className="text-[14px] text-white/70 hover:text-white transition-colors">Engineering Blog</Link>
              <Link href="/#mission-control" className="text-[14px] text-white/70 hover:text-white transition-colors">Documentation</Link>
              <Link href="/#contact" className="text-[14px] text-white/70 hover:text-white transition-colors">Support</Link>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-extrabold tracking-[0.15em] text-white uppercase mb-2">Company</h3>
              <Link href="/privacy" className="text-[14px] text-white/70 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-[14px] text-white/70 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Large Faint Watermark Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden flex justify-center pointer-events-none select-none" style={{ transform: 'translateY(30%)' }}>
        <h1 className="text-[20vw] font-bold leading-none text-transparent tracking-tighter" 
            style={{ 
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.1)',
              whiteSpace: 'nowrap'
            }}>
          Xpectra
        </h1>
      </div>
    </footer>
  );
};
