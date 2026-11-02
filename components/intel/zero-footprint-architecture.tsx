import { cn } from '@/lib/utils'
import { ADVISOR_STAGES, INFRA_STAGES } from './data'
import { TechLabel } from './primitives'

function StageStack({ stages, tone }: { stages: string[]; tone: 'infra' | 'advisor' }) {
  return (
    <ol className="flex flex-col">
      {stages.map((stage, i) => (
        <li key={stage} className="flex flex-col">
          <span
            className={cn(
              'flex h-12 items-center justify-between gap-3 rounded-[3px] border px-4',
              tone === 'infra' ? 'border-background/12 bg-background/[0.03]' : 'border-cream/20 bg-cream/[0.04]',
            )}
          >
            <span className="text-[14.5px] text-background">{stage}</span>
            <TechLabel>{String(i + 1).padStart(2, '0')}</TechLabel>
          </span>
          {i < stages.length - 1 ? (
            <span aria-hidden="true" className="relative mx-auto h-4 w-px overflow-hidden bg-background/15">
              {tone === 'infra' ? (
                <span className="absolute inset-x-0 top-0 h-2 animate-flow-y bg-signal [--flow-distance:16px]" />
              ) : null}
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  )
}

export function ZeroFootprintArchitecture({ className }: { className?: string }) {
  return (
    <figure className={cn('flex flex-col gap-0 md:flex-row md:items-stretch', className)} aria-label="Zero-footprint deployment architecture">
      <div className="flex flex-1 flex-col gap-4 rounded-[4px] border border-background/12 p-4 md:p-5">
        <div className="flex items-center justify-between">
          <TechLabel tone="signal">Soinix Infrastructure</TechLabel>
          <TechLabel>Operates continuously</TechLabel>
        </div>
        <StageStack stages={INFRA_STAGES} tone="infra" />
        <p className="mt-auto border-t border-background/10 pt-4 text-[14px] font-medium uppercase tracking-[0.06em] text-background">
          Soinix handles the infrastructure
        </p>
      </div>

      <div className="relative flex items-center justify-center py-6 md:w-28 md:flex-col md:py-0" aria-hidden="true">
        <span className="absolute inset-x-0 top-1/2 h-px border-t border-dashed border-background/30 md:inset-x-auto md:inset-y-0 md:left-1/2 md:top-0 md:h-auto md:w-px md:border-l md:border-t-0" />
        <span className="relative bg-ink px-2 py-2 text-center">
          <TechLabel tone="bright" className="block">Handoff</TechLabel>
          <TechLabel className="mt-1.5 block">Qualified</TechLabel>
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 rounded-[4px] border border-cream/20 p-4 md:p-5">
        <div className="flex items-center justify-between">
          <TechLabel className="text-cream/80">Advisor Engagement</TechLabel>
          <TechLabel>Introduced selectively</TechLabel>
        </div>
        <StageStack stages={ADVISOR_STAGES} tone="advisor" />
        <p className="mt-auto border-t border-background/10 pt-4 text-[14px] font-medium uppercase tracking-[0.06em] text-background">
          Your advisors handle the relationship
        </p>
      </div>
    </figure>
  )
}
