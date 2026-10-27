'use client'

import { motion, useReducedMotion } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import { cn } from '@/lib/utils'

function Lines({ count, mirror, reduced }: { count: number; mirror?: boolean; reduced: boolean | null }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" className="size-full">
      {Array.from({ length: count }).map((_, i) => {
        const y = ((i + 0.5) / count) * 100
        const d = mirror ? `M100,${y} C50,${y} 50,50 0,50` : `M0,${y} C50,${y} 50,50 100,50`
        return (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke="var(--signal)"
            strokeOpacity="0.75"
            strokeWidth="1.25"
            vectorEffect="non-scaling-stroke"
            initial={reduced ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          />
        )
      })}
    </svg>
  )
}

export function SourceMap({
  sources,
  center,
  centerNote,
  dark,
}: {
  sources: string[]
  center: string
  centerNote?: string
  dark?: boolean
}) {
  const reduced = useReducedMotion()
  const half = Math.ceil(sources.length / 2)
  const left = sources.slice(0, half)
  const right = sources.slice(half)

  const chip = (s: string, i: number, align: 'left' | 'right') => (
    <motion.li
      key={s}
      initial={reduced ? false : { opacity: 0, x: align === 'left' ? -12 : 12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className={cn('flex h-14 items-center', align === 'left' ? 'justify-end' : 'justify-start')}
    >
      <span
        className={cn(
          'rounded-lg border px-3.5 py-2 text-[14.5px] font-medium',
          dark ? 'border-background/20 bg-background/[0.04] text-background' : 'border-line bg-background text-ink',
        )}
      >
        {s}
      </span>
    </motion.li>
  )

  const core = (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-signal bg-ink px-6 py-6 text-center text-background lg:w-56">
      <span aria-hidden="true" className="animate-signal-pulse size-2.5 rounded-full bg-signal" />
      <span className="font-mono text-[12px] uppercase leading-tight tracking-[0.14em]">{center}</span>
      {centerNote ? <span className="text-[13.5px] leading-snug text-background/60">{centerNote}</span> : null}
    </div>
  )

  return (
    <div>
      <div className="hidden items-stretch lg:grid lg:grid-cols-[minmax(0,1fr)_7rem_auto_7rem_minmax(0,1fr)]">
        <ul>{left.map((s, i) => chip(s, i, 'left'))}</ul>
        <div style={{ height: `${left.length * 3.5}rem` }}>
          <Lines count={left.length} reduced={reduced} />
        </div>
        <div className="flex items-center">{core}</div>
        <div style={{ height: `${left.length * 3.5}rem` }} className="flex items-center">
          <div style={{ height: `${right.length * 3.5}rem` }} className="w-full">
            <Lines count={right.length} mirror reduced={reduced} />
          </div>
        </div>
        <div className="flex items-center">
          <ul className="w-full">{right.map((s, i) => chip(s, i + half, 'right'))}</ul>
        </div>
      </div>
      <div className="flex flex-col items-stretch gap-4 lg:hidden">
        <ul className="flex flex-wrap gap-2">
          {sources.map((s) => (
            <li
              key={s}
              className={cn(
                'rounded-lg border px-3 py-1.5 text-[14px]',
                dark ? 'border-background/20 text-background' : 'border-line bg-background text-ink',
              )}
            >
              {s}
            </li>
          ))}
        </ul>
        <ArrowDown aria-hidden="true" className={cn('mx-auto size-5', dark ? 'text-signal' : 'text-brand')} />
        {core}
      </div>
    </div>
  )
}
