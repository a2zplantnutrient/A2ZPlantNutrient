import React from "react";

/**
 * BotanicalPatterns.jsx
 * Highly optimized, lightweight SVG and CSS decorative elements for A2Z Plant Nutrient.
 * Designed to look premium, modern, minimal, and organic.
 */

// Elegant olive/eucalyptus watercolor-style branch for the left side (extends upwards)
export function WatercolorBranchLeft({ className = "", opacity = 0.05 }) {
  return (
    <svg
      viewBox="0 0 400 800"
      className={`pointer-events-none select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <defs>
        <linearGradient id="watercolorGradLeft" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#DDEFD9" />
          <stop offset="50%" stopColor="#EAF6EA" />
          <stop offset="100%" stopColor="#E8F5E9" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="stemGradLeft" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#AACDA5" />
          <stop offset="100%" stopColor="#DDEFD9" />
        </linearGradient>
      </defs>

      {/* Main curved stem */}
      <path
        d="M 50 780 C 70 600 120 400 280 150 C 330 70 380 50 390 40"
        stroke="url(#stemGradLeft)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Side branch 1 */}
      <path
        d="M 100 500 C 130 450 180 430 220 410"
        stroke="url(#stemGradLeft)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Side branch 2 */}
      <path
        d="M 180 300 C 220 250 280 230 310 220"
        stroke="url(#stemGradLeft)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Leaves on Main Stem */}
      {/* Leaf 1 - Bottom left */}
      <path
        d="M 68 650 C 10 640 -10 590 5 560 C 40 540 85 580 82 610 Z"
        fill="url(#watercolorGradLeft)"
        stroke="#AACDA5"
        strokeWidth="0.5"
      />
      <path d="M 68 650 C 50 610 30 585 5 560" stroke="#90BC8A" strokeWidth="0.75" />

      {/* Leaf 2 */}
      <path
        d="M 85 580 C 120 540 150 540 170 570 C 140 605 95 610 85 580 Z"
        fill="url(#watercolorGradLeft)"
        stroke="#AACDA5"
        strokeWidth="0.5"
      />
      <path d="M 85 580 C 115 575 140 575 170 570" stroke="#90BC8A" strokeWidth="0.75" />

      {/* Leaf 3 */}
      <path
        d="M 125 430 C 80 400 65 350 90 320 C 120 310 155 350 145 390 Z"
        fill="url(#watercolorGradLeft)"
        stroke="#AACDA5"
        strokeWidth="0.5"
      />
      <path d="M 145 390 C 125 365 110 340 90 320" stroke="#90BC8A" strokeWidth="0.75" />

      {/* Leaf 4 */}
      <path
        d="M 160 350 C 210 320 240 330 255 370 C 220 400 170 380 160 350 Z"
        fill="url(#watercolorGradLeft)"
        stroke="#AACDA5"
        strokeWidth="0.5"
      />
      <path d="M 160 350 C 190 355 220 360 255 370" stroke="#90BC8A" strokeWidth="0.75" />

      {/* Leaf 5 */}
      <path
        d="M 210 240 C 180 190 190 140 220 120 C 255 125 265 180 250 215 Z"
        fill="url(#watercolorGradLeft)"
        stroke="#AACDA5"
        strokeWidth="0.5"
      />
      <path d="M 250 215 C 240 180 230 150 220 120" stroke="#90BC8A" strokeWidth="0.75" />

      {/* Leaf 6 */}
      <path
        d="M 245 210 C 295 180 320 190 340 220 C 310 255 260 240 245 210 Z"
        fill="url(#watercolorGradLeft)"
        stroke="#AACDA5"
        strokeWidth="0.5"
      />
      <path d="M 245 210 C 275 210 305 215 340 220" stroke="#90BC8A" strokeWidth="0.75" />

      {/* Leaf 7 - Top near tip */}
      <path
        d="M 310 130 C 310 60 340 40 365 60 C 370 100 340 130 320 140 Z"
        fill="url(#watercolorGradLeft)"
        stroke="#AACDA5"
        strokeWidth="0.5"
      />
      <path d="M 320 140 C 335 110 350 85 365 60" stroke="#90BC8A" strokeWidth="0.75" />

      {/* Leaves on Branch 1 */}
      <path
        d="M 140 475 C 150 420 180 410 200 435 C 180 460 160 480 140 475 Z"
        fill="url(#watercolorGradLeft)"
        stroke="#AACDA5"
        strokeWidth="0.5"
      />
      <path
        d="M 220 410 C 250 380 270 395 280 415 C 250 435 230 425 220 410 Z"
        fill="url(#watercolorGradLeft)"
        stroke="#AACDA5"
        strokeWidth="0.5"
      />

      {/* Leaves on Branch 2 */}
      <path
        d="M 230 280 C 240 230 270 220 290 245 C 270 270 250 290 230 280 Z"
        fill="url(#watercolorGradLeft)"
        stroke="#AACDA5"
        strokeWidth="0.5"
      />
      <path
        d="M 310 220 C 340 190 360 205 370 225 C 340 245 320 235 310 220 Z"
        fill="url(#watercolorGradLeft)"
        stroke="#AACDA5"
        strokeWidth="0.5"
      />
    </svg>
  );
}

// Elegant olive/eucalyptus watercolor-style branch for the right side (extends downwards/inwards)
export function WatercolorBranchRight({ className = "", opacity = 0.05 }) {
  return (
    <svg
      viewBox="0 0 400 800"
      className={`pointer-events-none select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <defs>
        <linearGradient id="watercolorGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#DDEFD9" />
          <stop offset="50%" stopColor="#EAF6EA" />
          <stop offset="100%" stopColor="#E8F5E9" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="stemGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#AACDA5" />
          <stop offset="100%" stopColor="#DDEFD9" />
        </linearGradient>
      </defs>

      {/* Main curved stem */}
      <path
        d="M 350 20 C 330 200 280 400 120 650 C 70 730 20 750 10 760"
        stroke="url(#stemGradRight)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Side branch 1 */}
      <path
        d="M 300 300 C 270 350 220 370 180 390"
        stroke="url(#stemGradRight)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Leaves on Main Stem */}
      {/* Leaf 1 */}
      <path
        d="M 332 150 C 390 160 410 210 395 240 C 360 260 315 220 318 190 Z"
        fill="url(#watercolorGradRight)"
        stroke="#AACDA5"
        strokeWidth="0.5"
      />
      <path d="M 332 150 C 350 190 370 215 395 240" stroke="#90BC8A" strokeWidth="0.75" />

      {/* Leaf 2 */}
      <path
        d="M 315 220 C 280 260 250 260 230 230 C 260 195 305 190 315 220 Z"
        fill="url(#watercolorGradRight)"
        stroke="#AACDA5"
        strokeWidth="0.5"
      />
      <path d="M 315 220 C 285 225 260 225 230 230" stroke="#90BC8A" strokeWidth="0.75" />

      {/* Leaf 3 */}
      <path
        d="M 275 370 C 320 400 335 450 310 480 C 280 490 245 450 255 410 Z"
        fill="url(#watercolorGradRight)"
        stroke="#AACDA5"
        strokeWidth="0.5"
      />
      <path d="M 255 410 C 275 435 290 460 310 480" stroke="#90BC8A" strokeWidth="0.75" />

      {/* Leaf 4 */}
      <path
        d="M 240 450 C 190 480 160 470 145 430 C 180 400 230 420 240 450 Z"
        fill="url(#watercolorGradRight)"
        stroke="#AACDA5"
        strokeWidth="0.5"
      />
      <path d="M 240 450 C 210 445 180 440 145 430" stroke="#90BC8A" strokeWidth="0.75" />

      {/* Leaf 5 */}
      <path
        d="M 190 560 C 220 610 210 660 180 680 C 145 675 135 620 150 585 Z"
        fill="url(#watercolorGradRight)"
        stroke="#AACDA5"
        strokeWidth="0.5"
      />
      <path d="M 150 585 C 160 620 170 650 180 680" stroke="#90BC8A" strokeWidth="0.75" />

      {/* Leaf 6 */}
      <path
        d="M 155 590 C 105 620 80 610 60 580 C 90 545 140 560 155 590 Z"
        fill="url(#watercolorGradRight)"
        stroke="#AACDA5"
        strokeWidth="0.5"
      />
      <path d="M 155 590 C 125 590 95 585 60 580" stroke="#90BC8A" strokeWidth="0.75" />
    </svg>
  );
}

// Minimal outline leaf-art illustration for section headers or empty borders
export function LeafOutlineCorner({ className = "", opacity = 0.05 }) {
  return (
    <svg
      viewBox="0 0 300 300"
      className={`pointer-events-none select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <path
        d="M 10 10 Q 120 40 200 120 T 280 280"
        stroke="#84CC16"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Delicate detailed leaves */}
      {/* Leaf 1 */}
      <path
        d="M 60 25 C 90 10 110 20 120 40 C 95 55 75 45 60 25 Z"
        stroke="#10B981"
        strokeWidth="1.2"
      />
      <path d="M 60 25 C 80 30 100 35 120 40" stroke="#10B981" strokeWidth="0.8" />

      {/* Leaf 2 */}
      <path
        d="M 100 55 C 140 40 160 55 170 75 C 140 90 120 75 100 55 Z"
        stroke="#10B981"
        strokeWidth="1.2"
      />
      <path d="M 100 55 C 125 60 145 68 170 75" stroke="#10B981" strokeWidth="0.8" />

      {/* Leaf 3 */}
      <path
        d="M 140 100 C 180 90 200 110 210 130 C 180 145 160 130 140 100 Z"
        stroke="#10B981"
        strokeWidth="1.2"
      />
      <path d="M 140 100 C 165 110 185 120 210 130" stroke="#10B981" strokeWidth="0.8" />

      {/* Leaf 4 */}
      <path
        d="M 190 160 C 230 155 245 175 250 195 C 220 210 205 190 190 160 Z"
        stroke="#10B981"
        strokeWidth="1.2"
      />
      <path d="M 190 160 C 210 170 230 182 250 195" stroke="#10B981" strokeWidth="0.8" />

      {/* Opposite Leaves */}
      <path
        d="M 45 35 C 30 65 40 85 60 95 C 75 70 65 50 45 35 Z"
        stroke="#10B981"
        strokeWidth="1.2"
      />
      <path d="M 45 35 C 50 55 55 75 60 95" stroke="#10B981" strokeWidth="0.8" />

      <path
        d="M 85 75 C 70 115 80 135 100 145 C 115 120 105 100 85 75 Z"
        stroke="#10B981"
        strokeWidth="1.2"
      />
      <path d="M 85 75 C 90 100 95 120 100 145" stroke="#10B981" strokeWidth="0.8" />
    </svg>
  );
}

// Subtle, geometric Close-up Leaf Vein Pattern to use as overlay or full background sections
export function LeafVeinPattern({ className = "", opacity = 0.04 }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none ${className}`}
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L80 80 M80 0 L0 80 M40 0 L40 80 M0 40 L80 40' stroke='%2384CC16' stroke-width='0.4' stroke-opacity='0.15' fill='none'/%3E%3Cpath d='M20 0 L40 20 L60 0 M20 80 L40 60 L60 80 M0 20 L20 40 L0 60 M80 20 L60 40 L80 60' stroke='%2310B981' stroke-width='0.3' stroke-opacity='0.1' fill='none'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }}
    />
  );
}

// Elegant wavy organic contour lines representing natural landscape topographies or river currents
export function OrganicWaveSeparator({ className = "", opacity = 0.06 }) {
  return (
    <svg
      viewBox="0 0 1440 200"
      className={`pointer-events-none select-none w-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <path
        d="M0 80 C 240 140, 480 40, 720 110 C 960 180, 1200 60, 1440 120"
        stroke="#AACDA5"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M0 100 C 240 160, 480 60, 720 130 C 960 200, 1200 80, 1440 140"
        stroke="#AACDA5"
        strokeWidth="0.8"
        strokeDasharray="4 4"
        strokeLinecap="round"
      />
      <path
        d="M0 120 C 240 180, 480 80, 720 150 C 960 220, 1200 100, 1440 160"
        stroke="#90BC8A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M0 140 C 240 200, 480 100, 720 170 C 960 240, 1200 120, 1440 180"
        stroke="#DDEFD9"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Single abstract soft watercolor leaf floating accent
export function WatercolorLeafSingle({ className = "", opacity = 0.05, rotate = 0 }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`pointer-events-none select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity, transform: `rotate(${rotate}deg)` }}
    >
      <defs>
        <radialGradient id="softLeafGrad" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
          <stop offset="0%" stopColor="#DDEFD9" />
          <stop offset="70%" stopColor="#EAF6EA" />
          <stop offset="100%" stopColor="#E8F5E9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path
        d="M 10 100 Q 80 20 170 90 Q 90 170 10 100 Z"
        fill="url(#softLeafGrad)"
        stroke="#AACDA5"
        strokeWidth="0.5"
      />
      <path d="M 10 100 Q 90 95 170 90" stroke="#90BC8A" strokeWidth="1" strokeOpacity="0.5" />
    </svg>
  );
}
