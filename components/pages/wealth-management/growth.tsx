import { CheckList, Contrast, IndustryHero, Panel, Section, SectionIntro, TagList } from '@/components/industry/kit'
import { FlowSelector } from '@/components/industry/flow-selector'
import { RotatingText } from '@/components/industry/rotating-text'
import { GrowthComposition } from '@/components/industry/growth-composition'
import { StageExplorer } from '@/components/industry/stage-explorer'
import { NetworkOrbit } from '@/components/industry/network-orbit'
import { ProfileExplorer } from '@/components/industry/profile-explorer'
import { MonoLabel } from '@/components/industry/flow'

export function WmHero() {
  return (
    <IndustryHero
      breadcrumb={[
        { label: 'Industries' },
        { label: 'Financial Services', href: '/financial-services' },
        { label: 'Wealth Management' },
      ]}
      context="Independent RIAs and wealth firms"
      eyebrow="Wealth Management Growth"
      title="Build A More Predictable Path To Organic AUM Growth."
      body="We help wealth management firms create new client demand across high-fit households and professional referral networks, then activate opportunities already within the firm, building a more consistent path to qualified advisor conversations and new client relationships."
      secondary={{ label: 'Explore How We Build Growth', href: '#wm-operating-system' }}
      rotating={
        <RotatingText
          lead="Connect with families looking for"
          phrases={[
            'Financial Planning',
            'Retirement Income Planning',
            'Investment Management',
            'Generational Wealth Planning',
            'Tax Planning',
            'Estate Planning',
            'Alternative Investments',
            'Private Credit Investments',
          ]}
        />
      }
      principles={[
        { title: 'Ideal-Client Focus', body: 'Build around the households the firm serves best.' },
        { title: 'Dedicated Business Development', body: 'Create ownership before the advisor conversation.' },
        { title: 'Measured Organic Growth', body: 'Track which markets, relationships, and campaigns create real opportunities.' },
      ]}
      visual={
        <FlowSelector
          label="Wealth management growth paths"
          panelLabel="Path to a qualified advisor conversation"
          layout="top"
          compactSteps
          options={[
            {
              id: 'owner',
              label: 'Business Owner',
              group: 'new',
              steps: ['Owner Market', 'Ownership Situation', 'Relevant Campaign', 'Early Relationship', 'Qualified Interest', 'Advisor Conversation'],
            },
            {
              id: 'executive',
              label: 'Executive Wealth',
              group: 'new',
              steps: ['Executive Profile', 'Compensation Complexity', 'Timely Outreach', 'Follow-Up', 'Qualified Interest', 'Advisor Conversation'],
            },
            {
              id: 'coi',
              label: 'COI Introduction',
              group: 'new',
              steps: ['High-Fit Professional', 'Shared Client Overlap', 'Mutual Understanding', 'Trust', 'Qualified Introduction', 'Advisor Conversation'],
            },
            {
              id: 'past',
              label: 'Past Discovery',
              group: 'existing',
              steps: ['Earlier Conversation', 'What Changed', 'Reason To Reconnect', 'Follow-Up', 'Renewed Interest', 'Advisor Conversation'],
            },
            {
              id: 'expansion',
              label: 'Relationship Expansion',
              group: 'existing',
              steps: ['Existing Household', 'Broader Planning Need', 'Context Review', 'Deliberate Outreach', 'Interest Confirmed', 'Advisor Conversation'],
            },
          ]}
        />
      }
    />
  )
}

export function WmOrganicGrowth() {
  return (
    <Section tone="cream" labelledBy="wm-organic-heading">
      <SectionIntro
        id="wm-organic-heading"
        eyebrow="Organic Growth"
        title="Market Appreciation Can Grow AUM. It Cannot Replace A New Client Growth Strategy."
        layout="split"
      >
        <p>
          A growing market can increase assets under management. That does not mean the firm is consistently winning
          new households, developing new referral channels, or creating net new asset opportunities.
        </p>
      </SectionIntro>
      <GrowthComposition
        title="Where AUM growth comes from"
        views={['Total AUM change', 'What the firm controls']}
        focusLabel="Deliberate client acquisition"
        blocks={[
          { label: 'Market Appreciation', body: 'Asset values move with markets, not with business development.', kind: 'external' },
          { label: 'Client Contributions', body: 'Existing households add assets over time.', kind: 'influence' },
          { label: 'New Households', body: 'Won through deliberate client acquisition.', kind: 'focus' },
          { label: 'New Client Assets', body: 'Net new assets from relationships the firm creates.', kind: 'focus' },
          { label: 'Referral Channels', body: 'COI and client introductions developed on purpose.', kind: 'focus' },
          { label: 'Relationship Expansion', body: 'Broader planning conversations with existing clients.', kind: 'focus' },
        ]}
      />
      <Panel label="A strong organic growth system requires clarity around">
        <CheckList
          columns={2}
          items={[
            'Who the ideal client is',
            'Where those people can be reached',
            'Which professional relationships already surround them',
            'How prospects are moved into conversation',
            'Who owns follow-up',
            'How opportunities are qualified',
            'How results are measured',
          ]}
        />
      </Panel>
    </Section>
  )
}

