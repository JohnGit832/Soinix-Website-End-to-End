import { CheckList, OwnershipSplit, Panel, Section, SectionIntro, SystemsArchitecture } from '@/components/industry/kit'
import { ActivationSystem } from '@/components/industry/activation-system'
import { LayerStack } from '@/components/industry/layer-stack'
import { CapacityRouting } from '@/components/industry/capacity-routing'

export function FaAcquisitionSystem() {
  return (
    <Section id="acquisition-system" tone="green" labelledBy="fa-system-heading" grid>
      <SectionIntro
        id="fa-system-heading"
        eyebrow="The Client Acquisition System"
        title="Put A Repeatable Process Behind The Work Before Discovery."
        dark
        layout="split"
      >
        <p>
          Every opportunity moves through the same system toward a discovery meeting. Select a starting point to see
          how it works for new demand and for relationships the practice already has.
        </p>
      </SectionIntro>
      <ActivationSystem
        outcomeLabel="Discovery meeting"
        stages={[
          { name: 'Find', body: 'Identify high-fit prospects, COIs, and existing opportunities.' },
          { name: 'Prioritize', body: 'Choose who deserves attention based on fit, need, timing, and practice capacity.' },
          { name: 'Activate', body: 'Create the right message, offer, and reason to talk.' },
          { name: 'Follow Up', body: 'Keep relevant opportunities moving.' },
          { name: 'Qualify', body: 'Understand fit, timing, need, and genuine interest.' },
          { name: 'Route', body: 'Get the right prospect to the right advisor.' },
          { name: 'Measure', body: 'Understand which markets, referrals, and campaigns create discovery meetings.' },
        ]}
        scenarios={[
          {
            id: 'niche',
            label: 'Niche Prospect',
            group: 'new',
            steps: [
              'Research the defined niche',
              'Rank by fit and timing',
              'Launch a niche-specific campaign',
              'Continue the conversation',
              'Confirm planning need',
              'Schedule with the advisor',
              'Track which niche responds',
            ],
            outcome: 'A discovery meeting with a client the practice wants more of.',
          },
          {
            id: 'coi',
            label: 'COI Introduction',
            group: 'new',
            steps: [
              'Map professionals with overlap',
              'Focus on strategic fit',
              'Open a professional conversation',
              'Stay relevant over time',
              'Recognize a client need',
              'Introduce the advisor',
              'See which COIs progress',
            ],
            outcome: 'A trusted introduction when the right client situation appears.',
          },
          {
            id: 'past',
            label: 'Past Prospect',
            group: 'existing',
            steps: [
              'Surface old discovery conversations',
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
            id: 'referral',
            label: 'Client Referral',
            group: 'existing',
            steps: [
              'Identify clients who know ideal prospects',
              'Choose appropriate moments',
              'Make the introduction easy',
              'Follow up with care',
              'Understand fit',
              'Book the introductory meeting',
              'Track the referral source',
            ],
            outcome: 'An introductory meeting with someone a client trusts the advisor with.',
          },
        ]}
      />
    </Section>
  )
}

export function FaWhatWeOwn() {
  return (
    <Section tone="white" labelledBy="fa-own-heading">
      <SectionIntro
        id="fa-own-heading"
        eyebrow="End-To-End Execution"
        title="We Own More Of The Work Before The Advisor Needs To Step In."
        layout="split"
      >
        <p>These are parts of one client acquisition system, not a menu of services.</p>
      </SectionIntro>
      <LayerStack
        layers={[
          {
            name: 'Research',
            body: 'Understand the ideal client and where to find them.',
            items: ['Ideal-Client Research', 'Market Mapping', 'Prospect Research', 'COI Mapping'],
          },
          { name: 'Data', body: 'Build an accurate view of opportunity.', items: ['Data', 'Enrichment', 'Segmentation'] },
          {
            name: 'Campaign',
            body: 'Give each prospect a relevant reason to talk.',
            items: ['Campaign Strategy', 'Messaging', 'Personalization'],
          },
          {
            name: 'Execution',
            body: 'Run the work consistently.',
            items: ['Infrastructure', 'Campaign Execution', 'Follow-Up', 'Reply Handling'],
          },
          {
            name: 'Conversion',
            body: 'Move the right prospect to the advisor.',
            items: ['Qualification', 'Scheduling', 'Routing'],
          },
          { name: 'Learning', body: 'Understand what works and improve it.', items: ['Attribution', 'Optimization'] },
        ]}
      />
    </Section>
  )
}

export function FaAdvisorOwns() {
  return (
    <Section tone="paper" labelledBy="fa-advisor-heading">
      <SectionIntro id="fa-advisor-heading" title="Keep Advisor Time Focused On High-Value Human Work." />
      <OwnershipSplit
        bridge="Qualified discovery meeting"
        left={{
          label: 'We own',
          caption: 'The growth work before discovery.',
          items: ['Research', 'Prospecting', 'COI Development', 'Campaigns', 'Follow-Up', 'Qualification', 'Scheduling', 'Attribution'],
        }}
        right={{
          label: 'The advisor owns',
          caption: 'Everything that depends on advice and trust.',
          items: [
            'Discovery',
            'Financial Planning',
            'Investment Advice',
            'Recommendations',
            'Relationship Building',
            'Trust',
            'Client Conversion',
            'Onboarding',
            'Ongoing Advice',
            'Client Experience',
          ],
        }}
        note="We do not provide investment advice."
      />
    </Section>
  )
}

export function FaOwnerView() {
  return (
    <Section tone="cream" labelledBy="fa-owner-heading">
      <SectionIntro
        id="fa-owner-heading"
        eyebrow="Run The Practice Like A Growth Business"
        title="Know Where New Client Growth Is Actually Coming From."
        layout="split"
      >
        <p>Visibility and attribution show which growth motions deserve more of the practice&apos;s attention.</p>
      </SectionIntro>
      <Panel label="Questions the practice owner should be able to answer">
        <CheckList
          columns={2}
          items={[
            'Which niches are responding?',
            'Which COIs are becoming productive?',
            'Which referral sources create good prospects?',
            'Which campaigns create discovery meetings?',
            'Which prospects are moving?',
            'Where is follow-up breaking down?',
            'How much advisor capacity is available?',
            'What growth motion deserves more investment?',
          ]}
        />
      </Panel>
    </Section>
  )
}

export function FaPracticeCapacity() {
  return (
    <Section tone="white" labelledBy="fa-pacing-heading">
      <SectionIntro
        id="fa-pacing-heading"
        eyebrow="Practice Capacity"
        title="Do Not Create More Prospecting Work Than The Practice Can Handle."
        layout="split"
      >
        <p>
          More activity is not always better. New client acquisition should match the practice&apos;s ability to
          deliver a strong client experience.
        </p>
      </SectionIntro>
      <CapacityRouting
        criteria={[
          'Advisor calendars',
          'Discovery capacity',
          'Onboarding capacity',
          'Client service capacity',
          'Qualification',
          'Routing',
          'Growth pacing',
        ]}
        members={[
          { label: 'Lead Advisor', focus: 'Business owners and executives', capacity: 'Limited' },
          { label: 'Associate Advisor', focus: 'Pre-retirees and families', capacity: 'Available' },
          { label: 'Onboarding Team', focus: 'New client setup', capacity: 'Available' },
        ]}
        incoming={[
          {
            id: 'owner',
            label: 'Business owner, COI introduction',
            attributes: ['Planning complexity', 'Exit in 2 to 3 years'],
            routeTo: 0,
            reason: 'Fit requires the lead advisor, so the meeting is paced to protect discovery quality.',
          },
          {
            id: 'preretiree',
            label: 'Pre-retiree, niche campaign',
            attributes: ['Clear timing', 'Strong fit'],
            routeTo: 1,
            reason: 'Strong fit and available discovery capacity.',
          },
          {
            id: 'converted',
            label: 'Client ready to onboard',
            attributes: ['Decision made', 'Paperwork next'],
            routeTo: 2,
            reason: 'Onboarding capacity is open, keeping advisor hours on discovery.',
          },
        ]}
      />
    </Section>
  )
}

export function FaInfrastructure() {
  return (
    <Section tone="ink" labelledBy="fa-infra-heading" grid>
      <SectionIntro
        id="fa-infra-heading"
        eyebrow="Systems And Infrastructure"
        title="Build Around The Systems Already Running The Practice."
        dark
        layout="split"
      >
        <p>No forced rip-and-replace. APIs and automation where useful, with clear ownership and preserved attribution.</p>
      </SectionIntro>
      <SystemsArchitecture
        inputs={[
          { label: 'Records', items: ['CRM', 'Prospect Records', 'COI Records', 'Client Segments'] },
          { label: 'Communication', items: ['Email', 'Calendar', 'Scheduling'] },
          { label: 'Practice Assets', items: ['Approved Content', 'Marketing Systems'] },
        ]}
        core={{ label: 'Revenue Activation', items: ['Research', 'Activation', 'Follow-Up', 'Qualification', 'Routing', 'Attribution'] }}
        output={{ label: 'Advisor', items: ['Discovery meetings', 'Clear context', 'Visible attribution'] }}
      />
    </Section>
  )
}

export function FaGovernance() {
  return (
    <Section tone="paper" labelledBy="fa-governance-heading">
      <SectionIntro
        id="fa-governance-heading"
        eyebrow="Review And Governance"
        title="Financial Advisor Prospecting Needs More Care Than Ordinary B2B Outreach."
        layout="split"
      >
        <p>
          The firm&apos;s own review requirements matter. Campaigns are built to work within the firm&apos;s review
          process.
        </p>
      </SectionIntro>
      <Panel label="Campaigns can be structured around">
        <CheckList
          columns={3}
          items={[
            'Approved language',
            'Review checkpoints',
            'Controlled personalization',
            'Message records',
            'Clear handoff boundaries',
            'Firm-approved offers',
          ]}
        />
      </Panel>
    </Section>
  )
}
