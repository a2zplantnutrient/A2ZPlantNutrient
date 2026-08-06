"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  MapPin,
  FileText,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn, Stagger, StaggerItem } from "@/components/Motion";
import { useEffect, useState } from "react";

// Actual institutional & private client logos — files live in /public/logos/
const TRUSTED_LOGOS = [
  { name: "NHAI", alt: "National Highways Authority of India", src: "/logos/nhai-logo.png", x: 56, y: -74, size: 139 },
  { name: "NTPC", alt: "NTPC Limited", src: "/logos/ntpc-logo.png", x: -321, y: 27, size: 110 },
  { name: "NFL", alt: "National Fertilizers Limited", src: "/logos/nfl-logo.png", x: 296, y: -84, size: 146 },
  { name: "BHEL", alt: "Bharat Heavy Electricals Limited", src: "/logos/bhel-logo.png", x: 64, y: -202, size: 122 },
  { name: "IndianOil", alt: "Indian Oil Corporation Limited", src: "/logos/indian-oil-logo.png", x: -180, y: -152, size: 107 },
  { name: "Indian Railways", alt: "Indian Railways", src: "/logos/indian-railways-logo.png", x: -124, y: -42, size: 148 },
  { name: "NBCC", alt: "National Buildings Construction Corporation", src: "/logos/nbcc-logo.png", x: 78, y: 63, size: 139 },
  { name: "GSECL", alt: "Gujarat State Electricity Corporation Ltd.", src: "/logos/gsecl.png", x: -246, y: -56, size: 112 },
  { name: "TCIL", alt: "Telecommunications Consultants India Ltd.", src: "/logos/tcil-logo.png", x: 170, y: -136, size: 124 },
  { name: "Rajasthan Housing Board", alt: "Rajasthan Housing Board", src: "/logos/rhb-logo.png", x: -55, y: -156, size: 132 },
  { name: "Nagar Nigam Varanasi", alt: "Nagar Nigam Varanasi", src: "/logos/nagar-nigam-varanasi.jpg", x: -98, y: 69, size: 96 },
  { name: "Chhavni Parishad Varanasi", alt: "Cantonment Board Varanasi", src: "/logos/chavani-logo.png", x: 69, y: 192, size: 126 },
  { name: "Govt of Uttar Pradesh", alt: "Government of Uttar Pradesh", src: "/logos/up-logo.png", x: -21, y: 122, size: 100 },
  { name: "Sewa International", alt: "Sewa International", src: "/logos/sewa-international.png", x: 185, y: 128, size: 124 },
  { name: "CSIL", alt: "C. S. Intraconstruction Limited", src: "/logos/csil.png", x: 179, y: -8, size: 131 },
  { name: "Sunbeam", alt: "Sunbeam Group of Educational Institutions", src: "/logos/sunbeam.png", x: 295, y: 59, size: 134 },
  { name: "Shaparth", alt: "Shaparth", src: "/logos/shapearth.png", x: -20, y: 11, size: 112 },
  { name: "Shivalik", alt: "Shivalik", src: "/logos/shivalik.png", x: -209, y: 76, size: 136 },
  { name: "Castillo", alt: "Castillo", src: "/logos/castillo.png", x: -118, y: 164, size: 103 },
];