export function WmOperatingGap() {
  return (
    <Section tone="white" labelledBy="wm-gap-heading">
      <SectionIntro
        id="wm-gap-heading"
        title="The Firm May Have A Growth Strategy. The Execution Often Still Lives With The Advisors."
      >
        <p>
          Strategy exists. Opportunity exists. Advisor expertise exists. The execution between opportunity and
          qualified conversation lacks dedicated ownership. This is where Revenue Activation belongs.
        </p>
      </SectionIntro>
      <Contrast
        left={{
          label: 'The firm may have',
          items: [
            'An ideal client profile',
            'A strong client value proposition',
            'Experienced advisors',
            'A clear planning process',
            'Strong client retention',
            'Professional relationships',
            'A respected reputation',
          ],
        }}
        right={{
          label: 'Business development may still depend on',
          items: [
            'Individual advisor prospecting',
            'Sporadic referral asks',
            'Personal COI relationships',
            'Manual follow-up and CRM reminders',
            'Networking and events',
            'Someone remembering to reconnect with an old prospect',
          ],
        }}
      />
    </Section>
  )
}

export function WmNewDemand() {
  return (
    <Section tone="paper" labelledBy="wm-demand-heading">
      <SectionIntro
        id="wm-demand-heading"
        eyebrow="New Client Acquisition"
        title="Create Demand Across The Households Your Firm Is Built To Serve."
        layout="split"
      >
        <p>
          The firm should not market to anyone with money. The strongest campaigns begin with a clear ideal client and a
          clear reason to talk.
        </p>
      </SectionIntro>
      <Panel label="Potential growth markets">
        <TagList
          items={[
            'Business Owners',
            'Corporate Executives',
            'Pre-Retirees',
            'Retirees',
            'Physicians',
            'Partners At Professional Firms',
            'Founders',
            'Executives With Equity Compensation',
            'Families Experiencing Wealth Transfer',
            'Families After A Liquidity Event',
            'Other firm-defined niches',
          ]}
        />
      </Panel>
      <div className="flex flex-col gap-4">
        <MonoLabel>The Revenue Activation approach</MonoLabel>
        <StageExplorer
          label="New client acquisition approach"
          progressive
          stages={[
            { label: 'Define', body: 'Define the market the firm is built to serve.' },
            { label: 'Map', body: 'Map the opportunity inside that market.' },
            { label: 'Identify', body: 'Identify the right people.' },
            { label: 'Understand', body: 'Understand the problem or moment that makes the conversation relevant.' },
            { label: 'Build', body: 'Build the campaign.' },
            { label: 'Follow Up', body: 'Keep the conversation moving.' },
            { label: 'Qualify', body: 'Qualify genuine interest.' },
            { label: 'Route', body: 'Route the opportunity to the right advisor.' },
          ]}
        />
      </div>
    </Section>
  )
}

export function WmBusinessOwners() {
  return (
    <Section tone="green" labelledBy="wm-owner-heading" grid>
      <SectionIntro
        id="wm-owner-heading"
        eyebrow="Business Owner Wealth"
        title="Build The Relationship Before The Business Becomes A Liquidity Event."
        dark
        layout="split"
      >
        <p>
          The goal is not simply reaching owners after a transaction. It is creating relationships earlier in the
          wealth journey.
        </p>
      </SectionIntro>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <Panel dark label="Owner situations">
          <TagList
            dark
            highlight={['Business Sale', 'Post-Sale Liquidity']}
            items={[
              'Business Succession',
              'Exit Planning',
              'Ownership Transition',
              'Business Sale',
              'Personal Wealth Outside The Business',
              'Concentrated Business Equity',
              'Retirement',
              'Estate Planning',
              'Tax Coordination',
              'Post-Sale Liquidity',
            ]}
          />
        </Panel>
        <Panel dark label="What we build">
          <p className="text-[16.5px] leading-relaxed text-background/80">
            Campaigns and professional relationships around owners experiencing these situations, with qualified
            conversations routed to the firm&apos;s advisors.
          </p>
          <p className="text-[14px] leading-relaxed text-background/55">
            We do not provide exit-planning or tax advice.
          </p>
        </Panel>
      </div>
    </Section>
  )
}

