import { Capabilities } from "@/components/landing/capabilities"
import { Contact } from "@/components/landing/contact"
import { Faq } from "@/components/landing/faq"
import { Footer } from "@/components/landing/footer"
import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Process } from "@/components/landing/process"
import { ProductsPreview } from "@/components/landing/products-preview"
import { Services } from "@/components/landing/services"
import { Stats } from "@/components/landing/stats"
import { WhyJaura } from "@/components/landing/why-jaura"

export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <Capabilities />
        <Services />
        <ProductsPreview />
        <Process />
        <WhyJaura />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
