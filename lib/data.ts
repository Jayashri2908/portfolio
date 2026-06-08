export const siteConfig = {
  name: "Jayashri Utrankar",
  title: "Jayashri Utrankar",
  description:
    "ML Engineer & Full-Stack Developer. B.Tech CSE '27 at Vishwakarma University.",
  email: "jayashriutrankar@gmail.com",
  location: "Pune, India",
  timezone: "UTC+5:30",
  url: "https://jayashri.dev",
  ogImage: "/og-image.png",
  social: {
    github: "https://github.com/Jayashri2908",
    linkedin: "https://linkedin.com/in/jayashri29",
    leetcode: "https://leetcode.com/Jayashri29",
  },
};

export const techMarquee = [
  "PyTorch",
  "TypeScript",
  "React Three Fiber",
  "Docker",
  "Real-ESRGAN",
  "Firebase",
  "OpenCV",
  "Tailwind CSS",
  "LangChain",
  "Three.js",
  "Framer Motion",
  "FastAPI",
  "Hugging Face",
  "Next.js",
];

export const aboutStats = [
  { label: "CGPA", value: 8.55, suffix: "", display: "8.55" },
  { label: "LeetCode problems solved", value: 150, suffix: "+", display: "150+" },
  { label: "Publications + copyright", value: 3, suffix: "", display: "2 + 1" },
];

export const experiences = [
  {
    type: "work",
    role: "ML Engineering Intern",
    title: "Frontend + 3D Web Developer",
    org: "Wilo Mather and Platt Pumps",
    period: "Aug 2025 — Present",
    location: "Pune, India",
    description:
      "Building a 3D visualization dashboard for industrial pumps using React Three Fiber. Real-time data, GLTF models, and Framer Motion transitions.",
    bullets: [
      "Shipped interactive 3D pump models with real-time telemetry",
      "Reduced dashboard load time by 60% with custom render pipeline",
    ],
  },
  {
    type: "work",
    role: "Research Intern (Oncology AI)",
    title: "Cancer Research with ML",
    org: "Ashoka Cancer Hospital",
    period: "May 2025 — Jul 2025",
    location: "Pune, India",
    description:
      "Worked on AI-driven oncology research. Published a paper in an international journal on machine learning for cancer detection.",
    bullets: [
      "Co-authored a publication in AI for healthcare",
      "Built preprocessing pipelines for histopathology data",
    ],
  },
  {
    type: "education",
    role: "B.Tech Computer Science",
    title: "Engineering",
    org: "Vishwakarma University",
    period: "2023 — 2027",
    location: "Pune, India",
    description:
      "Coursework in ML systems, computer graphics, distributed systems, and modern web engineering.",
    bullets: [
      "CGPA 8.55 (current)",
      "Hackathon wins and project leads",
    ],
  },
];

export const projects = [
  {
    title: "Upscaler-AI",
    description:
      "Production image-upscaling pipeline. Docker microservices, Real-ESRGAN + GFPGAN, WebSockets streaming, n8n automation.",
    href: "https://github.com/Jayashri2908",
    tech: ["Docker", "Real-ESRGAN", "GFPGAN", "WebSockets", "n8n"],
    visual: "upscaler",
  },
  {
    title: "FDP Management Platform",
    description:
      "Full-stack Faculty Development Program platform for Vishwakarma University. React + TypeScript + Firebase.",
    href: "https://vu-fdp.vercel.app",
    tech: ["React", "TypeScript", "Firebase"],
    visual: "fdp",
  },
  {
    title: "Baldness Detection System",
    description:
      "ML-based baldness probability prediction with OpenCV. Patent under review.",
    href: "https://github.com/Jayashri2908",
    tech: ["Python", "OpenCV", "Machine Learning"],
    visual: "baldness",
  },
  {
    title: "React 3D Pump Dashboard",
    description:
      "3D visualization dashboard for industrial pumps. Real-time telemetry, GLTF models, smooth Framer Motion transitions.",
    href: "https://wilo.com",
    tech: ["React Three Fiber", "Framer Motion", "Tailwind"],
    visual: "pump",
  },
];

export const services = [
  {
    service: "ML Engineering",
    description:
      "Production ML pipelines for image processing, computer vision, and generative AI.",
    icon: "Brain",
  },
  {
    service: "Full-Stack Development",
    description:
      "End-to-end web apps with React, TypeScript, Firebase, and modern backend infra.",
    icon: "Code2",
  },
  {
    service: "3D Web Experiences",
    description:
      "Interactive 3D dashboards using React Three Fiber, GLTF models, and real-time data.",
    icon: "Box",
  },
  {
    service: "AI Research",
    description:
      "Published in AI/ML for healthcare. PyTorch, LangChain, RAG pipelines.",
    icon: "FlaskConical",
  },
  {
    service: "Performance Tuning",
    description:
      "Sub-50ms latency UIs, optimized render pipelines, Docker deployments.",
    icon: "Zap",
  },
];

export const now = [
  { label: "Building", value: "3D Pump Dashboard for Wilo", icon: "Code2" },
  { label: "Learning", value: "RAG pipelines, vector DBs, agentic workflows", icon: "BookOpen" },
  { label: "Reading", value: "Papers on diffusion models for medical imaging", icon: "BookOpen" },
];

export const navLinks = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#projects", text: "Work" },
  { href: "#experience", text: "Path" },
  { href: "#contact", text: "Contact" },
];
