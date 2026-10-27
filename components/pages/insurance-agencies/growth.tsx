import { CheckList, Contrast, IndustryHero, Panel, Section, SectionIntro, TagList } from '@/components/industry/kit'
import { FlowSelector } from '@/components/industry/flow-selector'
import { RotatingText } from '@/components/industry/rotating-text'
import { GrowthComposition } from '@/components/industry/growth-composition'
import { StageExplorer } from '@/components/industry/stage-explorer'
import { NetworkOrbit } from '@/components/industry/network-orbit'
import { ProfileExplorer } from '@/components/industry/profile-explorer'
import { LoadSplit } from '@/components/industry/load-split'
import { MonoLabel } from '@/components/industry/flow'

export function InsHero() {
  return (
    <IndustryHero
      breadcrumb={[{ label: 'Industries' }, { label: 'Independent Insurance Agencies' }]}
      context="Commercial lines agencies"
      eyebrow="Commercial Insurance Growth"
      title="Build A More Repeatable Commercial New Business Engine."
      body="We build and run the systems behind target account acquisition, carrier-fit campaigns, strategic referral channels, and commercial opportunities already inside the agency, creating more qualified opportunities for producers to pursue."
      secondary={{ label: 'Explore Commercial Revenue Plays', href: '#ins-plays' }}
      rotating={
        <RotatingText
          lead="Create more commercial opportunities through"
          phrases={[
            'Target Accounts',
            'Carrier-Fit Opportunities',
            'Strategic Referral Partners',
            'Renewal Windows',
            'Contractors',
            'Manufacturers',
            'Transportation Accounts',
            'Commercial Property',
            'Existing Commercial Clients',
            'Old Quotes',
          ]}
        />
      }
      principles={[
        { title: 'Appetite-Led Growth', body: 'Build around the commercial business the agency wants and can competitively write.' },
        { title: 'Producer Leverage', body: 'Move more research, targeting, follow-up, and qualification before the producer conversation.' },
        { title: 'Measured New Business', body: 'Understand which markets and Revenue Plays create real commercial opportunities.' },
      ]}
      visual={
        <FlowSelector
          label="Commercial growth paths"
          panelLabel="Path to a qualified producer opportunity"
          layout="top"
          compactSteps
          options={[
            {
              id: 'target',
              label: 'Target Account',
              group: 'new',
              steps: ['Account Profile', 'Market Map', 'Decision Maker', 'Relevant Campaign', 'Qualified Interest', 'Producer Opportunity'],
            },
            {
              id: 'appetite',
              label: 'Carrier Appetite',
              group: 'new',
              steps: ['Carrier Appetite', 'Ideal Account Profile', 'Target Market', 'Commercial Accounts', 'Activation', 'Producer Opportunity'],
            },
            {
              id: 'partner',
              label: 'Referral Partner',
              group: 'new',
              steps: ['Shared Business Clients', 'Professional Conversation', 'Clear Expertise', 'Trust', 'Appropriate Introduction', 'Producer Opportunity'],
            },
            {
              id: 'quote',
              label: 'Old Quote',
              group: 'existing',
              steps: ['Prior Quote', 'Reason Lost', 'Renewal Timing', 'Re-Entry With Context', 'Renewed Interest', 'Producer Opportunity'],
            },
            {
              id: 'rounding',
              label: 'Account Rounding',
              group: 'existing',
              steps: ['Monoline Account', 'Business Change', 'Prioritized Outreach', 'Follow-Up', 'Broader Conversation', 'Producer Opportunity'],
            },
          ]}
        />
      }
    />
  )
}

