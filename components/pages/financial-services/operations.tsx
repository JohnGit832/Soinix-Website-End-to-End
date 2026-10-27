import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import {
  CheckList,
  OwnershipSplit,
  Panel,
  Section,
  SectionIntro,
  SystemsArchitecture,
} from '@/components/industry/kit'
import { ActivationSystem } from '@/components/industry/activation-system'
import { LayerStack } from '@/components/industry/layer-stack'
import { CapacityRouting } from '@/components/industry/capacity-routing'
import { MonoLabel } from '@/components/industry/flow'

export function FsOperatingSystem() {
  return (
    <Section id="operating-system" tone="ink" labelledBy="operating-heading" grid>
      <SectionIntro
        id="operating-heading"
        eyebrow="The Operating System"
        title="Put A Repeatable System Between Growth Strategy And Advisor Conversation."
        dark
        layout="split"
      >
        <p>
          Revenue Activation gives growth execution an owner. Select a starting point to see how the same system moves
          a new market or an existing relationship toward the advisor.
        </p>
      </SectionIntro>
      <ActivationSystem
        outcomeLabel="Qualified advisor conversation"
        stages={[
          { name: 'Find', body: 'Identify markets, prospects, professional relationships, and existing opportunities.' },
          { name: 'Prioritize', body: 'Choose opportunities based on fit, need, timing, potential value, and advisor capacity.' },
          { name: 'Activate', body: 'Build the right campaign, message, offer, and reason to engage.' },
          { name: 'Follow Up', body: 'Keep relevant opportunities moving.' },
          { name: 'Qualify', body: 'Understand fit, need, timing, and genuine interest.' },
          { name: 'Route', body: 'Move the opportunity to the right advisor.' },
          { name: 'Measure', body: 'Understand what is creating meaningful conversations.' },
        ]}
        scenarios={[
          {
            id: 'market',
            label: 'Ideal Client Market',
            group: 'new',
            steps: [
              'Map a defined client segment',
              'Rank by fit and timing',
              'Launch a relevant campaign',
              'Continue the conversation',
              'Confirm need and interest',
              'Match to the right advisor',
              'Track which segment converts',
            ],
            outcome: 'A discovery conversation with a client the firm wants more of.',
          },
          {
            id: 'coi',
            label: 'COI Relationship',
            group: 'new',
            steps: [
              'Find professionals with overlap',
              'Focus on strategic fit',
              'Open a professional conversation',
              'Stay present and relevant',
              'Recognize a real client need',
              'Introduce the right advisor',
              'See which relationships progress',
            ],
            outcome: 'A trusted introduction when the right client situation appears.',
          },
          {
            id: 'past',
            label: 'Past Prospect',
            group: 'existing',
            steps: [
              'Surface earlier conversations',
              'Review what may have changed',
              'Create a reason to reconnect',
              'Follow up deliberately',
              'Confirm renewed interest',
              'Return to the original advisor',
              'Measure reactivation',
            ],
            outcome: 'A conversation that was already started, moving again.',
          },
          {
            id: 'client',
            label: 'Existing Client',
            group: 'existing',
            steps: [
              'Identify expansion opportunity',
              'Prioritize appropriate moments',
              'Prepare a relevant outreach',
              'Keep the thread moving',
              'Understand the need',
              'Bring in the relationship advisor',
              'Track relationship growth',
            ],
            outcome: 'A deeper relationship with someone who already trusts the firm.',
          },
        ]}
      />
    </Section>
  )
}

export function FsWhatWeRun() {
  return (
    <Section tone="white" labelledBy="run-heading">
      <SectionIntro
        id="run-heading"
        eyebrow="End-To-End Execution"
        title="We Run More Of The Work Before The Advisor Needs To Step In."
        layout="split"
      >
        <p>These are not separate services. They are components of one operating system.</p>
      </SectionIntro>
      <LayerStack
        layers={[
          {
            name: 'Research',
            body: 'Understand the market and the people in it.',
            items: ['Market Research', 'Ideal-Client Research', 'COI Mapping', 'Prospect Research'],
          },
          { name: 'Data', body: 'Build an accurate, usable view of opportunity.', items: ['Data', 'Enrichment', 'Segmentation'] },
          {
            name: 'Campaign',
            body: 'Give each audience a relevant reason to engage.',
            items: ['Campaign Strategy', 'Messaging', 'Personalization'],
          },
          {
            name: 'Execution',
            body: 'Run the activity consistently.',
            items: ['Infrastructure', 'Activation', 'Follow-Up', 'Reply Handling'],
          },
          {
            name: 'Conversion',
            body: 'Move the right opportunity to the right advisor.',
            items: ['Qualification', 'Scheduling', 'Routing'],
          },
          { name: 'Learning', body: 'Understand what works and improve it.', items: ['Attribution', 'Optimization'] },
        ]}
      />
    </Section>
  )
}

