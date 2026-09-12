export const skills = [
  { label: "Node.js / React / TypeScript", value: 94 },
  { label: "REST APIs / Microservices", value: 92 },
  { label: "Python / Flask / FastAPI", value: 86 },
  { label: "PostgreSQL / MongoDB / Redis", value: 88 },
  { label: "Docker / CI/CD / Cloud", value: 84 },
  { label: "Security / Testing / Debugging", value: 87 },
];

export const experience = [
  {
    company: "Parexel International",
    role: "Software Developer",
    period: "Feb 2025 — Present",
    location: "Hyderabad, India",
    detail: "Clinical trial platforms and asynchronous data-processing services.",
  },
  {
    company: "Freelance",
    role: "Software Developer",
    period: "Aug 2025 — Present",
    location: "Remote",
    detail: "Built and deployed a paid multi-tenant gym management SaaS platform.",
  },
  {
    company: "Peer Innovations",
    role: "Software Developer Intern",
    period: "Sep 2024 — Dec 2024",
    location: "Hyderabad, India",
    detail: "Shipped Spring Boot and React products with real-time chat and Docker orchestration.",
  },
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  year: string;
};

export const projects: Project[] = [
  {
    slug: "ai-code-editor",
    title: "AI Code Editor Platform",
    summary: "Browser-based coding workspace with sandboxed execution, multi-provider AI chat, and RAG context for debugging.",
    stack: ["Node.js", "Flask", "React", "Monaco", "Docker", "FAISS"],
    year: "2025",
  },
  {
    slug: "gym-management-saas",
    title: "Gym Management SaaS",
    summary: "Multi-tenant platform for members, plans, dues, and administration, delivered as a paid freelance engagement.",
    stack: ["Node.js", "Express", "PostgreSQL", "React", "Vercel"],
    year: "2025",
  },
  {
    slug: "spring-microservices",
    title: "Spring Microservices Backend",
    summary: "REST-based Spring Boot services with isolated PostgreSQL schemas, Redis, JWT security, and Jenkins delivery.",
    stack: ["Java", "Spring Boot", "Security", "PostgreSQL", "Redis"],
    year: "2024",
  },
];
