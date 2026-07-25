"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe, Cpu, ShieldCheck, Sparkles, Plane, Zap, Sliders, ArrowRight, X, Search,
  Cloud, HardDrive, Shield, Check
} from 'lucide-react';

export interface StandardItem {
  id: string;
  name: string;
  count: string;
  icon?: any;
  iconColor?: string;
  glowColor?: string;
  description?: string;
  category?: string;
  isHighlight?: boolean;
}

export const standardsList: StandardItem[] = [
  {
    id: "astm",
    name: "ASTM",
    count: "18+ Standards",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" {...props}>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    iconColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
    glowColor: "rgba(16, 185, 129, 0.15)",
    description: "Materials testing, structural mechanics, stress-strain analysis, and fatigue testing protocols.",
    category: "Materials & Testing"
  },
  {
    id: "iso",
    name: "ISO",
    count: "25+ Standards",
    icon: Globe,
    iconColor: "text-blue-400 border-blue-500/20 bg-blue-500/10",
    glowColor: "rgba(59, 130, 246, 0.15)",
    description: "Quality management systems (ISO 9001, ISO 17025), environmental testing, and calibration standards.",
    category: "Quality & Systems"
  },
  {
    id: "iec",
    name: "IEC",
    count: "22+ Standards",
    icon: Cpu,
    iconColor: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
    glowColor: "rgba(6, 182, 212, 0.15)",
    description: "Electrotechnical standards, EMC/EMI testing, power electronics, and sensor hardware interfacing.",
    category: "Electronics & Hardware"
  },
  {
    id: "mil-std",
    name: "MIL-STD",
    count: "10+ Standards",
    icon: ShieldCheck,
    iconColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
    glowColor: "rgba(16, 185, 129, 0.15)",
    description: "MIL-STD-810H environmental engineering, MIL-STD-1553 bus protocols, and defense qualification testing.",
    category: "Defense & Aerospace"
  },
  {
    id: "sae",
    name: "SAE",
    count: "7+ Standards",
    icon: Sparkles,
    iconColor: "text-sky-400 border-sky-500/20 bg-sky-500/10",
    glowColor: "rgba(56, 189, 248, 0.15)",
    description: "Automotive & aerospace engineering standards, CAN bus telemetry, and vehicle control unit testing.",
    category: "Automotive & Mobility"
  },
  {
    id: "rtca",
    name: "RTCA",
    count: "4+ Standards",
    icon: Plane,
    iconColor: "text-cyan-300 border-cyan-500/20 bg-cyan-500/10",
    glowColor: "rgba(45, 212, 191, 0.15)",
    description: "DO-160 environmental conditions and test procedures for airborne equipment and avionics validation.",
    category: "Avionics & Flight"
  },
  {
    id: "ieee",
    name: "IEEE",
    count: "6+ Standards",
    icon: Zap,
    iconColor: "text-sky-400 border-sky-500/20 bg-sky-500/10",
    glowColor: "rgba(14, 165, 233, 0.15)",
    description: "IEEE 1451 smart transducer interface, sensor bus communications, and electrical signal integrity.",
    category: "Electrical & Instrumentation"
  },
  {
    id: "etsi",
    name: "ETSI",
    count: "5+ Standards",
    icon: Sliders,
    iconColor: "text-blue-400 border-blue-500/20 bg-blue-500/10",
    glowColor: "rgba(96, 165, 250, 0.15)",
    description: "Telecommunications, radio frequency testing, wireless telemetry data protocols, and field testing.",
    category: "Telecommunications"
  },
  {
    id: "jss-jis-din",
    name: "JSS / JIS / DIN",
    count: "8+ Standards",
    icon: (props: any) => (
      <div className="grid grid-cols-3 gap-0.5 w-5 h-5 items-center justify-center" {...props}>
        {[...Array(9)].map((_, i) => (
          <span key={i} className="w-1.2 h-1.2 rounded-full bg-current opacity-90" />
        ))}
      </div>
    ),
    iconColor: "text-white/90 border-white/20 bg-white/10",
    glowColor: "rgba(255, 255, 255, 0.1)",
    description: "Joint Services Specifications, Japanese Industrial Standards, and German Institute for Standardization.",
    category: "International & Defense"
  }
];

