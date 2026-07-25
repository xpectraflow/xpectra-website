"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SiteShell } from '@/components/site-shell';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { NewsletterSubscribe } from '@/components/newsletter-subscribe';

const BLOG_POSTS = [
  {
    title: "Xpectra vs. NI SystemLink: Choosing the Right Data Infrastructure for Agile Hardware",
    description: "An objective breakdown of the architectural differences between NI SystemLink and Xpectra, outlining where each platform shines and helping you choose the right data infrastructure for your specific engineering goals.",
    date: "May 25, 2026",
    author: "Arush Kumar Singh",
    readTime: "6 min read",
    slug: "xpectra-vs-ni-systemlink",
    category: "Engineering",
    tags: ["SystemLink", "NI", "Telemetry", "Infrastructure", "Comparison"]
  },
  {
    title: "From Petabytes to Prototypes: How SpaceX Uses Data Infrastructure to Shrink Time-to-Insight",
    description: "Reverse-engineering how modern aerospace leaders handle mission-critical sensor data to shrink time-to-insight using Agile Aerospace and HIL testing.",
    date: "May 5, 2026",
    author: "Arush Kumar Singh",
    readTime: "6 min read",
    slug: "spacex-data-infrastructure-lessons",
    category: "Case Study",
    tags: ["SpaceX", "Telemetry", "Infrastructure", "Engineering"]
  },
  {
    title: "The Cost of \"Unknown-Unknowns\" in Aerospace Engineering",
    description: "Reverse-engineering why standard tools fail at hardware anomaly detection and how unifying metric spikes with logs can reduce MTTR from weeks to minutes.",
    date: "May 6, 2026",
    author: "Arush Kumar Singh",
    readTime: "7 min read",
    slug: "cost-of-unknown-unknowns",
    category: "Engineering",
    tags: ["Aerospace", "Telemetry", "Anomaly Detection", "Observability"]
  },
  {
    title: "The Sim-to-Real Gap: Why Hardware Iteration Requires More Than Just Simulation",
    description: "Exploring why simulations fall short and how high-velocity physical testing - powered by world-class telemetry data infrastructure - is the only way to uncover ground truth.",
    date: "May 8, 2026",
    author: "Arush Kumar Singh",
    readTime: "8 min read",
    slug: "bridging-the-sim-to-real-gap",
    category: "Engineering",
    tags: ["Simulation", "HIL", "Robotics", "Aerospace", "Telemetry"]
  },
  {
    title: "DO-178C and Beyond: Automating Compliance with Data Infrastructure",
    description: "In the aerospace and defense industries, building a functional piece of hardware is only half the battle. The other half is proving to regulatory bodies that your system is safe to fly.",
    date: "May 19, 2026",
    author: "Arush Kumar Singh",
    readTime: "5 min read",
    slug: "build-for-certification-xpectra",
    category: "Compliance",
    tags: ["Certification", "DO-178C", "Compliance", "Telemetry", "DO-254"]
  }
];

export const BlogList = () => {
  return (
    <SiteShell>
      <div className="relative pt-20 pb-20 px-6 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-emerald-600/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mb-4">
              Insights & Engineering
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">The Xpectra Blog</h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              Deep dives into telemetry infrastructure, sensor validation, and the future of hardware engineering.
            </p>
          </motion.div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex"
              >
                <Link href={`/blog/${post.slug}`} className="group block w-full">
                  <Card className="h-full flex flex-col bg-white/[0.02] border-white/10 hover:border-white/30 hover:bg-white/[0.04] transition-all duration-700 overflow-hidden backdrop-blur-md relative group-hover:-translate-y-2">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono text-white/30 mb-6">
                        <span className="px-2 py-1 rounded bg-white/5 text-white/60 border border-white/10 uppercase tracking-wider">{post.category}</span>
                        <span className="flex items-center gap-1 uppercase tracking-widest">{post.date}</span>
                      </div>
                      
                      <h2 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors leading-tight line-clamp-3">
                        {post.title}
                      </h2>
                      
                      <p className="text-white/40 mb-8 text-sm line-clamp-3 leading-relaxed">
                        {post.description}
                      </p>
                      
                      <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] mb-1">Duration</span>
                          <span className="text-xs font-mono text-white/50">{post.readTime}</span>
                        </div>
                        <div className="flex items-center text-xs font-bold text-white/40 group-hover:text-white transition-all">
                          Read <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <NewsletterSubscribe />
        </div>
      </div>
    </SiteShell>
  );
};