export function InsOrganicGrowth() {
  return (
    <Section tone="cream" labelledBy="ins-organic-heading">
      <SectionIntro
        id="ins-organic-heading"
        eyebrow="Real Organic Growth"
        title="Premium Growth And New Business Production Are Not The Same Thing."
        layout="split"
      >
        <p>
          Premium and commission can grow because rates increase, insured exposures grow, existing accounts expand, or
          market conditions change. Sustainable commercial growth also requires the agency to consistently create and
          win new business.
        </p>
      </SectionIntro>
      <GrowthComposition
        title="Where premium growth comes from"
        views={['Total premium change', 'What the agency controls']}
        focusLabel="Deliberate new business"
        blocks={[
          { label: 'Rate Increases', body: 'Pricing moves with the market, not with prospecting.', kind: 'external' },
          { label: 'Exposure Growth', body: 'Insureds grow payroll, fleets, and property values.', kind: 'influence' },
          { label: 'Retention', body: 'Keeping the accounts the agency already writes.', kind: 'influence' },
          { label: 'Account Expansion', body: 'Additional lines with existing commercial clients.', kind: 'focus' },
          { label: 'Net New Commercial Business', body: 'Accounts the agency deliberately targets and wins.', kind: 'focus' },
        ]}
      />
      <p className="max-w-3xl text-[16.5px] leading-relaxed text-ink/70">
        Revenue Activation increases the agency&apos;s ownership of the deliberate growth activity it can influence.
      </p>
    </Section>
  )
}

export function InsProducerCapacity() {
  return (
    <Section tone="white" labelledBy="ins-producer-heading">
      <SectionIntro
        id="ins-producer-heading"
        eyebrow="Producer Productivity"
        title="Your Best Producers Should Not Have To Own Every Step Before The First Serious Commercial Conversation."
        layout="split"
      >
        <p>
          If the same producer owns every activity from market research through bind, the agency creates a capacity
          bottleneck. The goal is to concentrate producer time where producer skill has the highest value.
        </p>
      </SectionIntro>
      <LoadSplit
        person="Commercial Producer"
        system="Revenue Activation"
        states={['Producer owns every step', 'With a growth system']}
        handoff="Qualified producer opportunity"
        personNote="Producer time goes to the work that requires licensed expertise and relationships."
        tasks={[
          { label: 'Prospecting', owner: 'system' },
          { label: 'Discovery', owner: 'person' },
          { label: 'Account research', owner: 'system' },
          { label: 'Coverage conversations', owner: 'person' },
          { label: 'Decision-maker research', owner: 'system' },
          { label: 'Carrier strategy', owner: 'person' },
          { label: 'Follow-up', owner: 'system' },
          { label: 'Submissions and quoting', owner: 'person' },
          { label: 'Early qualification', owner: 'system' },
          { label: 'Closing and relationship management', owner: 'person' },
        ]}
      />
    </Section>
  )
}

export function InsNewDemand() {
  return (
    <Section tone="paper" labelledBy="ins-demand-heading">
      <SectionIntro
        id="ins-demand-heading"
        eyebrow="New Business"
        title="Build Pipeline Around The Commercial Accounts Your Agency Actually Wants To Write."
        layout="split"
      >
        <p>
          Not every commercial account deserves equal prospecting effort. Strong new business development begins with
          an intentional target account profile.
        </p>
      </SectionIntro>
      <Panel label="Target account profile filters">
        <TagList
          items={[
            'Industry',
            'NAICS Or SIC Where Useful',
            'Geography',
            'Revenue',
            'Employee Count',
            'Fleet Size',
            'Number Of Locations',
            'Property Footprint',
            'Business Model',
            'Risk Characteristics',
            'Premium Potential',
            'Current Carrier Where Available',
            'Renewal Timing Where Available',
            'Carrier Appetite',
            'Agency Expertise',
            'Producer Expertise',
          ]}
        />
      </Panel>
      <div className="flex flex-col gap-4">
        <MonoLabel>The operating motion</MonoLabel>
        <StageExplorer
          label="Commercial new business motion"
          progressive
          stages={[
            { label: 'Define', body: 'Define the account profile.' },
            { label: 'Map', body: 'Map the market.' },
            { label: 'Identify', body: 'Identify decision makers.' },
            { label: 'Prioritize', body: 'Prioritize accounts.' },
            { label: 'Build', body: 'Build relevant campaigns.' },
            { label: 'Follow Up', body: 'Follow up consistently.' },
            { label: 'Qualify', body: 'Qualify real interest.' },
            { label: 'Route', body: 'Route the opportunity to the producer.' },
          ]}
        />
      </div>
    </Section>
  )
}

