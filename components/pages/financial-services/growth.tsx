import { ArrowDown, ArrowRight } from 'lucide-react'
import { CheckList, Contrast, IndustryHero, Panel, Section, SectionIntro, TagList } from '@/components/industry/kit'
import { FlowSelector } from '@/components/industry/flow-selector'
import { RotatingText } from '@/components/industry/rotating-text'
import { SourceMap } from '@/components/industry/source-map'
import { StageExplorer } from '@/components/industry/stage-explorer'
import { NetworkOrbit } from '@/components/industry/network-orbit'
import { MonoLabel } from '@/components/industry/flow'

export function FsHero() {
  return (
    <IndustryHero
      breadcrumb={[{ label: 'Industries' }, { label: 'Financial Services' }]}
      context="Relationship-led financial firms"
      eyebrow="Financial Services Growth"
      title="Build A More Repeatable Organic Growth Engine Around The Clients You Want To Win."
      body="We build and run the systems behind new client acquisition, strategic referral relationships, and qualified follow-up, helping relationship-led financial firms create more consistent growth without leaving every business development task with the advisor."
      secondary={{ label: 'Explore How It Works', href: '#operating-system' }}
      rotating={
        <RotatingText
          lead="Create growth across"
          phrases={[
            'Ideal Client Markets',
            'New Client Acquisition',
            'Strategic COI Relationships',
            'Professional Referrals',
            'Existing Relationships',
          ]}
        />
      }
      principles={[
        { title: 'Ideal-Client Focus', body: 'Build around the people the firm is best positioned to serve.' },
        { title: 'Dedicated Growth Execution', body: 'Create ownership around the work before the advisor conversation.' },
        {
          title: 'Measured Organic Growth',
          body: 'Understand which markets, relationships, and campaigns are creating real opportunity.',
        },
      ]}
      visual={
        <FlowSelector
          label="Financial growth network"
          panelLabel="Path to a qualified advisor conversation"
          layout="top"
          compactSteps
          options={[
            {
              id: 'market',
              label: 'Ideal Client Market',
              group: 'new',
              steps: ['Ideal Client Market', 'Research', 'Prioritized Opportunity', 'Activation', 'Qualified Interest', 'Advisor Conversation'],
            },
            {
              id: 'coi',
              label: 'COI Relationship',
              group: 'new',
              steps: ['Overlapping Professional', 'Strategic Fit', 'Professional Conversation', 'Familiarity And Trust', 'Relevant Introduction', 'Advisor Conversation'],
            },
            {
              id: 'referral',
              label: 'Professional Referral',
              group: 'new',
              steps: ['Referral Partner', 'Clear Ideal Client', 'Client Situation Appears', 'Introduction', 'Qualified Interest', 'Advisor Conversation'],
            },
            {
              id: 'past',
              label: 'Past Prospect',
              group: 'existing',
              steps: ['Past Prospect', 'Review Context', 'Reason To Reconnect', 'Follow-Up', 'Qualified Interest', 'Advisor Conversation'],
            },
            {
              id: 'existing',
              label: 'Existing Relationship',
              group: 'existing',
              steps: ['Existing Relationship', 'Identify Opportunity', 'Deliberate Outreach', 'Renewed Interest', 'Qualification', 'Advisor Conversation'],
            },
          ]}
        />
      }
    />
  )
}

export function FsOrganicGrowth() {
  return (
    <Section tone="cream" labelledBy="organic-heading">
      <SectionIntro
        id="organic-heading"
        eyebrow="Organic Growth"
        title="Strong Relationships Create Opportunity. They Do Not Automatically Create A Repeatable Growth System."
        layout="split"
      >
        <p>
          Relationship-led financial businesses grow through people who trust them. These channels can be powerful.
          The weakness appears when growth still depends on things no one owns.
        </p>
      </SectionIntro>
      <Contrast
        left={{
          label: 'How growth usually arrives',
          items: [
            'Client Referrals',
            'Advisor Networks',
            'COIs',
            'Professional Introductions',
            'Reputation',
            'Community Presence',
            'Existing Relationships',
          ],
        }}
        right={{
          label: 'Where it breaks down',
          items: [
            'An advisor remembering to follow up',
            'Sporadic referral asks',
            'Individual COI relationships',
            'Manual prospecting',
            'Inconsistent CRM usage',
            'One-off campaigns',
            'Networking without a system behind it',
          ],
        }}
      />
      <p className="max-w-3xl text-2xl font-medium leading-snug tracking-tight text-balance text-ink md:text-3xl">
        This is an execution gap. Not a lack of opportunity.
      </p>
    </Section>
  )
}

