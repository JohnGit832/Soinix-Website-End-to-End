import { Fragment } from 'react'
import { cn } from '@/lib/utils'
import { LIQUIDITY_MAP_HREF, LIQUIDITY_MAP_LABEL } from '@/components/intel/data'
import { IntelButton, IntelEyebrow, TechLabel } from '@/components/intel/primitives'
import { HeroIntelligence } from '@/components/intel/hero-intelligence'
import { CapitalEventTimeline } from '@/components/intel/capital-event-timeline'
import { OpportunityGraph } from '@/components/intel/opportunity-graph'
import { RegionalSignalMatrix } from '@/components/intel/regional-signal-matrix'
import { ZeroFootprintArchitecture } from '@/components/intel/zero-footprint-architecture'
import { InfrastructureComparison } from '@/components/intel/infrastructure-comparison'

type Tone = 'cream' | 'white' | 'teal' | 'deep'

const TONE_CLASS: Record<Tone, string> = {
  cream: 'surface-cream',
  white: 'surface-white',
  teal: 'surface-teal',
  deep: 'surface-deep',
}

const SYSTEM_PATH = [
  'Market Intelligence',
  'Opportunity Strategy',
  'Relationship Activation',
  'Qualification',
  'Advisor Conversation',
] as const

export function HomeHero() {
  return (
    <section aria-labelledby="hero-heading" className="surface-cream relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-brand [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
      />
      <div className="container-site relative flex flex-col gap-16 pb-16 pt-16 md:pt-24 lg:gap-20 lg:pb-20 lg:pt-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="flex flex-col gap-8 lg:col-span-7">
            <IntelEyebrow>Organic Asset Growth Infrastructure</IntelEyebrow>
            <h1 id="hero-heading" className="text-display-xl text-balance font-medium text-background">
              See Capital Before It Moves.
            </h1>
          </div>
          <div className="flex flex-col gap-8 lg:col-span-5">
            <p className="text-lede text-pretty text-background/70">
              We build and operate the asset-growth infrastructure that connects elite market opportunity to
              qualified advisor conversations. By pairing advanced market intelligence with systematic
              relationship activation, we give established independent wealth practices a permanent command
              over their regional pipeline, without adding operational headcount.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <IntelButton href={LIQUIDITY_MAP_HREF}>{LIQUIDITY_MAP_LABEL}</IntelButton>
              <IntelButton href="#capabilities" variant="ghost">
                Explore the Infrastructure
              </IntelButton>
            </div>
          </div>
        </div>

        <nav aria-label="Growth system">
          <ol className="grid grid-cols-1 border-y border-background/15 sm:grid-cols-5">
            {SYSTEM_PATH.map((step, i) => (
              <li
                key={step}
                className={cn(
                  'flex items-center justify-between gap-3 py-4 sm:flex-col sm:items-start sm:justify-start sm:gap-6 sm:py-5 sm:pr-4',
                  i > 0 && 'border-t border-background/15 sm:border-l sm:border-t-0 sm:pl-4',
                )}
              >
                <span className="font-mono text-[11px] tabular-nums text-background/45">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.14em] text-background">
                  {i === SYSTEM_PATH.length - 1 ? (
                    <span aria-hidden="true" className="size-1.5 bg-signal ring-1 ring-background/30" />
                  ) : null}
                  {step}
                  {i < SYSTEM_PATH.length - 1 ? (
                    <span aria-hidden="true" className="text-background/40">
                      {'→'}
                    </span>
                  ) : null}
                </span>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  )
}

type Capability = {
  number: string
  id: string
  eyebrow: string
  title: string
  message: string
  framing: React.ReactNode
  scope: string[]
  tone: Tone
  visual?: React.ReactNode
  note?: string
}

function CapabilitySection({ capability }: { capability: Capability }) {
  const { number, id, eyebrow, title, message, framing, scope, tone, visual, note } = capability
  const headingId = `${id}-heading`
  return (
    <section id={id} aria-labelledby={headingId} className={cn('scroll-mt-20 py-20 md:py-28', TONE_CLASS[tone])}>
      <div className="container-site flex flex-col gap-12 lg:gap-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <p className="flex items-baseline gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-background/55">
              <span className="text-[13px] tabular-nums text-background">{number}</span>
              <span aria-hidden="true" className="h-px w-8 translate-y-[-3px] bg-background/30" />
              {eyebrow}
            </p>
            <h2 id={headingId} className="text-display text-balance font-medium text-background">
              {title}
            </h2>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-7 lg:pt-10">
            <p className="text-balance text-[21px] font-medium leading-snug tracking-tight text-background md:text-[24px]">
              {message}
            </p>
            <div className="flex flex-col gap-4 text-pretty text-[16px] leading-relaxed text-background/65">
              {framing}
            </div>
            <div className="flex flex-col gap-3 border-t border-background/15 pt-5">
              <TechLabel>Scope Realized</TechLabel>
              <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
                {scope.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[14.5px] text-background/85">
                    <span aria-hidden="true" className="size-1.5 shrink-0 bg-signal ring-1 ring-background/25" />
                    {item}
                  </li>
                ))}
              </ul>
              {note ? <p className="text-[13.5px] leading-relaxed text-background/50">{note}</p> : null}
            </div>
          </div>
        </div>
        {visual}
      </div>
    </section>
  )
}

