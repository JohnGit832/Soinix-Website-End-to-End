import { CheckList, OwnershipSplit, Panel, Section, SectionIntro, SystemsArchitecture, TagList } from '@/components/industry/kit'
import { ActivationSystem } from '@/components/industry/activation-system'
import { DetailExplorer } from '@/components/industry/detail-explorer'
import { LayerStack } from '@/components/industry/layer-stack'

const PLAY_FIELDS = [
  'What is the opportunity?',
  'How is it identified?',
  'Why is it worth pursuing?',
  'What gets activated?',
  'What makes it qualified?',
  'Where does the producer enter?',
]

type Play = { title: string; group: string; values: string[] }

const PLAYS: Play[] = [
  {
    title: 'Target Account Acquisition',
    group: 'New Demand',
    values: [
      'Commercial accounts that match the agency’s target profile.',
      'Industry, size, geography, risk characteristics, and premium potential.',
      'These are the accounts the agency most wants to write.',
      'Decision-maker research and a campaign built around the account’s operations.',
      'Commercial fit, timing, decision-maker role, and genuine interest.',
      'Discovery conversation.',
    ],
  },
  {
    title: 'Carrier Appetite Acquisition',
    group: 'New Demand',
    values: [
      'Accounts that fit a carrier appetite the agency has access to.',
      'Appetite translated into industries, account size, and risk profiles.',
      'Market access only creates value when enough fitting business reaches it.',
      'A target market and campaign positioned around the agency’s market strength.',
      'Account fit with the appetite, confirmed by the agency.',
      'Discovery and submission planning.',
    ],
  },
  {
    title: 'Commercial Niche Penetration',
    group: 'New Demand',
    values: ['Businesses inside an agency-defined niche.', 'Niche account mapping.', 'Expertise compounds into recognizable market position.', 'Niche-specific messaging and association presence.', 'Niche fit and a relevant risk conversation.', 'Discovery conversation.'],
  },
  {
    title: 'Strategic Referral Partner Acquisition',
    group: 'New Demand',
    values: ['Professionals advising the businesses the agency wants to insure.', 'Client overlap, market relevance, and reputation.', 'Trusted introductions arrive with context.', 'Professional conversations and relationship development.', 'An appropriate client situation and a warm introduction.', 'Introductory meeting.'],
  },
  {
    title: 'Business Signal Prospecting',
    group: 'New Demand',
    values: ['Accounts experiencing a relevant business change.', 'Public business developments where available.', 'Change often creates new exposures and new conversations.', 'Timely outreach that references the relevant change.', 'Fit plus a confirmed reason to talk now.', 'Discovery conversation.'],
  },
  {
    title: 'Renewal-Timed Prospecting',
    group: 'New Demand',
    values: ['Target accounts approaching a renewal window.', 'Verified, reported, or estimated timing, labeled as such.', 'The right account at the right time.', 'Outreach paced ahead of the window.', 'Confirmed timing and interest in a review.', 'Pre-renewal review.'],
  },
  {
    title: 'Geographic Expansion',
    group: 'New Demand',
    values: ['Commercial accounts in a new territory.', 'Market mapping for the new geography.', 'Expansion needs pipeline before producers arrive.', 'Territory-specific campaigns and referral partners.', 'Account fit and producer coverage in the territory.', 'Discovery conversation.'],
  },
  {
    title: 'Strategic Account Acquisition',
    group: 'New Demand',
    values: ['A short list of high-value commercial accounts.', 'Named-account selection by leadership and producers.', 'A few accounts can move the agency’s book.', 'Deep account research and multi-touch engagement.', 'Decision-maker engagement and timing.', 'Executive-level discovery.'],
  },
  {
    title: 'Old Quote Recovery',
    group: 'Existing Relationships',
    values: ['Previously quoted accounts that did not bind.', 'Quote history, reason lost, and time since quote.', 'The agency has already invested in the account.', 'A relevant re-entry motion with context.', 'Renewed interest and current appetite.', 'Re-quote conversation.'],
  },
  {
    title: 'Dormant Commercial Opportunity Reactivation',
    group: 'Existing Relationships',
    values: ['Commercial prospects that went quiet.', 'CRM and AMS history with producer notes.', 'Earlier conversations already established context.', 'Re-engagement with a credible reason.', 'Fit, timing, and interest confirmed.', 'Discovery conversation.'],
  },
  {
    title: 'Lost Account Win-Back',
    group: 'Existing Relationships',
    values: ['Former clients whose situation may have changed.', 'Ownership, operations, carrier environment, or service changes.', 'Some former clients become better opportunities later.', 'Selective outreach when context supports it.', 'A genuine reason to reconsider.', 'Review conversation.'],
  },
  {
    title: 'Account Rounding',
    group: 'Existing Relationships',
    values: ['Monoline accounts with room for a broader relationship.', 'Line-of-business gaps in the book.', 'Deeper relationships strengthen retention.', 'Prioritized outreach around a broader risk conversation.', 'Client interest in a broader review.', 'Risk conversation with the licensed team.'],
  },
  {
    title: 'Cross-Sell Activation',
    group: 'Existing Relationships',
    values: ['Existing clients with related needs.', 'Business profile and current lines.', 'Trust already exists.', 'Relevant, well-timed outreach.', 'Confirmed interest.', 'Coverage discussion.'],
  },
  {
    title: 'Commercial Account Expansion',
    group: 'Existing Relationships',
    values: ['Clients that have grown, expanded, or added operations.', 'Business changes and producer notes.', 'Growth often changes exposures.', 'Outreach tied to the change.', 'Confirmed change and interest.', 'Risk conversation.'],
  },
  {
    title: 'Renewal Activation',
    group: 'Existing Relationships',
    values: ['Upcoming renewals with broader potential.', 'Renewal calendar plus account changes.', 'Renewal opens a natural conversation.', 'Pre-renewal outreach on what has changed.', 'Client engagement before renewal.', 'Renewal review.'],
  },
  {
    title: 'Referral Activation',
    group: 'Existing Relationships',
    values: ['Satisfied commercial clients and existing partners.', 'Relationship strength and network overlap.', 'Introductions from trusted relationships.', 'Appropriate moments to ask.', 'A relevant introduction.', 'Introductory conversation.'],
  },
]

