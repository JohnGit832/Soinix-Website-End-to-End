'use client'

import { useEffect, useRef, useState } from 'react'
import { SYSTEM_INPUTS, SYSTEM_STAGES, type SystemFrame } from './system-data'
import { cn } from '@/lib/utils'

const W = 560
const H = 600
const LEFT_X = 130
const RIGHT_X = 430
const CHIP_W = 196
const ROW_Y = [64, 108, 152, 196]
const CORE = { x: 280, y: 292, w: 244, h: 60 }
const CORE_TOP = CORE.y - CORE.h / 2
const CORE_BOTTOM = CORE.y + CORE.h / 2
const STAGE_X = [48, 136, 224, 312, 400, 488]
const RAIL_Y = 404
const OUTPUT = { x: 280, y: 546, w: 330, h: 76 }

const IN_DUR = 950
const CORE_DUR = 350
const ROUTE_DUR = 3000
const OUT_DUR = 1900
const CYCLE = IN_DUR + CORE_DUR + ROUTE_DUR + OUT_DUR

const MAIN_PATH = `M280 ${CORE_BOTTOM} V344 Q280 356 268 356 H60 Q48 356 48 368 V${RAIL_Y} H508 Q528 ${RAIL_Y} 528 ${RAIL_Y + 20} V458 Q528 472 514 472 H294 Q280 472 280 486 V${OUTPUT.y - OUTPUT.h / 2}`

function inputPosition(index: number) {
  const side = index < 4 ? 'left' : 'right'
  return { side, x: side === 'left' ? LEFT_X : RIGHT_X, y: ROW_Y[index % 4] } as const
}

function inputPath(index: number) {
  const { side, y } = inputPosition(index)
  return side === 'left'
    ? `M${LEFT_X + CHIP_W / 2} ${y} C 272 ${y}, 280 236, 280 ${CORE_TOP}`
    : `M${RIGHT_X - CHIP_W / 2} ${y} C 288 ${y}, 280 236, 280 ${CORE_TOP}`
}

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2)

type Props = {
  focused: number | null
  onSelect: (index: number) => void
  reduced: boolean
  onFrame: (frame: SystemFrame) => void
}

