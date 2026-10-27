'use client'

import { useEffect, useRef, useState } from 'react'
import { SYSTEM_INPUTS, SYSTEM_STAGES } from './system-data'
import { cn } from '@/lib/utils'

const GROUPS = [
  { id: 'new-demand', label: 'New Demand' },
  { id: 'existing', label: 'Existing Relationships' },
] as const

export function SystemCompact({
  focused,
  onSelect,
  reduced,
}: {
  focused: number | null
  onSelect: (index: number) => void
  reduced: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [step, setStep] = useState<number>(SYSTEM_STAGES.length)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (reduced || !visible) return
    const id = setInterval(() => setStep((value) => (value + 1) % (SYSTEM_STAGES.length + 2)), 750)
    return () => clearInterval(id)
  }, [reduced, visible])

  const showAll = reduced || step >= SYSTEM_STAGES.length

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {GROUPS.map((group) => (
          <div key={group.id} className="flex flex-col gap-2.5 rounded-xl border border-line bg-background p-4">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {SYSTEM_INPUTS.map((input, i) =>
                input.group === group.id ? (
                  <button
                    key={input.id}
                    type="button"
                    aria-pressed={focused === i}
                    onClick={() => onSelect(i)}
                    className={cn(
                      'flex min-h-10 items-center gap-2 rounded-lg border px-3 text-[13.5px] font-medium transition-colors',
                      focused === i ? 'border-brand bg-brand text-primary-foreground' : 'border-line text-ink',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn('size-1.5 rounded-full', focused === i ? 'bg-signal' : 'bg-ink/20')}
                    />
                    {input.label}
                  </button>
                ) : null,
              )}
            </div>
          </div>
        ))}
      </div>

      <Connector />

      <div className="flex flex-col gap-4 rounded-xl bg-brand p-4 text-primary-foreground">
        <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em]">
          <span aria-hidden="true" className="size-1.5 animate-signal-pulse rounded-full bg-signal" />
          Revenue Activation
        </p>
        <ol className="grid grid-cols-3 gap-2">
          {SYSTEM_STAGES.map((stage, i) => {
            const lit = showAll || i <= step
            return (
              <li
                key={stage}
                className={cn(
                  'flex items-center gap-1.5 rounded-md border px-2 py-2 font-mono text-[10.5px] uppercase tracking-[0.08em] transition-colors duration-300',
                  lit ? 'border-signal/50 text-primary-foreground' : 'border-primary-foreground/15 text-primary-foreground/45',
                  !showAll && i === step && 'bg-primary-foreground/10',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn('size-1.5 shrink-0 rounded-full', lit ? 'bg-signal' : 'bg-primary-foreground/25')}
                />
                {stage}
              </li>
            )
          })}
        </ol>
      </div>

      <Connector />

      <div className="flex items-center gap-3 rounded-xl border border-ink/12 bg-background p-4">
        <span aria-hidden="true" className="size-2.5 rounded-full bg-signal ring-1 ring-brand" />
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink">Qualified Revenue Conversations</p>
      </div>
    </div>
  )
}

function Connector() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-8 w-px bg-ink/15">
      <span
        className="absolute -left-[3px] top-0 size-[7px] animate-flow-y rounded-full bg-signal ring-1 ring-brand"
        style={{ ['--flow-distance' as string]: '26px' }}
      />
    </div>
  )
}
