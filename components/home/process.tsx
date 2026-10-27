'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react'
import { Eyebrow, SectionHeading } from '@/components/site/primitives'
import { cn } from '@/lib/utils'

const STEPS = [
  { title: 'Find', body: 'Surface new demand worth creating and opportunities already within reach.' },
  { title: 'Prioritize', body: 'Choose the opportunities that deserve attention first.' },
  { title: 'Activate', body: 'Build the right campaign, offer, message, and path to start the conversation.' },
  { title: 'Follow Up', body: 'Keep relevant opportunities moving instead of relying on one touch.' },
  { title: 'Qualify', body: 'Separate real commercial interest from noise.' },
  { title: 'Route', body: 'Get the right opportunity to the right advisor, producer, or team member.' },
  { title: 'Measure', body: 'Understand what is creating conversations and where to improve next.' },
]

export function Process() {
  return (
    <section id="how-it-works" aria-labelledby="process-heading" className="on-dark bg-ink text-background">
      <DesktopProcess />
      <MobileProcess />
    </section>
  )
}

function Header() {
  return (
    <div className="flex flex-col gap-8">
      <Eyebrow tone="dark">How It Works</Eyebrow>
      <SectionHeading className="max-w-3xl text-background">
        <span id="process-heading">From Opportunity To Qualified Conversation.</span>
      </SectionHeading>
    </div>
  )
}

function DesktopProcess() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const signalLeft = useTransform(scrollYProgress, [0.04, 0.96], ['0%', '100%'], { clamp: true })

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const next = Math.min(STEPS.length - 1, Math.max(0, Math.floor(value * STEPS.length)))
    setActive(next)
  })

  return (
    <div ref={ref} className="relative hidden h-[260vh] lg:block">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div aria-hidden="true" className="bg-grid-dark absolute inset-0 opacity-60" />
        <div className="container-site relative flex flex-col gap-20">
          <div className="flex items-end justify-between gap-10">
            <Header />
            <p className="max-w-sm pb-2 text-pretty text-[17px] leading-relaxed text-background/70">
              Seven stages, one owner. Every opportunity moves through the same disciplined system.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <div className="relative h-px w-full bg-background/15">
              <motion.div
                aria-hidden="true"
                style={{ width: signalLeft }}
                className="absolute inset-y-0 left-0 bg-signal"
              />
              <motion.span
                aria-hidden="true"
                style={{ left: signalLeft }}
                className="absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal shadow-[0_0_0_6px_rgb(172_255_95_/_0.18)]"
              />
            </div>
            <ol className="grid grid-cols-7 gap-6">
              {STEPS.map((step, i) => {
                const state = i === active ? 'active' : i < active ? 'done' : 'next'
                return (
                  <li
                    key={step.title}
                    aria-current={state === 'active' ? 'step' : undefined}
                    className={cn(
                      'flex flex-col gap-4 transition-opacity duration-500',
                      state === 'next' && 'opacity-40',
                      state === 'done' && 'opacity-65',
                    )}
                  >
                    <span className="font-mono text-[12px] tracking-[0.14em] text-background/55">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3
                      className={cn(
                        'text-2xl font-medium tracking-tight transition-colors duration-500 xl:text-[28px]',
                        state === 'active' ? 'text-signal' : 'text-background',
                      )}
                    >
                      {step.title}
                    </h3>
                    <p className="text-pretty text-[14.5px] leading-relaxed text-background/75">{step.body}</p>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileProcess() {
  return (
    <div className="container-site flex flex-col gap-14 py-24 lg:hidden">
      <Header />
      <ol className="relative flex flex-col gap-10 border-l border-background/15 pl-8">
        {STEPS.map((step, i) => (
          <li key={step.title} className="relative flex flex-col gap-2">
            <span
              aria-hidden="true"
              className="absolute -left-[37px] top-1.5 size-[9px] rounded-full bg-signal ring-4 ring-ink"
            />
            <span className="font-mono text-[12px] tracking-[0.14em] text-background/55">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="text-2xl font-medium tracking-tight text-background">{step.title}</h3>
            <p className="text-pretty text-[16px] leading-relaxed text-background/75">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