export function InsRevenuePlays() {
  return (
    <Section id="ins-plays" tone="cream" labelledBy="ins-plays-heading">
      <SectionIntro
        id="ins-plays-heading"
        eyebrow="Revenue Plays"
        title="Build The Growth Motion Around The Commercial Opportunity."
        layout="split"
      >
        <p>New demand first, then the opportunity already inside the book. Select a play to see how it works.</p>
      </SectionIntro>
      <DetailExplorer
        label="Commercial insurance revenue plays"
        groups={['New Demand', 'Existing Relationships']}
        fields={PLAY_FIELDS}
        items={PLAYS}
      />
    </Section>
  )
}

export function InsOperatingSystem() {
  return (
    <Section tone="ink" labelledBy="ins-system-heading" grid>
      <SectionIntro
        id="ins-system-heading"
        eyebrow="Commercial Revenue Activation"
        title="Put A Repeatable System Behind The Work Before Producer Discovery."
        dark
        layout="split"
      >
        <p>Select a starting point to see how the same system moves commercial opportunity toward the producer.</p>
      </SectionIntro>
      <ActivationSystem
        outcomeLabel="Qualified producer opportunity"
        stages={[
          { name: 'Find', body: 'Identify target accounts, referral partners, signals, timing, and existing commercial opportunities.' },
          { name: 'Prioritize', body: 'Rank opportunities based on fit, timing, commercial value, appetite, and producer capacity.' },
          { name: 'Activate', body: 'Build the right message, campaign, and reason to engage.' },
          { name: 'Follow Up', body: 'Keep appropriate opportunities moving.' },
          { name: 'Qualify', body: 'Understand commercial fit, timing, need, decision-maker role, and genuine interest.' },
          { name: 'Route', body: 'Put the opportunity in front of the appropriate producer.' },
          { name: 'Measure', body: 'Track which markets, partners, and Revenue Plays create meaningful commercial opportunities.' },
        ]}
        scenarios={[
          {
            id: 'target',
            label: 'Target Account',
            group: 'new',
            steps: ['Map accounts in the target profile', 'Rank by fit and premium potential', 'Launch an operations-specific campaign', 'Follow up with the decision maker', 'Confirm fit and timing', 'Route to the specialist producer', 'Track which industries respond'],
            outcome: 'A target account ready for producer discovery.',
          },
          {
            id: 'appetite',
            label: 'Carrier Appetite',
            group: 'new',
            steps: ['Translate appetite into a profile', 'Focus on accounts that fit', 'Position the agency’s market strength', 'Keep accounts moving', 'Confirm account fit', 'Route to the producer', 'See which appetites create opportunity'],
            outcome: 'More appropriate business in front of the market.',
          },
          {
            id: 'quote',
            label: 'Old Quote',
            group: 'existing',
            steps: ['Surface prior quotes', 'Weigh reason lost and timing', 'Prepare a re-entry with context', 'Follow up ahead of renewal', 'Confirm renewed interest', 'Return to the original producer', 'Track which quotes reopen'],
            outcome: 'A quoted account back in conversation.',
          },
          {
            id: 'renewal',
            label: 'Renewal Activation',
            group: 'existing',
            steps: ['Review upcoming renewals', 'Flag accounts with changes', 'Plan pre-renewal outreach', 'Keep the client engaged', 'Confirm interest in a broader review', 'Bring in the account producer', 'Measure account expansion'],
            outcome: 'A broader commercial conversation at renewal.',
          },
        ]}
      />
    </Section>
  )
}

