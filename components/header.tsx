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

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button 
                onClick={() => setSolutionsOpen((prev) => !prev)}
                className="text-[17px] font-medium text-white/65 hover:text-white transition-colors inline-flex items-center gap-1.5 py-2 cursor-pointer focus:outline-none"
              >
                Solutions
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-200 text-white/60", solutionsOpen && "rotate-180 text-white")} />
              </button>

              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[350px] p-3 rounded-2xl bg-[#090a0f] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.95)] z-50"
                  >
                    <div className="flex flex-col gap-1">
                      {solutionsListSummary.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.id}
                            href={`/solutions/${item.id}`}
                            onClick={() => setSolutionsOpen(false)}
                            className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-all"
                          >
                            <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/90 group-hover:bg-white/10 group-hover:border-white/20 transition-colors shrink-0">
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-sm font-medium text-white group-hover:text-white transition-colors">
                                  {item.title}
                                </span>
                                {item.badge && (
                                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white/70 border border-white/15">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-white/60 truncate mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="https://docs.xpectraflow.com" target="_blank" rel="noopener noreferrer" className="text-[17px] font-medium text-white/65 hover:text-white transition-colors">
              Docs
            </a>
            <a href="https://docs.xpectraflow.com/quickstart" target="_blank" rel="noopener noreferrer" className="text-[17px] font-medium text-white/65 hover:text-white transition-colors">
              Quickstart
            </a>
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
            <Link
              href="/#pilot"
              aria-label="Try Xpectra"
              onClick={(e) => {
                if (typeof window !== "undefined" && window.location.pathname === "/") {
                  e.preventDefault();
                  const el = document.getElementById("pilot") || document.getElementById("contact");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    setTimeout(() => {
                      const emailInput = (document.getElementById("pilot-email") || el.querySelector('input[type="email"]')) as HTMLInputElement | null;
                      if (emailInput) emailInput.focus();
                    }, 400);
                  }
                }
              }}
            >
              <Button
                className="h-9 px-4 bg-white text-black hover:bg-gray-100 font-semibold text-[13px] cursor-pointer"
              >
                Try Xpectra
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </Link>
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
            className="md:hidden absolute top-16 left-0 w-full bg-[#090a0f] border-b border-white/15 p-6 flex flex-col gap-4 max-h-[calc(100vh-4rem)] overflow-y-auto z-50 shadow-2xl"
          >
            <Link href="/product" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium py-4 block border-b border-white/5">Product</Link>
            
            {/* Mobile Solutions Collapsible */}
            <div className="border-b border-white/5 pb-2">
              <button
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="w-full flex items-center justify-between text-xl font-medium py-4 text-left text-white"
              >
                <span>Solutions</span>
                <ChevronDown className={cn("w-5 h-5 transition-transform duration-200 text-white/70", mobileSolutionsOpen && "rotate-180")} />
              </button>
              {mobileSolutionsOpen && (
                <div className="pl-4 pb-2 flex flex-col gap-3.5">
                  {solutionsListSummary.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.id}
                        href={`/solutions/${item.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 text-base text-white/80 hover:text-white"
                      >
                        <Icon className="w-4 h-4 text-white/80 shrink-0" />
                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <a href="https://docs.xpectraflow.com" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium py-4 block border-b border-white/5">Docs</a>
            <a href="https://docs.xpectraflow.com/quickstart" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium py-4 block border-b border-white/5">Quickstart</a>
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
            <Link
              href="/#pilot"
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (typeof window !== "undefined" && window.location.pathname === "/") {
                  e.preventDefault();
                  const el = document.getElementById("pilot") || document.getElementById("contact");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    setTimeout(() => {
                      const emailInput = (document.getElementById("pilot-email") || el.querySelector('input[type="email"]')) as HTMLInputElement | null;
                      if (emailInput) emailInput.focus();
                    }, 400);
                  }
                }
              }}
              aria-label="Try Xpectra"
              className="w-full pt-4 block"
            >
              <Button
                className="w-full bg-white text-black font-bold py-6 rounded-2xl text-lg cursor-pointer"
              >
                Try Xpectra
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
