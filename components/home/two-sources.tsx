import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Eyebrow, SectionHeading } from '@/components/site/primitives'
import { cn } from '@/lib/utils'

const PANELS = [
  {
    index: '01',
    title: 'New Demand',
    body: 'Create new revenue opportunities across the markets, accounts, prospects, and strategic relationships you want to win next.',
    examples: [
      'Target Accounts',
      'New Prospects',
      'Strategic Referral Partners',
      'New Markets',
      'Business Signals',
      'Niche Expansion',
    ],
    cta: 'Explore New Demand',
    href: '/solutions/new-demand',
    tone: 'light',
  },
  {
    index: '02',
    title: 'Existing Relationships',
    body: 'Turn more of the relationships, conversations, data, and demand already around your business into active revenue opportunities.',
    examples: [
      'Dormant Opportunities',
      'Past Prospects',
      'Existing Clients',
      'Old Conversations',
      'Referrals',
      'Relationship Expansion',
    ],
    cta: 'Explore Existing Relationships',
    href: '/solutions/existing-relationships',
    tone: 'paper',
  },
] as const

export function TwoSources() {
  return (
    <section aria-labelledby="sources-heading" className="border-t border-line">
      <div className="container-site flex flex-col gap-14 py-24 lg:gap-20 lg:py-36">
        <div className="flex max-w-4xl flex-col gap-8">
          <Eyebrow>Where Growth Comes From</Eyebrow>
          <SectionHeading className="text-ink">
            <span id="sources-heading">
              Build New Demand. <span className="text-brand">Activate The Relationships You Already Have.</span>
            </span>
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {PANELS.map((panel) => (
            <Link
              key={panel.title}
              href={panel.href}
              className={cn(
                'group relative flex flex-col gap-12 overflow-hidden rounded-2xl border border-line p-7 transition-colors duration-500 hover:border-brand/50 md:p-10',
                panel.tone === 'paper' ? 'bg-paper' : 'bg-background',
              )}
            >
              <div className="flex items-start justify-between gap-6">
                <span className="font-mono text-[12px] tracking-[0.14em] text-muted-foreground">{panel.index}</span>
                <span className="flex size-11 items-center justify-center rounded-full border border-line bg-background transition-colors duration-300 group-hover:border-brand group-hover:bg-brand">
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 text-ink transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-primary-foreground"
                  />
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-4xl font-medium tracking-tight text-ink md:text-5xl">{panel.title}</h3>
                <p className="max-w-lg text-pretty text-[17px] leading-relaxed text-muted-foreground">{panel.body}</p>
              </div>

              <FlowDiagram examples={panel.examples} />

              <span className="flex items-center gap-2 text-[15px] font-medium text-brand">
                {panel.cta}
                <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function FlowDiagram({ examples }: { examples: readonly string[] }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-0">
      <ul className="grid flex-1 grid-cols-2 gap-2">
        {examples.map((example, i) => (
          <li
            key={example}
            style={{ transitionDelay: `${i * 60}ms` }}
            className="flex min-h-10 items-center gap-2 rounded-md border border-line bg-background px-3 py-2 text-[13.5px] text-ink/80 transition-colors duration-300 group-hover:border-brand/40 group-hover:text-ink"
          >
            <span
              aria-hidden="true"
              style={{ transitionDelay: `${i * 60}ms` }}
              className="size-1.5 shrink-0 rounded-full bg-ink/20 transition-colors duration-300 group-hover:bg-signal group-hover:ring-1 group-hover:ring-brand"
            />
            {example}
          </li>
        ))}
      </ul>
      <div aria-hidden="true" className="relative hidden h-px w-14 bg-ink/15 sm:block">
        <span
          className="absolute -top-[3px] left-0 size-[7px] animate-flow-x rounded-full bg-signal opacity-0 ring-1 ring-brand [animation-play-state:paused] group-hover:[animation-play-state:running]"
          style={{ ['--flow-distance' as string]: '48px' }}
        />
      </div>
      <div className="flex shrink-0 items-center gap-2 self-start rounded-lg bg-ink px-3.5 py-3 font-mono text-[10.5px] uppercase tracking-[0.12em] text-background transition-colors duration-300 group-hover:bg-brand sm:self-auto">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-signal" />
        Activation
      </div>
    </div>
  )
}
