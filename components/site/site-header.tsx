'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, ChevronDown, Menu } from 'lucide-react'
import { NAV, SITE } from '@/lib/site'
import { Logo } from '@/components/brand/logo'
import { MegaMenuPanel } from './mega-menu'
import { MobileNav } from './mobile-nav'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }
  const scheduleClose = () => {
    cancelClose()
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140)
  }
  const openedAt = useRef(0)
  const open = (id: string) => {
    cancelClose()
    setOpenMenu((current) => {
      if (current !== id) openedAt.current = Date.now()
      return id
    })
  }
  const closeAll = useCallback(() => {
    cancelClose()
    setOpenMenu(null)
  }, [])
  const closeMobile = useCallback(() => setMobileOpen(false), [])

  useEffect(() => {
    if (!openMenu) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        const trigger = triggerRefs.current[openMenu]
        setOpenMenu(null)
        trigger?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openMenu])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300',
          scrolled || openMenu
            ? 'border-line bg-background/92 backdrop-blur-md'
            : 'border-line/70 bg-background',
        )}
        onMouseLeave={scheduleClose}
      >
        <div
          className={cn(
            'container-site relative flex items-center justify-between gap-6 transition-[height] duration-300 ease-[var(--ease-system)]',
            scrolled ? 'h-16 lg:h-[68px]' : 'h-18 lg:h-[84px]',
          )}
        >
          <Logo size={scrolled ? 32 : 36} className="transition-all duration-300" />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV.map((menu) => {
                const isOpen = openMenu === menu.id
                const panelId = `mega-${menu.id}`
                return (
                  <li
                    key={menu.id}
                    onMouseEnter={() => open(menu.id)}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                        scheduleClose()
                      }
                    }}
                  >
                    <button
                      ref={(node) => {
                        triggerRefs.current[menu.id] = node
                      }}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => {
                        const recentlyOpened = Date.now() - openedAt.current < 450
                        if (isOpen && !recentlyOpened) setOpenMenu(null)
                        else open(menu.id)
                      }}
                      onFocus={(event) => {
                        if (event.currentTarget.matches(':focus-visible')) open(menu.id)
                      }}
                      className={cn(
                        'relative flex h-10 items-center gap-1.5 rounded-lg px-3.5 text-[14.5px] font-medium transition-colors duration-200',
                        isOpen ? 'text-brand' : 'text-ink/80 hover:text-ink',
                      )}
                    >
                      {menu.label}
                      <ChevronDown
                        aria-hidden="true"
                        className={cn(
                          'size-3.5 opacity-60 transition-transform duration-200',
                          isOpen && 'rotate-180 opacity-100',
                        )}
                      />
                      <span
                        aria-hidden="true"
                        className={cn(
                          'absolute inset-x-3.5 -bottom-px h-px origin-left bg-brand transition-transform duration-300 ease-[var(--ease-system)]',
                          isOpen ? 'scale-x-100' : 'scale-x-0',
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen ? (
                        <div onMouseEnter={cancelClose}>
                          <MegaMenuPanel menu={menu} id={panelId} onNavigate={closeAll} />
                        </div>
                      ) : null}
                    </AnimatePresence>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={SITE.bookHref}
              className="group/btn hidden h-11 items-center gap-2 rounded-lg bg-brand px-4 text-[14px] font-medium text-primary-foreground transition-colors duration-200 hover:bg-brand-deep md:inline-flex xl:px-5"
            >
              <span className="xl:hidden">Book a Review</span>
              <span className="hidden xl:inline">{SITE.bookLabel}</span>
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover/btn:translate-x-1"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              className="-mr-2 flex size-12 items-center justify-center rounded-lg text-ink hover:bg-paper lg:hidden"
              aria-label="Open navigation"
            >
              <Menu className="size-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {openMenu ? (
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 hidden bg-ink/10 lg:block"
            onClick={closeAll}
          />
        ) : null}
      </AnimatePresence>

      <MobileNav open={mobileOpen} onClose={closeMobile} />
    </>
  )
}
