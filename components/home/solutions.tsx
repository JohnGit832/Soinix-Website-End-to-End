import Link from 'next/link'
import { ArrowRight, Crosshair, Handshake, MapPinned, Radar, RotateCcw, Share2, type LucideIcon } from 'lucide-react'
import { Eyebrow, SectionHeading } from '@/components/site/primitives'
import { cn } from '@/lib/utils'

type Solution = { title: string; body: string; href: string; icon: LucideIcon }

const NEW_DEMAND: Solution[] = [
  {
    title: 'Target Account Acquisition',
    body: 'Identify the organizations and people worth winning, then build the campaign and follow-up that starts real conversations.',
    href: '/solutions/target-account-acquisition',
    icon: Crosshair,
  },
  {
    title: 'Strategic Referral Partner Acquisition',
    body: 'Build relationships with the professionals who can introduce strong-fit opportunities again and again.',
    href: '/solutions/strategic-referral-partner-acquisition',
    icon: Handshake,
  },
  {
    title: 'Market and Niche Expansion',
    body: 'Enter new segments, niches, and geographies with research, positioning, and campaigns built for each one.',
    href: '/solutions/market-and-niche-expansion',
    icon: MapPinned,
  },
  {
    title: 'Signal-Based Acquisition',
    body: 'Use timing, business events, and market signals to reach the right people when a conversation is most relevant.',
    href: '/solutions/signal-based-acquisition',
    icon: Radar,
  },
]

const EXISTING: Solution[] = [
  {
    title: 'Dormant Opportunity Reactivation',
    body: 'Reopen the stalled prospects, old conversations, and forgotten opportunities already sitting in your systems.',
    href: '/solutions/dormant-opportunity-reactivation',
    icon: RotateCcw,
  },
  {
    title: 'Relationship Expansion and Referral Activation',
    body: 'Find the next opportunity inside existing relationships and turn trust into a consistent source of introductions.',
    href: '/solutions/relationship-expansion-and-referral-activation',
    icon: Share2,
  },
]

export function Solutions() {
  return (
    <section aria-labelledby="solutions-heading" className="bg-paper">
      <div className="container-site flex flex-col gap-16 py-24 lg:py-36">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div className="flex flex-col gap-8">
            <Eyebrow>What We Build</Eyebrow>
            <SectionHeading className="text-ink">
              <span id="solutions-heading">Different Revenue Opportunities Need Different Plays.</span>
            </SectionHeading>
          </div>
          <div className="flex flex-col gap-4 text-lede text-pretty text-muted-foreground">
            <p className="text-ink">We do not force every company into the same campaign.</p>
            <p>
              We identify the opportunity first, then build the strategy, infrastructure, messaging,
              follow-up, qualification, and measurement around it.
            </p>
          </div>
        </div>

        <SolutionGroup label="New Demand" items={NEW_DEMAND} columns="lg:grid-cols-4" />
        <SolutionGroup label="Existing Relationships" items={EXISTING} columns="lg:grid-cols-2" wide />
      </div>
    </section>
  )
}

function SolutionGroup({
  label,
  items,
  columns,
  wide = false,
}: {
  label: string
  items: Solution[]
  columns: string
  wide?: boolean
}) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="flex items-center gap-3 font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink">
        {label}
        <span aria-hidden="true" className="h-px flex-1 bg-ink/12" />
      </h3>
      <ul className={cn('grid grid-cols-1 gap-4 md:grid-cols-2', columns)}>
        {items.map((item) => (
          <li key={item.href}>
            <SolutionCard item={item} wide={wide} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function SolutionCard({ item, wide }: { item: Solution; wide: boolean }) {
  const Icon = item.icon
  return (
    <Link
      href={item.href}
      className={cn(
        'group flex h-full flex-col justify-between gap-10 rounded-2xl border border-line bg-background p-6 transition-all duration-300 ease-[var(--ease-system)] hover:-translate-y-1 hover:border-brand/45 hover:shadow-[0_24px_48px_-32px_rgb(0_98_88_/_0.45)] md:p-7',
        wide && 'md:flex-row md:items-end',
      )}
    >
      <div className={cn('flex flex-col gap-8', wide && 'md:flex-row md:items-start md:gap-8')}>
        <div
          aria-hidden="true"
          className="bg-grid relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-paper transition-colors duration-300 group-hover:border-brand group-hover:bg-brand"
        >
          <Icon className="size-6 text-brand transition-colors duration-300 group-hover:text-signal" strokeWidth={1.5} />
          <span className="absolute right-2 top-2 size-1.5 rounded-full bg-ink/15 transition-colors duration-300 group-hover:bg-signal" />
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-balance text-[21px] font-medium leading-tight tracking-tight text-ink">{item.title}</h4>
          <p className="text-pretty text-[15px] leading-relaxed text-muted-foreground">{item.body}</p>
        </div>
      </div>
      <span className="flex shrink-0 items-center gap-2 text-[14px] font-medium text-brand">
        Explore
        <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
