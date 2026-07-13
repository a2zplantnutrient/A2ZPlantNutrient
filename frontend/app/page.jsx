"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sprout,
  Hammer,
  Leaf,
  Sparkles,
  ShieldCheck,
  Award,
  Building2,
  Factory,
  Users,
  CalendarDays,
  User as UserIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FadeIn, Stagger, StaggerItem, ScaleIn, FloatingLeaf } from "@/components/Motion";
import Counter from "@/components/Counter";
import {
  HERO,
  FEATURES,
  ABOUT_IMAGES,
  SERVICES,
  STATS,
  CERTIFICATIONS,
  PROJECTS,
  CLIENTS,
  LEADERSHIP,
  CRAFTMYGARDEN,
  COMPANY,
} from "@/lib/mock";
import { fetchBlogs } from "@/lib/api";

const iconMap = { Sprout, Hammer, Leaf, Sparkles };

export default function HomePage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs()
      .then((data) => setBlogs((data || []).slice(0, 3)))
      .catch(() => {});
  }, []);

  return (
    <div className="bg-stone-50" data-testid="home-page">
      {/* HERO */}
      <section className="relative overflow-hidden" data-testid="hero-section">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-stone-50 to-amber-50" />
        <motion.div
          className="absolute top-20 -left-24 w-96 h-96 rounded-full bg-emerald-200/40 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 -right-24 w-96 h-96 rounded-full bg-amber-200/40 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <FloatingLeaf className="absolute top-14 right-[12%] text-emerald-300/50 hidden md:block">
          <Leaf size={48} />
        </FloatingLeaf>
        <FloatingLeaf className="absolute bottom-20 left-[8%] text-emerald-400/40 hidden md:block" duration={11} delay={1.5}>
          <Sprout size={44} />
        </FloatingLeaf>

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium">
              <ShieldCheck size={14} /> {HERO.kicker}
            </span>
            <h1 className="mt-6 font-serif text-4xl md:text-6xl text-emerald-950 font-semibold leading-[1.05]">
              Building India&apos;s <span className="text-emerald-700">green infrastructure</span> — one project at a time.
            </h1>
            <p className="mt-6 text-lg text-stone-600 leading-relaxed max-w-xl">
              {HERO.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="bg-emerald-700 hover:bg-emerald-800 rounded-full px-7 py-6 text-white"
                data-testid="hero-tender-btn"
              >
                <Link href="/contact">
                  Discuss a Tender / Project <ArrowRight size={18} className="ml-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-7 py-6 border-emerald-700 text-emerald-700 hover:bg-emerald-50"
                data-testid="hero-projects-btn"
              >
                <Link href="/projects">View Our Projects</Link>
              </Button>
            </div>

            {/* Certifications quick-strip */}
            <div className="mt-10 flex flex-wrap gap-2">
              {CERTIFICATIONS.map((c) => (
                <span
                  key={c.code}
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${
                    c.color === "amber"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-emerald-100 text-emerald-800"
                  }`}
                  data-testid={`cert-${c.code}`}
                >
                  <ShieldCheck size={12} /> {c.code}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src={HERO.image} alt="EPC landscape project site" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 via-transparent to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                    <Award size={22} />
                  </div>
                  <div>
                    <div className="text-sm text-stone-500">Active Order Book</div>
                    <div className="font-serif text-lg text-emerald-900 font-semibold">₹6.84 Cr+ in govt / PSU / corporate contracts</div>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="hidden md:block absolute -top-6 -right-6 w-28 h-28 rounded-3xl bg-amber-300 -z-10"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="hidden md:block absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-emerald-300 -z-10"
            />
          </motion.div>
        </div>
      </section>

      {/* CLIENT MARQUEE */}
      <section className="border-y border-stone-200 bg-white" data-testid="client-marquee">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <span className="text-xs uppercase tracking-[0.28em] text-stone-500 font-semibold">Trusted by</span>
          {CLIENTS.map((c, i) => (
            <span
              key={i}
              className="font-serif text-lg text-emerald-900/90"
              data-testid={`client-${i}`}
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <FadeIn className="text-center max-w-2xl mx-auto mb-12">
          <p className="uppercase tracking-[0.25em] text-emerald-700 text-xs font-semibold">Why A2Z</p>
          <h2 className="font-serif text-3xl md:text-5xl text-emerald-950 font-semibold mt-3 leading-tight">
            EPC-grade horticulture, executed reliably
          </h2>
        </FadeIn>
        <Stagger className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => {
            const Icon = iconMap[f.icon] || Leaf;
            return (
              <StaggerItem key={i}>
                <Card className="group p-8 border-stone-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white h-full">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center text-emerald-700 mb-5 transition-colors group-hover:rotate-6">
                    <Icon size={26} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-emerald-950 mb-3">{f.title}</h3>
                  <p className="text-stone-600 leading-relaxed text-[15px]">{f.text}</p>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* STATS — real, verifiable */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScaleIn className="relative rounded-3xl bg-emerald-950 overflow-hidden">
            <div
              className="absolute inset-0 opacity-20"
              style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #84cc16, transparent 50%)" }}
            />
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 px-8 md:px-14 py-14">
              {STATS.map((s, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="font-serif text-3xl md:text-4xl lg:text-5xl text-amber-300 font-semibold">
                    {/^\d/.test(s.number) && !s.number.includes("₹") ? <Counter to={s.number} /> : s.number}
                  </div>
                  <div className="mt-2 text-white font-serif text-lg">{s.title}</div>
                  <p className="mt-2 text-emerald-200/80 text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="py-20 bg-stone-50" id="projects-preview">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
            <div>
              <p className="uppercase tracking-[0.25em] text-emerald-700 text-xs font-semibold">Selected Work</p>
              <h2 className="font-serif text-3xl md:text-5xl text-emerald-950 font-semibold mt-3 leading-tight">
                Government &amp; PSU projects
              </h2>
              <p className="mt-3 text-stone-600 max-w-xl">
                A snapshot of horticulture EPC contracts we&apos;ve executed for national agencies and corporate clients.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-emerald-700 text-emerald-700 hover:bg-emerald-50 self-start md:self-auto"
            >
              <Link href="/projects">All Projects <ArrowRight size={16} className="ml-1" /></Link>
            </Button>
          </FadeIn>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="home-projects">
            {PROJECTS.slice(0, 3).map((p) => (
              <StaggerItem key={p.slug}>
                <Card className="group overflow-hidden border-stone-200 hover:shadow-2xl transition-all hover:-translate-y-1 h-full bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-emerald-950/10 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-semibold uppercase tracking-wider bg-white/95 text-emerald-800 px-2.5 py-1 rounded-full">
                        {p.client}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-stone-500 uppercase tracking-wider">{p.location} · {p.year}</div>
                    <h3 className="mt-2 font-serif text-xl font-semibold text-emerald-950">{p.title}</h3>
                    <p className="mt-2 text-stone-600 text-sm line-clamp-2">{p.scope}</p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      {p.metrics.map((m, i) => (
                        <div key={i}>
                          <div className="font-serif text-lg text-emerald-800 font-semibold">{m.value}</div>
                          <div className="text-[10px] uppercase tracking-wider text-stone-500">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <ScaleIn className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img src={ABOUT_IMAGES.one} alt="Project site" className="rounded-3xl aspect-[3/4] object-cover w-full" />
            <img src={ABOUT_IMAGES.two} alt="Project site" className="rounded-3xl aspect-[3/4] object-cover w-full mt-8" />
          </div>
          <div className="absolute -bottom-6 left-6 bg-white shadow-xl rounded-2xl px-6 py-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-700 flex items-center justify-center text-white">
              <Users size={22} />
            </div>
            <div>
              <div className="font-serif text-2xl text-emerald-900 font-bold">100+</div>
              <div className="text-xs uppercase tracking-wider text-stone-500">Field Workforce</div>
            </div>
          </div>
        </ScaleIn>
        <FadeIn>
          <p className="uppercase tracking-[0.25em] text-emerald-700 text-xs font-semibold">Who We Are</p>
          <h2 className="font-serif text-3xl md:text-5xl text-emerald-950 font-semibold mt-3 leading-tight">
            An EPC contractor built for India&apos;s green mandates
          </h2>
          <p className="mt-5 text-stone-600 leading-relaxed">
            A2Z Plant Nutrient Private Limited is a DPIIT-recognized, ISO 9001 &amp; 14001 certified horticulture EPC contractor headquartered in Varanasi and operating across multiple Indian states. We work primarily with government bodies, PSUs and corporates on landscape, plantation and long-term maintenance mandates.
          </p>
          <p className="mt-4 text-stone-600 leading-relaxed">
            Since incorporation in 2021, we&apos;ve built an in-house team of 100+ horticulturists, agronomists and field staff — the operational muscle behind delivery for clients like NHAI, NTPC, NFL, BHEL, VDA and Hindustan Copper.
          </p>
          <Button asChild className="mt-7 bg-emerald-700 hover:bg-emerald-800 rounded-full px-7 py-6 text-white">
            <Link href="/about">Learn More About Us <ArrowRight size={18} className="ml-1" /></Link>
          </Button>
        </FadeIn>
      </section>

      {/* LEADERSHIP */}
      <section className="py-16 bg-emerald-50/40" data-testid="leadership-section">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-10">
            <p className="uppercase tracking-[0.25em] text-emerald-700 text-xs font-semibold">Leadership</p>
            <h2 className="font-serif text-3xl md:text-5xl text-emerald-950 font-semibold mt-3 leading-tight">
              Meet the founder
            </h2>
          </FadeIn>
          <Stagger className="grid md:grid-cols-1 gap-6 max-w-3xl mx-auto">
            {LEADERSHIP.map((l, i) => (
              <StaggerItem key={i}>
                <Card className="p-8 border-stone-200 bg-white flex flex-col sm:flex-row items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-emerald-700 text-white font-serif text-2xl font-semibold flex items-center justify-center shrink-0">
                    {l.initials}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-emerald-950">{l.name}</h3>
                    <div className="text-sm text-emerald-700 font-medium mt-1">{l.role}</div>
                    <p className="mt-3 text-stone-600 leading-relaxed">{l.bio}</p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-12">
            <p className="uppercase tracking-[0.25em] text-emerald-700 text-xs font-semibold">What We Do</p>
            <h2 className="font-serif text-3xl md:text-5xl text-emerald-950 font-semibold mt-3 leading-tight">
              Our EPC Service Portfolio
            </h2>
            <p className="mt-4 text-stone-600">
              End-to-end horticulture contracting for public and private institutions.
            </p>
          </FadeIn>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <StaggerItem key={s.slug}>
                <Card className="group overflow-hidden border-stone-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-emerald-950/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-[10px] uppercase tracking-wider text-amber-300">{s.track}</div>
                      <h3 className="font-serif text-xl text-white font-semibold">{s.title}</h3>
                    </div>
                  </div>
                  <div className="p-5 bg-white">
                    <p className="text-stone-600 text-sm leading-relaxed line-clamp-3">{s.description}</p>
                    <Link href="/services" className="mt-4 inline-flex items-center gap-1 text-emerald-700 font-medium text-sm group-hover:text-emerald-900">
                      Learn more <ArrowRight size={14} />
                    </Link>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CRAFTMYGARDEN TEASER */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-stone-50 to-emerald-50" data-testid="craftmygarden-teaser">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <Card className="relative overflow-hidden p-10 md:p-14 border-none shadow-lg grid md:grid-cols-2 gap-8 items-center bg-white">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                  Coming Soon
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-emerald-950 font-semibold mt-4 leading-tight">
                  {CRAFTMYGARDEN.name}
                </h2>
                <p className="mt-3 font-serif italic text-emerald-700 text-lg">
                  {CRAFTMYGARDEN.tagline}
                </p>
                <p className="mt-4 text-stone-600 leading-relaxed">
                  {CRAFTMYGARDEN.description}
                </p>
                <Button asChild className="mt-6 bg-emerald-700 hover:bg-emerald-800 rounded-full">
                  <Link href="/contact">Get notified at launch <ArrowRight size={16} className="ml-1" /></Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <img src="/service_02.jpg" alt="Home plants" className="rounded-2xl aspect-square object-cover" />
                <img src="/service_08.jpg" alt="Indoor plants" className="rounded-2xl aspect-square object-cover mt-6" />
                <img src="/service_05.jpg" alt="Garden" className="rounded-2xl aspect-square object-cover" />
                <img src="/service_03.jpg" alt="Garden" className="rounded-2xl aspect-square object-cover mt-6" />
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* BLOG — only rendered if blogs exist */}
      {blogs.length > 0 && (
        <section className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
              <div>
                <p className="uppercase tracking-[0.25em] text-emerald-700 text-xs font-semibold">From Our Blog</p>
                <h2 className="font-serif text-3xl md:text-5xl text-emerald-950 font-semibold mt-3 leading-tight">
                  Insights &amp; expert notes
                </h2>
              </div>
              <Button asChild variant="outline" className="rounded-full border-emerald-700 text-emerald-700 hover:bg-emerald-50 self-start md:self-auto">
                <Link href="/blog">View All Articles <ArrowRight size={16} className="ml-1" /></Link>
              </Button>
            </FadeIn>
            <Stagger className="grid md:grid-cols-3 gap-6" data-testid="home-blog-list">
              {blogs.map((b) => (
                <StaggerItem key={b.id}>
                  <Card className="group overflow-hidden border-stone-200 hover:shadow-2xl transition-all hover:-translate-y-1 h-full">
                    <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                      {b.cover_image && (
                        <img src={b.cover_image} alt={b.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      )}
                    </div>
                    <div className="p-6 bg-white">
                      <div className="flex items-center gap-4 text-xs text-stone-500 mb-3">
                        <span className="flex items-center gap-1"><CalendarDays size={13} /> {new Date(b.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                        <span className="flex items-center gap-1"><UserIcon size={13} /> {b.author}</span>
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-emerald-950 leading-snug group-hover:text-emerald-700 transition-colors">{b.title}</h3>
                      <p className="mt-3 text-stone-600 text-sm leading-relaxed line-clamp-2">{b.excerpt}</p>
                      <Link href={`/blog/${b.slug}`} className="mt-4 inline-flex items-center gap-1 text-emerald-700 font-medium text-sm">
                        Read more <ArrowRight size={14} />
                      </Link>
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* PROCUREMENT CTA */}
      <section className="py-20 bg-emerald-950 text-white" data-testid="procurement-cta">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider bg-amber-400/90 text-emerald-950 px-3 py-1 rounded-full">
              For Procurement Officers
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold mt-4 leading-tight">
              Need credentials for a tender or RFP?
            </h2>
            <p className="mt-4 text-emerald-100/85 leading-relaxed">
              Reach out for our full company profile — CIN, GSTIN, ISO certificates, DPIIT recognition,
              past PO copies, financials and workforce declarations.
            </p>
          </div>
          <div className="flex md:justify-end">
            <div className="space-y-3">
              <Button asChild className="bg-amber-400 hover:bg-amber-500 text-emerald-950 rounded-full px-7 py-6 w-full md:w-auto">
                <Link href="/contact">Request Company Profile <ArrowRight size={18} className="ml-1" /></Link>
              </Button>
              <a href={`tel:${COMPANY.phoneRaw}`} className="block text-center text-amber-200 hover:text-amber-300 text-sm">
                or call {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