export function FsBusinessDevelopmentGap() {
  return (
    <Section tone="white" labelledBy="gap-heading">
      <SectionIntro
        id="gap-heading"
        title="The Firm Can Have A Clear Growth Strategy And Still Lack Ownership Of Growth Execution."
      >
        <p>
          The gap often sits between strategy and the qualified advisor conversation. That middle layer is where
          Revenue Activation sits.
        </p>
      </SectionIntro>
      <div className="grid grid-cols-1 items-stretch gap-3 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.25fr)_auto_minmax(0,0.8fr)] lg:gap-0">
        <Panel label="Leadership may know">
          <CheckList
            items={[
              'Who the ideal client is',
              'Which markets matter',
              'Which services create value',
              'Which advisors have capacity',
              'Which professional relationships are important',
            ]}
          />
        </Panel>
        <GapArrow />
        <div className="flex flex-col gap-5 rounded-xl bg-ink p-6 text-background lg:p-8">
          <div className="flex items-center justify-between gap-3">
            <MonoLabel dark>The middle layer</MonoLabel>
            <span className="rounded-full bg-signal px-2.5 py-0.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink">
              Revenue Activation
            </span>
          </div>
          <TagList
            dark
            items={[
              'Research',
              'Market Mapping',
              'Prospecting',
              'Campaign Execution',
              'Follow-Up',
              'COI Development',
              'Qualification',
              'Routing',
              'Measurement',
            ]}
          />
        </div>
        <GapArrow />
        <Panel label="The outcome" className="justify-between border-brand/30 bg-paper">
          <p className="text-2xl font-medium leading-snug tracking-tight text-ink">Qualified Advisor Conversation</p>
        </Panel>
      </div>
      <div className="flex flex-col gap-6 border-t border-line pt-12">
        <MonoLabel>Organic growth system map</MonoLabel>
        <SourceMap
          sources={['Market', 'Relationships', 'Advisor Capacity', 'Positioning', 'Business Development']}
          center="Organic Growth System"
          centerNote="Growth is produced by multiple coordinated systems."
        />
      </div>
    </Section>
  )
}

function GapArrow() {
  return (
    <span aria-hidden="true" className="flex items-center justify-center py-1 text-ink/30 lg:px-3">
      <ArrowDown className="size-4 lg:hidden" />
      <ArrowRight className="hidden size-4 lg:block" />
    </span>
  )
}

export function FsNewDemand() {
  return (
    <Section tone="white" labelledBy="new-demand-heading" className="pt-0 md:pt-0 lg:pt-0">
      <SectionIntro
        id="new-demand-heading"
        eyebrow="New Demand"
        title="Create More Opportunity Across The Markets And Clients The Firm Wants To Win Next."
        layout="split"
      >
        <p>
          New demand starts with a defined market, not a purchased list. Each market moves through the same operating
          model until the right conversation reaches the right advisor.
        </p>
      </SectionIntro>
      <TagList
        items={[
          'Ideal Client Markets',
          'Professional Niches',
          'Business Owners',
          'Executives',
          'Pre-Retirees',
          'Affluent Families',
          'Strategic Referral Partners',
          'New Geographic Markets',
          'Firm-Defined Client Segments',
        ]}
      />
      <StageExplorer
        label="New demand operating model"
        progressive
        stages={[
          { label: 'Define', body: 'Define the market the firm wants more of.' },
          { label: 'Map', body: 'Map the opportunity across that market.' },
          { label: 'Identify', body: 'Identify the right people inside it.' },
          { label: 'Understand', body: 'Understand the reason to engage.' },
          { label: 'Build', body: 'Build the campaign around that reason.' },
          { label: 'Follow Up', body: 'Keep relevant opportunities moving.' },
          { label: 'Qualify', body: 'Confirm fit, need, timing, and genuine interest.' },
          { label: 'Route', body: 'Route the right conversation to the advisor.' },
        ]}
      />
    </Section>
  )
}

