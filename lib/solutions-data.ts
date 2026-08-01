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
  Shield
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
    id: "aerospace",
    title: "Aerospace",
    desc: "Propulsion & hot-fire test stand telemetry",
    icon: Rocket,
    badge: "Flight-Grade"
  },
  {
    id: "defense",
    title: "Defense",
    desc: "Edge sensor fusion for contested environments",
    icon: Shield,
    badge: "Mission-Critical"
  },
  {
    id: "robotics",
    title: "Robotics",
    desc: "ROS 2 & hardware-in-the-loop deterministic replay",
    icon: Bot,
    badge: "Autonomy"
  },
  {
    id: "automotive",
    title: "Automotive",
    desc: "CAN-bus decoding & battery thermal analytics",
    icon: Car,
    badge: "Automotive"
  },
  {
    id: "energy",
    title: "Energy & Infrastructure",
    desc: "Turbine vibration FFT & 24/7 asset health",
    icon: Zap,
    badge: "Industrial IoT"
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
  }
};