export function WmExecutives() {
  return (
    <Section tone="white" labelledBy="wm-exec-heading">
      <SectionIntro
        id="wm-exec-heading"
        eyebrow="Executive Wealth"
        title="Create A Clear Growth Motion Around Executives With Complex Wealth."
        layout="split"
      >
        <p>
          Revenue Activation builds a targeted acquisition motion around clearly defined executive profiles and
          needs. The firm&apos;s advisors provide the planning.
        </p>
      </SectionIntro>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Panel label="Situations">
          <TagList
            items={[
              'Equity Compensation',
              'Concentrated Stock',
              'Career Transition',
              'IPO',
              'RSUs',
              'Options',
              'Executive Retirement',
              'Tax Coordination',
              'Estate Planning',
              'Liquidity',
            ]}
          />
        </Panel>
        <Panel label="Profiles defined by">
          <TagList items={['Company Type', 'Seniority', 'Industry', 'Geography', 'Career Stage', 'Planning Need']} />
        </Panel>
      </div>
    </Section>
  )
}

export function WmCoi() {
  return (
    <Section tone="cream" labelledBy="wm-coi-heading">
      <SectionIntro
        id="wm-coi-heading"
        eyebrow="Centers Of Influence"
        title="Become The Wealth Partner Trusted Professionals Think Of First."
        layout="split"
      >
        <p>
          Many of the firm&apos;s future clients already have trusted professionals around them. The aim is a strategic
          professional referral channel built on mutual understanding, with trust in place before a client need
          appears.
        </p>
      </SectionIntro>
      <NetworkOrbit
        center="Your Ideal Household"
        anchor="Wealth Firm"
        prompt="Select a professional to see how a strategic referral relationship forms around a shared client."
        nodes={[
          {
            id: 'cpa',
            label: 'CPAs',
            context: 'See complexity in tax situations long before a client looks for a wealth partner.',
            path: ['Client overlap', 'Mutual understanding', 'Trust', 'Qualified introduction'],
          },
          {
            id: 'estate',
            label: 'Estate Planning Attorneys',
            context: 'Guide families through wealth transfer and legacy decisions.',
            path: ['Shared families', 'Coordinated client experience', 'Trust', 'Qualified introduction'],
          },
          {
            id: 'business',
            label: 'Business Attorneys',
            context: 'Advise owners through ownership change, succession, and sale.',
            path: ['Owner overlap', 'Clear positioning', 'Familiarity', 'Timely introduction'],
          },
          {
            id: 'private',
            label: 'Private Bankers',
            context: 'Serve high-value households with adjacent needs.',
            path: ['Household overlap', 'Complementary role', 'Trust', 'Qualified introduction'],
          },
          {
            id: 'commercial',
            label: 'Commercial Bankers',
            context: 'Often first to see business growth and liquidity events.',
            path: ['Market overlap', 'Professional conversation', 'Familiarity', 'Relevant introduction'],
          },
          {
            id: 'exit',
            label: 'Exit And M&A Advisors',
            context: 'Work with owners before a transaction changes their wealth.',
            path: ['Pre-event relationship', 'Clear role', 'Coordination', 'Qualified introduction'],
          },
          {
            id: 'insurance',
            label: 'Insurance Advisors',
            context: 'Support families and owners on risk and estate needs.',
            path: ['Shared clients', 'Complementary expertise', 'Trust', 'Relevant introduction'],
          },
        ]}
      />
      <div className="flex flex-col gap-4">
        <MonoLabel>COI activation path</MonoLabel>
        <StageExplorer
          label="COI activation path"
          progressive
          stages={[
            { label: 'Identify', body: 'Map high-fit COIs based on client overlap, geography, specialty, and market position.' },
            { label: 'Prioritize', body: 'Focus on the relationships with the strongest strategic fit.' },
            { label: 'Connect', body: 'Open a relevant conversation around the clients and situations both firms serve.' },
            { label: 'Develop', body: "Build familiarity with each other's client experience and expertise." },
            { label: 'Activate', body: 'Create opportunities for qualified introductions when the right client need appears.' },
            { label: 'Measure', body: 'Understand which relationships create conversations and long-term value.' },
          ]}
        />
      </div>
    </Section>
  )
}