export function InsCarrierAppetite() {
  return (
    <Section tone="ink" labelledBy="ins-appetite-heading" grid>
      <SectionIntro
        id="ins-appetite-heading"
        eyebrow="Appetite-Led Growth"
        title="Turn Carrier Appetite Into A Focused Commercial New Business Strategy."
        dark
        layout="split"
      >
        <p>
          A strong market relationship or new carrier appetite only creates value when the agency can put enough
          appropriate business in front of it.
        </p>
      </SectionIntro>
      <StageExplorer
        label="From carrier appetite to producer opportunity"
        progressive
        dark
        stages={[
          { label: 'Carrier Appetite', body: 'Start from the classes and risks the agency has market access for.' },
          { label: 'Ideal Account Profile', body: 'Translate appetite into industries, size, and risk characteristics.' },
          { label: 'Target Market', body: 'Define the geographies and segments worth pursuing.' },
          { label: 'Commercial Accounts', body: 'Build the account list that fits the profile.' },
          { label: 'Decision Makers', body: 'Identify the owners and leaders who buy coverage.' },
          { label: 'Activation', body: 'Position the campaign around the agency’s strength in that market.' },
          { label: 'Qualified Producer Opportunities', body: 'Route real interest to the producer with the right expertise.' },
        ]}
      />
      <p className="max-w-3xl text-[14px] leading-relaxed text-background/55">
        We do not determine carrier eligibility or guarantee placement. The agency and carrier determine actual
        appetite and underwriting fit.
      </p>
    </Section>
  )
}

export function InsNiches() {
  return (
    <Section tone="white" labelledBy="ins-niche-heading">
      <SectionIntro
        id="ins-niche-heading"
        eyebrow="Commercial Specialization"
        title="Turn Industry Expertise Into A Repeatable Market Position."
        layout="split"
      >
        <p>Every agency has different strengths. The niche should reflect the agency&apos;s actual expertise and appetite.</p>
      </SectionIntro>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Panel label="Example niches">
          <TagList
            items={[
              'Contractors',
              'Construction',
              'Manufacturing',
              'Trucking And Transportation',
              'Commercial Real Estate',
              'Professional Services',
              'Healthcare Businesses',
              'Hospitality',
              'Wholesale',
              'Other agency-defined niches',
            ]}
          />
        </Panel>
        <Panel label="A commercial niche can create">
          <CheckList
            items={[
              'Clearer prospecting',
              'Better messaging',
              'Stronger referral relationships',
              'Deeper risk familiarity',
              'More focused carrier alignment',
              'More recognizable market positioning',
            ]}
          />
        </Panel>
      </div>
    </Section>
  )
}

const ACCOUNT_FIT = [
  { name: 'Account Fit', question: "Does it match the agency's target market?" },
  { name: 'Appetite Fit', question: 'Does the agency have relevant market access?' },
  { name: 'Commercial Value', question: 'Is the opportunity worth producer time?' },
  { name: 'Timing', question: 'Is there a credible reason to engage now?' },
  { name: 'Decision Maker', question: 'Can the relevant buyer be identified?' },
  { name: 'Relevance', question: 'Can the agency start a useful commercial conversation?' },
]

