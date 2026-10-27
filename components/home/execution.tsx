'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Eyebrow, SectionHeading } from '@/components/site/primitives'
import { cn } from '@/lib/utils'

const PHASES = [
  {
    label: 'Understand',
    layers: [
      { name: 'Research', body: 'Study the market, the buyer, and the opportunity before anything is built.' },
      { name: 'Data', body: 'Source, clean, and enrich the records the system depends on.' },
      { name: 'Targeting', body: 'Define exactly who should be reached, and in what order.' },
      { name: 'Strategy', body: 'Choose the Revenue Play, the offer, and the path to a conversation.' },
    ],
  },
  {
    label: 'Build',
    layers: [
      { name: 'Campaign Design', body: 'Design the sequence, channels, and touchpoints for each opportunity type.' },
      { name: 'Messaging', body: 'Write messages that are relevant, credible, and specific to the audience.' },
      { name: 'Infrastructure', body: 'Set up the sending, tracking, and data systems that keep the work running.' },
    ],
  },
  {
    label: 'Run',
    layers: [
      { name: 'Activation', body: 'Launch and operate the campaign day to day.' },
      { name: 'Follow-Up', body: 'Keep every relevant opportunity moving after the first touch.' },
      { name: 'Reply Handling', body: 'Respond to interest quickly and keep the conversation on track.' },
    ],
  },
  {
    label: 'Convert',
    layers: [
      { name: 'Qualification', body: 'Confirm fit and real commercial interest before handing anything over.' },
      { name: 'Routing', body: 'Deliver each qualified opportunity to the right person on your team.' },
    ],
  },
  {
    label: 'Improve',
    layers: [
      { name: 'Attribution', body: 'Track which plays, messages, and sources create conversations.' },
      { name: 'Optimization', body: 'Use what the system learns to improve the next cycle.' },
    ],
  },
]

const ALL_LAYERS = PHASES.flatMap((phase) => phase.layers.map((layer) => ({ ...layer, phase: phase.label })))

export function Execution() {
  const [active, setActive] = useState(0)
  const current = ALL_LAYERS[active]

  return (
    <section aria-labelledby="execution-heading" className="border-t border-line">
      <div className="container-site flex flex-col gap-16 py-24 lg:py-36">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div className="flex flex-col gap-8">
            <Eyebrow>End-to-End Execution</Eyebrow>
            <SectionHeading className="text-ink">
              <span id="execution-heading">
                We Build The System. <span className="text-brand">We Run The Work Behind It.</span>
              </span>
            </SectionHeading>
          </div>
          <div className="flex flex-col gap-4 text-lede text-pretty text-muted-foreground">
            <p className="text-ink">
              Revenue Activation is not a strategy document that gets handed back to your team.
            </p>
            <p>We work across the system required to turn an opportunity into a qualified conversation.</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line">
          <div className="grid grid-cols-1 divide-y divide-line md:grid-cols-5 md:divide-x md:divide-y-0">
            {PHASES.map((phase) => (
              <div key={phase.label} className="flex flex-col gap-3 p-4 md:p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {phase.label}
                </p>
                <ul className="flex flex-row flex-wrap gap-2 md:flex-col">
                  {phase.layers.map((layer) => {
                    const index = ALL_LAYERS.findIndex((item) => item.name === layer.name)
                    const isActive = index === active
                    return (
                      <li key={layer.name}>
                        <button
                          type="button"
                          aria-pressed={isActive}
                          onMouseEnter={() => setActive(index)}
                          onFocus={() => setActive(index)}
                          onClick={() => setActive(index)}
                          className={cn(
                            'flex min-h-11 w-full items-center justify-between gap-3 rounded-lg border px-3.5 text-left text-[14.5px] font-medium transition-all duration-200',
                            isActive
                              ? 'border-brand bg-brand text-primary-foreground'
                              : 'border-line bg-background text-ink hover:border-brand/40',
                          )}
                        >
                          {layer.name}
                          <span
                            aria-hidden="true"
                            className={cn(
                              'size-1.5 shrink-0 rounded-full transition-colors',
                              isActive ? 'bg-signal' : 'bg-ink/15',
                            )}
                          />
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex min-h-28 items-center border-t border-line bg-paper px-5 py-6 md:px-8" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.name}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-6"
              >
                <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-brand">
                  {current.phase} <span className="px-1 text-muted-foreground">/</span> {current.name}
                </p>
                <p className="text-pretty text-[17px] leading-relaxed text-ink">{current.body}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <p className="max-w-4xl text-balance text-3xl font-medium leading-tight tracking-tight text-ink md:text-[40px]">
          Your team stays focused on the conversations and relationships{' '}
          <span className="text-brand">where their expertise matters most.</span>
        </p>
      </div>
    </section>
  )
}
