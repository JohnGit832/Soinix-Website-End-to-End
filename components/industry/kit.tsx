import Link from 'next/link'
import { ArrowDown, ArrowRight, ChevronRight, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SITE } from '@/lib/site'
import { ButtonLink, Eyebrow, SectionHeading } from '@/components/site/primitives'
import { MonoLabel } from './flow'

export type Tone = 'white' | 'paper' | 'cream' | 'green' | 'ink'

const TONES: Record<Tone, string> = {
  white: 'bg-background text-ink',
  paper: 'bg-paper text-ink',
  cream: 'bg-cream text-ink',
  green: 'on-dark bg-brand text-background',
  ink: 'on-dark bg-ink text-background',
}

export const isDark = (tone: Tone) => tone === 'green' || tone === 'ink'

export function Section({
  id,
  tone = 'white',
  labelledBy,
  grid,
  className,
  children,
}: {
  id?: string
  tone?: Tone
  labelledBy?: string
  grid?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('relative scroll-mt-20 overflow-hidden', TONES[tone])}
    >
      {grid ? (
        <div
          aria-hidden="true"
          className={cn(
            'absolute inset-0 opacity-70',
            isDark(tone) ? 'bg-grid-dark' : 'bg-grid',
          )}
        />
      ) : null}
      <div
        className={cn(
          'container-site relative flex flex-col gap-12 py-20 md:py-24 lg:gap-16 lg:py-32',
          className,
        )}
      >
        {children}
      </div>
    </section>
  )
}

