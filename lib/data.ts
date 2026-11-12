export const siteConfig = {
  name: "Jayashri Utrankar",
  fullName: "Jayashri Dilip Utrankar",
  firstName: "Jayashri",
  role: "ML Engineer & Full-Stack Developer",
  description:
    "B.Tech CSE '27 at Vishwakarma University. I build production ML and full-stack systems — from impeller-sizing models to platforms used by 10K+ people.",
  email: "jayashriutrankar@gmail.com",
  location: "Pune, Maharashtra, India",
  shortLocation: "Pune, IN",
  timezone: "Asia/Kolkata",
  resume: "/resume.pdf",
  social: {
    github: "https://github.com/Jayashri2908",
    linkedin: "https://linkedin.com/in/jayashri29",
    leetcode: "https://leetcode.com/Jayashri29",
  },
};

export const navLinks = [
  { href: "#about", index: "01", text: "About" },
  { href: "#experience", index: "02", text: "Experience" },
  { href: "#projects", index: "03", text: "Projects" },
  { href: "#research", index: "04", text: "Research" },
  { href: "#capabilities", index: "05", text: "Capabilities" },
  { href: "#contact", index: "06", text: "Contact" },
];

export const heroStats = [
  { label: "CGPA", value: "8.66", note: "B.Tech CSE", accent: "cyan" as const },
  { label: "LeetCode", value: "300+", note: "Problems solved", accent: "orange" as const },
  { label: "Projects", value: "03", note: "Shipped builds", accent: "cyan" as const },
  { label: "Research", value: "02", note: "Paper + copyright", accent: "orange" as const },
];

export const aboutParagraphs = [
  "B.Tech CSE student at Vishwakarma University (CGPA 8.66, class of 2027). I build production systems where machine learning meets the modern web — and I care as much about the interface as the model behind it.",
  "Currently an ML and Full-Stack Intern at Wilo Mather and Platt, where I built a pump sizing platform that predicts impeller trim diameter with 0.99 mm MAE — from the TabM/XGBoost models to a FastAPI backend, React frontend, and packaged Windows desktop app.",
  "I have shipped a 10K+ user FDP platform with a Government of India copyright, an AI upscaling pipeline on Docker microservices, and an ML-based baldness detection system with a manuscript and patent under review. My oncology research was published at ICSCDS 2025.",
];

export const aboutFacts = [
  { label: "Location", value: "Pune, India" },
  { label: "Current", value: "ML + Full-Stack Intern @ Wilo" },
  { label: "Focus", value: "Applied ML · Computer vision · Full-stack" },
  { label: "Spoken", value: "English · Hindi · Marathi" },
];

export const experiences = [
  {
    role: "ML and Full-Stack Intern",
    org: "Wilo Mather and Platt",
    location: "Pune, India",
    period: "Jan 2026 — Present",
    status: "ACTIVE",
    summary:
      "Building an ML-powered pump sizing platform that predicts impeller trim diameter and ships as a fully local Windows desktop application.",
    bullets: [
      "Built an ML-powered pump sizing platform (FastAPI + React) predicting impeller trim diameter with 0.99 mm MAE using TabM and XGBoost models with physics-informed losses (affinity-law residuals).",
      "Engineered a FastAPI backend with 12 REST endpoints (Pydantic v2 validation, API-key auth, SQLite persistence) and a React 19 + TypeScript frontend (25+ components, ApexCharts, PDF/DOCX export) consuming SSE-streamed APIs.",
      "Packaged as a Windows desktop app (Electron + NSIS installer) with GPU/CPU detection and fully local, zero-egress inference — KD-Tree analog search in under 10 ms, CPU-only serving.",
    ],
    tech: [
      "FastAPI",
      "React 19",
      "TypeScript",
      "TabM",
      "XGBoost",
      "Electron",
      "SQLite",
      "SSE",
    ],
  },
];

export const leadership = {
  role: "Visionary Core Member",
  org: "Visionary Club, Vishwakarma University",
  period: "Jan 2024 — Present",
  summary:
    "Drive innovative projects through strategic planning and organized events; mentor new members and promote club objectives, fostering creativity and community engagement.",
};

