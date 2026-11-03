'use client'

import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import type { NavLink, NavMenu } from '@/lib/site'
import { cn } from '@/lib/utils'

function MenuRow({
  link,
  index,
  onNavigate,
}: {
  link: NavLink
  index?: number
  onNavigate: () => void
}) {
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className="group/row relative flex items-start gap-4 border-t border-brand/12 py-3.5 pr-2 transition-colors duration-200 hover:bg-cream/50 focus-visible:bg-cream/50"
    >
      <span
        aria-hidden="true"
        className="absolute -left-px top-0 h-full w-0.5 origin-top scale-y-0 bg-signal transition-transform duration-300 ease-[var(--ease-system)] group-hover/row:scale-y-100 group-focus-visible/row:scale-y-100"
      />
      {index !== undefined ? (
        <span className="w-6 shrink-0 pl-3 pt-[3px] font-mono text-[11px] tabular-nums text-brand/50">
          {String(index).padStart(2, '0')}
        </span>
      ) : null}
      <span className={cn('flex min-w-0 flex-1 flex-col gap-1', index === undefined && 'pl-3')}>
        <span className="flex items-center gap-2">
          <span className="text-[15px] font-medium tracking-tight text-brand">{link.title}</span>
          {link.comingSoon ? (
            <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-brand/45">Soon</span>
          ) : null}
        </span>
        <span className="text-pretty text-[13px] leading-relaxed text-ink/60">{link.description}</span>
      </span>
      <ArrowRight
        aria-hidden="true"
        className="mt-1 size-3.5 shrink-0 -translate-x-1 text-brand/40 transition-all duration-200 group-hover/row:translate-x-0 group-hover/row:text-brand"
      />
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
  const groupCount = menu.groups.length
  let counter = 0

  return (
    <motion.div
      id={id}
      role="region"
      aria-label={`${menu.label} menu`}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
      exit={{ opacity: 0, y: -4, transition: { duration: 0.14, ease: [0.4, 0, 1, 1] } }}
      className={cn(
        'absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3',
        groupCount > 2
          ? 'w-[min(1200px,calc(100vw-48px))]'
          : groupCount > 1
            ? 'w-[min(1080px,calc(100vw-48px))]'
            : 'w-[min(820px,calc(100vw-48px))]',
      )}
    >
      <div className="flex overflow-hidden rounded-[4px] border border-brand/15 bg-background shadow-[0_28px_60px_-36px_rgb(0_74_66_/_0.35)]">
        <div
          className={cn(
            'flex shrink-0 flex-col justify-between gap-10 border-r border-brand/12 bg-cream p-8',
            groupCount > 2 ? 'w-[264px]' : 'w-[300px]',
          )}
        >
          <div className="flex flex-col gap-4">
            <p className="flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-brand/70">
              <span aria-hidden="true" className="size-1.5 bg-signal ring-1 ring-brand/30" />
              {menu.intro.eyebrow}
            </p>
            <p className="text-balance text-[22px] font-medium leading-tight tracking-tight text-brand">
              {menu.intro.title}
            </p>
            <p className="text-pretty text-[13.5px] leading-relaxed text-brand/70">{menu.intro.body}</p>
          </div>
          {menu.intro.cta ? (
            <Link
              href={menu.intro.cta.href}
              onClick={onNavigate}
              className="group/cta inline-flex items-center gap-1.5 self-start border-b border-brand/30 pb-0.5 text-[13.5px] font-medium text-brand transition-colors hover:border-brand"
            >
              {menu.intro.cta.label}
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 transition-transform duration-200 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5"
              />
            </Link>
          ) : null}
        </div>

        <div
          className={cn(
            'grid flex-1 gap-x-7 px-8 py-7',
            groupCount > 2 ? 'grid-cols-3' : groupCount > 1 ? 'grid-cols-2' : 'grid-cols-1',
          )}
        >
          {menu.groups.map((group) => (
            <div key={group.label} className="flex flex-col">
              <div className="flex flex-col gap-1.5 pb-4">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-brand">{group.label}</p>
                {group.description ? (
                  <p className="text-pretty text-[13px] leading-relaxed text-ink/55">{group.description}</p>
                ) : null}
              </div>
              <ul className="flex flex-col border-b border-brand/12">
                {group.links.map((link) => {
                  if (menu.numbered) counter += 1
                  return (
                    <li key={link.href}>
                      <MenuRow
                        link={link}
                        index={menu.numbered ? counter : undefined}
                        onNavigate={onNavigate}
                      />
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
