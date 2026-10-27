'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, Plus, X } from 'lucide-react'
import { NAV, SITE } from '@/lib/site'
import { Logo } from '@/components/brand/logo'
import { cn } from '@/lib/utils'

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] } }}
          exit={{ opacity: 0, y: 8, transition: { duration: 0.16 } }}
          className="fixed inset-0 z-[60] flex flex-col bg-background lg:hidden"
        >
          <div className="container-site flex h-18 shrink-0 items-center justify-between border-b border-line">
            <Logo size={32} />
            <button
              type="button"
              onClick={onClose}
              className="-mr-2 flex size-12 items-center justify-center rounded-lg text-ink hover:bg-paper"
              aria-label="Close navigation"
            >
              <X className="size-6" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto">
            <ul className="container-site flex flex-col py-2">
              {NAV.map((menu) => {
                const isOpen = expanded === menu.id
                const panelId = `mobile-panel-${menu.id}`
                return (
                  <li key={menu.id} className="border-b border-line">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setExpanded(isOpen ? null : menu.id)}
                      className="flex w-full items-center justify-between py-5 text-left text-xl font-medium tracking-tight text-ink"
                    >
                      {menu.label}
                      <Plus
                        aria-hidden="true"
                        className={cn(
                          'size-5 text-muted-foreground transition-transform duration-300 ease-[var(--ease-system)]',
                          isOpen && 'rotate-45 text-brand',
                        )}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          id={panelId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-6 pb-6">
                            {menu.columns.map((column) => (
                              <div key={column.label} className="flex flex-col gap-1">
                                <p className="pb-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                                  {column.label}
                                </p>
                                <ul className="flex flex-col">
                                  {column.links.map((link) => (
                                    <li key={link.href + link.title}>
                                      <Link
                                        href={link.href}
                                        onClick={onClose}
                                        className="flex min-h-12 items-center justify-between gap-3 py-2 text-[17px] text-ink"
                                      >
                                        <span>{link.title}</span>
                                        {link.comingSoon ? (
                                          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                                            Soon
                                          </span>
                                        ) : null}
                                      </Link>
                                      {link.children ? (
                                        <ul className="ml-1 flex flex-col border-l border-line pl-4">
                                          {link.children.map((child) => (
                                            <li key={child.href}>
                                              <Link
                                                href={child.href}
                                                onClick={onClose}
                                                className="flex min-h-11 items-center text-[16px] text-muted-foreground hover:text-ink"
                                              >
                                                {child.title}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      ) : null}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="container-site shrink-0 border-t border-line bg-background py-4">
            <Link
              href={SITE.bookHref}
              onClick={onClose}
              className="flex h-14 w-full items-center justify-center gap-2 rounded-[10px] bg-brand text-base font-medium text-primary-foreground"
            >
              {SITE.bookLabel}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
