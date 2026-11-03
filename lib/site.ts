export const SITE = {
  name: 'Soinix Growth Technologies',
  legalName: 'Soinix Growth Technologies LLC',
  url: 'https://soinix.com',
  title: 'Asset Growth Infrastructure | Soinix Growth Technologies',
  description:
    'We build and operate asset growth infrastructure for established independent wealth firms: market intelligence, opportunity strategy, relationship activation and qualified advisor conversations.',
  bookHref: '/book',
  bookLabel: 'Request Market Mapping',
  /** Used later, after the qualification flow on /book. Never link to it directly from navigation. */
  calendlyUrl: 'https://calendly.com/johngit/strategycall',
} as const

export type NavLink = {
  title: string
  description: string
  href: string
  comingSoon?: boolean
}

export type NavGroup = {
  label: string
  description?: string
  links: NavLink[]
}

export type NavIntro = {
  eyebrow: string
  title: string
  body: string
  cta?: { label: string; href: string }
}

export type NavMenu = {
  id: string
  label: string
  intro: NavIntro
  groups: NavGroup[]
  /** Number rows continuously across groups (01, 02, ...). */
  numbered?: boolean
}

export const NAV: NavMenu[] = [
  {
    id: 'capabilities',
    label: 'Capabilities',
    intro: {
      eyebrow: 'Capabilities',
      title: 'Asset growth infrastructure. Built and operated by us.',
      body: 'We connect market intelligence, opportunity strategy and relationship activation into one system that ends in qualified advisor conversations.',
    },
    groups: [
      {
        label: 'Intel & Strategy',
        links: [
          {
            title: 'Market Mapping',
            description: 'Defining high-value target segments and whitespace.',
            href: '/solutions/market-and-niche-expansion',
          },
          {
            title: 'Capital Signal Intelligence',
            description: 'Predictive tracking of asset milestones and equity events.',
            href: '/solutions/signal-based-acquisition',
          },
        ],
      },
      {
        label: 'Active Pipeline',
        links: [
          {
            title: 'New Demand Generation',
            description: 'Converting prioritized opportunities into active pipeline.',
            href: '/solutions/new-demand',
          },
          {
            title: 'Retained Pipeline Expansion',
            description: 'Unlocking unworked value within historical firm relationships.',
            href: '/solutions/existing-relationships',
          },
        ],
      },
      {
        label: 'Relationship Infrastructure',
        links: [
          {
            title: 'Strategic Centers of Influence (COI)',
            description: 'Systematizing networks of CPAs, estate attorneys and M&A advisors.',
            href: '/solutions/strategic-referral-partner-acquisition',
          },
          {
            title: 'Client & Advisory Hand-off',
            description: 'Zero-footprint qualification and secure advisor routing protocols.',
            href: '/how-we-work',
          },
        ],
      },
    ],
  },
  {
    id: 'industries',
    label: 'Industries',
    numbered: true,
    intro: {
      eyebrow: 'Industries',
      title: 'Built around the markets we serve.',
      body: 'Infrastructure designed around the economics, sales cycles and relationship models of each market.',
    },
    groups: [
      {
        label: 'Financial Services',
        links: [
          {
            title: 'Wealth Management',
            description: 'Institutional asset growth infrastructure for established wealth firms.',
            href: '/financial-services/wealth-management',
          },
          {
            title: 'Financial Advisors',
            description: 'Growth infrastructure for independent advisory practices and multi-advisor firms.',
            href: '/financial-services/financial-advisors',
          },
          {
            title: 'Financial Services',
            description: 'Broader financial-services growth infrastructure.',
            href: '/financial-services',
          },
        ],
      },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    intro: {
      eyebrow: 'Resources',
      title: 'Research, frameworks and tools.',
      body: 'Our thinking on market intelligence, asset growth and advisor leverage.',
      cta: { label: 'All resources', href: '/resources' },
    },
    groups: [
      {
        label: 'Research & Insights',
        links: [
          {
            title: 'Insights',
            description: 'Analysis on organic growth in wealth management.',
            href: '/resources/insights',
            comingSoon: true,
          },
          {
            title: 'Guides and Playbooks',
            description: 'Practical strategies firms can implement.',
            href: '/resources/guides',
            comingSoon: true,
          },
          {
            title: 'Frameworks Library',
            description: 'Opportunity frameworks across growth sources.',
            href: '/resources/library',
            comingSoon: true,
          },
        ],
      },
      {
        label: 'Tools',
        links: [
          {
            title: 'Assessments',
            description: 'Find where opportunity may be going unused.',
            href: '/resources/assessments',
            comingSoon: true,
          },
          {
            title: 'Calculators',
            description: 'Model market opportunity and asset potential.',
            href: '/resources/calculators',
            comingSoon: true,
          },
          {
            title: 'Templates',
            description: 'Working materials for growth teams.',
            href: '/resources/templates',
            comingSoon: true,
          },
        ],
      },
    ],
  },
  {
    id: 'about',
    label: 'About',
    intro: {
      eyebrow: 'About Soinix',
      title: 'Growth infrastructure, built and operated.',
      body: 'An independent firm building the market intelligence and distribution infrastructure behind asset growth.',
    },
    groups: [
      {
        label: 'Company',
        links: [
          {
            title: 'About',
            description: 'Who we are, what we believe, and how we think about growth infrastructure.',
            href: '/about',
          },
          {
            title: 'Our Approach',
            description: 'How strategy, intelligence, technology and execution fit together.',
            href: '/our-approach',
          },
        ],
      },
      {
        label: 'Working Together',
        links: [
          {
            title: 'How We Work',
            description: 'How Soinix builds, deploys and operates the infrastructure.',
            href: '/how-we-work',
          },
          {
            title: 'Contact',
            description: 'Start a conversation with the team.',
            href: '/contact',
          },
        ],
      },
    ],
  },
]

export const FOOTER_COLUMNS: { label: string; links: { title: string; href: string }[] }[] = [
  {
    label: 'Capabilities',
    links: [
      { title: 'Market Mapping', href: '/solutions/market-and-niche-expansion' },
      { title: 'Capital Signal Intelligence', href: '/solutions/signal-based-acquisition' },
      { title: 'New Demand Generation', href: '/solutions/new-demand' },
      { title: 'Retained Pipeline Expansion', href: '/solutions/existing-relationships' },
      { title: 'Strategic Centers of Influence', href: '/solutions/strategic-referral-partner-acquisition' },
    ],
  },
  {
    label: 'Industries',
    links: [
      { title: 'Wealth Management', href: '/financial-services/wealth-management' },
      { title: 'Financial Advisors', href: '/financial-services/financial-advisors' },
      { title: 'Financial Services', href: '/financial-services' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { title: 'All Resources', href: '/resources' },
      { title: 'Insights', href: '/resources/insights' },
      { title: 'Guides and Playbooks', href: '/resources/guides' },
    ],
  },
  {
    label: 'About',
    links: [
      { title: 'About', href: '/about' },
      { title: 'How We Work', href: '/how-we-work' },
      { title: 'Our Approach', href: '/our-approach' },
      { title: 'Contact', href: '/contact' },
    ],
  },
]
