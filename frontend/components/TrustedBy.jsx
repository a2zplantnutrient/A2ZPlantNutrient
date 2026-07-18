"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn, Stagger, StaggerItem } from "@/components/Motion";
import { TRUSTED_BY } from "@/lib/mock";

// Palette by sector chip (visual only, name-based cards since we don't own client logos)
const sectorPalette = {
  Government: "bg-emerald-50 text-emerald-800 border-emerald-100",
  Municipal: "bg-emerald-50 text-emerald-800 border-emerald-100",
  "Navratna CPSE": "bg-amber-50 text-amber-800 border-amber-100",
};

function chipClass(sector) {
  if (sector?.startsWith("PSU")) return "bg-amber-50 text-amber-800 border-amber-100";
  return sectorPalette[sector] || "bg-emerald-50 text-emerald-800 border-emerald-100";
}

// Two initials extractor for the client badge (e.g. "Indian Railways" -> "IR")
function initialsOf(name) {
  return name
    .replace(/\(.*?\)/g, "")
    .split(/[\s·]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function TrustedBy({
  compact = false,
  showRequestCta = true,
  onRequestProfile,
  title = "Trusted by India's institutions",
  eyebrow = "Government · PSU · Corporate",
}) {
  return (
    <section
      className="py-16 md:py-20 bg-white border-y border-stone-200"
      id="trusted-by"
      data-testid="trusted-by-section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="max-w-3xl">
          <p className="uppercase tracking-[0.25em] text-emerald-700 text-xs font-semibold">
            {eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-emerald-950 font-semibold mt-3 leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-stone-600 leading-relaxed">
            A snapshot of the government agencies, PSUs, municipal bodies and institutional
            clients A2Z Plant Nutrient has executed horticulture EPC contracts for.
          </p>
        </FadeIn>

        <Stagger
          className={`mt-10 grid ${
            compact
              ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
              : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          }`}
          data-testid="trusted-by-grid"
        >
          {TRUSTED_BY.map((c) => (
            <StaggerItem key={c.name}>
              <div
                className="h-full p-4 rounded-2xl border border-stone-200 bg-white hover:border-emerald-300 hover:shadow-md transition-all group"
                data-testid={`trust-${c.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-900 text-white font-serif text-sm font-bold flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {initialsOf(c.name)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-serif text-emerald-950 font-semibold text-sm truncate">
                      {c.name}
                    </div>
                    <span
                      className={`inline-block mt-0.5 text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded-full border ${chipClass(
                        c.sector
                      )}`}
                    >
                      {c.sector.split(" · ")[0]}
                    </span>
                  </div>
                </div>
                {!compact && c.context && (
                  <p className="mt-3 text-xs text-stone-600 leading-snug line-clamp-3">
                    {c.context}
                  </p>
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {showRequestCta && (
          <FadeIn className="mt-10 rounded-2xl bg-emerald-50/60 border border-emerald-100 p-6 md:p-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="font-serif text-xl text-emerald-950 font-semibold">
                Evaluating vendors for a horticulture tender?
              </div>
              <p className="text-sm text-stone-600 mt-1">
                Instantly download the official A2Z Company Profile PDF — ISO certificates,
                client list and PO summary in one file.
              </p>
            </div>
            <Button
              onClick={onRequestProfile}
              className="bg-emerald-700 hover:bg-emerald-800 rounded-full px-6"
              data-testid="trusted-by-request-btn"
            >
              <FileText size={16} className="mr-2" /> Download Company Profile
            </Button>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
