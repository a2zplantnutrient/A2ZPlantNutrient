// Site content for A2Z Plant Nutrient Private Limited
// Repositioned as an EPC horticulture Partner serving government, PSUs and corporates
// across India — not just residential landscaping in Varanasi.

export const COMPANY = {
  name: "A2Z Plant Nutrient",
  legalName: "A2Z Plant Nutrient Private Limited",
  tagline: "From Tender to Tree",
  positioning: "Government / PSU / Corporate Horticulture EPC Partner",
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
    "A2Z Plant Nutrient is an ISO 9001 & 14001 certified, DPIIT-recognized horticulture EPC Partner. We deliver large-scale landscaping, plantation, lawn development and maintenance projects fo[...]",
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
      "Completed extensive plantation works across Rajasthan Housing Board estates.",
    metrics: [
      { label: "Client", value: "RHB" },
      { label: "State", value: "Rajasthan" },
    ],
    image: "/service_07.jpg",
  },
  {
    slug: "nfl-madhya-pradesh",
    client: "NFL",
    title: "Plant Beautification · Madhya Pradesh",
    location: "Madhya Pradesh",
    year: "2023",
    scope:
      "Ongoing beautification and maintenance activities across National Fertilizers Limited facilities in MP.",
    metrics: [
      { label: "Client", value: "NFL" },
      { label: "State", value: "Madhya Pradesh" },
    ],
    image: "/service_08.jpg",
  },
  {
    slug: "sunbeam-varanasi",
    client: "Sunbeam Group of Educational Institutions",
    title: "Campus Horticulture · Varanasi",
    location: "Varanasi, Uttar Pradesh",
    year: "2023",
    scope:
      "Comprehensive horticulture and landscape development works across Sunbeam Group campuses.",
    metrics: [
      { label: "Sector", value: "Education" },
      { label: "Scope", value: "Full landscape" },
    ],
    image: "/service_05.jpg",
  },
];

// Marquee-style client strip (name-based, since we don't own external logos).
// Sourced from A2Z Plant Nutrient's official Company Profile PDF.
export const CLIENTS = [
  "NHAI",
  "NTPC",
  "NFL",
  "BHEL",
  "Indian Oil (IOCL)",
  "Indian Railways",
  "NBCC",
  "GSECL",
  "TCIL",
  "Rajasthan Housing Board",
  "Nagar Nigam Varanasi",
  "Water Resources Dept · UP",
  "VDA · Varanasi",
];

// Trusted-by full grid — visual cards for the homepage / dedicated section.
// Each entry has a display name, sector chip and short context.
// (Data pulled from A2Z's Company Profile PDF.)
export const TRUSTED_BY = [
  { name: "NHAI", sector: "Government", context: "National highway plantation corridors — Ayodhya, Prayagraj." },
  { name: "NTPC", sector: "PSU · Power", context: "PSU township landscape at NTPC Dadri and other sites." },
  { name: "NFL", sector: "PSU · Fertilizers", context: "Beautification and maintenance across NFL Madhya Pradesh." },
  { name: "BHEL", sector: "PSU · Manufacturing", context: "Corporate campus landscape with multi-year AMC." },
  { name: "Indian Oil (IOCL)", sector: "PSU · Oil & Gas", context: "Beautification and landscape maintenance, Odisha." },
  { name: "Indian Railways", sector: "Government", context: "Institutional plantation and landscape works." },
  { name: "NBCC", sector: "Navratna CPSE", context: "World Trade Center, Delhi — landscape execution." },
  { name: "GSECL", sector: "PSU · Power", context: "Landscape works at GSECL Dhuvaran and Ukai." },
  { name: "TCIL", sector: "PSU · Telecom", context: "Campus horticulture for Telecommunications Consultants India Ltd." },
  { name: "Rajasthan Housing Board", sector: "Government", context: "Extensive plantation works across housing estates." },
  { name: "Nagar Nigam Varanasi", sector: "Municipal", context: "5,000 trees with iron guard across city zones." },
  { name: "Water Resources Dept · UP", sector: "Government", context: "State-level plantation and green-cover programs." },
];

