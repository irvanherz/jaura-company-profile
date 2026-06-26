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
  "From early-stage app consultation to full-stack delivery, we help you plan, build, and scale digital products — web, mobile, automation, and beyond."

export const services: Service[] = [
  {
    title: "App Consultation",
    description:
      "Expert guidance before you write a single line of code. We help you validate ideas, choose the right stack, and map a realistic path from concept to launch.",
    highlights: [
      "Product & feasibility review",
      "Architecture & stack advisory",
      "Roadmap and milestone planning",
      "Risk assessment & cost estimation",
    ],
    icon: "consultation",
    featured: true,
  },
  {
    title: "Web Development",
    description:
      "Fast, accessible web applications and marketing sites built with modern frameworks — from landing pages to complex SaaS dashboards.",
    highlights: [
      "Marketing & corporate websites",
      "Web apps & admin dashboards",
      "API design & integration",
      "Performance & SEO optimization",
    ],
    icon: "web",
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
    title: "AI & Agentic Systems",
    description:
      "Intelligent features powered by LLMs — from chat assistants to fully agentic products that reason, act, and adapt to user goals.",
    highlights: [
      "LLM integration & fine-tuning",
      "Agentic workflows & copilots",
      "RAG & knowledge systems",
      "AI product strategy",
    ],
    icon: "ai",
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
]

export const serviceProcess = [
  {
    step: "01",
    title: "Discover",
    description:
      "We learn your goals, constraints, and users — through consultation sessions, audits, or deep-dive workshops.",
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
      "Iterative development with regular check-ins. Web, app, automation, or AI — we ship in focused sprints.",
  },
  {
    step: "04",
    title: "Launch & grow",
    description:
      "Deployment, handoff, and ongoing support. We stay involved as long as you need us.",
  },
]
