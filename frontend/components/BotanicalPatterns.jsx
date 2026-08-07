import React from "react";

/**
 * BotanicalPatterns.jsx
 * Highly optimized, lightweight SVG decorative elements for A2Z Plant Nutrient.
 * Redesigned for a deeply premium, minimalist architectural look.
 */

// Premium Shadow Leaf - Looks like a soft botanical shadow cast on the wall
export function PremiumShadowLeafLeft({ className = "", opacity = 0.03 }) {
  return (
    <svg
      viewBox="0 0 500 500"
      className={`pointer-events-none select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity, filter: "blur(18px)" }}
    >
      <path
        d="M20,480 C-10,350 40,200 150,100 C300,-10 420,50 480,150 C490,170 500,220 480,250 C430,320 280,380 20,480 Z"
        fill="#022c22"
      />
      <path
        d="M50,450 C80,300 200,200 350,120 C420,80 460,100 450,140 C410,250 250,300 50,450 Z"
        fill="#064e3b"
      />
    </svg>
  );
}

export function PremiumShadowLeafRight({ className = "", opacity = 0.03 }) {
  return (
    <svg
      viewBox="0 0 500 500"
      className={`pointer-events-none select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity, filter: "blur(20px)" }}
    >
      <path
        d="M480,20 C510,150 460,300 350,400 C200,510 80,450 20,350 C10,330 0,280 20,250 C70,180 220,120 480,20 Z"
        fill="#022c22"
      />
      <path
        d="M450,50 C420,200 300,300 150,380 C80,420 40,400 50,360 C90,250 250,200 450,50 Z"
        fill="#064e3b"
      />
    </svg>
  );
}

// Fine Line Branch - Ultra-minimalist continuous line drawing of an olive branch
export function FineLineBranch({ className = "", opacity = 0.08, stroke = "#064e3b" }) {
  return (
    <svg
      viewBox="0 0 300 600"
      className={`pointer-events-none select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <path
        d="M20,580 Q100,300 280,20"
        stroke={stroke}
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Delicate leaves attached to stem */}
      <path
        d="M60,460 Q20,400 80,380 Q110,410 60,460"
        stroke={stroke}
        strokeWidth="1"
      />
      <path
        d="M100,350 Q160,300 200,320 Q160,380 100,350"
        stroke={stroke}
        strokeWidth="1"
      />
      <path
        d="M150,220 Q100,160 140,120 Q180,160 150,220"
        stroke={stroke}
        strokeWidth="1"
      />
      <path
        d="M210,120 Q280,80 300,100 Q260,150 210,120"
        stroke={stroke}
        strokeWidth="1"
      />
      <path
        d="M40,520 Q80,550 100,520 Q80,490 40,520"
        stroke={stroke}
        strokeWidth="1"
      />
    </svg>
  );
}

// Topographical Lines - Abstract premium architectural landscape
export function TopographicContours({ className = "", opacity = 0.05 }) {
  return (
    <svg
      viewBox="0 0 1000 300"
      className={`pointer-events-none select-none w-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <path d="M-100,50 Q150,200 400,100 T900,150 T1200,50" stroke="#047857" strokeWidth="0.5" />
      <path d="M-100,80 Q150,230 400,130 T900,180 T1200,80" stroke="#047857" strokeWidth="0.5" />
      <path d="M-100,110 Q150,260 400,160 T900,210 T1200,110" stroke="#047857" strokeWidth="0.5" />
      <path d="M-100,140 Q150,290 400,190 T900,240 T1200,140" stroke="#047857" strokeWidth="0.5" />
      <path d="M-100,170 Q150,320 400,220 T900,270 T1200,170" stroke="#047857" strokeWidth="0.5" />
    </svg>
  );
}

// Geometric Arc Leaf - Very modern corporate representation of growth
export function GeometricLeafCorner({ className = "", opacity = 0.06 }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`pointer-events-none select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <path
        d="M200,200 A200,200 0 0,0 0,0 L0,200 Z"
        fill="url(#geoGradient)"
      />
      <path
        d="M200,200 A150,150 0 0,0 50,50 L50,200 Z"
        fill="url(#geoGradientDark)"
      />
      <path
        d="M200,200 A100,100 0 0,0 100,100 L100,200 Z"
        fill="url(#geoGradientLight)"
      />
      <defs>
        <linearGradient id="geoGradient" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10b981" stopOpacity="0" />
          <stop offset="1" stopColor="#047857" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="geoGradientDark" x1="50" y1="50" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#059669" stopOpacity="0" />
          <stop offset="1" stopColor="#064e3b" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="geoGradientLight" x1="100" y1="100" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34d399" stopOpacity="0" />
          <stop offset="1" stopColor="#047857" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// For backwards compatibility across the site while changing the visual entirely
export const WatercolorBranchLeft = PremiumShadowLeafLeft;
export const WatercolorBranchRight = PremiumShadowLeafRight;
export const LeafOutlineCorner = GeometricLeafCorner;
export const LeafVeinPattern = TopographicContours;
export const OrganicWaveSeparator = TopographicContours;
export const WatercolorLeafSingle = FineLineBranch;
