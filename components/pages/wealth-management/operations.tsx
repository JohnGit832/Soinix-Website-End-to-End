import { CheckList, OwnershipSplit, Panel, Section, SectionIntro, SystemsArchitecture } from '@/components/industry/kit'
import { ActivationSystem } from '@/components/industry/activation-system'
import { DetailExplorer } from '@/components/industry/detail-explorer'
import { LayerStack } from '@/components/industry/layer-stack'
import { LoadSplit } from '@/components/industry/load-split'

const PLAY_FIELDS = ['What opportunity are we looking for?', 'Why might it matter?', 'What would we activate?', 'Where does the advisor enter?']

export function WmRevenuePlays() {
  return (
    <Section tone="cream" labelledBy="wm-plays-heading">
      <SectionIntro
        id="wm-plays-heading"
        eyebrow="Wealth Management Revenue Plays"
        title="Build The Growth Motion Around The Opportunity."
        layout="split"
      >
        <p>New demand first, then the relationships already connected to the firm. Select a play to see how it works.</p>
      </SectionIntro>
      <DetailExplorer
        label="Wealth management revenue plays"
        groups={['New Demand', 'Existing Relationships']}
        fields={PLAY_FIELDS}
        items={[
          {
            title: 'Business Owner Acquisition',
            group: 'New Demand',
            values: [
              'Owners approaching succession, a sale, or an ownership transition.',
              'Concentrated business equity often becomes the household’s largest planning question.',
              'Owner research, COI relationships, and a campaign built around the transition ahead.',
              'Introductory conversation before the liquidity event.',
            ],
          },
          {
            title: 'Executive Wealth Acquisition',
            group: 'New Demand',
            values: [
              'Executives with equity compensation, concentrated stock, or a career change.',
              'Their wealth is growing more complex than their current planning.',
              'Profiles by company, seniority, and planning need with timely outreach.',
              'Discovery conversation.',
            ],
          },
          {
            title: 'Pre-Retiree Acquisition',
            group: 'New Demand',
            values: [
              'Households within several years of retirement.',
              'Retirement has moved from a long-term goal to a near-term decision.',
              'Life-stage segmentation and a campaign around the decisions ahead.',
              'Discovery conversation.',
            ],
          },
          {
            title: 'Retirement Income Planning Campaigns',
            group: 'New Demand',
            values: [
              'Retirees and near-retirees thinking about income.',
              'Income, tax, and legacy questions become concrete.',
              'Education-led campaigns around retirement income planning.',
              'Planning conversation.',
            ],
          },
          {
            title: 'Liquidity Event Acquisition',
            group: 'New Demand',
            values: [
              'Households after a sale, IPO, or other liquidity event.',
              'New liquidity often prompts a broader look at the household’s plan.',
              'Signal-informed prioritization and relevant outreach where data exists.',
              'Introductory conversation.',
            ],
          },
          {
            title: 'Strategic COI Development',
            group: 'New Demand',
            values: [
              'Professionals who serve the same ideal households.',
              'Shared clients benefit from coordinated advice.',
              'COI mapping, professional conversations, and relationship development.',
              'Professional relationship meeting.',
            ],
          },
          {
            title: 'Professional Niche Acquisition',
            group: 'New Demand',
            values: [
              'Physicians, partners at professional firms, and other defined niches.',
              'Their careers create specific planning needs.',
              'Niche research and a message that reflects their profession.',
              'Discovery conversation.',
            ],
          },
          {
            title: 'High-Net-Worth Market Development',
            group: 'New Demand',
            values: [
              'High-fit households in the markets the firm serves.',
              'A firm built for their complexity, close to where they live.',
              'Market mapping and a market-specific acquisition motion.',
              'Introductory conversation.',
            ],
          },
          {
            title: 'Dormant Prospect Reactivation',
            group: 'Existing Relationships',
            values: [
              'Prospects who engaged before and went quiet.',
              'Something in their situation may have changed.',
              'Context review and a legitimate reason to reconnect.',
              'Discovery conversation.',
            ],
          },
          {
            title: 'Past Discovery Follow-Up',
            group: 'Existing Relationships',
            values: [
              'Households that met with an advisor but did not move forward.',
              'The original reasons for the conversation may still apply.',
              'Follow-up grounded in the earlier discussion.',
              'Follow-up meeting with the original advisor.',
            ],
          },
          {
            title: 'Client Referral Activation',
            group: 'Existing Relationships',
            values: [
              'Satisfied clients connected to households like theirs.',
              'Trust in the firm is already established.',
              'Appropriate moments and an easy, relationship-first introduction path.',
              'Introductory conversation.',
            ],
          },
          {
            title: 'COI Reactivation',
            group: 'Existing Relationships',
            values: [
              'Professional relationships that have gone quiet.',
              'Shared clients and renewed relevance.',
              'Re-engagement with context and a clear view of who the firm serves.',
              'Professional conversation.',
            ],
          },
          {
            title: 'Held-Away Asset Review',
            group: 'Existing Relationships',
            values: [
              'Clients with known financial relationships outside the firm.',
              'A broader planning conversation may serve the client better.',
              'Prioritized outreach around a planning review.',
              'Review conversation. The advisor determines suitability.',
            ],
          },
          {
            title: 'Relationship Expansion',
            group: 'Existing Relationships',
            values: [
              'Households with needs the firm is not yet serving.',
              'Their situation has evolved since onboarding.',
              'Deliberate outreach around appropriate moments.',
              'Client review conversation.',
            ],
          },
          {
            title: 'Family Relationship Development',
            group: 'Existing Relationships',
            values: [
              'Adult children and family members of existing clients.',
              'Generational wealth transfer is easier with an established relationship.',
              'Family introductions and multi-generational planning conversations.',
              'Family meeting.',
            ],
          },
        ]}
      />
    </Section>
  )
}

