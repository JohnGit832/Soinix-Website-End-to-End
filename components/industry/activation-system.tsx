'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'motion/react'
import { Pause, Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MonoLabel, OptionButton } from './flow'

export type ActivationStage = { name: string; body: string }
export type ActivationScenario = {
  id: string
  label: string
  group: 'new' | 'existing'
  steps: string[]
  outcome: string
}

export function ActivationSystem({
  stages,
  scenarios,
  outcomeLabel,
}: {
  stages: ActivationStage[]
  scenarios: ActivationScenario[]
  outcomeLabel: string
}) {
  const [scenarioId, setScenarioId] = useState(scenarios[0].id)
  const [step, setStep] = useState(0)
  const [paused, setPaused] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.25 })
  const reduced = useReducedMotion()
  const scenario = scenarios.find((s) => s.id === scenarioId) ?? scenarios[0]
  const total = stages.length
  const current = reduced ? total : step
  const done = current >= total

  useEffect(() => {
    if (!inView || reduced || paused) return
    const id = setInterval(() => setStep((s) => (s >= total ? 0 : s + 1)), 1500)
    return () => clearInterval(id)
  }, [inView, reduced, paused, total])

  const select = (id: string) => {
    setScenarioId(id)
    setStep(0)
  }
  const jump = (i: number) => {
    setStep(i)
    setPaused(true)
  }

  const groups = (['new', 'existing'] as const).map((g) => ({
    g,
    label: g === 'new' ? 'New Demand' : 'Existing Relationships',
    items: scenarios.filter((s) => s.group === g),
  }))

  const state = (i: number) => (i < current ? 'done' : i === current ? 'active' : 'next')

  return (
    <div ref={ref} className="flex flex-col gap-10">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div role="group" aria-label="Choose a scenario" className="flex flex-col gap-4 sm:flex-row sm:gap-8">
          {groups
            .filter((g) => g.items.length)
            .map((g) => (
              <div key={g.g} className="flex flex-col gap-2.5">
                <MonoLabel dark>{g.label}</MonoLabel>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <OptionButton key={s.id} active={s.id === scenario.id} onClick={() => select(s.id)} dark>
                      {s.label}
                    </OptionButton>
                  ))}
                </div>
              </div>
            ))}
        </div>
        {!reduced ? (
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            className="inline-flex min-h-11 items-center gap-2 self-start rounded-lg border border-background/15 px-3.5 text-[14px] text-background/75 transition-colors hover:border-background/40 hover:text-background"
          >
            {paused ? <Play aria-hidden="true" className="size-3.5" /> : <Pause aria-hidden="true" className="size-3.5" />}
            {paused ? 'Play sequence' : 'Pause sequence'}
          </button>
        ) : null}
      </div>

      <div className="hidden lg:flex lg:flex-col lg:gap-6">
        <div aria-hidden="true" className="relative h-px bg-background/15">
          <span
            className="absolute inset-y-0 left-0 bg-signal transition-[width] duration-700 ease-[var(--ease-system)]"
            style={{ width: `${(Math.min(current, total - 1) / (total - 1)) * 100}%` }}
          />
          <span
            className="animate-signal-pulse absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal transition-[left] duration-700 ease-[var(--ease-system)]"
            style={{ left: `${(Math.min(current, total - 1) / (total - 1)) * 100}%` }}
          />
        </div>
        <ol className="grid gap-3" style={{ gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))` }}>
          {stages.map((stage, i) => {
            const s = state(i)
            return (
              <li key={stage.name}>
                <button
                  type="button"
                  onClick={() => jump(i)}
                  aria-current={s === 'active' ? 'step' : undefined}
                  className="flex h-full w-full flex-col gap-3 text-left"
                >
                  <span className={cn('font-mono text-[11px] tracking-[0.14em]', s === 'next' ? 'text-background/40' : 'text-signal')}>
                    {String(i + 1).padStart(2, '0')} {stage.name}
                  </span>
                  <span className="text-[13.5px] leading-relaxed text-background/55">{stage.body}</span>
                  <span
                    key={`${scenario.id}-${i}`}
                    className={cn(
                      'animate-in fade-in-0 mt-auto rounded-lg border px-3 py-3 text-[14.5px] font-medium leading-snug transition-colors duration-500',
                      s === 'active' && 'border-signal bg-signal/15 text-background',
                      s === 'done' && 'border-background/25 text-background/85',
                      s === 'next' && 'border-background/10 text-background/40',
                    )}
                  >
                    {scenario.steps[i]}
                  </span>
                </button>
              </li>
            )
          })}
        </ol>
      </div>

      <ol className="relative flex flex-col gap-5 pl-7 lg:hidden">
        <span aria-hidden="true" className="absolute top-1 bottom-1 left-[5px] w-px bg-background/15" />
        {stages.map((stage, i) => {
          const s = state(i)
          return (
            <li key={stage.name} className="relative flex flex-col gap-1.5">
              <span
                aria-hidden="true"
                className={cn(
                  'absolute top-1 -left-7 size-[11px] rounded-full border-2 transition-colors',
                  s === 'next' ? 'border-background/30 bg-ink' : 'border-signal bg-signal',
                )}
              />
              <span className={cn('font-mono text-[11px] tracking-[0.14em]', s === 'next' ? 'text-background/45' : 'text-signal')}>
                {stage.name}
              </span>
              <span className={cn('text-[16px] font-medium', s === 'next' ? 'text-background/55' : 'text-background')}>
                {scenario.steps[i]}
              </span>
              <span className="text-[14px] leading-relaxed text-background/55">{stage.body}</span>
            </li>
          )
        })}
      </ol>

      <div
        aria-live="polite"
        className={cn(
          'flex flex-col gap-2 rounded-xl border p-5 transition-colors duration-500 sm:flex-row sm:items-center sm:justify-between',
          done ? 'border-signal bg-signal text-ink' : 'border-background/15 text-background/60',
        )}
      >
        <span className="font-mono text-[11.5px] uppercase tracking-[0.14em]">{outcomeLabel}</span>
        <span className="text-[17px] font-medium">{scenario.outcome}</span>
      </div>
    </div>
  )
}
