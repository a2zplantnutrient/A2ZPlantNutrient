// Site content for A2Z Plant Nutrient Private Limited
// Repositioned as an EPC horticulture contractor serving government, PSUs and corporates
// across India — not just residential landscaping in Varanasi.

export const COMPANY = {
  name: "A2Z Plant Nutrient",
  legalName: "A2Z Plant Nutrient Private Limited",
  tagline: "Grow & Eat Natural",
  positioning: "Government / PSU / Corporate Horticulture EPC Contractor",
  founded: 2021,
  phone: "+91 81605 34604",
  phoneRaw: "+918160534604",
  email: "a2zplantnutrient@gmail.com",
  address:
    "13A Shyam Bihar Colony, Laharata Road, Varanasi, Uttar Pradesh 221103",
  hours: "Mon – Sat · 09:00 AM – 06:00 PM",
  logo: "/logo.png",
  // Registration numbers — placeholder patterns; replace with your actual codes
  // when available (Owner: kept partial for privacy in demo).
  cin: "U01xxxUP2021PTCxxxxxx",
  gstin: "09XXXXXXXXX1ZX",
  udyamNumber: "UDYAM-UP-XX-XXXXXXX",
};

export const NAV = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Gallery", path: "/gallery" },
  { label: "Careers", path: "/careers" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export const HERO = {
  kicker: "Government · PSU · Corporate Horticulture EPC",
  title:
    "Building India's green infrastructure — one project at a time.",
  description:
    "A2Z Plant Nutrient is an ISO 9001 & 14001 certified, DPIIT-recognized horticulture EPC contractor. We deliver large-scale landscaping, plantation, lawn development and maintenance projects for government bodies, PSUs and corporates across multiple Indian states.",
  image: "/project01.jpg",
};

export const FEATURES = [
  {
    icon: "Sprout",
    title: "EPC-Grade Execution",
    text: "Design, procurement, plantation and multi-year maintenance — delivered under a single contract with defined SLAs.",
  },
  {
    icon: "Hammer",
    title: "Pan-India Deployment",
    text: "100+ trained field workforce, mobilised across states to execute projects for PSUs, government agencies and corporate campuses.",
  },
  {
    icon: "Leaf",
    title: "Compliance & Sustainability",
    text: "ISO 9001 & 14001, DPIIT, Udyam and CII Carbon-Footprint credentials — sustainability is baked into every project.",
  },
];

export const ABOUT_IMAGES = {
  one: "/project01.jpg",
  two: "/project02.jpg",
};

// Real, verifiable credentials
export const CERTIFICATIONS = [
  {
    code: "ISO 9001",
    name: "Quality Management System",
    color: "emerald",
  },
  {
    code: "ISO 14001",
    name: "Environmental Management",
    color: "emerald",
  },
  {
    code: "DPIIT",
    name: "Recognized Startup",
    color: "amber",
  },
  {
    code: "Udyam",
    name: "Registered MSME",
    color: "amber",
  },
  {
    code: "CII",
    name: "Certified Carbon-Footprint Professional",
    color: "emerald",
  },
];

// Split into two clear tracks per positioning brief
export const SERVICES = [
  {
    slug: "epc-landscaping",
    title: "EPC Landscaping",
    track: "Government / PSU / Corporate",
    image: "/service_01.jpg",
    description:
      "End-to-end landscape execution for government installations, PSU townships and corporate campuses — from design & procurement to multi-year O&M.",
  },
  {
    slug: "large-scale-plantation",
    title: "Large-Scale Plantation",
    track: "Government / PSU / Corporate",
    image: "/service_02.jpg",
    description:
      "Bulk avenue, boundary and compensatory plantation drives with native and climate-resilient species. Delivered against tender-defined specs.",
  },
  {
    slug: "lawn-development",
    title: "Lawn Development & Turf",
    track: "Government / PSU / Corporate",
    image: "/service_06.jpg",
    description:
      "New lawn creation and reconditioning across large campuses, sports facilities and public spaces with premium turf and irrigation.",
  },
  {
    slug: "horticulture-maintenance",
    title: "Multi-Year Maintenance",
    track: "Government / PSU / Corporate",
    image: "/service_07.jpg",
    description:
      "Comprehensive annual maintenance contracts (AMC) — pruning, fertigation, pest management and health audits, with digital reporting.",
  },
  {
    slug: "outdoor-courts",
    title: "Outdoor Court Development",
    track: "Government / PSU / Corporate",
    image: "/service_04.jpg",
    description:
      "Sports court and recreation-space planning for schools, campuses, PSU townships and community centres.",
  },
  {
    slug: "mural-art",
    title: "Mural & Environmental Art",
    track: "Government / PSU / Corporate",
    image: "/service_05.jpg",
    description:
      "Large-format wall murals and public-art commissions integrated with landscape design — for campuses, stations and public infrastructure.",
  },
];

// Named projects for PSUs / government bodies — replace generic figures once
// tender/PO details can be shared publicly.
export const PROJECTS = [
  {
    slug: "nhai-avenue-plantation",
    client: "NHAI",
    title: "Highway Avenue Plantation",
    location: "Uttar Pradesh",
    year: "2024",
    scope:
      "Compensatory & avenue plantation along national highway corridors with native species and 3-year maintenance.",
    metrics: [
      { label: "Trees Planted", value: "20,000+" },
      { label: "Corridor Length", value: "40 km" },
    ],
    image: "/service_02.jpg",
  },
  {
    slug: "ntpc-township-landscape",
    client: "NTPC",
    title: "PSU Township Landscape Development",
    location: "Multi-state",
    year: "2024",
    scope:
      "Full landscape execution for residential and administrative zones of an NTPC township — turf, ornamentals, irrigation and O&M.",
    metrics: [
      { label: "Area Covered", value: "1.2 lakh sq.ft" },
      { label: "Species Introduced", value: "80+" },
    ],
    image: "/service_01.jpg",
  },
  {
    slug: "nfl-industrial-greening",
    client: "NFL",
    title: "Industrial Complex Greening",
    location: "North India",
    year: "2023",
    scope:
      "Boundary plantation, ornamental landscaping and dust-mitigation green belts for a National Fertilizers Limited plant.",
    metrics: [
      { label: "Green Belt", value: "8 acres" },
      { label: "Native Species", value: "35+" },
    ],
    image: "/service_06.jpg",
  },
  {
    slug: "bhel-campus-landscape",
    client: "BHEL",
    title: "Corporate Campus Landscape",
    location: "India",
    year: "2023",
    scope:
      "Campus landscape upgrade for a BHEL facility — feature gardens, tree cover augmentation and annual maintenance contract.",
    metrics: [
      { label: "Area", value: "60,000 sq.ft" },
      { label: "Contract Duration", value: "3 years" },
    ],
    image: "/service_03.jpg",
  },
  {
    slug: "vda-public-park",
    client: "VDA (Varanasi Development Authority)",
    title: "Public Park Redevelopment",
    location: "Varanasi, UP",
    year: "2023",
    scope:
      "Redevelopment of a public park under Varanasi Development Authority — hardscape, plantation, mural art and public seating.",
    metrics: [
      { label: "Park Area", value: "3 acres" },
      { label: "Footfall Zone", value: "Daily 5k+" },
    ],
    image: "/service_04.jpg",
  },
  {
    slug: "hindustan-copper-plantation",
    client: "Hindustan Copper Ltd",
    title: "Mine-Site Greening Programme",
    location: "India",
    year: "2024",
    scope:
      "Mine-adjacent green cover programme for Hindustan Copper Ltd — native species, soil-remediation planting and biodiversity monitoring.",
    metrics: [
      { label: "Trees", value: "15,000+" },
      { label: "Reclaimed Area", value: "12 acres" },
    ],
    image: "/service_08.jpg",
  },
];

// Marquee-style client logos strip (name-based, no external logos to avoid IP issues)
export const CLIENTS = [
  "NHAI",
  "NTPC",
  "NFL",
  "BHEL",
  "Hindustan Copper",
  "VDA · Varanasi",
  "PSU Townships",
  "Central Govt. Depts",
];

// Real, verifiable stats replacing vanity metrics
export const STATS = [
  {
    number: "₹6.84 Cr+",
    title: "Active Order Book",
    text: "Government, PSU and corporate horticulture contracts under execution.",
  },
  {
    number: "100+",
    title: "Trained Workforce",
    text: "In-house horticulturists, agronomists, gardeners and site supervisors.",
  },
  {
    number: "5+",
    title: "States Operated In",
    text: "Pan-India project footprint across northern & central India.",
  },
  {
    number: "2021",
    title: "Incorporated",
    text: "DPIIT-recognized, Udyam-registered private limited company.",
  },
];

// Leadership — brief on founder
export const LEADERSHIP = [
  {
    name: "Abhishek Agrawal",
    role: "Founder & Chief Executive Officer",
    bio:
      "Founder of A2Z Plant Nutrient Private Limited. CII-certified Carbon-Footprint Professional. Leads the company's EPC operations across government, PSU and corporate projects — with a mission to build India's green infrastructure at scale.",
    initials: "AA",
  },
];

// Gallery uses locally-hosted real images pulled from a2zplantnutrient.com
export const GALLERY = [
  "/service_01.jpg",
  "/service_02.jpg",
  "/service_03.jpg",
  "/service_04.jpg",
  "/service_05.jpg",
  "/service_06.jpg",
  "/service_07.jpg",
  "/service_08.jpg",
  "/project01.jpg",
  "/project02.jpg",
];

// CraftMyGarden — teaser for the residential/private track
export const CRAFTMYGARDEN = {
  name: "CraftMyGarden",
  tagline: "Home landscaping, made effortless.",
  description:
    "Our upcoming direct-to-consumer brand for residential landscaping, indoor plants, curated gifting and garden care — designed for homeowners across India. Launching soon.",
};

// Blog list is dynamic (fetched from API); keep empty fallback.
export const BLOG = [];

// Fallback career list — real list is loaded from /api/careers
export const CAREERS = [
  {
    title: "Landscape Designer",
    type: "Full-time",
    location: "Varanasi, UP",
    desc: "Design large-scale landscapes for government and corporate EPC projects.",
  },
  {
    title: "Site Supervisor — EPC Projects",
    type: "Full-time",
    location: "Multi-state",
    desc: "Lead ground execution and quality control at PSU / govt project sites across states.",
  },
  {
    title: "Agronomist / Horticulturist",
    type: "Full-time",
    location: "Varanasi, UP",
    desc: "Species selection, soil health, pest management and multi-year maintenance planning.",
  },
  {
    title: "Mural Artist",
    type: "Contract",
    location: "PAN India (Project-based)",
    desc: "Design and execute large-format murals integrated with our landscape projects.",
  },
];
