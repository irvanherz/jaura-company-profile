import type { Metadata } from "next"

import { Footer } from "@/components/landing/footer"
import { Header } from "@/components/landing/header"
import { ProductsPageContent } from "@/components/products/products-page-content"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: `Products — ${site.name}`,
  description: `Explore agentic products by ${site.legalName}: Storydusk and Resumelike.`,
  openGraph: {
    title: `Products — ${site.name}`,
    description: `Agentic products built and run by ${site.name}.`,
    url: `${site.url}/products`,
  },
}

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <ProductsPageContent />
      </main>
      <Footer />
    </>
  )
}
