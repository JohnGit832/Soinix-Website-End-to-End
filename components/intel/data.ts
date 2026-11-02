export const LIQUIDITY_MAP_HREF = '/book'
export const LIQUIDITY_MAP_LABEL = 'Request a Regional Liquidity Map'

export type MarketCluster = {
  id: string
  label: string
  /** Position inside the density field, 0-1 on each axis. */
  x: number
  y: number
  /** Relative concentration, 0-1. */
  weight: number
  /** Spread of the concentration. */
  spread: number
}

/** Stylised, non-cartographic placement of sub-markets inside the field. */
export const GREAT_LAKES_CLUSTERS: MarketCluster[] = [
  { id: 'oakland', label: 'Oakland County', x: 0.66, y: 0.38, weight: 1, spread: 0.1 },
  { id: 'detroit', label: 'Detroit Metro', x: 0.74, y: 0.56, weight: 0.85, spread: 0.09 },
  { id: 'ann-arbor', label: 'Ann Arbor', x: 0.55, y: 0.66, weight: 0.7, spread: 0.07 },
  { id: 'grand-rapids', label: 'Grand Rapids', x: 0.2, y: 0.4, weight: 0.62, spread: 0.08 },
  { id: 'lansing', label: 'Lansing', x: 0.4, y: 0.47, weight: 0.42, spread: 0.06 },
  { id: 'toledo', label: 'Toledo Corridor', x: 0.7, y: 0.88, weight: 0.38, spread: 0.07 },
]

export type IntelSignal = {
  code: string
  type: string
  subject: string
  lines: string[]
  confidence: 'High' | 'Moderate' | 'Emerging'
  clusterId: string
  /** Position of the event window along the capital timeline, 0-1. */
  window: number
}

export const HERO_SIGNALS: IntelSignal[] = [
  {
    code: 'SIGNAL 01',
    type: 'Executive Tenure Threshold',
    subject: 'Automotive executive',
    lines: ['12.4 years tenure', 'Equity event window approaching'],
    confidence: 'High',
    clusterId: 'oakland',
    window: 0.34,
  },
  {
    code: 'SIGNAL 02',
    type: 'Founder Liquidity Event',
    subject: 'Middle-market services company',
    lines: ['Transaction activity detected', 'Potential capital event'],
    confidence: 'Moderate',
    clusterId: 'detroit',
    window: 0.48,
  },
  {
    code: 'SIGNAL 03',
    type: 'Concentrated Stock Event',
    subject: 'Public-company executive',
    lines: ['Upcoming vesting tranche', 'Wealth planning window identified'],
    confidence: 'High',
    clusterId: 'ann-arbor',
    window: 0.26,
  },
  {
    code: 'SIGNAL 04',
    type: 'Business Ownership Transition',
    subject: 'Family-owned manufacturer',
    lines: ['Succession indicators observed', 'Relevant transition forming'],
    confidence: 'Emerging',
    clusterId: 'grand-rapids',
    window: 0.18,
  },
]

export const SIGNAL_LAYERS_LEGEND = [
  'Executive Wealth Signals',
  'Liquidity Events',
  'Equity Vesting Windows',
  'Business Owner Events',
  'Concentrated Equity',
  'Corporate Transactions',
  'Retirement Transitions',
] as const

export const TIMELINE_STAGES = [
  { id: 'formation', label: 'Signal Formation', note: 'Observable precursors appear' },
  { id: 'approach', label: 'Wealth Event Approaches', note: 'Timing window narrows' },
  { id: 'decisions', label: 'Financial Decisions Begin', note: 'Advice relationships form' },
  { id: 'liquid', label: 'Capital Becomes Liquid', note: 'Assets become visible' },
  { id: 'competition', label: 'Market Competition Intensifies', note: 'Relationship is contested' },
] as const

export type IntelLayer = {
  id: string
  code: string
  label: string
  signals: string[]
  output: string
}

export const INTEL_LAYERS: IntelLayer[] = [
  {
    id: 'executive',
    code: 'L1',
    label: 'Executive Capital',
    signals: [
      'Tenure milestones',
      'Equity vesting',
      'Concentrated ownership',
      'Compensation events',
      'Leadership transitions',
    ],
    output: 'Executives approaching equity, compensation or role-change decisions.',
  },
  {
    id: 'private',
    code: 'L2',
    label: 'Private Business Capital',
    signals: [
      'Ownership changes',
      'M&A activity',
      'Recapitalizations',
      'Succession indicators',
      'Expansion events',
      'Founder transitions',
    ],
    output: 'Owners and founders where a potential liquidity event may be forming.',
  },
  {
    id: 'retirement',
    code: 'L3',
    label: 'Retirement & Transition Capital',
    signals: [
      'Executive retirement',
      'Business succession',
      'Professional transitions',
      'Rollover-relevant events',
    ],
    output: 'Households entering transitions where capital will require a decision.',
  },
  {
    id: 'relationships',
    code: 'L4',
    label: 'Strategic Relationships',
    signals: [
      'CPAs',
      'Estate attorneys',
      'M&A advisors',
      'Exit advisors',
      'Investment bankers',
      'Commercial bankers',
      'Other Centers of Influence',
    ],
    output: 'Professionals positioned near the same events, before advisors are engaged.',
  },
]

export const MATRIX_COLUMNS = [
  { id: 'signal', label: 'Signal density' },
  { id: 'exec', label: 'Executive conc.' },
  { id: 'owner', label: 'Owner conc.' },
  { id: 'industry', label: 'Industry conc.' },
  { id: 'coi', label: 'COI density' },
] as const

