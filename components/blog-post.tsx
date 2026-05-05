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
            <p className="text-xl leading-relaxed text-white/80 mb-8 font-medium">
              When the public watches a SpaceX test flight, they see a spectacle of fire, steel, and occasionally, spectacular explosions. But to the engineering teams behind the scenes, a test flight isn't just a physical event; it is a massive data acquisition exercise.
            </p>

            <p className="text-lg text-white/60 mb-6">
              SpaceX has redefined the aerospace industry by championing "Agile Aerospace"—a philosophy that prioritizes rapid prototyping, destructive testing, and continuous iteration over the traditional, decades-long "waterfall" development cycles. However, this level of speed is physically impossible without a world-class telemetry data infrastructure.
            </p>

            <p className="text-lg text-white/60 mb-8">
              In this post, we will reverse-engineer how modern aerospace leaders handle immense volumes of mission-critical sensor data to shrink the time-to-insight in hardware engineering, and how emerging teams can replicate this architecture to accelerate their own development cycles.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Bottleneck: Surviving the Data Deluge</h2>
            <p className="text-lg text-white/60 mb-6">
              During a single engine test or flight, a modern launch vehicle generates petabytes of raw data. Every valve, actuator, thermal sensor, and inertial measurement unit (IMU) streams high-frequency data back to the ground.
            </p>
            <p className="text-lg text-white/60 mb-6">
              The challenge isn't merely collecting this data; it is making sense of it instantly under extreme time pressure. Traditional linear development models treat design changes as prohibitively expensive, relying heavily on slow, sequential testing phases (Bell & D'Amico, 2025). 
            </p>
            <p className="text-lg text-white/60 mb-6">
              In contrast, modern iterative hardware development demands that engineers immediately correlate what happened on the test stand with the control software's decisions. Telemetry in spaceflight is the primary safety mechanism that allows engineers to understand vehicle state and make go/no-go decisions.
            </p>

            <blockquote className="border-l-4 border-purple-500 pl-6 py-2 my-10 italic text-xl text-white/90 bg-white/5 rounded-r-lg">
              "A telemetry pipeline must guarantee integrity (un-corrupted readings), strict ordering (reconstructable sequence of events), and survivability (no data loss during communication blackouts)." — Engineering Principle
            </blockquote>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Architecture of Agile Aerospace</h2>
            <p className="text-lg text-white/60 mb-4">
              To handle this load, the data architecture is typically divided into three primary stages:
            </p>
            <ul className="space-y-4 text-lg text-white/60 mb-8">
              <li><strong>1. Reception and Decommutation:</strong> Capturing RF signals and parsing binary packets into human-readable engineering units.</li>
              <li><strong>2. The Fan-Out:</strong> Broadcasting data across local networks for sub-millisecond updates in the control room.</li>
              <li><strong>3. The Live vs. Archival Split:</strong> Separating high-speed caches (Redis) for real-time alerts from time-series databases (QuestDB) for post-mission analysis.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Engine of Iteration: Hardware-in-the-Loop (HIL)</h2>
            <p className="text-lg text-white/60 mb-6">
              Perhaps the most critical component is Hardware-in-the-Loop (HIL) testing. HIL is the bridge between the digital and physical worlds. In HIL, the flight computer is connected to a simulator that mimics the vehicle’s sensors and actuators.
            </p>
            <p className="text-lg text-white/60 mb-6">
              This creates a continuous feedback loop: <br />
              <code className="text-purple-400 bg-white/5 px-2 py-1 rounded">Flight Data {"->"} Analysis {"->"} Software Patch {"->"} HIL Validation {"->"} Next Flight</code>
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">A Concrete Scenario: The 400Hz Anomaly</h2>
            <p className="text-lg text-white/60 mb-12">
              Imagine an IMU sensor detecting a micro-vibration at 400Hz during liftoff. At SpaceX, that data is indexed and available in a time-series dashboard within seconds. The vibration analyst can correlate it with engine throttle commands immediately, allowing a fix to be implemented before the next test window, 48 hours later.
            </p>

            <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold mb-2">How is hardware observability different from standard DevOps?</h4>
                  <p className="text-white/50 text-sm">Standard observability focuses on software metrics (CPU, latency). Hardware observability requires tracking physical metrics (vibration, heat, pressure) at extremely high frequencies with strict deterministic ordering.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Why are time-series databases used for telemetry?</h4>
                  <p className="text-white/50 text-sm">TSDBs are optimized to ingest massive volumes of time-stamped inserts while allowing fast range-queries (e.g., "show anomalies between T-10s and T+5s") much faster than relational databases.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">How does HIL testing shrink development time?</h4>
                  <p className="text-white/50 text-sm">HIL allows software teams to test algorithms against physical avionics hardware before the entire vehicle is built, catching critical integration bugs months earlier.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 py-8 border-y border-white/10 my-12">
              {post.tags.map((tag: string) => (
                <span key={tag} className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 text-xs text-white/40 border border-white/10">
                  <Tag size={12} /> {tag}
                </span>
              ))}
            </div>

            <div className="mt-16 pt-8">
              <h2 className="text-xl font-bold text-white mb-6">References & Further Reading</h2>
              <ul className="space-y-4 text-sm text-white/40 font-mono list-none p-0">
                <li className="pl-0">
                  <span className="text-white/60">[1]</span> Ali, S., Hussain, F., & Zia, M. Y. I. (2022). "Hardware-in-the-Loop-Based Real-Time Fault Injection Framework." <i>Sensors</i>.
                </li>
                <li className="pl-0">
                  <span className="text-white/60">[2]</span> Bell, T., & D'Amico, S. (2025). "Event-Driven Simulation for Rapid Iterative Development." <i>arXiv preprint</i>.
                </li>
                <li className="pl-0">
                  <span className="text-white/60">[3]</span> Educative. (2024). "SpaceX System Design Interview." <i>Educative.io</i>.
                </li>
                <li className="pl-0">
                  <span className="text-white/60">[4]</span> Jin, L. (2024). "Spacecraft System Architecture: High-Reliability Data Center That Flies." <i>Medium</i>.
                </li>
                <li className="pl-0">
                  <span className="text-white/60">[5]</span> Kanzlivius, C., et al. (2020). "Hardware-In-The-Loop Tests for Rocket Propulsion Systems." <i>ResearchGate</i>.
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
