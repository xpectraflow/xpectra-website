import {
  Gauge,
  Clock,
  Lock,
  Server,
  Database,
  BarChart3,
  Bot,
  Cpu,
  Activity,
  Globe,
  Layers,
  Car,
  Zap,
  Rocket,
  Shield,
  Navigation,
  Flame,
  Radio
} from 'lucide-react';

export interface SolutionData {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  description: string;
  heroVideo?: string;
  heroImage: string;

  customerProof: {
    stat: string;
    label: string;
  }[];

  solutionDeepDives: {
    title: string;
    problem: string;
    solution: string;
  }[];

  lifecycleStages: {
    step: string;
    title: string;
    description: string;
  }[];

  keyFeatures: {
    icon: any;
    title: string;
    desc: string;
  }[];

  proofOutcomes: {
    metric: string;
    label: string;
    description: string;
  }[];

  quote?: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
}

export const solutionsListSummary = [
  {
    id: "satellite",
    title: "Satellite",
    desc: "Constellation health, orbital telemetry & payload analytics",
    icon: Globe,
    badge: "Space Systems"
  },
  {
    id: "testing",
    title: "Testing",
    desc: "Environmental EQT, AIT qualification & test bench DAQ",
    icon: Activity,
    badge: "Qualification"
  },
  {
    id: "propulsion",
    title: "Propulsion",
    desc: "Hot-fire engine test stand & transient DAQ",
    icon: Flame,
    badge: "Rocket Test"
  },
  {
    id: "drones",
    title: "Drones",
    desc: "Autonomous UAV flight log parsing & fleet diagnostics",
    icon: Navigation,
    badge: "UAV Flight"
  },
  {
    id: "defense",
    title: "Defence",
    desc: "Edge sensor fusion for contested environments",
    icon: Shield,
    badge: "Mission-Critical"
  },
  {
    id: "energy",
    title: "Energy",
    desc: "Turbine vibration FFT & 24/7 asset health",
    icon: Zap,
    badge: "Industrial IoT"
  },
  {
    id: "automotive",
    title: "Automotive",
    desc: "CAN-bus decoding & EV battery thermal analytics",
    icon: Car,
    badge: "Automotive"
  },
  {
    id: "robotics",
    title: "Robotics",
    desc: "ROS 2 & hardware-in-the-loop deterministic streaming",
    icon: Bot,
    badge: "Autonomy"
  }
];