export function WmClientMoments() {
  return (
    <Section tone="ink" labelledBy="wm-moments-heading" grid>
      <SectionIntro
        id="wm-moments-heading"
        eyebrow="Client Moments"
        title="The Best Time To Start A Wealth Conversation Is Often When Something Changes."
        dark
        layout="split"
      >
        <p>
          Not every event can be reliably detected. Where relevant data and signals exist, they can help prioritize
          outreach and timing.
        </p>
      </SectionIntro>
      <ProfileExplorer
        dark
        question="What changed?"
        fields={['Moments', 'Why it matters']}
        footnote="Signals inform timing and priority. The advisor determines what is appropriate for each household."
        profiles={[
          {
            id: 'business',
            label: 'Business',
            values: [
              ['Sale', 'Succession', 'New Partner', 'Expansion', 'Ownership Transition'],
              'Business wealth is becoming personal wealth, or the owner is planning for that change.',
            ],
          },
          {
            id: 'career',
            label: 'Career',
            values: [
              ['IPO', 'Equity Vesting', 'Executive Transition', 'Retirement'],
              'Compensation and timing decisions are becoming more consequential.',
            ],
          },
          {
            id: 'wealth',
            label: 'Wealth',
            values: [
              ['Inheritance', 'Large Liquidity Event', 'Concentrated Position', 'Held-Away Assets'],
              'The household has more complexity than it did a year ago.',
            ],
          },
          {
            id: 'family',
            label: 'Family',
            values: [
              ['Marriage', 'Divorce', 'Estate Settlement', 'Generational Wealth Transfer'],
              'Family changes often reshape the planning the household needs.',
            ],
          },
        ]}
      />
    </Section>
  )
}

export function WmExistingRelationships() {
  return (
    <Section tone="paper" labelledBy="wm-existing-heading">
      <SectionIntro
        id="wm-existing-heading"
        eyebrow="Existing Opportunity"
        title="The Next New Client Or Asset Opportunity May Already Be Connected To The Firm."
        layout="split"
      >
        <p>The goal is not blasting the CRM. It is re-entering the right relationships with context.</p>
      </SectionIntro>
      <Panel label="Opportunities already connected to the firm">
        <TagList
          items={[
            'Dormant Prospects',
            'Past Discovery Conversations',
            'Unconverted Introductions',
            'Existing COIs',
            'Client Referral Opportunities',
            'Held-Away Asset Conversations',
            'Relationship Expansion',
            'Family Member Introductions',
            'Past Business Owner Conversations',
            'People Who Asked To Revisit Later',
          ]}
        />
      </Panel>
      <StageExplorer
        label="Existing relationship approach"
        stages={[
          { label: 'Identify', body: 'Identify relevant opportunity.' },
          { label: 'Prioritize', body: 'Prioritize based on fit and timing.' },
          { label: 'Re-Enter', body: 'Re-enter with context.' },
          { label: 'Follow Up', body: 'Follow up consistently.' },
          { label: 'Route', body: 'Route real interest back to the advisor.' },
        ]}
      />
    </Section>
  )
}

export function WmHeldAway() {
  return (
    <Section tone="white" labelledBy="wm-heldaway-heading">
      <SectionIntro
        id="wm-heldaway-heading"
        eyebrow="Relationship Expansion"
        title="Know Where A Broader Client Relationship May Be Possible."
        layout="split"
      >
        <p>
          Held-away asset conversations start with understanding the client&apos;s full financial picture. The advisor
          determines suitability and provides advice.
        </p>
      </SectionIntro>
      <Panel label="Where a broader planning conversation may exist">
        <CheckList
          columns={2}
          items={[
            'Existing clients with financial relationships outside the firm',
            'Known outside accounts',
            'Planning conversations that reveal external assets',
            'Opportunities to review whether consolidation makes sense for the client',
          ]}
        />
      </Panel>
    </Section>
  )
}
