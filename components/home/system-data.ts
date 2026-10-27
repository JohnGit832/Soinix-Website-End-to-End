export type SystemInput = {
  id: string
  label: string
  group: 'new-demand' | 'existing'
  description: string
  context: string[]
}

export const SYSTEM_INPUTS: SystemInput[] = [
  {
    id: 'target-accounts',
    label: 'Target Accounts',
    group: 'new-demand',
    description: 'Organizations and people you want to win.',
    context: [
      'Identify the right accounts',
      'Build the campaign',
      'Create the conversation',
      'Qualify the response',
      'Route the opportunity',
    ],
  },
  {
    id: 'referral-partners',
    label: 'Strategic Referral Partners',
    group: 'new-demand',
    description: 'Professionals who can repeatedly introduce strong opportunities.',
    context: [
      'Identify high-fit partners',
      'Start the relationship',
      'Build trust',
      'Create introductions',
      'Track referral activity',
    ],
  },
  {
    id: 'new-markets',
    label: 'New Markets',
    group: 'new-demand',
    description: 'Segments, niches, and geographies worth entering next.',
    context: [
      'Select the segment',
      'Research the market',
      'Build the entry campaign',
      'Start the conversations',
      'Qualify and route',
    ],
  },
  {
    id: 'market-signals',
    label: 'Market Signals',
    group: 'new-demand',
    description: 'Timing and business events that create a reason to talk.',
    context: [
      'Monitor relevant signals',
      'Identify the timing',
      'Build the reason to engage',
      'Start the conversation',
      'Qualify the response',
    ],
  },
  {
    id: 'past-opportunities',
    label: 'Past Opportunities',
    group: 'existing',
    description: 'Prospects who showed interest and then stalled.',
    context: [
      'Find stalled opportunities',
      'Understand what changed',
      'Reopen the conversation',
      'Qualify current interest',
      'Route to the right owner',
    ],
  },
  {
    id: 'existing-clients',
    label: 'Existing Clients',
    group: 'existing',
    description: 'Relationships with room to expand.',
    context: [
      'Map the relationship',
      'Identify the next need',
      'Start the expansion conversation',
      'Qualify the opportunity',
      'Route to the right person',
    ],
  },
  {
    id: 'dormant-conversations',
    label: 'Dormant Conversations',
    group: 'existing',
    description: 'Valuable threads that stopped moving.',
    context: [
      'Surface dormant threads',
      'Prioritize by fit and value',
      'Restart with relevance',
      'Follow up consistently',
      'Route the opportunity',
    ],
  },
  {
    id: 'referrals',
    label: 'Referrals',
    group: 'existing',
    description: 'Introductions from people who already trust you.',
    context: [
      'Identify trusted relationships',
      'Make the ask easy',
      'Track introductions',
      'Follow up quickly',
      'Measure referral activity',
    ],
  },
]

export const SYSTEM_STAGES = ['Prioritize', 'Activate', 'Follow Up', 'Qualify', 'Route', 'Measure'] as const

export type SystemPhase = 'inbound' | 'core' | 'route' | 'output'

export type SystemFrame = {
  input: number
  phase: SystemPhase
  stage: number
}
