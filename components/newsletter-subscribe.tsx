"use client";

import React, { useActionState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail, Loader2, AlertCircle } from 'lucide-react';
import { subscribeToNewsletter } from '@/app/actions/subscribe';

const initialState = {
  success: false,
  message: '',
  error: '',
};

export const NewsletterSubscribe = () => {
  const [state, formAction, isPending] = useActionState(subscribeToNewsletter, initialState);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto mt-24 p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-blue-600/5 blur-[80px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-mono text-purple-400 uppercase tracking-wider mb-6">
            <Mail size={12} /> Stay Ahead of the Curve
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Xpectra Engineering Insights</h3>
          <p className="text-white/50 text-lg leading-relaxed">
            Get exclusive deep dives on hardware telemetry, sensor validation, and the future of aerospace infrastructure. No spam, just engineering.
          </p>
        </div>

        <div className="flex-1 w-full max-w-md">
          {state?.success ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-green-500/5 border border-green-500/20 text-center"
            >
              <div className="text-green-400 font-mono font-bold uppercase tracking-[0.3em] text-lg">
                Subscribed
              </div>
            </motion.div>
          ) : (
            <form action={formAction} className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  name="email"
                  placeholder="engineer@company.com"
                  required
                  className="bg-white/5 border-white/10 focus:border-purple-500/50 h-14 pl-5 text-white text-lg rounded-xl"
                  disabled={isPending}
                />
                {state?.error && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 mt-3 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20"
                  >
                    <AlertCircle size={14} /> {state.error}
                  </motion.div>
                )}
              </div>
              <Button 
                type="submit" 
                disabled={isPending}
                className="w-full h-14 bg-white text-black hover:bg-white/90 font-bold text-lg rounded-xl transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {isPending ? (
                  <span className="flex items-center gap-2">
                    <Loader2 size={20} className="animate-spin" /> Joining...
                  </span>
                ) : (
                  "Subscribe to Blogs"
                )}
              </Button>
              <p className="text-[10px] text-white/30 text-center font-mono uppercase tracking-widest mt-4">
                Join 500+ Hardware Engineers
              </p>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
};
