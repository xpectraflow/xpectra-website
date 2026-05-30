"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type LogoItem = { src: string; name: string | null };

// Horizontal distance between slot centers (card width + gap)
const SLOT_PX = 160;

interface AnimatedCarouselProps {
  title?: string;
  logos?: LogoItem[] | null;
  autoPlayInterval?: number;
  titleClassName?: string;
  padding?: string;
  spacing?: string;
  [key: string]: unknown; // absorb legacy props
}

export const AnimatedCarousel = ({
  title = "Trusted by thousands of businesses worldwide",
  logos = null,
  autoPlayInterval = 2000,
  titleClassName = "",
  padding = "py-10",
  spacing = "gap-6",
}: AnimatedCarouselProps) => {
  const items: LogoItem[] = (logos ?? []) as LogoItem[];
  const count = items.length;
  const [center, setCenter] = useState(0);

  // Auto-advance forever
  useEffect(() => {
    if (count < 2) return;
    const id = setInterval(() => {
      setCenter((prev) => (prev + 1) % count);
    }, autoPlayInterval);
    return () => clearInterval(id);
  }, [count, autoPlayInterval]);

  if (count === 0) return null;

  return (
    // w-full so it fills whatever flex container it's placed in
    <div className={`w-full ${padding} bg-transparent`}>
      <div className={`flex flex-col items-center text-center ${spacing}`}>

        <h2 className={`text-xl md:text-2xl tracking-tighter font-medium text-white/50 ${titleClassName}`}>
          {title}
        </h2>

        {/* ── Sliding spotlight track ── fixed height, logos absolutely centered */}
        <div className="relative w-full overflow-hidden" style={{ height: 180 }}>
          <div className="absolute inset-0 flex items-center justify-center">
            {items.map((item, idx) => {
              // Compute signed slot offset relative to current center, with wrapping
              let offset = ((idx - center) % count + count) % count;
              if (offset > Math.floor(count / 2)) offset -= count;

              const isCenter = offset === 0;
              const isVisible = Math.abs(offset) <= 1;

              return (
                <motion.div
                  key={idx}
                  className="absolute flex flex-col items-center gap-3 pointer-events-none"
                  animate={{
                    x: offset * SLOT_PX,
                    scale: isCenter ? 1 : 0.82,
                    opacity: isCenter ? 1 : isVisible ? 0.68 : 0,
                  }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                >
                  {/* Card */}
                  <div
                    className={`relative flex items-center justify-center rounded-2xl transition-all duration-500
                      ${isCenter
                        ? "w-28 h-28 bg-white/8 border border-white/22 shadow-[0_0_40px_rgba(255,255,255,0.07)]"
                        : "w-20 h-20 bg-white/6 border border-white/14"
                      }`}
                  >
                    {isCenter && (
                      <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/20 animate-pulse" />
                    )}
                    <Image
                      src={item.src}
                      alt={item.name ?? `Logo ${idx + 1}`}
                      width={120}
                      height={120}
                      className={`object-contain transition-all duration-500
                        ${isCenter ? "h-14 w-14 opacity-100" : "h-9 w-9 opacity-80"}`}
                      loading="lazy"
                    />
                  </div>

                  {/* Name */}
                  {item.name && (
                    <span
                      className={`font-mono uppercase whitespace-nowrap transition-all duration-500
                        ${isCenter
                          ? "text-[10px] tracking-[0.25em] text-white/90"
                          : "text-[9px] tracking-[0.18em] text-white/55"
                        }`}
                    >
                      {item.name}
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCenter(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === center
                  ? "w-5 h-1.5 bg-white/65"
                  : "w-1.5 h-1.5 bg-white/18 hover:bg-white/35"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export const Case1 = (props: AnimatedCarouselProps) => <AnimatedCarousel {...props} />;
