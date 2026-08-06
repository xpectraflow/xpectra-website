"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';
import { VideoPlayer } from '@/components/ui/video-thumbnail-player';
import { Input } from '@/components/ui/input';
import { SiteShell } from '@/components/site-shell';
import HeroOrbitDeck from "@/components/ui/hero-modern";
import { requestPilotAction } from "@/app/actions/request-pilot";

const XpectraWebsite = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => {
    const handlePilotFocus = () => {
      if (typeof window !== "undefined") {
        const hash = window.location.hash;
        if (hash === "#pilot" || hash === "#contact") {
          setTimeout(() => {
            const el = document.getElementById("pilot") || document.getElementById("contact");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
              setTimeout(() => {
                const emailInput = (document.getElementById("pilot-email") || el.querySelector('input[type="email"]')) as HTMLInputElement | null;
                if (emailInput) {
                  emailInput.focus();
                }
              }, 400);
            }
          }, 100);
        }
      }
    };

    handlePilotFocus();
    window.addEventListener("hashchange", handlePilotFocus);
    return () => window.removeEventListener("hashchange", handlePilotFocus);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    const formDataObj = new FormData();
    formDataObj.append("email", formData.email);

    const response = await requestPilotAction(formDataObj);

    setFormStatus({
      success: response.success,
      message: response.success ? response.message : response.error
    });

    if (response.success) {
      setFormData({ ...formData, email: '' });
    }
    setIsSubmitting(false);
  };

  return (
    <SiteShell>
      <HeroOrbitDeck
        problemStatement={
          <div className="relative z-10 rounded-3xl border border-red-500/10 bg-white/[0.03] px-8 py-10 flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-0 overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
            {/* Background glow */}
            <div className="pointer-events-none absolute -top-24 -left-16 w-96 h-96 rounded-full bg-red-500/[0.05] blur-3xl" />

            {/* Left: cascade + headline */}
            <div className="relative flex flex-col justify-center gap-6 flex-1 min-w-0 lg:pr-8">
              <div className="flex flex-wrap items-center gap-5">
                {[
                  { label: "New hardware version", bad: false },
                  { label: "New Sensors", bad: false },
                  { label: "New Data Format", bad: false },
                  { label: "Broken Scripts", bad: true },
                ].map((step, i, arr) => (
                  <React.Fragment key={step.label}>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-[0.12em] border whitespace-nowrap ${step.bad
                      ? "bg-red-500/10 border-red-500/30 text-red-400"
                      : "bg-white/[0.05] border-white/10 text-white/40"
                      }`}>
                      {step.label}
                    </span>
                    {i < arr.length - 1 && (
                      <span className="text-white/20 text-[11px] select-none">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
                Your test insights are trapped in<br />broken pipelines for weeks
              </h2>
            </div>

            {/* Right: three boxes stacked */}
            <div className="relative flex flex-col justify-center gap-3 lg:w-[440px] shrink-0 border-t border-white/10 pt-6 lg:border-t-0 lg:pt-0 lg:border-l lg:border-white/15 lg:pl-8">
              {[
                "5 engineers manually maintaining the pipeline",
                "Data lost across fragmented formats",
                "Insights take weeks, not minutes",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.05] px-4 py-4">
                  <span className="mt-[7px] shrink-0 h-2 w-2 rounded-full bg-red-400/60" />
                  <p className="text-base text-white/65 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        }
        headerRightWidget={
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="relative w-full z-10"
          >
            <VideoPlayer
              thumbnailUrl="/hero.png"
              videoUrl="https://www.youtube.com/embed/yRJlbAfxUm4?rel=0&modestbranding=1&autoplay=1"
              title="See Xpectra in Action"
              description="From sensor to dashboard in under 5 minutes."
              className="w-full rounded-3xl border border-white/10 shadow-2xl"
            />
          </motion.div>
        }>
      </HeroOrbitDeck>

      {/* Infrastructure ribbon */}
      <div className="relative bg-[#040404] border-y border-white/[0.05] py-6 overflow-hidden">
        <style>{`
          @keyframes xpectra-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-25%); }
          }
          .xpectra-marquee { animation: xpectra-scroll 28s linear infinite; display: flex; }
          .xpectra-marquee:hover { animation-play-state: paused; }
        `}</style>
        <p className="text-center text-[9px] font-mono uppercase tracking-[0.45em] text-white/20 mb-5">
          Deploy anywhere
        </p>
        <div className="overflow-hidden">
          <div className="xpectra-marquee">
            {[0, 1, 2, 3].map((set) => (
              <div key={set} className="flex items-center shrink-0">
                {[
                  {
                    label: "AWS",
                    icon: (
                      <svg viewBox="0 0 72 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-auto shrink-0">
                        <text x="4" y="27" fontSize="26" fontWeight="800" fontFamily="Arial,Helvetica,sans-serif" fill="white">aws</text>
                        <path d="M13 38Q36 45 59 38" stroke="#FF9900" strokeWidth="4" strokeLinecap="round"/>
                        <path d="M55 35.5L61 38L55 40.5" stroke="#FF9900" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                  },
                  {
                    label: "Google Cloud",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px] shrink-0">
                        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4"/>
                      </svg>
                    ),
                  },
                  {
                    label: "Azure",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px] shrink-0">
                        <path d="M13.05 4.24L6.56 18.05l2.22.01 1.34-2.95h5.78l1.01 2.95H19L13.05 4.24zm-.1 3.68 2.07 5.54h-3.96l1.89-5.54z" fill="#0078D4"/>
                      </svg>
                    ),
                  },
                  {
                    label: "On-Device",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[18px] w-[18px] shrink-0">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <rect x="7" y="7" width="10" height="10" rx="1"/>
                        <path d="M9 1v2M12 1v2M15 1v2M9 21v2M12 21v2M15 21v2M1 9h2M1 12h2M1 15h2M21 9h2M21 12h2M21 15h2"/>
                      </svg>
                    ),
                  },
                  {
                    label: "Xpectra Cloud",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[18px] w-[18px] shrink-0">
                        <path d="M3 15a4 4 0 0 0 4 4h10a4 4 0 0 0 0-8h-.5A5.5 5.5 0 0 0 5.5 8.5 4 4 0 0 0 3 12v3z"/>
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <React.Fragment key={`${set}-${item.label}`}>
                    <div className="flex items-center gap-2 text-white/30 px-8 whitespace-nowrap">
                      {item.icon}
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    <span className="text-white/10 text-lg select-none shrink-0">·</span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pilot Section */}
      <section id="pilot" className="relative py-16 md:py-24 px-6 md:px-10 lg:px-16 xl:px-24 bg-[#040404] overflow-hidden">
        {/* Dotted background */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-60"
          style={{
            backgroundImage: "radial-gradient(circle at 25% 25%, rgba(250,250,250,0.07) 0.7px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(250,250,250,0.07) 0.7px, transparent 1px)",
            backgroundSize: "12px 12px",
            backgroundRepeat: "repeat",
          }}
        />
        {/* Subtle blue center glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-blue-500/[0.06] blur-3xl z-0" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
          id="contact"
          className="relative z-10 max-w-5xl mx-auto"
        >
          {/* Card */}
          <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.03] px-8 py-10 md:px-12 md:py-12 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16 overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-16 right-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            {/* Inner glow */}
            <div className="pointer-events-none absolute -top-20 left-1/4 w-80 h-40 rounded-full bg-blue-400/[0.08] blur-2xl" />

            {/* Left: text */}
            <div className="flex flex-col gap-4 flex-1 min-w-0">
              <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/30">Pilot Program</p>
              <h2 className="text-4xl font-bold tracking-tight text-white leading-[1.15]">
                Stop debugging the pipeline<br />Start debugging the hardware
              </h2>
              <p className="text-white/45 text-base">One pilot. Your sensor workflow. 30 days.</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {["Your hardware & data", "Setup in days", "No lock in"].map((chip) => (
                  <span key={chip} className="inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-[0.1em] border border-white/10 bg-white/[0.04] text-white/40 whitespace-nowrap">
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block shrink-0 w-px self-stretch bg-white/[0.08]" />

            {/* Right: form */}
            <div className="flex flex-col justify-center gap-4 lg:w-[340px] shrink-0">
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <Input
                  id="pilot-email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/25 h-12 rounded-xl px-4 focus:ring-2 focus:ring-white/30 transition-all"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 px-6 bg-white text-black hover:bg-gray-100 font-semibold transition-all duration-200 rounded-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending…" : "Request pilot"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </form>
              {formStatus && (
                <div className={`p-3 rounded-xl border text-sm text-center ${formStatus.success ? 'bg-brand-emerald/10 border-brand-emerald/20 text-brand-emerald' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
                  {formStatus.message}
                </div>
              )}
              <a
                href="mailto:arush@xpectraflow.com"
                className="text-white/25 hover:text-white/55 transition-colors text-sm font-mono text-center"
              >
                arush@xpectraflow.com
              </a>
            </div>
          </div>
        </motion.div>
      </section>

    </SiteShell>
  );
};

export default XpectraWebsite;
