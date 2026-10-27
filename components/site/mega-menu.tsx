'use client'

import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import type { NavLink, NavMenu } from '@/lib/site'
import { cn } from '@/lib/utils'

function MenuLink({ link, nested = false, onNavigate }: { link: NavLink; nested?: boolean; onNavigate: () => void }) {
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className={cn(
        'group/link -mx-3 flex flex-col gap-1 rounded-lg px-3 py-3 transition-colors duration-200 hover:bg-paper focus-visible:bg-paper',
        nested && 'py-2.5',
      )}
    >
      <span className="flex items-center gap-2">
        <span
          className={cn(
            'font-medium tracking-tight text-ink transition-transform duration-200 ease-[var(--ease-system)] group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1',
            nested ? 'text-[15px]' : 'text-[17px]',
          )}
        >
          {link.title}
        </span>
        {link.comingSoon ? (
          <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-muted-foreground">
            Coming soon
          </span>
        ) : null}
        <ArrowRight
          aria-hidden="true"
          className="size-3.5 -translate-x-1 text-brand opacity-0 transition-all duration-200 group-hover/link:translate-x-0.5 group-hover/link:opacity-100 group-focus-visible/link:opacity-100"
        />
      </span>
      <span className="text-pretty text-[13.5px] leading-relaxed text-muted-foreground">
        {link.description}
      </span>
    </Link>
  )
}

export function MegaMenuPanel({
  menu,
  id,
  onNavigate,
}: {
  menu: NavMenu
  id: string
  onNavigate: () => void
}) {
  const columnCount = menu.columns.length
  return (
    <motion.div
      id={id}
      role="region"
      aria-label={`${menu.label} menu`}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
      exit={{ opacity: 0, y: -6, transition: { duration: 0.14, ease: [0.4, 0, 1, 1] } }}
      className="absolute left-1/2 top-full z-50 w-[min(1200px,calc(100vw-48px))] -translate-x-1/2 pt-3"
    >
      <div className="overflow-hidden rounded-2xl border border-line bg-background shadow-[0_24px_60px_-30px_rgb(9_11_10_/_0.25)]">
        <div className="flex">
          <div
            className={cn(
              'grid flex-1 divide-x divide-line',
              columnCount === 1 && 'grid-cols-1',
              columnCount === 2 && 'grid-cols-2',
              columnCount === 3 && 'grid-cols-3',
            )}
          >
            {menu.columns.map((column) => (
              <div key={column.label} className="flex flex-col gap-4 p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {column.label}
                </p>
                <ul className={cn('flex flex-col', columnCount === 1 && 'grid grid-cols-2 gap-x-10')}>
                  {column.links.map((link) => (
                    <li key={link.href + link.title}>
                      <MenuLink link={link} onNavigate={onNavigate} />
                      {link.children ? (
                        <ul className="ml-1 mt-1 flex flex-col border-l border-line pl-4">
                          {link.children.map((child) => (
                            <li key={child.href}>
                              <MenuLink link={child} nested onNavigate={onNavigate} />
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
          <FeaturePanel menu={menu} onNavigate={onNavigate} />
        </div>
      </div>
    </motion.div>
  )
}

function FeaturePanel({ menu, onNavigate }: { menu: NavMenu; onNavigate: () => void }) {
  const { feature } = menu
  return (
    <div className="on-dark relative flex w-[340px] shrink-0 flex-col justify-between gap-10 overflow-hidden bg-ink p-8 text-background">
      <div aria-hidden="true" className="bg-grid-dark absolute inset-0" />
      <div className="relative flex flex-col gap-4">
        <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-background/60">
          <span className="size-1.5 animate-signal-pulse rounded-full bg-signal" />
          {feature.label}
        </p>
        <p className="text-balance text-2xl font-medium leading-tight tracking-tight">{feature.headline}</p>
        <p className="text-pretty text-[14px] leading-relaxed text-background/65">{feature.body}</p>
      </div>
      <Link
        href={feature.href}
        onClick={onNavigate}
        className="group/cta relative inline-flex items-center gap-2 self-start text-[14.5px] font-medium text-signal"
      >
        {feature.cta}
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5"
        />
      </Link>
    </div>
  )
}
