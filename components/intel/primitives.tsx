import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function TechLabel({
  children,
  className,
  tone = 'muted',
}: {
  children: React.ReactNode
  className?: string
  tone?: 'muted' | 'bright' | 'signal'
}) {
  return (
    <span
      className={cn(
        'font-mono text-[10.5px] uppercase leading-none tracking-[0.16em]',
        tone === 'muted' && 'text-background/45',
        tone === 'bright' && 'text-background/80',
        tone === 'signal' && 'text-signal',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function IntelEyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-background/60',
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-6 bg-signal/70" />
      {children}
    </p>
  )
}

export function SectionIntro({
  eyebrow,
  title,
  titleId,
  children,
  className,
  align = 'left',
}: {
  eyebrow?: string
  title: React.ReactNode
  titleId: string
  children?: React.ReactNode
  className?: string
  align?: 'left' | 'split'
}) {
  if (align === 'split') {
    return (
      <div className={cn('grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12', className)}>
        <div className="flex flex-col gap-6 lg:col-span-7">
          {eyebrow ? <IntelEyebrow>{eyebrow}</IntelEyebrow> : null}
          <h2 id={titleId} className="text-display text-balance font-medium text-background">
            {title}
          </h2>
        </div>
        {children ? (
          <div className="flex flex-col gap-4 text-pretty text-[16.5px] leading-relaxed text-background/65 lg:col-span-5 lg:pt-10">
            {children}
          </div>
        ) : null}
      </div>
    )
  }
  return (
    <div className={cn('flex max-w-3xl flex-col gap-6', className)}>
      {eyebrow ? <IntelEyebrow>{eyebrow}</IntelEyebrow> : null}
      <h2 id={titleId} className="text-display text-balance font-medium text-background">
        {title}
      </h2>
      {children ? (
        <div className="flex flex-col gap-4 text-pretty text-[16.5px] leading-relaxed text-background/65">
          {children}
        </div>
      ) : null}
    </div>
  )
}

/** Bordered information module with a technical header strip. */
export function Module({
  label,
  meta,
  children,
  className,
  bodyClassName,
  as: Tag = 'div',
}: {
  label: React.ReactNode
  meta?: React.ReactNode
  children: React.ReactNode
  className?: string
  bodyClassName?: string
  as?: 'div' | 'section' | 'article' | 'figure'
}) {
  return (
    <Tag
      className={cn(
        'relative flex flex-col rounded-[4px] border border-background/12 bg-background/[0.025]',
        className,
      )}
    >
      <div className="flex min-h-10 items-center justify-between gap-4 border-b border-background/10 px-4">
        <TechLabel tone="bright">{label}</TechLabel>
        {meta ? <TechLabel>{meta}</TechLabel> : null}
      </div>
      <div className={cn('flex-1', bodyClassName)}>{children}</div>
    </Tag>
  )
}

export function ConceptNote({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <p className={cn('font-mono text-[10.5px] uppercase tracking-[0.14em] text-background/40', className)}>
      {children ?? 'Conceptual interface. Illustrative signals, not client or prospect records.'}
    </p>
  )
}

export function IntelButton({
  href,
  children,
  variant = 'primary',
  className,
}: {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'ghost'
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group/btn inline-flex h-12 items-center justify-center gap-2.5 rounded-[4px] px-5 text-[15px] font-medium transition-colors duration-200 ease-[var(--ease-system)]',
        variant === 'primary' && 'bg-signal text-ink hover:opacity-90',
        variant === 'ghost' &&
          'border border-background/20 text-background hover:border-background/50 hover:bg-background/[0.04]',
        className,
      )}
    >
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="size-4 transition-transform duration-200 ease-[var(--ease-system)] group-hover/btn:translate-x-1"
      />
    </Link>
  )
}

export function DensityBar({ value, max = 5, className }: { value: number; max?: number; className?: string }) {
  return (
    <span aria-hidden="true" className={cn('flex items-center gap-[3px]', className)}>
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={cn('h-2.5 w-1.5 rounded-[1px]', i < value ? 'bg-signal/80' : 'bg-background/12')}
        />
      ))}
    </span>
  )
}
