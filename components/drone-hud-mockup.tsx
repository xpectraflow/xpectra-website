"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, Shield, Navigation, Wifi, Battery, AlertTriangle, Compass, Eye, CheckCircle2, Lock } from "lucide-react";

export function DroneFlightHUDMockup() {
  const [pitch, setPitch] = useState(2.4);
  const [roll, setRoll] = useState(-1.2);
  const [altitude, setAltitude] = useState(14250);
  const [airspeed, setAirspeed] = useState(184.5);
  const [batteryVoltage, setBatteryVoltage] = useState(96.4);
  const [rssi, setRssi] = useState(98);
  const [activeTab, setActiveTab] = useState<"hud" | "telemetry" | "ironbird">("hud");

  // Subtle real-time oscillation to make it look alive
  useEffect(() => {
    const interval = setInterval(() => {
      setPitch(2.4 + (Math.random() * 0.4 - 0.2));
      setRoll(-1.2 + (Math.random() * 0.6 - 0.3));
      setAltitude(14250 + Math.floor(Math.random() * 12 - 6));
      setAirspeed(184.5 + parseFloat((Math.random() * 0.8 - 0.4).toFixed(1)));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full min-h-[460px] bg-[#07090e] rounded-3xl border border-cyan-500/30 p-5 font-mono text-xs text-cyan-400/90 shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col justify-between relative overflow-hidden select-none">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 z-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/40">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-bold tracking-wider text-cyan-300">DRDO ADE TAPAS-BH-201</span>
          </div>
          <span className="text-zinc-500">|</span>
          <span className="text-zinc-400">GCS NODE-04</span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1 bg-zinc-900/90 p-1 rounded-lg border border-white/10">
          <button
            onClick={() => setActiveTab("hud")}
            className={`px-3 py-1 rounded text-[11px] transition-all font-semibold ${
              activeTab === "hud" ? "bg-cyan-500 text-black shadow-md" : "text-zinc-400 hover:text-white"
            }`}
          >
            GCS HUD
          </button>
          <button
            onClick={() => setActiveTab("telemetry")}
            className={`px-3 py-1 rounded text-[11px] transition-all font-semibold ${
              activeTab === "telemetry" ? "bg-cyan-500 text-black shadow-md" : "text-zinc-400 hover:text-white"
            }`}
          >
            MAVLink Stream
          </button>
          <button
            onClick={() => setActiveTab("ironbird")}
            className={`px-3 py-1 rounded text-[11px] transition-all font-semibold ${
              activeTab === "ironbird" ? "bg-cyan-500 text-black shadow-md" : "text-zinc-400 hover:text-white"
            }`}
          >
            Iron Bird HIL
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === "hud" && (
        <div className="grid grid-cols-12 gap-4 my-3 z-10 flex-1 items-center">
          {/* Left Telemetry Column */}
          <div className="col-span-4 space-y-2.5 bg-cyan-950/20 p-3 rounded-xl border border-cyan-500/20">
            <div className="text-[10px] text-cyan-500 uppercase tracking-widest font-bold border-b border-cyan-500/20 pb-1">
              Flight Parameters
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-400">AIRSPEED:</span>
              <span className="text-cyan-300 font-bold text-sm">{airspeed.toFixed(1)} KTS</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-400">ALTITUDE MSL:</span>
              <span className="text-cyan-300 font-bold text-sm">{altitude} FT</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-400">VERTICAL SPEED:</span>
              <span className="text-emerald-400 font-semibold">+850 FT/MIN</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-400">PITCH / ROLL:</span>
              <span className="text-cyan-300 font-mono">{pitch.toFixed(1)}° / {roll.toFixed(1)}°</span>
            </div>
            <div className="flex justify-between items-center pt-1 border-t border-cyan-500/10">
              <span className="text-zinc-400">AUTOPILOT:</span>
              <span className="text-cyan-400 bg-cyan-950 px-1.5 py-0.5 rounded border border-cyan-500/30">PX4 NAV_WAYPOINT</span>
            </div>
          </div>

          {/* Center Artificial Horizon & Pitch Ladder HUD */}
          <div className="col-span-4 relative h-48 bg-zinc-950/90 rounded-2xl border border-cyan-500/40 overflow-hidden flex flex-col items-center justify-center">
            {/* Horizon Sky/Ground Tilt */}
            <motion.div
              animate={{ rotate: roll, y: pitch * 3 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              className="absolute w-[200%] h-[200%] flex flex-col items-center justify-center pointer-events-none"
            >
              <div className="w-full h-full bg-cyan-950/40 border-b border-cyan-400" />
              <div className="w-full h-full bg-amber-950/30" />
            </motion.div>

            {/* Pitch Ladder Marks */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 pointer-events-none text-[9px] text-cyan-400/70">
              <div className="w-24 border-t border-dashed border-cyan-400/50 flex justify-between px-1">
                <span>+10</span>
                <span>+10</span>
              </div>
              <div className="w-32 border-t-2 border-cyan-400 flex justify-between px-1 font-bold">
                <span>0°</span>
                <span>0°</span>
              </div>
              <div className="w-24 border-t border-dashed border-cyan-400/50 flex justify-between px-1">
                <span>-10</span>
                <span>-10</span>
              </div>
            </div>

            {/* Fixed Boresight Crosshair */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="w-8 h-[2px] bg-cyan-300" />
              <div className="w-3 h-3 border-2 border-cyan-300 rounded-full mx-1" />
              <div className="w-8 h-[2px] bg-cyan-300" />
            </div>

            {/* Heading Tape at Top */}
            <div className="absolute top-2 left-0 right-0 flex justify-center text-[10px] text-cyan-300 font-bold bg-black/60 py-0.5 border-b border-cyan-500/20">
              340° &nbsp; 350° &nbsp; [ N ] &nbsp; 010° &nbsp; 020°
            </div>
          </div>

          {/* Right Power & RF Telemetry Column */}
          <div className="col-span-4 space-y-2.5 bg-cyan-950/20 p-3 rounded-xl border border-cyan-500/20">
            <div className="text-[10px] text-cyan-500 uppercase tracking-widest font-bold border-b border-cyan-500/20 pb-1">
              Power & Communication
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-400">MAIN BUS:</span>
              <span className="text-emerald-400 font-bold text-sm">{batteryVoltage}V</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-400">ESC CURRENT:</span>
              <span className="text-cyan-300">42.8 A</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-400">CELL DELTA:</span>
              <span className="text-emerald-400">0.008V (NOMINAL)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-400">LOS LINK 5.8GHz:</span>
              <span className="text-cyan-300 font-semibold">{rssi}% RSSI</span>
            </div>
            <div className="flex justify-between items-center pt-1 border-t border-cyan-500/10">
              <span className="text-zinc-400">BLOS SATCOM:</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> LOCKED
              </span>
            </div>
          </div>
        </div>
      )}

      {activeTab === "telemetry" && (
        <div className="my-3 z-10 flex-1 space-y-2 bg-black/80 p-3 rounded-2xl border border-cyan-500/30 overflow-y-auto max-h-[220px]">
          <div className="text-[10px] text-cyan-400 uppercase tracking-wider font-bold mb-2 flex items-center justify-between">
            <span>MAVLink PX4 Stream Ingest (100 Hz Sync)</span>
            <span className="text-emerald-400">STREAM ACTIVE</span>
          </div>
          <div className="space-y-1 font-mono text-[11px] text-zinc-300">
            <div className="text-cyan-400">[02:52:01.104] MAV_CMD_NAV_WAYPOINT -&gt; WP 07 ACCEPTED (Lat: 12.9716, Lon: 77.5946)</div>
            <div className="text-emerald-400">[02:52:01.114] ATTITUDE: Roll -0.021 rad, Pitch 0.042 rad, Yaw 1.284 rad</div>
            <div className="text-zinc-400">[02:52:01.124] HIGHRES_IMU: Ax 0.04g, Ay -0.01g, Az 0.98g | Gyro 0.12 deg/s</div>
            <div className="text-zinc-400">[02:52:01.134] BATTERY_STATUS: Volts 96420mV, Current 4280mA, Remaining 84%</div>
            <div className="text-cyan-300">[02:52:01.144] GPS_RAW_INT: FixType 3D_DGPS, Sats: 18, HDOP: 0.65</div>
            <div className="text-emerald-400">[02:52:01.154] VFR_HUD: Airspeed 94.9 m/s, GroundSpeed 92.1 m/s, Alt 4343m</div>
          </div>
        </div>
      )}

      {activeTab === "ironbird" && (
        <div className="my-3 z-10 flex-1 grid grid-cols-2 gap-3">
          <div className="bg-cyan-950/30 p-3 rounded-xl border border-cyan-500/20 space-y-2">
            <div className="text-cyan-300 font-bold text-[11px] flex items-center justify-between border-b border-cyan-500/20 pb-1">
              <span>FCC A Redundant Channel</span>
              <span className="text-emerald-400">ACTIVE</span>
            </div>
            <div className="text-zinc-400 text-[10px] space-y-1">
              <div>CPU Load: <span className="text-cyan-300">14.2%</span></div>
              <div>Memory Free: <span className="text-cyan-300">248 MB</span></div>
              <div>PWM Actuator Latency: <span className="text-emerald-400">&lt; 0.8 ms</span></div>
              <div>CAN Bus 1 Rx/Tx: <span className="text-cyan-300">1000 kbps (0 errors)</span></div>
            </div>
          </div>
          <div className="bg-cyan-950/30 p-3 rounded-xl border border-cyan-500/20 space-y-2">
            <div className="text-cyan-300 font-bold text-[11px] flex items-center justify-between border-b border-cyan-500/20 pb-1">
              <span>FCC B Backup Channel</span>
              <span className="text-emerald-400">STANDBY HOT</span>
            </div>
            <div className="text-zinc-400 text-[10px] space-y-1">
              <div>CPU Load: <span className="text-cyan-300">11.8%</span></div>
              <div>Sync Lock: <span className="text-emerald-400">SYNCHRONIZED</span></div>
              <div>Failover Watchdog: <span className="text-emerald-400">HEALTHY</span></div>
              <div>CAN Bus 2 Rx/Tx: <span className="text-cyan-300">1000 kbps (0 errors)</span></div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Status Line */}
      <div className="flex items-center justify-between border-t border-cyan-500/20 pt-2.5 z-10 text-[11px]">
        <div className="flex items-center gap-2 text-zinc-400">
          <Shield className="w-3.5 h-3.5 text-cyan-400" />
          <span>MIL-STD-810H / JSS 55555 QUALIFIED</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-cyan-400 font-bold">XPECTRA EDGE DAQ: 100,000 HZ</span>
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> INGEST OK
          </span>
        </div>
      </div>
    </div>
  );
}
