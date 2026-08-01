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
      { metric: "< 5ms", label: "Ingest Latency", description: "Real-time telemetry stream visualization during pass windows." },
      { metric: "99.999%", label: "Telemetry Integrity", description: "Zero packet loss across ground station telemetry receivers." }
    ]
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
    ]
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
    ]
  }
};

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
        { name: "Commissioning Phase", desc: "Commissioning phase." }
      ]
    }
  ]
};
