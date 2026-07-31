"use client";

import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function FooterChart() {
  const chartRef = useRef<any>(null);

  // Keep references to data arrays so they persist across re-renders
  const dataArrays = useRef({
    temp: [] as {x: number, y: number}[],
    pd: [] as {x: number, y: number}[],
    vib: [] as {x: number, y: number}[],
    pressure: [] as {x: number, y: number}[],
    acceleration: [] as {x: number, y: number}[]
  });

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    // Fill the screen in 5 seconds (100 points * 50ms = 5000ms)
    const maxVisiblePoints = 100;
    const intervalMs = 50;
    
    let x = dataArrays.current.temp.length > 0 
      ? dataArrays.current.temp[dataArrays.current.temp.length - 1].x + 1 
      : 0;

    let prevTemp = dataArrays.current.temp.length > 0 ? dataArrays.current.temp[dataArrays.current.temp.length - 1].y : 100;

    const intervalId = setInterval(() => {
      // Time variable 't' in seconds
      const t = x * 0.05;

      // 1. Acceleration: A complex wave pattern simulating physical movement/forces
      const baseAcc = Math.sin(t * 0.8) * 3 + Math.sin(t * 2.1) * 1.5;
      const accNoise = (Math.random() - 0.5) * 0.8;
      const acc = baseAcc + accNoise;

      // 2. Pressure: Directly correlates with acceleration forces (e.g., hydraulic load)
      const pressureBase = 200;
      const pressureDynamic = acc * 8;
      const pressureNoise = (Math.random() - 0.5) * 2;
      const pressure = pressureBase + pressureDynamic + pressureNoise;

      // 3. Vibration: Correlates with the absolute magnitude of acceleration (more force = more rattle)
      const vibBase = 10;
      const vibDynamic = Math.abs(acc) * 2.5;
      const vibNoise = (Math.random() - 0.5) * (1 + Math.abs(acc)); 
      const vib = vibBase + vibDynamic + vibNoise;

      // 4. Potential Difference: Voltage dips when acceleration (power draw) is high
      const pdBase = 50;
      const pdDynamic = -Math.abs(acc) * 1.5; 
      const pdNoise = (Math.random() - 0.5) * 0.5;
      const pd = pdBase + pdDynamic + pdNoise;

      // 5. Temperature: Slowly climbs up and down in a random walk, slightly influenced by system energy
      prevTemp += (Math.abs(acc) * 0.05) - 0.1 + (Math.random() - 0.5) * 1;
      // Keep temperature bounded to a realistic range
      if (prevTemp > 140) prevTemp -= 0.5;
      if (prevTemp < 80) prevTemp += 0.5;

      // Push new data directly into the stable refs
      dataArrays.current.temp.push({ x, y: prevTemp });
      dataArrays.current.pd.push({ x, y: pd });
      dataArrays.current.vib.push({ x, y: vib });
      dataArrays.current.pressure.push({ x, y: pressure });
      dataArrays.current.acceleration.push({ x, y: acc });

      // Squeeze effect: Always start at 0, and expand the max bound as x grows.
      // This means old data stays on screen and gets squeezed to the left.
      chart.options.scales.x.min = 0;
      chart.options.scales.x.max = Math.max(maxVisiblePoints, x);

      // Safety limit: if left open for a very long time, prevent browser out-of-memory crash.
      // 24000 points at 50ms = 20 minutes of history kept on screen.
      const MAX_HISTORY = 24000;
      if (dataArrays.current.temp.length > MAX_HISTORY) {
        dataArrays.current.temp.shift();
        dataArrays.current.pd.shift();
        dataArrays.current.vib.shift();
        dataArrays.current.pressure.shift();
        dataArrays.current.acceleration.shift();
        chart.options.scales.x.min = x - MAX_HISTORY;
      }

      x++;

      // Update chart without animation for smooth streaming
      chart.update('none');
    }, intervalMs);

    return () => clearInterval(intervalId);
  }, []);

  const chartData = React.useMemo(() => ({
    datasets: [
      {
        label: 'Temperature',
        borderColor: 'rgba(239, 68, 68, 0.8)', // red
        borderWidth: 1.5,
        radius: 0,
        data: dataArrays.current.temp,
        tension: 0.4
      },
      {
        label: 'Potential Difference',
        borderColor: 'rgba(59, 130, 246, 0.8)', // blue
        borderWidth: 1.5,
        radius: 0,
        data: dataArrays.current.pd,
        tension: 0.4
      },
      {
        label: 'Vibration',
        borderColor: 'rgba(16, 185, 129, 0.8)', // green
        borderWidth: 1.5,
        radius: 0,
        data: dataArrays.current.vib,
        tension: 0.4
      },
      {
        label: 'Pressure',
        borderColor: 'rgba(234, 179, 8, 0.8)', // yellow
        borderWidth: 1.5,
        radius: 0,
        data: dataArrays.current.pressure,
        tension: 0.4
      },
      {
        label: 'Acceleration',
        borderColor: 'rgba(168, 85, 247, 0.8)', // purple
        borderWidth: 1.5,
        radius: 0,
        data: dataArrays.current.acceleration,
        tension: 0.4
      }
    ]
  }), []);

  const chartOptions: ChartOptions<'line'> = React.useMemo(() => ({
    animation: false,
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: 'rgba(255, 255, 255, 0.5)',
          font: { family: 'monospace', size: 10 }
        }
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'rgba(255, 255, 255, 0.8)',
        bodyColor: 'rgba(255, 255, 255, 0.8)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1
      }
    },
    scales: {
      x: {
        type: 'linear',
        display: true,
        min: 0,
        max: 100,
        title: {
          display: true,
          text: 'Time →',
          color: 'rgba(255, 255, 255, 0.5)',
          font: { family: 'monospace', size: 11 }
        },
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: {
          color: 'rgba(255, 255, 255, 0.4)',
          font: { family: 'monospace', size: 10 },
          stepSize: 20
        },
        border: { display: true, color: 'rgba(255, 255, 255, 0.2)' }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Amplitude',
          color: 'rgba(255, 255, 255, 0.5)',
          font: { family: 'monospace', size: 11 }
        },
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: {
          color: 'rgba(255, 255, 255, 0.4)',
          font: { family: 'monospace', size: 10 }
        },
        border: { display: true, color: 'rgba(255, 255, 255, 0.2)' }
      }
    },
    maintainAspectRatio: false,
    responsive: true
  }), []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <Line ref={chartRef} data={chartData} options={chartOptions} />
    </div>
  );
}
