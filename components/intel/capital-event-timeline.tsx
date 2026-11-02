import { cn } from '@/lib/utils'
import { TIMELINE_STAGES } from './data'
import { TechLabel } from './primitives'

const SOINIX_ENTRY = new Set(['formation', 'approach'])
const TRADITIONAL_ENTRY = 'liquid'

export function CapitalEventTimeline({ className }: { className?: string }) {
  return (
    <figure
      className={cn('rounded-[4px] border border-background/12 bg-background/[0.02]', className)}
      aria-labelledby="capital-timeline-caption"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-background/10 px-4 py-3">
        <TechLabel tone="bright">Capital Timeline</TechLabel>
        <span className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="h-1.5 w-4 rounded-[1px] bg-signal" />
            <TechLabel>Soinix intelligence enters</TechLabel>
          </span>
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="h-1.5 w-4 rounded-[1px] bg-cream/60" />
            <TechLabel>Traditional acquisition enters</TechLabel>
          </span>
        </span>
      </div>

      {/* Desktop: horizontal timeline */}
      <div className="hidden px-6 pb-8 pt-10 md:block">
        <div className="grid grid-cols-5">
          <div className="col-span-2 flex flex-col gap-2 pr-6">
            <TechLabel tone="signal">Soinix intelligence</TechLabel>
            <div className="h-2 rounded-[1px] border border-signal/50 bg-signal/15" />
          </div>
          <div />
          <div className="flex flex-col gap-2 pr-6">
            <TechLabel className="text-cream/70">Traditional acquisition</TechLabel>
            <div className="h-2 rounded-[1px] border border-cream/40 bg-cream/10" />
          </div>
          <div />
        </div>

        <div className="relative mt-6">
          <div aria-hidden="true" className="absolute inset-x-0 top-[7px] h-px bg-background/20" />
          <ol className="relative grid grid-cols-5">
            {TIMELINE_STAGES.map((stage, i) => {
              const early = SOINIX_ENTRY.has(stage.id)
              const late = stage.id === TRADITIONAL_ENTRY
              return (
                <li key={stage.id} className="flex flex-col gap-4 pr-6">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'size-[15px] rounded-full border-2 bg-ink',
                      early && 'border-signal',
                      late && 'border-cream/70',
                      !early && !late && 'border-background/30',
                    )}
                  />
                  <span className="flex flex-col gap-1.5">
                    <TechLabel>T{i + 1}</TechLabel>
                    <span className="text-[15px] font-medium leading-snug text-background">
                      {stage.label}
                    </span>
                    <span className="text-[13.5px] leading-relaxed text-background/55">{stage.note}</span>
                  </span>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="mt-10 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <TechLabel>Competition for the relationship</TechLabel>
            <TechLabel>Higher</TechLabel>
          </div>
          <svg viewBox="0 0 500 60" preserveAspectRatio="none" className="h-14 w-full" aria-hidden="true">
            <path
              d="M0 58 C 140 57, 220 54, 290 40 S 420 6, 500 2 L 500 60 L 0 60 Z"
              className="fill-background/[0.06]"
            />
            <path
              d="M0 58 C 140 57, 220 54, 290 40 S 420 6, 500 2"
              className="fill-none stroke-background/45"
              strokeWidth="1.2"
              vectorEffect="non-scaling-stroke"
            />
            <line x1="0" x2="200" y1="59" y2="59" className="stroke-signal" strokeWidth="3" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <ol className="flex flex-col px-4 py-6 md:hidden">
        {TIMELINE_STAGES.map((stage, i) => {
          const early = SOINIX_ENTRY.has(stage.id)
          const late = stage.id === TRADITIONAL_ENTRY
          return (
            <li key={stage.id} className="relative flex gap-4 pb-6 last:pb-0">
              {i < TIMELINE_STAGES.length - 1 ? (
                <span aria-hidden="true" className="absolute left-[6px] top-4 bottom-0 w-px bg-background/20" />
              ) : null}
              <span
                aria-hidden="true"
                className={cn(
                  'relative mt-1 size-[13px] shrink-0 rounded-full border-2 bg-ink',
                  early && 'border-signal',
                  late && 'border-cream/70',
                  !early && !late && 'border-background/30',
                )}
              />
              <span className="flex flex-col gap-1">
                <span className="text-[15px] font-medium text-background">{stage.label}</span>
                <span className="text-[13.5px] text-background/55">{stage.note}</span>
                {early ? <TechLabel tone="signal" className="mt-1">Soinix intelligence</TechLabel> : null}
                {late ? <TechLabel className="mt-1 text-cream/70">Traditional acquisition</TechLabel> : null}
              </span>
            </li>
          )
        })}
      </ol>

      <figcaption
        id="capital-timeline-caption"
        className="border-t border-background/10 px-4 py-3 text-[13.5px] leading-relaxed text-background/60"
      >
        Traditional acquisition typically enters once capital becomes liquid. Soinix intelligence is
        designed to surface the signal while the wealth event is still forming.
      </figcaption>
    </figure>
  )
}
