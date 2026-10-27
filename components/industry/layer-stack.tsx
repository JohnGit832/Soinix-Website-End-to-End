'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TagRow } from './stage-parts'

export type Layer = { name: string; body: string; items: string[] }

export function LayerStack({ layers, dark }: { layers: Layer[]; dark?: boolean }) {
  const [open, setOpen] = useState(0)
  return (
    <ul className="flex flex-col gap-2">
      {layers.map((layer, i) => {
        const isOpen = open === i
        return (
          <li
            key={layer.name}
            style={{ '--i': i } as React.CSSProperties}
            className={cn(
              'rounded-xl border transition-colors duration-300 lg:ml-[calc(var(--i)*1.75rem)]',
              isOpen
                ? dark
                  ? 'border-signal bg-background/[0.05]'
                  : 'border-ink bg-background'
                : dark
                  ? 'border-background/15'
                  : 'border-line bg-background/60',
            )}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="flex items-center gap-4">
                <span className={cn('font-mono text-[11px] tracking-[0.14em]', dark ? 'text-background/45' : 'text-muted-foreground')}>
                  L{i + 1}
                </span>
                <span className={cn('text-[17px] font-medium', dark ? 'text-background' : 'text-ink')}>{layer.name}</span>
              </span>
              <Plus
                aria-hidden="true"
                className={cn('size-4 shrink-0 transition-transform duration-200', isOpen && 'rotate-45', dark ? 'text-background/60' : 'text-ink/50')}
              />
            </button>
            {isOpen ? (
              <div className="animate-in fade-in-0 flex flex-col gap-4 px-5 pb-5 duration-300 md:pl-14">
                <p className={cn('max-w-2xl text-[15.5px] leading-relaxed', dark ? 'text-background/70' : 'text-muted-foreground')}>
                  {layer.body}
                </p>
                <TagRow items={layer.items} dark={dark} />
              </div>
            ) : null}
          </li>
        )
      })}
    </ul>
  )
}
