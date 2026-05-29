"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export const AnimatedCarousel = ({
  title = "Trusted by thousands of businesses worldwide",
  logoCount = 15,
  autoPlay = true,
  autoPlayInterval = 2000,
  logos = null as (string | { src: string; name: string | null })[] | null,
  containerClassName = "",
  titleClassName = "",
  carouselClassName = "",
  logoClassName = "",
  itemsPerViewMobile = 4,
  itemsPerViewDesktop = 6,
  spacing = "gap-10",
  padding = "py-20 lg:py-40",
  logoContainerWidth = "w-48",
  logoContainerHeight = "h-24",
  logoImageWidth = "w-auto",
  logoImageHeight = "h-full",
  logoMaxWidth = "",
  logoMaxHeight = "",
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api || !autoPlay) {
      return;
    }

    const timer = setTimeout(() => {
      // Don't auto-play if page is hidden to save main thread
      if (typeof document !== 'undefined' && document.hidden) return;

      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent((prev) => prev + 1);
      }
    }, autoPlayInterval);

    return () => clearTimeout(timer);
  }, [api, current, autoPlay, autoPlayInterval]);

  const logoItems = logos || Array.from({ length: logoCount }, (_, i) => ({
    src: `https://th.bing.com/th/id/R.4aa108082e7d3cbd55add79f84612aaa?rik=I4dbPhSe%2fbHHSg&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png&ehk=ewmaCOvP0Ji4QViEJnxSdlrYUrTSTWhi8nZ9XdyCgAI%3d&risl=&pid=ImgRaw&r=0100x100?text=Logo+${i + 1}`,
    name: null
  }));

  const logoImageSizeClasses = `${logoImageWidth} ${logoImageHeight} ${logoMaxWidth} ${logoMaxHeight}`.trim();

  return (
    <div className={`w-full ${padding} bg-transparent ${containerClassName}`}>
      <div className={`flex flex-col items-center text-center ${spacing}`}>
        <h2 className={`text-xl md:text-2xl tracking-tighter font-medium text-slate-500 ${titleClassName}`}>
          {title}
        </h2>

        <div className="w-full max-w-5xl mx-auto px-4">
          <Carousel setApi={setApi} opts={{ loop: true, align: "center" }} className={`w-full ${carouselClassName}`}>
            <CarouselContent>
              {logoItems.map((logoItem, index) => {
                const src = typeof logoItem === "string" ? logoItem : logoItem.src;
                const name = typeof logoItem === "string" ? null : logoItem.name;
                const customClass = typeof logoItem === "string" ? "" : (logoItem as any).className || "";

                return (
                  <CarouselItem className={`basis-1/${itemsPerViewMobile} lg:basis-1/${itemsPerViewDesktop} flex justify-center`} key={index}>
                    <div className="flex flex-col items-center gap-3 group">
                      <div className={`flex ${logoContainerWidth} ${logoContainerHeight} items-center justify-center transition-all ${logoClassName}`}>
                        <Image
                          src={src}
                          alt={name || `Logo ${index + 1}`}
                          width={200}
                          height={100}
                          className={`${logoImageSizeClasses} object-contain opacity-80 group-hover:opacity-100 transition-all duration-500 ${customClass}`}
                          loading="lazy"
                        />
                      </div>
                      {name && (
                        <div className="flex justify-center w-full">
                          <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-700 group-hover:text-slate-900 transition-colors whitespace-nowrap">
                            {name}
                          </span>
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export const Case1 = (props: any) => {
  return <AnimatedCarousel {...props} />;
};
