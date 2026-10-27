'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { Eyebrow, SectionHeading } from '@/components/site/primitives'

const NODES = [
  { label: 'Target Account', scatter: [6, 4] },
  { label: 'Referral Partner', scatter: [58, 0] },
  { label: 'Past Prospect', scatter: [30, 22] },
  { label: 'Existing Relationship', scatter: [66, 30] },
  { label: 'Market Signal', scatter: [2, 46] },
  { label: 'Dormant Opportunity', scatter: [48, 62] },
  { label: 'New Market', scatter: [14, 80] },
] as const

const ROW_GAP = 13.2
const ROW_START = 4

export function Opportunity() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] })
  const progress = useTransform(scrollYProgress, [0.25, 0.95], [0, 1], { clamp: true })

  return (
    <section aria-labelledby="opportunity-heading" className="border-t border-line">
      <div className="container-site grid grid-cols-1 gap-14 py-24 lg:grid-cols-2 lg:gap-16 lg:py-36">
        <div className="flex flex-col gap-8 lg:sticky lg:top-32 lg:self-start">
          <Eyebrow>The Opportunity</Eyebrow>
          <SectionHeading className="text-ink">
            <span id="opportunity-heading">
              Most Firms Do Not Have An Opportunity Problem.{' '}
              <span className="text-brand">They Have An Activation Problem.</span>
            </span>
          </SectionHeading>
          <div className="flex max-w-xl flex-col gap-5 text-lede text-pretty text-muted-foreground">
            <p>
              Revenue opportunities already exist across the markets you want to win, the people who can
              introduce you, the conversations your team has already started, and the relationships your
              business has spent years building.
            </p>
            <p className="text-ink">
              The challenge is deciding what deserves attention, activating it consistently, following up,
              qualifying the response, and getting the right opportunities to the right person.
            </p>
          </div>
        </div>

        <div ref={ref} className="relative">
          <div className="hidden md:block">
            <ScatterVisual progress={progress} reduced={Boolean(reduced)} />
          </div>
          <OrganizedList />
        </div>
      </div>
    </section>
  )
}

function ScatterVisual({ progress, reduced }: { progress: MotionValue<number>; reduced: boolean }) {
  const settled = useTransform(progress, (p) => (reduced ? 1 : p))
  const coreOpacity = useTransform(settled, [0.55, 1], [0, 1])
  const coreScale = useTransform(settled, [0.55, 1], [0.96, 1])
  const scatterLabel = useTransform(settled, [0, 0.4], [1, 0])

  return (
    <div aria-hidden="true" className="relative h-[520px] w-full">
      <motion.p
        style={{ opacity: scatterLabel }}
        className="absolute bottom-0 right-0 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
      >
        Scattered. Unowned. Unworked.
      </motion.p>
      <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
        {NODES.map((node, i) => (
          <Connector key={node.label} index={i} progress={settled} />
        ))}
      </svg>
      {NODES.map((node, i) => (
        <ScatterNode key={node.label} index={i} label={node.label} scatter={node.scatter} progress={settled} />
      ))}
      <motion.div
        style={{ opacity: coreOpacity, scale: coreScale, top: '38%' }}
        className="absolute right-0 flex w-[38%] flex-col gap-3 rounded-xl bg-brand p-5 text-primary-foreground"
      >
        <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em]">
          <span className="size-1.5 animate-signal-pulse rounded-full bg-signal" />
          Revenue Activation
        </p>
        <p className="text-[14px] leading-relaxed text-primary-foreground/80">
          Prioritized, activated, followed up, qualified, and routed.
        </p>
      </motion.div>
    </div>
  )
}

function ScatterNode({
  index,
  label,
  scatter,
  progress,
}: {
  index: number
  label: string
  scatter: readonly [number, number]
  progress: MotionValue<number>
}) {
  const left = useTransform(progress, [0, 1], [`${scatter[0]}%`, '0%'])
  const top = useTransform(progress, [0, 1], [`${scatter[1]}%`, `${ROW_START + index * ROW_GAP}%`])
  const rotate = useTransform(progress, [0, 1], [index % 2 === 0 ? -4 : 3, 0])
  const borderColor = useTransform(progress, [0.7, 1], ['rgb(9 11 10 / 0.12)', 'rgb(0 98 88 / 0.55)'])
  return (
    <motion.div
      style={{ left, top, rotate, borderColor }}
      className="absolute flex h-11 w-[32%] items-center gap-2.5 rounded-lg border bg-background px-3.5 text-[14px] font-medium text-ink shadow-[0_6px_20px_-14px_rgb(9_11_10_/_0.35)]"
    >
      <span className="size-2 shrink-0 rounded-full bg-signal ring-1 ring-brand" />
      <span className="truncate">{label}</span>
    </motion.div>
  )
}

function Connector({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.6, 1], [0, 1])
  const y = ROW_START + index * ROW_GAP + 4.2
  return (
    <motion.path
      style={{ opacity }}
      d={`M32 ${y} C 46 ${y}, 50 48, 62 48`}
      fill="none"
      stroke="var(--brand)"
      strokeOpacity={0.45}
      strokeWidth={1}
      vectorEffect="non-scaling-stroke"
    />
  )
}

function OrganizedList() {
  return (
    <div className="flex flex-col gap-3 md:hidden">
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {NODES.map((node) => (
          <li
            key={node.label}
            className="flex h-12 items-center gap-2.5 rounded-lg border border-line bg-background px-4 text-[15px] font-medium text-ink"
          >
            <span aria-hidden="true" className="size-2 rounded-full bg-signal ring-1 ring-brand" />
            {node.label}
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-2 rounded-xl bg-brand p-5 text-primary-foreground">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em]">Revenue Activation</p>
        <p className="text-[15px] leading-relaxed text-primary-foreground/80">
          Prioritized, activated, followed up, qualified, and routed.
        </p>
      </div>
    </div>
  )
}
