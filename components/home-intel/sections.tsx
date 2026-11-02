import { cn } from '@/lib/utils'
import { LIQUIDITY_MAP_HREF, LIQUIDITY_MAP_LABEL } from '@/components/intel/data'
import { IntelButton, IntelEyebrow, SectionIntro, TechLabel } from '@/components/intel/primitives'
import { HeroIntelligence } from '@/components/intel/hero-intelligence'
import { CapitalEventTimeline } from '@/components/intel/capital-event-timeline'
import { OpportunityGraph } from '@/components/intel/opportunity-graph'
import { RegionalSignalMatrix } from '@/components/intel/regional-signal-matrix'
import { ZeroFootprintArchitecture } from '@/components/intel/zero-footprint-architecture'
import { OperatingPipeline } from '@/components/intel/operating-pipeline'
import { IndependentAdvantage } from '@/components/intel/independent-advantage'
import { IdealClientSignalMatrix } from '@/components/intel/ideal-client-signal-matrix'
import { InfrastructureComparison } from '@/components/intel/infrastructure-comparison'

type Tone = 'cream' | 'white' | 'teal' | 'deep'

const TONE_CLASS: Record<Tone, string> = {
  cream: 'surface-cream',
  white: 'surface-white',
  teal: 'surface-teal',
  deep: 'surface-deep',
}

function Section({
  id,
  labelledBy,
  tone,
  children,
  className,
}: {
  id?: string
  labelledBy: string
  tone: Tone
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('scroll-mt-20 py-20 md:py-28 lg:py-32', TONE_CLASS[tone], className)}
    >
      <div className="container-site flex flex-col gap-12 lg:gap-16">{children}</div>
    </section>
  )
}

export function HomeHero() {
  return (
    <section aria-labelledby="hero-heading" className="surface-cream relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-brand [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="container-site relative grid grid-cols-1 gap-14 pb-20 pt-14 md:pt-20 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-24">
        <div className="flex flex-col gap-8 lg:col-span-5 lg:pt-6">
          <IntelEyebrow>Organic Asset Growth Infrastructure</IntelEyebrow>
          <h1 id="hero-heading" className="text-display-xl text-balance font-medium text-background">
            See Capital Before It Moves.
          </h1>
          <p className="text-lede max-w-xl text-pretty text-background/65">
            Soinix builds and deploys market-intelligence infrastructure for established independent
            wealth firms, identifying high-value wealth events across their markets and turning them into
            qualified advisor conversations before the opportunity becomes obvious.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <IntelButton href={LIQUIDITY_MAP_HREF}>{LIQUIDITY_MAP_LABEL}</IntelButton>
            <IntelButton href="#infrastructure" variant="ghost">
              Explore the Infrastructure
            </IntelButton>
          </div>
          <p className="border-t border-background/15 pt-5 text-[13.5px] leading-relaxed text-background/60">
            Built for established independent RIAs, wealth managers and multi-advisor firms.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="surface-teal on-dark rounded-[4px] shadow-[0_40px_80px_-48px_rgb(0_74_66_/_0.55)]">
            <HeroIntelligence />
          </div>
        </div>
      </div>
    </section>
  )
}

export function TimingGap() {
  return (
    <Section labelledBy="timing-heading" tone="white">
      <SectionIntro eyebrow="The Timing Gap" title="Independent Firms Are Losing the Timing War." titleId="timing-heading" align="split">
        <p>
          The most valuable wealth relationships rarely begin when someone searches for a financial advisor.
        </p>
        <p>
          They begin months earlier, when equity is vesting, a company is being sold, an executive is
          approaching a transition, a founder is preparing for liquidity, or concentrated capital is about to
          require a decision.
        </p>
        <p className="text-background/85">
          By the time those assets become visible to the broader market, the relationship is already being
          contested.
        </p>
      </SectionIntro>
      <CapitalEventTimeline />
    </Section>
  )
}

export function MarketIntelligence() {
  return (
    <Section id="intelligence" labelledBy="intel-heading" tone="teal">
      <SectionIntro eyebrow="Market Intelligence" title="Map the Events That Precede Asset Movement." titleId="intel-heading" align="split">
        <p>
          Soinix continuously maps observable economic, corporate and professional signals across a
          firm&apos;s target market to identify where consequential wealth decisions may be forming.
        </p>
      </SectionIntro>
      <OpportunityGraph />
    </Section>
  )
}

