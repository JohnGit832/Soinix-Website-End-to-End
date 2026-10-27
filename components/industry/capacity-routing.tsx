'use client'

import { useState } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MonoLabel, OptionButton } from './flow'

export type Member = { label: string; focus: string; capacity: 'Available' | 'Limited' }
export type Incoming = { id: string; label: string; attributes: string[]; routeTo: number; reason: string }

export function CapacityRouting({
  members,
  incoming,
  criteria,
  dark,
}: {
  members: Member[]
  incoming: Incoming[]
  criteria: string[]
  dark?: boolean
}) {
  const [activeId, setActiveId] = useState(incoming[0].id)
  const active = incoming.find((o) => o.id === activeId) ?? incoming[0]

  return (
    <div className="flex flex-col gap-8">
      <div role="group" aria-label="Incoming opportunity" className="flex flex-col gap-3">
        <MonoLabel dark={dark}>Incoming opportunity</MonoLabel>
        <div className="flex flex-wrap gap-2">
          {incoming.map((o) => (
            <OptionButton key={o.id} active={o.id === active.id} onClick={() => setActiveId(o.id)} dark={dark}>
              {o.label}
            </OptionButton>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 items-stretch gap-3 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,0.9fr)_auto_minmax(0,1.2fr)] lg:gap-0">
        <div key={active.id} className={cn('animate-in fade-in-0 flex flex-col gap-4 rounded-xl border p-6 duration-300', dark ? 'border-signal/50' : 'border-ink/20 bg-background')}>
          <MonoLabel dark={dark}>Opportunity</MonoLabel>
          <p className={cn('text-lg font-medium', dark ? 'text-background' : 'text-ink')}>{active.label}</p>
          <ul className="flex flex-wrap gap-1.5">
            {active.attributes.map((a) => (
              <li key={a} className={cn('rounded-md border px-2.5 py-1 text-[13.5px]', dark ? 'border-background/15 text-background/80' : 'border-line text-ink/80')}>
                {a}
              </li>
            ))}
          </ul>
        </div>
        <Arrow dark={dark} />
        <div className={cn('flex flex-col gap-3 rounded-xl border border-dashed p-6', dark ? 'border-background/25' : 'border-ink/20')}>
          <MonoLabel dark={dark}>Routing considers</MonoLabel>
          <ul className="flex flex-col gap-1.5">
            {criteria.map((c) => (
              <li key={c} className={cn('text-[14.5px]', dark ? 'text-background/80' : 'text-ink/80')}>
                {c}
              </li>
            ))}
          </ul>
        </div>
        <Arrow dark={dark} />
        <ul className="flex flex-col gap-2">
          {members.map((m, i) => {
            const routed = i === active.routeTo
            return (
              <li
                key={m.label}
                className={cn(
                  'flex flex-col gap-1 rounded-xl border p-4 transition-[background-color,border-color,opacity] duration-300',
                  routed
                    ? 'border-signal bg-signal text-ink'
                    : dark
                      ? 'border-background/15 text-background/70'
                      : 'border-line bg-background text-ink/70',
                  m.capacity === 'Limited' && !routed && 'opacity-60',
                )}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="text-[15.5px] font-medium">{m.label}</span>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.14em]">
                    {routed ? 'Routed' : `${m.capacity} capacity`}
                  </span>
                </span>
                <span className="text-[13.5px] opacity-80">{m.focus}</span>
              </li>
            )
          })}
        </ul>
      </div>
      <p aria-live="polite" className={cn('max-w-3xl text-[15.5px] leading-relaxed', dark ? 'text-background/70' : 'text-muted-foreground')}>
        {active.reason}
      </p>
    </div>
  )
}

function Arrow({ dark }: { dark?: boolean }) {
  return (
    <span aria-hidden="true" className={cn('flex items-center justify-center py-1 lg:px-3', dark ? 'text-background/40' : 'text-ink/30')}>
      <ArrowDown className="size-4 lg:hidden" />
      <ArrowRight className="hidden size-4 lg:block" />
    </span>
  )
}