export type MatrixColumnId = (typeof MATRIX_COLUMNS)[number]['id']

export type MatrixRow = {
  id: string
  label: string
  industry: string
  window: string
  values: Record<MatrixColumnId, number>
}

export const MATRIX_ROWS: MatrixRow[] = [
  {
    id: 'bloomfield',
    label: 'Birmingham / Bloomfield',
    industry: 'Automotive, prof. services',
    window: '3 - 9 mo',
    values: { signal: 5, exec: 5, owner: 3, industry: 4, coi: 5 },
  },
  {
    id: 'troy',
    label: 'Troy / Auburn Hills',
    industry: 'Automotive, engineering',
    window: '6 - 12 mo',
    values: { signal: 4, exec: 5, owner: 2, industry: 5, coi: 3 },
  },
  {
    id: 'novi',
    label: 'Novi / Northville',
    industry: 'Manufacturing, tech',
    window: '6 - 18 mo',
    values: { signal: 3, exec: 3, owner: 4, industry: 3, coi: 2 },
  },
  {
    id: 'ann-arbor',
    label: 'Ann Arbor',
    industry: 'Healthcare, life sciences',
    window: '3 - 12 mo',
    values: { signal: 4, exec: 3, owner: 3, industry: 4, coi: 3 },
  },
  {
    id: 'grosse-pointe',
    label: 'Grosse Pointe',
    industry: 'Family enterprise',
    window: '12 - 24 mo',
    values: { signal: 3, exec: 2, owner: 5, industry: 2, coi: 4 },
  },
  {
    id: 'downtown',
    label: 'Downtown Detroit',
    industry: 'Financial, real estate',
    window: '6 - 12 mo',
    values: { signal: 3, exec: 4, owner: 3, industry: 3, coi: 4 },
  },
]

export const MATRIX_SEGMENTS = [
  { id: 'both', label: 'Executives + Business Owners' },
  { id: 'exec', label: 'Executives' },
  { id: 'owner', label: 'Business Owners' },
] as const

export type MatrixSegmentId = (typeof MATRIX_SEGMENTS)[number]['id']

export const SIGNAL_DISTRIBUTION = [
  { label: 'Executive Equity Events', value: 34 },
  { label: 'Founder / Business Liquidity', value: 29 },
  { label: 'Retirement & Transition', value: 21 },
  { label: 'Strategic Relationship Signals', value: 16 },
]

export const INFRA_STAGES = [
  'Market Intelligence',
  'Signal Detection',
  'Opportunity Prioritization',
  'Relationship Activation',
  'Qualification',
]

export const ADVISOR_STAGES = [
  'Qualified Conversation',
  'Discovery',
  'Relationship Development',
  'Client Acquisition',
]

export const OPERATING_STAGES = [
  {
    code: '01',
    label: 'Observe',
    body: "Map the firm's ideal-client market and continuously monitor economic, professional and corporate signals.",
  },
  {
    code: '02',
    label: 'Interpret',
    body: "Determine which events have genuine relevance to the firm's wealth-management capabilities and ideal-client strategy.",
  },
  {
    code: '03',
    label: 'Position',
    body: 'Develop the relationship context, message architecture and appropriate path into the opportunity.',
  },
  {
    code: '04',
    label: 'Transfer',
    body: 'Route qualified opportunities into the firm when advisor involvement becomes valuable.',
  },
]

export const INDEPENDENT_ADVANTAGE = [
  'Trust',
  'Local expertise',
  'Advisor continuity',
  'Specialization',
  'Client relationships',
]

export const INSTITUTIONAL_INFRA = [
  'Market intelligence',
  'Signal detection',
  'Opportunity prioritization',
  'Systematic activation',
  'Measurement',
]

export type ClientSegment = {
  id: string
  code: string
  label: string
  signals: string[]
  context: string
}

export const CLIENT_SEGMENTS: ClientSegment[] = [
  {
    id: 'owners',
    code: 'SEG-A',
    label: 'Business Owners',
    signals: ['Company exits', 'Succession', 'Recapitalization', 'Ownership transitions'],
    context: 'Concentrated private wealth approaching a potential liquidity or succession decision.',
  },
  {
    id: 'executives',
    code: 'SEG-B',
    label: 'Corporate Executives',
    signals: ['Equity vesting', 'Concentrated stock', 'Tenure milestones', 'Leadership transitions'],
    context: 'Equity-heavy compensation where vesting and role changes create planning windows.',
  },
  {
    id: 'retiring',
    code: 'SEG-C',
    label: 'Retiring Executives',
    signals: ['Retirement windows', 'Deferred compensation', 'Equity decisions', 'Rollover events'],
    context: 'Career-end transitions where accumulated capital will require a structured decision.',
  },
  {
    id: 'professionals',
    code: 'SEG-D',
    label: 'High-Value Professionals',
    signals: ['Career transitions', 'Compensation events', 'Practice ownership', 'Liquidity events'],
    context: 'Professionals whose earnings, ownership or practice economics are materially changing.',
  },
]

export const COMPARISON = {
  traditional: {
    label: 'Traditional Campaign Model',
    steps: [
      'Campaign begins',
      'Lists generated',
      'Activity increases',
      'Campaign ends',
      'Intelligence disappears',
    ],
  },
  soinix: {
    label: 'Soinix Infrastructure',
    steps: [
      'Market defined',
      'Signals accumulated',
      'Patterns identified',
      'Relationships activated',
      'Market knowledge compounds',
    ],
  },
}
