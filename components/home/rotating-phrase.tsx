'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

const PHRASES = ['New Demand', 'Target Accounts', 'Strategic Referral Partners', 'Existing Relationships']

export function RotatingPhrase() {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => setIndex((value) => (value + 1) % PHRASES.length), 3000)
    return () => clearInterval(id)
  }, [reduced])

  if (reduced) {
    return (
      <p className="flex flex-col gap-3 text-xl font-medium tracking-tight text-ink md:text-2xl">
        <span>Build and activate growth across</span>
        <span className="flex flex-wrap gap-2">
          {PHRASES.map((phrase) => (
            <span
              key={phrase}
              className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-[15px] text-brand"
            >
              <span aria-hidden="true" className="size-1.5 rounded-full bg-signal ring-1 ring-brand" />
              {phrase}
            </span>
          ))}
        </span>
      </p>
    )
  }

  return (
    <p className="flex flex-col gap-1 text-xl font-medium tracking-tight text-ink md:flex-row md:items-baseline md:gap-2.5 md:text-2xl">
      <span className="text-ink/70">Build and activate growth across</span>
      <span className="sr-only">{PHRASES.join(', ')}</span>
      <span aria-hidden="true" className="relative inline-flex h-[1.35em] items-center overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={PHRASES[index]}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 whitespace-nowrap text-brand"
          >
            <span className="size-2 rounded-full bg-signal ring-1 ring-brand" />
            {PHRASES[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </p>
  )
}
