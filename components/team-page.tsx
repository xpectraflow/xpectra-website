"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { SiteShell } from '@/components/site-shell';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

const TeamPage = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Arush Kumar Singh",
      role: "Founder",
      bio: "Ex-ButterCutAI, Ex-Galaxeye, Ex-Nabhdrishti Aerospace. Building high-availability infrastructure for the most demanding sensor environments.",
      image: "/arush.jpg",
      linkedin: "https://www.linkedin.com/in/arush-kumar-singh/"
    }
  ];

  return (
    <SiteShell>
      <section className="relative min-h-[40vh] flex flex-col items-center justify-center px-6 pt-24 pb-12">
        <div className="max-w-6xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-5xl sm:text-7xl font-black mb-8 tracking-tighter">
              The team behind the telemetry.
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We aren't building a no-code tool. We're building the infrastructure layer
              mission-critical hardware deserves.
            </p>
          </motion.div>


          <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="p-10 rounded-3xl bg-card-bg backdrop-blur-3xl border border-border-subtle hover:bg-slate-200 hover:border-slate-300 transition-all duration-500 overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Mail size={120} />
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-10 text-left">
                    <div className="relative w-40 h-40 shrink-0 rounded-2xl overflow-hidden border-2 border-slate-200 group-hover:border-slate-300 transition-all duration-500">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:grayscale-0 transition-all duration-500"
                        sizes="160px"
                      />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black mb-2">{member.name}</h3>
                      <p className="text-xl text-slate-500 mb-6 font-medium">{member.role}</p>
                      <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">{member.bio}</p>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card-bg border border-border-subtle text-slate-900 hover:bg-slate-200 transition-all"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="text-sm font-bold uppercase tracking-widest">Connect</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Note */}
      <section className="py-12 px-6 border-t border-border-subtle/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-300 font-mono text-sm uppercase tracking-[0.3em] mb-8">Engineering Philosophy</p>
          <h2 className="text-3xl sm:text-2xl font-bold leading-relaxed">
            We're obsessed with the hard plumbing: consistency, durability, and sub-second latency.
            Because when you're running a test, "mostly reliable" is just another way of saying it's broken.
          </h2>
        </div>
      </section>
    </SiteShell>
  );
};

export default TeamPage;
