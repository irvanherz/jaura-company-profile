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
  tagline: "Web & mobile product studio",
  headquarters: "Kabupaten Tulungagung, East Java, Indonesia",
  description:
    "PT Jaura Teknologi Indonesia builds web and mobile apps, agentic products, and digital experiences — including Resumelike and Storydusk.",
  founded: "2026-06-26",
  mission:
    "A young studio focused on building software people actually want to use — thoughtful apps, agentic products, and digital experiences that ship.",
  founder: {
    name: "Muhammad Irvan Hermawan",
    portfolio: "https://ivn.my.id",
    portfolioDomain: "ivn.my.id",
  },
  products: [
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
      featured: true,
    },
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
  ],
  stats: [
    { value: "2", label: "Agentic products live" },
    { value: "7+", label: "App & product skills" },
    { value: "2026", label: "Founded" },
    { value: "1", label: "HQ in East Java" },
  ],
  capabilities: [
    "Web apps",
    "Mobile apps",
    "AI & agents",
    "Automation",
    "Cloud & DevOps",
    "Digital strategy",
    "App consultation",
  ],
  faqs: [
    {
      question: "What services does Jaura provide?",
      answer:
        "We primarily build web and mobile apps, plus AI and automation work when a product needs it. We also run our own agentic products — Resumelike and Storydusk — and offer app consultation if you want guidance before development.",
    },
    {
      question: "Do you only build for clients, or do you have your own products?",
      answer:
        "Both. We ship our own agentic products — Resumelike and Storydusk — and build custom apps for clients who want the same builder mindset behind their product.",
    },
    {
      question: "Where is Jaura based?",
      answer:
        "PT Jaura Teknologi Indonesia is headquartered in Kabupaten Tulungagung, East Java, Indonesia. We work with clients locally and remotely.",
    },
    {
      question: "How do I start a project with Jaura?",
      answer:
        "Reach out via email or phone and tell us about the app you want to build. We'll discuss goals, scope, and timeline — and recommend the right way to start.",
    },
    {
      question: "Can you help if I only have an idea, not a full spec?",
      answer:
        "Yes. If you're not ready to build yet, app consultation is available to help validate the idea, choose technology, and map a realistic path from concept to launch.",
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
      title: "Ship-first mindset",
      description:
        "We're builders at heart. Our own products — Resumelike and Storydusk — sit alongside the client apps we design, develop, and launch.",
    },
  ],
}

export type Product = (typeof site.products)[number]

export function formatProductNames() {
  return site.products.map((product) => product.name).join(" and ")
}

export function formatAddress() {
  const { street, village, district, regency, province, country } = site.address
  return `${street}, ${village}, ${district}, ${regency}, ${province}, ${country}`
}