export function SystemDiagram({ focused, onSelect, reduced, onFrame }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState<number | null>(null)
  const [frame, setFrame] = useState<SystemFrame>({ input: focused ?? 1, phase: 'output', stage: 5 })
  const frameRef = useRef(frame)
  const focusedRef = useRef(focused)
  const resetRef = useRef(false)
  const visibleRef = useRef(true)
  const signalRef = useRef<SVGCircleElement>(null)
  const progressRef = useRef<SVGPathElement>(null)
  const mainRef = useRef<SVGPathElement>(null)
  const inputRefs = useRef<(SVGPathElement | null)[]>([])
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    focusedRef.current = focused
    resetRef.current = true
    if (reduced) {
      const next: SystemFrame = { input: focused ?? -1, phase: 'output', stage: 5 }
      frameRef.current = next
      setFrame(next)
      onFrame(next)
    }
  }, [focused, reduced, onFrame])

  useEffect(() => {
    const node = wrapperRef.current
    if (!node) return
    const resize = new ResizeObserver(([entry]) => {
      setScale(Math.min(1.1, entry.contentRect.width / W))
    })
    resize.observe(node)
    const visibility = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting
    })
    visibility.observe(node)
    return () => {
      resize.disconnect()
      visibility.disconnect()
    }
  }, [])

  useEffect(() => {
    if (reduced) return
    const main = mainRef.current
    const progress = progressRef.current
    const signal = signalRef.current
    if (!main || !progress || !signal) return

    const mainLength = main.getTotalLength()
    progress.style.strokeDasharray = `${mainLength}`
    const stageDistances = STAGE_X.map((x) => {
      let best = 0
      let bestDelta = Number.POSITIVE_INFINITY
      for (let d = 0; d <= mainLength; d += 2) {
        const point = main.getPointAtLength(d)
        const delta = Math.abs(point.x - x) + Math.abs(point.y - RAIL_Y) * 4
        if (delta < bestDelta) {
          bestDelta = delta
          best = d
        }
      }
      return best
    })

    let raf = 0
    let start = performance.now()
    let last = start
    let cycle = 1

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick)
      const dt = now - last
      last = now
      if (!visibleRef.current || document.hidden) {
        start += dt
        return
      }
      if (resetRef.current) {
        resetRef.current = false
        start = now
      }
      let t = now - start
      if (t > CYCLE) {
        start = now
        t = 0
        cycle += 1
      }
      const input = focusedRef.current ?? cycle % SYSTEM_INPUTS.length
      let next: SystemFrame
      if (t < IN_DUR) {
        const path = inputRefs.current[input]
        if (path) {
          const length = path.getTotalLength()
          const point = path.getPointAtLength(easeInOut(t / IN_DUR) * length)
          signal.setAttribute('cx', `${point.x}`)
          signal.setAttribute('cy', `${point.y}`)
        }
        signal.style.opacity = '1'
        progress.style.strokeDashoffset = `${mainLength}`
        next = { input, phase: 'inbound', stage: -1 }
      } else if (t < IN_DUR + CORE_DUR) {
        signal.style.opacity = '0'
        next = { input, phase: 'core', stage: -1 }
      } else if (t < IN_DUR + CORE_DUR + ROUTE_DUR) {
        const p = (t - IN_DUR - CORE_DUR) / ROUTE_DUR
        const distance = p * mainLength
        const point = main.getPointAtLength(distance)
        signal.setAttribute('cx', `${point.x}`)
        signal.setAttribute('cy', `${point.y}`)
        signal.style.opacity = '1'
        progress.style.strokeDashoffset = `${mainLength - distance}`
        let stage = -1
        stageDistances.forEach((d, i) => {
          if (distance >= d - 4) stage = i
        })
        next = { input, phase: 'route', stage }
      } else {
        signal.style.opacity = '0'
        progress.style.strokeDashoffset = '0'
        next = { input, phase: 'output', stage: SYSTEM_STAGES.length - 1 }
      }
      const current = frameRef.current
      if (current.input !== next.input || current.phase !== next.phase || current.stage !== next.stage) {
        frameRef.current = next
        setFrame(next)
        onFrame(next)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reduced, onFrame])

  const handlePointer = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || !gridRef.current) return
    const rect = event.currentTarget.getBoundingClientRect()
    const mx = ((event.clientX - rect.left) / rect.width - 0.5) * 2
    const my = ((event.clientY - rect.top) / rect.height - 0.5) * 2
    gridRef.current.style.transform = `translate3d(${mx * -6}px, ${my * -6}px, 0)`
  }

  const activeInput = frame.input
  const stageLit = (i: number) => (reduced ? true : frame.phase === 'output' || i <= frame.stage)
  const isProcessing = !reduced && (frame.phase === 'core' || frame.phase === 'route')

  return (
    <div
      ref={wrapperRef}
      onPointerMove={handlePointer}
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: `${W} / ${H}` }}
    >
      <div
        className="absolute left-0 top-0 origin-top-left transition-opacity duration-500"
        style={{ width: W, height: H, transform: `scale(${scale ?? 1})`, opacity: scale ? 1 : 0 }}
      >
        <div
          ref={gridRef}
          aria-hidden="true"
          className="absolute -inset-4 transition-transform duration-700 ease-out"
          style={{
            backgroundImage: 'radial-gradient(circle, rgb(9 11 10 / 0.12) 1px, transparent 1.2px)',
            backgroundSize: '22px 22px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />

        <svg
          aria-hidden="true"
          width={W}
          height={H}
          viewBox={`0 0 ${W} ${H}`}
          className="absolute inset-0 overflow-visible"
        >
          {SYSTEM_INPUTS.map((input, i) => (
            <path
              key={input.id}
              ref={(node) => {
                inputRefs.current[i] = node
              }}
              d={inputPath(i)}
              fill="none"
              stroke={i === activeInput && frame.phase === 'inbound' ? 'var(--brand)' : 'rgb(9 11 10 / 0.16)'}
              strokeWidth={i === activeInput && frame.phase === 'inbound' ? 1.6 : 1.1}
              className="transition-[stroke] duration-300"
            />
          ))}
          <path ref={mainRef} d={MAIN_PATH} fill="none" stroke="rgb(9 11 10 / 0.16)" strokeWidth={1.1} />
          <path
            ref={progressRef}
            d={MAIN_PATH}
            fill="none"
            stroke="var(--brand)"
            strokeWidth={1.75}
            strokeLinecap="round"
            style={{ strokeDashoffset: reduced ? 0 : undefined }}
          />
          {STAGE_X.map((x, i) => {
            const lit = stageLit(i)
            const current = !reduced && frame.phase === 'route' && frame.stage === i
            return (
              <g key={SYSTEM_STAGES[i]}>
                {current ? (
                  <circle cx={x} cy={RAIL_Y} r={11} fill="var(--signal)" opacity={0.35} />
                ) : null}
                <circle
                  cx={x}
                  cy={RAIL_Y}
                  r={current ? 6 : 5}
                  fill={current ? 'var(--signal)' : lit ? 'var(--brand)' : 'var(--background)'}
                  stroke={lit || current ? 'var(--brand)' : 'rgb(9 11 10 / 0.3)'}
                  strokeWidth={1.5}
                  className="transition-all duration-300"
                />
                <text
                  x={x}
                  y={RAIL_Y + 26}
                  textAnchor="middle"
                  className="font-mono transition-[fill] duration-300"
                  fontSize={10}
                  letterSpacing="0.1em"
                  fill={lit ? 'var(--ink)' : 'rgb(9 11 10 / 0.42)'}
                >
                  {SYSTEM_STAGES[i].toUpperCase()}
                </text>
              </g>
            )
          })}
          <circle
            ref={signalRef}
            cx={-20}
            cy={-20}
            r={5}
            fill="var(--signal)"
            stroke="var(--brand)"
            strokeWidth={1.5}
            style={{ opacity: 0 }}
          />
        </svg>

        <p className="absolute left-8 top-4 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
          New Demand
        </p>
        <p className="absolute right-8 top-4 text-right font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
          Existing Relationships
        </p>

        {SYSTEM_INPUTS.map((input, i) => {
          const { x, y } = inputPosition(i)
          const active = i === activeInput
          const isFocused = focused === i
          const tooltipId = `system-tip-${input.id}`
          return (
            <div
              key={input.id}
              className="group/node absolute"
              style={{ left: x - CHIP_W / 2, top: y - 17, width: CHIP_W }}
            >
              <button
                type="button"
                aria-pressed={isFocused}
                aria-describedby={tooltipId}
                onClick={() => onSelect(i)}
                className={cn(
                  'flex h-[34px] w-full items-center gap-2.5 rounded-lg border px-3 text-left text-[13px] font-medium tracking-tight transition-all duration-300 ease-[var(--ease-system)] hover:-translate-y-0.5 hover:border-brand/60 hover:shadow-[0_8px_20px_-12px_rgb(0_98_88_/_0.5)]',
                  active ? 'border-brand bg-[color-mix(in_oklab,var(--brand)_6%,white)] text-ink' : 'border-line bg-background text-ink/80',
                  isFocused && 'ring-2 ring-brand/25',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'size-2 shrink-0 rounded-full transition-colors duration-300',
                    active ? 'bg-signal ring-1 ring-brand' : 'bg-ink/15',
                  )}
                />
                <span className="truncate">{input.label}</span>
              </button>
              <span
                role="tooltip"
                id={tooltipId}
                className="pointer-events-none absolute bottom-full left-0 z-20 mb-2 w-max max-w-[220px] translate-y-1 rounded-md bg-ink px-2.5 py-1.5 text-[11.5px] leading-snug text-background opacity-0 transition-all duration-200 group-hover/node:translate-y-0 group-hover/node:opacity-100 group-focus-within/node:translate-y-0 group-focus-within/node:opacity-100"
              >
                {input.description}
              </span>
            </div>
          )
        })}

        <div
          className={cn(
            'absolute flex flex-col justify-center gap-1 rounded-xl bg-brand px-4 text-primary-foreground transition-shadow duration-300',
            isProcessing && 'shadow-[0_0_0_6px_color-mix(in_oklab,var(--signal)_35%,transparent)]',
          )}
          style={{ left: CORE.x - CORE.w / 2, top: CORE_TOP, width: CORE.w, height: CORE.h }}
        >
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em]">
            <span
              aria-hidden="true"
              className={cn('size-1.5 rounded-full bg-signal', isProcessing && 'animate-signal-pulse')}
            />
            Revenue Activation
          </p>
          <p className="truncate text-[12.5px] text-primary-foreground/75">
            {reduced
              ? 'Every input moves through one system'
              : frame.phase === 'inbound'
                ? `Receiving: ${SYSTEM_INPUTS[activeInput]?.label}`
                : frame.phase === 'output'
                  ? 'Ready for the next opportunity'
                  : `Working: ${SYSTEM_INPUTS[activeInput]?.label}`}
          </p>
        </div>

        <div
          className="absolute flex flex-col justify-center gap-1.5 rounded-xl border border-ink/12 bg-background px-4"
          style={{ left: OUTPUT.x - OUTPUT.w / 2, top: OUTPUT.y - OUTPUT.h / 2, width: OUTPUT.w, height: OUTPUT.h }}
        >
          <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
            Qualified Revenue Conversations
          </p>
          <div className="relative h-6">
            <p
              className={cn(
                'absolute inset-0 flex items-center gap-2 text-[13.5px] font-medium text-ink transition-all duration-500 ease-[var(--ease-system)]',
                frame.phase === 'output' && !reduced ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
              )}
            >
              <span aria-hidden="true" className="size-2 rounded-full bg-signal ring-1 ring-brand" />
              Qualified conversation
              <span className="truncate font-normal text-muted-foreground">
                {'from '}
                {SYSTEM_INPUTS[activeInput]?.label}
              </span>
            </p>
            <p
              className={cn(
                'absolute inset-0 flex items-center text-[13px] text-muted-foreground transition-opacity duration-300',
                frame.phase === 'output' && !reduced ? 'opacity-0' : 'opacity-100',
              )}
            >
              {reduced ? 'Routed to the right person on your team' : 'Next opportunity in progress'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