export function SectionIntro({
  id,
  eyebrow,
  title,
  children,
  dark,
  layout = 'stack',
  className,
}: {
  id: string
  eyebrow?: string
  title: React.ReactNode
  children?: React.ReactNode
  dark?: boolean
  layout?: 'stack' | 'split'
  className?: string
}) {
  const split = layout === 'split'
  return (
    <div
      className={cn(
        split ? 'grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-12' : 'flex flex-col gap-6',
        className,
      )}
    >
      <div className={cn('flex flex-col gap-6', split && 'lg:col-span-7')}>
        {eyebrow ? <Eyebrow tone={dark ? 'dark' : 'light'}>{eyebrow}</Eyebrow> : null}
        <SectionHeading className={cn('max-w-4xl', dark ? 'text-background' : 'text-ink')}>
          <span id={id}>{title}</span>
        </SectionHeading>
      </div>
      {children ? (
        <div
          className={cn(
            'flex max-w-2xl flex-col gap-4 text-lede text-pretty',
            dark ? 'text-background/70' : 'text-muted-foreground',
            split && 'lg:col-span-5',
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  )
}

export type Crumb = { label: string; href?: string }

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-[13.5px] text-muted-foreground">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !last ? (
                <Link href={item.href} className="transition-colors hover:text-ink">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={last ? 'page' : undefined} className={last ? 'text-ink' : undefined}>
                  {item.label}
                </span>
              )}
              {!last ? <ChevronRight aria-hidden="true" className="size-3.5 text-ink/30" /> : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export function IndustryHero({
  breadcrumb,
  eyebrow,
  title,
  body,
  secondary,
  rotating,
  principles,
  visual,
  context,
}: {
  breadcrumb: Crumb[]
  eyebrow: string
  title: string
  body: string
  secondary: { label: string; href: string }
  rotating: React.ReactNode
  principles: { title: string; body: string }[]
  visual: React.ReactNode
  context?: string
}) {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden border-b border-line bg-paper">
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
      />
      <div className="container-site relative grid grid-cols-1 items-center gap-14 pb-16 pt-10 md:pt-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] lg:gap-12 lg:pb-20 xl:gap-16">
        <div className="flex min-w-0 flex-col gap-7">
          <div className="flex flex-wrap items-center gap-3">
            <Breadcrumb items={breadcrumb} />
            {context ? (
              <span className="hidden rounded-full border border-line bg-background px-2.5 py-0.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground xl:inline-flex">
                {context}
              </span>
            ) : null}
          </div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 id="hero-heading" className="text-ihero text-balance font-medium text-ink">
            {title}
          </h1>
          <p className="text-lede max-w-xl text-pretty text-muted-foreground">{body}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={SITE.bookHref} size="lg">
              {SITE.bookLabel}
            </ButtonLink>
            <ButtonLink href={secondary.href} variant="secondary" size="lg">
              {secondary.label}
            </ButtonLink>
          </div>
          <div className="pt-2">{rotating}</div>
        </div>
        <div className="min-w-0">{visual}</div>
      </div>
      <div className="container-site relative pb-16 lg:pb-20">
        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
          {principles.map((p) => (
            <li key={p.title} className="flex flex-col gap-2 bg-background p-6 lg:p-7">
              <p className="flex items-center gap-2.5 text-[17px] font-medium text-ink">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
                {p.title}
              </p>
              <p className="text-[15.5px] leading-relaxed text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function TagList({
  items,
  dark,
  className,
  highlight,
}: {
  items: string[]
  dark?: boolean
  className?: string
  highlight?: string[]
}) {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {items.map((item) => {
        const hot = highlight?.includes(item)
        return (
          <li
            key={item}
            className={cn(
              'rounded-md border px-3 py-1.5 text-[14.5px]',
              hot
                ? 'border-signal bg-signal text-ink'
                : dark
                  ? 'border-background/15 bg-background/[0.04] text-background/85'
                  : 'border-line bg-background text-ink/85',
            )}
          >
            {item}
          </li>
        )
      })}
    </ul>
  )
}

export function CheckList({
  items,
  dark,
  className,
  columns = 1,
}: {
  items: string[]
  dark?: boolean
  className?: string
  columns?: 1 | 2 | 3
}) {
  return (
    <ul
      className={cn(
        'grid grid-cols-1 gap-x-8',
        columns === 2 && 'sm:grid-cols-2',
        columns === 3 && 'sm:grid-cols-2 lg:grid-cols-3',
        className,
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            'flex items-start gap-3 border-b py-3 text-[16px] leading-snug',
            dark ? 'border-background/10 text-background/85' : 'border-ink/10 text-ink/85',
          )}
        >
          <span
            aria-hidden="true"
            className={cn('mt-2 h-px w-3 shrink-0', dark ? 'bg-signal' : 'bg-brand')}
          />
          {item}
        </li>
      ))}
    </ul>
  )
}

export function Panel({
  label,
  dark,
  className,
  children,
}: {
  label?: string
  dark?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5 rounded-xl border p-6 lg:p-8',
        dark ? 'border-background/15 bg-background/[0.03]' : 'border-line bg-background',
        className,
      )}
    >
      {label ? <MonoLabel dark={dark}>{label}</MonoLabel> : null}
      {children}
    </div>
  )
}

export function Contrast({
  left,
  right,
  dark,
}: {
  left: { label: string; items: string[] }
  right: { label: string; items: string[] }
  dark?: boolean
}) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
      <Panel label={left.label} dark={dark}>
        <CheckList items={left.items} dark={dark} />
      </Panel>
      <Panel label={right.label} dark={dark} className={dark ? 'border-signal/40' : 'border-brand/30 bg-paper'}>
        <CheckList items={right.items} dark={dark} />
      </Panel>
    </div>
  )
}

