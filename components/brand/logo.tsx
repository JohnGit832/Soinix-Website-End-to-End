import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type LogoMarkProps = {
  variant?: 'black' | 'green'
  size?: number
  className?: string
  priority?: boolean
}

/**
 * The SGT monogram. Transparent marks are derived from the supplied artwork;
 * swap the files in /public/brand without changing these dimensions.
 */
export function LogoMark({ variant = 'black', size = 36, className, priority }: LogoMarkProps) {
  return (
    <Image
      src={variant === 'green' ? '/brand/sgt-green-mark.png' : '/brand/sgt-black-mark.png'}
      alt=""
      width={size}
      height={size}
      priority={priority}
      className={cn('shrink-0 object-contain', className)}
      style={{ width: size, height: size }}
    />
  )
}

type LogoProps = {
  variant?: 'black' | 'green'
  tone?: 'light' | 'dark'
  size?: number
  className?: string
}

export function Logo({ variant = 'black', tone = 'light', size = 36, className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn('group inline-flex items-center gap-3 rounded-md', className)}
      aria-label="Soinix Growth Technologies, home"
    >
      <LogoMark variant={variant} size={size} priority />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'text-[17px] font-semibold tracking-tight',
            tone === 'dark' ? 'text-background' : 'text-ink',
          )}
        >
          Soinix
        </span>
        <span
          className={cn(
            'mt-1 font-mono text-[9.5px] uppercase tracking-[0.14em]',
            tone === 'dark' ? 'text-background/55' : 'text-muted-foreground',
          )}
        >
          Growth Technologies
        </span>
      </span>
    </Link>
  )
}
