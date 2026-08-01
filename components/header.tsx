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
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Xpectra Home">
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

            {/* Solutions Dropdown Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button 
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors py-2 group"
                aria-expanded={solutionsOpen}
              >
                <span>Solutions</span>
                <ChevronDown className={cn("w-3.5 h-3.5 text-white/50 group-hover:text-white transition-transform duration-200", solutionsOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[460px] rounded-2xl border border-white/15 bg-[#0c0d10]/95 backdrop-blur-2xl shadow-2xl p-3 z-50 overflow-hidden"
                  >
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2 px-2.5 pt-1">
                      Industry Telemetry Solutions
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {solutionsListSummary.map((sol) => {
                        const IconComp = sol.icon;
                        return (
                          <Link
                            key={sol.id}
                            href={`/solutions/${sol.id}`}
                            onClick={() => setSolutionsOpen(false)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all group"
                          >
                            <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all shrink-0">
                              <IconComp className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors">{sol.title}</span>
                                <span className="text-[9px] font-mono text-white/50 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">{sol.badge}</span>
                              </div>
                              <p className="text-[11px] text-white/50 font-light mt-0.5 leading-snug">{sol.desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mt-2 pt-2.5 border-t border-white/10 flex items-center justify-between px-2.5 pb-1">
                      <Link
                        href="/solutions"
                        onClick={() => setSolutionsOpen(false)}
                        className="text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-semibold"
                      >
                        View All Solutions <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-[10px] font-mono text-white/40">5 Industry Architectures</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/integrations" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              Integrations
            </Link>
            <Link href="/quickstart" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              Quickstart
            </Link>
            <Link href="/blog" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              Blog
            </Link>
            <a 
              href="https://github.com/xpectraflow" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/70 hover:text-white transition-colors flex items-center" 
              aria-label="Xpectra GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a href="https://app.xpectraflow.com" target="_blank" rel="noopener noreferrer" aria-label="Try Xpectra">
              <Button
                size="sm"
                className="bg-white text-black hover:bg-gray-100 font-semibold"
              >
                Try Xpectra
                <ArrowRight className="ml-2 h-4 w-4" />
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
            <Link href="/product" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium py-3 block border-b border-white/5">Product</Link>
            
            {/* Mobile Solutions Accordion */}
            <div className="border-b border-white/5 py-3">
              <button 
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="w-full flex items-center justify-between text-xl font-medium text-left"
              >
                <span>Solutions</span>
                <ChevronDown className={cn("w-5 h-5 text-white/50 transition-transform", mobileSolutionsOpen && "rotate-180")} />
              </button>
              {mobileSolutionsOpen && (
                <div className="mt-4 flex flex-col gap-3 pl-3 border-l-2 border-emerald-500/30">
                  <Link href="/solutions" onClick={() => setMobileMenuOpen(false)} className="text-sm font-mono text-emerald-400 font-semibold">
                    All Solutions Overview →
                  </Link>
                  {solutionsListSummary.map((sol) => (
                    <Link
                      key={sol.id}
                      href={`/solutions/${sol.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-base text-white/80 hover:text-white block py-1"
                    >
                      {sol.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/integrations" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium py-3 block border-b border-white/5">Integrations</Link>
            <Link href="/quickstart" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium py-3 block border-b border-white/5">Quickstart</Link>
            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium py-3 block border-b border-white/5">Blog</Link>
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
