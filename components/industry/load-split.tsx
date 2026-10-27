'use client'

import { useEffect, useState } from 'react'
import { LayoutGroup, motion, useReducedMotion } from 'motion/react'
import { RotateCcw } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MonoLabel, OptionButton } from './flow'

export type LoadTask = { label: string; owner: 'system' | 'person' }

export function LoadSplit({
  person,
  system,
  tasks,
  autoplayMs,
  states = ['Before', 'After'],
  personNote,
  handoff,
  compact,
}: {
  person: string
  system: string
  tasks: LoadTask[]
  autoplayMs?: number
  states?: [string, string]
  personNote?: string
  handoff: string
  compact?: boolean
}) {
  const reduced = useReducedMotion()
  const [split, setSplit] = useState(false)

  useEffect(() => {
    if (!autoplayMs || reduced) return
    const id = setTimeout(() => setSplit(true), autoplayMs)
    return () => clearTimeout(id)
  }, [autoplayMs, reduced])

  const chip = (t: LoadTask, overloaded: boolean) => (
    <motion.li
      key={t.label}
      layoutId={`task-${t.label}`}
      layout
      transition={{ duration: reduced ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'rounded-md border px-2.5 py-1.5 text-[13.5px] font-medium',
        overloaded
          ? t.owner === 'system'
            ? 'border-ink/25 bg-cream text-ink'
            : 'border-line bg-background text-ink/80'
          : t.owner === 'system'
            ? 'border-background/15 bg-background/[0.06] text-background'
            : 'border-line bg-background text-ink',
      )}
    >
      {t.label}
    </motion.li>
  )

  const system_ = tasks.filter((t) => t.owner === 'system')
  const person_ = tasks.filter((t) => t.owner === 'person')

  return (
    <div
      className={cn(
        'flex flex-col gap-5 rounded-2xl border border-line bg-background p-5 shadow-[0_1px_0_rgba(0,0,0,0.02),0_24px_60px_-32px_rgba(10,30,20,0.25)] md:p-7',
        compact && 'md:p-6',
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <MonoLabel>{split ? 'Growth work separated' : 'Growth work on the advisor'}</MonoLabel>
        <div role="group" aria-label="View" className="flex gap-1.5">
          <OptionButton active={!split} onClick={() => setSplit(false)} className="min-h-9 px-2.5 py-1 text-[13px]">
            {states[0]}
          </OptionButton>
          <OptionButton active={split} onClick={() => setSplit(true)} className="min-h-9 px-2.5 py-1 text-[13px]">
            {states[1]}
          </OptionButton>
        </div>
      </div>
      <LayoutGroup>
        {!split ? (
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3 rounded-xl border border-ink/15 bg-paper p-4">
              <span className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-ink">
                <span aria-hidden="true" className="animate-signal-pulse size-2 rounded-full bg-signal" />
              </span>
              <span className="flex flex-col">
                <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink">{person}</span>
                <span className="text-[13.5px] text-muted-foreground">{personNote ?? 'Owns every part of growth'}</span>
              </span>
            </div>
            <ul className="flex flex-wrap gap-1.5">{tasks.map((t) => chip(t, true))}</ul>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-stretch">
            <motion.div layout className="flex flex-col gap-3 rounded-xl bg-ink p-4 text-background">
              <span className="flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.14em]">
                <span aria-hidden="true" className="size-2 rounded-full bg-signal" />
                {system}
              </span>
              <ul className="flex flex-wrap gap-1.5">{system_.map((t) => chip(t, false))}</ul>
            </motion.div>
            <div className="flex items-center justify-center">
              <span className="rounded-full bg-signal px-2.5 py-1 text-center font-mono text-[10px] uppercase leading-tight tracking-[0.12em] text-ink sm:max-w-24">
                {handoff}
              </span>
            </div>
            <motion.div layout className="flex flex-col gap-3 rounded-xl border border-ink/15 bg-paper p-4">
              <span className="flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink">
                <span aria-hidden="true" className="size-2 rounded-full bg-brand" />
                {person}
              </span>
              <ul className="flex flex-wrap gap-1.5">{person_.map((t) => chip(t, false))}</ul>
            </motion.div>
          </div>
        )}
      </LayoutGroup>
      {split && autoplayMs ? (
        <button
          type="button"
          onClick={() => setSplit(false)}
          className="inline-flex min-h-9 items-center gap-1.5 self-start text-[13.5px] text-muted-foreground transition-colors hover:text-ink"
        >
          <RotateCcw aria-hidden="true" className="size-3.5" />
          Replay
        </button>
      ) : null}
    </div>
  )
}