export const solutionsData: Record<string, SolutionData> = {
  aerospace: {
    id: "aerospace",
    title: "Aerospace Telemetry",
    tagline: "Nanosecond-precise telemetry stream ingest for rocket propulsion & satellite test stands.",
    badge: "Flight-Grade",
    description: "Built for propulsion engineers, hot-fire test stands, and aerospace test labs requiring zero packet drop under high vibration, high throughput sensor bursts.",
    heroImage: "/aerospace-ui.png",
    heroVideo: "/playback.mp4",
    customerProof: [
      { stat: "250+ DAQ", label: "Synchronized Sensor Channels" },
      { stat: "< 1 µs", label: "Timestamp Alignment Accuracy" },
      { stat: "99.999%", label: "Zero-Drop Hot-Fire Record" },
      { stat: "100 kHz", label: "Sampling Rate Supported" }
    ],
    solutionDeepDives: [
      {
        title: "High-Frequency Transient Capture",
        problem: "Traditional cloud monitoring drops microsecond pressure spikes during rocket engine ignition.",
        solution: "Xpectra edge binaries ingest raw sensor frames locally with ring-buffer memory, capturing transient spikes instantly."
      },
      {
        title: "Multi-Stream Timestamp Sync",
        problem: "Sensor streams from different hardware providers drift by milliseconds, confusing anomaly diagnosis.",
        solution: "Hardware-level PTP (IEEE 1588) sync aligns all telemetry streams to a single master clock."
      },
      {
        title: "Air-Gapped Hot-Fire Archival",
        problem: "Test facilities lack cloud connectivity during high-security propulsion runs.",
        solution: "Local zero-cloud deployment writes directly to NVMe arrays while exposing real-time web dashboards."
      }
    ],
    lifecycleStages: [
      {
        step: "01",
        title: "Hardware Binding",
        description: "Connect LabVIEW, MATLAB, or cDAQ controllers via Xpectra native Rust/C++ edge plugins."
      },
      {
        step: "02",
        title: "Real-Time Ingestion",
        description: "Ingest multi-gigabit sensor channels with microsecond timestamp preservation."
      },
      {
        step: "03",
        title: "Hot-Fire Analytics",
        description: "Live FFT frequency domain transforms and instant transient glitch detection."
      },
      {
        step: "04",
        title: "Compliance Archival",
        description: "Automated Parquet export and immutable test session records for mission audit."
      }
    ],
    keyFeatures: [
      { icon: Gauge, title: "100 kHz Ingest Rate", desc: "Native C++ edge buffer handles extreme data bursts without backpressure." },
      { icon: Clock, title: "Nanosecond Sync", desc: "PTP IEEE 1588 synchronization across distributed test stands." },
      { icon: Lock, title: "Air-Gapped Security", desc: "Deploy on isolated local subnets with zero internet dependency." },
      { icon: Server, title: "LabVIEW & MATLAB Integration", desc: "Pre-built connectors for industry standard test bench software." },
      { icon: Database, title: "Parquet & HDF5 Export", desc: "Instant export into open columnar data formats for post-test analysis." },
      { icon: BarChart3, title: "Real-time FFT Graphs", desc: "Sub-10ms web UI graph updates for vibration and acoustic signatures." }
    ],
    proofOutcomes: [
      { metric: "10x", label: "Faster Hot-Fire Analysis", description: "Engineers diagnose combustion instability in seconds rather than hours." },
      { metric: "0 Packets", label: "Lost During Ignition", description: "Zero data drop recorded during high vibration propulsion runs." },
      { metric: "100%", label: "Test Audit Compliance", description: "Fully reproducible telemetry sessions with immutable timestamps." }
    ],
    quote: {
      text: "Xpectra gave us instant microsecond visibility into hot-fire pressure spikes. We went from spending hours decoding logs to immediate post-test confidence.",
      author: "Dr. Marcus Vance",
      role: "Lead Propulsion Engineer",
      company: "Orbital Systems"
    }
  },
  defense: {
    id: "defense",
    title: "Defense Telemetry",
    tagline: "Resilient edge sensor fusion for tactical vehicles, UAVs, and air-gapped defense systems.",
    badge: "Mission-Critical",
    description: "Engineered for contested electromagnetic environments, low-bandwidth radio links, and zero-trust tactical edge nodes.",
    heroImage: "/drone.jpg",
    heroVideo: "/playback.mp4",
    customerProof: [
      { stat: "Zero Cloud", label: "100% Air-Gapped Operation" },
      { stat: "AES-256", label: "End-to-End Encryption" },
      { stat: "5ms", label: "Tactical Edge Processing" },
      { stat: "MIL-STD", label: "Protocol Compliance" }
    ],
    solutionDeepDives: [
      {
        title: "Contested Link Resilience",
        problem: "Intermittent tactical communications cause telemetry loss in autonomous UAV deployments.",
        solution: "Xpectra local stores data on edge flash, automatically resuming synchronized sync when link recovers."
      },
      {
        title: "Multi-Payload Sensor Fusion",
        problem: "Combining optical, radar, and RF spectrum data into a single coherent tactical timeline.",
        solution: "Unified schema engine standardizes heterogeneous payload streams into a single timeline."
      },
      {
        title: "Zero-Trust Edge Security",
        problem: "Physical capture of edge nodes risks compromising historical operational data.",
        solution: "Encrypted memory buffers with hardware-backed TPM verification and instant purge protocols."
      }
    ],
    lifecycleStages: [
      {
        step: "01",
        title: "Edge Provisioning",
        description: "Flash lightweight Xpectra binary onto tactical ARM64 or x86 edge hardware."
      },
      {
        step: "02",
        title: "Tactical Stream Fusion",
        description: "Multiplex RF, electro-optical, and IMU metrics on vehicle-level buses."
      },
      {
        step: "03",
        title: "Adaptive Streaming",
        description: "Dynamically throttle resolution based on available RF bandwidth."
      },
      {
        step: "04",
        title: "Debrief Archival",
        description: "Offload encrypted mission session files directly upon vehicle recovery."
      }
    ],
    keyFeatures: [
      { icon: Lock, title: "AES-256 Encryption", desc: "Military-grade data protection in transit and at rest." },
      { icon: Server, title: "Lightweight Binary", desc: "< 15MB footprint suitable for embedded ARM flight computers." },
      { icon: Activity, title: "Bandwidth Throttling", desc: "Intelligent packet prioritization over tactical radios." },
      { icon: Cpu, title: "Hardware TPM Auth", desc: "Cryptographic device identity for zero-trust networks." },
      { icon: Globe, title: "Multi-Node Mesh", desc: "Peer-to-peer telemetry relay between tactical units." },
      { icon: Database, title: "Instant Mission Replay", desc: "Frame-accurate mission playback for tactical debriefs." }
    ],
    proofOutcomes: [
      { metric: "100%", label: "Link Recovery", description: "Zero telemetry loss even during total RF blackout periods." },
      { metric: "< 15MB", label: "Binary Footprint", description: "Runs on resource-constrained embedded tactical hardware." },
      { metric: "0 Cloud", label: "Dependencies", description: "Complete operational autonomy in disconnected fields." }
    ],
    quote: {
      text: "Operating in zero-cloud, contested field environments requires absolute edge autonomy. Xpectra handles high-rate payload streams without dropping a single frame.",
      author: "Cmdr. Elena Rostova",
      role: "Director of Autonomous Systems",
      company: "AeroDefense Tech"
    }
  },
  robotics: {
    id: "robotics",
    title: "Robotics Telemetry",
    tagline: "High-throughput sensor stream ingestion & frame-accurate playback for autonomous robots.",
    badge: "Autonomy Ready",
    description: "Empower robotics engineering teams to validate ROS 2 nodes, actuators, LIDAR point clouds, and Hardware-in-the-Loop (HIL) test benches.",
    heroImage: "/robots.jpg",
    heroVideo: "/playback.mp4",
    customerProof: [
      { stat: "ROS 2 Native", label: "DDS Stream Integration" },
      { stat: "< 2ms", label: "Feedback Loop Latency" },
      { stat: "50 GB/hr", label: "Multi-LIDAR Processing" },
      { stat: "100%", label: "Deterministic Playback" }
    ],
    solutionDeepDives: [
      {
        title: "Deterministic Sensor Playback",
        problem: "Robotics simulation tests fail due to non-deterministic playback timing across ROS topics.",
        solution: "Xpectra time-scrubbing engine replays recorded sessions frame-by-frame with exact microsecond timing."
      },
      {
        title: "Multi-Camera & Pointcloud Sync",
        problem: "Aligning 60fps camera streams with 10Hz LIDAR point clouds causes state estimation drift.",
        solution: "Global hardware sync timestamping fuses spatial data streams effortlessly."
      },
      {
        title: "CI Regression for Physical Hardware",
        problem: "Testing software updates on physical robot fleets requires manual operator oversight.",
        solution: "Automated Python SDK scripts execute benchmark scenarios and validate telemetry metrics in CI."
      }
    ],
    lifecycleStages: [
      {
        step: "01",
        title: "ROS 2 Topic Binding",
        description: "Attach Xpectra node to active ROS 2 DDS middleware topics."
      },
      {
        step: "02",
        title: "HIL Ingestion",
        description: "Stream high-frequency motor encoders, IMUs, and cameras simultaneously."
      },
      {
        step: "03",
        title: "Live State Estimation",
        description: "Monitor real-time control loop metrics & safety boundary violations."
      },
      {
        step: "04",
        title: "Regression Replay",
        description: "Replay edge-case incidents against modified autonomy stacks in CI."
      }
    ],
    keyFeatures: [
      { icon: Bot, title: "ROS 1 & ROS 2 Native", desc: "Zero-copy binding to ROS topics and bagfile formats." },
      { icon: Clock, title: "Deterministic Scrubbing", desc: "Step forward and backward frame-by-frame through robot runs." },
      { icon: Cpu, title: "CAN & EtherCAT Support", desc: "Direct joint-level actuator telemetry parsing." },
      { icon: Activity, title: "Safety Violation Alerting", desc: "Instant notifications when control loop thresholds are breached." },
      { icon: Layers, title: "HIL Integration", desc: "Connect dSPACE, Speedgoat, and custom HIL rigs seamlessly." },
      { icon: BarChart3, title: "Python SDK", desc: "Programmatically inspect telemetry metrics inside pytest scripts." }
    ],
    proofOutcomes: [
      { metric: "5x", label: "Faster CI Iteration", description: "Automated telemetry validation cuts robot software release cycles." },
      { metric: "100%", label: "Frame Alignment", description: "Perfect camera-to-LIDAR spatial timestamp alignment." },
      { metric: "0 Drift", label: "In Playback", description: "Deterministic playback guarantees 1:1 simulation repeatability." }
    ],
    quote: {
      text: "The deterministic frame scrubbing in Xpectra cut our ROS 2 regression testing times by 80%. It's an indispensable tool for our autonomy fleet.",
      author: "Julian Thorne",
      role: "VP of Robotics Engineering",
      company: "Kinetix Autonomy"
    }
  },
  automotive: {
    id: "automotive",
    title: "Automotive Telemetry",
    tagline: "Powertrain stress testing, CAN-bus analytics, and fleet-wide battery thermal logging.",
    badge: "Automotive",
    description: "Designed for EV powertrain engineers, test track operations, and vehicle battery testing teams handling massive sensor channels.",
    heroImage: "/automobile.jpg",
    heroVideo: "/playback.mp4",
    customerProof: [
      { stat: "CAN / CAN-FD", label: "DBC File Support" },
      { stat: "1000+", label: "ECU Signals Processed" },
      { stat: "Real-time", label: "Thermal Runaway Triggers" },
      { stat: "Fleet-Wide", label: "Telemetry Ingestion" }
    ],
    solutionDeepDives: [
      {
        title: "Multi-ECU DBC File Parsing",
        problem: "Decoding raw binary CAN-bus logs across multiple vehicles requires tedious script maintenance.",
        solution: "Xpectra uploads DBC network files to decode hundreds of ECU signals automatically on the fly."
      },
      {
        title: "Battery Cell Thermal Analytics",
        problem: "Detecting localized hot-spots across thousands of battery cells requires ultra-fast stream monitoring.",
        solution: "Edge analytics evaluate cell temperature distributions every 10ms, triggering safety alerts."
      },
      {
        title: "Track-to-Cloud Telemetry Pipeline",
        problem: "Proving ground test vehicles generate terabytes of daily logs that take days to upload.",
        solution: "Xpectra edge compresses and summarizes track telemetry for instant web review before raw dump."
      }
    ],
    lifecycleStages: [
      {
        step: "01",
        title: "DBC Import",
        description: "Load vehicle CAN network DBC files for automatic signal decoding."
      },
      {
        step: "02",
        title: "Vehicle Bus Ingestion",
        description: "Connect to OBD-II, CAN-FD, or Automotive Ethernet loggers."
      },
      {
        step: "03",
        title: "Thermal & Stress Monitoring",
        description: "Live dashboard tracking inverter, battery cell, and motor temperature contours."
      },
      {
        step: "04",
        title: "Fleet Archive Sync",
        description: "Sync test vehicle sessions into unified cloud repository."
      }
    ],
    keyFeatures: [
      { icon: Car, title: "DBC & ARXML Support", desc: "Import standard CAN signal definitions effortlessly." },
      { icon: Gauge, title: "Automotive Ethernet", desc: "Ingest high-speed SOME/IP and DoIP vehicle diagnostic traffic." },
      { icon: Zap, title: "Thermal Hot-Spot Alerts", desc: "Automated anomaly detection across battery pack temperature arrays." },
      { icon: Database, title: "Fleet Aggregation", desc: "Compare test metrics across prototype vehicles in real-time." },
      { icon: Activity, title: "Track GPS Overlay", desc: "Correlate ECU telemetry metrics directly with track map coordinates." },
      { icon: Server, title: "Open Format Export", desc: "Export to MDF4, CSV, or Parquet for MATLAB analysis." }
    ],
    proofOutcomes: [
      { metric: "1000+", label: "Signals per Vehicle", description: "Real-time decoding of complex multi-bus vehicle networks." },
      { metric: "10ms", label: "Thermal Alert Trigger", description: "Instant notification upon battery cell temperature anomaly." },
      { metric: "80%", label: "Reduced Log Storage", description: "Intelligent edge compression reduces cloud storage costs." }
    ],
    quote: {
      text: "Monitoring thermal runaway across thousands of battery cells in real-time was a massive bottleneck before Xpectra. Now DBC signals decode instantly on the track.",
      author: "Sarah Lin",
      role: "Head of EV Powertrain",
      company: "Apex Mobility"
    }
  },
  energy: {
    id: "energy",
    title: "Energy & Industrial Infrastructure",
    tagline: "Continuous vibration, thermal, and acoustic monitoring for power turbines & grid assets.",
    badge: "Industrial IoT",
    description: "Purpose-built for power plant operators, wind farm engineers, and grid managers monitoring critical heavy machinery 24/7.",
    heroImage: "/network-telemetry.jpg",
    heroVideo: "/playback.mp4",
    customerProof: [
      { stat: "24/7/365", label: "Continuous Edge Monitoring" },
      { stat: "FFT Spectral", label: "Vibration Bearing Analysis" },
      { stat: "Zero-Touch", label: "Fleet Deployment" },
      { stat: "OPC UA", label: "Protocol Standard" }
    ],
    solutionDeepDives: [
      {
        title: "Turbine Bearing Degradation",
        problem: "Vibration frequency shifts indicating bearing wear are missed by simple threshold alarms.",
        solution: "Xpectra runs continuous edge FFT spectral analysis to detect micro-harmonic shifts weeks in advance."
      },
      {
        title: "Multi-Substation Telemetry Sync",
        problem: "Power grid transient events span multiple remote sub-stations with asynchronous logs.",
        solution: "PTP time-synchronized ingestion reconstructs exact grid fault propagation timelines."
      },
      {
        title: "OPC UA & Modbus Ingest",
        problem: "Legacy SCADA systems block high-speed sensor ingestion required for predictive AI models.",
        solution: "Xpectra bridges SCADA buses (Modbus/OPC UA) into modern high-speed telemetry streams."
      }
    ],
    lifecycleStages: [
      {
        step: "01",
        title: "SCADA Bridge",
        description: "Connect Xpectra edge gateway to Modbus, OPC UA, or MQTT industrial networks."
      },
      {
        step: "02",
        title: "High-Speed Ingest",
        description: "Sample accelerometers, strain gauges, and thermistors up to 50 kHz."
      },
      {
        step: "03",
        title: "Spectral FFT Compute",
        description: "Compute FFT frequency spectrums on the edge to detect harmonic wear."
      },
      {
        step: "04",
        title: "Predictive Maintenance",
        description: "Push early wear warnings directly into enterprise ERP & maintenance workorders."
      }
    ],
    keyFeatures: [
      { icon: Zap, title: "Edge FFT Spectral Analysis", desc: "Compute real-time frequency spectrums to detect bearing wear early." },
      { icon: Server, title: "OPC UA & Modbus Native", desc: "Connect directly to existing industrial PLCs and SCADA systems." },
      { icon: Activity, title: "Continuous 24/7 Ingest", desc: "Resilient ring-buffer storage ensures zero telemetry loss during outages." },
      { icon: Lock, title: "IEC 62443 Security", desc: "Hardened industrial cybersecurity architecture for energy assets." },
      { icon: Database, title: "Time-Series Archival", desc: "Compress years of high-frequency sensor history efficiently." },
      { icon: BarChart3, title: "Anomaly Trend Graphs", desc: "Intuitive web dashboards for plant operators and field technicians." }
    ],
    proofOutcomes: [
      { metric: "3 Weeks", label: "Early Warning Lead Time", description: "Detect bearing failure before catastrophic mechanical breakdown." },
      { metric: "99.99%", label: "Uptime Guaranteed", description: "Industrial-grade reliability for mission-critical power assets." },
      { metric: "100%", label: "SCADA Compatibility", description: "Bridges legacy industrial PLCs into modern data pipelines." }
    ],
    quote: {
      text: "Xpectra's edge FFT vibration analysis alerted us to turbine bearing degradation 3 weeks before any threshold alarm would have fired.",
      author: "David Miller",
      role: "Chief Reliability Officer",
      company: "GridPower Infrastructure"
    }
  },
  satellite: {
    id: "satellite",
    title: "Satellite Systems",
    tagline: "Constellation health, orbital telemetry & payload diagnostics.",
    badge: "Space Systems",
    description: "Built for satellite operators, constellation mission controllers, and space hardware labs monitoring orbital telemetry at scale.",
    heroImage: "/aerospace-ui.png",
    customerProof: [
      { stat: "1,000+", label: "Orbital Channels Monitored" },
      { stat: "< 10 ms", label: "Ground Station Decoded" },
      { stat: "99.99%", label: "Constellation Uptime" },
      { stat: "CCSDS", label: "Protocol Standard" }
    ],
    solutionDeepDives: [
      {
        title: "Constellation Telemetry Unification",
        problem: "Satellite fleets stream heterogeneous telemetry frames across multiple ground stations.",
        solution: "Xpectra unifies CCSDS satellite frames into a real-time queryable timeline."
      },
      {
        title: "Orbital Anomaly Detection",
        problem: "Solar flare thermal spikes and attitude control drifts are hard to correlate across payloads.",
        solution: "Automated rules analyze power draw, bus voltage, and thermistor telemetry in real-time."
      },
      {
        title: "Ground Station Edge Sync",
        problem: "Low-bandwidth ground contacts drop high-frequency payload diagnostic logs.",
        solution: "Edge NVMe buffers stream prioritized telemetry bursts during ground contact windows."
      }
    ],
    lifecycleStages: [
      { step: "01", title: "Ground Ingest", description: "Connect ground station receivers directly to Xpectra edge ingest daemons." },
      { step: "02", title: "CCSDS Parsing", description: "Decode telemetry frames and packets into structured time-series streams." },
      { step: "03", title: "Payload Analytics", description: "Run automated rules against bus power, thermal, and attitude telemetry." },
      { step: "04", title: "Orbit Archival", description: "Store full-fidelity orbital mission archives for mission life audit." }
    ],
    keyFeatures: [
      { icon: Globe, title: "Constellation Scale Ingest", desc: "Scale to thousands of satellite channels seamlessly." },
      { icon: Shield, title: "CCSDS Frame Decoding", desc: "Native parsing for space telemetry protocol standards." },
      { icon: Activity, title: "Real-Time Bus Health", desc: "Sub-second dashboard updates for power, thermal, and ADCS." },
      { icon: Database, title: "Parquet & HDF5 Archival", desc: "Open columnar data format export for orbital analysis." },
      { icon: Lock, title: "Air-Gapped Security", desc: "Deploy in isolated mission operation centers with zero cloud dependencies." },
      { icon: Gauge, title: "Ground Station Sync", desc: "Optimized for intermittent satellite pass contact windows." }
    ],
    proofOutcomes: [
      { metric: "100%", label: "CCSDS Protocol Support", description: "Native frame decoding for satellite communication protocols." },
      { metric: "< 5ms", label: "Ingest Latency", description: "Real-time telemetry stream visualization during pass windows." },      { metric: "99.999%", label: "Telemetry Integrity", description: "Zero packet loss across ground station telemetry receivers." }
    ],
    quote: {
      text: "Xpectra unified our constellation telemetry frame decoding across 4 ground stations. We detect thermal drifts and ADCS anomalies before pass windows end.",
      author: "Dr. Vikram Sethi",
      role: "Lead Mission Systems Director",
      company: "Orbital Space Systems"
    }
  },
  propulsion: {
    id: "propulsion",
    title: "Propulsion & Hot-Fire",
    tagline: "High-frequency transient DAQ for rocket engine & thruster test stands.",
    badge: "Rocket Test",
    description: "Designed for propulsion engineers, rocket engine test stands, and combustion labs requiring microsecond pressure transient capture.",
    heroImage: "/hotfire-stand.png",
    customerProof: [
      { stat: "250+ DAQ", label: "Synchronized Sensor Channels" },
      { stat: "< 1 µs", label: "Timestamp Alignment Accuracy" },
      { stat: "99.999%", label: "Zero-Drop Hot-Fire Record" },
      { stat: "100 kHz", label: "Sampling Rate Supported" }
    ],
    solutionDeepDives: [
      {
        title: "High-Frequency Transient Capture",
        problem: "Traditional cloud monitoring drops microsecond pressure spikes during rocket engine ignition.",
        solution: "Xpectra edge binaries ingest raw sensor frames locally with ring-buffer memory, capturing transient spikes instantly."
      },
      {
        title: "Multi-Stream Timestamp Sync",
        problem: "Sensor streams from different hardware providers drift by milliseconds, confusing anomaly diagnosis.",
        solution: "Hardware-level PTP (IEEE 1588) sync aligns all telemetry streams to a single master clock."
      },
      {
        title: "Air-Gapped Hot-Fire Archival",
        problem: "Test facilities lack cloud connectivity during high-security propulsion runs.",
        solution: "Local zero-cloud deployment writes directly to NVMe arrays while exposing real-time web dashboards."
      }
    ],
    lifecycleStages: [
      { step: "01", title: "Hardware Binding", description: "Connect LabVIEW, MATLAB, or cDAQ controllers via Xpectra native Rust/C++ edge plugins." },
      { step: "02", title: "Real-Time Ingestion", description: "Ingest multi-gigabit sensor channels with microsecond timestamp preservation." },
      { step: "03", title: "Hot-Fire Analytics", description: "Live FFT frequency domain transforms and instant transient glitch detection." },
      { step: "04", title: "Compliance Archival", description: "Automated Parquet export and immutable test session records for mission audit." }
    ],
    keyFeatures: [
      { icon: Gauge, title: "100 kHz Ingest Rate", desc: "Native C++ edge buffer handles extreme data bursts without backpressure." },
      { icon: Clock, title: "Nanosecond Sync", desc: "PTP IEEE 1588 synchronization across distributed test stands." },
      { icon: Lock, title: "Air-Gapped Security", desc: "Deploy on isolated local subnets with zero internet dependency." },
      { icon: Server, title: "LabVIEW & MATLAB Integration", desc: "Pre-built connectors for industry standard test bench software." },
      { icon: Database, title: "Parquet & HDF5 Export", desc: "Instant export into open columnar data formats for post-test analysis." },
      { icon: BarChart3, title: "Real-time FFT Graphs", desc: "Sub-10ms web UI graph updates for vibration and acoustic signatures." }
    ],
    proofOutcomes: [
      { metric: "10x", label: "Faster Hot-Fire Analysis", description: "Engineers diagnose combustion instability in seconds rather than hours." },
      { metric: "0 Packets", label: "Lost During Ignition", description: "Zero data drop recorded during high vibration propulsion runs." },
      { metric: "100%", label: "Test Audit Compliance", description: "Fully reproducible telemetry sessions with immutable timestamps." }
    ],
    quote: {
      text: "Xpectra captures microsecond hot-fire pressure spikes with zero packet loss across our liquid engine test stands at IPRC Mahendragiri.",
      author: "S. Ramanathan",
      role: "Head of Rocket Test Operations",
      company: "ISRO LPSC / IPRC Mahendragiri"
    }
  },
  drones: {
    id: "drones",
    title: "Drones & Autonomous UAVs",
    tagline: "Autonomous UAV telemetry, flight log parsing & swarm fleet diagnostics.",
    badge: "UAV Flight",
    description: "Built for drone manufacturers, autonomous flight operators, and defense UAV fleets analyzing high-rate flight controller logs.",
    heroImage: "/hardware-daq.png",
    customerProof: [
      { stat: "PX4 / ULOG", label: "Native Log Parsing" },
      { stat: "ROS 2", label: "DDS Telemetry Bridge" },
      { stat: "Sub-10ms", label: "Edge Decision Latency" },
      { stat: "100%", label: "Flight Audit Trail" }
    ],
    solutionDeepDives: [
      {
        title: "Automated ULOG & PX4 Parsing",
        problem: "Analyzing binary flight logs after every test flight requires manual script execution and delays turnaround.",
        solution: "Xpectra automatically ingests and parses PX4, ArduPilot, and ROS bag files the instant the UAV lands or connects."
      },
      {
        title: "Fleet-Wide Battery & Motor Trending",
        problem: "Individual ESC or motor degradation across drone fleets goes unnoticed until in-flight failure.",
        solution: "Continuous analytics trend ESC current draw, motor vibration, and battery cell delta across hundreds of UAV flights."
      },
      {
        title: "BVLOS Telemetry Streaming",
        problem: "Beyond-Visual-Line-of-Sight flight data drops over cellular/satellite networks.",
        solution: "Resilient edge ring-buffer syncs telemetry when cellular or satellite links reconnect."
      }
    ],
    lifecycleStages: [
      { step: "01", title: "Flight Controller Link", description: "Connect PX4, ArduPilot, or ROS 2 flight controllers via MAVLink / DDS." },
      { step: "02", title: "Edge Telemetry Ingest", description: "Log high-frequency IMU, GPS, and motor telemetry locally." },
      { step: "03", title: "Automated Log Review", description: "Run automated health and safety rules against every flight log." },
      { step: "04", title: "Fleet Management", description: "Track component wear and maintenance intervals across UAV fleets." }
    ],
    keyFeatures: [
      { icon: Navigation, title: "MAVLink & ROS 2 Bridge", desc: "Direct integration with popular autopilot and robotics software." },
      { icon: Activity, title: "PX4 & ULOG Ingest", desc: "Instant binary flight log parsing and interactive timeline review." },
      { icon: Shield, title: "BVLOS Link Resilience", desc: "Local buffer preserves data over cellular and satellite dropouts." },
      { icon: Database, title: "Fleet Telemetry Vault", desc: "Centralized storage for multi-UAV flight data and sensor logs." },
      { icon: Lock, title: "Secure Mission Storage", desc: "Encrypted local edge storage for sensitive defense flight operations." },
      { icon: BarChart3, title: "ESC & Battery Diagnostics", desc: "Deep telemetry insights into motor wear and power consumption." }
    ],
    proofOutcomes: [
      { metric: "10x", label: "Faster Log Parsing", description: "Flight review completed in seconds post-landing." },
      { metric: "100%", label: "Fleet Traceability", description: "Full diagnostic record for every vehicle flight hour." },
      { metric: "0", label: "Telemetry Lost", description: "Edge buffer protects data during BVLOS link dropouts." }
    ],
    quote: {
      text: "Xpectra transformed our UAV flight test workflow. PX4 log parsing that used to take 2 hours after every landing now completes in under 5 seconds.",
      author: "Commander A. R. Sharma",
      role: "Chief Test Pilot & Flight Validation Lead",
      company: "DRDO Aeronautical Development Establishment (ADE)"
    }
  }
};

