import type { Metadata } from "next"

import { ContactPageContent } from "@/components/contact/contact-page-content"
import { Footer } from "@/components/landing/footer"
import { Header } from "@/components/landing/header"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description: `Get in touch with ${site.legalName}. Email ${site.email}, call ${site.phoneDisplay}, or visit us in ${site.headquarters}.`,
  openGraph: {
    title: `Contact — ${site.name}`,
    description: `Contact ${site.legalName} at ${site.email} or ${site.phoneDisplay}.`,
    url: `${site.url}/contact`,
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main">
        <ContactPageContent />
      </main>
      <Footer />
    </>
  )
}