const CAPABILITIES_BEFORE_INTEL: Capability[] = [
  {
    number: '01',
    id: 'capabilities',
    eyebrow: 'Market Mapping',
    title: 'We Map the Market.',
    message: 'Growth begins with absolute market visibility, not blind prospecting.',
    framing: (
      <p>
        We build comprehensive market models to isolate your highest-value client segments, the professional
        ecosystems around them, and the geographic whitespace your competitors have left open.
      </p>
    ),
    scope: [
      'Ideal-Client Modeling',
      'Addressable Market Segmentation',
      'Target-Account Isolation',
      'Geographic Concentration Matrix',
    ],
    tone: 'white',
    visual: <RegionalSignalMatrix />,
  },
  {
    number: '02',
    id: 'prioritization',
    eyebrow: 'Opportunity Prioritization',
    title: 'We Prioritize the Right Opportunities.',
    message: 'Data is a liability unless it is filtered through timing and firm alignment.',
    framing: (
      <p>
        We synthesize market positioning, active timing signals and your firm&apos;s specific advisor capacity
        to determine exactly where your attention belongs.
      </p>
    ),
    scope: [
      'Capital Event Identification',
      'Corporate Executive Tenure Matrix',
      'Business-Owner Transitions',
      'Imminent Retirement Windows',
    ],
    note: 'This is a timing layer inside the infrastructure, not a standalone tool.',
    tone: 'teal',
    visual: <CapitalEventTimeline />,
  },
  {
    number: '03',
    id: 'growth-play',
    eyebrow: 'Growth Strategy',
    title: 'We Design the Growth Play.',
    message: 'Unprocessed data is not an asset.',
    framing: (
      <p>
        We engineer the strategic link between your ideal target profile, regional market nuances and your
        firm&apos;s positioning. Before a single interaction occurs, the relationship path and messaging
        architecture are fully defined.
      </p>
    ),
    scope: ['Message Architecture', 'Segment Positioning', 'Relationship Path Engineering'],
    tone: 'cream',
    visual: <OpportunityGraph />,
  },
]

