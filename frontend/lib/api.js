// API client for backend services
const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || process.env.REACT_APP_BACKEND_URL || "";

export const API_BASE = `${BACKEND_URL}/api`;

async function handle(res) {
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`API ${res.status}: ${text || res.statusText}`);
  }
  return res.json();
}

// ---------- Blogs ----------
export async function fetchBlogs(opts = {}) {
  const params = new URLSearchParams();
  if (opts.category) params.set("category", opts.category);
  if (opts.q) params.set("q", opts.q);
  const url = `${API_BASE}/blogs${params.toString() ? `?${params}` : ""}`;
  const res = await fetch(url, { cache: "no-store" });
  return handle(res);
}

export async function fetchBlog(slug) {
  const res = await fetch(`${API_BASE}/blogs/${slug}`, { cache: "no-store" });
  return handle(res);
}

export async function createBlog(payload) {
  const res = await fetch(`${API_BASE}/blogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return handle(res);
}

export async function updateBlog(id, payload) {
  const res = await fetch(`${API_BASE}/blogs/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return handle(res);
}

export async function deleteBlog(id) {
  const res = await fetch(`${API_BASE}/blogs/${id}`, { method: "DELETE" });
  return handle(res);
}

// ---------- Media ----------
export async function fetchMedia(opts = {}) {
  const params = new URLSearchParams();
  if (opts.category) params.set("category", opts.category);
  if (opts.media_type) params.set("media_type", opts.media_type);
  const url = `${API_BASE}/media${params.toString() ? `?${params}` : ""}`;
  const res = await fetch(url, { cache: "no-store" });
  return handle(res);
}

export async function createMedia(payload) {
  const res = await fetch(`${API_BASE}/media`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return handle(res);
}

export async function deleteMedia(id) {
  const res = await fetch(`${API_BASE}/media/${id}`, { method: "DELETE" });
  return handle(res);
}

// ---------- Careers ----------
export async function fetchCareers() {
  const res = await fetch(`${API_BASE}/careers`, { cache: "no-store" });
  return handle(res);
}

// ---------- Contact ----------
export async function sendContact(payload) {
  const res = await fetch(`${API_BASE}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return handle(res);
}

// ---------- Utility: file -> base64 ----------
export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