export function FsAdvisorOwns() {
  return (
    <Section tone="paper" labelledBy="owns-heading">
      <SectionIntro id="owns-heading" title="Keep Advisor Time Focused On Advice, Trust, And The Relationship." />
      <OwnershipSplit
        bridge="Qualified handoff"
        left={{
          label: 'We run',
          caption: 'The growth work before the advisor conversation.',
          items: ['Research', 'Prospecting', 'Campaigns', 'Follow-Up', 'COI Development', 'Qualification', 'Scheduling', 'Measurement'],
        }}
        right={{
          label: 'The firm owns',
          caption: 'Everything that depends on advice and trust.',
          items: [
            'Discovery',
            'Financial Planning',
            'Advice',
            'Recommendations',
            'Relationship Building',
            'Client Conversion',
            'Onboarding',
            'Client Experience',
            'Ongoing Advice',
          ],
        }}
        note="We do not provide investment advice."
      />
    </Section>
  )
}

export function FsCapacity() {
  return (
    <Section tone="white" labelledBy="capacity-heading">
      <SectionIntro
        id="capacity-heading"
        eyebrow="Capacity"
        title="Growth Should Increase High-Value Advisor Conversations, Not Multiply Low-Value Advisor Tasks."
        layout="split"
      >
        <p>
          The goal is not simply increasing volume. Qualified opportunities should be paced and routed around how the
          firm is actually staffed.
        </p>
      </SectionIntro>
      <CapacityRouting
        criteria={[
          'Advisor calendars',
          'Discovery capacity',
          'Client-service capacity',
          'Specialization',
          'Geography',
          'Client fit',
          'Practice capacity',
          'Team structure',
        ]}
        members={[
          { label: 'Senior Advisor', focus: 'Business owners and complex households', capacity: 'Limited' },
          { label: 'Lead Advisor', focus: 'Executives and pre-retirees', capacity: 'Available' },
          { label: 'Associate Advisor', focus: 'Emerging affluent families', capacity: 'Available' },
        ]}
        incoming={[
          {
            id: 'owner',
            label: 'Business owner introduction',
            attributes: ['COI referral', 'Planning complexity'],
            routeTo: 0,
            reason: 'Specialization outweighs a limited calendar, so the meeting is paced rather than rushed.',
          },
          {
            id: 'executive',
            label: 'Executive approaching retirement',
            attributes: ['Ideal client market', 'Clear timing'],
            routeTo: 1,
            reason: 'Strong client fit and available discovery capacity.',
          },
          {
            id: 'family',
            label: 'Young family, past prospect',
            attributes: ['Reactivated', 'Growing need'],
            routeTo: 2,
            reason: 'Fit matches this advisor and keeps senior time on higher complexity.',
          },
        ]}
      />
    </Section>
  )
}

export function FsVisibility() {
  return (
    <Section tone="cream" labelledBy="visibility-heading">
      <SectionIntro
        id="visibility-heading"
        eyebrow="Leadership"
        title="Know Which Growth Motions Are Actually Creating Opportunity."
        layout="split"
      >
        <p>
          Visibility and attribution give leadership a clear view of where growth is coming from, and where it is
          stalling.
        </p>
      </SectionIntro>
      <Panel label="Questions leadership should be able to answer">
        <CheckList
          columns={2}
          items={[
            'Which ideal-client markets are creating conversations?',
            'Which COI relationships are progressing?',
            'Which referral channels are becoming productive?',
            'Which campaigns are generating qualified opportunities?',
            'Which existing opportunities are becoming active?',
            'Where is follow-up breaking down?',
            'Which advisors have capacity?',
            'Which growth motions deserve more investment?',
          ]}
        />
      </Panel>
    </Section>
  )
}

