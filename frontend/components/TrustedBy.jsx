"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  MapPin,
  FileText,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/Motion";
import { useEffect, useState } from "react";

// Actual institutional & private client logos
const TRUSTED_LOGOS = [
  { name: "NHAI", alt: "National Highways Authority of India", src: "/logos/nhai-logo.png", x: -280, y: -180, size: 130 },
  { name: "NTPC", alt: "NTPC Limited", src: "/logos/ntpc-logo.png", x: -160, y: -210, size: 100 },
  { name: "NFL", alt: "National Fertilizers Limited", src: "/logos/nfl-logo.png", x: -400, y: -90, size: 140 },
  { name: "BHEL", alt: "Bharat Heavy Electricals Limited", src: "/logos/bhel-logo.png", x: -250, y: -60, size: 110 },
  { name: "IndianOil", alt: "Indian Oil Corporation Limited", src: "/logos/indian-oil-logo.png", x: -420, y: 50, size: 150 },
  { name: "Indian Railways", alt: "Indian Railways", src: "/logos/indian-railways-logo.png", x: -280, y: 60, size: 120 },
  { name: "NBCC", alt: "National Buildings Construction Corporation", src: "/logos/nbcc-logo.png", x: -150, y: 90, size: 130 },
  { name: "GSECL", alt: "Gujarat State Electricity Corporation Ltd.", src: "/logos/gsecl.png", x: -350, y: 190, size: 120 },
  { name: "TCIL", alt: "Telecommunications Consultants India Ltd.", src: "/logos/tcil-logo.png", x: -200, y: 220, size: 140 },
  { name: "Rajasthan Housing Board", alt: "Rajasthan Housing Board", src: "/logos/rhb-logo.png", x: -70, y: 240, size: 100 },
  // { name: "Nagar Nigam Varanasi", alt: "Nagar Nigam Varanasi", src: "/logos/nagar-nigam-varanasi.jpg", x: 180, y: -200, size: 120 },
  { name: "Chhavni Parishad Varanasi", alt: "Cantonment Board Varanasi", src: "/logos/chavani-logo.png", x: 300, y: -160, size: 140 },
  { name: "Govt of Uttar Pradesh", alt: "Government of Uttar Pradesh", src: "/logos/up-logo.png", x: 420, y: -80, size: 110 },
  { name: "Sewa International", alt: "Sewa International", src: "/logos/sewa-international.png", x: 180, y: -60, size: 130 },
  { name: "CSIL", alt: "C. S. Intraconstruction Limited", src: "/logos/csil.png", x: 320, y: -20, size: 100 },
  { name: "Sunbeam", alt: "Sunbeam Group of Educational Institutions", src: "/logos/sunbeam.png", x: 440, y: 40, size: 150 },
  { name: "Shaparth", alt: "Shaparth", src: "/logos/shapearth.png", x: 160, y: 100, size: 120 },
  { name: "Shivalik", alt: "Shivalik", src: "/logos/shivalik.png", x: 300, y: 120, size: 110 },
  { name: "Castillo", alt: "Castillo", src: "/logos/castillo.png", x: 200, y: 220, size: 130 },
];

export default function TrustedBy({ onRequestProfile }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Adjust scale to ensure the 1000px wide cluster fits on smaller screens
      if (width < 640) setScale(0.4);
      else if (width < 768) setScale(0.6);
      else if (width < 1024) setScale(0.8);
      else setScale(1);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-[#050505] text-white py-20 md:py-28"
      id="trusted-by"
      data-testid="trusted-by-section"
    >
      {/* Subtle ambient glows for premium look */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"
      />
      
      <div className="relative max-w-[1400px] mx-auto px-6 flex flex-col items-center">
        
        {/* Animated Premium Logo Scatter Layout */}
        <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center mt-10 md:mt-0">
          <div 
            className="absolute w-[1000px] h-[600px] flex items-center justify-center transition-transform duration-300 origin-center"
            style={{ transform: `scale(${scale})` }}
          >
            {/* Center Text block */}
            <div className="relative z-20 text-center w-[350px]">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight"
              >
                The Institutions That Build India <span className="italic text-emerald-400">Trust A2Z</span> With Their Green Mandate.
              </motion.h2>
            </div>

            {/* Scattered Logos */}
            {TRUSTED_LOGOS.map((logo, i) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
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
                    y: [-8, 8, -8],
                    rotate: [-1, 1, -1]
                  }}
                  transition={{ 
                    duration: 4 + (i % 3), 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: (i % 2) * 0.5 
                  }}
                  className="w-full h-full rounded-full bg-[#111111] hover:bg-[#1a1a1a] shadow-xl border border-white/5 flex items-center justify-center overflow-hidden p-6 transition-colors duration-300 group cursor-pointer"
                  title={logo.alt}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                      sizes={`${logo.size}px`}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Featured project + CTA — integrated elegantly below the cluster */}
        <FadeIn className="mt-10 md:mt-20 w-full max-w-5xl z-30 relative">
          <div className="rounded-3xl bg-[#0a0a0a] border border-white/10 p-8 md:p-10 grid md:grid-cols-[1.4fr_1fr] gap-8 items-center shadow-2xl">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.22em] bg-emerald-900/50 text-emerald-400 px-3 py-1.5 rounded-full border border-emerald-500/20">
                  <MapPin size={10} /> Featured Delivery
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold leading-tight text-white/90">
                10,000+ Plants Installed Along The Ayodhya–Basti National Highway.
              </h3>
              <p className="mt-3 text-white/50 leading-relaxed">
                Delivered for the National Highways Authority of India with
                survival-linked maintenance — one of a dozen active mandates A2Z
                executes for the country&apos;s ministries and Navratna CPSEs.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <div>
                  <div className="font-serif text-2xl text-emerald-400 font-semibold">
                    10,000+
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-white/40">
                    Plants Installed
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                onClick={onRequestProfile}
                className="bg-emerald-500 hover:bg-emerald-600 text-black rounded-full px-7 py-6 font-semibold shadow-lg shadow-emerald-500/20 transition-all"
                data-testid="trusted-by-request-btn"
              >
                <FileText size={16} className="mr-2" /> Download Company Profile
              </Button>
              <a
                href="/projects"
                className="text-center text-sm text-white/60 hover:text-white font-medium inline-flex items-center justify-center gap-1 transition-colors"
              >
                View all named projects <ArrowRight size={14} />
              </a>
              <p className="text-xs text-white/30 mt-2 leading-relaxed text-center">
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