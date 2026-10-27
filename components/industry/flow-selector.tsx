'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Badge, FlowSteps, MonoLabel, OptionButton } from './flow'

export type FlowOption = {
  id: string
  label: string
  group?: 'new' | 'existing'
  steps: string[]
  context?: string
  play?: string
}

const GROUP_LABELS = { new: 'New Demand', existing: 'Existing Relationships' } as const

export function FlowSelector({
  options,
  label,
  dark,
  layout = 'side',
  muted,
  panelLabel = 'Activation path',
  compactSteps,
}: {
  compactSteps?: boolean
  options: FlowOption[]
  label: string
  dark?: boolean
  layout?: 'side' | 'top' | 'grid'
  muted?: boolean
  panelLabel?: string
}) {
  const [activeId, setActiveId] = useState(options[0].id)
  const active = options.find((o) => o.id === activeId) ?? options[0]
  const groups = (['new', 'existing'] as const).filter((g) => options.some((o) => o.group === g))
  const grouped = groups.length > 0 ? groups.map((g) => ({ g, items: options.filter((o) => o.group === g) })) : [{ g: null, items: options }]

  const selector = (
    <div role="group" aria-label={label} className="flex flex-col gap-5">
      {grouped.map(({ g, items }) => (
        <div key={g ?? 'all'} className="flex flex-col gap-2.5">
          {g ? <MonoLabel dark={dark}>{GROUP_LABELS[g]}</MonoLabel> : null}
          <div
            className={cn(
              'flex flex-wrap gap-2',
              layout === 'side' && 'lg:flex-col lg:items-stretch',
              layout === 'grid' && 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
            )}
          >
            {items.map((o) => (
              <OptionButton
                key={o.id}
                active={o.id === active.id}
                onClick={() => setActiveId(o.id)}
                dark={dark}
                muted={muted}
              >
                {o.label}
              </OptionButton>
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  const panel = (
    <div
      aria-live="polite"
      className={cn(
        'flex min-w-0 flex-col gap-6 rounded-xl border p-5 md:p-7',
        dark ? 'border-background/15 bg-background/[0.03]' : 'border-line bg-background',
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <MonoLabel dark={dark}>{panelLabel}</MonoLabel>
        {active.play ? <Badge dark={dark}>{active.play}</Badge> : null}
      </div>
      <div className="flex flex-col gap-2">
        <p className={cn('text-xl font-medium tracking-tight', dark ? 'text-background' : 'text-ink')}>{active.label}</p>
        {active.context ? (
          <p className={cn('max-w-2xl text-[15.5px] leading-relaxed', dark ? 'text-background/65' : 'text-muted-foreground')}>
            {active.context}
          </p>
        ) : null}
      </div>
      <FlowSteps key={active.id} steps={active.steps} dark={dark} horizontal={layout !== 'side'} grid={compactSteps} />
    </div>
  )

  if (layout === 'side') {
    return (
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-10">
        {selector}
        {panel}
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-6">
      {selector}
      {panel}
    </div>
  )
}