export type Project = {
  number: string;
  name: string;
  tagline: string;
  category: string;
  status?: string;
  description: string;
  bullets: string[];
  tech: string[];
  href: string;
  hrefLabel: string;
  secondaryHref?: string;
  visual: "upscaler" | "fdp" | "baldness";
  accent: "cyan" | "orange";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Upscaler-AI",
    tagline: "AI-powered image processing system",
    category: "AI Infrastructure",
    status: "FLAGSHIP",
    description:
      "A scalable microservices ecosystem for high-performance image upscaling on both NVIDIA GPU and CPU-only architectures.",
    bullets: [
      "Architected Docker microservices for super-resolution on NVIDIA GPU and CPU-only systems.",
      "Integrated Real-ESRGAN and GFPGAN for upscaling and face restoration, with automated NIQE quality assessment.",
      "Built a full-stack interface with WebSocket feedback and n8n orchestration for production deployment.",
    ],
    tech: ["Docker", "Real-ESRGAN", "GFPGAN", "NIQE", "WebSockets", "n8n", "Python"],
    href: "https://github.com/Jayashri2908",
    hrefLabel: "View on GitHub",
    visual: "upscaler",
    accent: "cyan",
    featured: true,
  },
  {
    number: "02",
    name: "FDP Platform",
    tagline: "Faculty Development Program management",
    category: "Full-Stack SaaS",
    status: "LIVE",
    description:
      "A 14-microservice platform for managing Faculty Development Programs at Vishwakarma University, handling 10K+ users across 40+ events.",
    bullets: [
      "Built a 14-microservice SaaS (React + TypeScript, Node/Express + Python/Flask, 39 REST endpoints) that reduced administrative overhead by 40%.",
      "Designed 3-role RBAC with real-time Firestore sync, batch certificate generation via Google Drive API, and DOCX/PDF/CSV reporting at 99.9% availability.",
      "Registered and granted copyright by the Government of India's Copyright Office (Certificate No. LD-20250174733).",
    ],
    tech: ["React", "TypeScript", "Node.js", "Flask", "Firestore", "Google Drive API"],
    href: "https://vu-fdp.vercel.app",
    hrefLabel: "Open live platform",
    visual: "fdp",
    accent: "orange",
  },
  {
    number: "03",
    name: "Baldness Detection",
    tagline: "ML-based male pattern baldness prediction",
    category: "ML / Computer Vision",
    status: "PATENT UNDER REVIEW",
    description:
      "A machine learning system predicting baldness probability from genetic markers, lifestyle factors, and physiological data.",
    bullets: [
      "Engineering an ML model that predicts baldness probability from genetic markers, lifestyle factors, and physiological data.",
      "Developing age-specific prediction with OpenCV scalp analysis and pattern recognition.",
      "Manuscript and patent currently under review.",
    ],
    tech: ["Python", "OpenCV", "Scikit-learn", "Machine Learning"],
    href: "https://github.com/Jayashri2908",
    hrefLabel: "View on GitHub",
    visual: "baldness",
    accent: "cyan",
  },
];

export const publications = [
  {
    type: "Conference paper",
    title:
      "Tracing the Evolution of AI and ML in Oncology: A Systematic Metadata Analysis",
    authors: "Dachawar, M., Tong, V., Utrankar, J., & Poornaprakash, S.",
    venue: "ICSCDS-2025",
    year: "2025",
    identifier: "DOI: 10.1109/ICSCDS65426.2025.11167501",
    href: "https://doi.org/10.1109/ICSCDS65426.2025.11167501",
  },
  {
    type: "Copyright",
    title:
      "A Comprehensive Management System for Educational and Professional Development Programs",
    authors: "Utrankar, J., Gaikwad, V., & Ved, T.",
    venue: "Copyright Office of India",
    year: "2025",
    identifier: "Certificate No. LD-20250174733",
    href: "https://vu-fdp.vercel.app",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    accent: "cyan" as const,
    skills: ["Java", "C", "C++", "Python", "SQL", "JavaScript", "TypeScript"],
  },
  {
    label: "AI / ML & Data",
    accent: "orange" as const,
    skills: [
      "PyTorch",
      "Generative AI",
      "OpenCV",
      "Scikit-learn",
      "CatBoost",
      "LightGBM",
      "RAG Pipelines",
      "LangChain",
      "Power BI",
    ],
  },
  {
    label: "Web & Tools",
    accent: "cyan" as const,
    skills: [
      "React",
      "Node.js",
      "Django",
      "FastAPI",
      "Vite",
      "Tailwind CSS",
      "Three.js",
      "Docker",
      "WebSockets",
      "n8n",
      "Git",
      "Linux / Unix",
      "REST APIs",
    ],
  },
  {
    label: "Databases",
    accent: "orange" as const,
    skills: ["Firebase", "SQLite"],
  },
];

export const education = [
  {
    period: "2023 — 2027",
    qualification: "B.Tech Computer Science & Engineering",
    institution: "Vishwakarma University, Pune",
    score: "CGPA 8.66",
  },
  {
    period: "2022",
    qualification: "12th Grade (HSC)",
    institution: "SSMV Jr. College, Yeola",
    score: "84%",
  },
  {
    period: "2020",
    qualification: "10th Grade (SSC)",
    institution: "De-Paul English Medium School, Yeola",
    score: "91.2%",
  },
];

export const certifications = [
  "AWS Academy Cloud Architecting",
  "IBM Full Stack Software Developer",
];

export const achievements = [
  "Band of Agents 2026",
  "Flipkart Grid 2.0",
  "IBM Watson Hackathon",
];

export const techTicker = [
  "PyTorch",
  "TypeScript",
  "React 19",
  "FastAPI",
  "OpenCV",
  "Docker",
  "Firebase",
  "Real-ESRGAN",
  "LangChain",
  "Three.js",
  "Tailwind CSS",
  "SQLite",
  "WebSockets",
  "n8n",
];