const CAPABILITIES_AFTER_INTEL: Capability[] = [
  {
    number: '04',
    id: 'new-demand',
    eyebrow: 'New Demand',
    title: 'We Create New Demand.',
    message: 'We do not provide software for your team to manage. We deliver active outcomes.',
    framing: (
      <p>
        We turn prioritized market intelligence into coordinated relationship activation. We run the
        end-to-end framework required to capture high-value institutional and executive allocations before
        they default to national consolidators.
      </p>
    ),
    scope: ['Client Acquisition Protocols', 'Pipeline Activation', 'Sovereign Brand Protection'],
    tone: 'white',
    visual: <InfrastructureComparison />,
  },
  {
    number: '05',
    id: 'strategic-relationships',
    eyebrow: 'Centers of Influence',
    title: 'We Develop Strategic Relationships.',
    message: 'We systematize the professional networks surrounding high-net-worth capital.',
    framing: (
      <p>
        We build dedicated relationship infrastructure around the cross-professional networks that sit next to
        major liquidity events, and bring a disciplined approach to engaging the Centers of Influence who
        shape those decisions.
      </p>
    ),
    scope: ['CPA Network Development', 'Estate Planning & M&A Attorney Channels', 'Strategic Advisor Ecosystems'],
    tone: 'teal',
  },
  {
    number: '06',
    id: 'existing-opportunity',
    eyebrow: 'Retained Pipeline',
    title: 'We Expand Existing Opportunity.',
    message: 'We eliminate capital leakage within your existing firm history.',
    framing: (
      <p>
        New demand remains our primary objective, but our infrastructure also recaptures unworked value inside
        your historical relationships. Dormant threads are revived, so institutional memory converts into
        active conversations.
      </p>
    ),
    scope: ['Dormant Pipeline Recovery', 'First-Party Relationship Optimization', 'Historical Prospect Reactivation'],
    tone: 'cream',
  },
  {
    number: '07',
    id: 'qualify-and-transfer',
    eyebrow: 'The Zero-Footprint Protocol',
    title: 'We Qualify and Transfer.',
    message: "We protect your advisors' calendars for high-value client interaction only.",
    framing: (
      <p>
        Our systems manage early-stage market engagement completely outside your firm&apos;s day-to-day
        workflow. We handle response tracking, qualification and context capture, and route an opportunity
        to an advisor only when human expertise is required.
      </p>
    ),
    scope: ['Response Triage Architecture', 'Institutional Compliance Preservation', 'Secure Advisor Handoff'],
    tone: 'deep',
    visual: <ZeroFootprintArchitecture />,
  },
]

function CapabilityList({ items }: { items: Capability[] }) {
  return (
    <>
      {items.map((capability) => (
        <Fragment key={capability.id}>
          <CapabilitySection capability={capability} />
        </Fragment>
      ))}
    </>
  )
}

export function CapabilitiesFoundation() {
  return <CapabilityList items={CAPABILITIES_BEFORE_INTEL} />
}

export function CapabilitiesActivation() {
  return <CapabilityList items={CAPABILITIES_AFTER_INTEL} />
}

export function CapitalSignalIntelligence() {
  return (
    <section
      id="signal-intelligence"
      aria-labelledby="signal-heading"
      className="surface-deep relative scroll-mt-20 overflow-hidden py-20 md:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-fine" />
      <div className="container-site relative flex flex-col gap-12 lg:gap-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-6 lg:col-span-6">
            <IntelEyebrow>Intelligence Layer</IntelEyebrow>
            <h2 id="signal-heading" className="text-display text-balance font-medium text-background">
              Capital Signal Intelligence Layer
            </h2>
          </div>
          <p className="text-pretty text-[16.5px] leading-relaxed text-background/65 lg:col-span-6 lg:pt-10">
            Signals do not replace strategy. They dictate timing. We integrate advanced tracking models across
            your target geographies to isolate equity vesting cliffs, concentrated stock anomalies and corporate
            executive transitions. This intelligence is the directional engine for our broader relationship
            activation framework.
          </p>
        </div>
        <div className="surface-teal on-dark rounded-[4px] border border-background/12 shadow-[0_40px_80px_-48px_rgb(0_0_0_/_0.6)]">
          <HeroIntelligence />
        </div>
      </div>
    </section>
  )
}

export function MapYourMarket() {
  return (
    <section aria-labelledby="map-heading" className="surface-teal on-dark relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-fine" />
      <div className="container-site relative flex flex-col gap-10 py-24 md:py-32 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex max-w-3xl flex-col gap-6">
          <IntelEyebrow>Map Your Market</IntelEyebrow>
          <h2 id="map-heading" className="text-display-xl text-balance font-medium text-background">
            See Where the Next Generation of Assets Is Forming.
          </h2>
          <p className="text-lede max-w-2xl text-pretty text-background/65">
            We will map the high-value wealth signals, client segments and capital-event density across the
            market your firm wants to grow.
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:items-end">
          <IntelButton href={LIQUIDITY_MAP_HREF}>{LIQUIDITY_MAP_LABEL}</IntelButton>
          <TechLabel>For established independent advisory and wealth management firms.</TechLabel>
        </div>
      </div>
    </section>
  )
}