export const allStandardsDetail = [
  { code: "ASTM E8 / E8M", name: "Tension Testing of Metallic Materials", category: "ASTM" },
  { code: "ASTM D3039", name: "Tensile Properties of Polymer Matrix Composite Materials", category: "ASTM" },
  { code: "ASTM E21", name: "Elevated Temperature Tension Tests of Metallic Materials", category: "ASTM" },
  { code: "ASTM E399", name: "Linear-Elastic Plane-Strain Fracture Toughness K1c", category: "ASTM" },
  { code: "ASTM E466", name: "Force-Controlled Constant Amplitude Axial Fatigue Tests", category: "ASTM" },
  { code: "ASTM E1820", name: "Standard Test Method for Measurement of Fracture Toughness", category: "ASTM" },

  { code: "ISO 9001:2015", name: "Quality Management Systems Requirements", category: "ISO" },
  { code: "ISO/IEC 17025", name: "Testing and Calibration Laboratories Competence", category: "ISO" },
  { code: "ISO 26262", name: "Road Vehicles — Functional Safety (ASIL A-D)", category: "ISO" },
  { code: "ISO 16750", name: "Environmental Conditions for Electrical & Electronic Equipment", category: "ISO" },
  { code: "ISO 21782", name: "Electrically Propelled Road Vehicles Test Specification", category: "ISO" },

  { code: "IEC 60068-2-6", name: "Sinusoidal Vibration Environmental Testing", category: "IEC" },
  { code: "IEC 60068-2-27", name: "Shock Mechanical Testing Protocols", category: "IEC" },
  { code: "IEC 61000-4-2", name: "Electrostatic Discharge Immunity (ESD)", category: "IEC" },
  { code: "IEC 61508", name: "Functional Safety of Electrical/Electronic Systems (SIL)", category: "IEC" },

  { code: "MIL-STD-810H", name: "Environmental Engineering Considerations & Laboratory Tests", category: "MIL-STD" },
  { code: "MIL-STD-1553B", name: "Digital Time Division Command/Response Multiplex Data Bus", category: "MIL-STD" },
  { code: "MIL-STD-461G", name: "Electromagnetic Interference Characteristics of Subsystems", category: "MIL-STD" },
  { code: "MIL-STD-704F", name: "Aircraft Electric Power Characteristics", category: "MIL-STD" },

  { code: "SAE J1939", name: "Serial Control and Communications Heavy Duty Vehicle Network", category: "SAE" },
  { code: "SAE AS5506", name: "Architecture Analysis & Design Language (AADL)", category: "SAE" },
  { code: "SAE AIR1378", name: "Aircraft Exhaust System Test Procedures", category: "SAE" },

  { code: "RTCA DO-160G", name: "Environmental Conditions & Test Procedures for Airborne Equipment", category: "RTCA" },
  { code: "RTCA DO-178C", name: "Software Considerations in Airborne Systems & Equipment Certification", category: "RTCA" },
  { code: "RTCA DO-254", name: "Design Assurance Guidance for Airborne Electronic Hardware", category: "RTCA" },

  { code: "IEEE 1451", name: "Smart Transducer Interface for Sensors and Actuators", category: "IEEE" },
  { code: "IEEE 1588", name: "Precision Time Protocol (PTP) for Networked Measurement", category: "IEEE" },
  { code: "IEEE 802.3", name: "Ethernet Data Transmission & Synchronization", category: "IEEE" },

  { code: "ETSI EN 300 220", name: "Short Range Devices (SRD) Operating in 25 MHz to 1000 MHz", category: "ETSI" },
  { code: "ETSI TS 103 645", name: "Cyber Security for Consumer Internet of Things", category: "ETSI" },

  { code: "JSS 55555", name: "Environmental Test Methods for Military Electronic Equipment", category: "JSS / JIS / DIN" },
  { code: "JIS Z 2241", name: "Metallic Materials — Tensile Testing", category: "JSS / JIS / DIN" },
  { code: "DIN EN ISO 527", name: "Plastics — Determination of Tensile Properties", category: "JSS / JIS / DIN" },
];

