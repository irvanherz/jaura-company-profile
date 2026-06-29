import type { Metadata } from "next"

import { AboutPageContent } from "@/components/about/about-page-content"
import { Footer } from "@/components/landing/footer"
import { Header } from "@/components/landing/header"
import { formatProductNames, site } from "@/lib/site"

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description: `${site.legalName} is an app studio founded by ${site.founder.name} — building web and mobile apps and agentic products including ${formatProductNames()}. Headquartered in ${site.headquarters}.`,
  openGraph: {
    title: `About — ${site.name}`,
    description: site.mission,
    url: `${site.url}/about`,
  },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main">
        <AboutPageContent />
      </main>
      <Footer />
    </>
  )
}
