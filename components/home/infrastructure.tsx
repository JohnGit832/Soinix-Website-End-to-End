import { Eyebrow, SectionHeading } from '@/components/site/primitives'

const TIERS = [
  {
    label: 'Your Systems',
    items: ['CRM', 'AMS', 'Databases', 'Forms', 'Calendar', 'Email', 'Data Sources'],
    tone: 'outline',
  },
  {
    label: 'Revenue Activation Layer',
    items: ['Research', 'Campaigns', 'Follow-Up', 'Qualification', 'Routing', 'Attribution'],
    tone: 'signal',
  },
  {
    label: 'Your Team',
    items: ['Qualified Revenue Conversations', 'Human Relationship', 'Professional Expertise', 'Revenue Outcome'],
    tone: 'outline',
  },
] as const

const POINTS = [
  { title: 'No forced rip-and-replace.', body: 'We work with the stack you already run.' },
  { title: 'Clear ownership.', body: 'Everyone knows who owns each part of the system.' },
  { title: 'Minimum necessary access.', body: 'We only request the access the work requires.' },
  { title: 'Transparent attribution.', body: 'You can see what is creating conversations.' },
]

export function Infrastructure() {
  return (
    <section aria-labelledby="infrastructure-heading" className="on-dark bg-brand text-primary-foreground">
      <div className="container-site grid grid-cols-1 gap-16 py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20 lg:py-36">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-8">
            <Eyebrow tone="dark">Built Around Your Business</Eyebrow>
            <SectionHeading className="text-primary-foreground">
              <span id="infrastructure-heading">Revenue Activation Should Fit Into The Systems You Already Use.</span>
            </SectionHeading>
          </div>
          <div className="flex max-w-xl flex-col gap-4 text-lede text-pretty text-primary-foreground/80">
            <p>We build around the technology, data, processes, and teams already inside the business.</p>
            <p>
              Where needed, we connect the pieces through APIs, automation, data workflows, and custom
              infrastructure.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-6 border-t border-primary-foreground/15 pt-8 sm:grid-cols-2">
            {POINTS.map((point) => (
              <li key={point.title} className="flex flex-col gap-1.5">
                <p className="flex items-center gap-2 text-[16px] font-medium text-primary-foreground">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-signal" />
                  {point.title}
                </p>
                <p className="pl-3.5 text-[14.5px] leading-relaxed text-primary-foreground/70">{point.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col" role="list" aria-label="Revenue Activation architecture">
          {TIERS.map((tier, i) => (
            <div key={tier.label} role="listitem" className="flex flex-col">
              <div
                className={
                  tier.tone === 'signal'
                    ? 'flex flex-col gap-4 rounded-2xl bg-ink p-6 md:p-7'
                    : 'flex flex-col gap-4 rounded-2xl border border-primary-foreground/20 p-6 md:p-7'
                }
              >
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-primary-foreground/70">
                  {tier.tone === 'signal' ? (
                    <span aria-hidden="true" className="size-1.5 animate-signal-pulse rounded-full bg-signal" />
                  ) : null}
                  <span className={tier.tone === 'signal' ? 'text-signal' : undefined}>{tier.label}</span>
                </p>
                <ul className="flex flex-wrap gap-2">
                  {tier.items.map((item) => (
                    <li
                      key={item}
                      className={
                        tier.tone === 'signal'
                          ? 'rounded-md border border-signal/30 px-3 py-1.5 text-[14px] text-background'
                          : 'rounded-md bg-primary-foreground/10 px-3 py-1.5 text-[14px] text-primary-foreground'
                      }
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {i < TIERS.length - 1 ? (
                <div aria-hidden="true" className="relative mx-auto h-12 w-px bg-primary-foreground/25">
                  <span
                    className="absolute -left-[3px] top-0 size-[7px] animate-flow-y rounded-full bg-signal"
                    style={{ ['--flow-distance' as string]: '40px', animationDelay: `${i * 0.9}s` }}
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
