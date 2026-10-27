import { ArrowDown, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type FlowStepsProps = {
  steps: string[]
  dark?: boolean
  horizontal?: boolean
  grid?: boolean
  className?: string
  label?: string
}

export function FlowSteps({ steps, dark, horizontal = false, grid = false, className, label }: FlowStepsProps) {
  const last = steps.length - 1
  if (grid) {
    return (
      <ol aria-label={label} className={cn('grid grid-cols-1 gap-2 sm:grid-cols-2', className)}>
        {steps.map((step, i) => (
          <li
            key={`${step}-${i}`}
            style={{ animationDelay: `${i * 70}ms` }}
            className={cn(
              'animate-in fade-in-0 slide-in-from-bottom-1 fill-mode-both flex items-center gap-3 rounded-lg border px-4 py-3 duration-500',
              i === last
                ? 'border-signal bg-signal text-ink'
                : dark
                  ? 'border-background/15 bg-background/[0.04] text-background'
                  : 'border-line bg-background text-ink',
            )}
          >
            <span
              className={cn(
                'font-mono text-[11px] tracking-[0.12em]',
                i === last ? 'text-ink/70' : dark ? 'text-background/45' : 'text-muted-foreground',
              )}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="text-[15px] font-medium leading-snug text-pretty">{step}</span>
          </li>
        ))}
      </ol>
    )
  }
  return (
    <ol
      aria-label={label}
      className={cn('flex flex-col', horizontal && 'lg:flex-row lg:items-stretch', className)}
    >
      {steps.map((step, i) => {
        const isLast = i === last
        return (
          <li
            key={`${step}-${i}`}
            className={cn('flex flex-col', horizontal && 'lg:flex-1 lg:flex-row lg:items-center')}
          >
            <div
              style={{ animationDelay: `${i * 90}ms` }}
              className={cn(
                'animate-in fade-in-0 slide-in-from-bottom-1 fill-mode-both flex flex-1 items-center gap-3 rounded-lg border px-4 py-3 duration-500',
                horizontal && 'lg:h-full lg:min-h-20 lg:flex-col lg:items-start lg:justify-between lg:gap-2',
                isLast
                  ? 'border-signal bg-signal text-ink'
                  : dark
                    ? 'border-background/15 bg-background/[0.04] text-background'
                    : 'border-line bg-background text-ink',
              )}
            >
              <span
                className={cn(
                  'font-mono text-[11px] tracking-[0.12em]',
                  isLast ? 'text-ink/70' : dark ? 'text-background/45' : 'text-muted-foreground',
                )}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[15px] font-medium leading-snug text-pretty">{step}</span>
            </div>
            {!isLast ? (
              <span
                aria-hidden="true"
                className={cn(
                  'flex justify-center py-1.5',
                  horizontal && 'lg:px-1.5 lg:py-0',
                  dark ? 'text-background/40' : 'text-ink/30',
                )}
              >
                <ArrowDown className={cn('size-4', horizontal && 'lg:hidden')} />
                {horizontal ? <ArrowRight className="hidden size-4 lg:block" /> : null}
              </span>
            ) : null}
          </li>
        )
      })}
    </ol>
  )
}

export function MonoLabel({
  children,
  dark,
  className,
}: {
  children: React.ReactNode
  dark?: boolean
  className?: string
}) {
  return (
    <span
      className={cn(
        'font-mono text-[11.5px] uppercase tracking-[0.14em]',
        dark ? 'text-background/55' : 'text-muted-foreground',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function Badge({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em]',
        dark ? 'border-background/20 text-background/70' : 'border-ink/15 text-ink/70',
      )}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-signal ring-1 ring-brand/60" />
      {children}
    </span>
  )
}

export function OptionButton({
  active,
  onClick,
  children,
  dark,
  muted,
  className,
  ...rest
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
  dark?: boolean
  muted?: boolean
  className?: string
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        'group inline-flex min-h-11 items-center gap-2.5 rounded-lg border px-3.5 py-2 text-left text-[14.5px] font-medium transition-[background-color,border-color,color,opacity,transform] duration-200 ease-[var(--ease-system)]',
        active
          ? dark
            ? 'border-signal bg-signal text-ink'
            : 'border-ink bg-ink text-background'
          : dark
            ? 'border-background/15 text-background/80 hover:border-background/40 hover:text-background'
            : 'border-line bg-background text-ink/80 hover:-translate-y-0.5 hover:border-ink/30 hover:text-ink',
        muted && !active && 'border-dashed opacity-70 hover:opacity-100',
        className,
      )}
      {...rest}
    >
      <span
        aria-hidden="true"
        className={cn(
          'size-1.5 shrink-0 rounded-full transition-colors',
          active ? (dark ? 'bg-ink' : 'bg-signal') : dark ? 'bg-background/30' : 'bg-ink/20',
        )}
      />
      {children}
    </button>
  )
}
