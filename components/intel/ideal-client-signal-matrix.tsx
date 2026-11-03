'use client'

import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { CLIENT_SEGMENTS } from './data'
import { TechLabel } from './primitives'

export function IdealClientSignalMatrix() {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const segment = CLIENT_SEGMENTS[active]

  const onKeyDown = (event: React.KeyboardEvent) => {
    const delta = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : event.key === 'ArrowUp' || event.key === 'ArrowLeft' ? -1 : 0
    if (!delta) return
    event.preventDefault()
    const next = (active + delta + CLIENT_SEGMENTS.length) % CLIENT_SEGMENTS.length
    setActive(next)
    tabs.current[next]?.focus()
  }

  return (
    <div className="grid grid-cols-1 rounded-[4px] border border-background/12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div
        role="tablist"
        aria-label="Client segments"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="flex flex-col border-b border-background/10 lg:border-b-0 lg:border-r"
      >
        {CLIENT_SEGMENTS.map((s, i) => {
          const selected = i === active
          return (
            <button
              key={s.id}
              ref={(node) => {
                tabs.current[i] = node
              }}
              role="tab"
              id={`segment-tab-${s.id}`}
              aria-selected={selected}
              aria-controls="segment-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                'relative flex min-h-16 items-center justify-between gap-4 border-b border-background/[0.07] px-5 text-left transition-colors last:border-b-0',
                selected ? 'bg-background/[0.05]' : 'hover:bg-background/[0.025]',
              )}
            >
              <span aria-hidden="true" className={cn('absolute inset-y-0 left-0 w-px', selected ? 'bg-signal' : 'bg-transparent')} />
              <span className={cn('text-[17px] font-medium tracking-tight', selected ? 'text-background' : 'text-background/65')}>
                {s.label}
              </span>
              <TechLabel tone={selected ? 'signal' : 'muted'}>{s.code}</TechLabel>
            </button>
          )
        })}
      </div>

      <div id="segment-panel" role="tabpanel" aria-labelledby={`segment-tab-${segment.id}`} className="flex flex-col">
        <div className="flex items-center justify-between border-b border-background/10 px-5 py-3">
          <TechLabel tone="bright">Observable signals</TechLabel>
          <TechLabel>{segment.code}</TechLabel>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2">
          {segment.signals.map((signal, i) => (
            <li
              key={signal}
              className="flex h-16 items-center gap-3 border-b border-background/[0.07] px-5 sm:odd:border-r"
            >
              <TechLabel>{String(i + 1).padStart(2, '0')}</TechLabel>
              <span className="text-[15px] text-background">{signal}</span>
            </li>
          ))}
        </ul>
        <p className="px-5 py-5 text-pretty text-[14.5px] leading-relaxed text-background/60">{segment.context}</p>
      </div>
    </div>
  )
}
