"use client";

import {
  Building2,
  Factory,
  Zap,
  Fuel,
  TrainTrack,
  RadioTower,
  Sprout,
  Home,
  Landmark,
  Droplets,
  ShieldCheck,
} from "lucide-react";

/**
 * Distinctive wordmark-style logo cards for each institutional client.
 * Uses each institution's known brand color + a sector emblem + real wordmark
 * (typographic treatment) — no external logo dependency, no IP risk.
 * Consistent 16:9 tile geometry so the grid reads as a proper logo wall.
 */

// name-slug -> visual identity
const IDENTITY = {
  nhai: {
    label: "NHAI",
    subtitle: "National Highways Authority of India",
    color: "#c62828",
    bg: "#fef2f2",
    ring: "#fecaca",
    icon: Landmark,
  },
  ntpc: {
    label: "NTPC",
    subtitle: "NTPC Limited",
    color: "#1e40af",
    bg: "#eff6ff",
    ring: "#bfdbfe",
    icon: Zap,
  },
  bhel: {
    label: "BHEL",
    subtitle: "Bharat Heavy Electricals Ltd",
    color: "#0f766e",
    bg: "#ecfdf5",
    ring: "#a7f3d0",
    icon: Factory,
  },
  iocl: {
    label: "IndianOil",
    subtitle: "Indian Oil Corporation Ltd",
    color: "#dc2626",
    bg: "#fef2f2",
    ring: "#fecaca",
    icon: Fuel,
  },
  nfl: {
    label: "NFL",
    subtitle: "National Fertilizers Ltd",
    color: "#166534",
    bg: "#f0fdf4",
    ring: "#bbf7d0",
    icon: Sprout,
  },
  "indian-railways": {
    label: "Indian Railways",
    subtitle: "Ministry of Railways",
    color: "#7c2d12",
    bg: "#fef7ed",
    ring: "#fed7aa",
    icon: TrainTrack,
  },
  nbcc: {
    label: "NBCC",
    subtitle: "A Navratna CPSE",
    color: "#0369a1",
    bg: "#f0f9ff",
    ring: "#bae6fd",
    icon: Building2,
  },
  gsecl: {
    label: "GSECL",
    subtitle: "Gujarat State Electricity Corp.",
    color: "#a16207",
    bg: "#fefce8",
    ring: "#fde68a",
    icon: Zap,
  },
  tcil: {
    label: "TCIL",
    subtitle: "Telecom Consultants India Ltd",
    color: "#1d4ed8",
    bg: "#eff6ff",
    ring: "#bfdbfe",
    icon: RadioTower,
  },
  "rajasthan-housing-board": {
    label: "RHB",
    subtitle: "Rajasthan Housing Board",
    color: "#b91c1c",
    bg: "#fef2f2",
    ring: "#fecaca",
    icon: Home,
  },
  "nagar-nigam-varanasi": {
    label: "Nagar Nigam",
    subtitle: "Varanasi Municipal Corporation",
    color: "#c2410c",
    bg: "#fff7ed",
    ring: "#fed7aa",
    icon: Landmark,
  },
  "water-resources-up": {
    label: "Jal Shakti",
    subtitle: "Water Resources Dept · UP",
    color: "#0e7490",
    bg: "#ecfeff",
    ring: "#a5f3fc",
    icon: Droplets,
  },
  "vda-varanasi": {
    label: "VDA",
    subtitle: "Varanasi Development Authority",
    color: "#7e22ce",
    bg: "#faf5ff",
    ring: "#e9d5ff",
    icon: Building2,
  },
};

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/\s*·\s*/g, "-")
    .replace(/\(.*?\)/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function ClientLogo({ name, className = "", size = "md" }) {
  // Match on the slugified name.
  const key = slugify(name);
  const id = IDENTITY[key] || {
    label: name.replace(/\(.*?\)/g, "").trim(),
    subtitle: name,
    color: "#065f46",
    bg: "#ecfdf5",
    ring: "#a7f3d0",
    icon: ShieldCheck,
  };
  const Icon = id.icon;

  const sizes = {
    sm: { tile: "h-20", label: "text-lg", sub: "text-[9px]", iconBox: "w-8 h-8", icon: 14 },
    md: { tile: "h-24 md:h-28", label: "text-xl md:text-2xl", sub: "text-[10px] md:text-xs", iconBox: "w-10 h-10", icon: 18 },
    lg: { tile: "h-32", label: "text-2xl md:text-3xl", sub: "text-xs", iconBox: "w-12 h-12", icon: 22 },
  };
  const s = sizes[size] || sizes.md;

  return (
    <div
      className={`relative overflow-hidden rounded-xl border transition-all duration-500 flex items-center gap-3 px-4 ${s.tile} ${className}`}
      style={{
        backgroundColor: id.bg,
        borderColor: id.ring,
      }}
      data-testid={`client-logo-${key}`}
      aria-label={id.subtitle}
    >
      <div
        className={`shrink-0 rounded-lg flex items-center justify-center ${s.iconBox}`}
        style={{ backgroundColor: id.color }}
      >
        <Icon size={s.icon} className="text-white" />
      </div>
      <div className="min-w-0">
        <div
          className={`font-serif font-bold leading-none tracking-tight ${s.label}`}
          style={{ color: id.color }}
        >
          {id.label}
        </div>
        <div
          className={`uppercase tracking-[0.14em] font-semibold ${s.sub} mt-1 text-stone-500 truncate`}
        >
          {id.subtitle}
        </div>
      </div>
    </div>
  );
}
