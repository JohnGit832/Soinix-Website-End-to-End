export const SITE = {
  name: 'Soinix Growth Technologies',
  legalName: 'Soinix Growth Technologies LLC',
  url: 'https://soinix.com',
  title: 'Organic Asset Growth Infrastructure | Soinix Growth Technologies',
  description:
    'Soinix builds institutional growth infrastructure for established wealth management and financial advisory firms: market intelligence, opportunity strategy and qualified advisor conversations.',
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
    id: 'solutions',
    label: 'Solutions',
    intro: {
      eyebrow: 'Solutions',
      title: 'Two sources of organic growth. One infrastructure.',
      body: 'New demand creates opportunity across the markets you want to win. Owned opportunity expands the value already inside the business.',
    },
    groups: [
      {
        label: 'New Demand',
        description: 'Create new opportunities across the markets you want to win.',
        links: [
          {
            title: 'New Demand',
            description: 'The infrastructure for reaching new markets, accounts and relationships.',
            href: '/solutions/new-demand',
          },
          {
            title: 'Target Accounts',
            description: 'Focused coverage of the organizations and people you want to win.',
            href: '/solutions/target-account-acquisition',
          },
          {
            title: 'Strategic Referral Partners',
            description: 'Professional relationships that repeatedly introduce strong opportunities.',
            href: '/solutions/strategic-referral-partner-acquisition',
          },
          {
            title: 'Market and Niche Expansion',
            description: 'Enter selected geographies and client segments deliberately.',
            href: '/solutions/market-and-niche-expansion',
          },
          {
            title: 'Timing-Led Opportunity',
            description: 'Act on the capital and career events that precede a decision.',
            href: '/solutions/signal-based-acquisition',
          },
        ],
      },
      {
        label: 'Owned Opportunity',
        description: 'Expand the value of relationships and opportunities already inside the business.',
        links: [
          {
            title: 'Existing Relationships',
            description: 'Turn more of the relationships around the firm into active conversations.',
            href: '/solutions/existing-relationships',
          },
          {
            title: 'Relationship Expansion',
            description: 'Find additional opportunity across households and relationships.',
            href: '/solutions/relationship-expansion',
          },
          {
            title: 'Referral Programs',
            description: 'Turn trust into a more consistent source of introductions.',
            href: '/solutions/referral-activation',
          },
          {
            title: 'Dormant Opportunity',
            description: 'Restart valuable conversations that stopped moving.',
            href: '/solutions/dormant-opportunity-reactivation',
          },
          {
            title: 'Win-Back and Re-Engagement',
            description: 'Reopen conversations with former prospects and clients.',
            href: '/solutions/win-back-and-re-engagement',
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
            description: 'Institutional organic growth infrastructure for established wealth firms.',
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
      body: 'Our thinking on market intelligence, organic asset growth and advisor leverage.',
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
      body: 'An independent firm building the market intelligence and distribution infrastructure behind organic asset growth.',
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
    label: 'Solutions',
    links: [
      { title: 'New Demand', href: '/solutions/new-demand' },
      { title: 'Target Accounts', href: '/solutions/target-account-acquisition' },
      { title: 'Strategic Referral Partners', href: '/solutions/strategic-referral-partner-acquisition' },
      { title: 'Existing Relationships', href: '/solutions/existing-relationships' },
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
