'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { MonoLabel, TagRow } from './stage-parts'

export type Stage = { label: string; body: string; meta?: string[]; metaLabel?: string }

export function StageExplorer({
  stages,
  dark,
  progressive,
  label,
}: {
  stages: Stage[]
  dark?: boolean
  progressive?: boolean
  label: string
}) {
  const [active, setActive] = useState(0)
  const current = stages[active]

  const detail = (stage: Stage) => (
    <div className="flex flex-col gap-4">
      <p className={cn('max-w-3xl text-[16.5px] leading-relaxed text-pretty', dark ? 'text-background/80' : 'text-ink/80')}>
        {stage.body}
      </p>
      {stage.meta ? (
        <div className="flex flex-col gap-2.5">
          {stage.metaLabel ? <MonoLabel dark={dark}>{stage.metaLabel}</MonoLabel> : null}
          <TagRow items={stage.meta} dark={dark} />
        </div>
      ) : null}
    </div>
  )

  return (
    <div className="flex flex-col gap-6">
      <ol aria-label={label} className="relative flex flex-col gap-2 lg:flex-row lg:gap-0">
        <span
          aria-hidden="true"
          className={cn('absolute top-[1.375rem] right-0 left-0 hidden h-px lg:block', dark ? 'bg-background/15' : 'bg-ink/10')}
        />
        {stages.map((stage, i) => {
          const isActive = i === active
          const reached = progressive ? i <= active : isActive
          return (
            <li key={stage.label} className="relative lg:flex-1">
              <button
                type="button"
                aria-expanded={isActive}
                onClick={() => setActive(i)}
                className={cn(
                  'flex min-h-11 w-full items-center gap-3 rounded-lg border px-4 py-3 text-left transition-colors duration-200 lg:flex-col lg:items-start lg:border-0 lg:bg-transparent lg:px-0 lg:pr-4 lg:pt-4 lg:pb-0',
                  isActive
                    ? dark
                      ? 'border-signal bg-signal/10'
                      : 'border-ink bg-paper'
                    : dark
                      ? 'border-background/15'
                      : 'border-line bg-background',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'relative z-10 size-3 shrink-0 rounded-full border-2 transition-colors lg:-mt-[0.6rem]',
                    reached
                      ? 'border-signal bg-signal'
                      : dark
                        ? 'border-background/30 bg-ink'
                        : 'border-ink/25 bg-background',
                    isActive && 'animate-signal-pulse',
                  )}
                />
                <span className="flex flex-col gap-1">
                  <span className={cn('font-mono text-[11px] tracking-[0.12em]', dark ? 'text-background/45' : 'text-muted-foreground')}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={cn(
                      'text-[15.5px] font-medium leading-snug transition-colors',
                      isActive ? (dark ? 'text-background' : 'text-ink') : dark ? 'text-background/60' : 'text-ink/60',
                    )}
                  >
                    {stage.label}
                  </span>
                </span>
              </button>
              {isActive ? <div className="px-4 pt-3 pb-4 lg:hidden">{detail(stage)}</div> : null}
            </li>
          )
        })}
      </ol>
      <div
        aria-live="polite"
        className={cn(
          'hidden rounded-xl border p-8 lg:block',
          dark ? 'border-background/15 bg-background/[0.03]' : 'border-line bg-background',
        )}
      >
        <div key={active} className="animate-in fade-in-0 slide-in-from-bottom-1 flex flex-col gap-4 duration-300">
          <p className={cn('text-2xl font-medium tracking-tight', dark ? 'text-background' : 'text-ink')}>{current.label}</p>
          {detail(current)}
        </div>
      </div>
    </div>
  )
}
