'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Logo } from '@/components/brand/logo'
import { LIQUIDITY_MAP_HREF } from '@/components/intel/data'
import { cn } from '@/lib/utils'

const HOME_NAV = [
  { label: 'Infrastructure', href: '#infrastructure' },
  { label: 'Intelligence', href: '#intelligence' },
  { label: 'Who We Work With', href: '#who-we-work-with' },
  { label: 'Insights', href: '/resources/insights' },
  { label: 'About', href: '/about' },
]

export function HomeHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'on-dark sticky top-0 z-50 border-b transition-[background-color,border-color] duration-300',
          scrolled ? 'border-background/10 bg-ink/90 backdrop-blur-md' : 'border-transparent bg-ink',
        )}
      >
        <div className="container-site flex h-16 items-center justify-between gap-6 lg:h-[72px]">
          <Logo variant="green" tone="dark" size={32} />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {HOME_NAV.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex h-10 items-center rounded-[4px] px-3.5 text-[14px] text-background/70 transition-colors duration-200 hover:text-background"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={LIQUIDITY_MAP_HREF}
              className="group/btn hidden h-10 items-center gap-2 rounded-[4px] border border-background/20 px-4 text-[14px] font-medium text-background transition-colors duration-200 hover:border-signal hover:text-signal md:inline-flex"
            >
              Request Market Mapping
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover/btn:translate-x-1"
              />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="home-mobile-navigation"
              aria-label="Open navigation"
              className="-mr-2 flex size-12 items-center justify-center rounded-[4px] text-background lg:hidden"
            >
              <Menu className="size-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="home-mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="on-dark fixed inset-0 z-[60] flex flex-col bg-ink text-background lg:hidden"
          >
            <div className="container-site flex h-16 shrink-0 items-center justify-between border-b border-background/10">
              <Logo variant="green" tone="dark" size={32} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation"
                className="-mr-2 flex size-12 items-center justify-center rounded-[4px] text-background"
              >
                <X className="size-6" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex-1 overflow-y-auto">
              <ul className="container-site flex flex-col py-4">
                {HOME_NAV.map((item, i) => (
                  <li key={item.label} className="border-b border-background/10">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-16 items-center justify-between text-xl font-medium tracking-tight"
                    >
                      {item.label}
                      <span className="font-mono text-[11px] text-background/40">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="container-site shrink-0 border-t border-background/10 py-4">
              <Link
                href={LIQUIDITY_MAP_HREF}
                onClick={() => setOpen(false)}
                className="flex h-14 w-full items-center justify-center gap-2 rounded-[4px] bg-signal text-base font-medium text-ink"
              >
                Request Market Mapping
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
