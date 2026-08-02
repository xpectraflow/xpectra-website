"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Sparkles,
  Quote,
  ChevronRight,
  Play,
  MessageSquare,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Activity,
  Cpu,
  Layers,
  BarChart3,
  Sliders,
  Database,
  Lock,
  Globe,
  Share2,
  Zap,
  Radio,
  FileCode2,
  ChevronLeft
} from 'lucide-react';
import { solutionsData, satelliteAITData, propulsionFlowData, dronesFlowData, defenceFlowData, energyFlowData, automotiveFlowData, roboticsFlowData, testingFlowData } from '@/lib/solutions-data';

export default function SolutionDetailPage({ slug }: { slug: string }) {
  const data = solutionsData[slug] || solutionsData.satellite || solutionsData.aerospace;
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeAITPhase, setActiveAITPhase] = useState(0);
  const isSatellitePage = slug === "satellite";
  const isTestingPage = slug === "testing";
  const isPropulsionPage = slug === "propulsion";
  const isDronesPage = slug === "drones";
  const isDefencePage = slug === "defence" || slug === "defense";
  const isEnergyPage = slug === "energy";
  const isAutomotivePage = slug === "automotive";
  const isRoboticsPage = slug === "robotics";
  const isFlowPage = isSatellitePage || isTestingPage || isPropulsionPage || isDronesPage || isDefencePage || isEnergyPage || isAutomotivePage || isRoboticsPage;
  const currentFlowData = isTestingPage
    ? testingFlowData
    : isRoboticsPage
    ? roboticsFlowData
    : isAutomotivePage
    ? automotiveFlowData
    : isEnergyPage
    ? energyFlowData
    : isDefencePage
    ? defenceFlowData
    : isDronesPage
    ? dronesFlowData
    : isPropulsionPage
    ? propulsionFlowData
    : satelliteAITData;

  const defaultCarousel = [
    {
      title: "Every sample stays at its original rate",
      desc: "Your simulations, test beds, and flight tests stream into one timeline at the rate they were recorded. Separating storage from compute keeps every data channel queryable for the life of your program.",
      img: "/transient-capture.png"
    },
    {
      title: "Rules and baselines flag anomalies the moment they appear",
      desc: "Rules your team writes run continuously against incoming telemetry and flag deviations the moment they appear. What one teammate catches informs a new baseline your whole team uses for every future test.",
      img: "/timestamp-sync.png"
    },
    {
      title: "Root cause and certification evidence come from one place",
      desc: "Explore and Calculated Channels trace anomalies to their source, and Reports generate structured, shareable evidence for AS9100, FAA, and ITAR review.",
      img: "/airgapped-nvme.png"
    }
  ];

  const satelliteCarousel = [
    {
      title: "2. EMI/EMC Anechoic Chamber Non-Interference",
      desc: "Electromagnetic Interference / Electromagnetic Compatibility testing in an anechoic chamber. Conducted & radiated emissions checks ensure transponders, power buses, batteries, and thrusters don't cross-interfere.",
      img: "/satellite-emc-chamber.png"
    },
    {
      title: "3. CATR RF Pattern & Gravity-Offload Array Deployment",
      desc: "Compact Antenna Test Range (CATR) pattern testing & link budget verification. Solar array and antenna deployment testing using gravity-offload rigs (simulating 0g deployment).",
      img: "/stage-hardware-binding.png"
    },
    {
      title: "5. HIL Simulation & Software Validation Test Bed (ISRO AOCS)",
      desc: "Hardware-in-the-Loop simulation & ISRO Software Validation Test Bed for AOCS (Attitude & Orbit Control System) validation. Mission sequence rehearsal & Day-in-the-Life (DITL) testing.",
      img: "/stage-realtime-ingest.png"
    }
  ];

  const propulsionCarousel = [
    {
      title: "ISRO LPSC / IPRC Mahendragiri HAT & Cryogenic Test Stand",
      desc: "High Altitude Test (HAT) facility vacuum ignition simulation for CE-7.5 and CE-20 cryogenic upper stage engines. Monitor LOX/LH2 chill-down, turbopump cold flow, and CUS integrated stage static firing in real time.",
      img: "/stage-hotfire-analytics.png"
    },
    {
      title: "SpaceX McGregor Stand & Raptor Acceptance Hot-Fire",
      desc: "Stream 100,000 Hz DAQ data during Merlin and Raptor acceptance firings at McGregor, Texas. Capture full duration static fire burns, Wet Dress Rehearsals (WDR), and Starship LN2 cryo proof structural pressure tests.",
      img: "/stage-hardware-binding.png"
    },
    {
      title: "Microsecond Combustion Transient & Gimbal TVC Sync",
      desc: "Hardware PTP (IEEE 1588) microsecond time alignment correlates combustion chamber pressure oscillations with hydraulic/electric TVC gimbal actuator feedback during engine hot-fire.",
      img: "/transient-capture.png"
    }
  ];

  const dronesCarousel = [
    {
      title: "2. Avionics Integration Rig (Iron Bird) & HIL Testing",
      desc: "Full avionics suite tested on a ground Iron Bird rig replicating Rustom-II / TAPAS BH-201 wiring and systems. HIL (Hardware-in-Loop) simulation validates Flight Control Computer (FCC) control laws.",
      img: "/stage-hardware-binding.png"
    },
    {
      title: "4. Flight Control Laws & Ground Control Station (GCS)",
      desc: "Software-in-Loop (SIL) and Man-in-Loop (MILS) pilot simulations. Validates mission planning software, dual/triple redundant FCC failover, and failsafe behavior in link loss or GPS-denied environments.",
      img: "/aerospace-ui.png"
    },
    {
      title: "6 & 10. EO/IR SAR Payloads, Stealth RCS & Autonomous Swarm Mesh",
      desc: "Ground-based RCS measurement for stealth UAVs (Ghatak / SWiFT). Multi-UAV swarm coordination algorithm validation, dynamic collision avoidance, and ad-hoc mesh RF network telemetry.",
      img: "/stage-hotfire-analytics.png"
    }
  ];

  const defenceCarousel = [
    {
      title: "3. Climatic & Extreme Terrain EQT (JSS 55555 & MIL-STD-810)",
      desc: "Ruggedness qualification across extreme operating environments: Pokhran desert heat, Siachen sub-zero cold start, high-altitude Leh trials, and Chilka marine salt fog corrosion testing.",
      img: "/satellite-emc-chamber.png"
    },
    {
      title: "7. Live Firing Range & Ballistics Telemetry (ITR / PXE Chandipur)",
      desc: "Static and dynamic live firing trials at PXE Chandipur & ITR Chandipur. Capture circular error probable (CEP), fuze functioning, and terminal ballistics penetration in real time.",
      img: "/stage-realtime-ingest.png"
    },
    {
      title: "8 & 9. Armoured Vehicle (CVRDE) & Naval Systems (NPOL / NSTL)",
      desc: "CVRDE mobility, gradient & NBC protection trials alongside NPOL/NSTL Harbor Acceptance Trials (HAT), Sea Acceptance Trials (SAT), sonar performance, and underwater acoustic signature testing.",
      img: "/stage-hardware-binding.png"
    }
  ];

  const energyCarousel = [
    {
      title: "3. Transformer Tan Delta & DGA Chromatographic Monitoring",
      desc: "Substation transformer testing: Megger insulation resistance, Tan Delta dissipation factor, oil dielectric BDV voltage withstand, and continuous Dissolved Gas Analysis (DGA) for predictive fault detection.",
      img: "/satellite-emc-chamber.png"
    },
    {
      title: "7. Performance Guarantee (PG) Tests (ASME PTC / IEC 60953)",
      desc: "Plant PG test execution validating contracted turbine heat rate, generator MWe output, boiler efficiency, and CPCB/MoEF stack emissions (SOx, NOx, PM) at rated full load.",
      img: "/stage-realtime-ingest.png"
    },
    {
      title: "8. Turbine Rolling, Grid Sync & CEA 72-Hour Trial Operation",
      desc: "Turbine rolling from barring gear to 3000 RPM, main stop valve stroke, overspeed trip, first-time generator grid synchronization, and CEA mandated 72-hour continuous trial run before COD.",
      img: "/stage-hardware-binding.png"
    }
  ];

  const automotiveCarousel = [
    {
      title: "2. BS6 / Euro 6 RDE PEMS & Dyno Emissions Telemetry",
      desc: "Engine and chassis dynamometer mapping correlated with Real Driving Emissions (RDE) PEMS telemetry. Monitor BSFC fuel consumption, NOx, PM, and in-cylinder combustion pressure during 500-hour endurance runs.",
      img: "/hotfire-stand.png"
    },
    {
      title: "5. NATRAX Proving Ground & 4-Post Shaker Road Load Rig",
      desc: "High-speed track trials at NATRAX Indore & 4-post road load shaker simulation. Ingest CAN bus metrics and strain gauge data simulating 160,000 km durability lifecycle stress in real time.",
      img: "/stage-realtime-ingest.png"
    },
    {
      title: "6 & 10. Bharat NCAP Crash Testing & EV Battery Thermal Runaway",
      desc: "AIS-096 frontal, side, and Bharat NCAP crash test telemetry alongside EV battery thermal runaway propagation, nail penetration, BMS cell balancing, and CCS DC fast charge validation.",
      img: "/stage-hardware-binding.png"
    }
  ];

  const roboticsCarousel = [
    {
      title: "6. NVIDIA Isaac Sim / Gazebo Digital Twin & ROS 2 HIL Sync",
      desc: "Synchronize physics-based digital twin simulations (NVIDIA Isaac Sim, Gazebo, Webots) with real-time ROS 2 DDS telemetry streams to validate MPC control loops and joint trajectory tracking.",
      img: "/aerospace-ui.png"
    },
    {
      title: "7. Functional & Cobot Safety (ISO 13849 & ISO/TS 15066)",
      desc: "Validate PL d/e safety circuits, Power and Force Limiting (PFL) bio-fidelic human contact limits, E-stop response, and safety scanner light curtains across collaborative robot arms and humanoids.",
      img: "/stage-hardware-binding.png"
    },
    {
      title: "13. Fleet Management (FMS) Orchestration & OTA Updates",
      desc: "Orchestrate 1000+ AMR and humanoid fleets with FMS task allocation, corridor deadlock avoidance, zero-downtime rolling OTA updates, and encrypted black-box incident telemetry.",
      img: "/stage-hotfire-analytics.png"
    }
  ];

  const testingCarousel = [
    {
      title: "1. GTRE Altitude Test Facility (ATF) High-Altitude Vacuum Sync",
      desc: "Simulating low-pressure high-altitude vacuum conditions at GTRE Bangalore ATF for Kaveri cryogenic/jet engine combustor relight and thrust SFC measurement.",
      img: "/stage-hotfire-analytics.png"
    },
    {
      title: "2. FADEC HIL Simulation & Engine Health Monitoring (EHMS)",
      desc: "Hardware-in-the-Loop simulation validating dual-redundant FADEC control laws, fuel metering valves, and EHMS real-time vibration FFT spectrum.",
      img: "/aerospace-ui.png"
    },
    {
      title: "3. Flying Test Bed (FTB) Flight Trials & 150-Hour PFRT",
      desc: "Kaveri engine flight testing telemetry on IL-76 FTB at Gromov Flight Research Institute (GFRI) Russia and 150-hour PFRT Preliminary Flight Rating qualification.",
      img: "/stage-hardware-binding.png"
    }
  ];

  const carouselItems = isSatellitePage
    ? satelliteCarousel
    : isTestingPage
    ? testingCarousel
    : isPropulsionPage
    ? propulsionCarousel
    : isDronesPage
    ? dronesCarousel
    : isDefencePage
    ? defenceCarousel
    : isEnergyPage
    ? energyCarousel
    : isAutomotivePage
    ? automotiveCarousel
    : isRoboticsPage
    ? roboticsCarousel
    : defaultCarousel;

  return (
    <div className="relative min-h-screen w-full bg-[#050608] text-white overflow-x-hidden">
      <Header />

      <main className="pt-24 pb-24 space-y-24">
        {/* 1. HERO SECTION (Sift Style: Dark Atmospheric Backdrop with Video Banner) */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-white/10">
          {/* Background Media / Video Overlay */}
          <div className="absolute inset-0 bg-black z-0">
            <img
              src={data.heroImage}
              alt={data.title}
              className="w-full h-full object-cover opacity-25 scale-105 filter blur-xs"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/70 to-[#050608]/40" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-60" />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-white/90 mb-6 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {isSatellitePage
                  ? "ISRO (URSC/ISAC, SDSC-SHAR) & SPACEX (HAWTHORNE/STARBASE) AIT FLOW"
                  : isTestingPage
                  ? "GTRE (GAS TURBINE RESEARCH ESTABLISHMENT / DRDO) KAVERI ENGINE TEST PIPELINE"
                  : isPropulsionPage
                  ? "ISRO (LPSC/IPRC MAHENDARAGIRI) & SPACEX (MCGREGOR TEST STAND) PROPULSION FLOW"
                  : isDronesPage
                  ? "DRDO (ADE / ADRDE / RCI / CVRDE) UAV & DRONE GROUND CHECKOUT PIPELINE"
                  : isDefencePage
                  ? "DRDO / MOD DEFENCE TESTING & EVALUATION (T&E) FRAMEWORK"
                  : isEnergyPage
                  ? "NTPC / CEA / POWERGRID / BHEL ENERGY TESTING & COMMISSIONING PIPELINE"
                  : isAutomotivePage
                  ? "ARAI / ICAT / NATRAX AUTOMOTIVE TESTING & HOMOLOGATION FRAMEWORK"
                  : isRoboticsPage
                  ? "BOSTON DYNAMICS / ABB / KUKA / FANUC ROBOTICS TESTING FRAMEWORK"
                  : "MISSION-CRITICAL TELEMETRY PLATFORM"}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
            >
              {isSatellitePage
                ? "Satellite AIT & Ground Segment Validation"
                : isTestingPage
                ? "Gas Turbine Engine Testing & Ground Validation"
                : isPropulsionPage
                ? "Rocket Propulsion Testing & Ground Validation"
                : isDronesPage
                ? "Drone & UAV Ground Testing & Validation"
                : isDefencePage
                ? "DRDO & MoD Defence Systems Testing & Evaluation"
                : isEnergyPage
                ? "Power Generation & Grid Testing & Commissioning"
                : isAutomotivePage
                ? "Automotive Vehicle & Powertrain Testing & Homologation"
                : isRoboticsPage
                ? "Robotics & Autonomous Systems Testing & Fleet Validation"
                : data.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-2xl font-light text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              {isSatellitePage
                ? "Standard Assembly, Integration & Testing (AIT/ATLO) with nanosecond telemetry precision from cleanroom TVAC chambers to on-orbit commissioning."
                : isTestingPage
                ? "Dedicated telemetry and high-frequency DAQ framework for GTRE DRDO Kaveri, Kaveri Dry, and GTX-35VS engines — from compressor/combustor component rigs to GTRE ATF altitude simulation, FADEC HIL, and IL-76 Flying Test Bed trials."
                : isPropulsionPage
                ? "High-frequency transient DAQ, turbopump hot-fire telemetry, and acoustic vibration analysis for ISRO (LPSC/IPRC Mahendragiri) and SpaceX (McGregor Test Stand, Texas)."
                : isDronesPage
                ? "Complete ground qualification, Iron Bird HIL simulation, engine ground runs (EGR), GVT flutter clearance, MIL-STD-810 EQT, and CEMILAC airworthiness release for DRDO (ADE Rustom-II/TAPAS, Nishant, Netra, Abhyas, Ghatak) & military UAV systems."
                : isDefencePage
                ? "Institutional T&E framework across Land, Sea, and Air domains — from GSQR/ASR/NSQR documentation to DGQA/DGAQA qualification, PXE Chandipur live firing, CVRDE mobility, NPOL/NSTL naval HAT/SAT, CEMILAC certification, and Bulk Production Clearance (BPC)."
                : isEnergyPage
                ? "Institutional testing framework for thermal, hydro, renewable & substation power systems — from OEM FAT (BHEL/GE/Siemens) to boiler hydro, turbine rolling, POWERGRID DGA/Tan Delta, ASME PTC PG tests, CEA 72-hr trial, and CPRI certification."
                : isAutomotivePage
                ? "End-to-end testing and certification framework for OEMs (Maruti Suzuki, Tata Motors, Mahindra) & Tier-1s — from DVP&R and BS6 RDE engine dyno to NATRAX proving grounds, Bharat NCAP crash safety, EV battery thermal runaway, and ARAI/ICAT homologation."
                : isRoboticsPage
                ? "End-to-end testing and qualification framework for industrial manipulators, AMRs, humanoids, and robot fleets — from DVT joint dynos and ROS 2 HIL/Isaac Sim to ISO 13849 safety, ISO/TS 15066 cobot PFL, and FMS fleet orchestration."
                : data.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a href="https://app.xpectraflow.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold px-8 h-13 rounded-xl text-base shadow-xl shadow-white/10">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#explore-platform">
                <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 h-13 rounded-xl text-base gap-2 backdrop-blur-md">
                  <Play className="w-4 h-4 fill-white/80" />
                  <span>
                    {isSatellitePage
                      ? "Explore AIT Pipeline"
                      : isTestingPage
                      ? "Explore Gas Turbine Testing Flow"
                      : isPropulsionPage
                      ? "Explore Hot-Fire Flow"
                      : isDronesPage
                      ? "Explore UAV Validation Flow"
                      : isDefencePage
                      ? "Explore Defence T&E Framework"
                      : isEnergyPage
                      ? "Explore Energy Commissioning Flow"
                      : isAutomotivePage
                      ? "Explore Automotive Validation Flow"
                      : isRoboticsPage
                      ? "Explore Robotics Qualification Flow"
                      : "Explore Platform"}
                  </span>
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* 2. SIFT FEATURE DEEP-DIVE 1 (Text + Media Ingestion Grid) */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8" id="explore-platform">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white/60 font-semibold">
                <Radio className="w-4 h-4 text-white" />
                <span>
                  {isSatellitePage
                    ? "01 / QUALIFICATION & ACCEPTANCE"
                    : isTestingPage
                    ? "01 / GTRE GAS TURBINE ENGINE QUALIFICATION"
                    : isPropulsionPage
                    ? "01 / HIGH-FREQUENCY HOT-FIRE DAQ"
                    : isDronesPage
                    ? "01 / STRUCTURAL & ENVIRONMENTAL EQT"
                    : isDefencePage
                    ? "01 / DEFENCE SYSTEM QUALIFICATION"
                    : isEnergyPage
                    ? "01 / POWER SYSTEM COMMISSIONING"
                    : isAutomotivePage
                    ? "01 / AUTOMOTIVE VALIDATION & HOMOLOGATION"
                    : isRoboticsPage
                    ? "01 / ROBOTICS & AUTONOMY QUALIFICATION"
                    : "XPECTRA FOR AEROSPACE"}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                {isSatellitePage
                  ? "Thermal Vacuum (TVAC/TBTV) & Multi-Axis Dynamic Telemetry"
                  : isTestingPage
                  ? "GTRE ATF Altitude Simulation & Microsecond Engine Transient DAQ"
                  : isPropulsionPage
                  ? "Microsecond Hot-Fire Transient Capture & Rocket Engine DAQ"
                  : isDronesPage
                  ? "MIL-STD-810 / JSS 55555 Ground Qualification & Structural GVT"
                  : isDefencePage
                  ? "JSS 55555 Environmental EQT & DGQA Design Validation"
                  : isEnergyPage
                  ? "Substation Transformer DGA & Turbine Rolling Telemetry"
                  : isAutomotivePage
                  ? "BS6 RDE Dyno & NATRAX Proving Ground Telemetry"
                  : isRoboticsPage
                  ? "NVIDIA Isaac Sim Digital Twin & ROS 2 Telemetry Ingest"
                  : "Every sensor lands at the rate it was recorded, up to 10kHz and beyond"}
              </h2>
              <p className="text-white/70 text-base leading-relaxed font-light">
                {isSatellitePage
                  ? "Simulate orbital vacuum with hot/soak/cold cycles in TVAC chambers while logging thousands of thermistors, heaters, and vacuum pressure channels. ISRO standard Thermal Balance Thermal Vacuum (TBTV) tests in the Space Simulation Chamber (ISAC/URSC/IISU) run with zero packet drop, capturing transient thermal spikes and vibration loads."
                  : isTestingPage
                  ? "Stream tens of thousands of pressure transducers, spool speed optical tachometers, turbine inlet thermocouples, and vibration accelerometers up to 100kHz. Capture combustor ignition pressure spikes, compressor surge margins, and FADEC closed-loop fuel metering response across GTRE Bangalore test stands and Gromov IL-76 FTB trials."
                  : isPropulsionPage
                  ? "Ingest tens of thousands of combustion chamber pressure transducers, turbopump vibration accelerometers, and cryogenic flow sensors up to 100kHz. Capture ignition pressure spikes, acoustic resonances, and LOX/LH2 chill-down transients across ISRO LPSC, IPRC Mahendragiri, and SpaceX McGregor test stands."
                  : isDronesPage
                  ? "Validate airframe static structural design load envelopes, wing/fuselage fatigue life, and Ground Vibration Testing (GVT) modal survey to eliminate flutter. Conduct DRDO JSS 55555 and MIL-STD-810 Environmental Qualification Testing (EQT) across temperature-altitude, vibration, salt fog, and desert sand/dust conditions."
                  : isDefencePage
                  ? "Qualify land, naval, and airborne defence hardware against MoD GSQR, ASR, and NSQR specifications. Execute Environmental Stress Screening (ESS) and JSS 55555 EQT across extreme Pokhran desert heat, Siachen high-altitude cold, and Chilka coastal salinity with microsecond telemetry precision."
                  : isEnergyPage
                  ? "Monitor power plant commissioning with microsecond DAQ precision. Stream BHEL boiler hydro tests, turbine rolling overspeed trips, POWERGRID transformer Dissolved Gas Analysis (DGA), Tan Delta insulation tests, and ASME PTC heat rate performance guarantee runs across NTPC and utility assets."
                  : isAutomotivePage
                  ? "Accelerate vehicle development from DVP&R design validation to ARAI/ICAT Type Approval. Ingest engine dynamometer BS6 emissions, CAN bus ECU logs, 4-post shaker road load strain, and EV battery pack thermal runaway metrics with microsecond synchronization."
                  : isRoboticsPage
                  ? "Qualify industrial manipulators, AMRs, and humanoid robots with nanosecond telemetry precision. Ingest ROS 2 DDS topics, 3D LiDAR point clouds, motor dyno torque curves, joint encoder metrics, and Isaac Sim synthetic data into a single queryable timeline."
                  : "Ingest tens of thousands of data channels at the rate each sensor recorded, up to 10kHz and beyond, with sub-second latency from sensor to simulation to flight test. Capture everything, so a pressure spike lasting microseconds reads as clearly as a slow thermal drift."}
              </p>

              {/* Sub-capabilities tags */}
              {isSatellitePage && (
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="font-bold text-white mb-0.5">TVAC / TBTV Cycling</div>
                    <div className="text-white/60 text-[11px]">ISRO URSC simulation chamber thermal math model validation</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="font-bold text-white mb-0.5">Mechanical & Mass</div>
                    <div className="text-white/60 text-[11px]">Vibration, acoustic max-Q, shock & CG/MOI spin balance</div>
                  </div>
                </div>
              )}

              {isTestingPage && (
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="font-bold text-white mb-0.5">Component Rigs & Core Engine</div>
                    <div className="text-white/60 text-[11px]">Compressor surge margin, combustor pattern factor & Gas Generator (GG) test</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="font-bold text-white mb-0.5">GTRE ATF & IL-76 FTB Trials</div>
                    <div className="text-white/60 text-[11px]">High-altitude vacuum relight, 150-hr PFRT & Gromov IL-76 FTB flight log sync</div>
                  </div>
                </div>
              )}

              {isPropulsionPage && (
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="font-bold text-white mb-0.5">Combustion & Transients</div>
                    <div className="text-white/60 text-[11px]">100kHz chamber pressure spike capture with microsecond PTP sync</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="font-bold text-white mb-0.5">Turbopump & Cryo DAQ</div>
                    <div className="text-white/60 text-[11px]">LOX/LH2 chill-down, HAT vacuum ignition & gimbal TVC response</div>
                  </div>
                </div>
              )}

              {isDronesPage && (
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="font-bold text-white mb-0.5">Structural GVT & Flutter</div>
                    <div className="text-white/60 text-[11px]">Static load envelope, proof load, fatigue & modal survey flutter clearance</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="font-bold text-white mb-0.5">MIL-STD-810 / JSS 55555</div>
                    <div className="text-white/60 text-[11px]">Temperature-altitude, shock/vibration, salt fog & rain environmental EQT</div>
                  </div>
                </div>
              )}

              {isDefencePage && (
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="font-bold text-white mb-0.5">Services SQRs & DGQA</div>
                    <div className="text-white/60 text-[11px]">GSQR / ASR / NSQR compliance, CQA category audits & PXE ballistics proof</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="font-bold text-white mb-0.5">JSS 55555 EQT & EMI/EMC</div>
                    <div className="text-white/60 text-[11px]">MIL-STD-461 EMI/EMC, TEMPEST security & extreme terrain climatic trials</div>
                  </div>
                </div>
              )}

              {isEnergyPage && (
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="font-bold text-white mb-0.5">Transformer DGA & Tan Delta</div>
                    <div className="text-white/60 text-[11px]">Oil breakdown BDV voltage, Turns Ratio, DGA fault detection & Megger IR</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="font-bold text-white mb-0.5">Turbine Rolling & PG Test</div>
                    <div className="text-white/60 text-[11px]">Main stop valve stroke, overspeed trip, ASME PTC heat rate & 72-hr trial COD</div>
                  </div>
                </div>
              )}

              {isAutomotivePage && (
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="font-bold text-white mb-0.5">DVP&R & Powertrain Dyno</div>
                    <div className="text-white/60 text-[11px]">BS6 RDE PEMS, engine dyno power mapping, 500-hr endurance & cold start</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="font-bold text-white mb-0.5">NATRAX Track & Bharat NCAP</div>
                    <div className="text-white/60 text-[11px]">160k km road load shaker, AIS-096 crash safety & ARAI EV range cycle</div>
                  </div>
                </div>
              )}

              {isRoboticsPage && (
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="font-bold text-white mb-0.5">ROS 2 HIL & Digital Twin</div>
                    <div className="text-white/60 text-[11px]">NVIDIA Isaac Sim / Gazebo sync, MPC control loop tuning & 100kHz joint dyno</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="font-bold text-white mb-0.5">Cobot Safety & Fleet FMS</div>
                    <div className="text-white/60 text-[11px]">ISO 13849 PL d/e safety, ISO/TS 15066 PFL force limits & 1000+ AMR fleet FMS</div>
                  </div>
                </div>
              )}

              <div className="pt-2">
                <a href="https://app.xpectraflow.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold px-7 h-12 rounded-xl text-sm">
                    Request a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Media (Telemetry Ingestion UI Display) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl group">
                <img
                  src={isSatellitePage ? "/satellite-tvac-chamber.png" : isPropulsionPage ? "/hotfire-stand.png" : isDronesPage ? "/transient-capture.png" : "/aerospace-ui.png"}
                  alt={isSatellitePage ? "Satellite TVAC Chamber Telemetry" : isPropulsionPage ? "Rocket Engine Hot-Fire DAQ Stand" : isDronesPage ? "DRDO ADE UAV GVT & EQT Telemetry" : "Sift Aerospace Telemetry Dashboard"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90 bg-black/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                    <span>
                      {isSatellitePage
                        ? "TVAC CHAMBER MONITORING ONLINE"
                        : isTestingPage
                        ? "GTRE ATF & FADEC DAQ ONLINE"
                        : isPropulsionPage
                        ? "IPRC MAHENDARAGIRI & MCGREGOR DAQ ONLINE"
                        : isDronesPage
                        ? "ADE STRUCTURAL & EQT DAQ ONLINE"
                        : isDefencePage
                        ? "DGQA & JSS 55555 EQT DAQ ONLINE"
                        : isEnergyPage
                        ? "POWERGRID & NTPC DAQ ONLINE"
                        : isAutomotivePage
                        ? "ARAI & NATRAX DAQ ONLINE"
                        : isRoboticsPage
                        ? "ROS 2 DDS & ISAAC SIM DAQ ONLINE"
                        : "HIGH-FREQUENCY INGEST ACTIVE"}
                    </span>
                  </span>
                  <span className="text-white font-bold">
                    {isSatellitePage ? "8.9E-07 Torr" : isTestingPage ? "100kHz / FADEC HIL" : isPropulsionPage ? "100,000 Hz Ingest" : isDronesPage ? "MIL-STD-810 / JSS 55555" : isDefencePage ? "JSS 55555 / MIL-STD-461" : isEnergyPage ? "72-Hr Trial / 50 Hz Grid" : isAutomotivePage ? "BS6 RDE / Bharat NCAP" : isRoboticsPage ? "ISO 13849 / ROS 2 DDS" : "> 10,000 Hz"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CAPABILITIES CAROUSEL / 3-CARD SHOWCASE (Sift Interactive Slider Style) */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-[#0c0d10] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
            {/* Header + Nav Arrows */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/60 font-bold block mb-1">
                  PLATFORM CAPABILITIES
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {isSatellitePage ? "RF, EMC & Software Validation Workflows" : "Designed for Mission-Critical Fidelity"}
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : carouselItems.length - 1))}
                  className="p-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveSlide((prev) => (prev < carouselItems.length - 1 ? prev + 1 : 0))}
                  className="p-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Slider Card Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-block text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/10">
                  FEATURE 0{activeSlide + 1} / 0{carouselItems.length}
                </div>
                <h3 className="text-2xl font-bold text-white leading-snug">
                  {carouselItems[activeSlide].title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed font-light">
                  {carouselItems[activeSlide].desc}
                </p>
                <div className="flex items-center gap-2 pt-2">
                  {carouselItems.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeSlide ? "w-8 bg-white" : "w-2 bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-xl">
                  <img
                    src={carouselItems[activeSlide].img}
                    alt={carouselItems[activeSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SIFT PROGRAM TIMELINE (01 DEVELOP -> 02 VALIDATE -> 03 OPERATE) */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
              {isSatellitePage
                ? "One telemetry platform from cleanroom AIT to orbital commissioning"
                : isTestingPage
                ? "One telemetry platform from component compressor rig to IL-76 FTB flight clearance"
                : isPropulsionPage
                ? "One telemetry platform from component cold-flow to pad static fire"
                : isDronesPage
                ? "One telemetry platform from Iron Bird HIL rig to CEMILAC flight test release"
                : isDefencePage
                ? "One telemetry platform from GSQR design validation to MoD Bulk Production Clearance"
                : isEnergyPage
                ? "One telemetry platform from BHEL OEM works to Commercial Operation Date (COD)"
                : isAutomotivePage
                ? "One telemetry platform from DVP&R simulation to ARAI Homologation & SOP"
                : isRoboticsPage
                ? "One telemetry platform from Isaac Sim digital twin to 1000+ AMR fleet rollout"
                : "One platform, from your first prototype to your orbital fleet"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 01: DEVELOP / AIT */}
            <div className="rounded-3xl border border-white/10 bg-[#0c0d10] p-8 flex flex-col justify-between hover:border-white/30 transition-all">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 font-bold">
                    01
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-wider uppercase">
                    {isSatellitePage
                      ? "4. FUNCTIONAL & AIT/ATLO"
                      : isTestingPage
                      ? "01. COMPONENT & CORE ENGINE"
                      : isPropulsionPage
                      ? "ISRO LPSC & MAHENDARAGIRI"
                      : isDronesPage
                      ? "ADE IRON BIRD & HIL RIG"
                      : isDefencePage
                      ? "01. GSQR & DGQA DESIGN QUAL"
                      : isEnergyPage
                      ? "01. OEM FAT & BOILER TEST"
                      : isAutomotivePage
                      ? "01. DVP&R & POWERTRAIN DYNO"
                      : isRoboticsPage
                      ? "01. DVT & ACTUATOR DYNO"
                      : "DEVELOP"}
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>
                      {isSatellitePage
                        ? "SpaceX ATLO & ISRO AIT integration campaign flows."
                        : isTestingPage
                        ? "Compressor rig surge margin, combustor pattern factor & turbine cooling effectiveness."
                        : isPropulsionPage
                        ? "Solid motor static test firing at SHAR STEX complex & S200 segment testing."
                        : isDronesPage
                        ? "Full avionics suite Iron Bird testing replicating Rustom-II / TAPAS airframe wiring."
                        : isDefencePage
                        ? "GSQR, ASR, and NSQR qualitative requirement definition & PSQR drafting."
                        : isEnergyPage
                        ? "Factory Acceptance Tests (FAT), Type & Routine tests at BHEL, GE & Siemens works."
                        : isAutomotivePage
                        ? "DVP&R test matrix, DFMEA/PFMEA risk mitigation & CAE simulation correlation."
                        : isRoboticsPage
                        ? "EVT/DVT/PVT test matrix, DFMEA risk mitigation & ISO 9283 repeatability."
                        : "Validate your flight software and subsystems across every phase of development."}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>
                      {isSatellitePage
                        ? "Comprehensive Performance Test (CPT) baseline, post-env & pre-ship."
                        : isTestingPage
                        ? "Gas Generator (GG) standalone core engine development runs & thermodynamic cycle balance."
                        : isPropulsionPage
                        ? "High Altitude Test (HAT) facility vacuum ignition simulation for CE-7.5 & CE-20 cryo engines."
                        : isDronesPage
                        ? "HIL simulation validating Flight Control Computer (FCC) control laws & ATOL autopilot."
                        : isDefencePage
                        ? "DGQA, CQA (Vehicles, Weapons, ME), and PXE Chandipur ballistics proof testing."
                        : isEnergyPage
                        ? "Boiler hydraulic pressure test (1.5x design pressure), steam blowing, & acid cleaning."
                        : isAutomotivePage
                        ? "Engine dyno power/torque mapping, 500-hr durability, & cold start climatic trials."
                        : isRoboticsPage
                        ? "Joint actuator dyno torque-speed mapping, encoder resolution, & thermal derating."
                        : "Trace anomalies across your control surfaces, avionics, and propulsion."}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>
                      {isSatellitePage
                        ? "Bus & payload integration, TT&C loop tests, static load & modal survey."
                        : isTestingPage
                        ? "High-pressure spool vibration dynamics, bearing oil cooling, & thermal seal expansion."
                        : isPropulsionPage
                        ? "Gas generator, turbopump cold/hot flow, injector head & stage static tests (L110, C25)."
                        : isDronesPage
                        ? "EMI/EMC anechoic chamber testing & Line of Sight / BLOS data link telemetry."
                        : isDefencePage
                        ? "JSS 55555 EQT, ESS screening, and extreme terrain climatic trials (Pokhran/Siachen/Chilka)."
                        : isEnergyPage
                        ? "Furnace purge, oil/coal firing light-up, & safety valve floating tests."
                        : isAutomotivePage
                        ? "BS6 / Euro 6 Real Driving Emissions (RDE) with on-road PEMS telemetry."
                        : isRoboticsPage
                        ? "Battery pack cycle life, C-rate charge/discharge, & IR auto-docking charging."
                        : "Build faster with insight from every test and simulation."}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 02: VALIDATE / PRE-LAUNCH */}
            <div className="rounded-3xl border border-white/10 bg-[#0c0d10] p-8 flex flex-col justify-between hover:border-white/30 transition-all">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 font-bold">
                    02
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-wider uppercase">
                    {isSatellitePage
                      ? "7 & 8. LAUNCH SITE & SPACEX"
                      : isTestingPage
                      ? "02. GTRE ATF & OPERABILITY"
                      : isPropulsionPage
                      ? "SPACEX MCGREGOR & STARBASE"
                      : isDronesPage
                      ? "GCS, LAUNCH & PAYLOADS"
                      : isDefencePage
                      ? "02. FIELD TRIALS & BALLISTICS"
                      : isEnergyPage
                      ? "02. TURBINE & SUBSTATION"
                      : isAutomotivePage
                      ? "02. PROVING GROUND & CRASH"
                      : isRoboticsPage
                      ? "02. HIL & COBOT SAFETY"
                      : "VALIDATE"}
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>
                      {isSatellitePage
                        ? "SDSC SHAR (ISRO) & Cape Canaveral / Vandenberg / Starbase (SpaceX) pre-launch."
                        : isTestingPage
                        ? "GTRE Bangalore Altitude Test Facility (ATF) high-altitude vacuum & temperature simulation."
                        : isPropulsionPage
                        ? "Static fire test stand firings at McGregor development facility for Merlin & Raptor."
                        : isDronesPage
                        ? "Software-in-Loop (SIL) & Man-in-Loop (MILS) Ground Control Station (GCS) simulation."
                        : isDefencePage
                        ? "MIL-STD-461 EMI/EMC, TEMPEST emission security, & structural NDT inspection."
                        : isEnergyPage
                        ? "Turbine rolling to 3000 RPM, overspeed governor trip, & MSV/CV/IV valve stroke."
                        : isAutomotivePage
                        ? "NATRAX high-speed track, Belgian block pavé, & 160,000 km equivalent durability."
                        : isRoboticsPage
                        ? "3D LiDAR, camera, IMU sensor calibration, SLAM localization, & motion capture."
                        : "Automated structural and thermal checks speed up campaign sign-off."}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>
                      {isSatellitePage
                        ? "Propellant fueling, Final Health Check (FHC), encapsulation & mate/de-mate."
                        : isTestingPage
                        ? "Sea-level static (SLS) baseline thrust/SFC & Accelerated Mission Testing (AMT) endurance."
                        : isPropulsionPage
                        ? "Component acceptance hot-fire testing for every engine prior to stage assembly."
                        : isDronesPage
                        ? "ADRDE catapult launch trials, parachute recovery, & net arrester landing checks."
                        : isDefencePage
                        ? "User Trials with Army/Navy/IAF under seasonal desert, monsoon & high-altitude conditions."
                        : isEnergyPage
                        ? "Generator OCC/SCC, POWERGRID transformer DGA, Tan Delta, & switchgear timing."
                        : isAutomotivePage
                        ? "4-post road load shaker rig strain gauge ingestion & CAN bus ECU HIL validation."
                        : isRoboticsPage
                        ? "ROS 2 MIL/SIL/HIL testing, MPC control loop tuning, & Isaac Sim digital twin."
                        : "Produce structured evidence for AS9100, FAA, and ITAR compliance."}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>
                      {isSatellitePage
                        ? "SpaceX PPF facility processing, Wet Dress Rehearsal (WDR) & static fire."
                        : isTestingPage
                        ? "Ice/bird ingestion (FOD), crosswind, windmill relight envelope, & 150-hr PFRT type test."
                        : isPropulsionPage
                        ? "Full duration static fire burns, Wet Dress Rehearsals (WDR), and Starship LN2 cryo proof."
                        : isDronesPage
                        ? "EO/IR camera, SAR radar payload integration, & Ghatak stealth ground RCS measurement."
                        : isDefencePage
                        ? "PXE & ITR Chandipur live firing range trials, CEP accuracy, & terminal ballistics."
                        : isEnergyPage
                        ? "Field-to-DCS loop checking, protection relay secondary injection, & C&I logic."
                        : isAutomotivePage
                        ? "AIS-096 frontal/side impact & Bharat NCAP (BNVSAP) crash safety star rating."
                        : isRoboticsPage
                        ? "ISO 13849 PL d/e functional safety, ISO/TS 15066 cobot PFL force limits, & E-stop."
                        : "Eliminate manual data wrangling between environmental tests."}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 03: OPERATE / ON-ORBIT */}
            <div className="rounded-3xl border border-white/10 bg-[#0c0d10] p-8 flex flex-col justify-between hover:border-white/30 transition-all">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 font-bold">
                    03
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-wider uppercase">
                    {isSatellitePage
                      ? "9. ON-ORBIT & LEOP"
                      : isTestingPage
                      ? "03. FADEC HIL & IL-76 FTB"
                      : isPropulsionPage
                      ? "PAD STATIC FIRE & HOPS"
                      : isDronesPage
                      ? "CEMILAC & FLIGHT TRIALS"
                      : isDefencePage
                      ? "03. LAND/NAVAL & MOD BPC"
                      : isEnergyPage
                      ? "03. PG TEST & CEA COD"
                      : isAutomotivePage
                      ? "03. EV BATTERY & HOMOLOGATION"
                      : isRoboticsPage
                      ? "03. FMS & FLEET DEPLOYMENT"
                      : "OPERATE"}
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>
                      {isSatellitePage
                        ? "LEOP (Launch and Early Orbit Phase) acquisition & solar array locking."
                        : isTestingPage
                        ? "Dual-redundant FADEC HIL control loop tuning, fuel valve metering, & EHMS vibration FFT."
                        : isPropulsionPage
                        ? "Low-altitude flight testing (Starhopper, SN5/SN6 Starship vehicle hops)."
                        : isDronesPage
                        ? "Engine Ground Runs (EGR), low-speed & high-speed taxi trials on runway."
                        : isDefencePage
                        ? "CVRDE armoured mobility, gradient, NBC & NPOL/NSTL naval HAT/SAT sonar trials."
                        : isEnergyPage
                        ? "First-time generator grid synchronization & Indian Electricity Grid Code (IEGC) compliance."
                        : isAutomotivePage
                        ? "EV battery pack thermal runaway, nail penetration, BMS, & CCS DC fast charging."
                        : isRoboticsPage
                        ? "AMR navigation stopping accuracy, slope incline, & multi-robot deadlock avoidance."
                        : "Monitor propulsion, control, and fleet health in real time."}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>
                      {isSatellitePage
                        ? "In-Orbit Testing (IOT) checks all satellite subsystems post-launch."
                        : isTestingPage
                        ? "Engine vibration survey, Low/High Cycle Fatigue (LCF/HCF), & rotor burst containment."
                        : isPropulsionPage
                        ? "Thrust Vector Control (TVC) hydraulic & electric gimbal actuator validation."
                        : isDronesPage
                        ? "First Flight (FF) clearance, envelope expansion, & Armed Forces user trials."
                        : isDefencePage
                        ? "DO-178 SQA, System Integration Testing (SIT), FAT/SAT, & CEMILAC MTC release."
                        : isEnergyPage
                        ? "ASME PTC / IEC 60953 Performance Guarantee (PG) heat rate & CPCB stack emission testing."
                        : isAutomotivePage
                        ? "ARAI Pune & ICAT Manesar CMVR Type Approval homologation certification."
                        : isRoboticsPage
                        ? "End-effector grasping success rate, force impedance, & 24/7 soak HALT/HASS."
                        : "Evaluate telemetry at high frequency during flight operations."}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-white/80 font-light leading-relaxed">
                    <span className="text-white font-mono text-sm shrink-0">→</span>
                    <span>
                      {isSatellitePage
                        ? "Commissioning phase handoff to mission ops and payload customers."
                        : isTestingPage
                        ? "IL-76 Flying Test Bed (FTB) flight trials at Gromov GFRI, aircraft EGR, & CEMILAC sign-off."
                        : isPropulsionPage
                        ? "Pre-launch pad static fire operations and zero-packet-drop microsecond DAQ archival."
                        : isDronesPage
                        ? "CEMILAC Type Certificate, RCMA audits, DGAQA QA, and IFTR/FTR flight release."
                        : isDefencePage
                        ? "Staff Evaluation Report (SER), TEC compliance, & Bulk Production Clearance (BPC)."
                        : isEnergyPage
                        ? "CEA mandated 72-hour continuous full-load trial operation, COD declaration & CPRI approval."
                        : isAutomotivePage
                        ? "Tier-1 PPAP Level 1-5 sign-off, pilot production run, & SOP launch readiness."
                        : isRoboticsPage
                        ? "1000+ robot Fleet Management System (FMS), rolling OTA updates, & ISO 10218 CE."
                        : "Compare flight performance against vehicle test history."}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. HIGH-IMPACT STATEMENT BANNER (Sift Banner Style) */}
        <section className="relative py-28 overflow-hidden border-y border-white/10 bg-black">
          <img
            src="/hotfire-stand.png"
            alt="Rocket engine hot-fire"
            className="absolute inset-0 w-full h-full object-cover opacity-20 filter blur-xs"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              {isSatellitePage
                ? "From Cleanroom TVAC Vacuum Chambers to Orbit. One Telemetry Platform."
                : isTestingPage
                ? "From GTRE Component Rigs to Gromov IL-76 Flying Test Bed. Zero Telemetry Loss."
                : isPropulsionPage
                ? "From Mahendragiri HAT Chambers to McGregor Test Stands. Zero Data Loss."
                : isDronesPage
                ? "From ADE Iron Bird Rig to CEMILAC Flight Release. Zero Telemetry Loss."
                : isDefencePage
                ? "From Pokhran Firing Ranges to Sea Acceptance Trials. Zero Telemetry Loss."
                : isEnergyPage
                ? "From BHEL Boiler Light-Up to Commercial Operation Date (COD). Zero Telemetry Loss."
                : isAutomotivePage
                ? "From DVP&R Dyno Mapping to Start of Production (SOP). Zero Telemetry Loss."
                : isRoboticsPage
                ? "From Isaac Sim Digital Twin to 1000+ Robot Fleet Operations. Zero Telemetry Loss."
                : "One interface. One data model."}
            </h2>
          </div>
        </section>

        {/* 6. KEY ARCHITECTURE GRID (Visualize. Validate. Operate. Evolve) */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Visualize. Validate. Operate. Evolve.
            </h2>
            <p className="text-white/60 text-base max-w-2xl mx-auto font-light">
              {isPropulsionPage
                ? "Xpectra unifies rocket test stands, turbopump rigs, and cryogenic ground systems into one mission-grade platform."
                : isDronesPage
                ? "Xpectra unifies ADE Iron Bird rigs, FCC HIL simulation, and GCS flight telemetry into one airworthiness platform."
                : "Xpectra replaces siloed tools and ad hoc dashboards with a mission-grade observability platform."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[#18181b]">
            {/* Card 1: Unify Telemetry */}
            <div className="rounded-2xl border border-white/10 bg-[#0c0d10] p-6 hover:border-white/30 transition-all flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit text-white mb-6">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase mb-2">
                  {isPropulsionPage ? "Unify Rocket Telemetry" : isDronesPage ? "Unify UAV Avionics & HIL" : "Unify your telemetry"}
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  {isPropulsionPage
                    ? "Unified pressure transducers, accelerometers, flow meters, and TVC gimbal telemetry in one synchronized timeline."
                    : isDronesPage
                    ? "Unified Iron Bird wiring, Flight Control Computer (FCC) logs, GCS telemetry, and payload streams in one place."
                    : "Unified telemetry, simulation, and operations data. Real-time and historical analysis at full fidelity."}
                </p>
              </div>
            </div>

            {/* Card 2: Full Fidelity */}
            <div className="rounded-2xl border border-white/10 bg-[#0c0d10] p-6 hover:border-white/30 transition-all flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit text-white mb-6">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase mb-2">
                  {isPropulsionPage ? "Microsecond Hot-Fire DAQ" : isDronesPage ? "Iron Bird & GVT Fidelity" : "Full fidelity analysis"}
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  {isPropulsionPage
                    ? "100kHz real-time sensor streams with hardware PTP IEEE 1588 sub-microsecond timestamp alignment."
                    : isDronesPage
                    ? "Microsecond structural GVT modal survey sync & real-time HIL hardware-in-the-loop control law analysis."
                    : "Real-time and historical analysis at full fidelity with microsecond timestamp alignment."}
                </p>
              </div>
            </div>

            {/* Card 3: Anomaly Detection */}
            <div className="rounded-2xl border border-white/10 bg-[#0c0d10] p-6 hover:border-white/30 transition-all flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit text-white mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase mb-2">
                  {isPropulsionPage ? "Combustion Anomaly Rules" : isDronesPage ? "Flight Law & Failsafe Rules" : "Anomaly detection"}
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  {isPropulsionPage
                    ? "Automated rules catch combustion instability, turbopump cavitation, and pressure transients before alarms fire."
                    : isDronesPage
                    ? "Automated rules catch control law oscillations, link loss failsafe triggers, and engine EGR anomalies."
                    : "Rules-based validation, automated anomaly detection, and instant notification alerts."}
                </p>
              </div>
            </div>

            {/* Card 4: Sharing & Permissions */}
            <div className="rounded-2xl border border-white/10 bg-[#0c0d10] p-6 hover:border-white/30 transition-all flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit text-white mb-6">
                  <Share2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase mb-2">
                  {isPropulsionPage ? "Air-Gapped Test Vault" : isDronesPage ? "CEMILAC Certification Reports" : "Sharing and permissions"}
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  {isPropulsionPage
                    ? "Local zero-cloud deployment on isolated test bench subnets at IPRC Mahendragiri or McGregor."
                    : isDronesPage
                    ? "Generate structured evidence for CEMILAC Type Certificate, RCMA audits, and DGAQA airworthiness releases."
                    : "Shareable views, annotations, and version-controlled reports for compliance review."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FORMAT COMPATIBILITY & DEPLOYMENT ENVIRONMENTS (Sift Ingestion Grid) */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-[#0c0d10] p-8 lg:p-12 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {isPropulsionPage
                  ? "Your team ingests any rocket engine DAQ telemetry, at the rate each sensor recorded"
                  : isDronesPage
                  ? "Your team ingests any DRDO UAV telemetry, at the rate each sensor recorded"
                  : "Your team ingests any aerospace telemetry, at the rate each sensor recorded"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-white/10 bg-zinc-950 flex flex-col justify-between">
                <FileCode2 className="w-8 h-8 text-white mb-4" />
                <p className="text-sm text-white/80 font-light leading-relaxed">
                  Ingest your telemetry in any format: <span className="text-white font-mono font-semibold">{isPropulsionPage ? "LabVIEW, MATLAB, TDMS, CSV, PX4, Parquet, HDF5" : isDronesPage ? "PX4, ULOG, Mavlink, ROS2, LabVIEW, TDMS, CSV, Parquet" : "CSV, PX4, ULOG, ROS, TDMS, Parquet, HDF5"}</span>, and more.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-zinc-950 flex flex-col justify-between">
                <Lock className="w-8 h-8 text-white mb-4" />
                <p className="text-sm text-white/80 font-light leading-relaxed">
                  Run in your environment: <span className="text-white font-mono font-semibold">{isPropulsionPage ? "Air-Gapped Test Subnets, On-Prem, GovCloud, VPC" : isDronesPage ? "ADE Air-Gapped Test Bench, On-Prem, Military Mesh Subnets" : "On-Prem, GovCloud, VPC"}</span>, or classified networks.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-zinc-950 flex flex-col justify-between">
                <Globe className="w-8 h-8 text-white mb-4" />
                <p className="text-sm text-white/80 font-light leading-relaxed">
                  Operate through <span className="text-white font-mono font-semibold">{isDronesPage ? "LOS & BLOS tactical telemetry links" : "disconnected and low-bandwidth conditions"}</span> with local NVMe edge ring buffers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. VISUAL CAMPAIGN FLOW NAVIGATOR WITH IMAGES & CARDS (FOR SATELLITE & PROPULSION) */}
        {isFlowPage && (
          <section className="max-w-7xl mx-auto px-6 lg:px-8" id="ait-validation-flow">
            <div className="rounded-3xl border border-white/15 bg-[#0c0d10] p-8 md:p-12 shadow-2xl relative overflow-hidden">
              
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-white/90 mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isPropulsionPage ? "ISRO (LPSC/IPRC MAHENDARAGIRI) & SPACEX (MCGREGOR STAND) PIPELINE" : "9-PHASE SATELLITE AIT & GROUND SEGMENT PIPELINE"}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {currentFlowData.title}
                </h2>
                <p className="text-white/70 text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed">
                  {currentFlowData.subtitle}
                </p>
              </div>

              {/* Phase Tab Selector Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-white/10">
                {currentFlowData.sections.map((sec, idx) => (
                  <button
                    key={sec.id}
                    onClick={() => setActiveAITPhase(idx)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-mono shrink-0 transition-all flex items-center gap-2 border ${
                      activeAITPhase === idx
                        ? 'bg-white text-black font-bold border-white shadow-lg scale-[1.03]'
                        : 'bg-white/5 text-white/70 hover:text-white border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                      activeAITPhase === idx ? 'bg-black text-white font-bold' : 'bg-white/10 text-white/80'
                    }`}>
                      {sec.id < 10 ? `0${sec.id}` : sec.id}
                    </span>
                    <span>{sec.shortName || `Phase ${sec.id}`}</span>
                  </button>
                ))}
              </div>

              {/* Featured Active Phase Visual Display Card */}
              {(() => {
                const currentSec = currentFlowData.sections[activeAITPhase] || currentFlowData.sections[0];
                return (
                  <div className="rounded-2xl border border-white/20 bg-zinc-950/90 p-6 md:p-10 mb-16 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      
                      {/* Left Details Column */}
                      <div className="lg:col-span-6 space-y-6">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-bold">
                            PHASE {currentSec.id < 10 ? `0${currentSec.id}` : currentSec.id} / {currentFlowData.sections.length < 10 ? `0${currentFlowData.sections.length}` : currentFlowData.sections.length}
                          </span>
                          <span className="text-xs font-mono text-white/60">
                            {currentSec.badge}
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                          {currentSec.title}
                        </h3>

                        {'subsections' in currentSec && currentSec.subsections ? (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                            {(currentSec as any).subsections.map((sub: any, sIdx: number) => (
                              <div key={sIdx} className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/25 hover:bg-white/[0.07] transition-all flex flex-col justify-between min-h-[180px]">
                                <div>
                                  <div className="flex items-center justify-between text-[10px] font-mono font-bold text-white/90 uppercase tracking-wider mb-2.5 pb-1.5 border-b border-white/10">
                                    <span>{sub.category}</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                                  </div>
                                  <div className="space-y-2.5">
                                    {sub.items.map((item: any, iIdx: number) => (
                                      <div key={iIdx} className="text-xs space-y-0.5">
                                        <div className="font-semibold text-white flex items-start gap-1.5">
                                          <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                                          <span>{item.name}</span>
                                        </div>
                                        <p className="text-[11px] text-white/60 pl-5 font-light leading-relaxed">
                                          {item.desc}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            {currentSec.items?.map((item, iIdx) => (
                              <div key={iIdx} className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/25 hover:bg-white/[0.07] transition-all flex flex-col justify-between min-h-[90px]">
                                <div>
                                  <div className="text-xs font-bold text-white mb-1 flex items-start gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                                    <span>{item.name}</span>
                                  </div>
                                  <p className="text-[11px] text-white/60 font-light leading-relaxed pl-5">
                                    {item.desc}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Phase Navigation Controls */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <button
                            disabled={activeAITPhase === 0}
                            onClick={() => setActiveAITPhase((prev) => Math.max(0, prev - 1))}
                            className="text-xs font-mono px-4 py-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/15 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1.5"
                          >
                            <ChevronLeft className="w-4 h-4" />
                            <span>Previous Phase</span>
                          </button>

                          <span className="text-xs font-mono text-white/50">
                            {activeAITPhase + 1} of {currentFlowData.sections.length}
                          </span>

                          <button
                            disabled={activeAITPhase === currentFlowData.sections.length - 1}
                            onClick={() => setActiveAITPhase((prev) => Math.min(currentFlowData.sections.length - 1, prev + 1))}
                            className="text-xs font-mono px-4 py-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/15 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1.5"
                          >
                            <span>Next Phase</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>

                      </div>

                      {/* Right Visual Image Card */}
                      <div className="lg:col-span-6">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl group">
                          <img
                            src={currentSec.img}
                            alt={currentSec.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                          
                          {/* Live Telemetry Overlay */}
                          <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md p-3.5 rounded-xl border border-white/15 flex items-center justify-between text-xs font-mono">
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                              <span className="text-white font-bold uppercase">{currentSec.badge}</span>
                            </div>
                            <span className="text-white/70">{isPropulsionPage ? "IPRC / MCGREGOR READY" : "ISRO / SPACEX READY"}</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })()}

              {/* VISUAL GRID AT A GLANCE (Showing ALL Phases with Images) */}
              <div className="border-t border-white/10 pt-12">
                <div className="text-center mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {isPropulsionPage ? "Full Rocket Propulsion Campaign Visual Overview" : "Full 9-Phase AIT Campaign Visual Overview"}
                  </h3>
                  <p className="text-xs md:text-sm text-white/60 mt-1">
                    Click any phase card to jump into detailed telemetry view
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentFlowData.sections.map((sec, sIdx) => (
                    <div
                      key={sec.id}
                      onClick={() => setActiveAITPhase(sIdx)}
                      className={`rounded-2xl border p-5 transition-all cursor-pointer flex flex-col justify-between group ${
                        activeAITPhase === sIdx
                          ? 'border-white bg-white/10 shadow-2xl scale-[1.02]'
                          : 'border-white/10 bg-zinc-950/80 hover:border-white/30 hover:bg-white/5'
                      }`}
                    >
                      <div>
                        {/* Thumbnail Image */}
                        <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 mb-4 bg-black">
                          <img
                            src={sec.img}
                            alt={sec.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono font-bold text-white border border-white/20">
                            PHASE {sec.id < 10 ? `0${sec.id}` : sec.id}
                          </div>
                        </div>

                        <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                          {sec.title}
                        </h4>

                        <p className="text-[11px] text-white/60 line-clamp-3 leading-relaxed font-light">
                          {'subsections' in sec && (sec as any).subsections
                            ? (sec as any).subsections.map((s: any) => s.category).join(', ')
                            : sec.items?.map((i: any) => i.name).join(' · ')}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/70">
                        <span>{sec.badge}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        )}

        {/* 8. BOTTOM CTA (Dual Buttons: Request Demo / Contact Sales) */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-12 lg:p-16 relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {isPropulsionPage
                ? "Ready to transform your rocket engine test stand?"
                : isDronesPage
                ? "Ready to transform your DRDO UAV ground testing rig?"
                : "Ready to transform your aerospace telemetry?"}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg mb-8 font-light">
              {isPropulsionPage
                ? "Connect your hot-fire test stand, turbopump rig, or cryogenic feed sensors in under 15 minutes with our native edge binaries."
                : isDronesPage
                ? "Connect your ADE Iron Bird rig, HIL flight control computer, or GCS telemetry streams in under 15 minutes."
                : "Connect your test stand, vehicle fleet, or edge sensors in under 15 minutes with our native edge binaries."}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://app.xpectraflow.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold px-8 h-13 rounded-xl text-base shadow-lg shadow-white/10">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:sales@xpectraflow.com">
                <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 h-13 rounded-xl text-base gap-2">
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Contact Sales</span>
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
