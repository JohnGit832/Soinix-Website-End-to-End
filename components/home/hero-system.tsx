'use client'

import { useCallback, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight, X } from 'lucide-react'
import { SYSTEM_INPUTS, type SystemFrame } from './system-data'
import { SystemDiagram } from './system-diagram'
import { SystemCompact } from './system-compact'

export function HeroSystem() {
  const reduced = useReducedMotion() ?? false
  const [focused, setFocused] = useState<number | null>(null)
  const [live, setLive] = useState<number>(-1)

  const select = useCallback((index: number) => {
    setFocused((current) => (current === index ? null : index))
  }, [])
  const handleFrame = useCallback((frame: SystemFrame) => {
    setLive(frame.input)
  }, [])

  const focusedInput = focused !== null ? SYSTEM_INPUTS[focused] : null

  return (
    <figure className="flex flex-col gap-4" aria-label="Interactive Revenue Activation system">
      <div className="hidden md:block">
        <SystemDiagram focused={focused} onSelect={select} reduced={reduced} onFrame={handleFrame} />
      </div>
      <div className="md:hidden">
        <SystemCompact focused={focused} onSelect={select} reduced={reduced} />
      </div>

      <figcaption
        className="relative min-h-[132px] overflow-hidden rounded-xl border border-line bg-paper p-4 md:min-h-[116px] md:p-5"
        aria-live="polite"
      >
        <AnimatePresence mode="wait" initial={false}>
          {focusedInput ? (
            <motion.div
              key={focusedInput.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand">
                  Focus <span className="px-1 text-muted-foreground">/</span> {focusedInput.label}
                </p>
                <button
                  type="button"
                  onClick={() => setFocused(null)}
                  className="-m-2 flex items-center gap-1.5 rounded-md p-2 font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted-foreground hover:text-ink"
                >
                  <X aria-hidden="true" className="size-3.5" />
                  Live view
                </button>
              </div>
              <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
                {focusedInput.context.map((step, i) => (
                  <li key={step} className="flex items-center gap-1.5">
                    <span className="rounded-md border border-line bg-background px-2.5 py-1.5 text-[13px] text-ink">
                      {step}
                    </span>
                    {i < focusedInput.context.length - 1 ? (
                      <ArrowRight aria-hidden="true" className="size-3.5 text-ink/30" />
                    ) : null}
                  </li>
                ))}
              </ol>
            </motion.div>
          ) : (
            <motion.div
              key="live"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-2"
            >
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                <span aria-hidden="true" className="size-1.5 animate-signal-pulse rounded-full bg-signal ring-1 ring-brand" />
                Live view
                {live >= 0 && !reduced ? (
                  <span className="hidden text-ink sm:inline">
                    <span className="px-1 text-muted-foreground">/</span>
                    {SYSTEM_INPUTS[live]?.label}
                  </span>
                ) : null}
              </p>
              <p className="text-pretty text-[14.5px] leading-relaxed text-ink/80">
                Every opportunity, new or existing, moves through the same system. Select any input to
                see how that opportunity becomes a qualified conversation.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </figcaption>
    </figure>
  )
}
