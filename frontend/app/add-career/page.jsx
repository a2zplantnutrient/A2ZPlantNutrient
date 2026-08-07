"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Save, X, Sparkles, Briefcase } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { createCareer } from "@/lib/api";

const TYPES = ["Full-time", "Part-time", "Contract", "Internship"];

export default function AddCareerPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    title: "",
    type: "Full-time",
    location: "",
    desc: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.desc.trim() || !form.location.trim()) {
      toast({
        title: "Missing fields",
        description: "Title, location and description are required.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    try {
      await createCareer(form);
      toast({
        title: "Job opening published",
        description: `"${form.title}" is now live.`,
      });
      router.push(`/admin`);
    } catch (err) {
      toast({
        title: "Failed to publish",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="add-career-page">
      <PageHero title="Add Job Opening" subtitle="Expand Your Team" />
      <section className="max-w-4xl mx-auto px-6 py-16">
        <Card className="p-8 md:p-10 border-stone-200">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="text-emerald-700" size={18} />
            <p className="uppercase tracking-[0.18em] text-emerald-700 text-xs font-semibold">
              Post a Role
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-emerald-950 font-semibold leading-tight">
            Create a new job opening
          </h2>
          <p className="mt-3 text-stone-600">
            Fill in the details below — it appears on the Careers page immediately.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5" data-testid="add-career-form">
            <div>
              <Label className="text-stone-700">Job Title *</Label>
              <Input
                required
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="e.g. Senior Horticulturist"
                className="mt-2"
                data-testid="career-title-input"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-stone-700">Location *</Label>
                <Input
                  required
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  placeholder="e.g. Varanasi, UP"
                  className="mt-2"
                />
              </div>
              <div>
                <Label className="text-stone-700">Employment Type</Label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="mt-2 w-full h-10 px-3 rounded-md border border-stone-200 bg-white text-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  data-testid="career-type-select"
                >
                  {TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <Label className="text-stone-700">Description *</Label>
              <Textarea
                required
                rows={5}
                value={form.desc}
                onChange={(e) => setForm({ ...form, desc: e.target.value })}
                placeholder="Briefly describe the role, responsibilities, and requirements..."
                className="mt-2"
                data-testid="career-desc-input"
              />
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                type="submit"
                disabled={submitting}
                className="bg-emerald-700 hover:bg-emerald-800 rounded-full px-7 py-6"
                data-testid="career-submit-btn"
              >
                <Save size={16} className="mr-2" />
                {submitting ? "Publishing…" : "Publish Job"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/admin")}
                className="rounded-full border-stone-300"
              >
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      </section>
    </div>
  );
}