export default function TrustedBy({ onRequestProfile }) {
  const [scale, setScale] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      const width = window.innerWidth;
      // Adjust scale to ensure the 800px wide cluster fits
      if (width < 640) setScale(0.45);
      else if (width < 768) setScale(0.65);
      else if (width < 1024) setScale(0.85);
      else setScale(1);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-emerald-950 text-white py-20 md:py-28"
      id="trusted-by"
      data-testid="trusted-by-section"
    >
      {/* Ambient gradient glows — pure emerald palette */}
      <div
        aria-hidden
        className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-10 -right-32 w-96 h-96 rounded-full bg-amber-300/10 blur-3xl pointer-events-none"
      />
      {/* Grid dot texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Eyebrow + headline + Description */}
        <FadeIn className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.24em] bg-white/10 text-amber-200 px-3 py-1.5 rounded-full ring-1 ring-white/10">
              <Sparkles size={10} /> Since 2021
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.24em] bg-white/10 text-emerald-200 px-3 py-1.5 rounded-full ring-1 ring-white/10">
              <ShieldCheck size={10} /> Pan-India Operations
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
            The Institutions That Build India{" "}
            <span className="italic text-amber-300">Trust A2Z</span> With Their
            Green Mandate.
          </h2>
          <p className="mt-5 text-lg text-emerald-100/80 leading-relaxed max-w-2xl">
            From National Highway Corridors To Navratna CPSE Campuses — A2Z Plant
            Nutrient Is The Preferred Horticulture EPC Partner For India&apos;s
            Most-Scrutinised Procurement Teams.
          </p>
        </FadeIn>

        {/* Animated Premium Logo Scatter Layout */}
        <div className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center mt-16 md:mt-24 mb-10">
          <div 
            className="absolute w-[800px] h-[500px] flex items-center justify-center transition-transform duration-300 origin-center"
            style={{ transform: `scale(${scale})` }}
          >
            {/* Scattered Logos */}
            {isMounted && TRUSTED_LOGOS.map((logo, i) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ 
                  delay: i * 0.05, 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 15 
                }}
                className="absolute z-10"
                style={{
                  width: logo.size,
                  height: logo.size,
                  x: logo.x,
                  y: logo.y,
                  // offset half of size so x/y represents the center of the circle
                  marginLeft: -(logo.size / 2),
                  marginTop: -(logo.size / 2)
                }}
              >
                <motion.div
                  animate={{ 
                    y: [-6, 6, -6],
                    rotate: [-2, 2, -2]
                  }}
                  transition={{ 
                    duration: 5 + (i % 3), 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: (i % 2) * 0.5 
                  }}
                  className="w-full h-full rounded-full bg-white hover:scale-105 shadow-[0_8px_30px_rgb(0,0,0,0.4)] flex items-center justify-center overflow-hidden p-5 transition-all duration-300 group cursor-pointer"
                  title={logo.alt}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Using standard img with mix-blend-multiply so white backgrounds merge seamlessly with the white circle */}
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Proof numbers row */}
        <FadeIn delay={0.1} className="grid grid-cols-3 md:grid-cols-6 gap-6 py-8 border-y border-white/10 z-30 relative">
          {[
            { n: "19+", l: "Institutional Clients" },
            { n: "100+", l: "Projects Delivered" },
            { n: "6+", l: "States Served" },
            { n: "10L+", l: "Sq. Ft. Transformed" },
            { n: "ISO", l: "9001 · 14001" },
            { n: "DPIIT", l: "Startup India" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-serif text-2xl md:text-3xl text-amber-300 font-semibold">
                {s.n}
              </div>
              <div className="text-[10px] uppercase tracking-[0.16em] text-emerald-200/70 mt-1 leading-tight">
                {s.l}
              </div>
            </div>
          ))}
        </FadeIn>

        {/* Featured project + CTA — inside the dark section for continuity */}
        <FadeIn className="mt-14 z-30 relative">
          <div className="rounded-3xl bg-white/[0.04] ring-1 ring-white/10 backdrop-blur p-8 md:p-10 grid md:grid-cols-[1.4fr_1fr] gap-8 items-center shadow-2xl">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.22em] bg-amber-400 text-emerald-950 px-3 py-1.5 rounded-full">
                  <MapPin size={10} /> Featured Delivery
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold leading-tight">
                10,000+ Plants Installed Along The Ayodhya–Basti National Highway.
              </h3>
              <p className="mt-3 text-emerald-100/75 leading-relaxed">
                Delivered for the National Highways Authority of India with
                survival-linked maintenance — one of a dozen active mandates A2Z
                executes for the country&apos;s ministries and Navratna CPSEs.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <div>
                  <div className="font-serif text-2xl text-amber-300 font-semibold">
                    10,000+
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-emerald-200/70">
                    Plants Installed
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                onClick={onRequestProfile}
                className="bg-amber-400 hover:bg-amber-500 text-emerald-950 rounded-full px-7 py-6 font-semibold shadow-lg shadow-amber-400/20"
                data-testid="trusted-by-request-btn"
              >
                <FileText size={16} className="mr-2" /> Download Company Profile
              </Button>
              <a
                href="/projects"
                className="text-center text-sm text-emerald-200 hover:text-amber-200 font-medium inline-flex items-center justify-center gap-1 transition-colors"
              >
                View all named projects <ArrowRight size={14} />
              </a>
              <p className="text-xs text-emerald-200/60 mt-2 leading-relaxed text-center">
                Full A2Z profile with ISO certificates, client list &amp; PO
                summary — in one PDF, in seconds.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}