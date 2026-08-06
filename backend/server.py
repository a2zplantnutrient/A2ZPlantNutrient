from fastapi import FastAPI, APIRouter, HTTPException, Query, Response, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import re
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="A2Z Plant Nutrient API")
api_router = APIRouter(prefix="/api")


# ===================== Helpers =====================
def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def slugify(text: str) -> str:
    text = (text or "").lower().strip()
    text = re.sub(r"[^a-z0-9\s-]", "", text)
    text = re.sub(r"[\s_]+", "-", text)
    text = re.sub(r"-+", "-", text)
    return text.strip("-") or str(uuid.uuid4())[:8]


# ===================== Models =====================
class BlogBase(BaseModel):
    model_config = ConfigDict(extra="ignore")
    title: str
    excerpt: str = ""
    content: str
    author: str = "Admin"
    category: str = "General"
    tags: List[str] = []
    cover_image: str = ""  # URL or base64 data URI


class BlogCreate(BlogBase):
    slug: Optional[str] = None


class Blog(BlogBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    slug: str
    created_at: str = Field(default_factory=now_iso)
    updated_at: str = Field(default_factory=now_iso)


class MediaBase(BaseModel):
    model_config = ConfigDict(extra="ignore")
    title: str
    description: str = ""
    category: str = "Gallery"
    media_type: str = "image"  # image | video
    data: str  # base64 data URI or external URL


class MediaCreate(MediaBase):
    pass


class Media(MediaBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=now_iso)


class CareerBase(BaseModel):
    model_config = ConfigDict(extra="ignore")
    title: str
    type: str = "Full-time"
    location: str = "Varanasi, UP"
    desc: str


class CareerCreate(CareerBase):
    pass


class Career(CareerBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=now_iso)


class ContactCreate(BaseModel):
    model_config = ConfigDict(extra="ignore")
    name: str
    email: str
    phone: Optional[str] = ""
    subject: Optional[str] = ""
    message: str


class Contact(ContactCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=now_iso)


class ProfileRequestCreate(BaseModel):
    model_config = ConfigDict(extra="ignore")
    name: str
    organization: Optional[str] = ""
    designation: Optional[str] = ""
    email: str
    phone: Optional[str] = ""
    tender_ref: Optional[str] = ""
    message: Optional[str] = ""


class ProfileRequest(ProfileRequestCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=now_iso)


# ===================== Routes =====================
@api_router.get("/")
async def root():
    return {"message": "A2Z Plant Nutrient API is running", "ok": True}


# ---------- Blog ----------
@api_router.post("/blogs", response_model=Blog)
async def create_blog(payload: BlogCreate):
    slug = (payload.slug or slugify(payload.title))
    # ensure unique slug
    if await db.blogs.find_one({"slug": slug}):
        slug = f"{slug}-{str(uuid.uuid4())[:6]}"
    blog = Blog(**payload.model_dump(exclude={"slug"}), slug=slug)
    await db.blogs.insert_one(blog.model_dump())
    return blog


@api_router.get("/blogs", response_model=List[Blog])
async def list_blogs(category: Optional[str] = None, q: Optional[str] = None, limit: int = 100):
    query = {}
    if category:
        query["category"] = category
    if q:
        query["$or"] = [
            {"title": {"$regex": q, "$options": "i"}},
            {"excerpt": {"$regex": q, "$options": "i"}},
            {"content": {"$regex": q, "$options": "i"}},
        ]
    docs = await db.blogs.find(query, {"_id": 0}).sort("created_at", -1).to_list(limit)
    return docs


@api_router.get("/blogs/{slug}", response_model=Blog)
async def get_blog(slug: str):
    doc = await db.blogs.find_one({"slug": slug}, {"_id": 0})
    if not doc:
        raise HTTPException(status_code=404, detail="Blog not found")
    return doc


@api_router.put("/blogs/{blog_id}", response_model=Blog)
async def update_blog(blog_id: str, payload: BlogCreate):
    existing = await db.blogs.find_one({"id": blog_id}, {"_id": 0})
    if not existing:
        raise HTTPException(status_code=404, detail="Blog not found")
    update_data = payload.model_dump(exclude_unset=True, exclude={"slug"})
    update_data["updated_at"] = now_iso()
    if payload.slug and payload.slug != existing.get("slug"):
        update_data["slug"] = payload.slug
    await db.blogs.update_one({"id": blog_id}, {"$set": update_data})
    doc = await db.blogs.find_one({"id": blog_id}, {"_id": 0})
    return doc


@api_router.delete("/blogs/{blog_id}")
async def delete_blog(blog_id: str):
    result = await db.blogs.delete_one({"id": blog_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Blog not found")
    return {"ok": True, "deleted": blog_id}


# ---------- Media ----------
@api_router.post("/media", response_model=Media)
async def create_media(payload: MediaCreate):
    media = Media(**payload.model_dump())
    await db.media.insert_one(media.model_dump())
    return media


@api_router.get("/media", response_model=List[Media])
async def list_media(category: Optional[str] = None, media_type: Optional[str] = None, limit: int = 200):
    query = {}
    if category:
        query["category"] = category
    if media_type:
        query["media_type"] = media_type
    docs = await db.media.find(query, {"_id": 0}).sort("created_at", -1).to_list(limit)
    return docs


@api_router.delete("/media/{media_id}")
async def delete_media(media_id: str):
    result = await db.media.delete_one({"id": media_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Media not found")
    return {"ok": True, "deleted": media_id}


# ---------- Careers ----------
@api_router.post("/careers", response_model=Career)
async def create_career(payload: CareerCreate):
    career = Career(**payload.model_dump())
    await db.careers.insert_one(career.model_dump())
    return career


@api_router.get("/careers", response_model=List[Career])
async def list_careers():
    docs = await db.careers.find({}, {"_id": 0}).sort("created_at", -1).to_list(100)
    return docs


@api_router.delete("/careers/{career_id}")
async def delete_career(career_id: str):
    result = await db.careers.delete_one({"id": career_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Career not found")
    return {"ok": True, "deleted": career_id}


# ---------- Contact ----------
@api_router.post("/contact", response_model=Contact)
async def create_contact(payload: ContactCreate):
    msg = Contact(**payload.model_dump())
    await db.contacts.insert_one(msg.model_dump())
    return msg


# ---------- Company Profile Requests ----------
@api_router.post("/profile-requests", response_model=ProfileRequest)
async def create_profile_request(payload: ProfileRequestCreate):
    req = ProfileRequest(**payload.model_dump())
    await db.profile_requests.insert_one(req.model_dump())
    return req


@api_router.get("/profile-requests", response_model=List[ProfileRequest])
async def list_profile_requests():
    docs = await db.profile_requests.find({}, {"_id": 0}).sort("created_at", -1).to_list(200)
    return docs


# ---------- Admin auth (shared password, session cookie) ----------
class AdminLoginPayload(BaseModel):
    model_config = ConfigDict(extra="ignore")
    password: str


@api_router.post("/admin-auth")
async def admin_login(payload: AdminLoginPayload, response: Response):
    expected = os.environ.get("ADMIN_TOKEN", "")
    if not expected:
        raise HTTPException(status_code=500, detail="admin-not-configured")
    if not payload.password or payload.password != expected:
        raise HTTPException(status_code=401, detail="invalid-credentials")

    # Set HttpOnly cookie that the Next.js middleware verifies.
    response.set_cookie(
        key="a2z_admin",
        value=expected,
        max_age=60 * 60 * 8,
        httponly=True,
        secure=True,
        samesite="lax",
        path="/",
    )
    return {"ok": True}


@api_router.delete("/admin-auth")
async def admin_logout(response: Response):
    response.delete_cookie("a2z_admin", path="/")
    return {"ok": True}


# ---------- Seed (idempotent) ----------
@api_router.post("/seed")
async def seed():
    """Idempotent seed of initial blogs, careers, and gallery media."""
    seeded = {"blogs": 0, "careers": 0, "media": 0}

    initial_blogs = [
        {
            "title": "What Makes a Horticulture Tender Bid Actually Compliant",
            "excerpt": "Before your bid gets scored on price, it gets scored on paperwork. A field-tested checklist from an EPC contractor.",
            "content": "Every horticulture tender we bid on begins the same way — with a compliance stack, not a species list. Over hundreds of proposals to NHAI, NTPC, PSUs and municipal bodies, we've distilled the non-negotiables that decide whether your bid even reaches technical evaluation.\n\n**1. Registration & Statutory Documents**\nCIN, GSTIN, Udyam / MSME, PAN, EPFO & ESIC codes, income-tax returns for the last three years and audited financials. Missing even one is grounds for automatic rejection under most CPWD and PSU norms.\n\n**2. Certifications**\nISO 9001 (Quality) and ISO 14001 (Environmental Management) are increasingly the floor, not a differentiator. DPIIT recognition unlocks specific reservations under Startup India, and CII / carbon-footprint certifications add technical marks in ESG-linked tenders.\n\n**3. Past Performance Certificates**\nWe recommend maintaining a live folder of PO copies, completion certificates and client satisfaction letters organised by client type — NHAI, PSU, corporate campus, ULB. Match this to the tender's minimum experience threshold on Day 1.\n\n**4. Workforce Affidavit**\nMany PSUs require a declaration of in-house horticulturists, agronomists and field staff. This is where a captive 100+ workforce shows its worth over sub-contracted models.\n\n**5. Species & Maintenance Plan**\nOnly after the paperwork clears does the actual proposal — species list, phased timeline, AMC schedule — get read. Design it around the site's climate, soil profile and the client's ESG targets.\n\nGet the paperwork right and the horticulture takes care of itself.",
            "author": "A2Z Team",
            "category": "EPC Insights",
            "tags": ["tender", "compliance", "epc"],
            "cover_image": "/real-township-avenue-install.jpg",
        },
        {
            "title": "Compensatory Afforestation Done Right — Lessons from Highway Corridors",
            "excerpt": "Compensatory plantation is only as good as the survival rate three years later. Here's what really moves the needle.",
            "content": "On paper, compensatory afforestation looks simple — plant N trees, submit the geotag report, close the file. In practice, it's a five-year survival problem that most contracts underprice.\n\n**Site preparation matters more than species selection**\nAlong highway corridors, the top-layer soil is compacted by construction traffic and stripped of nutrients. Without proper de-compaction, sub-soil aeration and organic amendment, even native species struggle. We build 30–60 days of site preparation into every corridor plantation plan.\n\n**Species must be locally sourced, not just locally suitable**\nNative species from a distant nursery arrive stressed and often carry pathogens. Wherever possible we build feeder nurseries near the project site — this alone lifts one-year survival rates by 20–30%.\n\n**Maintenance is the project**\n70% of budget effort in the first two years is watering, tree guards, weeding and pest control. Contracts that back-load these payments incentivise the wrong behaviour — we prefer front-loaded maintenance milestones tied to third-party survival audits.\n\n**Digital reporting builds trust**\nEvery A2Z corridor plantation ships with geotagged plant data, monthly photos and a dashboard the client's engineer can access anytime. This is the future of compensatory afforestation.",
            "author": "A2Z Team",
            "category": "Sustainability",
            "tags": ["afforestation", "nhai", "esg"],
            "cover_image": "/real-iocl-odisha-maintenance.jpg",
        },
        {
            "title": "Multi-Year AMC for PSU Townships: A Playbook",
            "excerpt": "How we structure horticulture Annual Maintenance Contracts for PSU residential and administrative townships.",
            "content": "A PSU township is a small city — and its greenery is the first thing residents, visitors and inspection teams notice. A well-run horticulture AMC is a mix of operational discipline, agronomy and public-facing service design.\n\n**Zone the campus**\nWe split every township into administrative, residential, guest-house, sports and boundary zones. Each has its own service intensity — a guest-house lawn needs weekly precision cuts, a boundary green belt only monthly attention.\n\n**Right-size the workforce**\nA typical 100-acre PSU township requires 20–25 gardeners, 2 horticulturists and 1 site supervisor working on rotational shifts. We staff up during the pre-monsoon plantation drive and re-baseline through peak summer.\n\n**Digitise the reports**\nWe issue monthly reports covering pruning cycles, fertigation, pest incidents, replacement plantings and any deviations from the scope. This makes AMC review meetings 15 minutes long, not 90.\n\n**Plan for the surprise inspection**\nEvery two weeks, a senior horticulturist walks the site with a simple checklist that mirrors what a PSU HR head would look for. This is what turns a good AMC into an invisible-but-obvious one.",
            "author": "A2Z Team",
            "category": "EPC Insights",
            "tags": ["amc", "psu", "operations"],
            "cover_image": "/real-nursery-delivery.jpg",
        },
    ]
    for b in initial_blogs:
        exists = await db.blogs.find_one({"title": b["title"]})
        if not exists:
            slug = slugify(b["title"])
            doc = Blog(**b, slug=slug).model_dump()
            await db.blogs.insert_one(doc)
            seeded["blogs"] += 1

    initial_careers = [
        {"title": "Landscape Designer", "type": "Full-time", "location": "Varanasi, UP · Pan-India travel",
         "desc": "Design large-scale landscapes for government and corporate EPC projects."},
        {"title": "Site Supervisor — EPC Projects", "type": "Full-time", "location": "Multi-state · UP / MP / Odisha / Delhi",
         "desc": "Lead ground execution and quality control at PSU / govt project sites across states."},
        {"title": "Agronomist / Horticulturist", "type": "Full-time", "location": "Varanasi, UP + Project sites",
         "desc": "Species selection, soil health, pest management and multi-year maintenance planning."},
        {"title": "Mural Artist", "type": "Contract", "location": "Pan India · Project-based",
         "desc": "Design and execute large-format murals integrated with our landscape projects."},
        {"title": "Project Manager — Delhi / NCR", "type": "Full-time", "location": "New Delhi",
         "desc": "Own NBCC / WTC and related institutional projects end-to-end — planning, procurement and handover."},
        {"title": "Regional Coordinator — Odisha", "type": "Full-time", "location": "Odisha (IOCL Sites)",
         "desc": "Coordinate landscape maintenance operations across IOCL, Odisha facilities."},
    ]
    for c in initial_careers:
        exists = await db.careers.find_one({"title": c["title"]})
        if not exists:
            doc = Career(**c).model_dump()
            await db.careers.insert_one(doc)
            seeded["careers"] += 1

    initial_media = [
        {"title": "Avenue Plantation · Installation", "category": "Plantation", "media_type": "image", "data": "/real-avenue-install-day.jpg"},
        {"title": "Avenue Plantation · Established", "category": "Plantation", "media_type": "image", "data": "/real-avenue-hedge-palms.jpg"},
        {"title": "Lawn & Turf Maintenance", "category": "Lawn Care", "media_type": "image", "data": "/real-park-worker-spray.jpg"},
        {"title": "Outdoor Court & Recreation Planning", "category": "Facilities", "media_type": "image", "data": "/real-playground-gym2.jpg"},
        {"title": "Mural & Environmental Art", "category": "Mural Art", "media_type": "image", "data": "/real-mural-park-art.jpg"},
        {"title": "Roadside Hedge Development", "category": "Lawn Care", "media_type": "image", "data": "/real-hedge-road-wide.jpg"},
        {"title": "Multi-Year AMC in Action", "category": "Maintenance", "media_type": "image", "data": "/real-iocl-odisha-maintenance.jpg"},
        {"title": "Indoor & Balcony Plants", "category": "Indoor Plants", "media_type": "image", "data": "/real-private-garden.jpg"},
        {"title": "Featured Project · Nagar Nigam Varanasi", "category": "Featured", "media_type": "image", "data": "/real-nightlighting-nagarnigam.jpg"},
        {"title": "Featured Project · Rajasthan Site", "category": "Featured", "media_type": "image", "data": "/real-rajasthan-site-road.jpg"},
        {"title": "Apartment Landscape", "category": "Landscaping", "media_type": "image", "data": "/real-apartment-landscape.jpg"},
        {"title": "Residential Landscaping", "category": "Landscaping", "media_type": "image", "data": "/real-apartment-landscape2.jpg"},
        {"title": "Courtyard Garden", "category": "Private Garden", "media_type": "image", "data": "/real-courtyard-garden.jpg"},
        {"title": "CSR Tree Planting", "category": "CSR", "media_type": "image", "data": "/real-csr-tree-planting.jpg"},
        {"title": "Roadside Flowerbed", "category": "Beautification", "media_type": "image", "data": "/real-flowerbed-roadside.jpg"},
        {"title": "Riverside Road Hedge", "category": "Landscaping", "media_type": "image", "data": "/real-hedge-road-riverside.jpg"},
        {"title": "Nursery Delivery", "category": "Operations", "media_type": "image", "data": "/real-nursery-delivery.jpg"},
        {"title": "Park Gate Beautification", "category": "Urban Greens", "media_type": "image", "data": "/real-parkgate-varanasi.jpg"},
        {"title": "Paver Walkway", "category": "Hardscaping", "media_type": "image", "data": "/real-paver-walkway.jpg"},
        {"title": "Walkway Landscaping", "category": "Hardscaping", "media_type": "image", "data": "/real-paver-walkway2.jpg"},
        {"title": "Park & Playground", "category": "Facilities", "media_type": "image", "data": "/real-playground-gym.jpg"},
        {"title": "Township Avenue", "category": "Plantation", "media_type": "image", "data": "/real-township-avenue-install.jpg"},
        {"title": "Tree Pruning & Care", "category": "Maintenance", "media_type": "image", "data": "/real-tree-pruning-work.jpg"},
        {"title": "Vertical Garden", "category": "Vertical Garden", "media_type": "image", "data": "/real-vertical-garden.jpg"}
    ]
    for m in initial_media:
        exists = await db.media.find_one({"title": m["title"]})
        if not exists:
            doc = Media(**m).model_dump()
            await db.media.insert_one(doc)
            seeded["media"] += 1

    return {"ok": True, "seeded": seeded}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("startup")
async def startup_seed():
    """Auto-seed initial content on startup if collections are empty."""
    try:
        if await db.blogs.count_documents({}) == 0:
            from fastapi import Request  # noqa
            await seed()
            logger.info("Auto-seed completed.")
    except Exception as e:
        logger.error(f"Auto-seed failed: {e}")


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("startup")
async def startup_seed():
    """Auto-seed initial content on startup if collections are empty."""
    try:
        if await db.blogs.count_documents({}) == 0:
            from fastapi import Request  # noqa
            await seed()
            logger.info("Auto-seed completed.")
    except Exception as e:
        logger.error(f"Auto-seed failed: {e}")


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
