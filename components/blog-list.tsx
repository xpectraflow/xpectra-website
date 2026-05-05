"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SiteShell } from '@/components/site-shell';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, User, Clock, ChevronRight } from 'lucide-react';

const BLOG_POSTS = [
  {
    title: "From Petabytes to Prototypes: How SpaceX Uses Data Infrastructure to Shrink Time-to-Insight",
    description: "Lessons from SpaceX's telemetry engine and how Xpectra helps engineering teams achieve similar iteration speeds.",
    date: "May 5, 2026",
    author: "Arush Kumar Singh",
    readTime: "6 min read",
    slug: "spacex-data-infrastructure-lessons",
    category: "Case Study",
    tags: ["SpaceX", "Telemetry", "Infrastructure", "Engineering"]
  }
];

export const BlogList = () => {
  return (
    <SiteShell>
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mb-6">
              Insights & Engineering
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">The Xpectra Blog</h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              Deep dives into telemetry infrastructure, sensor validation, and the future of hardware engineering.
            </p>
          </motion.div>

          <div className="grid gap-12">
            {BLOG_POSTS.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  <Card className="bg-white/[0.02] border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 text-xs font-mono text-white/40 mb-4">
                        <span className="px-2 py-0.5 rounded bg-white/5 text-white/60">{post.category}</span>
                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-white/60 mb-6 leading-relaxed text-lg">
                        {post.description}
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-white group-hover:gap-2 transition-all">
                        Read Post <ChevronRight size={16} className="ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SiteShell>
  );
};
