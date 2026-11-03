'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { INTEL_LAYERS } from './data'
import { TechLabel } from './primitives'

const GRAPH_FIELDS = [
  { label: 'Event type', value: 'Classified wealth event' },
  { label: 'Relevance', value: "Mapped to the firm's capabilities" },
  { label: 'Timing', value: 'Estimated event window' },
  { label: 'Path', value: 'Relationship context and route in' },
]

export function OpportunityGraph({ className }: { className?: string }) {
  const [active, setActive] = useState(INTEL_LAYERS[0].id)
  const layer = INTEL_LAYERS.find((l) => l.id === active) ?? INTEL_LAYERS[0]

  return (
    <div className={cn('flex flex-col gap-0 lg:flex-row', className)}>
      <ul className="grid flex-1 grid-cols-1 lg:grid-rows-4" aria-label="Intelligence layers">
        {INTEL_LAYERS.map((l, i) => {
          const isActive = l.id === active
          return (
            <li key={l.id} className="relative">
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(l.id)}
                onMouseEnter={() => setActive(l.id)}
                onFocus={() => setActive(l.id)}
                className={cn(
                  'flex h-full w-full flex-col gap-3 border border-background/12 px-4 py-4 text-left transition-colors duration-300',
                  i > 0 && '-mt-px',
                  isActive ? 'border-signal/40 bg-background/[0.05]' : 'bg-background/[0.015] hover:bg-background/[0.03]',
                )}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-3">
                    <TechLabel tone={isActive ? 'signal' : 'muted'}>{l.code}</TechLabel>
                    <span className="text-[15.5px] font-medium text-background">{l.label}</span>
                  </span>
                  <TechLabel>{l.signals.length} signal types</TechLabel>
                </span>
                <span className="flex flex-wrap gap-1.5">
                  {l.signals.map((s) => (
                    <span
                      key={s}
                      className={cn(
                        'rounded-[2px] border px-2 py-1 font-mono text-[10.5px] uppercase tracking-[0.08em] transition-colors',
                        isActive ? 'border-background/20 text-background/80' : 'border-background/10 text-background/45',
                      )}
                    >
                      {s}
                    </span>
                  ))}
                </span>
              </button>
              <span
                aria-hidden="true"
                className={cn(
                  'absolute left-full top-1/2 hidden h-px w-7 transition-colors duration-300 lg:block',
                  isActive ? 'bg-signal' : 'bg-background/20',
                )}
              />
            </li>
          )
        })}
      </ul>

      <div aria-hidden="true" className="relative hidden w-14 shrink-0 lg:block">
        <span className="absolute bottom-[12.5%] left-1/2 top-[12.5%] w-px bg-background/20" />
        <span className="absolute left-1/2 right-0 top-1/2 h-px bg-signal/60" />
        <span className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal" />
      </div>

      <div aria-hidden="true" className="flex justify-center py-3 lg:hidden">
        <span className="h-8 w-px bg-signal/60" />
      </div>

      <section
        aria-label="Opportunity graph"
        className="flex flex-col rounded-[4px] border border-signal/30 bg-ink lg:w-[38%] lg:self-center"
      >
        <div className="flex items-center justify-between border-b border-background/10 px-4 py-3">
          <TechLabel tone="signal">Opportunity Graph</TechLabel>
          <TechLabel>4 layers merged</TechLabel>
        </div>
        <div className="flex flex-col gap-5 px-4 py-5">
          <div className="flex flex-col gap-2">
            <TechLabel>Contributing layer · {layer.code}</TechLabel>
            <p className="text-pretty text-[15px] leading-relaxed text-background/85" aria-live="polite">
              {layer.output}
            </p>
          </div>
          <dl className="grid grid-cols-1 border-t border-background/10">
            {GRAPH_FIELDS.map((f) => (
              <div key={f.label} className="flex items-baseline justify-between gap-4 border-b border-background/10 py-2.5">
                <dt>
                  <TechLabel>{f.label}</TechLabel>
                </dt>
                <dd className="text-right text-[13.5px] text-background/70">{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-signal" />
            <span className="text-[13.5px] text-background">Output: prioritized opportunity</span>
          </div>
        </div>
      </section>
    </div>
  )
}
