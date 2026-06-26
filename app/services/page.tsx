import type { Metadata } from "next"

import { Footer } from "@/components/landing/footer"
import { Header } from "@/components/landing/header"
import { ServicesPageContent } from "@/components/services/services-page-content"
import { servicesIntro } from "@/lib/services"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: `Services — ${site.name}`,
  description: servicesIntro,
  openGraph: {
    title: `Services — ${site.name}`,
    description: servicesIntro,
    url: `${site.url}/services`,
  },
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main">
        <ServicesPageContent />
      </main>
      <Footer />
    </>
  )
}