export function FsIdealClient() {
  return (
    <Section tone="paper" labelledBy="ideal-client-heading" grid>
      <SectionIntro
        id="ideal-client-heading"
        eyebrow="Ideal Client Architecture"
        title="Growth Gets Stronger When The Firm Is Clear About Who It Wants More Of."
        layout="split"
      >
        <p>
          Six questions bridge growth strategy to execution. Each answer shapes where we look, what we say, who we
          involve, and which advisor takes the relationship.
        </p>
      </SectionIntro>
      <StageExplorer
        label="Ideal client framework"
        stages={[
          { label: 'Who', body: 'Who does the firm serve exceptionally well?' },
          { label: 'Need', body: 'What problems, transitions, or complexity make the firm relevant?' },
          { label: 'Timing', body: 'When does that need become important?' },
          { label: 'Market', body: 'Where can those clients be reached?' },
          { label: 'Network', body: 'Which trusted professionals already work with them?' },
          { label: 'Capacity', body: 'Which advisors are best positioned to take the relationship?' },
        ]}
      />
    </Section>
  )
}

export function FsCoi() {
  return (
    <Section tone="green" labelledBy="coi-heading">
      <SectionIntro
        id="coi-heading"
        eyebrow="Centers Of Influence"
        title="Build Professional Relationships Around The Clients You Want More Of."
        dark
        layout="split"
      >
        <p>
          The objective is not collecting contacts. It is identifying strong overlap, making the firm&apos;s ideal
          client clear, and becoming a credible resource when the right client situation appears.
        </p>
      </SectionIntro>
      <NetworkOrbit
        center="Your Ideal Client"
        anchor="Advisor"
        prompt="Select a professional to see how a deliberate relationship path forms around a shared client."
        nodes={[
          {
            id: 'cpa',
            label: 'CPAs',
            context: 'Tax planning surfaces income, business, and retirement questions before they reach an advisor.',
            path: ['Identify overlap', 'Professional conversation', 'Clarify ideal client', 'Build familiarity', 'Relevant introduction'],
          },
          {
            id: 'estate',
            label: 'Estate Planning Attorneys',
            context: 'Estate work often reveals families who need coordinated long-term planning.',
            path: ['Identify overlap', 'Professional conversation', 'Clarify ideal client', 'Build familiarity', 'Relevant introduction'],
          },
          {
            id: 'business',
            label: 'Business Attorneys',
            context: 'Business owners rely on counsel through structure changes, growth, and transition.',
            path: ['Identify overlap', 'Professional conversation', 'Clarify where we add value', 'Develop trust', 'Relevant introduction'],
          },
          {
            id: 'private-bank',
            label: 'Private Bankers',
            context: 'Private banking relationships often sit beside complex household balance sheets.',
            path: ['Prioritize strategic fit', 'Professional conversation', 'Clarify ideal client', 'Develop trust', 'Relevant introduction'],
          },
          {
            id: 'commercial-bank',
            label: 'Commercial Bankers',
            context: 'Commercial lending puts bankers close to owners as their businesses change.',
            path: ['Prioritize strategic fit', 'Professional conversation', 'Clarify where we add value', 'Build familiarity', 'Relevant introduction'],
          },
          {
            id: 'insurance',
            label: 'Insurance Professionals',
            context: 'Protection planning frequently opens broader planning conversations.',
            path: ['Identify overlap', 'Professional conversation', 'Clarify ideal client', 'Build familiarity', 'Relevant introduction'],
          },
          {
            id: 'exit',
            label: 'Exit Advisors',
            context: 'Exit planning creates moments where owners need trusted financial guidance.',
            path: ['Prioritize strategic fit', 'Professional conversation', 'Clarify where we add value', 'Develop trust', 'Relevant introduction'],
          },
          {
            id: 'ma',
            label: 'M&A Professionals',
            context: 'Transactions create liquidity and new planning complexity for the people involved.',
            path: ['Prioritize strategic fit', 'Professional conversation', 'Clarify ideal client', 'Develop trust', 'Relevant introduction'],
          },
        ]}
      />
      <StageExplorer
        label="COI activation model"
        dark
        progressive
        stages={[
          { label: 'Identify', body: 'Find professionals serving overlapping clients.' },
          { label: 'Prioritize', body: 'Focus on relationships with strategic fit.' },
          { label: 'Connect', body: 'Open a relevant professional conversation.' },
          { label: 'Position', body: 'Clarify who the firm serves and where it adds value.' },
          { label: 'Develop', body: 'Build familiarity and trust.' },
          { label: 'Activate', body: 'Create appropriate introductions when client needs arise.' },
          { label: 'Measure', body: 'Understand which relationships are becoming productive.' },
        ]}
      />
      <p className="max-w-3xl text-[15.5px] leading-relaxed text-background/60">
        Professional relationships develop at their own pace. We build the path and the discipline around it. We do not
        promise referrals.
      </p>
    </Section>
  )
}