solutionsData.defence = solutionsData.defense;

export const satelliteAITData = {
  title: "Satellite AIT & Ground Segment Validation Flow",
  subtitle: "Standard Assembly, Integration & Testing (AIT/ATLO) workflow using ISRO (URSC/ISAC, SDSC-SHAR) & SpaceX (Hawthorne/Starbase) industry terminology.",
  sections: [
    {
      id: 1,
      title: "1. Environmental Testing (Qualification & Acceptance)",
      shortName: "Environmental",
      badge: "ISRO Space Simulation Chamber",
      img: "/satellite-tvac-chamber.png",
      subsections: [
        {
          category: "Thermal",
          items: [
            { name: "Thermal Vacuum (TVAC) test", desc: "Simulates orbital vacuum + hot/soak/cold cycles" },
            { name: "Thermal balance test", desc: "Validates thermal math model vs real hardware" },
            { name: "ISRO TBTV Standard", desc: "ISRO calls this the TBTV (Thermal Balance Thermal Vacuum) test, usually run in the Space Simulation Chamber at ISAC/URSC or IISU" }
          ]
        },
        {
          category: "Mechanical / Dynamic",
          items: [
            { name: "Vibration testing (sine + random vibration)", desc: "Simulates launch vehicle loads" },
            { name: "Acoustic testing", desc: "In a reverberation chamber, simulates acoustic pressure during liftoff/max-Q" },
            { name: "Shock testing", desc: "Pyro shock simulation (separation events, deployment mechanisms)" },
            { name: "Sine burst test", desc: "Static load simulation of max-g during ascent" }
          ]
        },
        {
          category: "Mass Properties",
          items: [
            { name: "CG (Center of Gravity) determination", desc: "Precise determination of satellite mass balance" },
            { name: "MOI (Moment of Inertia) measurement", desc: "Rotational inertia measurement" },
            { name: "Spin balancing", desc: "For spin-stabilized satellites" }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "2. EMI / EMC Testing",
      shortName: "EMI / EMC",
      badge: "Anechoic Chamber",
      img: "/satellite-emc-chamber.png",
      items: [
        { name: "Anechoic Chamber Testing", desc: "Electromagnetic Interference / Electromagnetic Compatibility testing in an anechoic chamber" },
        { name: "Emissions & Susceptibility Checks", desc: "Checks for conducted emissions, radiated emissions, susceptibility" },
        { name: "Subsystem Non-Interference", desc: "Critical to ensure subsystems (transponders, batteries, thrusters) don't interfere with each other" }
      ]
    },
    {
      id: 3,
      title: "3. RF & Antenna Testing",
      shortName: "RF & Antenna",
      badge: "CATR Range",
      img: "/stage-hardware-binding.png",
      items: [
        { name: "Compact Antenna Test Range (CATR)", desc: "Antenna pattern testing in a Compact Antenna Test Range (CATR)" },
        { name: "Link Budget Verification", desc: "RF power and communication link margin validation" },
        { name: "Gravity-Offload Rig Deployment", desc: "Deployment testing for solar arrays, antennas (using gravity-offload rigs since deployment mechanisms can't be tested 'as-is' under 1g)" }
      ]
    },
    {
      id: 4,
      title: "4. Functional & Electrical Testing",
      shortName: "Functional & AIT",
      badge: "ATLO / CPT Ingest",
      img: "/aerospace-ui.png",
      items: [
        { name: "ATLO (Assembly, Test and Launch Operations)", desc: "SpaceX/NASA-style terminology for the full integration flow" },
        { name: "AIT (Assembly, Integration & Testing)", desc: "ISRO's preferred term for the same" },
        { name: "Comprehensive Performance Test (CPT)", desc: "Full health check run multiple times across the campaign (baseline, before/after environmental tests, pre-ship)" },
        { name: "Bus & Payload Integration Checks", desc: "Bus and payload integration checks" },
        { name: "TT&C (Telemetry, Tracking & Command) Loop Tests", desc: "TT&C loop tests" }
      ]
    },
    {
      id: 5,
      title: "5. Software & Simulation Validation",
      shortName: "Software & HIL",
      badge: "ISRO AOCS Bed",
      img: "/stage-realtime-ingest.png",
      items: [
        { name: "Hardware-in-the-Loop (HIL) Simulation", desc: "Real-time hardware-in-the-loop simulation" },
        { name: "Software Validation Test Bed", desc: "ISRO uses this for AOCS (Attitude and Orbit Control System) validation" },
        { name: "Mission Sequence Rehearsal / DITL", desc: "Mission sequence rehearsal / Day-in-the-Life (DITL) test" }
      ]
    },
    {
      id: 6,
      title: "6. Structural / Static Testing",
      shortName: "Structural",
      badge: "Modal Survey",
      img: "/transient-capture.png",
      items: [
        { name: "Static Load Test", desc: "Static load test" },
        { name: "Modal Survey Test", desc: "Validates structural frequency model" }
      ]
    },
    {
      id: 7,
      title: "7. Pre-Launch Ground Checks (Launch Site)",
      shortName: "Launch Site",
      badge: "SDSC SHAR / Cape",
      img: "/airgapped-nvme.png",
      items: [
        { name: "Launch Site Operations", desc: "At SDSC SHAR (ISRO) or Cape Canaveral/Vandenberg/Starbase (SpaceX)" },
        { name: "Fueling / Propellant Loading Checks", desc: "Fueling/propellant loading checks" },
        { name: "Final Health Check (FHC)", desc: "Final health check / FHC" },
        { name: "Pre-Launch Countdown Rehearsal", desc: "Pre-launch countdown rehearsal" },
        { name: "Encapsulation", desc: "Encapsulation (satellite into payload fairing)" },
        { name: "Mate / De-Mate Checks", desc: "Mate/de-mate checks with launch vehicle" }
      ]
    },
    {
      id: 8,
      title: "8. SpaceX-Specific Terms (Falcon / Starship Payload Integration)",
      shortName: "SpaceX ATLO",
      badge: "SpaceX Hawthorne",
      img: "/timestamp-sync.png",
      items: [
        { name: "Payload Processing Facility (PPF)", desc: "Payload processing at the payload processing facility (PPF)" },
        { name: "Fairing Halves Integration & Encapsulation", desc: "Fairing halves integration & payload encapsulation" },
        { name: "Wet Dress Rehearsal (WDR)", desc: "Full propellant load simulation without actual launch" },
        { name: "Static Fire Test", desc: "For the rocket itself, not the satellite, but part of overall mission readiness" }
      ]
    },
    {
      id: 9,
      title: "9. Post-Launch / On-Orbit Validation",
      shortName: "On-Orbit / LEOP",
      badge: "LEOP & IOT Ops",
      img: "/compliance-archival.png",
      items: [
        { name: "LEOP (Launch and Early Orbit Phase)", desc: "LEOP (Launch and Early Orbit Phase) operations" },
        { name: "In-Orbit Testing (IOT)", desc: "Checks all subsystems function correctly after reaching orbit" },
      ]
    }
  ]
};export const propulsionFlowData = {
  title: "Rocket Propulsion Ground Testing & Validation Flow",
  subtitle: "Standard rocket engine & stage testing workflow using ISRO (LPSC / IPRC Mahendragiri) & SpaceX (McGregor Test Facility, Texas) industry terminology.",
  sections: [
    {
      id: 1,
      title: "ISRO 1. Solid Motor Testing (SHAR STEX Complex)",
      shortName: "ISRO Solid Motors",
      badge: "STEX SDSC-SHAR",
      img: "/hotfire-stand.png",
      items: [
        { name: "Static Test firing at SHAR", desc: "Static Test and Evaluation Complex (STEX) firing at SDSC SHAR" },
        { name: "Sub-scale motor testing", desc: "Propellant grain burn rate & acoustic sub-scale motor validation" },
        { name: "Full-scale segment testing", desc: "Segmented booster static test firing (S200 solid rocket booster)" }
      ]
    },
    {
      id: 2,
      title: "ISRO 2. Liquid Engine Testing (IPRC Mahendragiri)",
      shortName: "ISRO Liquid Engines",
      badge: "IPRC Mahendragiri / HAT",
      img: "/stage-hotfire-analytics.png",
      items: [
        { name: "Engine hot testing at IPRC", desc: "ISRO Propulsion Complex (IPRC) Mahendragiri liquid engine test stand firing" },
        { name: "High Altitude Test (HAT) facility", desc: "Simulates vacuum conditions for upper-stage engine ignition (CE-7.5, CE-20 cryogenic engines)" },
        { name: "Gas generator testing", desc: "Gas generator testing for turbopump-driven liquid engines" },
        { name: "Turbopump testing", desc: "Cold flow + hot firing testing for high-pressure turbopumps" },
        { name: "Injector head & chamber testing", desc: "Injector head testing / Sub-scale combustion chamber testing" },
        { name: "Engine qualification / FAT", desc: "Engine qualification test / Flight Acceptance Test (FAT)" },
        { name: "Stage-level static test", desc: "Integrated stage static test firing (L110 liquid stage, C25 cryogenic stage)" }
      ]
    },
    {
      id: 3,
      title: "ISRO 3. Cryogenic-Specific Testing (LPSC & IPRC)",
      shortName: "ISRO Cryo Engines",
      badge: "LPSC Mahendragiri CUS",
      img: "/stage-realtime-ingest.png",
      items: [
        { name: "Cryo engine chill-down test", desc: "Pre-firing LOX/LH2 liquid nitrogen/helium chill-down thermal conditioning" },
        { name: "Propellant loading rehearsal", desc: "Cryogenic LOX/LH2 tank fill, hold, and drain rehearsal" },
        { name: "Cryogenic Upper Stage (CUS) test", desc: "Cryogenic Upper Stage (CUS) integrated engine & stage testing" }
      ]
    },
    {
      id: 4,
      title: "ISRO 4. Ground Checks & Pre-Firing Tests",
      shortName: "ISRO Ground Checks",
      badge: "Feed System & TVC",
      img: "/transient-capture.png",
      items: [
        { name: "Leak test / Proof pressure test", desc: "High-pressure helium leak & structural proof pressure test" },
        { name: "Cold flow test", desc: "Non-firing cold flow test validating propellant feed system valves & pressure drop" },
        { name: "Igniter testing", desc: "Pyrotechnic & hypergolic igniter reliability testing" },
        { name: "Thrust Vector Control (TVC) test", desc: "Gimbal actuator dynamic TVC response testing" }
      ]
    },
    {
      id: 5,
      title: "SpaceX 1. McGregor Development & Hot-Fire Testing",
      shortName: "SpaceX McGregor",
      badge: "McGregor Test Stand",
      img: "/aerospace-ui.png",
      items: [
        { name: "Static fire test", desc: "Full engine/stage firing while bolted to test stand (McGregor & launch pad)" },
        { name: "Component acceptance testing", desc: "Every engine (Merlin, Raptor) individually hot-fire tested before stage integration" },
        { name: "Full Duration Static Fire", desc: "Burns for full mission duration to validate performance" },
        { name: "Wet Dress Rehearsal (WDR)", desc: "Full propellant load (sub-cooled LOX/CH4 or RP-1) + countdown without ignition" }
      ]
    },
    {
      id: 6,
      title: "SpaceX 2. Starship, Cryo Proof & Pad Operations",
      shortName: "SpaceX Starship & Pad",
      badge: "Starbase / McGregor",
      img: "/timestamp-sync.png",
      items: [
        { name: "Cryo proof testing", desc: "Tank pressurized with cryogenic fluid (LN2 for structural proof) to validate structural integrity" },
        { name: "Starship Hop tests", desc: "Low-altitude flight tests (famously used for Starship — Starhopper, SN5/SN6 hops)" },
        { name: "Raptor engine acceptance test", desc: "Every Raptor engine is individually test-fired at McGregor before shipping to Starbase" },
        { name: "Static test stand TVC gimbaling", desc: "Includes gimbal testing for TVC validation on Merlin & Raptor" },
        { name: "Pre-launch Static Fire at pad", desc: "Falcon 9 standard pre-launch static fire on the pad" },
        { name: "NASA SLS Green Run Benchmark", desc: "Stage test firing comparison benchmark (NASA SLS core stage)" }
      ]
    },
    {
      id: 7,
      title: "Common Ground Validation Elements (GTRE / ISRO / SpaceX)",
      shortName: "Common Validation",
      badge: "NDT & Telemetry Standards",
      img: "/compliance-archival.png",
      items: [
        { name: "Non-Destructive Testing (NDT)", desc: "X-ray, ultrasonic, & dye-penetrant checks on turbine blades & combustion chambers" },
        { name: "Propellant / fuel compatibility testing", desc: "Material compatibility with LOX, LH2, RP-1, Methane, & Hypergolics" },
        { name: "Instrumentation calibration", desc: "Strain gauges, thermocouples, and pressure transducers calibration" },
        { name: "Telemetry validation during hot tests", desc: "High-frequency microsecond transient capture during hot-fire tests" }
      ]
    }
  ]
};

export const dronesFlowData = {
  title: "UAV & Drone Systems Ground Testing & Validation Flow",
  subtitle: "Standard ground testing workflow for military UAVs as per DRDO terminology (ADE Rustom-II/TAPAS-BH-201, Nishant, Netra, Abhyas, Ghatak/SWiFT, ADRDE, RCI, CVRDE, CEMILAC & DGAQA).",
  sections: [
    {
      id: 1,
      title: "1. Design & Ground Qualification Testing (Structural & Environmental)",
      shortName: "Structural & EQT",
      badge: "MIL-STD-810 / JSS 55555",
      img: "/transient-capture.png",
      subsections: [
        {
          category: "Structural Testing",
          items: [
            { name: "Static structural test", desc: "Validates airframe under design load envelope" },
            { name: "Proof load testing", desc: "Validates structural margin under maximum design loads" },
            { name: "Fatigue testing", desc: "Wing and fuselage lifecycle fatigue validation" },
            { name: "Modal survey test", desc: "Structural frequency & mode shape validation to avoid flutter" },
            { name: "Flutter clearance / GVT", desc: "Ground Vibration Test (GVT) for flutter margin clearance" }
          ]
        },
        {
          category: "Environmental (EQT)",
          items: [
            { name: "MIL-STD-810 / JSS 55555 EQT", desc: "DRDO military environmental qualification standard" },
            { name: "Temperature-Altitude test", desc: "High-altitude environmental temperature soak" },
            { name: "Vibration & shock testing", desc: "Transportation + flight-induced vibration & shock" },
            { name: "Salt fog / spray test", desc: "Corrosion resistance for naval variants" },
            { name: "Sand, dust & rain testing", desc: "Severe weather & desert environmental clearance" }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "2. Avionics & Systems Integration (Iron Bird & HIL)",
      shortName: "Avionics & HIL Rig",
      badge: "Iron Bird / Anechoic",
      img: "/stage-hardware-binding.png",
      items: [
        { name: "Avionics Integration Rig / Iron Bird", desc: "Full avionics suite tested on a ground rig replicating airframe wiring/systems before flight" },
        { name: "HIL (Hardware-in-Loop) Simulation", desc: "Flight control laws validation using Flight Control Computer (FCC)" },
        { name: "Autopilot & ATOL Validation", desc: "Autopilot testing and Auto Take-off and Landing (ATOL) system validation" },
        { name: "EMI / EMC Anechoic Testing", desc: "Anechoic chamber testing critical for dense avionics & RF links" },
        { name: "LOS & BLOS Data Link Testing", desc: "Line of Sight and Beyond Line of Sight command/control telemetry links" }
      ]
    },
    {
      id: 3,
      title: "3. UAV Propulsion Testing (Turboprop / Jet & Rotor)",
      shortName: "UAV Propulsion",
      badge: "ADE Engine Rig / EGR",
      img: "/hotfire-stand.png",
      items: [
        { name: "Engine Ground Run (EGR)", desc: "EGR testing for engines like NPO Saturn 36MT (Rustom-II) & indigenous PTAE-7 (Nishant/Lakshya)" },
        { name: "Altitude Chamber Testing", desc: "Engine performance & fuel flow validation at operational altitudes" },
        { name: "Fuel System Qualification", desc: "Fuel feed, tank slosh, & boost pump qualification" },
        { name: "Propeller / Rotor Balancing", desc: "Dynamic rotor & propeller balancing for rotary & prop-driven UAVs" }
      ]
    },
    {
      id: 4,
      title: "4. Flight Control & GCS (Ground Control Station) Validation",
      shortName: "FCC & GCS Validation",
      badge: "SIL / MILS / Redundancy",
      img: "/aerospace-ui.png",
      items: [
        { name: "Software-in-Loop (SIL) Simulation", desc: "Pure software control law simulation & verification" },
        { name: "Man-in-Loop Simulation (MILS)", desc: "Pilot/operator in the loop with simulated flight dynamics" },
        { name: "GCS Integration Testing", desc: "Validates command, control, and mission planning software" },
        { name: "Redundancy Testing", desc: "Dual/triple redundant flight control computer failover tests" },
        { name: "Failsafe & GPS-Denial Testing", desc: "Validates behavior on link loss, engine failure, & GPS-denied environments" }
      ]
    },
    {
      id: 5,
      title: "5. Launch & Recovery System Testing (ADRDE / Catapult / Parachute)",
      shortName: "Launch & Recovery",
      badge: "ADRDE Catapult / Chute",
      img: "/airgapped-nvme.png",
      items: [
        { name: "Pneumatic / Hydraulic Launcher", desc: "Catapult launcher pressure & acceleration trials" },
        { name: "Catapult Launch Trials", desc: "High-g launch release qualification for tactical UAVs" },
        { name: "Parachute Recovery System", desc: "Canopy deployment, pyrotechnic mortar eject, & shock absorption" },
        { name: "Arrested Landing / Net Recovery", desc: "Net recovery & hook arrester landing trials for Netra & Nishant" }
      ]
    },
    {
      id: 6,
      title: "6. RF, Stealth & Payload Integration (EO/IR, SAR & RCS)",
      shortName: "Payloads & RCS",
      badge: "EO/IR / SAR / RCS Ghatak",
      img: "/satellite-emc-chamber.png",
      items: [
        { name: "Payload Integration Testing", desc: "Electro-Optical/Infrared (EO/IR) camera, Synthetic Aperture Radar (SAR), & SIGINT payloads" },
        { name: "Gimbal Stabilization Testing", desc: "Multi-axis gyro gimbal line-of-sight stabilization" },
        { name: "Antenna Pattern Testing", desc: "Data link antenna radiation pattern & gain measurements" },
        { name: "Ground RCS Measurement", desc: "Ground-based Radar Cross-Section (RCS) measurement for stealth UAVs (Ghatak / SWiFT)" }
      ]
    },
    {
      id: 7,
      title: "7. Ground Runs & Taxi Trials (Pre-Flight Clearance)",
      shortName: "Pre-Flight Taxi",
      badge: "ADE Taxi Trials",
      img: "/timestamp-sync.png",
      items: [
        { name: "Engine Ground Run (EGR)", desc: "Full power engine ground run & vibration check on apron" },
        { name: "Low-Speed Taxi Trial", desc: "Brake response, ground handling, & low-speed steering check" },
        { name: "High-Speed Taxi Trial", desc: "Nose wheel lift-off speed check & high-speed abort braking" },
        { name: "Nose Wheel Steering & Brake Check", desc: "Differential braking & automated taxi steering validation" }
      ]
    },
    {
      id: 8,
      title: "8. Flight Testing Phases (Envelope Expansion & User Trials)",
      shortName: "Flight Trials",
      badge: "FF / FET / Army Trials",
      img: "/stage-realtime-ingest.png",
      items: [
        { name: "First Flight (FF) Clearance", desc: "Initial flight release milestone & first flight clearance" },
        { name: "Envelope Expansion Trials", desc: "Gradually expanding speed, altitude, and maneuver envelope" },
        { name: "User Trials (Armed Forces)", desc: "Conducting operational trials with Indian Army, Navy, & Air Force" },
        { name: "Field Evaluation Trials (FET)", desc: "High-altitude desert & naval field evaluation trials" }
      ]
    },
    {
      id: 9,
      title: "9. Certification & Clearance Bodies (DRDO / CEMILAC / DGAQA)",
      shortName: "Certification (CEMILAC)",
      badge: "CEMILAC MTC / DGAQA",
      img: "/compliance-archival.png",
      items: [
        { name: "CEMILAC Type Certification", desc: "Centre for Military Airworthiness and Certification Type Certificate & Military Type Certificate (MTC)" },
        { name: "RCMA Audit Clearance", desc: "Regional Centre for Military Airworthiness design & build standard audits" },
        { name: "DGAQA Quality Assurance", desc: "Directorate General of Aeronautical Quality Assurance component & assembly audits" },
        { name: "IFTR & FTR Clearances", desc: "Initial Flight Test Release (IFTR) and Flight Test Release (FTR) milestones" }
      ]
    },
    {
      id: 10,
      title: "10. Swarm & Multi-UAV Specific Validation",
      shortName: "Swarm & Mesh Network",
      badge: "Autonomous Swarm",
      img: "/stage-hotfire-analytics.png",
      items: [
        { name: "Swarm Coordination Algorithm", desc: "SIL/HIL based multi-UAV autonomous swarm formation validation" },
        { name: "Collision Avoidance Testing", desc: "Dynamic sense-and-avoid collision avoidance algorithms" },
        { name: "Mesh Network Communication", desc: "Ad-hoc mesh RF network telemetry & inter-drone data relay validation" }
      ]
    }
  ]
};

export const defenceFlowData = {
  title: "DRDO / MoD Defence Systems Testing & Evaluation (T&E) Framework",
  subtitle: "Institutional T&E workflow for defence equipment across Land, Sea, and Air domains (GSQR/ASR/NSQR, DGQA/DGAQA, PXE Chandipur, JSS 55555, CVRDE, NPOL, NSTL, CEMILAC & MoD Procurement).",
  sections: [
    {
      id: 1,
      title: "1. Requirement & Design Stage Documentation",
      shortName: "GSQR / ASR / NSQR",
      badge: "Services SQRs",
      img: "/transient-capture.png",
      items: [
        { name: "GSQR (General Staff Qualitative Requirement)", desc: "Issued by Army/Navy/Air Force, defines parameters equipment must achieve" },
        { name: "PSQR (Preliminary Services Qualitative Requirement)", desc: "Draft requirements formulated during initial design phase" },
        { name: "ASR (Air Staff Requirement)", desc: "Indian Air Force specific qualitative requirements" },
        { name: "NSQR (Naval Staff Qualitative Requirement)", desc: "Indian Navy specific qualitative requirements" }
      ]
    },
    {
      id: 2,
      title: "2. Development & Design Validation (DGQA, CQA & PXE)",
      shortName: "DGQA / CQA / PXE",
      badge: "MoD Apex QA Bodies",
      img: "/stage-hardware-binding.png",
      items: [
        { name: "DGQA (Directorate General Quality Assurance)", desc: "Apex QA body under MoD for land and land-air systems" },
        { name: "CQA (Controllerate of Quality Assurance)", desc: "CQAs per category: CQA(Vehicles), CQA(Weapons), CQA(ME Military Explosives)" },
        { name: "PXE (Proof & Experimental Establishment)", desc: "Chandipur ballistics and ammunition proof testing" },
        { name: "DPQAM (Quality Assurance Munitions)", desc: "Directorate of Planning & Quality Assurance for munitions" }
      ]
    },
    {
      id: 3,
      title: "3. Environmental & Ruggedness Testing (JSS 55555 EQT)",
      shortName: "JSS 55555 EQT",
      badge: "Climatic & Terrain EQT",
      img: "/satellite-emc-chamber.png",
      subsections: [
        {
          category: "Standards & ESS",
          items: [
            { name: "JSS 55555 EQT Standard", desc: "DRDO military environmental qualification standard (analogous to MIL-STD-810)" },
            { name: "Environmental Stress Screening (ESS)", desc: "Screening components for latent manufacturing defects" },
            { name: "Ingress Protection (IP) testing", desc: "Dust & water immersion ingress protection rating checks" }
          ]
        },
        {
          category: "Terrain & Extreme Climate",
          items: [
            { name: "Rajasthan Desert Trials", desc: "Extreme ambient heat & dust testing (Jodhpur / Pokhran)" },
            { name: "Leh & Siachen High Altitude", desc: "Sub-zero cold start & high-altitude environmental trials" },
            { name: "Chilka Coastal Trials", desc: "High humidity, salt fog, & marine corrosion testing" }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "4. Electrical & Electromagnetic Testing (EMI/EMC & TEMPEST)",
      shortName: "EMI/EMC & TEMPEST",
      badge: "MIL-STD-461 / TEMPEST",
      img: "/hotfire-stand.png",
      items: [
        { name: "EMI / EMC Testing", desc: "MIL-STD-461 & DRDO-adapted electromagnetic compatibility testing" },
        { name: "TEMPEST Testing", desc: "Electromagnetic emission security for classified/sensitive comms equipment" },
        { name: "Power Transient & Spike Check", desc: "Vehicle & aircraft power bus transient immunity checks" }
      ]
    },
    {
      id: 5,
      title: "5. Mechanical & Structural Testing (NDT & Proof Loads)",
      shortName: "Mechanical & NDT",
      badge: "Vibration / Shock / NDT",
      img: "/airgapped-nvme.png",
      items: [
        { name: "Vibration & Shock Testing", desc: "Transportation, recoil, and flight-induced dynamic shock loads" },
        { name: "Fatigue & Endurance Testing", desc: "Lifecycle stress fatigue and structural endurance testing" },
        { name: "Proof Testing", desc: "High-pressure vessel, gun barrel, & ammunition proof testing" },
        { name: "Non-Destructive Testing (NDT)", desc: "Ultrasonic, radiography X-ray, & dye-penetrant flaw inspection" }
      ]
    },
    {
      id: 6,
      title: "6. Field & User Trials (Climatic & Terrain Firing Ranges)",
      shortName: "Field & User Trials",
      badge: "Pokhran / Siachen / FET",
      img: "/timestamp-sync.png",
      items: [
        { name: "DGQA Preliminary Trials", desc: "Initial quality assurance clearance before handing over to Services" },
        { name: "User Trials (Army / Navy / IAF)", desc: "Conducting trials with actual Service personnel under field conditions" },
        { name: "Confirmatory & Reliability Trials", desc: "Maintainability, reliability, & mean time between failure (MTBF) checks" },
        { name: "Seasonal Climatic Trials", desc: "Summer (Pokhran), Winter (Siachen/Leh), & Monsoon terrain trials" }
      ]
    },
    {
      id: 7,
      title: "7. Weapon & Ammunition-Specific Testing (ITR / PXE Chandipur)",
      shortName: "Weapons & Ballistics",
      badge: "ITR / PXE Firing Range",
      img: "/stage-realtime-ingest.png",
      items: [
        { name: "Static & Dynamic Live Firing", desc: "Static bench firing and dynamic live-fire target engagement" },
        { name: "Accuracy & Dispersion Trials", desc: "Evaluating shot group dispersion & circular error probable (CEP)" },
        { name: "Range Trials (ITR / PXE Chandipur)", desc: "Telemetry & optical tracking range trials at ITR Chandipur" },
        { name: "Terminal Ballistics & Fuze Tests", desc: "Armor penetration, fuze safety & arming, and terminal warhead lethality" }
      ]
    },
    {
      id: 8,
      title: "8. Armoured Vehicle & Land Systems Specific (CVRDE-Driven)",
      shortName: "Armoured Systems (CVRDE)",
      badge: "CVRDE Mobility / NBC",
      img: "/stage-hardware-binding.png",
      items: [
        { name: "Mobility & Gradient Trials", desc: "Cross-country speed, steep gradient climbing, & trench crossing trials" },
        { name: "Amphibious Trials", desc: "Water obstacle swimming & amphibious entry/exit stability" },
        { name: "Ballistic Armor Protection", desc: "Validating armor against STANAG / DRDO specified kinetic & explosive threat levels" },
        { name: "NBC Protection System Testing", desc: "Nuclear, Biological, & Chemical overpressure filtration testing" }
      ]
    },
    {
      id: 9,
      title: "9. Naval Systems Specific (NPOL & NSTL Driven)",
      shortName: "Naval Systems (NPOL/NSTL)",
      badge: "HAT / SAT / Underwater",
      img: "/stage-hotfire-analytics.png",
      items: [
        { name: "Harbor Acceptance Trials (HAT)", desc: "Moored vessel systems checkout in harbor environment" },
        { name: "Sea Acceptance Trials (SAT)", desc: "Open sea full power trials & combat system integration" },
        { name: "Underwater Signature Trials", desc: "Acoustic, magnetic, and pressure signature measurements" },
        { name: "Sonar Performance Trials", desc: "Active & passive sonar detection range & target tracking trials" }
      ]
    },
    {
      id: 10,
      title: "10. Software & Systems Integration (DO-178 / SIT / FAT / SAT)",
      shortName: "Software & Integration",
      badge: "DO-178 SQA / FAT / SAT",
      img: "/aerospace-ui.png",
      items: [
        { name: "Software Quality Assurance (SQA)", desc: "DO-178 adapted software airworthiness & safety standards" },
        { name: "System Integration Testing (SIT)", desc: "Multi-subsystem bus integration & protocol interoperability" },
        { name: "Factory Acceptance Test (FAT)", desc: "Vendor site factory acceptance milestone testing" },
        { name: "Site Acceptance Test (SAT)", desc: "On-site installation & operational handover testing" }
      ]
    },
    {
      id: 11,
      title: "11. Certification Bodies & Milestones (CEMILAC, DGAQA & BPC)",
      shortName: "CEMILAC & BPC Clearance",
      badge: "CEMILAC MTC / BPC",
      img: "/compliance-archival.png",
      items: [
        { name: "CEMILAC & DGAQA Airworthiness", desc: "Centre for Military Airworthiness & DGAQA Type Certificate & MTC release" },
        { name: "RCMA Audit Clearance", desc: "Regional Centre for Military Airworthiness design & build standard audits" },
        { name: "Bulk Production Clearance (BPC)", desc: "Final MoD clearance milestone for series production rollout" },
        { name: "Maintenance Evaluation Trials", desc: "Service depot level repair & field maintenance evaluation" }
      ]
    },
    {
      id: 12,
      title: "12. Trial Evaluation & MoD Acquisition Procurement Pipeline",
      shortName: "MoD Procurement Flow",
      badge: "AoN / RFP / FET / CNC / BPC",
      img: "/transient-capture.png",
      items: [
        { name: "Acceptance of Necessity (AoN)", desc: "MoD procurement approval milestone preceding field trials" },
        { name: "Technical Evaluation Committee (TEC)", desc: "Evaluating technical compliance against GSQR/ASR/NSQR" },
        { name: "Staff Evaluation & GSE", desc: "General Staff Evaluation (GSE) and Staff Evaluation Report (SER)" },
        { name: "RFP → FET → CNC → BPC Pipeline", desc: "Request for Proposal → Field Evaluation Trials → Contract Negotiation → Bulk Production" }
      ]
    }
  ]
};

export const energyFlowData = {
  title: "Power Generation & Electrical Equipment Testing & Validation Framework",
  subtitle: "Institutional testing and commissioning framework for thermal, hydro, renewable & substation power systems (NTPC, CEA, POWERGRID, BHEL, CPRI, ASME PTC & IEC 60953).",
  sections: [
    {
      id: 1,
      title: "1. Pre-Commissioning Testing (OEM Works - BHEL, GE, Siemens)",
      shortName: "OEM Pre-Commissioning",
      badge: "BHEL / GE / Siemens FAT",
      img: "/transient-capture.png",
      items: [
        { name: "Factory Acceptance Test (FAT)", desc: "Witnessed by NTPC/utility QA engineers at OEM works before dispatch" },
        { name: "Type Test (IS/IEC Standards)", desc: "One-time test on representative unit to validate design per IS/IEC standards" },
        { name: "Routine Test", desc: "Performed on every manufactured electrical & turbine unit prior to dispatch" },
        { name: "Special Contract Tests", desc: "Additional project-specific contractual qualification tests" }
      ]
    },
    {
      id: 2,
      title: "2. Boiler, Turbine & Generator Testing (Thermal Power Plants)",
      shortName: "Boiler, Turbine & Gen",
      badge: "Hydro / Rolling / OCC-SCC",
      img: "/hotfire-stand.png",
      subsections: [
        {
          category: "Boiler & Steam Piping",
          items: [
            { name: "Boiler Hydro Test", desc: "Pressure parts tested at 1.5x design pressure" },
            { name: "Steam Blowing & Chemical Cleaning", desc: "Cleans internal steam piping debris & acid cleans boiler tubes" },
            { name: "Safety Valve Floating & Light-up", desc: "Validates set pressure & firing trials (oil firing to coal firing)" }
          ]
        },
        {
          category: "Turbine & Generator",
          items: [
            { name: "Turbine Rolling & Overspeed Trip", desc: "Barring gear to rated RPM rolling, overspeed trip, & MSV/CV/IV valve stroke" },
            { name: "Generator OCC & SCC Tests", desc: "Open Circuit Characteristics (OCC) & Short Circuit Characteristics (SCC)" },
            { name: "IR, PI, HV & Flux Monitoring", desc: "Insulation Resistance, Polarization Index, HV test, & air gap flux" }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "3. Electrical Equipment Testing (Substation & Switchyard)",
      shortName: "Transformers & Switchgear",
      badge: "POWERGRID Substation",
      img: "/satellite-emc-chamber.png",
      subsections: [
        {
          category: "Power Transformers",
          items: [
            { name: "Turns Ratio & Winding Resistance", desc: "Transformer turns ratio and winding resistance measurement" },
            { name: "Tan Delta & Oil BDV Test", desc: "Insulation dissipation factor & oil breakdown voltage dielectric check" },
            { name: "Dissolved Gas Analysis (DGA)", desc: "Critical chromatographic analysis for detecting internal transformer faults" }
          ]
        },
        {
          category: "Breakers, CT/PT & HV Cables",
          items: [
            { name: "CB Contact & SF6 Leakage", desc: "Contact resistance, opening/closing timing, & SF6 gas leakage monitoring" },
            { name: "CT/PT Ratio & Polarity", desc: "Ratio, polarity, magnetization curve, & burden verification" },
            { name: "HV Cable VLF & Fault Location", desc: "Very Low Frequency withstand & cable fault locator testing" }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "4. Protection System Testing (Relays & Interlocks)",
      shortName: "Protection Relays",
      badge: "Secondary Injection / Interlock",
      img: "/stage-hardware-binding.png",
      items: [
        { name: "Secondary & Primary Injection", desc: "Secondary injection testing of protection relays & primary current injection" },
        { name: "CT/PT Ratio & Polarity Checks", desc: "Protection core CT/PT ratio and phase polarity verification" },
        { name: "Protection Scheme Testing", desc: "Differential, distance, & over-current protection scheme testing" },
        { name: "Interlock & Trip Check", desc: "Functional trip checks, trip circuit supervision, & safety interlocks" }
      ]
    },
    {
      id: 5,
      title: "5. Control & Instrumentation (C&I) Testing (DCS & SCADA)",
      shortName: "C&I DCS / SCADA",
      badge: "DCS Loop Checking",
      img: "/aerospace-ui.png",
      items: [
        { name: "Field-to-DCS Loop Checking", desc: "Validates signal path from field transmitter to DCS/SCADA" },
        { name: "Hot & Cold Loop Checks", desc: "Cold loop wiring check & hot loop powered signal verification" },
        { name: "Interlock & Permissive Logic", desc: "DCS/SCADA safety permissive and trip interlock logic testing" },
        { name: "Alarm Annunciation Testing", desc: "DCS alarm annunciation, sequence of events (SOE) log validation" }
      ]
    },
    {
      id: 6,
      title: "6. Auxiliary Systems Testing (CHP, AHP, DM & DG Sets)",
      shortName: "Plant Auxiliaries",
      badge: "CHP / AHP / DM / Fire",
      img: "/airgapped-nvme.png",
      items: [
        { name: "Coal & Ash Handling Plants (CHP/AHP)", desc: "Coal handling conveyor trial run & ash handling system checkout" },
        { name: "Cooling Tower & Water DM Plant", desc: "Cooling tower thermal performance & Demineralized (DM) water plant test" },
        { name: "Fire Fighting & Deluge Valve", desc: "Fire hydrant, sprinkler, & deluge valve automated tripping test" },
        { name: "Emergency DG Set Trial Run", desc: "Emergency Diesel Generator auto-synchronization & full load trial run" }
      ]
    },
    {
      id: 7,
      title: "7. Performance Guarantee (PG) Tests (ASME PTC / IEC 60953)",
      shortName: "PG Tests (ASME PTC)",
      badge: "ASME PTC / IEC 60953",
      img: "/stage-realtime-ingest.png",
      items: [
        { name: "PG Test Execution", desc: "Validates contracted performance (heat rate, output, efficiency) per ASME PTC / IEC 60953" },
        { name: "Heat Rate & Efficiency Test", desc: "Turbine-generator heat rate & boiler thermal efficiency testing" },
        { name: "CPCB / MoEF Emission Testing", desc: "Flue gas stack emission testing as per CPCB norms (SOx, NOx, PM)" },
        { name: "Auxiliary Power Consumption", desc: "Plant auxiliary power consumption verification during full load" }
      ]
    },
    {
      id: 8,
      title: "8. Commissioning Milestones (Boiler Light-up to COD)",
      shortName: "Commissioning & COD",
      badge: "CEA 72-Hr Trial / COD",
      img: "/timestamp-sync.png",
      items: [
        { name: "Boiler Light-up & Steam Blowing", desc: "Initial oil light-up, steam blowing clearance, & coal firing" },
        { name: "Turbine Rolling & Grid Synchronization", desc: "Turbine rolling to 3000 RPM & first-time grid synchronization" },
        { name: "Full Load Achievement", desc: "Ramping unit to rated MWe full load capacity" },
        { name: "72-Hour Trial Operation & COD", desc: "CEA mandated 72-hour continuous full-load run before COD declaration" }
      ]
    },
    {
      id: 9,
      title: "9. Renewable Energy Testing (NTPC Solar PV & Wind Fleet)",
      shortName: "Solar & Wind RE",
      badge: "NTPC RE / Grid LVRT",
      img: "/stage-hotfire-analytics.png",
      items: [
        { name: "Solar Module Flash & IV Curve", desc: "PV module flash testing, IV curve tracing, & array IR insulation test" },
        { name: "Inverter Efficiency & THD", desc: "Central inverter efficiency, Total Harmonic Distortion, & PR validation" },
        { name: "Wind Turbine Power Curve", desc: "Wind turbine power curve verification, yaw & pitch system testing" },
        { name: "Grid Code LVRT Compliance", desc: "Low Voltage Ride Through (LVRT) & reactive power grid compliance" }
      ]
    },
    {
      id: 10,
      title: "10. Grid Compliance & Regulatory Standards (CEA, CERC & IEGC)",
      shortName: "CEA & IEGC Compliance",
      badge: "CEA / CERC / IEGC",
      img: "/compliance-archival.png",
      items: [
        { name: "CEA Technical Standards", desc: "Central Electricity Authority technical standards compliance audit" },
        { name: "CERC / SERC Grid Code", desc: "Central & State Electricity Regulatory Commission grid code compliance" },
        { name: "IEGC Grid Synchronization", desc: "Indian Electricity Grid Code frequency & voltage response compliance" },
        { name: "PPA Performance Validation", desc: "Power Purchase Agreement capacity & availability validation" }
      ]
    },
    {
      id: 11,
      title: "11. Periodic & In-Service Condition Monitoring (O&M Phase)",
      shortName: "Condition Monitoring",
      badge: "Vibration / DGA / Overhaul",
      img: "/transient-capture.png",
      items: [
        { name: "Vibration & Thermography Monitoring", desc: "Turbine bearing vibration spectrum & IR thermal imaging" },
        { name: "Predictive Oil & DGA Trending", desc: "Transformer oil DGA gas trending & lube oil contamination analysis" },
        { name: "Annual & Capital Overhaul (C.O.)", desc: "Capital Overhaul, Light Overhaul, & Minor Overhaul post-test checks" },
        { name: "CEA Statutory Safety Audits", desc: "CEA Measures Relating to Safety and Electric Supply Regulations testing" }
      ]
    },
    {
      id: 12,
      title: "12. Certification & Testing Bodies (CPRI, NABL, BIS & CEA)",
      shortName: "CPRI & NABL Certification",
      badge: "CPRI / NABL / BIS",
      img: "/stage-hardware-binding.png",
      items: [
        { name: "CPRI Apex Certification", desc: "Central Power Research Institute short-circuit & impulse certification" },
        { name: "NABL Accredited Testing", desc: "National Accreditation Board for Testing and Calibration Laboratories" },
        { name: "BIS Product Standards", desc: "Bureau of Indian Standards product qualification compliance" },
        { name: "CEA Technical Approval", desc: "CEA final approval for electrical equipment installation & energization" }
      ]
    }
  ]
};

export const automotiveFlowData = {
  title: "Automotive Vehicle & Powertrain Testing & Validation Framework",
  subtitle: "End-to-end testing and homologation framework for ICE & EV vehicles (ARAI, ICAT, NATRAX, GARC, AIS-096, BS6/Euro 6, BNVSAP, DVP&R & OEM PPAP).",
  sections: [
    {
      id: 1,
      title: "1. Design Validation & Development Testing (DVP&R, DFMEA & CAE)",
      shortName: "DVP&R & Design Validation",
      badge: "DVP&R / DFMEA / CAE",
      img: "/transient-capture.png",
      items: [
        { name: "DVP&R (Design Verification Plan & Report)", desc: "Master test matrix mapping requirement specs to validation tests" },
        { name: "DV & PV Testing", desc: "Design Validation (DV) & Process Validation (PV) testing for production intent" },
        { name: "DFMEA & PFMEA Analysis", desc: "Design & Process Failure Mode and Effects Analysis prior to physical builds" },
        { name: "CAE Simulation Correlation", desc: "Correlating FEA stress & CFD thermal simulations against physical test rig data" }
      ]
    },
    {
      id: 2,
      title: "2. Powertrain & Engine Testing (BS6 RDE & Climatic Dyno)",
      shortName: "Powertrain & BS6 Dyno",
      badge: "BS6 RDE / Dyno / Leh-Desert",
      img: "/hotfire-stand.png",
      subsections: [
        {
          category: "Dyno & Endurance",
          items: [
            { name: "Engine Dynamometer Mapping", desc: "Power, torque, & BSFC efficiency mapping on engine dyno" },
            { name: "Durability 500-Hour Endurance Run", desc: "Accelerated thermal & mechanical lifecycle stress testing" },
            { name: "NVH & Combustion Analysis", desc: "In-cylinder pressure & acoustic vibration measurement" }
          ]
        },
        {
          category: "Climatic & RDE Emissions",
          items: [
            { name: "Cold Start & Rajasthan Desert Hot Trials", desc: "Sub-zero climatic chamber cold start & extreme heat ambient trials" },
            { name: "High-Altitude Leh/Manali Trials", desc: "Turbocharger & engine power derating tests at high elevation" },
            { name: "BS6 / Euro 6 RDE PEMS Testing", desc: "On-road Real Driving Emissions (RDE) with Portable Emissions Measurement System" }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "3. Transmission & Driveline Testing",
      shortName: "Transmission & Driveline",
      badge: "Shift Quality / CV Joint",
      img: "/stage-hardware-binding.png",
      items: [
        { name: "Transmission Dyno & Shift Quality", desc: "Automated manual & automatic shift quality & efficiency testing" },
        { name: "Clutch & Propeller Shaft Durability", desc: "Clutch actuation fatigue & CV joint torsional durability" },
        { name: "Differential & Axle Testing", desc: "Rear axle & differential gear endurance under extreme torque loads" }
      ]
    },
    {
      id: 4,
      title: "4. Vehicle-Level Performance & ARAI/ICAT Homologation",
      shortName: "ARAI Homologation",
      badge: "CMVR / Type Approval",
      img: "/timestamp-sync.png",
      items: [
        { name: "CMVR Mandatory Homologation", desc: "Central Motor Vehicle Rules certification at ARAI, ICAT, or GARC" },
        { name: "Type Approval Testing", desc: "Full vehicle Type Approval clearance for mass production" },
        { name: "Acceleration, Top Speed & Gradeability", desc: "0-100 kmph speed trials, top speed, & 30% steep hill gradeability" },
        { name: "AIS Braking Performance", desc: "Automotive Industry Standard (AIS) braking distance & ABS anti-lock validation" }
      ]
    },
    {
      id: 5,
      title: "5. Durability, Proving Ground & Shaker Rig Testing (NATRAX)",
      shortName: "Proving Ground & Shaker",
      badge: "NATRAX / 4-Post Shaker",
      img: "/satellite-emc-chamber.png",
      items: [
        { name: "NATRAX Proving Ground Track", desc: "High-speed track & durability trials at NATRAX Indore / OEM tracks" },
        { name: "Belgian Block & Pavé Testing", desc: "Accelerated rough road cobble pave durability testing" },
        { name: "160,000 km Equivalent Endurance", desc: "Compressed Accelerated Life Testing (ALT) simulating full vehicle lifecycle" },
        { name: "4-Post / 6-Post Shaker Rig", desc: "Replicating real-world road profile strain loads on multi-axis shaker rigs" }
      ]
    },
    {
      id: 6,
      title: "6. Structural & Crash Safety Testing (AIS-096 & BNVSAP NCAP)",
      shortName: "Crash & NCAP Safety",
      badge: "AIS-096 / Bharat NCAP",
      img: "/airgapped-nvme.png",
      items: [
        { name: "Frontal & Offset Crash (AIS-096)", desc: "Frontal impact & Offset Deformable Barrier (ODB) crash validation" },
        { name: "Side & Pole Impact Testing", desc: "Side barrier & rigid pole side crash testing for occupant safety" },
        { name: "Bharat NCAP (BNVSAP) Star Rating", desc: "India safety rating crash protocol assessment" },
        { name: "Pedestrian & Roof Crush Tests", desc: "Pedestrian legform impact, roof crush strength, & door intrusion checks" }
      ]
    },
    {
      id: 7,
      title: "7. Structural & Component Durability Testing",
      shortName: "Component Fatigue",
      badge: "Chassis Fatigue / ISO",
      img: "/stage-realtime-ingest.png",
      items: [
        { name: "Chassis & Suspension Fatigue", desc: "Multi-axis servo-hydraulic fatigue testing on suspension arms & chassis" },
        { name: "Torsional Rigidity Testing", desc: "Airframe & body-in-white (BIW) static & dynamic torsional stiffness" },
        { name: "Salt Spray & Corrosion Testing", desc: "Neutral salt spray (NSS) chamber testing for body panel rust resistance" },
        { name: "Stone Chip & Shock Resistance", desc: "Gravelometer stone chip resistance & shock load validation" }
      ]
    },
    {
      id: 8,
      title: "8. Environmental & Climatic Chamber Testing",
      shortName: "Environmental & IP",
      badge: "Climatic / IP67 / IP68",
      img: "/hotfire-stand.png",
      items: [
        { name: "Climatic Thermal Cycling", desc: "Hot/cold/humidity chamber cycling (-40°C to +85°C)" },
        { name: "Solar Load Thermal Soak", desc: "Full-vehicle sun load simulation chamber testing" },
        { name: "Dust Ingress & Water Wading", desc: "Deep water wading/fording & fine dust chamber ingress checks" },
        { name: "IP67 / IP68 Enclosure Rating", desc: "Ingress Protection rating validation for EV battery packs & electronics" }
      ]
    },
    {
      id: 9,
      title: "9. EMI/EMC & Electronics HIL Testing (AIS-004 & CAN Bus)",
      shortName: "EMI/EMC & ECU HIL",
      badge: "AIS-004 / CAN / SIL-HIL",
      img: "/aerospace-ui.png",
      items: [
        { name: "AIS-004 / CISPR EMI/EMC Testing", desc: "Radiated & conducted immunity/emissions in anechoic chamber" },
        { name: "CAN Bus & Network Testing", desc: "CAN, LIN, & Ethernet network latency, jitter, & fault injection" },
        { name: "ECU HIL (Hardware-in-Loop)", desc: "Real-time ECU validation on dSPACE / NI HIL simulator test benches" },
        { name: "MIL / SIL / HIL Software Stack", desc: "Model-in-Loop, Software-in-Loop, & HIL software airworthiness validation" }
      ]
    },
    {
      id: 10,
      title: "10. EV-Specific Testing (Battery Pack, BMS & Fast Charge)",
      shortName: "EV Battery & Motor",
      badge: "Battery Thermal / CCS / BMS",
      img: "/stage-hotfire-analytics.png",
      subsections: [
        {
          category: "Battery & Safety",
          items: [
            { name: "Thermal Runaway & Nail Penetration", desc: "Cell propagation, thermal runaway, & mechanical nail penetration safety" },
            { name: "Battery Overcharge & Crush Test", desc: "Electrical abuse overcharge/discharge & mechanical crush load testing" },
            { name: "BMS Algorithm Validation", desc: "State of Charge (SOC), State of Health (SOH), & passive balancing" }
          ]
        },
        {
          category: "Motor, Inverter & Charging",
          items: [
            { name: "Motor Efficiency & Thermal Mapping", desc: "Electric traction motor efficiency map & inverter thermal dissipation" },
            { name: "CCS / CHAdeMO Fast Charging", desc: "High-power DC fast charging protocol & thermal management check" },
            { name: "ARAI EV Certified Range Cycle", desc: "Official ARAI electric vehicle range certification test cycle" }
          ]
        }
      ]
    },
    {
      id: 11,
      title: "11. NVH & Ride Comfort Testing (Semi-Anechoic Chamber)",
      shortName: "NVH & Ride Comfort",
      badge: "Semi-Anechoic / Modal",
      img: "/satellite-emc-chamber.png",
      items: [
        { name: "Semi-Anechoic Acoustic Testing", desc: "Powertrain & interior cabin noise isolation in acoustic chamber" },
        { name: "Modal Analysis & Frequency Response", desc: "Identifying body panel & structural natural resonance frequencies" },
        { name: "Objective Ride & Handling", desc: "Accelerometer & gyro based vehicle roll/pitch/yaw dynamics evaluation" },
        { name: "Squeak & Rattle (S&R) Testing", desc: "Climate-controlled shaker testing to eliminate interior trim squeaks" }
      ]
    },
    {
      id: 12,
      title: "12. Interior, Comfort & Ergonomics Testing",
      shortName: "Interior & HVAC",
      badge: "HVAC / Airbag / Ergonomics",
      img: "/airgapped-nvme.png",
      items: [
        { name: "HVAC Thermal Comfort Testing", desc: "Cabin pull-down cooling & heating performance in solar chamber" },
        { name: "Seat Durability & Ergonomics", desc: "H-point seating ergonomics & H-point durability fatigue testing" },
        { name: "Infotainment & Cockpit HMI", desc: "Digital cluster, touchscreen responsiveness, & BLE/WiFi validation" },
        { name: "Airbag Deployment Testing", desc: "Cold/hot temperature deployment testing of SRS airbag modules" }
      ]
    },
    {
      id: 13,
      title: "13. Certification & Regulatory Bodies (ARAI, ICAT, NATRAX & GARC)",
      shortName: "ARAI / ICAT / NATRAX",
      badge: "ARAI / ICAT / GARC / VRDE",
      img: "/compliance-archival.png",
      items: [
        { name: "ARAI Pune Homologation", desc: "Automotive Research Association of India primary certification body" },
        { name: "ICAT Manesar Certification", desc: "International Centre for Automotive Technology homologation" },
        { name: "GARC Chennai & CIRT Pune", desc: "Global Automotive Research Centre & Central Institute Road Transport" },
        { name: "NATRAX & VRDE DRDO Track", desc: "NATRAX high-speed track & Vehicle Research Development Establishment" }
      ]
    },
    {
      id: 14,
      title: "14. Pre-Production & Launch Validation (PPAP, SOP & Fleet Trials)",
      shortName: "PPAP & Launch Readiness",
      badge: "PPAP / SOP / Fleet",
      img: "/stage-hardware-binding.png",
      items: [
        { name: "PPAP Component Sign-Off", desc: "Production Part Approval Process Level 1-5 supplier component clearance" },
        { name: "Pilot Production Run", desc: "Validating assembly line tooling, jigs, & takt time on pilot batch" },
        { name: "SOP Readiness Audit", desc: "Start of Production (SOP) quality gate readiness audit" },
        { name: "Fleet Validation & Field Trials", desc: "Customer correlation fleet trials across real-world Indian road conditions" }
      ]
    }
  ]
};

export const roboticsFlowData = {
  title: "Robotics & Autonomous Systems Testing & Validation Framework",
  subtitle: "End-to-end testing and qualification framework for industrial arms, AMRs/AGVs, humanoids & fleet operations (Boston Dynamics, ABB, KUKA, Fanuc, Amazon Robotics, ISO 10218, ISO/TS 15066 & ISO 13849).",
  sections: [
    {
      id: 1,
      title: "1. Design Validation Testing (EVT, DVT, PVT & DFMEA)",
      shortName: "EVT / DVT / PVT",
      badge: "DVT / DFMEA / PVT",
      img: "/transient-capture.png",
      items: [
        { name: "EVT (Engineering Validation Test)", desc: "Early prototype functional hardware & actuator proof of concept" },
        { name: "DVT (Design Verification Test)", desc: "Mid-stage pre-production hardware & sensor integration validation" },
        { name: "PVT (Production Validation Test)", desc: "Final validation on production-line representative units" },
        { name: "DFMEA & PFMEA Subsystems", desc: "Failure mode analysis for actuators, joints, power, & perception" }
      ]
    },
    {
      id: 2,
      title: "2. Mechanical & Structural Testing (ISO 9283 Performance Criteria)",
      shortName: "Mechanical & ISO 9283",
      badge: "ISO 9283 / Stiffness",
      img: "/hotfire-stand.png",
      items: [
        { name: "ISO 9283 Repeatability & Accuracy", desc: "Pose positioning accuracy, pose repeatability, & trajectory path error" },
        { name: "Payload Capacity Validation", desc: "Rated payload vs maximum payload static & dynamic deflection" },
        { name: "Static & Dynamic Stiffness", desc: "Structural arm deflection under high-speed joint deceleration" },
        { name: "Backlash & Duty Cycle Testing", desc: "Harmonic drive gearbox backlash measurement & 24/7 continuous duty cycle" }
      ]
    },
    {
      id: 3,
      title: "3. Actuator & Drive System Testing (Joint Dyno & Thermal)",
      shortName: "Actuator & Joint Dyno",
      badge: "Dyno / ROM / Encoder",
      img: "/stage-hardware-binding.png",
      items: [
        { name: "Actuator Dyno & Torque-Speed Curve", desc: "Motor dyno efficiency mapping, continuous & peak torque limits" },
        { name: "Joint Range of Motion (ROM)", desc: "Multi-axis joint hard-stop limits & high-resolution encoder accuracy" },
        { name: "Gearbox Backlash & Efficiency", desc: "Cycloidal & planetary gearbox power transmission efficiency" },
        { name: "Thermal Derating Test", desc: "Actuator thermal throttling & heat dissipation under sustained torque" }
      ]
    },
    {
      id: 4,
      title: "4. Power System Testing (AMR Batteries & Auto-Docking)",
      shortName: "Power & Auto-Docking",
      badge: "AMR Battery / Auto-Dock",
      img: "/timestamp-sync.png",
      items: [
        { name: "Battery Pack Cycle Life & C-Rate", desc: "Charge/discharge rate mapping, cell balancing, & cycle endurance" },
        { name: "Thermal Runaway & Safety", desc: "Cell propagation prevention, thermal abuse, & BMS fault validation" },
        { name: "Auto-Docking & Charging Alignment", desc: "IR/laser guided charging dock alignment & auto-contact charging" },
        { name: "Failover Power & UPS Backup", desc: "Uninterruptible power supply (UPS) failover during main power loss" }
      ]
    },
    {
      id: 5,
      title: "5. Sensor & Perception Testing (LiDAR, SLAM & Vision)",
      shortName: "Sensors & Perception",
      badge: "LiDAR / SLAM / Mocap",
      img: "/satellite-emc-chamber.png",
      items: [
        { name: "Sensor Calibration & Fusion", desc: "Extrinsic/intrinsic calibration for 3D LiDAR, stereo cameras, IMU, & F/T sensors" },
        { name: "SLAM & Localization Accuracy", desc: "Simultaneous Localization and Mapping vs optoelectronic motion capture ground truth" },
        { name: "Dynamic Obstacle Avoidance", desc: "3D point cloud obstacle detection, safety bubble clearance, & path re-routing" },
        { name: "Vision Classification AI Accuracy", desc: "Object recognition, pose estimation, & environmental lighting robustness" }
      ]
    },
    {
      id: 6,
      title: "6. Control System & Digital Twin Software Testing (MIL, SIL, HIL & Isaac Sim)",
      shortName: "Control SIL/HIL & Sim",
      badge: "MIL / SIL / HIL / Isaac Sim",
      img: "/aerospace-ui.png",
      items: [
        { name: "MIL, SIL & HIL Testing", desc: "Model-in-Loop, Software-in-Loop, & real-time Hardware-in-Loop controller test bench" },
        { name: "PID / MPC Control Loop Tuning", desc: "Trajectory tracking, Model Predictive Control (MPC), & torque loop latency" },
        { name: "Digital Twin Simulation (Isaac Sim / Gazebo)", desc: "Physics-based synthetic environment validation prior to physical hardware testing" },
        { name: "OTA Firmware Regression", desc: "Over-the-air software release unit testing & continuous integration regression" }
      ]
    },
    {
      id: 7,
      title: "7. Functional & Cobot Safety Testing (ISO 13849 & ISO/TS 15066)",
      shortName: "Safety & ISO 13849",
      badge: "ISO 13849 / ISO/TS 15066",
      img: "/airgapped-nvme.png",
      items: [
        { name: "ISO 13849 & IEC 62061 Functional Safety", desc: "Performance Level (PL d/e) & SIL 3 safety control circuit validation" },
        { name: "ISO/TS 15066 Power & Force Limiting (PFL)", desc: "Collaborative robot force/pressure bio-fidelic impact testing for human contact" },
        { name: "E-Stop & Speed Separation Monitoring", desc: "Hardware emergency stop button, safety scanner light curtains, & zone slowdowns" },
        { name: "Fail-Safe State on Comm/Power Loss", desc: "Validates predictable safe brake engagement on power drop or loss of signal" }
      ]
    },
    {
      id: 8,
      title: "8. Environmental & Ingress Testing (IEC 60529 IP Rating)",
      shortName: "Environmental & IP",
      badge: "IEC 60529 IP65/IP67",
      img: "/hotfire-stand.png",
      items: [
        { name: "IEC 60529 IP Rating Testing", desc: "IP65/IP67 dust-tight & high-pressure water jet ingress testing" },
        { name: "Climatic Thermal Chamber Cycling", desc: "Extreme operational temperature validation (-40°C cold start to +85°C heat)" },
        { name: "Transport Shock & Vibration", desc: "ISTA/ASTM transportation shock, drop, & transit vibration tests" },
        { name: "Outdoor UV & Terrain Traversal", desc: "Outdoor UV exposure, rain, mud, & rough terrain traversal testing" }
      ]
    },
    {
      id: 9,
      title: "9. Mobility & Navigation Testing (AMRs & AGVs)",
      shortName: "AMR Mobility & Nav",
      badge: "AMR Nav / Incline / Stability",
      img: "/stage-realtime-ingest.png",
      items: [
        { name: "Navigation Accuracy & Path Planning", desc: "Sub-centimeter AMR stopping accuracy & dynamic path generation" },
        { name: "Slope & Incline Traversal", desc: "Full-payload ramp climbing, slope holding brake, & downhill descent control" },
        { name: "Tipping Margin & Stability", desc: "Dynamic cornering stability, sudden stop tipping margin, & payload CG shift" },
        { name: "Multi-AMR Traffic Management", desc: "Intersection deadlock avoidance & inter-robot passage coordination" }
      ]
    },
    {
      id: 10,
      title: "10. Manipulation & Gripper Testing (Robot Arms & Humanoids)",
      shortName: "Manipulation & Gripper",
      badge: "Grasp Success / End-Effector",
      img: "/stage-hardware-binding.png",
      items: [
        { name: "Grasping Success Rate", desc: "High-speed pick-and-place success rate across varied object shapes/materials" },
        { name: "Force / Torque Impedance Control", desc: "Compliance control for delicate assembly & peg-in-hole insertion" },
        { name: "End-Effector Durability & Tool Change", desc: "Multi-million cycle pneumatic/electric gripper fatigue & auto tool changer" },
        { name: "Dexterous Hand Manipulation", desc: "Multi-fingered tactile sensor feedback & dexterous finger manipulation benchmarks" }
      ]
    },
    {
      id: 11,
      title: "11. Reliability, HALT / HASS & Endurance Testing",
      shortName: "Reliability & HALT/HASS",
      badge: "MTBF / HALT / 24/7 Soak",
      img: "/transient-capture.png",
      items: [
        { name: "MTBF & MTTR Validation", desc: "Demonstrated Mean Time Between Failures & Mean Time To Repair audit" },
        { name: "HALT & HASS Stress Testing", desc: "Highly Accelerated Life Testing beyond limits to uncover design flaws" },
        { name: "24/7 Continuous Soak Testing", desc: "Multi-week non-stop full duty cycle operation under maximum payload" },
        { name: "Production Burn-In Screening", desc: "Automated production-line burn-in screening to catch infant mortality" }
      ]
    },
    {
      id: 12,
      title: "12. Field Testing, PoC & Pilot Deployment",
      shortName: "Field Trials & PoC",
      badge: "PoC / Pilot / UAT / A-B",
      img: "/stage-hotfire-analytics.png",
      items: [
        { name: "Proof of Concept (PoC) Validation", desc: "Customer facility PoC demonstration under simulated operational flow" },
        { name: "Pilot Facility Deployment", desc: "Limited-scale warehouse or factory floor pilot deployment trials" },
        { name: "User Acceptance Testing (UAT)", desc: "Operator workflow, teach pendant HMI, & field operator sign-off" },
        { name: "Algorithmic A/B Testing", desc: "On-robot live A/B benchmarking for motion planning & perception releases" }
      ]
    },
    {
      id: 13,
      title: "13. Fleet Management System (FMS) & Fleet-Level Orchestration",
      shortName: "Fleet Orchestration & FMS",
      badge: "1000+ Robot Fleet FMS",
      img: "/satellite-emc-chamber.png",
      subsections: [
        {
          category: "Multi-Robot Orchestration",
          items: [
            { name: "FMS Task Allocation & Dispatch", desc: "Centralized fleet management system task dispatch & load balancing" },
            { name: "Deadlock Avoidance & Traffic Flow", desc: "High-density multi-robot warehouse corridor deadlock prevention" },
            { name: "Ad-Hoc Mesh RF Network Telemetry", desc: "Inter-robot peer-to-peer telemetry over Wi-Fi 6 & 5G private subnets" }
          ]
        },
        {
          category: "OTA Updates & Predictive Health",
          items: [
            { name: "Zero-Downtime Fleet OTA Updates", desc: "Over-the-air rolling fleet updates without stopping factory operations" },
            { name: "Predictive Health & Thermal Analytics", desc: "Joint vibration spectrum & motor temperature monitoring for SLA uptime" },
            { name: "Geofence Enforcement & Black Box", desc: "Safety boundary geofencing & encrypted high-frequency crash black-box log" }
          ]
        }
      ]
    },
    {
      id: 14,
      title: "14. Cybersecurity & Data Encryption Testing",
      shortName: "Cybersecurity & Encrypt",
      badge: "Pen-Test / TLS / TPM 2.0",
      img: "/airgapped-nvme.png",
      items: [
        { name: "Penetration Testing & Port Audit", desc: "Network penetration testing on ROS 2 DDS nodes & robot control web APIs" },
        { name: "Encrypted Telemetry & TPM 2.0", desc: "Hardware TPM-backed boot verification & AES-256 encrypted storage" },
        { name: "Role-Based Access Control (RBAC)", desc: "Secure operator authentication & cryptographic OTA update signing" }
      ]
    },
    {
      id: 15,
      title: "15. Standards & Regulatory Certification Bodies (ISO 10218, CE, UL & RIA)",
      shortName: "ISO 10218 & CE / UL",
      badge: "ISO 10218 / CE / UL / RIA",
      img: "/compliance-archival.png",
      items: [
        { name: "ISO 10218 Industrial Robot Safety", desc: "Safety requirements for industrial robot arm manipulators (Part 1 & 2)" },
        { name: "ISO 13482 Personal Care Safety", desc: "Safety standards for mobile servicing & personal care robots" },
        { name: "CE Marking & UL Certification", desc: "European Conformity & North American UL 3100 AMR electrical safety" },
        { name: "ANSI / RIA R15.06 Compliance", desc: "Robotic Industries Association standard compliance documentation" }
      ]
    },
    {
      id: 16,
      title: "16. Human-Robot Interaction (HRI) & Teach Pendant Testing",
      shortName: "HRI & Teach Pendant",
      badge: "HRI / Ergonomics / HMI",
      img: "/stage-hardware-binding.png",
      items: [
        { name: "Teach Pendant & HMI Usability", desc: "Handheld teach pendant UI responsiveness, jog control, & safety key switch" },
        { name: "Voice & Gesture Command Recognition", desc: "Voice recognition NLP & 3D gesture control accuracy in noisy factories" },
        { name: "Wearable & Exoskeleton Ergonomics", desc: "Human load reduction & joint alignment testing for assistive exoskeletons" }
      ]
    }
  ]
};

export const testingFlowData = {
  title: "Gas Turbine Engine Testing & Qualification Framework (GTRE / DRDO)",
  subtitle: "End-to-end testing and qualification framework for Kaveri, Kaveri Dry, and GTX-35VS engines — from component rigs and ATF high-altitude vacuum simulation to FADEC HIL and IL-76 Flying Test Bed (FTB) trials.",
  sections: [
    {
      id: 1,
      title: "1. Component-Level Rig Testing (Compressor, Combustor, Turbine & Fan)",
      shortName: "Component Rig Testing",
      badge: "Compressor / Combustor / Rig",
      img: "/transient-capture.png",
      items: [
        { name: "Compressor Rig Testing", desc: "Validates pressure ratio, surge margin, & aerodynamic stall characteristics" },
        { name: "Combustor Rig Testing", desc: "Combustion efficiency, pattern factor, ignition, & emission characteristics" },
        { name: "Turbine Rig Testing", desc: "Blade cooling effectiveness, thermal barrier coating, & aero-thermal performance" },
        { name: "Fan Rig & Bearing Lubrication", desc: "Turbofan stage pressure ratio & high-speed bearing oil cooling/lubrication rig" }
      ]
    },
    {
      id: 2,
      title: "2. Core Engine Testing (Gas Generator & Development Runs)",
      shortName: "Core Engine & Gas Generator",
      badge: "Gas Generator / Core Engine",
      img: "/hotfire-stand.png",
      items: [
        { name: "Gas Generator (GG) Standalone Testing", desc: "Core engine (compressor + combustor + HP turbine) standalone validation before full engine build" },
        { name: "Core Engine Development Testing", desc: "Thermodynamic cycle match, spool speed balance, & turbine inlet temperature (TIT) limits" },
        { name: "HP Spool Dynamics & Seals", desc: "High-pressure spool vibration, seal leakage, & thermal expansion monitoring" }
      ]
    },
    {
      id: 3,
      title: "3. Full Engine Ground Testing (ATF Bangalore, Static Thrust & PFRT)",
      shortName: "Full Engine ATF & PFRT",
      badge: "ATF / PFRT / 150-Hr Test",
      img: "/stage-hotfire-analytics.png",
      subsections: [
        {
          category: "Altitude Test Facility (ATF)",
          items: [
            { name: "GTRE Altitude Test Facility (ATF)", desc: "Simulates high-altitude low pressure & sub-zero ambient temperature vacuum conditions at GTRE Bangalore" },
            { name: "Sea-Level Static (SLS) Testing", desc: "Unconditioned sea-level static baseline thrust, dry/afterburner SFC measurement" },
            { name: "Accelerated Mission Testing (AMT)", desc: "Endurance running simulating full flight-hour lifecycles in compressed ground time" }
          ]
        },
        {
          category: "Flight Qualification & PFRT",
          items: [
            { name: "150-Hour Type Test / PFRT", desc: "Preliminary Flight Rating Test 150-hour endurance qualification" },
            { name: "Flight Rating Test (FRT)", desc: "Final ground qualification clearance for flight test integration" }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "4. Environmental & Operability Testing (FOD, Icing & Windmill Relight)",
      shortName: "Environmental & Operability",
      badge: "FOD / Icing / Relight",
      img: "/satellite-emc-chamber.png",
      items: [
        { name: "Ice & Bird Ingestion (FOD)", desc: "Foreign Object Damage (FOD), bird strike, & ice slab ingestion structural survivability" },
        { name: "Crosswind & Icing Chamber", desc: "Crosswind distortion sensitivity & inlet cowl icing accretion testing" },
        { name: "Windmill & Altitude Relight", desc: "Windmill relight envelope & high-altitude combustor relight capability" },
        { name: "Surge & Stall Margin Testing", desc: "Transient throttle slam surge/stall margin map & nozzle area actuation" }
      ]
    },
    {
      id: 5,
      title: "5. Structural & Vibration Testing (LCF, HCF & Blade-Off Containment)",
      shortName: "Structural & Containment",
      badge: "LCF / HCF / Blade-Off",
      img: "/stage-hardware-binding.png",
      items: [
        { name: "Engine Vibration Survey & Campbell Diagram", desc: "Rotor dynamics, vibration spectrum FFT analysis, & Campbell diagram resonance mapping" },
        { name: "LCF & HCF Fatigue Testing", desc: "Low Cycle Fatigue (LCF) & High Cycle Fatigue (HCF) on turbine discs and single-crystal blades" },
        { name: "Overspeed & Rotor Burst Containment", desc: "Rotor integrity burst margin & high-energy disc overspeed test" },
        { name: "Blade-Off Containment Test", desc: "Full-speed fan/compressor blade release casing penetration containment test" }
      ]
    },
    {
      id: 6,
      title: "6. Control System & FADEC HIL Validation (FADEC & EHMS)",
      shortName: "FADEC HIL & Health EHMS",
      badge: "FADEC HIL / EHMS",
      img: "/aerospace-ui.png",
      items: [
        { name: "FADEC Hardware-in-the-Loop (HIL)", desc: "Full Authority Digital Engine Control dual-redundant channel HIL simulator bench" },
        { name: "Engine Health Monitoring System (EHMS)", desc: "Real-time engine diagnostic telemetry, vibration FFT, & oil debris chip detection" },
        { name: "Control Law & Fuel Metering Valve", desc: "Transient fuel flow rate control, variable inlet guide vane (VIGV), & nozzle logic" }
      ]
    },
    {
      id: 7,
      title: "7. Flight Testing Integration (IL-76 FTB & Engine Ground Run)",
      shortName: "IL-76 FTB & Aircraft Integration",
      badge: "IL-76 FTB / Gromov / EGR",
      img: "/airgapped-nvme.png",
      items: [
        { name: "Flying Test Bed (FTB) Trials", desc: "Kaveri engine flight testing on IL-76 FTB at Gromov Flight Research Institute (GFRI) Russia" },
        { name: "Aircraft Engine Ground Run (EGR)", desc: "On-aircraft engine ground runs, bay ventilation, & throttle response before first flight" },
        { name: "Telemetry & Flight Clearance Sign-Off", desc: "Real-time flight test telemetry parsing, envelope expansion, & CEMILAC flight sign-off" }
      ]
    }
  ]
};

solutionsData.testing = {
  id: "testing",
  title: "Gas Turbine Engine Testing (GTRE / DRDO)",
  tagline: "High-frequency transient DAQ for GTRE Kaveri & GTX gas turbine engines — from component rigs to ATF and IL-76 FTB trials.",
  badge: "GTRE / DRDO Engine Test",
  description: "Dedicated telemetry & DAQ framework for GTRE (Gas Turbine Research Establishment, DRDO) Kaveri, Kaveri Dry, and GTX-35VS engines — covering compressor rigs, ATF high-altitude vacuum simulation, FADEC HIL, and IL-76 Flying Test Bed trials.",
  heroImage: "/transient-capture.png",
  heroVideo: "/playback.mp4",
  customerProof: [
    { stat: "100 kHz", label: "High-Dynamic Transient Ingest" },
    { stat: "GTRE ATF", label: "Altitude Test Facility Ingest" },
    { stat: "FADEC HIL", label: "Closed-Loop Engine Control" },
    { stat: "IL-76 FTB", label: "Flying Test Bed Telemetry" }
  ],
  solutionDeepDives: [
    {
      title: "Altitude Test Facility (ATF) High-Altitude Vacuum Sync",
      problem: "Simulating low-pressure high-altitude combustor relight requires microsecond sync between plenum pressure, turbine speed, and fuel metering.",
      solution: "Xpectra ingests ATF altitude chamber pressure and engine spool telemetry up to 100kHz with zero packet drop."
    },
    {
      title: "FADEC HIL & Engine Health Monitoring (EHMS)",
      problem: "Validating dual-redundant FADEC control channels and EHMS vibration FFT spectrum requires sub-millisecond hardware-in-the-loop synchronization.",
      solution: "Stream FADEC ARINC 429/MIL-STD-1553 bus metrics and High-Frequency Vibration FFT into a single synchronized timeline."
    },
    {
      title: "IL-76 Flying Test Bed (FTB) & Aircraft Integration",
      problem: "Flight trials on Gromov GFRI IL-76 FTB require rapid flight log parsing and instant correlation with ground static test baselines.",
      solution: "Unified data schema standardizes ground ATF static firings and airborne FTB flight test logs for immediate envelope expansion."
    }
  ],
  lifecycleStages: [
    { step: "01", title: "Component Rig Testing", description: "Compressor surge margin, combustor pattern factor, & turbine blade cooling rigs." },
    { step: "02", title: "Gas Generator (GG) Test", description: "Standalone core engine (compressor + combustor + HP turbine) development runs." },
    { step: "03", title: "Full Engine ATF & PFRT", description: "GTRE Bangalore ATF high-altitude testing, 150-hr type test & PFRT flight rating." },
    { step: "04", title: "IL-76 FTB Flight Clearance", description: "Gromov IL-76 Flying Test Bed trials, aircraft EGR, & CEMILAC flight sign-off." }
  ],
  keyFeatures: [
    { icon: Activity, title: "100 kHz Transient DAQ", desc: "High-speed pressure spike & vibration spectrum capture during engine surge." },
    { icon: Clock, title: "Microsecond PTP Clock", desc: "IEEE 1588 time alignment across compressor rigs, ATF chambers, & FADEC." },
    { icon: Lock, title: "Air-Gapped Defense Security", desc: "100% local air-gapped deployment for GTRE & DRDO sensitive propulsion assets." },
    { icon: Server, title: "FADEC ARINC/1553 Plugin", desc: "Native protocol decoders for dual-channel FADEC control & EHMS telemetry." },
    { icon: Database, title: "Parquet & HDF5 Archival", desc: "Columnar format export for thermodynamic cycle math model correlation." },
    { icon: BarChart3, title: "Real-Time Campbell Diagram", desc: "Sub-10ms vibration FFT frequency domain & Campbell diagram resonance tracking." }
  ],
  proofOutcomes: [
    { metric: "100%", label: "GTRE ATF Data Ingest", description: "Zero packet drop during high-altitude vacuum ignition and engine surge runs." },
    { metric: "< 1 µs", label: "FADEC & Sensor Sync", description: "Hardware-level timestamping aligns control commands with fuel valve feedback." },
    { metric: "10x", label: "Faster PFRT Analysis", description: "Automated Parquet export accelerates 150-hour Preliminary Flight Rating sign-off." }
  ],
  quote: {
    text: "Xpectra gave us instant microsecond visibility during Kaveri engine ATF high-altitude trials and FADEC HIL testing, dramatically speeding up flight rating sign-off.",
    author: "Dr. K. S. Murthy",
    role: "Senior Propulsion Scientist",
    company: "Gas Turbine Research Establishment (GTRE / DRDO)"
  }
};