export function OwnershipSplit({
  left,
  right,
  bridge,
  dark,
  note,
}: {
  left: { label: string; caption?: string; items: string[] }
  right: { label: string; caption?: string; items: string[] }
  bridge: string
  dark?: boolean
  note?: string
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 items-stretch gap-3 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-0">
        <div
          className={cn(
            'flex flex-col gap-5 rounded-xl border border-dashed p-6 lg:p-8',
            dark ? 'border-background/25 bg-background/[0.03]' : 'border-ink/20 bg-background',
          )}
        >
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="size-2 rounded-full bg-signal ring-1 ring-brand" />
            <p className={cn('font-mono text-[12px] uppercase tracking-[0.14em]', dark ? 'text-background' : 'text-ink')}>
              {left.label}
            </p>
          </div>
          {left.caption ? (
            <p className={cn('text-[15px] leading-relaxed', dark ? 'text-background/65' : 'text-muted-foreground')}>
              {left.caption}
            </p>
          ) : null}
          <TagList items={left.items} dark={dark} />
        </div>
        <div className="flex items-center justify-center py-1 lg:w-40 lg:flex-col lg:px-2">
          <div className="flex flex-col items-center gap-2 lg:w-full">
            <span
              aria-hidden="true"
              className={cn('relative hidden h-px w-full overflow-hidden lg:block', dark ? 'bg-background/20' : 'bg-ink/15')}
            >
              <span className="animate-flow-x absolute top-1/2 left-0 size-1.5 -translate-y-1/2 rounded-full bg-signal [--flow-distance:150px]" />
            </span>
            <ArrowDown aria-hidden="true" className={cn('size-4 lg:hidden', dark ? 'text-background/50' : 'text-ink/40')} />
            <span className="rounded-full bg-signal px-3 py-1.5 text-center font-mono text-[10.5px] uppercase leading-tight tracking-[0.12em] text-ink">
              {bridge}
            </span>
            <ArrowRight aria-hidden="true" className={cn('hidden size-4 lg:block', dark ? 'text-background/50' : 'text-ink/40')} />
          </div>
        </div>
        <div className={cn('flex flex-col gap-5 rounded-xl p-6 lg:p-8', dark ? 'bg-background text-ink' : 'bg-ink text-background')}>
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className={cn('size-2 rounded-full', dark ? 'bg-brand' : 'bg-background')} />
            <p className="font-mono text-[12px] uppercase tracking-[0.14em]">{right.label}</p>
          </div>
          {right.caption ? (
            <p className={cn('text-[15px] leading-relaxed', dark ? 'text-muted-foreground' : 'text-background/65')}>
              {right.caption}
            </p>
          ) : null}
          <TagList items={right.items} dark={!dark} />
        </div>
      </div>
      {note ? (
        <p className={cn('text-[14.5px]', dark ? 'text-background/55' : 'text-muted-foreground')}>{note}</p>
      ) : null}
    </div>
  )
}

export type Zone = { label: string; items: string[] }

function Connector({ dark = true }: { dark?: boolean }) {
  return (
    <div aria-hidden="true" className="flex items-center justify-center py-2 lg:w-16 lg:py-0">
      <span className={cn('relative block h-10 w-px overflow-hidden lg:h-px lg:w-full', dark ? 'bg-background/25' : 'bg-ink/15')}>
        <span className="animate-flow-y absolute left-1/2 top-0 size-1.5 -translate-x-1/2 rounded-full bg-signal [--flow-distance:40px] lg:hidden" />
        <span className="animate-flow-x absolute top-1/2 left-0 hidden size-1.5 -translate-y-1/2 rounded-full bg-signal [--flow-distance:64px] lg:block" />
      </span>
    </div>
  )
}

