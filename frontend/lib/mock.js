// Site content for A2Z Plant Nutrient Private Limited
// Repositioned as an EPC horticulture contractor serving government, PSUs and corporates
// across India — not just residential landscaping in Varanasi.

export const COMPANY = {
  name: "A2Z Plant Nutrient",
  legalName: "A2Z Plant Nutrient Private Limited",
  tagline: "From Tender to Tree",
  positioning: "Government / PSU / Corporate Horticulture EPC Contractor",
  founded: 2021,
  phone: "+91 81605 34604",
  phoneRaw: "+918160534604",
  phoneSecondary: "+91 75320 71388",
  phoneSecondaryRaw: "+917532071388",
  email: "info@a2zplantnutrient.com",
  emailLegacy: "a2zplantnutrient@gmail.com",
  address:
    "13A Shyam Bihar Colony, Lahartara Road, Varanasi, Uttar Pradesh 221103",
  addressMapUrl:
    "https://www.google.com/maps/search/?api=1&query=13A+Shyam+Bihar+Colony+Lahartara+Road+Varanasi+Uttar+Pradesh+221103",
  hours: "Mon – Sat · 09:00 AM – 06:00 PM",
  logo: "/logo.png",
  companyProfilePdf: "/docs/A2Z-Plant-Nutrient-Company-Profile.pdf",
  companyProfilePdfName: "A2Z-Plant-Nutrient-Company-Profile.pdf",
  // Registration numbers — replace placeholders with real values before public launch
  cin: "Available on request",
  gstin: "Available on request",
  udyamNumber: "Available on request",
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
    "A2Z Plant Nutrient is an ISO 9001 & 14001 certified, DPIIT-recognized horticulture EPC contractor. We deliver large-scale landscaping, plantation, lawn development and maintenance projects fo[...]",
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
    title: "Pan-India Operations",
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

// Named projects sourced from A2Z's Company Profile PDF — real, dated, verifiable.
export const PROJECTS = [
  {
    slug: "nhai-ayodhya",
    client: "NHAI",
    title: "Ayodhya–Basti Highway Plantation",
    location: "Ayodhya, Uttar Pradesh",
    year: "2024",
    scope:
      "Execution of avenue plantation along the Ayodhya–Basti national highway corridor with native species and survival-linked maintenance.",
    metrics: [
      { label: "Plants Installed", value: "10,000+" },
      { label: "Corridor", value: "Ayodhya–Basti" },
    ],
    image: "/service_02.jpg",
  },
  {
    slug: "nhai-prayagraj",
    client: "NHAI",
    title: "Highway Beautification · Prayagraj",
    location: "Prayagraj, Uttar Pradesh",
    year: "2024",
    scope:
      "Beautification and landscape works undertaken across a large parcel adjacent to the highway.",
    metrics: [
      { label: "Land Parcel", value: "3 hectares" },
      { label: "Client", value: "NHAI" },
    ],
    image: "/service_01.jpg",
  },
  {
    slug: "nbcc-wtc-delhi",
    client: "NBCC · Navratna CPSE",
    title: "World Trade Center Landscape · Delhi",
    location: "New Delhi",
    year: "2024",
    scope:
      "Landscape execution for the World Trade Center under NBCC — one of A2Z's most notable Navratna CPSE projects.",
    metrics: [
      { label: "Client", value: "NBCC (Navratna)" },
      { label: "Site", value: "WTC Delhi" },
    ],
    image: "/service_04.jpg",
  },
  {
    slug: "iocl-odisha",
    client: "Indian Oil (IOCL)",
    title: "Campus Landscape Maintenance · Odisha",
    location: "Odisha",
    year: "2024",
    scope:
      "Executing beautification and multi-year landscape maintenance works across IOCL facilities in Odisha.",
    metrics: [
      { label: "Client", value: "IOCL" },
      { label: "Scope", value: "Maintenance AMC" },
    ],
    image: "/service_06.jpg",
  },
  {
    slug: "nagar-nigam-varanasi",
    client: "Nagar Nigam Varanasi",
    title: "Urban Plantation · Varanasi",
    location: "Varanasi, Uttar Pradesh",
    year: "2023",
    scope:
      "Comprehensive plantation works across city zones with iron-guard protection for durability.",
    metrics: [
      { label: "Trees Planted", value: "5,000" },
      { label: "Iron-Guard Protected", value: "100%" },
    ],
    image: "/service_03.jpg",
  },
  {
    slug: "rajasthan-housing-board",
    client: "Rajasthan Housing Board",
    title: "Housing Estate Plantation · Rajasthan",
    location: "Rajasthan",
    year: "2023",
    scope:
    ... (truncated)