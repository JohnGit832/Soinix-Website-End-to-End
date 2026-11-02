import { cn } from '@/lib/utils'
import { COMPARISON } from './data'
import { TechLabel } from './primitives'

/** Relative market intelligence retained at each step. Conceptual, not measured. */
const TRADITIONAL_RETAINED = [0.15, 0.4, 0.55, 0.2, 0.04]
const SOINIX_RETAINED = [0.2, 0.38, 0.58, 0.78, 1]

function Track({
  label,
  steps,
  retained,
  tone,
}: {
  label: string
  steps: string[]
  retained: number[]
  tone: 'muted' | 'signal'
}) {
  return (
    <div className="flex flex-col rounded-[4px] border border-background/12">
      <div className="flex items-center justify-between border-b border-background/10 px-4 py-3">
        <TechLabel tone={tone === 'signal' ? 'signal' : 'bright'}>{label}</TechLabel>
        <TechLabel>Intelligence retained</TechLabel>
      </div>
      <ol className="grid grid-cols-1 sm:grid-cols-5">
        {steps.map((step, i) => (
          <li
            key={step}
            className="flex items-center gap-4 border-b border-background/[0.07] px-4 py-4 last:border-b-0 sm:flex-col sm:items-stretch sm:gap-4 sm:border-b-0 sm:border-r sm:last:border-r-0"
          >
            <span aria-hidden="true" className="flex h-5 w-16 shrink-0 items-end sm:h-16 sm:w-full">
              <span
                className={cn(
                  'block w-full rounded-[1px]',
                  tone === 'signal' ? 'bg-signal/70' : 'bg-background/25',
                  tone === 'muted' && i === steps.length - 1 && 'bg-background/10',
                )}
                style={{ height: `${Math.max(retained[i] * 100, 4)}%` }}
              />
            </span>
            <span className="flex flex-col gap-1">
              <TechLabel>{String(i + 1).padStart(2, '0')}</TechLabel>
              <span
                className={cn(
                  'text-[14.5px] leading-snug',
                  tone === 'muted' && i === steps.length - 1 ? 'text-background/45 line-through decoration-background/30' : 'text-background',
                )}
              >
                {step}
              </span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function InfrastructureComparison() {
  return (
    <div className="flex flex-col gap-4">
      <Track label={COMPARISON.traditional.label} steps={COMPARISON.traditional.steps} retained={TRADITIONAL_RETAINED} tone="muted" />
      <Track label={COMPARISON.soinix.label} steps={COMPARISON.soinix.steps} retained={SOINIX_RETAINED} tone="signal" />
    </div>
  )
}
