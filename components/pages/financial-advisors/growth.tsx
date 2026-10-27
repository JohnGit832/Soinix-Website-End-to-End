import { CheckList, Contrast, IndustryHero, Panel, Section, SectionIntro, TagList } from '@/components/industry/kit'
import { LoadSplit } from '@/components/industry/load-split'
import { RotatingText } from '@/components/industry/rotating-text'
import { StageExplorer } from '@/components/industry/stage-explorer'
import { ProfileExplorer } from '@/components/industry/profile-explorer'
import { NetworkOrbit } from '@/components/industry/network-orbit'
import { DetailExplorer } from '@/components/industry/detail-explorer'
import { MonoLabel } from '@/components/industry/flow'

export function FaHero() {
  return (
    <IndustryHero
      breadcrumb={[
        { label: 'Industries' },
        { label: 'Financial Services', href: '/financial-services' },
        { label: 'Financial Advisors' },
      ]}
      context="Advisor-led practices"
      eyebrow="Financial Advisor Practice Growth"
      title="Build A Client Acquisition System That Scales Beyond The Advisor's Calendar."
      body="We build and run the systems behind new prospect acquisition, strategic referral relationships, and qualified follow-up, so more of the right conversations reach your practice without growth depending entirely on your personal prospecting."
      secondary={{ label: 'See How The Growth System Works', href: '#acquisition-system' }}
      rotating={
        <RotatingText
          lead="Connect with people looking for"
          phrases={[
            'Financial Planning',
            'Retirement Planning',
            'Investment Management',
            'Business Owner Planning',
            'Executive Wealth Planning',
            'Tax-Aware Planning',
            'Estate Planning',
            'Generational Wealth Planning',
          ]}
        />
      }
      principles={[
        { title: 'Clear Ideal Client', body: 'Build around the people the practice serves best.' },
        { title: 'Dedicated Growth Execution', body: 'Give prospecting and follow-up clear ownership.' },
        { title: 'Advisor-Led Relationship', body: 'Keep discovery, advice, and trust with the advisor.' },
      ]}
      visual={
        <LoadSplit
          person="Advisor"
          system="Revenue Activation"
          states={['Advisor carries it all', 'With a growth system']}
          autoplayMs={2600}
          handoff="Qualified discovery meeting"
          personNote="Advisor time returns to discovery, advice, and clients."
          compact
          tasks={[
            { label: 'Prospect research', owner: 'system' },
            { label: 'Client meetings', owner: 'person' },
            { label: 'COI outreach', owner: 'system' },
            { label: 'Financial planning', owner: 'person' },
            { label: 'Old prospect follow-up', owner: 'system' },
            { label: 'Discovery meetings', owner: 'person' },
            { label: 'CRM updates', owner: 'system' },
            { label: 'Scheduling', owner: 'system' },
            { label: 'Client relationships', owner: 'person' },
          ]}
        />
      }
    />
  )
}

export function FaCapacityProblem() {
  return (
    <Section tone="cream" labelledBy="fa-capacity-heading">
      <SectionIntro
        id="fa-capacity-heading"
        eyebrow="Advisor Capacity"
        title="Client Service And Business Development Compete For The Same Advisor Hours."
        layout="split"
      >
        <p>
          The issue is not that advisors do not care about growth. It is that growth tasks compete with work only the
          advisor can perform. Revenue Activation creates ownership around the work before the advisor conversation.
        </p>
      </SectionIntro>
      <Contrast
        left={{
          label: 'Work only the advisor can do',
          items: [
            'Prepare for client meetings',
            'Deliver financial planning',
            'Review portfolios',
            'Manage client relationships',
            'Handle service issues',
            'Conduct discovery meetings',
            'Run the practice',
          ],
        }}
        right={{
          label: 'Growth work competing for the same hours',
          items: [
            'Develop COIs',
            'Ask for referrals',
            'Research prospects',
            'Prospect new clients',
            'Follow up with old opportunities',
            'Manage the CRM',
          ],
        }}
      />
    </Section>
  )
}

