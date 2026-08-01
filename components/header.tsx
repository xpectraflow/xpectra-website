"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, X, Github, ChevronDown } from 'lucide-react';
import { solutionsListSummary } from '@/lib/solutions-data';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full border-b border-border-subtle bg-background/10 backdrop-blur-xl z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-[64px] items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Xpectra Home">
            <Image
              src="/logo.svg"
              alt="xpectra logo"
              width={28}
              height={28}
              className="w-7 h-7"
            />
            <span className="font-mono text-[17px] font-bold text-white tracking-wider">xpectra</span>
          </Link>

          {/* Center: Nav links */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <Link href="/product" className="text-[17px] font-medium text-white/65 hover:text-white transition-colors">
              Product
            </Link>
            <Link href="/solutions" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              Solutions
            </Link>
            <Link href="/integrations" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              Integrations
            </Link>
            <Link href="/quickstart" className="text-[17px] font-medium text-white/65 hover:text-white transition-colors">
              Quickstart
            </Link>
            <Link href="/blog" className="text-[17px] font-medium text-white/65 hover:text-white transition-colors">
              Blog
            </Link>
          </div>

          {/* Right: GitHub + CTA */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href="https://github.com/xpectraflow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/65 hover:text-white transition-colors flex items-center"
              aria-label="Xpectra GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a href="https://app.xpectraflow.com" target="_blank" rel="noopener noreferrer" aria-label="Try Xpectra">
              <Button
                className="h-9 px-4 bg-white text-black hover:bg-gray-100 font-semibold text-[13px]"
              >
                Try Xpectra
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/70 hover:text-white"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
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
            className="md:hidden absolute top-16 left-0 w-full bg-background/90 backdrop-blur-2xl border-b border-border-subtle p-6 flex flex-col gap-4 max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <Link href="/product" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium py-4 block border-b border-white/5">Product</Link>
            <Link href="/solutions" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium py-4 block border-b border-white/5">Solutions</Link>
            <Link href="/integrations" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium py-4 block border-b border-white/5">Integrations</Link>
            <Link href="/quickstart" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium py-4 block border-b border-white/5">Quickstart</Link>
            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium py-4 block border-b border-white/5">Blog</Link>
            <a
              href="https://github.com/xpectraflow"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-medium py-3 flex items-center gap-2 border-b border-white/5"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
            <a href="https://app.xpectraflow.com" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} aria-label="Try Xpectra" className="w-full pt-4 block">
              <Button
                className="w-full bg-white text-black font-bold py-6 rounded-2xl text-lg"
              >
                Try Xpectra
              </Button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
