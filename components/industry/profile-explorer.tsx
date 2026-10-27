'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { MonoLabel, OptionButton } from './flow'
import { FieldValue } from './stage-parts'

export type Profile = { id: string; label: string; values: (string | string[])[] }

export function ProfileExplorer({
  question,
  profiles,
  fields,
  dark,
  footnote,
}: {
  question: string
  profiles: Profile[]
  fields: string[]
  dark?: boolean
  footnote?: string
}) {
  const [activeId, setActiveId] = useState(profiles[0].id)
  const active = profiles.find((p) => p.id === activeId) ?? profiles[0]

  return (
    <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] lg:gap-10">
      <div className="flex flex-col gap-4">
        <MonoLabel dark={dark}>{question}</MonoLabel>
        <div role="group" aria-label={question} className="flex flex-wrap gap-2 lg:flex-col lg:items-stretch">
          {profiles.map((p) => (
            <OptionButton key={p.id} active={p.id === active.id} onClick={() => setActiveId(p.id)} dark={dark}>
              {p.label}
            </OptionButton>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div
          aria-live="polite"
          key={active.id}
          className={cn(
            'grid grid-cols-1 gap-px overflow-hidden rounded-xl border sm:grid-cols-2',
            fields.length % 3 === 0 && 'xl:grid-cols-3',
            dark ? 'border-background/15 bg-background/15' : 'border-line bg-line',
          )}
        >
          {fields.map((field, i) => (
            <div
              key={field}
              style={{ animationDelay: `${i * 70}ms` }}
              className={cn(
                'animate-in fade-in-0 slide-in-from-bottom-1 fill-mode-both flex flex-col gap-3 p-5 duration-400 lg:p-6',
                dark ? 'bg-brand' : 'bg-background',
              )}
            >
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-signal ring-1 ring-brand" />
                <MonoLabel dark={dark}>{field}</MonoLabel>
              </span>
              <FieldValue value={active.values[i]} dark={dark} />
            </div>
          ))}
        </div>
        {footnote ? (
          <p className={cn('text-[14.5px]', dark ? 'text-background/55' : 'text-muted-foreground')}>{footnote}</p>
        ) : null}
      </div>
    </div>
  )
}
