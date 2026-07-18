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

/**
 * TrustedBy — premium dark-emerald logo wall.
 * Uses actual institutional client logos (Govt / PSU / Municipal) on light
 * tiles that read cleanly against the dark emerald surface.
 */

// Actual institutional & private client logos — files live in /public/logos/
const TRUSTED_LOGOS = [
  { name: "NHAI", alt: "National Highways Authority of India", src: "/logos/nhai.png" },
  { name: "NTPC", alt: "NTPC Limited", src: "/logos/ntpc.png" },
  { name: "NFL", alt: "National Fertilizers Limited", src: "/logos/nfl.jpg" },
  { name: "BHEL", alt: "Bharat Heavy Electricals Limited", src: "/logos/bhel.png" },
  { name: "IndianOil", alt: "Indian Oil Corporation Limited", src: "/logos/iocl.png" },
  { name: "Indian Railways", alt: "Indian Railways", src: "/logos/indian-railways.png" },
  { name: "NBCC", alt: "National Buildings Construction Corporation", src: "/logos/nbcc.png" },
  { name: "GSECL", alt: "Gujarat State Electricity Corporation Ltd.", src: "/logos/gsecl.jpg" },
  { name: "TCIL", alt: "Telecommunications Consultants India Ltd.", src: "/logos/tcil.png" },
  { name: "Rajasthan Housing Board", alt: "Rajasthan Housing Board", src: "/logos/rajasthan-housing-board.jpg" },
  { name: "Nagar Nigam Varanasi", alt: "Nagar Nigam Varanasi", src: "/logos/nagar-nigam-varanasi.jpg" },
  { name: "Chhavni Parishad Varanasi", alt: "Cantonment Board Varanasi", src: "/logos/chhavni-parishad-varanasi.png" },
  { name: "Govt of Uttar Pradesh", alt: "Government of Uttar Pradesh", src: "/logos/up-govt.jpeg" },
  { name: "Sewa International", alt: "Sewa International", src: "/logos/sewa-international.png" },
  { name: "CSIL", alt: "C. S. Intraconstruction Limited", src: "/logos/csil.jpeg" },
  { name: "Sunbeam", alt: "Sunbeam Group of Educational Institutions", src: "/logos/sunbeam.jpeg" },
  { name: "Shaparth", alt: "Shaparth — Dream · Innovate · Build", src: "/logos/shaparth.jpeg" },
  { name: "Shivalik", alt: "Shivalik", src: "/logos/shivalik.jpeg" },
  { name: "Castillo", alt: "Castillo", src: "/logos/castillo.jpeg" },
];

export default function TrustedBy({ onRequestProfile }) {
  return (
    <section
      className="relative overflow-hidden bg-emerald-950 text-white py-20 md:py-28"
      id="trusted-by"
      data-testid="trusted-by-section"
    >
      {/* Ambient gradient glows — pure emerald palette */}
      <div
        aria-hidden
        className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-10 -right-32 w-96 h-96 rounded-full bg-amber-300/10 blur-3xl"
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
        {/* Eyebrow + headline */}
        <FadeIn className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.24em] bg-white/10 text-amber-200 px-3 py-1.5 rounded-full ring-1 ring-white/10">
              <Sparkles size={10} /> Since 2021
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.24em] bg-white/10 text-emerald-200 px-3 py-1.5 rounded-full ring-1 ring-white/10">
              <ShieldCheck size={10} /> Pan-India Delivery
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
            The institutions that build India{" "}
            <span className="italic text-amber-300">trust A2Z</span> with their
            green mandate.
          </h2>
          <p className="mt-5 text-lg text-emerald-100/80 leading-relaxed max-w-2xl">
            From national highway corridors to Navratna CPSE campuses — A2Z Plant
            Nutrient is the preferred horticulture EPC partner for India&apos;s
            most-scrutinised procurement teams.
          </p>
        </FadeIn>

        {/* Proof numbers row */}
        <FadeIn delay={0.1} className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-6 py-6 border-y border-white/10">
          {[
            { n: "19+", l: "Institutional Clients" },
            { n: "100+", l: "Projects Delivered" },
            { n: "6+", l: "States Served" },
            { n: "10L+", l: "Sq. Ft. Transformed" },
            { n: "ISO", l: "9001 · 14001" },
            { n: "DPIIT", l: "Startup India" },
          ].map((s, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="font-serif text-2xl md:text-3xl text-amber-300 font-semibold">
                {s.n}
              </div>
              <div className="text-[10px] uppercase tracking-[0.16em] text-emerald-200/70 mt-1 leading-tight">
                {s.l}
              </div>
            </div>
          ))}
        </FadeIn>

        {/* Logo wall — actual institutional client logos on light tiles */}
        <Stagger
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4"
          data-testid="trusted-by-grid"
        >
          {TRUSTED_LOGOS.map((c) => (
            <StaggerItem key={c.name}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                data-testid={`trust-${c.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="group relative h-28 md:h-32 rounded-2xl bg-white ring-1 ring-white/10 hover:ring-amber-300/70 shadow-sm hover:shadow-lg transition-all duration-500 flex items-center justify-center overflow-hidden"
                title={c.alt}
                aria-label={c.alt}
              >
                <div className="relative w-full h-full p-4 md:p-5">
                  <Image
                    src={c.src}
                    alt={c.alt}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 16vw"
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Featured project + CTA — inside the dark section for continuity */}
        <FadeIn className="mt-14">
          <div className="rounded-3xl bg-white/[0.04] ring-1 ring-white/10 backdrop-blur p-8 md:p-10 grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.22em] bg-amber-400 text-emerald-950 px-3 py-1.5 rounded-full">
                  <MapPin size={10} /> Featured Delivery
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold leading-tight">
                10,000+ plants installed along the Ayodhya–Basti national highway.
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
                <div className="w-px h-10 bg-white/15" />
                <div>
                  <div className="font-serif text-2xl text-amber-300 font-semibold">
                    Native
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-emerald-200/70">
                    Species Palette
                  </div>
                </div>
                <div className="w-px h-10 bg-white/15" />
                <div>
                  <div className="font-serif text-2xl text-amber-300 font-semibold">
                    3 yr
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-emerald-200/70">
                    Survival AMC
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                onClick={onRequestProfile}
                className="bg-amber-400 hover:bg-amber-500 text-emerald-950 rounded-full px-7 py-6 font-semibold"
                data-testid="trusted-by-request-btn"
              >
                <FileText size={16} className="mr-2" /> Download Company Profile
              </Button>
              <a
                href="/projects"
                className="text-center text-sm text-emerald-200 hover:text-amber-200 font-medium inline-flex items-center justify-center gap-1"
              >
                View all named projects <ArrowRight size={14} />
              </a>
              <p className="text-xs text-emerald-200/60 mt-2 leading-relaxed">
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