export function WmOperatingSystem() {
  return (
    <Section id="wm-operating-system" tone="ink" labelledBy="wm-system-heading" grid>
      <SectionIntro
        id="wm-system-heading"
        eyebrow="The Operating System"
        title="Put A Repeatable System Behind New Client Development."
        dark
        layout="split"
      >
        <p>Select a starting point to see how the same system moves new demand and existing relationships toward the advisor.</p>
      </SectionIntro>
      <ActivationSystem
        outcomeLabel="Qualified advisor conversation"
        stages={[
          { name: 'Find', body: 'Identify ideal-client markets, COIs, client moments, prospects, and existing opportunities.' },
          { name: 'Prioritize', body: 'Determine where fit, timing, need, potential value, and advisor capacity align.' },
          { name: 'Activate', body: 'Build the campaign, message, offer, and reason to start a conversation.' },
          { name: 'Follow Up', body: 'Keep relevant opportunities moving consistently.' },
          { name: 'Qualify', body: 'Understand fit, need, timing, and genuine interest.' },
          { name: 'Route', body: 'Put the opportunity in front of the right advisor.' },
          { name: 'Measure', body: 'Track which markets, relationships, and campaigns create meaningful conversations.' },
        ]}
        scenarios={[
          {
            id: 'owner',
            label: 'Business Owner',
            group: 'new',
            steps: [
              'Map owners approaching transition',
              'Rank by fit and timing',
              'Launch an owner-focused campaign',
              'Build the relationship early',
              'Confirm need and interest',
              'Match to the right advisor',
              'Track which owner markets convert',
            ],
            outcome: 'A relationship that exists before the liquidity event.',
          },
          {
            id: 'coi',
            label: 'COI Relationship',
            group: 'new',
            steps: [
              'Find COIs with client overlap',
              'Focus on strategic fit',
              'Open a professional conversation',
              'Develop mutual understanding',
              'Recognize the right client need',
              'Introduce the right advisor',
              'See which COIs create value',
            ],
            outcome: 'A qualified introduction from a trusted professional.',
          },
          {
            id: 'past',
            label: 'Past Discovery',
            group: 'existing',
            steps: [
              'Surface earlier discovery conversations',
              'Review what may have changed',
              'Create a reason to reconnect',
              'Follow up deliberately',
              'Confirm renewed interest',
              'Return to the original advisor',
              'Measure reactivation',
            ],
            outcome: 'A household that was already in conversation, moving again.',
          },
          {
            id: 'heldaway',
            label: 'Held-Away Review',
            group: 'existing',
            steps: [
              'Identify known outside accounts',
              'Prioritize appropriate households',
              'Prepare a planning review outreach',
              'Keep the thread moving',
              'Understand the client’s goals',
              'Bring in the relationship advisor',
              'Track relationship expansion',
            ],
            outcome: 'A broader planning conversation where it serves the client.',
          },
        ]}
      />
    </Section>
  )
}

