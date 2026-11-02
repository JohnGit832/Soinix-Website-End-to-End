import { cn } from '@/lib/utils'
import type { IntelSignal } from './data'
import { TechLabel } from './primitives'

const CONFIDENCE_LEVEL: Record<IntelSignal['confidence'], number> = {
  High: 3,
  Moderate: 2,
  Emerging: 1,
}

export function SignalIntelligenceFeed({
  signals,
  activeIndex,
  onSelect,
  className,
}: {
  signals: IntelSignal[]
  activeIndex: number
  onSelect?: (index: number) => void
  className?: string
}) {
  return (
    <ol className={cn('flex flex-col', className)} aria-label="Illustrative signal feed">
      {signals.map((signal, i) => {
        const active = i === activeIndex
        return (
          <li key={signal.code} className="border-b border-background/10 last:border-b-0">
            <button
              type="button"
              onClick={() => onSelect?.(i)}
              aria-pressed={active}
              className={cn(
                'group relative flex w-full flex-col gap-2 px-4 py-3.5 text-left transition-colors duration-300',
                active ? 'bg-background/[0.05]' : 'hover:bg-background/[0.025]',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'absolute inset-y-0 left-0 w-px transition-colors duration-300',
                  active ? 'bg-signal' : 'bg-transparent',
                )}
              />
              <span className="flex items-center justify-between gap-3">
                <TechLabel tone={active ? 'signal' : 'muted'}>{signal.code}</TechLabel>
                <span className="flex items-center gap-2">
                  <TechLabel>{signal.confidence}</TechLabel>
                  <span aria-hidden="true" className="flex gap-[3px]">
                    {[1, 2, 3].map((n) => (
                      <span
                        key={n}
                        className={cn(
                          'size-1.5 rounded-full',
                          n <= CONFIDENCE_LEVEL[signal.confidence]
                            ? active
                              ? 'bg-signal'
                              : 'bg-background/60'
                            : 'bg-background/15',
                        )}
                      />
                    ))}
                  </span>
                </span>
              </span>
              <span
                className={cn(
                  'text-[15px] font-medium leading-snug transition-colors',
                  active ? 'text-background' : 'text-background/75',
                )}
              >
                {signal.type}
              </span>
              <span className="text-[13px] leading-relaxed text-background/55">
                {signal.subject}
                {active ? (
                  <span className="mt-1 flex flex-col text-background/70">
                    {signal.lines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </span>
                ) : null}
              </span>
              {active ? (
                <span className="mt-1 flex flex-col gap-1.5">
                  <span className="flex justify-between">
                    <TechLabel>Event window</TechLabel>
                    <TechLabel>Liquidity</TechLabel>
                  </span>
                  <span aria-hidden="true" className="relative h-px w-full bg-background/15">
                    <span
                      className="absolute -top-[3px] size-[7px] rounded-full bg-signal transition-[left] duration-700"
                      style={{ left: `${signal.window * 100}%` }}
                    />
                  </span>
                </span>
              ) : null}
            </button>
          </li>
        )
      })}
    </ol>
  )
}
