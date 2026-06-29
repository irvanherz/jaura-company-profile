export type ServiceIcon =
  | "consultation"
  | "web"
  | "mobile"
  | "automation"
  | "ai"
  | "cloud"
  | "strategy"

export type Service = {
  title: string
  description: string
  highlights: string[]
  icon: ServiceIcon
  featured?: boolean
}

export const servicesIntro =
  "We build web and mobile apps that are fast, polished, and ready to ship — plus the agentic products we run ourselves. Need guidance before you build? App consultation is available as well."

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Fast, accessible web apps and product sites built with modern frameworks — from sharp marketing pages to full SaaS dashboards.",
    highlights: [
      "Marketing & product websites",
      "Web apps & admin dashboards",
      "API design & integration",
      "Performance & SEO optimization",
    ],
    icon: "web",
    featured: true,
  },
  {
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile experiences for iOS and Android, designed for real users and built to scale with your product.",
    highlights: [
      "iOS & Android development",
      "Cross-platform with React Native",
      "App store submission support",
      "Push notifications & offline support",
    ],
    icon: "mobile",
  },
  {
    title: "AI & Agentic Systems",
    description:
      "Intelligent features powered by LLMs — from chat assistants to fully agentic products that reason, act, and adapt to user goals.",
    highlights: [
      "LLM integration & fine-tuning",
      "Agentic workflows & copilots",
      "RAG & knowledge systems",
      "AI product features",
    ],
    icon: "ai",
  },
  {
    title: "Automation & Integrations",
    description:
      "Connect your tools, eliminate manual work, and build workflows that run reliably in the background so your team can focus on what matters.",
    highlights: [
      "Workflow & process automation",
      "Third-party API integrations",
      "Webhook & event pipelines",
      "Internal tooling & scripts",
    ],
    icon: "automation",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Infrastructure that stays up. We set up cloud environments, CI/CD pipelines, and monitoring so deployments are boring — in the best way.",
    highlights: [
      "Cloud architecture (AWS, GCP, Vercel)",
      "CI/CD & deployment pipelines",
      "Containerization & orchestration",
      "Monitoring, logging & alerting",
    ],
    icon: "cloud",
  },
  {
    title: "Digital Strategy",
    description:
      "Big-picture thinking for teams who need direction. We align technology choices with business goals and help you prioritize what to build next.",
    highlights: [
      "Technical due diligence",
      "Product direction & prioritization",
      "Team & process advisory",
      "Vendor & build-vs-buy analysis",
    ],
    icon: "strategy",
  },
  {
    title: "App Consultation",
    description:
      "An optional starting point when you want expert input before development. We help validate ideas, choose a stack, and map a realistic path to launch.",
    highlights: [
      "Product & feasibility review",
      "Architecture & stack advisory",
      "Roadmap and milestone planning",
      "Risk assessment & cost estimation",
    ],
    icon: "consultation",
  },
]

export const serviceProcess = [
  {
    step: "01",
    title: "Discover",
    description:
      "We learn your goals, users, and constraints — through a kickoff on your app idea, or a consultation session if you want guidance first.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Architecture, wireframes, and a clear plan. You know exactly what we're building and why before development starts.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Iterative development with regular check-ins. Web, mobile, automation, or AI — we ship in focused sprints.",
  },
  {
    step: "04",
    title: "Launch & grow",
    description:
      "Deployment, handoff, and ongoing support. We stay involved as long as you need us.",
  },
]