export function WmWhatWeOwn() {
  return (
    <Section tone="white" labelledBy="wm-own-heading">
      <SectionIntro
        id="wm-own-heading"
        eyebrow="End-To-End Execution"
        title="We Run The Work Behind The Advisor Conversation."
        layout="split"
      >
        <p>These are layers inside one Revenue Activation system, not a list of services.</p>
      </SectionIntro>
      <LayerStack
        layers={[
          {
            name: 'Research',
            body: 'Understand the markets and relationships around the ideal household.',
            items: ['Market Mapping', 'Ideal-Client Research', 'COI Research', 'Prospect Research'],
          },
          {
            name: 'Data',
            body: 'Build an accurate, prioritized view of opportunity.',
            items: ['Data', 'Enrichment', 'Opportunity Signals', 'Segmentation'],
          },
          {
            name: 'Campaign',
            body: 'Give each household a relevant reason to talk.',
            items: ['Campaign Strategy', 'Messaging', 'Personalization'],
          },
          {
            name: 'Execution',
            body: 'Run the work consistently.',
            items: ['Infrastructure', 'Campaign Execution', 'Follow-Up', 'Reply Handling'],
          },
          { name: 'Conversion', body: 'Move the right opportunity to the right advisor.', items: ['Qualification', 'Routing'] },
          { name: 'Learning', body: 'Understand what creates organic growth.', items: ['Attribution', 'Optimization'] },
        ]}
      />
    </Section>
  )
}

export function WmFirmOwns() {
  return (
    <Section tone="paper" labelledBy="wm-firm-heading">
      <SectionIntro id="wm-firm-heading" title="Your Advisors Stay Focused Where Their Expertise Matters Most." />
      <OwnershipSplit
        bridge="Qualified advisor conversation"
        left={{
          label: 'We run',
          caption: 'The business development work before the advisor.',
          items: ['Market Mapping', 'Prospecting', 'COI Development', 'Campaigns', 'Follow-Up', 'Qualification', 'Routing', 'Attribution'],
        }}
        right={{
          label: 'The firm owns',
          caption: 'Everything that depends on advice and trust.',
          items: [
            'Discovery',
            'Financial Planning',
            'Investment Advice',
            'Portfolio Recommendations',
            'Tax And Estate Coordination As Applicable',
            'Relationship Building',
            'Client Conversion',
            'Onboarding',
            'Ongoing Client Experience',
          ],
        }}
        note="We do not provide investment advice."
      />
    </Section>
  )
}

