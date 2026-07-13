"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Trash2, Edit3, Plus, FileText, Image as ImageIcon, Loader2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { fetchBlogs, deleteBlog, fetchMedia, deleteMedia } from "@/lib/api";

export default function AdminPage() {
  const { toast } = useToast();
  const [blogs, setBlogs] = useState([]);
  const [media, setMedia] = useState([]);
  const [tab, setTab] = useState("blogs");
  const [loading, setLoading] = useState(true);

  const reload = async () => {
    setLoading(true);
    try {
      const [b, m] = await Promise.all([fetchBlogs(), fetchMedia()]);
      setBlogs(b || []);
      setMedia(m || []);
    } catch (e) {
      toast({ title: "Failed to load", description: e.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    reload();
  }, []);

  const handleDeleteBlog = async (id) => {
    if (!confirm("Delete this blog post?")) return;
    try {
      await deleteBlog(id);
      toast({ title: "Deleted" });
      reload();
    } catch (e) {
      toast({ title: "Delete failed", description: e.message, variant: "destructive" });
    }
  };

  const handleDeleteMedia = async (id) => {
    if (!confirm("Delete this media item?")) return;
    try {
      await deleteMedia(id);
      toast({ title: "Deleted" });
      reload();
    } catch (e) {
      toast({ title: "Delete failed", description: e.message, variant: "destructive" });
    }
  };

  return (
    <div data-testid="admin-page">
      <PageHero title="Content Dashboard" subtitle="Manage your site" />
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex bg-stone-100 rounded-full p-1">
            <button
              onClick={() => setTab("blogs")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition ${
                tab === "blogs" ? "bg-white text-emerald-800 shadow-sm" : "text-stone-600"
              }`}
              data-testid="tab-blogs"
            >
              <FileText size={14} /> Blogs ({blogs.length})
            </button>
            <button
              onClick={() => setTab("media")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition ${
                tab === "media" ? "bg-white text-emerald-800 shadow-sm" : "text-stone-600"
              }`}
              data-testid="tab-media"
            >
              <ImageIcon size={14} /> Media ({media.length})
            </button>
          </div>

          <div className="flex gap-3">
            <Button asChild className="bg-emerald-700 hover:bg-emerald-800 rounded-full">
              <Link href="/add-blog">
                <Plus size={16} className="mr-1" /> New Blog
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-emerald-700 text-emerald-700 hover:bg-emerald-50">
              <Link href="/add-media">
                <Plus size={16} className="mr-1" /> New Media
              </Link>
            </Button>
          </div>
        </div>

        {loading && (
          <div className="py-20 text-center text-stone-500 flex items-center justify-center gap-2">
            <Loader2 className="animate-spin" size={18} /> Loading…
          </div>
        )}

        {!loading && tab === "blogs" && (
          <div className="space-y-4" data-testid="admin-blogs-list">
            {blogs.length === 0 && (
              <Card className="p-10 border-dashed text-center text-stone-600">
                No blogs yet — <Link href="/add-blog" className="text-emerald-700 underline">add one</Link>.
              </Card>
            )}
            {blogs.map((b) => (
              <Card key={b.id} className="p-4 md:p-5 border-stone-200 flex items-center gap-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-stone-100 shrink-0">
                  {b.cover_image && (
                    <img src={b.cover_image} alt={b.title} className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs uppercase tracking-wider text-emerald-700">{b.category}</div>
                  <h3 className="font-serif text-lg font-semibold text-emerald-950 truncate">{b.title}</h3>
                  <p className="text-stone-500 text-xs mt-1">
                    {new Date(b.created_at).toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <Button asChild size="sm" variant="outline" className="rounded-full">
                    <Link href={`/blog/${b.slug}`}>View</Link>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                    onClick={() => handleDeleteBlog(b.id)}
                    data-testid={`delete-blog-${b.id}`}
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {!loading && tab === "media" && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5" data-testid="admin-media-list">
            {media.length === 0 && (
              <Card className="col-span-full p-10 border-dashed text-center text-stone-600">
                No media yet — <Link href="/add-media" className="text-emerald-700 underline">upload some</Link>.
              </Card>
            )}
            {media.map((m) => (
              <Card key={m.id} className="overflow-hidden border-stone-200 group">
                <div className="aspect-[4/3] bg-stone-100 relative">
                  {m.media_type === "video" ? (
                    <video src={m.data} className="w-full h-full object-cover" muted />
                  ) : (
                    <img src={m.data} alt={m.title} className="w-full h-full object-cover" />
                  )}
                  <button
                    onClick={() => handleDeleteMedia(m.id)}
                    className="absolute top-2 right-2 bg-white/90 backdrop-blur p-1.5 rounded-full text-red-600 opacity-0 group-hover:opacity-100 transition shadow"
                    data-testid={`delete-media-${m.id}`}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
                <div className="p-3">
                  <div className="text-xs text-emerald-700 uppercase tracking-wider">{m.category}</div>
                  <div className="font-serif text-sm font-semibold text-emerald-950 truncate">{m.title}</div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
