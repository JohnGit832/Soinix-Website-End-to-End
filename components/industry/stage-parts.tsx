import { cn } from '@/lib/utils'
export { MonoLabel } from './flow'

export function TagRow({ items, dark, hot }: { items: string[]; dark?: boolean; hot?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            'rounded-md border px-2.5 py-1 text-[14px]',
            hot
              ? 'border-signal bg-signal text-ink'
              : dark
                ? 'border-background/15 text-background/85'
                : 'border-line bg-background text-ink/85',
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export function FieldValue({ value, dark }: { value: string | string[]; dark?: boolean }) {
  if (Array.isArray(value)) return <TagRow items={value} dark={dark} />
  return (
    <p className={cn('text-[16px] leading-relaxed text-pretty', dark ? 'text-background/85' : 'text-ink/85')}>{value}</p>
  )
}
