"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SiteShell } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Share2, Tag } from 'lucide-react';

export const BlogPost = ({ post }: { post: any }) => {
  const POST_CONTENT: Record<string, React.ReactNode> = {
    "spacex-data-infrastructure-lessons": (
      <>
        <p className="text-xl leading-relaxed text-white/80 mb-8 font-medium">
          When the public watches a SpaceX test flight, they see a spectacle of fire, steel, and occasionally, spectacular explosions. But to the engineering teams behind the scenes, a test flight isn't just a physical event; it is a massive data acquisition exercise.
        </p>

        <p className="text-lg text-white/60 mb-6">
          SpaceX has redefined the aerospace industry by championing "Agile Aerospace": a philosophy that prioritizes rapid prototyping, destructive testing, and continuous iteration over the traditional, decades-long "waterfall" development cycles. However, this level of speed is physically impossible without a world-class telemetry data infrastructure.
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
          "A telemetry pipeline must guarantee integrity (un-corrupted readings), strict ordering (reconstructable sequence of events), and survivability (no data loss during communication blackouts)." (Engineering Principle)
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
      </>
    ),
    "cost-of-unknown-unknowns": (
      <>
        <p className="text-xl leading-relaxed text-white/80 mb-8 font-medium">
          In engineering, there are "known-knowns" (the parameters we plan for) and "unknown-unknowns" (the anomalies that surface only when hardware is pushed to its breaking point).
        </p>

        <p className="text-lg text-white/60 mb-6">
          The most expensive mistake an aerospace startup can make is not the hardware failure itself, but the inability to diagnose why it happened.
        </p>

        <p className="text-lg text-white/60 mb-6">
          When millions of dollars of physical assets evaporate in a fireball, or a high-stakes static fire test is aborted at T-minus 2 seconds, the race is on to identify the root cause before the next launch window.
        </p>

        <p className="text-lg text-white/60 mb-8">
          The challenge isn't a lack of data; it's the fragmentation of it. High-frequency telemetry from vibration sensors, low-frequency thermistor readings, and the discrete logs from the flight software often live in separate silos. Attempting to manually align these disjointed datasets (accounting for clock drift, dropped packets, and varying sample rates) is where the real cost of "unknown-unknowns" accumulates.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-6">Shrinking MTTR: Joining the Metric Spike with the Log</h2>
        <p className="text-lg text-white/60 mb-6">
          How do elite aerospace teams resolve unknown-unknowns in a matter of hours instead of months? They eliminate the data silos.
        </p>
        <p className="text-lg text-white/60 mb-6">
          When a test flight fails, the investigation team needs the ability to scrub through the timeline of the event with perfect synchronization across all subsystems. If an engineer spots an unpredicted 400Hz pressure spike in the rocket engine testing data, they shouldn't have to email the software team to ask what the flight computer was doing at that exact millisecond.
        </p>
        <p className="text-lg text-white/60 mb-6">
          A world-class telemetry pipeline standardizes all incoming data (parsing proprietary binary streams into universal engineering units) and aligns it on a single, high-precision time-series index. This allows engineers to instantly overlay a physical metric spike with the exact control logic and system logs executing at that microsecond.
        </p>
        <p className="text-lg text-white/60 mb-6">
          By unifying the "what happened" (the physical sensor metric) with the "why it happened" (the software command log), teams can immediately prove or disprove hypotheses, radically shrinking the time it takes to redesign the failing component.
        </p>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/10 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">Uncover the Unknowns with Xpectra</h2>
          <p className="text-white/70 mb-4">Finding the root cause of a complex hardware failure shouldn't require your engineering team to spend three weeks writing custom Python scripts just to align CSV files.</p>
          <p className="text-white/70 mb-6 font-bold text-lg">Your team's mandate is to build hardware, not databases. That is why we built Xpectra.</p>
          <p className="text-white/50 text-sm">Xpectra handles the dense, high-frequency ingestion, the edge-level standardization, and the time-series storage so that your telemetry is instantly queryable the second your hardware test concludes.</p>
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-bold mb-2">What is Mean Time to Resolution (MTTR) in aerospace engineering?</h4>
              <p className="text-white/50 text-sm">In aerospace, MTTR refers to the total time elapsed from the moment an anomaly occurs on the test stand or in flight to the moment the engineering team definitively identifies the root cause and engineering a solution.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Why is software observability insufficient for aerospace anomaly detection?</h4>
              <p className="text-white/50 text-sm">Software observability tools are built to handle low-frequency IT metrics. They physically cannot ingest the density of data required for hardware observability without severe latency and lack the microsecond accuracy required to reconstruct physical events.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">What is the difference between a point anomaly and a contextual anomaly in telemetry?</h4>
              <p className="text-white/50 text-sm">A point anomaly is a single sensor reading violating a static limit. A contextual anomaly is a reading that is within normal limits generally, but is abnormal given the current state of the vehicle (e.g., an engine valve opening while commanded closed).</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8">
          <h2 className="text-xl font-bold text-white mb-6">References & Further Reading</h2>
          <ul className="space-y-4 text-sm text-white/40 font-mono list-none p-0">
            <li className="pl-0">
              <span className="text-white/60">[1]</span> Akl, A., & Elattar, H. (2025). "Hybrid Anomaly Detection in Spacecraft Telemetry." <i>Journal of Physics</i>.
            </li>
            <li className="pl-0">
              <span className="text-white/60">[2]</span> MDPI. (2024). "A Review of Anomaly Detection in Spacecraft Telemetry Data." <i>Applied Sciences</i>.
            </li>
          </ul>
        </div>
      </>
    ),
    "bridging-the-sim-to-real-gap": (
      <>
        <p className="text-xl leading-relaxed text-white/80 mb-8 font-medium">
          If you look at the modern hardware development lifecycle across aerospace, robotics, and autonomous vehicles, simulation software appears to have solved everything. With advanced digital twins, deep reinforcement learning (DRL), and sophisticated physics engines, an engineering team can design a rocket engine, an autonomous drone, or a robotic arm, and "test" it millions of times in a virtual environment before cutting a single piece of metal.
        </p>

        <p className="text-lg text-white/60 mb-6">
          But as any veteran hardware engineer knows: simulations are optimistic, and reality is unforgiving.
        </p>

        <p className="text-lg text-white/60 mb-6">
          When that meticulously simulated component is finally manufactured and placed on a physical test stand, it rarely behaves exactly as the virtual model predicted. The control algorithm that perfectly balanced a bipedal robot in a simulator suddenly causes violent, erratic shaking on the physical prototype. The thermal thresholds modeled in software are breached within seconds of an actual engine ignition.
        </p>

        <p className="text-lg text-white/60 mb-8">
          This discrepancy is known in the industry as the "Sim2Real Gap" (Simulation-to-Reality gap).
        </p>

        <p className="text-lg text-white/60 mb-8 font-medium text-white/90">
          Bridging this gap is the central challenge of modern hardware engineering. In this comprehensive guide, we will explore the mathematical and physical anatomy of the Sim2Real gap, examine why software-only solutions like Domain Randomization fall short, and explain why high-velocity physical testing - powered by world-class telemetry data infrastructure - is the only way to uncover ground truth.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Anatomy of the Sim2Real Gap</h2>
        <p className="text-lg text-white/60 mb-6">
          The Sim2Real gap is not caused by a single, glaring flaw in simulation software. Rather, it emerges from the accumulation of hundreds of micro-mismatches that only become visible when theory meets physical hardware (Cambridge Consultants, 2024).
        </p>
        <p className="text-lg text-white/60 mb-6">
          These discrepancies generally fall into three categories:
        </p>

        <div className="space-y-12 my-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">1. The Approximated Universe</h3>
            <p className="text-lg text-white/60 mb-4">
              Physics engines (like MuJoCo, PyBullet, or proprietary aerospace simulators) are incredibly advanced, but they are ultimately mathematical approximations of the universe. In simulation, friction is often represented as a constant coefficient. Thermal expansion is uniform. Actuators have perfectly linear torque curves.
            </p>
            <p className="text-lg text-white/60">
              In the real world, physics are highly non-linear. A micro-abrasion on a liquid oxygen valve alters its fluid dynamics. Extreme thermal loads warp components asymmetrically. Actuators experience hysteresis (a lag between input command and physical response caused by material friction and magnetic reluctance). Even state-of-the-art simulators cannot compute the molecular reality of a physical system without requiring completely impractical amounts of processing power.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">2. The Latency and Clock Drift Problem</h3>
            <p className="text-lg text-white/60 mb-4">
              In a simulator, time is a controlled variable. A physics engine will happily pause the universe to wait for a complex control algorithm to finish its computation. If your algorithm takes an extra 10 milliseconds to calculate an actuator command, the simulation simply waits.
            </p>
            <p className="text-lg text-white/60">
              In the real world, the clock keeps ticking. Most complex hardware systems, such as humanoid robots or spacecraft Attitude Determination and Control Systems (ADCS), rely on embedded low-level controllers running at fixed rates between 500Hz and 1000Hz (Cambridge Consultants, 2024). Meanwhile, higher-level learning policies or navigation systems might operate at 30Hz to 60Hz.
            </p>
            <p className="text-lg text-white/60 mt-4">
              Bridging these layers is delicate. If a physical sensor experiences electrical noise and delays a packet by just 3 milliseconds, the entire control loop can become destabilized. Simulations rarely model network latency, dropped packets, and clock drift with perfect accuracy.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">3. Sensor Realism and "Perfect Knowledge"</h3>
            <p className="text-lg text-white/60 mb-4">
              Simulators grant agents "perfect knowledge." A simulated Inertial Measurement Unit (IMU) provides the exact spatial orientation of a vehicle down to the sixteenth decimal point. A simulated camera operates without lens distortion, motion blur, or sun glare.
            </p>
            <p className="text-lg text-white/60">
              When a policy trained on this perfect data is deployed to the physical world, it is immediately blinded by the chaotic noise of real-world sensors (Mahajan et al., 2024). The algorithm overcorrects to noise, leading to catastrophic physical failures.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Limits of Domain Randomization</h2>
        <p className="text-lg text-white/60 mb-6">
          While Domain Randomization has achieved remarkable success, it has severe mathematical and practical limitations.
        </p>
        <p className="text-lg text-white/60 mb-6">
          First, as highlighted by recent research into Continual Domain Randomization, inappropriate or excessive randomization increases the uncertainty of the system to a point where the algorithm simply learns overly conservative, sub-optimal policies (Röymark et al., 2024). If you tell an autonomous drone that gravity might suddenly reverse, it will fly terribly.
        </p>
        <p className="text-lg text-white/60 mb-6">
          Second, and more importantly, Domain Randomization still requires initial parameters. How do you know what to randomize, and by how much? Theoretical frameworks analyzing Domain Randomization prove that while algorithms can generalize, to truly bridge the gap, you must utilize offline data from the actual physical target environment (Chen et al., 2021).
        </p>
        <p className="text-lg text-white/60 mb-8 font-medium text-white/90">
          You cannot simulate your way out of the reality gap. You have to extract data from reality.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-6">Bridging the Gap: From HIL to High-Velocity Physical Testing</h2>
        <p className="text-lg text-white/60 mb-6">
          Because the Sim2Real gap exists, agile hardware development requires a fundamental mindset shift: you must transition from relying solely on predictive simulations to relying on empirical data.
        </p>
        <p className="text-lg text-white/60 mb-6">
          The goal of modern aerospace and robotics companies isn't to build a simulation so perfect that the first physical prototype works flawlessly. The goal is to build physical prototypes quickly, test them to failure, capture the mission-critical sensor data, and feed that empirical reality back into the design loop.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">Hardware-in-the-Loop (HIL) Testing</h3>
        <p className="text-lg text-white/60 mb-6">
          The first step across the bridge is Hardware-in-the-Loop (HIL) simulation. HIL testing involves connecting the real input and output (I/O) interfaces of the actual controller hardware (the physical flight computers or ECUs) to a virtual environment that simulates the physical system (MathWorks, 2024).
        </p>
        <p className="text-lg text-white/60 mb-6">
          This allows engineers to validate the electrical domain and software execution on the actual silicon before full mechanical assembly. For highly complex systems like CubeSats, HIL testing replaces physical sensors and actuators with simulated electrical signals, ensuring the flight software can handle real-time execution constraints without risking a physical vehicle (Turan et al., 2019).
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">The Telemetry Bottleneck</h3>
        <p className="text-lg text-white/60 mb-6">
          The bottleneck in bridging the Sim2Real gap is no longer the speed of simulation or even the speed of physical manufacturing - it is the speed and fidelity of the telemetry pipeline.
        </p>
        <p className="text-lg text-white/60 mb-6">
          To compare simulation to reality, you must capture high-frequency data from the physical system that matches the frequency of your physics engine. If your simulator is calculating physics at 1000Hz, but your physical test stand only records data at 10Hz, you have no way to verify the high-frequency dynamics of the system.
        </p>
        <p className="text-lg text-white/60 mb-6">
          The first step is moving computation to the edge. Raw telemetry often arrives as densely packed binary streams. An optimal architecture deploys edge-nodes directly at the test stand to perform "decommutation" - parsing the binary, verifying checksums to detect dropped packets, and instantly translating proprietary sensor voltages into standardized engineering units (Kelvin, PSI, Newtons).
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">Time-Series Databases (TSDB)</h3>
        <p className="text-lg text-white/60 mb-6">
          Standard relational databases (like standard PostgreSQL or MySQL) are designed for transactional workloads. They will buckle and crash if you attempt to feed them a million sensor readings per second.
        </p>
        <p className="text-lg text-white/60 mb-6">
          Telemetry requires a Time-Series Database (TSDB). Systems like InfluxDB, TimescaleDB, or ClickHouse are structurally optimized for high-volume writes and time-based queries (OpenMetal, 2024). They utilize time-based indexing and pre-aggregation strategies, allowing engineers to execute ultra-fast range queries.
        </p>
        <p className="text-lg text-white/60 mb-6">
          With a TSDB, an engineer can query a dashboard and ask, "Show me the exact moment the pressure sensor deviated from the simulated baseline, and overlay the flight computer's actuator commands from that exact microsecond."
        </p>
        <p className="text-lg text-white/60 mb-8 font-medium text-white/90">
          This is the holy grail of hardware engineering: Sim-to-Real Equivalence in your data. When your simulation data and your physical telemetry data are routed into the exact same TSDB architecture, the gap between the two becomes instantly visible.
        </p>

        <div className="mt-16 p-12 rounded-3xl bg-gradient-to-br from-purple-600/20 to-blue-600/10 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Bridge the Sim2Real Gap with Xpectra</h2>
          <p className="text-xl text-white/70 mb-6 italic">To build hardware fast, you need to experiment fast. You cannot afford to let your engineers waste weeks wrestling with fragmented data pipelines, custom parsers, and slow databases just to see the results of a physical test.</p>
          <p className="text-2xl text-white font-bold mb-8">Your team's mandate is to build revolutionary hardware, not to manage database infrastructure.</p>
          <p className="text-lg text-white/60 mb-8">
            This is where Xpectra comes in. Xpectra provides the definitive data infrastructure for mission-critical sensor data. We eliminate the telemetry bottleneck by standardizing, validating, and ingesting your physical sensor data at the edge, routing it directly into a high-performance, unified time-series architecture.
          </p>
          <p className="text-xl text-white font-bold">With Xpectra, you don't just simulate your hardware - you prove it.</p>
        </div>

        <div className="mt-16 pt-8">
          <h2 className="text-xl font-bold text-white mb-6">References & Further Reading</h2>
          <ul className="space-y-4 text-sm text-white/40 font-mono list-none p-0">
            <li className="pl-0"><span className="text-white/60">[1]</span> Cambridge Consultants (2024). "The Simulation-to-Reality (Sim2Real) Gap in Robotics."</li>
            <li className="pl-0"><span className="text-white/60">[2]</span> Mahajan et al. (2024). "Visual Sim2Real: Perception Gap Challenges."</li>
            <li className="pl-0"><span className="text-white/60">[3]</span> Röymark et al. (2024). "Continual Domain Randomization for Sim2Real Transfer."</li>
            <li className="pl-0"><span className="text-white/60">[4]</span> Chen et al. (2021). "Theory of Domain Randomization."</li>
            <li className="pl-0"><span className="text-white/60">[5]</span> Turan et al. (2019). "Hardware-in-the-Loop Simulation for CubeSats."</li>
            <li className="pl-0"><span className="text-white/60">[6]</span> MathWorks (2024). "What is Hardware-in-the-Loop Simulation?"</li>
            <li className="pl-0"><span className="text-white/60">[7]</span> OpenMetal (2024). "Why Time-Series Databases for Telemetry?"</li>
          </ul>
        </div>
      </>
    )
  };

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

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] tracking-tight text-white">
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
            {POST_CONTENT[post.slug] || <p className="text-white/60 italic">Engineering insight coming soon...</p>}

            <div className="flex flex-wrap gap-2 py-8 border-y border-white/10 my-12">
              {post.tags.map((tag: string) => (
                <span key={tag} className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 text-xs text-white/40 border border-white/10">
                  <Tag size={12} /> {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <footer className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-12 rounded-3xl bg-gradient-to-br from-purple-600/20 to-blue-600/10 border border-white/10 text-center"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Want to build like elite teams?</h2>
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
