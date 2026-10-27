'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { MonoLabel, OptionButton } from './flow'

export type GrowthBlock = { label: string; body: string; kind: 'focus' | 'influence' | 'external' }

export function GrowthComposition({
  title,
  blocks,
  views,
  focusLabel,
}: {
  title: string
  blocks: GrowthBlock[]
  views: [string, string]
  focusLabel: string
}) {
  const [focus, setFocus] = useState(false)

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <MonoLabel>{title}</MonoLabel>
        <div role="group" aria-label="View" className="flex flex-wrap gap-2">
          <OptionButton active={!focus} onClick={() => setFocus(false)}>
            {views[0]}
          </OptionButton>
          <OptionButton active={focus} onClick={() => setFocus(true)}>
            {views[1]}
          </OptionButton>
        </div>
      </div>
      <div aria-hidden="true" className="flex h-16 gap-1 overflow-hidden rounded-xl">
        {blocks.map((b) => (
          <div
            key={b.label}
            className={cn(
              'flex flex-1 items-end p-3 transition-[background-color,color,flex-grow] duration-700 ease-[var(--ease-system)]',
              !focus && 'bg-ink/[0.08] text-ink/70',
              focus && b.kind === 'focus' && 'grow-[2.6] bg-signal text-ink',
              focus && b.kind === 'influence' && 'bg-brand text-background',
              focus && b.kind === 'external' && 'bg-ink/[0.04] text-ink/30',
            )}
          >
            <span className="hidden truncate font-mono text-[10.5px] uppercase tracking-[0.12em] sm:block">{b.label}</span>
          </div>
        ))}
      </div>
      <ul
        className={cn(
          'grid grid-cols-1 gap-3 sm:grid-cols-2',
          blocks.length % 3 === 0 ? 'lg:grid-cols-3' : blocks.length % 4 === 0 ? 'lg:grid-cols-4' : 'lg:grid-cols-5',
        )}
      >
        {blocks.map((b) => (
          <li
            key={b.label}
            className={cn(
              'flex flex-col gap-2.5 rounded-xl border p-5 transition-[opacity,border-color,background-color] duration-500',
              focus && b.kind === 'focus' && 'border-signal bg-paper',
              focus && b.kind === 'influence' && 'border-brand/40',
              focus && b.kind === 'external' && 'opacity-45',
              !focus && 'border-line bg-background',
            )}
          >
            <span className="flex items-center justify-between gap-2">
              <span className="text-[16px] font-medium text-ink">{b.label}</span>
              {focus && b.kind === 'focus' ? (
                <span className="rounded-full bg-signal px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink">
                  {focusLabel}
                </span>
              ) : null}
            </span>
            <span className="text-[14.5px] leading-relaxed text-muted-foreground">{b.body}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