const MODELS = [
  {
    label: 'Wealth Management',
    title: 'Build Organic Growth Across High-Value Households, AUM Opportunities, COIs, And Client Relationships.',
    body: 'For independent RIAs and wealth management firms focused on growing new client relationships, net new assets, business-owner opportunities, professional referral channels, and deeper relationships across the firm.',
    cta: 'Explore Wealth Management',
    href: '/financial-services/wealth-management',
    signals: ['High-value households', 'Net new assets', 'Business owners', 'Firm-wide relationships'],
    dark: true,
  },
  {
    label: 'Financial Advisors',
    title: 'Build A Stronger Client Acquisition System Around The Advisor And The Practice.',
    body: 'For advisor-led practices that want more consistent prospecting, stronger COI and referral development, better follow-up, and more qualified discovery opportunities without making the advisor personally own every growth task.',
    cta: 'Explore Financial Advisors',
    href: '/financial-services/financial-advisors',
    signals: ['Consistent prospecting', 'COI and referrals', 'Better follow-up', 'Qualified discovery'],
    dark: false,
  },
]

export function FsChooseModel() {
  return (
    <Section tone="white" labelledBy="model-heading">
      <SectionIntro id="model-heading" eyebrow="Financial Services" title="Different Advisory Businesses Need Different Growth Systems." />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
        {MODELS.map((m) => (
          <Link
            key={m.href}
            href={m.href}
            className={
              m.dark
                ? 'group flex flex-col gap-8 rounded-2xl bg-brand p-8 text-background transition-transform duration-300 hover:-translate-y-1 lg:p-10'
                : 'group flex flex-col gap-8 rounded-2xl border border-line bg-paper p-8 text-ink transition-transform duration-300 hover:-translate-y-1 lg:p-10'
            }
          >
            <MonoLabel dark={m.dark}>{m.label}</MonoLabel>
            <h3 className="text-2xl font-medium leading-snug tracking-tight text-balance md:text-3xl">{m.title}</h3>
            <p className={m.dark ? 'text-[16.5px] leading-relaxed text-background/75' : 'text-[16.5px] leading-relaxed text-muted-foreground'}>
              {m.body}
            </p>
            <ul className="flex flex-wrap gap-2">
              {m.signals.map((s) => (
                <li
                  key={s}
                  className={
                    m.dark
                      ? 'rounded-md border border-background/20 px-3 py-1.5 text-[14px] text-background/85'
                      : 'rounded-md border border-line bg-background px-3 py-1.5 text-[14px] text-ink/85'
                  }
                >
                  {s}
                </li>
              ))}
            </ul>
            <span className="mt-auto inline-flex items-center gap-2 text-[16px] font-medium">
              {m.cta}
              <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  )
}

export function FsInfrastructure() {
  return (
    <Section tone="green" labelledBy="infra-heading">
      <SectionIntro
        id="infra-heading"
        eyebrow="Built Around The Firm"
        title="Build Around The Systems Already Supporting The Client Experience."
        dark
        layout="split"
      >
        <p>No forced rip-and-replace. We work with what the firm already uses and connect it where it helps.</p>
      </SectionIntro>
      <SystemsArchitecture
        inputs={[
          { label: 'Records', items: ['CRM', 'Prospect Records', 'COI Records', 'Existing Data'] },
          { label: 'Communication', items: ['Email', 'Calendar', 'Scheduling'] },
          { label: 'Firm Assets', items: ['Client Segmentation', 'Approved Content', 'Marketing Systems'] },
        ]}
        core={{ label: 'Revenue Activation', items: ['Research', 'Activation', 'Follow-Up', 'Qualification', 'Routing', 'Attribution'] }}
        output={{ label: 'Advisor', items: ['Qualified conversations', 'Clear context', 'Visible attribution'] }}
      />
      <CheckList
        dark
        columns={2}
        items={[
          'APIs and automation where useful',
          'Minimum necessary access',
          'Clear ownership',
          'Transparent attribution',
        ]}
      />
    </Section>
  )
}

export function FsGovernance() {
  return (
    <Section tone="paper" labelledBy="governance-heading">
      <SectionIntro
        id="governance-heading"
        eyebrow="Financial Services Execution"
        title="Build Growth With The Review Discipline Financial Services Requires."
        layout="split"
      >
        <p>
          Financial-services communication often requires more control than ordinary B2B prospecting. The growth
          system is built to work within the firm&apos;s review process.
        </p>
      </SectionIntro>
      <Panel label="The growth system can support">
        <CheckList
          columns={3}
          items={[
            'Firm review',
            'Approved language',
            'Controlled personalization',
            'Campaign checkpoints',
            'Message records',
            'Clear handoff boundaries',
            'Approved offers',
          ]}
        />
      </Panel>
    </Section>
  )
}
