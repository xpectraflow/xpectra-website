"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SiteShell } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User, Share2, Tag } from 'lucide-react';

export const BlogPost = ({ post }: { post: any }) => {
  return (
    <SiteShell>
      <article className="relative pt-32 pb-20 px-6">

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <header>
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-8 group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to blog
              </Link>

              <div className="flex items-center gap-4 text-xs font-mono text-white/40 mb-6">
                <span className="px-2 py-0.5 rounded bg-white/5 text-white/60">{post.category}</span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} /> 
                  <time dateTime={new Date(post.date).toISOString().split('T')[0]}>{post.date}</time>
                </span>
                <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">
                {post.title}
              </h1>

              <div className="flex items-center justify-between py-8 border-y border-white/10 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold text-white">
                    {post.author[0]}
                  </div>
                  <div>
                    <address className="text-sm font-bold text-white not-italic">{post.author}</address>
                    <div className="text-xs text-white/40">Engineering @ Xpectra</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-white/40 hover:text-white">
                  <Share2 size={16} className="mr-2" /> Share
                </Button>
              </div>
            </header>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert prose-purple max-w-none"
          >
            {/* Content ... */}
            <p className="text-xl leading-relaxed text-white/80 mb-8 font-medium">
              Hardware development used to move at the speed of smelting steel. Today, it moves at the speed of software. But there's a bottleneck that still haunts engineering teams: the transition from raw telemetry to actionable insight.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The High-Frequency Heartbeat</h2>
            <p className="text-lg text-white/60 mb-6">
              In modern aerospace and robotics, data isn't just a byproduct of a test; it is the test. When SpaceX fires a Raptor engine or tests a Starship prototype, they aren't just looking for "pass" or "fail." They are capturing millions of data points across thousands of sensors, many sampling at kilohertz frequencies.
            </p>
            <p className="text-lg text-white/60 mb-6">
              The magic isn't in the amount of data—it's in the **Time-to-Insight**. If a test finishes at 2:00 PM and the engineers don't have a standardized, clean dataset to analyze until the next morning, that's a lost day of iteration.
            </p>

            <blockquote className="border-l-4 border-purple-500 pl-6 py-2 my-10 italic text-xl text-white/90 bg-white/5 rounded-r-lg">
              "The best part is no part, the best process is no process. It weighs nothing, costs nothing, and can't go wrong." — Elon Musk
            </blockquote>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Data Exception</h2>
            <p className="text-lg text-white/60 mb-6">
              While SpaceX aims to simplify physical systems, they embrace massive complexity in their data systems. However, they follow a strict rule: **Data must be self-describing and validated at the source.** 
            </p>
            <p className="text-lg text-white/60 mb-6">
              This is where Xpectra comes in. We've taken the internal architectural patterns used by the world's most advanced aerospace companies and packaged them into a plug-and-play infrastructure for any engineering team.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Validation at the Edge</h3>
            <p className="text-lg text-white/60 mb-6">
              Waiting until data reaches a cloud bucket to find out a sensor was noisy or a packet was dropped is too late. Xpectra validates schemas and data integrity at the ingestion layer, catching silent failures before they pollute your analysis.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Standardized Schemas</h3>
            <p className="text-lg text-white/60 mb-6">
              Every team has their own "favorite" format—CSV, Parquet, HDF5, custom binary. Xpectra standardizes these inputs into a unified stream, ensuring that your analysis scripts work the first time, every time.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Iteration is the Only Advantage</h2>
            <p className="text-lg text-white/60 mb-12">
              In a competitive landscape, the team that learns the fastest wins. By eliminating the "data cleaning" tax, Xpectra allows your engineers to focus on what they were hired for: solving the hard physics problems, not debugging ingestion pipelines.
            </p>

            <div className="flex flex-wrap gap-2 py-8 border-y border-white/10 mb-12">
              {post.tags.map((tag: string) => (
                <span key={tag} className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 text-xs text-white/40 border border-white/10">
                  <Tag size={12} /> {tag}
                </span>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
              <h2 className="text-xl font-bold text-white mb-6">References & Further Reading</h2>
              <ul className="space-y-4 text-sm text-white/40 font-mono list-none p-0">
                <li className="pl-0">
                  <span className="text-white/60">[1]</span> Bell, T., & D'Amico, S. (2025). "Event-Driven Simulation for High-Frequency Telemetry Ingestion in Aerospace Systems." <i>Journal of Spacecraft and Rockets</i>.
                </li>
                <li className="pl-0">
                  <span className="text-white/60">[2]</span> Liu, W., et al. (2024). "Digital Twins of Space Environments: A Real-Time Telemetry Approach." <i>IEEE Transactions on Aerospace and Electronic Systems</i>.
                </li>
                <li className="pl-0">
                  <span className="text-white/60">[3]</span> Peterson, M., et al. (2022). "SpaceDrones 2.0: Hardware-in-the-Loop Simulation for Autonomous Satellite Operations." <i>AIAA Scitech 2022 Forum</i>.
                </li>
              </ul>
            </div>
          </motion.div>

          <footer className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-12 rounded-3xl bg-gradient-to-br from-purple-600/20 to-blue-600/10 border border-white/10 text-center"
            >
              <h2 className="text-3xl font-bold mb-4">Want to build like SpaceX?</h2>
              <p className="text-white/60 mb-8 max-w-md mx-auto">
                Standardize your telemetry infrastructure in days, not months. Start a pilot with Xpectra today.
              </p>
              <Link href="/#contact">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 font-bold px-8 rounded-full">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </footer>
        </div>
      </article>
    </SiteShell>
  );
};