function ZoneCard({ zone, core }: { zone: Zone; core?: boolean }) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 rounded-xl border p-5 lg:p-6',
        core ? 'border-signal bg-ink text-background' : 'border-background/15 bg-background/[0.04] text-background',
      )}
    >
      <p className="flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.14em]">
        <span aria-hidden="true" className={cn('size-1.5 rounded-full', core ? 'bg-signal' : 'bg-background/50')} />
        {zone.label}
      </p>
      <ul className={cn('grid gap-1.5', core ? 'grid-cols-2 lg:grid-cols-1' : 'grid-cols-2 lg:grid-cols-1')}>
        {zone.items.map((item) => (
          <li
            key={item}
            className={cn(
              'rounded-md px-2.5 py-1.5 text-[14px]',
              core ? 'bg-background/[0.06] text-background' : 'text-background/80',
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SystemsArchitecture({
  inputs,
  core,
  output,
  caption = 'Example system categories',
}: {
  inputs: Zone[]
  core: Zone
  output: Zone
  caption?: string
}) {
  return (
    <div className="flex flex-col gap-5">
      <MonoLabel dark>{caption}</MonoLabel>
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex flex-col gap-3 lg:flex-1">
          {inputs.map((zone) => (
            <ZoneCard key={zone.label} zone={zone} />
          ))}
        </div>
        <Connector />
        <div className="lg:flex-[1.15]">
          <ZoneCard zone={core} core />
        </div>
        <Connector />
        <div className="lg:flex-1">
          <ZoneCard zone={output} />
        </div>
      </div>
    </div>
  )
}

export function Faq({ id, title, items }: { id: string; title: string; items: { q: string; a: string }[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
  return (
    <Section tone="white" labelledBy={id}>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-4">
          <Eyebrow>Questions</Eyebrow>
          <h2 id={id} className="text-balance text-3xl font-medium tracking-tight text-ink md:text-4xl">
            {title}
          </h2>
        </div>
        <div className="flex flex-col border-t border-line lg:col-span-8">
          {items.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-5 text-[17px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus
                  aria-hidden="true"
                  className="size-4 shrink-0 text-ink/50 transition-transform duration-200 group-open:rotate-45"
                />
              </summary>
              <p className="max-w-3xl pb-6 text-[16px] leading-relaxed text-pretty text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Section>
  )
}

export function StartReview({
  id,
  title,
  lead,
  items,
  outcomes,
}: {
  id: string
  title: string
  lead: string
  items: string[]
  outcomes: string[]
}) {
  return (
    <Section tone="paper" labelledBy={id}>
      <SectionIntro id={id} eyebrow="Revenue Activation Review" title={title} layout="split">
        <p>{lead}</p>
      </SectionIntro>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-6">
        <Panel label="What we review">
          <CheckList items={items} columns={2} />
        </Panel>
        <Panel label="Then we determine" className="border-brand/30 bg-cream">
          <ol className="flex flex-col gap-3">
            {outcomes.map((o, i) => (
              <li key={o} className="flex items-start gap-3 text-[16.5px] leading-snug text-ink">
                <span className="mt-0.5 font-mono text-[11px] tracking-[0.12em] text-brand">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {o}
              </li>
            ))}
          </ol>
          <ButtonLink href={SITE.bookHref} className="mt-2 self-start">
            {SITE.bookLabel}
          </ButtonLink>
        </Panel>
      </div>
    </Section>
  )
}

export function IndustryFinalCta({ title, body }: { title: string; body: string }) {
  return (
    <section aria-labelledby="final-cta-heading" className="on-dark relative overflow-hidden bg-ink text-background">
      <div aria-hidden="true" className="bg-grid-dark absolute inset-0" />
      <div className="container-site relative flex flex-col items-start gap-10 py-24 lg:py-36">
        <Eyebrow tone="dark">Revenue Activation Review</Eyebrow>
        <SectionHeading className="max-w-5xl text-background">
          <span id="final-cta-heading">{title}</span>
        </SectionHeading>
        <p className="max-w-2xl text-lede text-pretty text-background/75">{body}</p>
        <ButtonLink href={SITE.bookHref} variant="signal" size="lg">
          {SITE.bookLabel}
        </ButtonLink>
      </div>
    </section>
  )
}

export function RelatedLinks({ links }: { links: { label: string; href: string; body: string }[] }) {
  return (
    <nav aria-label="Related pages" className="border-t border-line bg-background">
      <ul className="container-site grid grid-cols-1 gap-px py-12 sm:grid-cols-2 lg:grid-cols-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group flex h-full flex-col gap-2 rounded-lg p-4 transition-colors hover:bg-paper"
            >
              <span className="flex items-center gap-2 text-[16px] font-medium text-ink">
                {link.label}
                <ArrowRight
                  aria-hidden="true"
                  className="size-3.5 transition-transform duration-200 group-hover:translate-x-1"
                />
              </span>
              <span className="text-[14.5px] leading-relaxed text-muted-foreground">{link.body}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
