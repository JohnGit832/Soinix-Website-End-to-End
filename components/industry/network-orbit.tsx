'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { FlowSteps, MonoLabel } from './flow'

export type OrbitNode = { id: string; label: string; context: string; path: string[] }

export function NetworkOrbit({
  center,
  anchor,
  nodes,
  prompt,
}: {
  center: string
  anchor: string
  nodes: OrbitNode[]
  prompt: string
}) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = nodes.find((n) => n.id === activeId) ?? null
  const ring = nodes.length + 1
  const point = (i: number) => {
    const angle = (-90 + (i * 360) / ring) * (Math.PI / 180)
    return { x: 50 + 40 * Math.cos(angle), y: 50 + 40 * Math.sin(angle) }
  }
  const anchorPoint = point(nodes.length)

  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
      <div className="relative mx-auto hidden aspect-square w-full max-w-[580px] lg:block">
        <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute inset-0 size-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.2" />
          {nodes.map((n, i) => {
            const p = point(i)
            const on = n.id === activeId
            return (
              <line
                key={n.id}
                x1={p.x}
                y1={p.y}
                x2="50"
                y2="50"
                stroke={on ? 'var(--signal)' : 'currentColor'}
                strokeOpacity={on ? 1 : 0.15}
                strokeWidth={on ? 0.45 : 0.2}
                strokeDasharray={on ? '1.2 1' : undefined}
                className={on ? 'animate-dash-flow' : undefined}
              />
            )
          })}
          <line
            x1="50"
            y1="50"
            x2={anchorPoint.x}
            y2={anchorPoint.y}
            stroke={active ? 'var(--signal)' : 'currentColor'}
            strokeOpacity={active ? 1 : 0.15}
            strokeWidth={active ? 0.45 : 0.2}
            strokeDasharray={active ? '1.2 1' : undefined}
            className={active ? 'animate-dash-flow' : undefined}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 flex size-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1.5 rounded-full border border-background/25 bg-ink text-center">
          <span aria-hidden="true" className="size-2 rounded-full bg-signal" />
          <span className="max-w-[6.5rem] font-mono text-[11px] uppercase leading-tight tracking-[0.12em] text-background">
            {center}
          </span>
        </div>
        {nodes.map((n, i) => {
          const p = point(i)
          const on = n.id === activeId
          return (
            <button
              key={n.id}
              type="button"
              aria-pressed={on}
              onClick={() => setActiveId(on ? null : n.id)}
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              className={cn(
                'absolute min-h-11 max-w-[9.5rem] -translate-x-1/2 -translate-y-1/2 rounded-lg border px-3 py-2 text-center text-[13.5px] font-medium leading-tight transition-colors duration-200',
                on
                  ? 'border-signal bg-signal text-ink'
                  : 'border-background/20 bg-brand text-background/80 hover:border-background/50 hover:text-background',
              )}
            >
              {n.label}
            </button>
          )
        })}
        <div
          style={{ left: `${anchorPoint.x}%`, top: `${anchorPoint.y}%` }}
          className={cn(
            'absolute -translate-x-1/2 -translate-y-1/2 rounded-lg px-3 py-2 text-center font-mono text-[11px] uppercase tracking-[0.12em] transition-colors',
            active ? 'bg-background text-ink' : 'border border-background/30 bg-brand text-background',
          )}
        >
          {anchor}
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:hidden">
        <div className="flex items-center gap-3 rounded-xl border border-background/20 p-4">
          <span aria-hidden="true" className="size-2 rounded-full bg-signal" />
          <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-background">{center}</span>
        </div>
        <div role="group" aria-label="Choose a professional" className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-2">
          {nodes.map((n) => {
            const on = n.id === activeId
            return (
              <button
                key={n.id}
                type="button"
                aria-pressed={on}
                onClick={() => setActiveId(n.id)}
                className={cn(
                  'min-h-11 shrink-0 snap-start rounded-lg border px-3.5 py-2 text-[14px] font-medium',
                  on ? 'border-signal bg-signal text-ink' : 'border-background/20 text-background/80',
                )}
              >
                {n.label}
              </button>
            )
          })}
        </div>
      </div>

      <div aria-live="polite" className="flex min-h-80 flex-col gap-5 rounded-xl border border-background/15 bg-background/[0.03] p-6 lg:p-8">
        {active ? (
          <div key={active.id} className="animate-in fade-in-0 flex flex-col gap-5 duration-300">
            <MonoLabel dark>Relationship path</MonoLabel>
            <p className="text-2xl font-medium tracking-tight text-background">{active.label}</p>
            <p className="text-[15.5px] leading-relaxed text-background/70">{active.context}</p>
            <FlowSteps steps={active.path} dark />
          </div>
        ) : (
          <div className="flex flex-1 flex-col justify-center gap-4">
            <MonoLabel dark>Select a relationship</MonoLabel>
            <p className="text-[17px] leading-relaxed text-background/75">{prompt}</p>
          </div>
        )}
      </div>
    </div>
  )
}