export function WmAdvisorCapacity() {
  return (
    <Section tone="white" labelledBy="wm-capacity-heading">
      <SectionIntro
        id="wm-capacity-heading"
        eyebrow="Advisor Productivity"
        title="Growth Should Add Advisor Opportunities, Not Add Another Full-Time Job To Every Advisor."
        layout="split"
      >
        <p>
          The goal is not removing advisors from business development. Their credibility remains important. The goal is
          using advisor time where it has the highest value.
        </p>
      </SectionIntro>
      <LoadSplit
        person="Senior Advisor"
        system="Revenue Activation"
        states={['Advisor carries it all', 'With a growth system']}
        handoff="Qualified advisor conversation"
        personNote="Advisor time goes to the conversations where credibility matters."
        tasks={[
          { label: 'Manual prospecting', owner: 'system' },
          { label: 'Important prospect conversations', owner: 'person' },
          { label: 'Research', owner: 'system' },
          { label: 'Professional relationships', owner: 'person' },
          { label: 'List building', owner: 'system' },
          { label: 'Discovery', owner: 'person' },
          { label: 'Chasing replies', owner: 'system' },
          { label: 'Advice and trust', owner: 'person' },
          { label: 'Repetitive follow-up', owner: 'system' },
          { label: 'Closing the relationship', owner: 'person' },
        ]}
      />
    </Section>
  )
}

export function WmInfrastructure() {
  return (
    <Section tone="green" labelledBy="wm-infra-heading" grid>
      <SectionIntro
        id="wm-infra-heading"
        eyebrow="Built Around The Firm"
        title="Fit The Growth System Into The Firm, Not The Firm Into The Growth System."
        dark
        layout="split"
      >
        <p>No forced rip-and-replace. We work with the systems the firm already uses and connect them where it helps.</p>
      </SectionIntro>
      <SystemsArchitecture
        inputs={[
          { label: 'Records', items: ['CRM', 'Existing Prospect Data', 'COI Records', 'Client Segmentation'] },
          { label: 'Communication', items: ['Email', 'Calendar', 'Marketing Technology'] },
          { label: 'Firm Assets', items: ['Approved Content', 'Firm Workflows'] },
        ]}
        core={{ label: 'Revenue Activation', items: ['Research', 'Activation', 'Follow-Up', 'Qualification', 'Routing', 'Attribution'] }}
        output={{ label: 'Advisor', items: ['Qualified conversations', 'Clear context', 'Visible attribution'] }}
      />
      <CheckList
        dark
        columns={2}
        items={['Minimum necessary access', 'APIs and automation where useful', 'Clear ownership', 'Transparent attribution']}
      />
    </Section>
  )
}

export function WmGovernance() {
  return (
    <Section tone="paper" labelledBy="wm-governance-heading">
      <SectionIntro
        id="wm-governance-heading"
        eyebrow="Review And Governance"
        title="Build Growth Without Treating Financial Services Like Ordinary B2B Outreach."
        layout="split"
      >
        <p>
          Financial services communication requires care. Campaigns are built to work within the firm&apos;s review
          process.
        </p>
      </SectionIntro>
      <Panel label="The system supports">
        <CheckList
          columns={3}
          items={[
            'Pre-approved language',
            'Campaign review before launch',
            'Clear records of messaging',
            'Firm-approved offers',
            'Controlled personalization',
            'Clear handoff boundaries',
          ]}
        />
      </Panel>
    </Section>
  )
}

export function WmLeadership() {
  return (
    <Section tone="cream" labelledBy="wm-leadership-heading">
      <SectionIntro
        id="wm-leadership-heading"
        eyebrow="For Firm Leadership"
        title="See Which Growth Motions Are Actually Creating New Client Opportunities."
        layout="split"
      >
        <p>Attribution and measurement give leadership a clear view of where organic growth is coming from.</p>
      </SectionIntro>
      <Panel label="Questions the system should answer">
        <CheckList
          columns={2}
          items={[
            'Which ideal-client markets are responding?',
            'Which COI relationships are becoming productive?',
            'Which campaigns create qualified advisor conversations?',
            'Which existing opportunities are being reactivated?',
            'Which advisors have capacity for new opportunities?',
            'Where is growth activity stalling?',
            'What should we invest in next?',
          ]}
        />
      </Panel>
    </Section>
  )
}
