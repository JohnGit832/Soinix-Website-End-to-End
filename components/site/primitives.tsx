import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Eyebrow({
  children,
  index,
  tone = 'light',
  className,
}: {
  children: React.ReactNode
  index?: string
  tone?: 'light' | 'dark'
  className?: string
}) {
  return (
    <p
      className={cn(
        'flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em]',
        tone === 'dark' ? 'text-background/60' : 'text-muted-foreground',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn('size-1.5 rounded-full', tone === 'dark' ? 'bg-signal' : 'bg-brand')}
      />
      {index ? (
        <span>
          <span className={tone === 'dark' ? 'text-background' : 'text-ink'}>{index}</span>
          <span className="px-1.5">/</span>
          {children}
        </span>
      ) : (
        children
      )}
    </p>
  )
}

type ButtonLinkProps = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'signal' | 'secondary' | 'secondary-dark' | 'text' | 'text-dark'
  size?: 'md' | 'lg'
  className?: string
  arrow?: boolean
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  arrow = true,
}: ButtonLinkProps) {
  const base =
    'group/btn inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 ease-[var(--ease-system)]'
  const sizes = {
    md: 'h-11 rounded-lg px-5 text-[15px]',
    lg: 'h-13 rounded-[10px] px-6 text-base',
  }
  const variants = {
    primary: 'bg-brand text-primary-foreground hover:bg-brand-deep',
    signal: 'bg-signal text-ink hover:bg-background',
    secondary: 'border border-ink/15 bg-transparent text-ink hover:border-ink/40 hover:bg-paper',
    'secondary-dark':
      'border border-background/20 bg-transparent text-background hover:border-background/50',
    text: 'h-auto px-0 text-ink underline-offset-4 hover:text-brand',
    'text-dark': 'h-auto px-0 text-background hover:text-signal',
  }
  const isText = variant === 'text' || variant === 'text-dark'
  return (
    <Link href={href} className={cn(base, !isText && sizes[size], variants[variant], className)}>
      <span>{children}</span>
      {arrow ? (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 ease-[var(--ease-system)] group-hover/btn:translate-x-1"
        />
      ) : null}
    </Link>
  )
}

export function SectionHeading({
  as: Tag = 'h2',
  children,
  className,
}: {
  as?: 'h1' | 'h2' | 'h3'
  children: React.ReactNode
  className?: string
}) {
  return (
    <Tag className={cn('text-section text-balance font-medium', className)}>{children}</Tag>
  )
}
