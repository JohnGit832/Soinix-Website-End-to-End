'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

export function RotatingText({ lead, phrases }: { lead: string; phrases: string[] }) {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => setIndex((value) => (value + 1) % phrases.length), 2800)
    return () => clearInterval(id)
  }, [reduced, phrases.length])

  return (
    <p className="flex flex-col gap-1.5 border-t border-line pt-5 text-[17px] font-medium tracking-tight text-ink md:text-lg">
      <span className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-muted-foreground">{lead}</span>
      <span className="sr-only">{phrases.join(', ')}</span>
      <span aria-hidden="true" className="relative inline-flex h-[1.5em] items-center overflow-hidden">
        {reduced ? (
          <span className="text-brand">{phrases[0]}</span>
        ) : (
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={phrases[index]}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 whitespace-nowrap text-brand"
            >
              <span className="size-2 rounded-full bg-signal ring-1 ring-brand" />
              {phrases[index]}
            </motion.span>
          </AnimatePresence>
        )}
      </span>
    </p>
  )
}