export function InsHandoff() {
  return (
    <Section tone="white" labelledBy="ins-handoff-heading">
      <SectionIntro
        id="ins-handoff-heading"
        eyebrow="From Producer Conversation To Bound Business"
        title="Keep Producer Time Focused On Commercial Work That Requires Producer Skill."
        layout="split"
      >
        <p>
          Revenue Activation does not replace the producer. The agency owns everything requiring licensed insurance
          expertise.
        </p>
      </SectionIntro>
      <OwnershipSplit
        bridge="Producer handoff"
        left={{
          label: 'Revenue Activation',
          caption: 'The work before the producer steps in.',
          items: ['Target Account', 'Research', 'Activation', 'Follow-Up', 'Qualification'],
        }}
        right={{
          label: 'The producer owns',
          caption: 'Everything from discovery to bind.',
          items: [
            'Discovery',
            'Risk Conversation',
            'Coverage Discussion',
            'Carrier Strategy',
            'Application And Submission',
            'Quote',
            'Proposal',
            'Negotiation',
            'Relationship',
            'Bind',
          ],
        }}
        note="We do not recommend coverage, choose insurance products for clients, provide insurance advice, submit risk without agency involvement, quote policies, or bind coverage."
      />
    </Section>
  )
}

export function InsWhatWeOwn() {
  return (
    <Section tone="paper" labelledBy="ins-own-heading">
      <SectionIntro
        id="ins-own-heading"
        eyebrow="End-To-End Execution"
        title="We Run More Of The Work Before The Producer Needs To Step In."
        layout="split"
      >
        <p>One operating system, not a menu of services.</p>
      </SectionIntro>
      <LayerStack
        layers={[
          {
            name: 'Research',
            body: 'Understand the market and the accounts worth pursuing.',
            items: ['Market Research', 'Target Account Mapping', 'Commercial Account Research', 'Referral Partner Research', 'Decision-Maker Research'],
          },
          { name: 'Data', body: 'Build a prioritized view of commercial opportunity.', items: ['Data', 'Enrichment', 'Segmentation', 'Business Signals'] },
          { name: 'Campaign', body: 'Give each account a reason to engage.', items: ['Campaign Strategy', 'Messaging', 'Personalization'] },
          { name: 'Execution', body: 'Run the work consistently.', items: ['Infrastructure', 'Activation', 'Follow-Up', 'Reply Handling'] },
          { name: 'Conversion', body: 'Move the right opportunity to the right producer.', items: ['Qualification', 'Producer Routing'] },
          { name: 'Learning', body: 'Understand what creates commercial new business.', items: ['Attribution', 'Optimization'] },
        ]}
      />
    </Section>
  )
}