const PLAYS = [
  { name: 'Ideal Client Acquisition', body: 'Build demand inside the client segment the firm serves best.' },
  { name: 'Business Owner Acquisition', body: 'Reach owners whose businesses create planning complexity.' },
  { name: 'Executive Acquisition', body: 'Engage executives with compensation and career transitions.' },
  { name: 'Professional Niche Acquisition', body: 'Focus on professions the firm understands deeply.' },
  { name: 'Strategic COI Development', body: 'Develop the professional relationships with the strongest overlap.' },
  { name: 'Professional Referral Network Development', body: 'Turn scattered introductions into a deliberate network.' },
  { name: 'Geographic Expansion', body: 'Build presence in a new market with a defined plan.' },
  { name: 'Retirement Market Development', body: 'Reach people approaching a major financial transition.' },
  { name: 'Liquidity-Event Market Development', body: 'Engage people facing sales, exits, and other liquidity moments.' },
]

export function FsNewDemandPlays() {
  return (
    <Section tone="white" labelledBy="plays-heading">
      <SectionIntro id="plays-heading" eyebrow="New Demand Plays" title="Different Markets Require Different Growth Motions.">
        <p>
          A Revenue Play is a defined growth motion with its own market, message, and path to the advisor. Each child
          page goes deeper on how these plays run.
        </p>
      </SectionIntro>
      <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {PLAYS.map((play) => (
          <li key={play.name} className="group flex flex-col gap-3 bg-background p-6 transition-colors hover:bg-paper lg:p-7">
            <span className="flex items-center gap-2.5">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-brand transition-colors group-hover:bg-signal" />
              <span className="text-[17px] font-medium text-ink">{play.name}</span>
            </span>
            <span className="text-[15px] leading-relaxed text-muted-foreground">{play.body}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

const PORTFOLIO = [
  {
    label: 'Prospect Relationships',
    items: ['Past prospects', 'Dormant opportunities', 'Introductions'],
    activation: 'Reconnect with context and a reason that reflects what changed.',
  },
  {
    label: 'Professional Relationships',
    items: ['COIs', 'Referral partners', 'Professional network'],
    activation: 'Deepen familiarity and keep the firm relevant to shared clients.',
  },
  {
    label: 'Client Relationships',
    items: ['Existing clients', 'Family relationships', 'Referral opportunities'],
    activation: 'Create appropriate moments for the relationship to extend.',
  },
  {
    label: 'Market Relationships',
    items: ['Events', 'Communities', 'Industry networks'],
    activation: 'Turn presence in a community into deliberate follow-up.',
  },
]

export function FsExistingRelationships() {
  return (
    <Section tone="cream" labelledBy="existing-heading">
      <SectionIntro
        id="existing-heading"
        eyebrow="Existing Opportunity"
        title="More Growth May Already Be Connected To The Firm Than Leadership Can See."
        layout="split"
      >
        <p>
          The goal is not to blast every record. The goal is to identify meaningful opportunity and create a deliberate
          reason to reconnect.
        </p>
      </SectionIntro>
      <TagList
        items={[
          'Past Prospects',
          'Dormant Opportunities',
          'Unconverted Introductions',
          'Old Discovery Conversations',
          'Existing COI Relationships',
          'Client Referral Opportunities',
          'People Who Asked To Reconnect Later',
          'Existing Client Relationships',
          'Relationship Expansion Opportunities',
        ]}
      />
      <div className="flex flex-col gap-8 border-t border-ink/10 pt-12">
        <h3 className="max-w-3xl text-3xl font-medium tracking-tight text-balance text-ink md:text-4xl">
          Treat Relationships Like A Growth Asset, Not A Collection Of Contacts.
        </h3>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PORTFOLIO.map((group) => (
            <li key={group.label} className="flex flex-col gap-5 rounded-xl border border-ink/10 bg-background p-6">
              <MonoLabel>{group.label}</MonoLabel>
              <ul className="flex flex-col gap-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-[16px] font-medium text-ink">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-auto border-t border-line pt-4 text-[14.5px] leading-relaxed text-muted-foreground">
                {group.activation}
              </p>
            </li>
          ))}
        </ul>
        <p className="text-[15.5px] text-muted-foreground">Different relationships require different activation.</p>
      </div>
    </Section>
  )
}
