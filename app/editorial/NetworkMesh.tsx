"use client";

import { motion } from "framer-motion";

const NODES = [
  { x: 18, y: 22, r: 4.5 },
  { x: 42, y: 14, r: 3.2 },
  { x: 68, y: 28, r: 5 },
  { x: 88, y: 18, r: 3 },
  { x: 28, y: 48, r: 3.8 },
  { x: 52, y: 42, r: 6 },
  { x: 78, y: 52, r: 3.5 },
  { x: 16, y: 72, r: 3 },
  { x: 40, y: 68, r: 4.2 },
  { x: 62, y: 78, r: 3.6 },
  { x: 86, y: 70, r: 4.8 },
  { x: 74, y: 38, r: 2.8 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [0, 4],
  [4, 5],
  [5, 2],
  [5, 6],
  [2, 11],
  [11, 6],
  [4, 7],
  [7, 8],
  [8, 5],
  [8, 9],
  [9, 6],
  [6, 10],
  [9, 10],
  [5, 11],
];

export default function NetworkMesh() {
  return (
    <div className="relative h-full min-h-[320px] w-full mesh-fade" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,color-mix(in_oklch,oklch(0.55_0.14_195)_18%,transparent),transparent_65%)]" />
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {EDGES.map(([a, b], i) => {
          const from = NODES[a];
          const to = NODES[b];
          return (
            <motion.line
              key={`e-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="url(#meshStroke)"
              strokeWidth="0.35"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.15, 0.55, 0.25] }}
              transition={{
                duration: 4.5 + (i % 4) * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.12,
              }}
            />
          );
        })}

        {NODES.map((node, i) => (
          <g key={`n-${i}`}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r * 2.4}
              fill="oklch(0.75 0.12 180 / 0.12)"
              animate={{ scale: [1, 1.35, 1], opacity: [0.35, 0.7, 0.35] }}
              transition={{
                duration: 3.2 + (i % 3) * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.18,
              }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r * 0.35}
              fill="oklch(0.9 0.08 180)"
            />
          </g>
        ))}

        <defs>
          <linearGradient id="meshStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.78 0.12 180)" stopOpacity="0.15" />
            <stop offset="50%" stopColor="oklch(0.72 0.12 270)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="oklch(0.78 0.12 180)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
