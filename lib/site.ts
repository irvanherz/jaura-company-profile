export const site = {
  name: "Jaura",
  legalName: "PT Jaura Teknologi Indonesia",
  domain: "jaura.id",
  url: "https://jaura.id",
  email: "hello@jaura.id",
  phone: "+6285113065397",
  phoneDisplay: "+62 851-1306-5397",
  address: {
    street: "Dsn Padangan RT 2 RW 2",
    village: "Ds Karangsari",
    district: "Kec Rejotangan",
    regency: "Kab Tulungagung",
    province: "East Java",
    country: "Indonesia",
  },
  tagline: "Digital solutions & agentic products",
  headquarters: "Kabupaten Tulungagung, East Java, Indonesia",
  description:
    "PT Jaura Teknologi Indonesia builds IT digital solutions and manages agentic products including Storydusk and Resumelike.",
  founded: "2026-06-26",
  mission:
    "An initiative to bring a better digital future — through thoughtful technology, agentic products, and end-to-end digital solutions.",
  founder: {
    name: "Muhammad Irvan Hermawan",
    portfolio: "https://ivn.my.id",
    portfolioDomain: "ivn.my.id",
  },
  products: [
    {
      name: "Storydusk",
      url: "https://storydusk.com",
      tagline: "Agentic writing platform",
      description:
        "AI-powered writing workspace for creators who want drafts, edits, and structure handled intelligently.",
      features: [
        "AI-assisted drafting & editing",
        "Structured writing workflows",
        "Built for creators and teams",
      ],
    },
    {
      name: "Resumelike",
      url: "https://resumelike.com",
      tagline: "Agentic resume builder",
      description:
        "Build polished, tailored resumes with an AI agent that understands your experience and target roles.",
      features: [
        "Tailored resume generation",
        "Role-aware content suggestions",
        "Export-ready professional layouts",
      ],
    },
  ],
  stats: [
    { value: "2", label: "Agentic products live" },
    { value: "7+", label: "Digital service areas" },
    { value: "2026", label: "Founded" },
    { value: "1", label: "HQ in East Java" },
  ],
  capabilities: [
    "Web apps",
    "Mobile apps",
    "Automation",
    "AI & agents",
    "Cloud & DevOps",
    "Consultation",
    "Digital strategy",
  ],
  faqs: [
    {
      question: "What services does Jaura provide?",
      answer:
        "We offer app consultation, web and mobile development, automation & integrations, AI & agentic systems, cloud & DevOps, and digital strategy — from early discovery through launch and beyond.",
    },
    {
      question: "Do you only build for clients, or do you have your own products?",
      answer:
        "Both. We run our own agentic products — Storydusk and Resumelike — while also delivering custom digital solutions for clients. We practice what we preach.",
    },
    {
      question: "Where is Jaura based?",
      answer:
        "PT Jaura Teknologi Indonesia is headquartered in Kabupaten Tulungagung, East Java, Indonesia. We work with clients locally and remotely.",
    },
    {
      question: "How do I start a project with Jaura?",
      answer:
        "Reach out via email or phone, or book an app consultation. We'll discuss your goals, scope, and timeline — then recommend the right approach before any development begins.",
    },
    {
      question: "Can you help if I only have an idea, not a full spec?",
      answer:
        "Absolutely. App consultation is designed for exactly that — we help validate ideas, choose technology, and map a realistic path from concept to launch.",
    },
  ],
  values: [
    {
      title: "End-to-end delivery",
      description:
        "From discovery to deployment, we own the full lifecycle so you ship faster with fewer handoffs.",
    },
    {
      title: "Agentic-first expertise",
      description:
        "We build with AI at the core — not as an afterthought — for products that feel genuinely intelligent.",
    },
    {
      title: "Managed product experience",
      description:
        "We don't just consult; we run our own products. Storydusk and Resumelike prove we build what we preach.",
    },
  ],
}

export type Product = (typeof site.products)[number]

export function formatAddress() {
  const { street, village, district, regency, province, country } = site.address
  return `${street}, ${village}, ${district}, ${regency}, ${province}, ${country}`
}