const GAPS = [
  ['Strong advice', 'consistent prospecting'],
  ['Happy clients', 'a repeatable referral system'],
  ['A large network', 'COI introductions'],
  ['A CRM', 'restarted conversations with old prospects'],
  ['A niche', 'more time in front of those people'],
]

export function FaGrowthGap() {
  return (
    <Section tone="white" labelledBy="fa-gap-heading">
      <SectionIntro id="fa-gap-heading" title="A Good Advisor Can Still Have An Inconsistent New Client Pipeline.">
        <p>Practice growth requires deliberate execution. Each of these assets is real. None of them runs itself.</p>
      </SectionIntro>
      <ul className="flex flex-col border-t border-line">
        {GAPS.map(([asset, outcome]) => (
          <li
            key={asset}
            className="grid grid-cols-1 gap-1 border-b border-line py-5 md:grid-cols-[minmax(0,0.7fr)_auto_minmax(0,1fr)] md:items-center md:gap-8"
          >
            <span className="text-2xl font-medium tracking-tight text-ink md:text-3xl">{asset}</span>
            <MonoLabel className="md:text-center">does not automatically create</MonoLabel>
            <span className="text-xl leading-snug text-muted-foreground md:text-2xl">{outcome}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function FaNewDemand() {
  return (
    <Section tone="paper" labelledBy="fa-demand-heading">
      <SectionIntro
        id="fa-demand-heading"
        eyebrow="New Demand"
        title="Prospect Around The Clients You Want More Of, Not Everyone Who Could Hire An Advisor."
        layout="split"
      >
        <p>
          Stronger growth starts with a clear ideal client. Every practice defines its own focus. The system is built
          around yours, not a template niche.
        </p>
      </SectionIntro>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Panel label="Example ideal-client niches">
          <TagList
            items={[
              'Business Owners',
              'Executives',
              'Pre-Retirees',
              'Retirees',
              'Physicians',
              'Dentists',
              'Attorneys',
              'Partners At Professional Firms',
              'Technology Executives',
              'Corporate Leaders',
              'Families Experiencing Wealth Transfer',
              'Other advisor-defined niches',
            ]}
          />
        </Panel>
        <Panel label="The system can be built around">
          <TagList
            items={[
              'Profession',
              'Life Stage',
              'Wealth Complexity',
              'Geography',
              'Service Need',
              'Business Ownership',
              'Career Stage',
              'Financial Transition',
            ]}
          />
        </Panel>
      </div>
      <div className="flex flex-col gap-4">
        <MonoLabel>Ideal client framework</MonoLabel>
        <StageExplorer
          label="Ideal client framework"
          progressive
          stages={[
            { label: 'Who', body: 'Who does the advisor serve best?' },
            { label: 'Why', body: 'What financial problems or transitions make the advisor relevant?' },
            { label: 'When', body: 'What moments make a conversation timely?' },
            { label: 'Where', body: 'Where can those people be reached?' },
            {
              label: 'Who Else Knows Them',
              body: 'Which professionals already have trusted relationships with them? This is where COI development begins.',
            },
          ]}
        />
      </div>
    </Section>
  )
}

export function FaClientProfiles() {
  return (
    <Section tone="white" labelledBy="fa-profiles-heading">
      <SectionIntro
        id="fa-profiles-heading"
        eyebrow="Growth Motions By Client"
        title="Build Each Prospecting Motion Around The Moment That Makes Advice Timely."
        layout="split"
      >
        <p>
          These are situations where a prospect may seek professional advice. We build the acquisition system around
          them. The advice itself stays with the advisor.
        </p>
      </SectionIntro>
      <ProfileExplorer
        question="Which client does the practice want more of?"
        fields={['Growth motion', 'Client situations', 'Built around']}
        footnote="We do not provide financial, tax, legal, or rollover advice. These motions support advisors who serve these clients."
        profiles={[
          {
            id: 'owners',
            label: 'Business Owners',
            values: [
              'Build A Growth Motion Around Business Owners Before A Major Wealth Event.',
              [
                'Business Growth',
                'Succession',
                'Business Sale',
                'Partner Buyout',
                'Ownership Change',
                'Retirement',
                'Personal Wealth Diversification',
                'Tax Coordination',
                'Estate Planning',
                'Exit Planning',
              ],
              ['CPA', 'Business Attorney', 'Commercial Banker', 'Exit Advisor', 'Insurance Professional', 'M&A Professional'],
            ],
          },
          {
            id: 'retirement',
            label: 'Pre-Retirees',
            values: [
              'Reach Prospects When Retirement Planning Moves From Someday To Now.',
              [
                'Retirement within several years',
                'Retirement income planning',
                'Social Security decisions',
                'Pension decisions',
                '401(k) rollover discussions',
                'Tax planning',
                'Estate planning',
                'Investment management',
                'Healthcare considerations',
                'Legacy planning',
              ],
              ['Life stage', 'Retirement timing', 'Employer and industry', 'Geography', 'Planning need'],
            ],
          },
          {
            id: 'executives',
            label: 'Executives',
            values: [
              'Build A Prospecting Motion Around Executives With More Complex Financial Lives.',
              [
                'Equity Compensation',
                'RSUs',
                'Stock Options',
                'Concentrated Stock',
                'Executive Benefits',
                'Career Transition',
                'IPO',
                'Retirement',
                'Tax Coordination',
                'Estate Planning',
              ],
              ['Company types', 'Seniority', 'Geography', 'Industry', 'Career stage', 'Planning need'],
            ],
          },
        ]}
      />
    </Section>
  )
}

export function FaCoi() {
  return (
    <Section tone="cream" labelledBy="fa-coi-heading">
      <SectionIntro
        id="fa-coi-heading"
        eyebrow="Centers Of Influence"
        title="Build A Referral Network That Knows Exactly Who You Help."
        layout="split"
      >
        <p>
          The strategy is not &ldquo;meet more CPAs.&rdquo; It is finding professionals who serve the same ideal
          clients, building mutual understanding and trust, and becoming a credible resource when a relevant client
          need appears.
        </p>
      </SectionIntro>
      <NetworkOrbit
        center="Your Ideal Client"
        anchor="Advisor"
        prompt="Select a professional to see how a deliberate relationship forms around a shared client."
        nodes={[
          {
            id: 'cpa',
            label: 'CPAs',
            context: 'See tax situations that often signal a broader planning need.',
            path: ['Shared clients', 'Clear niche', 'Professional trust', 'Relevant introduction'],
          },
          {
            id: 'estate',
            label: 'Estate Attorneys',
            context: 'Work with families during wealth transfer and legacy decisions.',
            path: ['Overlapping families', 'Mutual understanding', 'Coordinated care', 'Relevant introduction'],
          },
          {
            id: 'business',
            label: 'Business Attorneys',
            context: 'Advise owners through ownership changes, sales, and succession.',
            path: ['Owner overlap', 'Clear positioning', 'Familiarity', 'Timely introduction'],
          },
          {
            id: 'bankers',
            label: 'Bankers',
            context: 'Often first to see liquidity events and business growth.',
            path: ['Market overlap', 'Professional conversation', 'Trust', 'Relevant introduction'],
          },
          {
            id: 'exit',
            label: 'Exit And M&A Advisors',
            context: 'Guide owners toward a transaction that changes their financial life.',
            path: ['Pre-event relationship', 'Clear role', 'Coordination', 'Qualified introduction'],
          },
          {
            id: 'benefits',
            label: 'Benefits And Insurance',
            context: 'Serve executives and owners on adjacent planning needs.',
            path: ['Shared clients', 'Complementary role', 'Familiarity', 'Relevant introduction'],
          },
        ]}
      />
      <div className="flex flex-col gap-4">
        <MonoLabel>COI relationship path</MonoLabel>
        <StageExplorer
          label="COI relationship path"
          progressive
          stages={[
            { label: 'Identify', body: 'Find professionals with meaningful ideal-client overlap.' },
            { label: 'Prioritize', body: 'Focus on fit, market relevance, reputation, and relationship potential.' },
            { label: 'Connect', body: 'Start a relevant professional conversation.' },
            { label: 'Position', body: 'Make clear who the advisor serves and where they add value.' },
            { label: 'Develop', body: 'Build familiarity and trust.' },
            { label: 'Activate', body: 'Create qualified introductions when appropriate.' },
            { label: 'Measure', body: 'Track which relationships create real client conversations.' },
          ]}
        />
      </div>
    </Section>
  )
}

export function FaClientReferrals() {
  return (
    <Section tone="white" labelledBy="fa-referrals-heading">
      <SectionIntro
        id="fa-referrals-heading"
        eyebrow="Client Referrals"
        title="A Happy Client Is Not The Same As A Referral System."
        layout="split"
      >
        <p>
          Client satisfaction matters. Referral growth becomes stronger when the practice is deliberate about how
          introductions happen, so the experience stays relationship-first for the client and the person they know.
        </p>
      </SectionIntro>
      <Panel label="The practice clearly understands">
        <CheckList
          columns={3}
          items={[
            'Who it wants introductions to',
            'When to ask',
            'How to make the introduction easy',
            'How to follow up',
            'How to track the source',
            'How to nurture the relationship',
          ]}
        />
      </Panel>
    </Section>
  )
}

export function FaExistingPipeline() {
  return (
    <Section tone="paper" labelledBy="fa-existing-heading">
      <SectionIntro
        id="fa-existing-heading"
        eyebrow="Existing Opportunity"
        title="Do Not Let Good Discovery Conversations Disappear Into The CRM."
        layout="split"
      >
        <p>The goal is not blasting old contacts. It is reconnecting with the right people for the right reason.</p>
      </SectionIntro>
      <Panel label="Already inside the practice">
        <TagList
          items={[
            'Past Prospects',
            'No-Decision Prospects',
            'People Who Said "Later"',
            'Past Introductions',
            'Dormant COIs',
            'Client Referral Opportunities',
            'Old Discovery Conversations',
            'Event Attendees',
            'People Who Asked To Revisit At Retirement',
            'Business Owners Who Were Not Ready Yet',
          ]}
        />
      </Panel>
      <StageExplorer
        label="Reactivation approach"
        stages={[
          { label: 'Reason', body: 'Identify a legitimate reason to reconnect.' },
          { label: 'Context', body: 'Use what was discussed before and what may have changed.' },
          { label: 'Prioritize', body: 'Focus on the right people first.' },
          { label: 'Follow Up', body: 'Stay consistent without becoming noise.' },
          { label: 'Route', body: 'Return real interest to the advisor.' },
        ]}
      />
    </Section>
  )
}

const PLAY_FIELDS = ['Who is this for?', 'Why would they talk?', 'What would we activate?', 'What gets qualified?', 'Where does the advisor step in?']

export function FaRevenuePlays() {
  return (
    <Section tone="ink" labelledBy="fa-plays-heading" grid>
      <SectionIntro
        id="fa-plays-heading"
        eyebrow="Client Acquisition Plays"
        title="Different Growth Opportunities Need Different Motions."
        dark
        layout="split"
      >
        <p>New demand first, then the relationships the practice already has. Select a play to see how it works.</p>
      </SectionIntro>
      <DetailExplorer
        dark
        label="Practice revenue plays"
        groups={['New Demand', 'Existing Relationships']}
        fields={PLAY_FIELDS}
        items={[
          {
            title: 'Niche Prospect Acquisition',
            group: 'New Demand',
            values: [
              'Prospects inside the niche the practice serves best.',
              'A message that reflects their profession and financial situation.',
              'Research, segmentation, and a niche-specific campaign.',
              'Fit, planning need, and timing.',
              'Discovery meeting.',
            ],
          },
          {
            title: 'Business Owner Acquisition',
            group: 'New Demand',
            values: [
              'Owners approaching growth, succession, or a sale.',
              'Their personal and business wealth are becoming harder to separate.',
              'Owner research and a campaign around the transition ahead.',
              'Ownership situation, timeline, and planning complexity.',
              'Introductory meeting.',
            ],
          },
          {
            title: 'Executive Acquisition',
            group: 'New Demand',
            values: [
              'Executives with equity compensation or a career change.',
              'Complexity is increasing faster than their planning.',
              'Profiles by company, seniority, and planning need.',
              'Compensation complexity and readiness to engage.',
              'Discovery meeting.',
            ],
          },
          {
            title: 'Pre-Retiree Acquisition',
            group: 'New Demand',
            values: [
              'People within several years of retirement.',
              'Retirement has moved from someday to a near-term decision.',
              'Life-stage segmentation and timely outreach.',
              'Timing, planning need, and fit.',
              'Advisor conversation.',
            ],
          },
          {
            title: 'Retirement Prospect Acquisition',
            group: 'New Demand',
            values: [
              'Recent retirees and people in transition.',
              'Income, tax, and legacy questions are now real.',
              'A campaign around the decisions retirement creates.',
              'Situation, need, and genuine interest.',
              'Discovery meeting.',
            ],
          },
          {
            title: 'Strategic COI Development',
            group: 'New Demand',
            values: [
              'Professionals who serve the same ideal clients.',
              'Mutual value and better outcomes for shared clients.',
              'COI mapping and professional conversations.',
              'Overlap, fit, and relationship potential.',
              'Professional relationship meeting.',
            ],
          },
          {
            title: 'Local Market Acquisition',
            group: 'New Demand',
            values: [
              'High-fit prospects in the markets the practice serves.',
              'A local advisor who understands their situation.',
              'Geographic research and a market-specific campaign.',
              'Location, fit, and planning need.',
              'Introductory meeting.',
            ],
          },
          {
            title: 'Professional Referral Network Development',
            group: 'New Demand',
            values: [
              'Referral partners beyond the traditional COI list.',
              'A clear understanding of who the advisor helps.',
              'Network mapping and deliberate relationship development.',
              'Relationship strength and relevance.',
              'Referral partner conversation.',
            ],
          },
          {
            title: 'Dormant Prospect Reactivation',
            group: 'Existing Relationships',
            values: [
              'Prospects who engaged before and went quiet.',
              'Something in their situation may have changed.',
              'Context review and a relevant reason to reconnect.',
              'Renewed interest and current timing.',
              'Discovery meeting.',
            ],
          },
          {
            title: 'Past Discovery Follow-Up',
            group: 'Existing Relationships',
            values: [
              'People who met with the advisor but did not move forward.',
              'The original reasons for talking may still apply.',
              'Thoughtful follow-up grounded in the earlier conversation.',
              'Readiness and remaining fit.',
              'Follow-up meeting.',
            ],
          },
          {
            title: 'Client Referral Activation',
            group: 'Existing Relationships',
            values: [
              'Satisfied clients who know people like them.',
              'They value the relationship and want to help others.',
              'Appropriate moments and an easy introduction path.',
              'Fit of the person introduced.',
              'Introductory meeting.',
            ],
          },
          {
            title: 'COI Reactivation',
            group: 'Existing Relationships',
            values: [
              'Professional relationships that have gone quiet.',
              'Shared clients and renewed relevance.',
              'Re-engagement with context and a clear niche.',
              'Relationship potential.',
              'Professional conversation.',
            ],
          },
          {
            title: 'Existing Relationship Expansion',
            group: 'Existing Relationships',
            values: [
              'Current clients with needs the practice is not yet serving.',
              'Their situation has evolved.',
              'Deliberate outreach around appropriate moments.',
              'Need and interest.',
              'Client review conversation.',
            ],
          },
          {
            title: 'Old Introduction Follow-Up',
            group: 'Existing Relationships',
            values: [
              'Introductions that were made but never progressed.',
              'A trusted source already connected them to the advisor.',
              'Follow-up that honors the original introduction.',
              'Current fit and timing.',
              'Introductory meeting.',
            ],
          },
        ]}
      />
    </Section>
  )
}
