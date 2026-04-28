"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Footer } from '@/components/footer';

const ThreeBackground = dynamic(() => import('@/components/three-background'), { ssr: false });

export const SiteShell = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Delay mounting heavy 3D background to prioritize FCP and interactive elements
    const delay = setTimeout(() => {
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        window.requestIdleCallback(() => setMounted(true));
      } else {
        setMounted(true);
      }
    }, 1000);
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-background text-white overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        {mounted && (
          <ThreeBackground />
        )}
      </div>

      <div className="relative z-10">
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};