export function InsAccountSelection() {
  return (
    <Section tone="cream" labelledBy="ins-selection-heading">
      <SectionIntro
        id="ins-selection-heading"
        eyebrow="Target Account Acquisition"
        title="Know Which Accounts You Want Before The Producer Starts Prospecting."
        layout="split"
      >
        <p>The goal is quality of pursuit, not list volume.</p>
      </SectionIntro>
      <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {ACCOUNT_FIT.map((c, i) => (
          <li key={c.name} className="flex flex-col gap-3 rounded-2xl border border-ink/10 bg-background p-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
              {String(i + 1).padStart(2, '0')} / {c.name}
            </span>
            <p className="text-pretty text-[18px] leading-snug text-ink">{c.question}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function InsSignalsAndTiming() {
  return (
    <Section tone="ink" labelledBy="ins-timing-heading" grid>
      <SectionIntro
        id="ins-timing-heading"
        eyebrow="Commercial Timing"
        title="The Right Account At The Wrong Time Can Still Be A Bad Prospecting Opportunity."
        dark
        layout="split"
      >
        <p>
          Business changes and renewal timing help prioritize prospecting and follow-up when reliable information
          exists. A signal is context, not insurance intent.
        </p>
      </SectionIntro>
      <Panel dark label="A commercial account becomes more relevant when something changes">
        <TagList
          dark
          items={[
            'New Location',
            'Expansion',
            'Fleet Growth',
            'Hiring',
            'Property Purchase',
            'Ownership Change',
            'Acquisition',
            'New Contract',
            'New Operations',
            'Rapid Growth',
            'Leadership Change',
            'New Equipment',
            'Geographic Expansion',
            'Other public business developments',
          ]}
        />
      </Panel>
      <ProfileExplorer
        dark
        question="How reliable is the renewal timing?"
        fields={['Examples', 'How it is used']}
        footnote="Estimated timing is never presented as fact. Not every signal or date is available for every account."
        profiles={[
          {
            id: 'verified',
            label: 'Verified',
            values: [
              ['Known Renewal Dates', 'Known Expiration Dates'],
              'Plan outreach around a confirmed window.',
            ],
          },
          {
            id: 'reported',
            label: 'Reported',
            values: [
              ['Reported Renewal Windows', '"Call Me Closer To Renewal"', 'Previous Producer Notes'],
              'Follow up when the prospect said the timing would be right.',
            ],
          },
          {
            id: 'estimated',
            label: 'Estimated',
            values: [['Previous Quote Dates', 'Estimated Timing'], 'Use as a prioritization input, then confirm in conversation.'],
          },
          {
            id: 'unknown',
            label: 'Unknown',
            values: [['No reliable timing data'], 'Lead with relevance and ask about timing directly.'],
          },
        ]}
      />
    </Section>
  )
}

export function InsReferralPartners() {
  return (
    <Section tone="paper" labelledBy="ins-referral-heading">
      <SectionIntro
        id="ins-referral-heading"
        eyebrow="Referral Channels"
        title="Build Relationships With The Professionals Already Advising The Businesses You Want To Insure."
        layout="split"
      >
        <p>
          This is not asking for leads. It is building professional relationships, understanding client overlap, and
          becoming a credible commercial insurance resource when client needs appear.
        </p>
      </SectionIntro>
      <NetworkOrbit
        center="Your Target Business"
        anchor="Agency"
        prompt="Select a professional to see how a commercial referral relationship forms."
        nodes={[
          {
            id: 'cpa',
            label: 'CPAs',
            context: 'See business growth, payroll changes, and new entities early.',
            path: ['Client overlap', 'Mutual relevance', 'Trust', 'Appropriate introduction'],
          },
          {
            id: 'lender',
            label: 'Commercial Lenders',
            context: 'Financing often comes with insurance requirements.',
            path: ['Shared borrowers', 'Clear expertise', 'Familiarity', 'Timely introduction'],
          },
          {
            id: 'attorney',
            label: 'Business Attorneys',
            context: 'Advise on acquisitions, contracts, and ownership change.',
            path: ['Shared clients', 'Professional conversation', 'Trust', 'Appropriate introduction'],
          },
          {
            id: 'cre',
            label: 'Commercial Real Estate',
            context: 'Property purchases and leases create new exposures.',
            path: ['Deal overlap', 'Clear role', 'Visibility', 'Relevant introduction'],
          },
          {
            id: 'payroll',
            label: 'Payroll And HR',
            context: 'Workforce growth connects to workers compensation and benefits.',
            path: ['Client overlap', 'Complementary expertise', 'Trust', 'Appropriate introduction'],
          },
          {
            id: 'surety',
            label: 'Surety Professionals',
            context: 'Contractors need coordinated bonding and insurance.',
            path: ['Contractor overlap', 'Coordination', 'Trust', 'Qualified introduction'],
          },
          {
            id: 'association',
            label: 'Trade Associations',
            context: 'Concentrate the businesses inside an agency niche.',
            path: ['Niche presence', 'Useful contribution', 'Recognition', 'Member conversations'],
          },
        ]}
      />
      <div className="flex flex-col gap-4">
        <MonoLabel>Referral partner activation path</MonoLabel>
        <StageExplorer
          label="Referral partner activation path"
          progressive
          stages={[
            { label: 'Identify', body: 'Find professionals serving the same kinds of businesses.' },
            { label: 'Prioritize', body: 'Focus on client overlap, market relevance, reputation, and strategic fit.' },
            { label: 'Connect', body: 'Start a useful professional conversation.' },
            { label: 'Position', body: "Make the agency's commercial expertise clear." },
            { label: 'Develop', body: 'Build familiarity and trust.' },
            { label: 'Activate', body: 'Create introductions when appropriate client situations appear.' },
            { label: 'Measure', body: 'Track which relationships create commercial opportunities.' },
          ]}
        />
      </div>
    </Section>
  )
}

export function InsExistingBook() {
  return (
    <Section tone="white" labelledBy="ins-book-heading">
      <SectionIntro
        id="ins-book-heading"
        eyebrow="Owned Commercial Opportunity"
        title="The Agency Has Already Paid To Create More Opportunity Than Most Teams Have Time To Work."
        layout="split"
      >
        <p>Prioritize, segment, activate, and re-enter with context. Never blast the book.</p>
      </SectionIntro>
      <Panel label="Opportunity already inside the agency">
        <TagList
          items={[
            'Old Quotes',
            'Dormant Commercial Prospects',
            'Lost Accounts',
            'No-Decision Prospects',
            'Monoline Accounts',
            'Existing Commercial Clients',
            'Upcoming Renewals',
            'Cross-Sell Opportunities',
            'Account Rounding Opportunities',
            'Past Producer Conversations',
            'Referral Sources',
            'Accounts That Have Expanded',
            'Accounts With New Operations',
            'Accounts With New Locations',
          ]}
        />
      </Panel>
    </Section>
  )
}

export function InsOldQuotes() {
  return (
    <Section tone="cream" labelledBy="ins-quotes-heading">
      <SectionIntro
        id="ins-quotes-heading"
        eyebrow="Old Quote Recovery"
        title="A Lost Quote Is Not Always A Lost Account Forever."
        layout="split"
      >
        <p>
          Not every old quote should be recontacted immediately. Prioritize first, then build a relevant re-entry
          motion.
        </p>
      </SectionIntro>
      <Contrast
        left={{
          label: 'Why it was lost',
          items: ['Price', 'Timing', 'Incumbent relationship', 'Market access', 'No decision', 'Lack of response', 'The account was not ready'],
        }}
        right={{
          label: 'What the agency already invested',
          items: ['Producer time', 'Risk research', 'Application work', 'Carrier conversations', 'Quoting effort'],
        }}
      />
      <Panel label="Prioritize based on">
        <TagList
          items={['Time Since Quote', 'Account Fit', 'Reason Lost', 'Renewal Timing', 'Current Appetite', 'Producer Capacity', 'Available Context']}
        />
      </Panel>
    </Section>
  )
}

export function InsBookGrowth() {
  return (
    <Section tone="paper" labelledBy="ins-rounding-heading">
      <SectionIntro
        id="ins-rounding-heading"
        eyebrow="Book Growth"
        title="Grow The Relationship Before Looking Outside The Book For Every New Dollar."
        layout="split"
      >
        <p>
          Revenue Activation identifies and prioritizes relationships where a broader risk conversation may be worth
          having. The licensed agency team handles all coverage advice.
        </p>
      </SectionIntro>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Panel label="Account rounding">
          <TagList
            items={[
              'Monoline Accounts',
              'Commercial Auto',
              'General Liability',
              'Workers Compensation',
              'Property',
              'Umbrella',
              'Cyber',
              'Professional Liability',
              'Benefits Where Applicable',
            ]}
          />
        </Panel>
        <Panel label="Renewal is more than a service event">
          <p className="text-[15px] leading-relaxed text-ink/70">It can reveal a broader commercial relationship.</p>
          <TagList
            items={[
              'Business Changes',
              'New Exposures',
              'New Locations',
              'Fleet Growth',
              'Employee Growth',
              'New Operations',
              'Additional Lines',
              'Referral Opportunity',
            ]}
          />
        </Panel>
        <Panel label="Some former clients become better opportunities later">
          <TagList
            items={[
              'Carrier Environment',
              'Business Growth',
              'Ownership',
              'Operations',
              'Locations',
              'Claims Experience',
              'Service Expectations',
              'Renewal Conditions',
              'Agency Capabilities',
            ]}
          />
          <p className="text-[14px] leading-relaxed text-ink/55">Revisited selectively, when context supports it.</p>
        </Panel>
      </div>
    </Section>
  )
}
