import { cn } from '@/lib/utils'
import { OPERATING_STAGES } from './data'
import { TechLabel } from './primitives'

export function OperatingPipeline({ className }: { className?: string }) {
  return (
    <div className={cn('relative', className)}>
      <div aria-hidden="true" className="absolute inset-x-0 top-[5px] hidden h-px overflow-hidden bg-background/15 md:block">
        <div className="absolute inset-0 animate-scan-sweep">
          <span className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-signal to-transparent" />
        </div>
      </div>
      <ol className="grid grid-cols-1 gap-0 md:grid-cols-4">
        {OPERATING_STAGES.map((stage, i) => {
          const last = i === OPERATING_STAGES.length - 1
          return (
            <li
              key={stage.code}
              className="relative flex gap-5 border-l border-background/15 pb-10 pl-6 last:pb-0 md:flex-col md:gap-6 md:border-l-0 md:pb-0 md:pl-0 md:pr-8"
            >
              <span
                aria-hidden="true"
                className={cn(
                  'absolute -left-[6px] top-0 size-[11px] rounded-full border-2 bg-ink md:static',
                  last ? 'border-cream/80' : 'border-signal',
                )}
              />
              <div className="flex flex-col gap-3">
                <TechLabel tone={last ? 'muted' : 'signal'} className={last ? 'text-cream/80' : undefined}>
                  {stage.code}
                </TechLabel>
                <h3 className="text-2xl font-medium tracking-tight text-background">{stage.label}</h3>
                <p className="text-pretty text-[15px] leading-relaxed text-background/60">{stage.body}</p>
                {last ? (
                  <TechLabel className="mt-2 text-cream/70">Advisor time introduced here</TechLabel>
                ) : null}
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
