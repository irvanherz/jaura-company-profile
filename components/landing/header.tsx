"use client"

import { AnimatePresence, motion } from "motion/react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

import { ThemeToggle } from "@/components/landing/theme-toggle"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { ease } from "@/lib/motion"
import { contactHref, navLinks } from "@/lib/navigation"
import { cn } from "@/lib/utils"

function isNavActive(pathname: string, href: string) {
  if (href.includes("#")) {
    return false
  }
  return pathname === href
}

export function Header() {
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full backdrop-blur-2xl backdrop-saturate-150 transition-colors duration-300",
        scrolled ? "bg-background/80 shadow-[0_1px_0_var(--border)]" : "bg-background/20"
      )}
      transition={{ duration: 0.4, ease }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo
          nameVariant="legal"
          gradientName
          nameClassName="hidden max-w-[9.5rem] text-[0.6875rem] leading-tight sm:block md:max-w-[11rem] md:text-xs lg:max-w-none lg:text-sm lg:whitespace-nowrap"
        />

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              active={isNavActive(pathname, link.href)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="ml-2 flex items-center gap-1 border-l border-border/50 pl-2">
            <ThemeToggle />
            <Button size="sm" asChild>
              <Link href={contactHref}>Get in touch</Link>
            </Button>
          </div>
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button
              variant="ghost"
              size="icon"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <motion.span
                animate={{ rotate: open ? 90 : 0 }}
                transition={{ duration: 0.3, ease }}
              >
                {open ? <X /> : <Menu />}
              </motion.span>
            </Button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden border-t border-border/25 bg-background/15 backdrop-blur-2xl md:hidden"
            aria-label="Mobile"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ delay: index * 0.05, duration: 0.3, ease }}
                >
                  <MobileNavLink
                    href={link.href}
                    active={isNavActive(pathname, link.href)}
                    onNavigate={() => setOpen(false)}
                  >
                    {link.label}
                  </MobileNavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ delay: 0.2, duration: 0.3, ease }}
              >
                <Button className="mt-2 w-full" asChild onClick={() => setOpen(false)}>
                  <Link href={contactHref}>Get in touch</Link>
                </Button>
              </motion.div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>

      <div className="jaura-shimmer-border" aria-hidden />
    </motion.header>
  )
}

function NavLink({
  href,
  children,
  active,
}: {
  href: string
  children: React.ReactNode
  active?: boolean
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative inline-flex h-8 items-center rounded-full px-3.5 text-sm transition-colors",
        active
          ? "font-medium text-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {active ? (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 rounded-full bg-primary/15 ring-1 ring-primary/25"
          transition={{ type: "spring", stiffness: 420, damping: 32 }}
        />
      ) : null}
      <span className="relative z-10">{children}</span>
    </Link>
  )
}

function MobileNavLink({
  href,
  children,
  active,
  onNavigate,
}: {
  href: string
  children: React.ReactNode
  active?: boolean
  onNavigate: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex h-10 w-full items-center rounded-full px-4 text-sm transition-colors",
        active
          ? "bg-primary/15 font-medium text-foreground ring-1 ring-primary/25"
          : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
      )}
    >
      {children}
    </Link>
  )
}
