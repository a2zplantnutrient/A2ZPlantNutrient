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
import { Button } from "@/components/ui/button";
import { FadeIn, Stagger, StaggerItem } from "@/components/Motion";
import ClientLogo from "@/components/ClientLogo";
import { TRUSTED_BY, CERTIFICATIONS } from "@/lib/mock";

// TrustedBy — premium logo wall for institutional clients.
// Uses distinctive wordmark logo cards (see ClientLogo.jsx) with each PSU's
// brand color, sector emblem and real name. Framed with a trust rail on top
// and a proof band below.
export default function TrustedBy({ onRequestProfile }) {
  return (
    <section
      className="relative py-20 md:py-24 bg-white border-y border-stone-200 overflow-hidden"
      id="trusted-by"
      data-testid="trusted-by-section"
    >
      {/* Subtle background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #065f46 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-emerald-100/40 blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-amber-100/40 blur-3xl -z-0" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-end mb-12">
          <FadeIn>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.22em] bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full">
                <Sparkles size={10} /> Since 2021
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.22em] bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-full">
                <ShieldCheck size={10} /> Pan-India Delivery
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-emerald-950 font-semibold leading-[1.05] tracking-tight">
              The institutions that build India{" "}
              <span className="italic text-emerald-700">trust A2Z</span> with
              their green mandate.
            </h2>
            <p className="mt-5 text-lg text-stone-600 leading-relaxed max-w-2xl">
              From national highway corridors to Navratna CPSE campuses — A2Z Plant
              Nutrient is the preferred horticulture EPC partner for India&apos;s
              most-scrutinised procurement teams.
            </p>
          </FadeIn>

          {/* Right rail — proof numbers */}
          <FadeIn delay={0.15}>
            <div className="rounded-3xl bg-gradient-to-br from-emerald-950 to-emerald-900 text-white p-7 shadow-xl">
              <div className="flex items-center gap-2 text-amber-300 text-[10px] uppercase tracking-[0.22em] font-bold mb-4">
                <Award size={12} /> Proof Points
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="font-serif text-3xl md:text-4xl text-amber-300 font-semibold">
                    12+
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-emerald-200/85 mt-1 leading-tight">
                    Institutional Clients
                  </div>
                </div>
                <div>
                  <div className="font-serif text-3xl md:text-4xl text-amber-300 font-semibold">
                    100+
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-emerald-200/85 mt-1 leading-tight">
                    Projects Delivered
                  </div>
                </div>
                <div>
                  <div className="font-serif text-3xl md:text-4xl text-amber-300 font-semibold">
                    6+
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-emerald-200/85 mt-1 leading-tight">
                    States Served
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-5 border-t border-white/15 flex flex-wrap gap-1.5">
                {CERTIFICATIONS.map((c) => (
                  <span
                    key={c.code}
                    className="text-[10px] font-semibold px-2 py-1 rounded-full bg-white/10 text-white ring-1 ring-white/15"
                  >
                    {c.code}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Logo wall */}
        <Stagger
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          data-testid="trusted-by-grid"
        >
          {TRUSTED_BY.map((c) => (
            <StaggerItem key={c.name}>
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                data-testid={`trust-${c.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <ClientLogo name={c.name} className="hover:shadow-lg" />
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Featured project callout */}
        <FadeIn className="mt-12">
          <div className="rounded-3xl bg-gradient-to-r from-emerald-50 via-white to-amber-50 border border-emerald-100 p-8 md:p-10 grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.22em] bg-emerald-700 text-white px-3 py-1.5 rounded-full">
                  <MapPin size={10} /> Featured Delivery
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-emerald-950 font-semibold leading-tight">
                10,000+ plants installed along the Ayodhya–Basti national highway.
              </h3>
              <p className="mt-3 text-stone-600 leading-relaxed">
                Delivered for the National Highways Authority of India with
                survival-linked maintenance — one of a dozen active mandates
                A2Z executes for the country&apos;s ministries and Navratna CPSEs.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
                <div>
                  <div className="font-serif text-2xl text-emerald-800 font-semibold">
                    10,000+
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-stone-500">
                    Plants Installed
                  </div>
                </div>
                <div className="w-px h-10 bg-stone-200" />
                <div>
                  <div className="font-serif text-2xl text-emerald-800 font-semibold">
                    Native
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-stone-500">
                    Species Palette
                  </div>
                </div>
                <div className="w-px h-10 bg-stone-200" />
                <div>
                  <div className="font-serif text-2xl text-emerald-800 font-semibold">
                    3 yr
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-stone-500">
                    Survival AMC
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                onClick={onRequestProfile}
                className="bg-emerald-700 hover:bg-emerald-800 rounded-full px-7 py-6 font-semibold"
                data-testid="trusted-by-request-btn"
              >
                <FileText size={16} className="mr-2" /> Download Company Profile
              </Button>
              <a
                href="/projects"
                className="text-center text-sm text-emerald-700 hover:text-emerald-900 font-medium inline-flex items-center justify-center gap-1"
              >
                View all named projects <ArrowRight size={14} />
              </a>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                Get the full A2Z profile with ISO certificates, client list &amp; PO
                summary — in one PDF, in seconds.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
