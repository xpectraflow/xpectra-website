"use client";

import React, { useState } from 'react';
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
                Your test insights are trapped in broken pipelines<br />for weeks
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

      {/* Pilot Section */}
      <section id="pilot" className="relative pt-0 -mt-8 pb-24 px-6 md:px-10 lg:px-16 xl:px-24 bg-[#040404] overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-80"
          style={{
            backgroundImage: "radial-gradient(circle at 25% 25%, rgba(250,250,250,0.08) 0.7px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(250,250,250,0.08) 0.7px, transparent 1px)",
            backgroundSize: "12px 12px",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] gap-10 lg:items-stretch"
          >
            {/* Left side: Pilot Info */}
            <div className="relative z-10 rounded-3xl border border-white/12 bg-white/6 p-8 transition hover:bg-white/10 flex flex-col h-full">
              <div className="flex items-start justify-between gap-4 mb-10">
                <div className="space-y-3 text-left">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/50">Action</p>
                  <h2 className="text-xl font-semibold tracking-tight text-white">Start with a pilot</h2>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10 mb-10">
                {[
                  { label: "Duration", value: "30-45 days, one sprint" },
                  { label: "Scope", value: "One sensor workflow you already run" },
                  { label: "Outcome", value: "Clear go/no-go with your own data" },
                  { label: "Data", value: "Your historical data, analysis-ready" }
                ].map((item, i) => (
                  <div key={i} className="text-left">
                    <div className="text-xs text-white/50 mb-2 font-mono uppercase tracking-wider">{item.label}</div>
                    <div className="text-base font-medium text-white/90">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-white/10">
                <p className="text-sm text-white/50 font-mono text-left leading-relaxed">
                  No procurement cycles. No ripping out existing tools. <br /><span className="text-white mt-1 inline-block">We plug into your workflow.</span>
                </p>
              </div>
            </div>

            {/* Right side: Request Form */}
            <div id="contact" className="relative z-10 rounded-3xl border border-white/12 bg-white/6 p-8 transition hover:bg-white/10 flex flex-col h-full">
              <div className="flex items-start justify-between gap-4 mb-8">
                <div className="space-y-3 text-left">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/50">Contact</p>
                  <h2 className="text-xl font-semibold tracking-tight text-white">Request a pilot</h2>
                </div>
              </div>

              <p className="text-white/60 mb-8 text-sm">
                Let's discuss how xpectra can strengthen your sensor operations.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12 rounded-xl px-4"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 bg-white text-black hover:bg-gray-200 font-bold transition-all duration-300 rounded-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send request"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>
                {formStatus && (
                  <div className={`mt-4 p-3 rounded-xl border text-sm ${formStatus.success ? 'bg-brand-emerald/10 border-brand-emerald/20 text-brand-emerald' : 'bg-brand-red/10 border-brand-red/20 text-brand-red'}`}>
                    {formStatus.message}
                  </div>
                )}
              </form>

              <div className="mt-auto pt-8 border-t border-transparent text-center">
                <p className="text-white/40 text-xs mb-3 uppercase tracking-wider font-mono">Or email us directly</p>
                <a
                  href="mailto:arush@xpectraflow.com"
                  className="text-white hover:text-white/80 transition-colors inline-flex items-center gap-2 font-medium text-sm"
                >
                  <Mail className="h-4 w-4" />
                  arush@xpectraflow.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </SiteShell>
  );
};

export default XpectraWebsite;
