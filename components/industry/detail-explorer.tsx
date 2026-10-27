'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FieldValue, MonoLabel } from './stage-parts'

export type DetailItem = { title: string; group?: string; values: (string | string[])[] }

export function DetailExplorer({
  items,
  fields,
  groups,
  dark,
  label,
  layout = 'list',
  panelTitle,
}: {
  items: DetailItem[]
  fields: string[]
  groups?: string[]
  dark?: boolean
  label: string
  layout?: 'list' | 'columns'
  panelTitle?: string
}) {
  const [activeTitle, setActiveTitle] = useState(items[0].title)
  const active = items.find((i) => i.title === activeTitle) ?? items[0]

  const fieldsBlock = (item: DetailItem) => (
    <dl className="flex flex-col gap-5">
      {fields.map((field, i) => (
        <div key={field} className={cn('flex flex-col gap-2 border-t pt-4', dark ? 'border-background/10' : 'border-ink/10')}>
          <dt>
            <MonoLabel dark={dark}>{field}</MonoLabel>
          </dt>
          <dd>
            <FieldValue value={item.values[i]} dark={dark} />
          </dd>
        </div>
      ))}
    </dl>
  )

  const button = (item: DetailItem) => {
    const isActive = item.title === active.title
    return (
      <li key={item.title}>
        <button
          type="button"
          aria-expanded={isActive}
          onClick={() => setActiveTitle(item.title)}
          className={cn(
            'flex min-h-12 w-full items-center justify-between gap-4 rounded-lg border px-4 py-3 text-left text-[15.5px] font-medium leading-snug transition-colors duration-200',
            isActive
              ? dark
                ? 'border-signal bg-signal text-ink'
                : 'border-ink bg-ink text-background'
              : dark
                ? 'border-background/12 text-background/80 hover:border-background/35 hover:text-background'
                : 'border-line bg-background text-ink/80 hover:border-ink/30 hover:text-ink',
          )}
        >
          {item.title}
          <ChevronRight
            aria-hidden="true"
            className={cn('size-4 shrink-0 transition-transform duration-200', isActive && 'rotate-90 lg:rotate-0')}
          />
        </button>
        {isActive ? <div className="px-1 pt-4 pb-3 lg:hidden">{fieldsBlock(item)}</div> : null}
      </li>
    )
  }

  const sets = groups ? groups.map((g) => ({ g, list: items.filter((i) => i.group === g) })) : [{ g: '', list: items }]

  return (
    <div
      className={cn(
        'grid grid-cols-1 items-start gap-6',
        layout === 'list' ? 'lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10' : 'lg:gap-8',
      )}
    >
      <div
        role="group"
        aria-label={label}
        className={cn('flex flex-col gap-6', layout === 'columns' && 'lg:grid lg:grid-cols-4 lg:gap-4')}
      >
        {sets.map(({ g, list }) => (
          <div key={g || 'all'} className="flex flex-col gap-2.5">
            {g ? <MonoLabel dark={dark}>{g}</MonoLabel> : null}
            <ul className="flex flex-col gap-2">{list.map(button)}</ul>
          </div>
        ))}
      </div>
      <div
        aria-live="polite"
        className={cn(
          'hidden rounded-xl border p-8 lg:sticky lg:top-24 lg:block',
          dark ? 'border-background/15 bg-background/[0.03]' : 'border-line bg-background',
        )}
      >
        <div key={active.title} className="animate-in fade-in-0 slide-in-from-bottom-1 flex flex-col gap-6 duration-300">
          <div className="flex flex-col gap-2">
            {panelTitle ? <MonoLabel dark={dark}>{panelTitle}</MonoLabel> : null}
            <p className={cn('text-2xl font-medium tracking-tight text-balance', dark ? 'text-background' : 'text-ink')}>
              {active.title}
            </p>
          </div>
          {fieldsBlock(active)}
        </div>
      </div>
    </div>
  )
}