export function RegionalIntelligence() {
  return (
    <Section labelledBy="regional-heading" tone="cream">
      <SectionIntro eyebrow="Regional Intelligence" title="Know Where Wealth Is Forming Across Your Market." titleId="regional-heading" align="split">
        <p>
          Instead of treating an entire geography as one prospecting pool, Soinix maps concentrations of
          emerging wealth events across the markets and client segments a firm actually wants to own.
        </p>
      </SectionIntro>
      <RegionalSignalMatrix />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-pretty text-[14.5px] leading-relaxed text-background/55">
          This is the deliverable behind a Regional Liquidity Map, configured to your geography and
          target segments.
        </p>
        <IntelButton href={LIQUIDITY_MAP_HREF}>Request Your Regional Liquidity Map</IntelButton>
      </div>
    </Section>
  )
}

export function ZeroFootprint() {
  return (
    <Section id="infrastructure" labelledBy="footprint-heading" tone="deep">
      <SectionIntro
        eyebrow="Zero-Footprint Deployment"
        title="Institutional Infrastructure Without Another Internal Department."
        titleId="footprint-heading"
        align="split"
      >
        <p>Soinix operates outside your advisors&apos; day-to-day workflow.</p>
        <p>
          We build and manage the intelligence, market mapping, activation and qualification
          infrastructure behind the scenes. Your team does not inherit another software platform,
          prospecting workflow or operational burden.
        </p>
        <p className="text-background/85">
          Advisors enter when a qualified relationship is ready for an advisor-level conversation.
        </p>
      </SectionIntro>
      <ZeroFootprintArchitecture />
    </Section>
  )
}

export function OperatingModel() {
  return (
    <Section labelledBy="operating-heading" tone="white">
      <SectionIntro eyebrow="Operating Model" title="From Market Signal to Advisor Conversation." titleId="operating-heading" align="split">
        <p>The infrastructure operates continuously. Advisor time is introduced selectively.</p>
      </SectionIntro>
      <OperatingPipeline />
    </Section>
  )
}

export function IndependentsWin() {
  return (
    <Section labelledBy="independents-heading" tone="teal">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <IntelEyebrow>The Independent Position</IntelEyebrow>
          <h2 id="independents-heading" className="text-display text-balance font-medium text-background">
            The Independents That Win Will Not Outspend the Aggregators.{' '}
            <span className="text-background/45">They Will See Their Markets More Clearly.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4 text-pretty text-[16.5px] leading-relaxed text-background/65 lg:col-span-5 lg:pt-10">
          <p>
            Independent firms already possess what national platforms struggle to manufacture: local
            reputation, specialized expertise, trust, relationships and client experience.
          </p>
          <p>
            The infrastructure gap is market visibility and repeatable distribution. Soinix closes that gap
            without asking the firm to become a national aggregator itself.
          </p>
        </div>
      </div>
      <IndependentAdvantage />
    </Section>
  )
}

export function IdealClients() {
  return (
    <Section id="who-we-work-with" labelledBy="clients-heading" tone="cream">
      <SectionIntro eyebrow="Who We Work With" title="Build Around the Clients You Actually Want." titleId="clients-heading" align="split">
        <p>
          This is not mass prospecting. The intelligence layer is configured around the firm&apos;s actual
          client strategy, geography, expertise and advisor capacity.
        </p>
        <p className="text-background/85">Precision is part of the design. Not every market is a fit.</p>
      </SectionIntro>
      <IdealClientSignalMatrix />
    </Section>
  )
}

export function CompoundingIntelligence() {
  return (
    <Section labelledBy="compound-heading" tone="white">
      <SectionIntro
        eyebrow="Compounding Intelligence"
        title="Built to Compound Market Intelligence, Not Generate More Activity."
        titleId="compound-heading"
        align="split"
      >
        <p className="text-background/85">
          Every signal, conversation and market response improves the intelligence surrounding the
          firm&apos;s target market.
        </p>
      </SectionIntro>
      <InfrastructureComparison />
    </Section>
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
