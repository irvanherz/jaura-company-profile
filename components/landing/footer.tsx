"use client"

import { motion } from "motion/react"
import Link from "next/link"

import { Reveal } from "@/components/landing/reveal"
import { ease } from "@/lib/motion"
import {
  aboutHref,
  contactHref,
  productsHref,
  servicesHref,
} from "@/lib/navigation"
import { formatAddress, site } from "@/lib/site"

const footerNav = [
  { href: servicesHref, label: "Services" },
  { href: productsHref, label: "Products" },
  { href: aboutHref, label: "About" },
  { href: contactHref, label: "Contact" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-background/20">
      <Reveal>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 lg:col-span-1">
            <Link
              href="/"
              className="jaura-gradient-text inline-block text-base font-semibold"
            >
              {site.name}
            </Link>
            <p className="text-sm text-muted-foreground">{site.legalName}</p>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {formatAddress()}
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Navigate
            </p>
            <nav className="flex flex-col gap-2 text-sm" aria-label="Footer">
              {footerNav.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Products
            </p>
            <nav className="flex flex-col gap-2 text-sm" aria-label="Products">
              {site.products.map((product) => (
                <FooterLink key={product.name} href={product.url} external>
                  {product.name}
                </FooterLink>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Contact
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <FooterLink href={`mailto:${site.email}`}>{site.email}</FooterLink>
              <FooterLink href={`tel:${site.phone}`}>{site.phoneDisplay}</FooterLink>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="border-t border-border/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <motion.a
            href={site.url}
            className="font-mono text-xs"
            whileHover={{ color: "var(--jaura-accent)" }}
            transition={{ duration: 0.3, ease }}
          >
            {site.domain}
          </motion.a>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string
  children: React.ReactNode
  external?: boolean
}) {
  const className =
    "w-fit transition-colors hover:text-[var(--jaura-accent)]"

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        <span className="sr-only"> (opens in new tab)</span>
      </a>
    )
  }

  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
