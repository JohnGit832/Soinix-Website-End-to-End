'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { GREAT_LAKES_CLUSTERS, HERO_SIGNALS, SIGNAL_LAYERS_LEGEND } from './data'
import { RegionalLiquidityMap } from './regional-liquidity-map'
import { SignalIntelligenceFeed } from './signal-intelligence-feed'
import { ConceptNote, TechLabel } from './primitives'

const CYCLE_MS = 4800

export function HeroIntelligence() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (paused || reduced) return
    const id = setInterval(() => setActive((i) => (i + 1) % HERO_SIGNALS.length), CYCLE_MS)
    return () => clearInterval(id)
  }, [paused, reduced])

  const signal = HERO_SIGNALS[active]
  const activeLayer = (active * 2 + 1) % SIGNAL_LAYERS_LEGEND.length

  return (
    <figure
      className="relative flex flex-col rounded-[4px] border border-background/12 bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <figcaption className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-background/10 px-4 py-3">
        <span className="flex flex-col gap-1.5">
          <TechLabel tone="bright">Regional Asset Intelligence</TechLabel>
          <span className="text-[14px] font-medium text-background">Michigan / Great Lakes Market</span>
        </span>
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="size-1.5 animate-signal-pulse rounded-full bg-signal" />
          <TechLabel>Scanning · 42.33°N 83.05°W</TechLabel>
        </span>
      </figcaption>

      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        <div className="flex flex-col border-b border-background/10 md:border-b-0 md:border-r">
          <div className="bg-grid-fine px-2 pb-2 pt-4">
            <RegionalLiquidityMap clusters={GREAT_LAKES_CLUSTERS} activeId={signal.clusterId} />
          </div>
          <div className="flex flex-col gap-3 border-t border-background/10 px-4 py-3">
            <div className="flex items-center justify-between">
              <TechLabel>Capital movement density</TechLabel>
              <span aria-hidden="true" className="flex items-center gap-1">
                <span className="h-1.5 w-5 rounded-[1px] bg-background/15" />
                <span className="h-1.5 w-5 rounded-[1px] bg-background/40" />
                <span className="h-1.5 w-5 rounded-[1px] bg-signal/50" />
                <span className="h-1.5 w-5 rounded-[1px] bg-signal" />
              </span>
            </div>
            <ul className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Signal layers">
              {SIGNAL_LAYERS_LEGEND.map((layer, i) => (
                <li
                  key={layer}
                  className={
                    i === activeLayer
                      ? 'font-mono text-[10px] uppercase tracking-[0.12em] text-signal transition-colors'
                      : 'font-mono text-[10px] uppercase tracking-[0.12em] text-background/40 transition-colors'
                  }
                >
                  {layer}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-between border-b border-background/10 px-4 py-2.5">
            <TechLabel tone="bright">Signal Classification</TechLabel>
            <TechLabel>
              {String(active + 1).padStart(2, '0')} / {String(HERO_SIGNALS.length).padStart(2, '0')}
            </TechLabel>
          </div>
          <SignalIntelligenceFeed signals={HERO_SIGNALS} activeIndex={active} onSelect={setActive} />
        </div>
      </div>

      <div className="border-t border-background/10 px-4 py-2.5">
        <ConceptNote />
      </div>
    </figure>
  )
}
