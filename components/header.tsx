"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, X } from 'lucide-react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full border-b border-border-subtle bg-background/10 backdrop-blur-xl z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="xpectra logo"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="font-mono text-sm font-bold text-white tracking-wider">xpectra</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/product" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              Product
            </Link>
            <Link href="/integrations" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              Integrations
            </Link>
            <Link href="/quickstart" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              Quickstart
            </Link>
            <Button
              size="sm"
              className="bg-white text-black hover:bg-gray-100 font-semibold"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else window.location.href = '/#contact';
              }}
            >
              Request pilot
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-white/70 hover:text-white">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 w-full bg-background/90 backdrop-blur-2xl border-b border-border-subtle p-6 flex flex-col gap-6 items-center"
          >
            <Link href="/product" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Product</Link>
            <Link href="/integrations" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Integrations</Link>
            <Link href="/quickstart" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Quickstart</Link>
            <Button
              className="w-full bg-white text-black font-semibold py-6"
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else window.location.href = '/#contact';
              }}
            >
              Request pilot
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
