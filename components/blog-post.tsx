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
              <p className="text-white/50 text-sm">In aerospace, MTTR refers to the total time elapsed from the moment an anomaly occurs on the test stand or in flight to the moment the engineering team definitively identifies the root cause and engineers a solution.</p>
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
          If you look at the modern hardware development lifecycle across aerospace, robotics, and autonomous vehicles, simulation software appears to have solved everything.
        </p>

        <p className="text-lg text-white/60 mb-6">
          With advanced digital twins and sophisticated physics engines, teams can "test" a robotic arm millions of times virtually before cutting a single piece of metal. But as any veteran engineer knows: simulations are optimistic, and reality is unforgiving.
        </p>

        <p className="text-lg text-white/60 mb-8">
          This discrepancy is known in the industry as the "Sim2Real Gap". Bridging this gap is the central challenge of modern hardware engineering.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Anatomy of the Sim2Real Gap</h2>
        <p className="text-lg text-white/60 mb-6">
          The Sim2Real gap emerges from the accumulation of micro-mismatches that only become visible when theory meets physical hardware.
        </p>

        <div className="space-y-8 my-10">
          <div>
            <h3 className="text-white font-bold text-lg mb-2">1. The Approximated Universe</h3>
            <p className="text-white/60">Physics engines are mathematical approximations. In simulation, friction is a constant and actuators have perfectly linear curves. In the real world, a micro-abrasion on a valve or hysteresis in an actuator creates non-linearities that simulators cannot practically compute.</p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-2">2. The Latency and Clock Drift Problem</h3>
            <p className="text-white/60">In a simulator, time is a controlled variable. In the real world, the clock keeps ticking. If a physical sensor experiences electrical noise and delays a packet by just 3ms, the entire control loop can become destabilized.</p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-2">3. Sensor Realism and "Perfect Knowledge"</h3>
            <p className="text-white/60">Simulators grant agents "perfect knowledge." When a policy trained on perfect data is deployed to the physical world, it is immediately blinded by the chaotic noise of real-world sensors.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-12 mb-6">Bridging the Gap: From HIL to High-Velocity Physical Testing</h2>
        <p className="text-lg text-white/60 mb-6">
          The goal isn't to build a simulation so perfect that the first prototype works flawlessly. The goal is to build physical prototypes quickly, test them to failure, capture the mission-critical sensor data, and feed that empirical reality back into the design loop.
        </p>

        <blockquote className="border-l-4 border-purple-500 pl-6 py-2 my-10 italic text-xl text-white/90 bg-white/5 rounded-r-lg">
          "The bottleneck in bridging the Sim2Real gap is no longer the speed of simulation - it is the speed and fidelity of the telemetry pipeline."
        </blockquote>

        <h2 className="text-2xl font-bold text-white mt-12 mb-6">Infrastructure Solutions: The Role of TSDBs</h2>
        <p className="text-lg text-white/60 mb-6">
          Telemetry requires a Time-Series Database (TSDB). Standard relational databases will buckle and crash if you attempt to feed them a million sensor readings per second.
        </p>
        <p className="text-lg text-white/60 mb-6">
          With a TSDB, an engineer can ask, "Show me the exact moment the pressure sensor deviated from the simulated baseline, and overlay the actuator commands from that exact microsecond."
        </p>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/10 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">Bridge the Sim2Real Gap with Xpectra</h2>
          <p className="text-white/70 mb-4">Your team's mandate is to build revolutionary hardware, not to manage database infrastructure.</p>
          <p className="text-white/70 mb-6 font-bold text-lg">Xpectra provides the definitive data infrastructure for mission-critical sensor data.</p>
          <p className="text-white/50 text-sm">We eliminate the telemetry bottleneck by standardizing, validating, and ingesting your sensor data at the edge, routing it directly into a high-performance, unified time-series architecture.</p>
        </div>

        <div className="mt-16 pt-8">
          <h2 className="text-xl font-bold text-white mb-6">References & Further Reading</h2>
          <ul className="space-y-4 text-sm text-white/40 font-mono list-none p-0">
            <li className="pl-0"><span className="text-white/60">[1]</span> Cambridge Consultants (2024). "The Sim-to-Real Gap in Robotics."</li>
            <li className="pl-0"><span className="text-white/60">[2]</span> Röymark et al. (2024). "Continual Domain Randomization for Sim2Real Transfer."</li>
            <li className="pl-0"><span className="text-white/60">[3]</span> Turan et al. (2019). "Hardware-in-the-Loop Simulation for CubeSats."</li>
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