export function EngineeringStandards() {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'ASTM', 'ISO', 'IEC', 'MIL-STD', 'SAE', 'RTCA', 'IEEE', 'ETSI', 'JSS / JIS / DIN'];

  const filteredStandards = allStandardsDetail.filter(std => {
    const matchesSearch = std.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      std.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || std.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="relative w-full z-10 rounded-3xl border border-white/12 bg-white/[0.04] p-6 sm:p-10 md:p-12 transition hover:bg-white/[0.06] overflow-hidden">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
        <p className="text-xs font-mono uppercase tracking-[0.35em] text-white/50">
          ENGINEERING STANDARDS
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
          Built Around Global Engineering Standards
        </h2>
        <p className="text-sm sm:text-base text-white/60 leading-relaxed">
          Xpectra is designed to support the world's leading testing, quality, safety and environmental standards.
        </p>
      </div>

      {/* Grid of standards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 relative z-10">
        {standardsList.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => setModalOpen(true)}
              className="group relative flex items-center gap-3.5 p-4 sm:p-4.5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Subtle hover accent line */}
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${item.iconColor} transition-transform duration-300 group-hover:scale-105 shadow-inner`}>
                {Icon && (typeof Icon === 'function' ? <Icon /> : <Icon className="w-5 h-5" />)}
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-white tracking-tight group-hover:text-white transition-colors">
                  {item.name}
                </h3>
                <p className="text-[11px] font-mono text-white/50 tracking-wide mt-0.5">
                  {item.count}
                </p>
              </div>
            </div>
          );
        })}

        {/* 10th Card: +100 Standards Supported */}
        <div
          onClick={() => setModalOpen(true)}
          className="group sm:col-span-2 md:col-span-2 relative flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 cursor-pointer text-center"
        >
          <span className="text-xl sm:text-2xl font-bold text-white tracking-wider font-mono group-hover:scale-105 transition-transform duration-300">
            +100
          </span>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/60 mt-1">
            Standards Supported
          </span>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-center mt-8 sm:mt-10 relative z-10">
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-xs font-mono uppercase tracking-[0.2em] text-white/80 transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white hover:scale-[1.02] shadow-lg"
        >
          <span>View All Standards</span>
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Interactive Standards Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-3xl max-h-[85vh] flex flex-col rounded-3xl border border-white/20 bg-[#0a0a0a] shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-white/50">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    Compliance & Interoperability
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Supported Engineering Standards
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="rounded-full p-2 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Controls */}
              <div className="p-6 border-b border-white/10 space-y-4 bg-white/[0.01]">
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search standards (e.g. MIL-STD-810H, ISO 26262, ASTM...)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 bg-white/5 border border-white/10 text-white placeholder:text-white/40 h-10 rounded-xl text-sm focus:outline-none focus:border-white/30"
                  />
                </div>

                {/* Category filters */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                        selectedCategory === cat
                          ? "bg-white text-black font-semibold"
                          : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Standards List Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-3 max-h-[450px] no-scrollbar">
                {filteredStandards.length > 0 ? (
                  filteredStandards.map((std, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-sm text-white">
                            {std.code}
                          </span>
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-white/60 border border-white/10">
                            {std.category}
                          </span>
                        </div>
                        <p className="text-xs text-white/70">
                          {std.name}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-emerald-400 font-mono shrink-0 ml-4">
                        <Check className="h-3.5 w-3.5" />
                        Built-in
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 text-white/40 text-sm font-mono">
                    No standards matching "{searchQuery}" found.
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-xs text-white/50 font-mono">
                <span>Showing {filteredStandards.length} standards</span>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