// Enriched institutional clients — one sentence of context per client
// (shown prominently on the homepage, not buried in About).
export const INSTITUTIONAL_CLIENTS = [
  {
    name: "NHAI",
    fullName: "National Highways Authority of India",
    sector: "Government · Infrastructure",
    context:
      "Executed plantation over 10,000 plants along the Ayodhya–Basti Highway; landscape works over a 3-hectare parcel in Prayagraj.",
  },
  {
    name: "NTPC",
    fullName: "NTPC Limited",
    sector: "PSU · Power",
    context:
      "Township landscape execution at NTPC Dadri — turf, ornamentals, irrigation and operations & maintenance.",
  },
  {
    name: "NFL",
    fullName: "National Fertilizers Limited",
    sector: "PSU · Fertilizers",
    context:
      "Ongoing beautification and maintenance activities across NFL Madhya Pradesh facilities.",
  },
  {
    name: "Indian Oil (IOCL)",
    fullName: "Indian Oil Corporation Ltd",
    sector: "PSU · Oil & Gas",
    context:
      "Executing beautification and landscape-maintenance works across IOCL, Odisha.",
  },
  {
    name: "BHEL",
    fullName: "Bharat Heavy Electricals Ltd",
    sector: "PSU · Manufacturing",
    context:
      "Corporate campus landscape upgrade with multi-year AMC and biodiversity-linked outcomes.",
  },
  {
    name: "NBCC",
    fullName: "NBCC (India) Limited · A Navratna CPSE",
    sector: "Navratna CPSE",
    context:
      "World Trade Center, Delhi — landscape execution for a marquee Navratna CPSE project.",
  },
];

// Real, verifiable stats sourced from A2Z's Company Profile PDF + user brief.
export const STATS = [
  {
    number: "10 Lakh+",
    title: "Sq. Ft. Transformed",
    text: "Total land landscaped, planted or maintained across projects.",
  },
  {
    number: "100+",
    title: "Projects Delivered",
    text: "Government, PSU and corporate horticulture contracts completed.",
  },
  {
    number: "6+",
    title: "States Operated In",
    text: "UP, MP, Odisha, Delhi, Gujarat, Rajasthan — pan-India footprint.",
  },
  {
    number: "2021",
    title: "Incorporated",
    text: "ISO 9001 & 14001 certified, Startup India recognised.",
  },
];

// Leadership — brief on founder (credentials per A2Z Company Profile).
export const LEADERSHIP = [
  {
    name: "Abhishek Agrawal",
    role: "Founder & Chief Executive Officer",
    bio:
      "B.Tech (Mechanical Engineering) and PG Diploma in Project Management. CII-certified Carbon-Footprint Professional. Leads A2Z Plant Nutrient's EPC operations across government, PSU and corporate projects.",
    initials: "AA",
  },
];

// Gallery uses locally-hosted real project images (from a2zplantnutrient.com).
// Each item is captioned to give context — top-nav gallery is now content-rich, not empty.
export const GALLERY = [
  {
    src: "/service_01.jpg",
    title: "Campus Landscape · PSU",
    caption: "Feature landscape and turf development for a PSU corporate campus.",
    category: "Landscaping",
  },
  {
    src: "/service_02.jpg",
    title: "Avenue Plantation · Highway Corridor",
    caption: "Bulk avenue plantation with native species along a national highway.",
    category: "Plantation",
  },
  {
    src: "/service_03.jpg",
    title: "Lawn Reconditioning",
    caption: "Restoration of an institutional lawn with premium turf and irrigation.",
    category: "Lawn Care",
  },
  {
    src: "/service_04.jpg",
    title: "Outdoor Court Planning",
    caption: "Sports and recreation-space planning for a PSU township.",
    category: "Facilities",
  },
  {
    src: "/service_05.jpg",
    title: "Mural & Environmental Art",
    caption: "Large-format wall mural integrated with the landscape design.",
    category: "Mural Art",
  },
  {
    src: "/service_06.jpg",
    title: "Lawn Development · New Build",
    caption: "New lawn creation across a large administrative campus.",
    category: "Lawn Care",
  },
  {
    src: "/service_07.jpg",
    title: "Multi-Year AMC in Action",
    caption: "Routine horticulture maintenance under a multi-year AMC contract.",
    category: "Maintenance",
  },
  {
    src: "/service_08.jpg",
    title: "Indoor Plants Deployment",
    caption: "Bulk indoor-plant deployment across an office campus.",
    category: "Indoor Plants",
  },
  {
    src: "/project01.jpg",
    title: "Featured Project · Site 01",
    caption: "Signature institutional landscape delivered by A2Z Plant Nutrient.",
    category: "Featured",
  },
  {
    src: "/project02.jpg",
    title: "Featured Project · Site 02",
    caption: "Landscape and plantation work completed for a PSU client.",
    category: "Featured",
  },
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
    location: "Varanasi, UP · Pan-India travel",
    desc: "Design large-scale landscapes for government and corporate EPC projects.",
  },
  {
    title: "Site Supervisor — EPC Projects",
    type: "Full-time",
    location: "Multi-state · UP / MP / Odisha / Delhi",
    desc: "Lead ground execution and quality control at PSU / govt project sites across states.",
  },
  {
    title: "Agronomist / Horticulturist",
    type: "Full-time",
    location: "Varanasi, UP + Project sites",
    desc: "Species selection, soil health, pest management and multi-year maintenance planning.",
  },
  {
    title: "Mural Artist",
    type: "Contract",
    location: "Pan India · Project-based",
    desc: "Design and execute large-format murals integrated with our landscape projects.",
  },
];