export function InsSalesCapacity() {
  return (
    <Section tone="green" labelledBy="ins-capacity-heading" grid>
      <SectionIntro
        id="ins-capacity-heading"
        eyebrow="Sales Capacity"
        title="More Prospecting Activity Is Not Useful If Producers Cannot Work The Opportunities Properly."
        dark
        layout="split"
      >
        <p>Revenue Activation paces and routes opportunities based on the agency&apos;s actual ability to pursue them.</p>
      </SectionIntro>
      <Panel dark label="Routing accounts for">
        <TagList
          dark
          items={[
            'Producer Calendars',
            'New Business Goals',
            'Submission Capacity',
            'Market Access',
            'Account Complexity',
            'Sales Territories',
            'Industry Specialization',
            'Account Assignment',
            'Qualification',
            'Routing',
          ]}
        />
      </Panel>
    </Section>
  )
}

export function InsLeadership() {
  return (
    <Section tone="cream" labelledBy="ins-leadership-heading">
      <SectionIntro
        id="ins-leadership-heading"
        eyebrow="Agency Leadership"
        title="Know Which Growth Motions Are Actually Creating Commercial Opportunity."
        layout="split"
      >
        <p>Attribution gives leadership clear visibility into where new commercial business is coming from.</p>
      </SectionIntro>
      <Panel label="Questions leadership should be able to ask">
        <CheckList
          columns={3}
          items={[
            'Which target industries are responding?',
            'Which carrier appetites are creating opportunity?',
            'Which referral partners are producing relevant conversations?',
            'Which renewal-timed campaigns are working?',
            'Which old quotes are reopening?',
            'Which producers have capacity?',
            'Which commercial niches deserve more investment?',
            'Where are opportunities stalling?',
            'Which Revenue Plays should we expand?',
          ]}
        />
      </Panel>
    </Section>
  )
}

export function InsInfrastructure() {
  return (
    <Section tone="ink" labelledBy="ins-infra-heading" grid>
      <SectionIntro
        id="ins-infra-heading"
        eyebrow="Built Around The Agency"
        title="Create More Value From The Systems And Data The Agency Already Has."
        dark
        layout="split"
      >
        <p>No forced rip-and-replace. We work with the agency&apos;s existing systems and connect them where it helps.</p>
      </SectionIntro>
      <SystemsArchitecture
        inputs={[
          { label: 'Agency Systems', items: ['AMS', 'CRM', 'Email', 'Calendar'] },
          { label: 'Agency History', items: ['Producer Notes', 'Quote History', 'Prospect Lists', 'Existing Client Data', 'Referral Records'] },
          { label: 'Market Data', items: ['Carrier Appetite Information', 'Commercial Account Data', 'Public Business Data'] },
        ]}
        core={{ label: 'Revenue Activation', items: ['Research', 'Activation', 'Follow-Up', 'Qualification', 'Routing', 'Attribution'] }}
        output={{ label: 'Producer', items: ['Qualified opportunities', 'Account context', 'Visible attribution'] }}
      />
      <CheckList
        dark
        columns={2}
        items={['APIs and automation where useful', 'Minimum necessary access', 'Clear ownership', 'Transparent attribution']}
      />
    </Section>
  )
}
