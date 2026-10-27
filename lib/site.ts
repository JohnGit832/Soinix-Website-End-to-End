export const SITE = {
  name: 'Soinix Growth Technologies',
  legalName: 'Soinix Growth Technologies LLC',
  url: 'https://soinix.com',
  title: 'Revenue Activation Systems | Soinix Growth Technologies',
  description:
    'We build and run Revenue Activation systems for wealth management firms and independent insurance agencies, creating qualified revenue opportunities across new demand and existing relationships.',
  bookHref: '/book',
  bookLabel: 'Book a Revenue Activation Review',
  /** Used later, after the qualification flow on /book. Never link to it directly from navigation. */
  calendlyUrl: 'https://calendly.com/johngit/strategycall',
} as const

export type NavLink = {
  title: string
  description: string
  href: string
  comingSoon?: boolean
  children?: NavLink[]
}

export type NavColumn = {
  label: string
  links: NavLink[]
}

export type NavFeature = {
  label: string
  headline: string
  body: string
  cta: string
  href: string
}

export type NavMenu = {
  id: string
  label: string
  columns: NavColumn[]
  feature: NavFeature
}

export const NAV: NavMenu[] = [
  {
    id: 'revenue-activation',
    label: 'Revenue Activation',
    columns: [
      {
        label: 'Understand Revenue Activation',
        links: [
          {
            title: 'What Is Revenue Activation',
            description: 'How we turn market opportunity into qualified revenue conversations.',
            href: '/revenue-activation',
          },
          {
            title: 'How It Works',
            description:
              'See how opportunities move from discovery to activation, qualification, and measurement.',
            href: '/how-it-works',
          },
          {
            title: 'Revenue Plays',
            description: 'See the different growth opportunities we can build campaigns around.',
            href: '/revenue-plays',
          },
          {
            title: 'Our Approach',
            description: 'How strategy, data, technology, and execution work together.',
            href: '/our-approach',
          },
        ],
      },
    ],
    feature: {
      label: 'New to Revenue Activation?',
      headline: 'Growth should not depend on disconnected campaigns.',
      body: 'See how new demand and existing relationships can work together as one operating system.',
      cta: 'Explore Revenue Activation',
      href: '/revenue-activation',
    },
  },
  {
    id: 'solutions',
    label: 'Solutions',
    columns: [
      {
        label: 'New Demand',
        links: [
          {
            title: 'Target Account Acquisition',
            description: 'Create demand across the organizations and people you want to win.',
            href: '/solutions/target-account-acquisition',
          },
          {
            title: 'Strategic Referral Partner Acquisition',
            description:
              'Build relationships with professionals who can repeatedly introduce strong opportunities.',
            href: '/solutions/strategic-referral-partner-acquisition',
          },
          {
            title: 'Market and Niche Expansion',
            description: 'Enter selected markets, segments, and geographies with focused campaigns.',
            href: '/solutions/market-and-niche-expansion',
          },
          {
            title: 'Signal-Based Acquisition',
            description:
              'Act on timing, business events, and changes that create a reason to start a conversation.',
            href: '/solutions/signal-based-acquisition',
          },
        ],
      },
      {
        label: 'Existing Relationships',
        links: [
          {
            title: 'Dormant Opportunity Reactivation',
            description: 'Restart valuable conversations that stopped moving.',
            href: '/solutions/dormant-opportunity-reactivation',
          },
          {
            title: 'Relationship Expansion',
            description: 'Find additional revenue opportunities across relationships you already have.',
            href: '/solutions/relationship-expansion',
          },
          {
            title: 'Referral Activation',
            description: 'Turn trusted relationships into a more consistent source of introductions.',
            href: '/solutions/referral-activation',
          },
          {
            title: 'Win-Back and Re-Engagement',
            description: 'Reopen conversations with former prospects, clients, or accounts.',
            href: '/solutions/win-back-and-re-engagement',
          },
        ],
      },
    ],
    feature: {
      label: 'Not sure where to start?',
      headline: 'Find the opportunity worth activating first.',
      body: 'We can look across your market, relationships, demand, and current systems to identify where the strongest opportunity may be.',
      cta: SITE.bookLabel,
      href: SITE.bookHref,
    },
  },
  {
    id: 'industries',
    label: 'Industries',
    columns: [
      {
        label: 'Financial Services',
        links: [
          {
            title: 'Financial Services',
            description: 'Revenue Activation for relationship-led financial firms.',
            href: '/financial-services',
            children: [
              {
                title: 'Wealth Management',
                description:
                  'Create new client and asset opportunities across new demand and existing relationships.',
                href: '/financial-services/wealth-management',
              },
              {
                title: 'Financial Advisors',
                description:
                  'Build more qualified advisor conversations with the clients and relationships you want to grow.',
                href: '/financial-services/financial-advisors',
              },
            ],
          },
        ],
      },
      {
        label: 'Insurance',
        links: [
          {
            title: 'Independent Insurance Agencies',
            description:
              'Create more quoted and bound commercial business across new demand and the existing book.',
            href: '/insurance-agencies',
          },
        ],
      },
      {
        label: 'By Growth Priority',
        links: [
          {
            title: 'Create New Demand',
            description: 'Reach new markets, target accounts, prospects, and referral partners.',
            href: '/solutions/new-demand',
          },
          {
            title: 'Build Strategic Referral Channels',
            description: 'Create relationships that repeatedly introduce relevant opportunities.',
            href: '/solutions/strategic-referral-partner-acquisition',
          },
          {
            title: 'Activate Existing Relationships',
            description: 'Work opportunities already inside the business more consistently.',
            href: '/solutions/existing-relationships',
          },
        ],
      },
    ],
    feature: {
      label: 'Start with the opportunity',
      headline: 'Where could stronger revenue growth come from next?',
      body: 'Explore the systems we build across new demand and existing relationships.',
      cta: 'Explore Revenue Activation',
      href: '/revenue-activation',
    },
  },
  {
    id: 'resources',
    label: 'Resources',
    columns: [
      {
        label: 'Learn',
        links: [
          {
            title: 'Insights',
            description: 'Ideas and analysis around Revenue Activation.',
            href: '/resources/insights',
            comingSoon: true,
          },
          {
            title: 'Guides and Playbooks',
            description: 'Practical strategies teams can implement.',
            href: '/resources/guides',
            comingSoon: true,
          },
          {
            title: 'Revenue Activation Library',
            description: 'Campaign ideas and frameworks across different growth opportunities.',
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
            description: 'Find where revenue opportunity may be going unused.',
            href: '/resources/assessments',
            comingSoon: true,
          },
          {
            title: 'Calculators',
            description: 'Model market opportunity and potential revenue.',
            href: '/resources/calculators',
            comingSoon: true,
          },
          {
            title: 'Templates',
            description: 'Campaign and growth resources.',
            href: '/resources/templates',
            comingSoon: true,
          },
        ],
      },
    ],
    feature: {
      label: 'Featured resource',
      headline: 'The Revenue Activation Vault',
      body: 'Practical campaigns for creating new demand and activating existing relationships.',
      cta: 'Explore Resources',
      href: '/resources',
    },
  },
  {
    id: 'company',
    label: 'Company',
    columns: [
      {
        label: 'About',
        links: [
          {
            title: 'About Us',
            description: 'Our company, what we believe, and why we built Revenue Activation.',
            href: '/about',
          },
          {
            title: 'How We Work',
            description: 'What working with us looks like from opportunity discovery through execution.',
            href: '/how-we-work',
          },
          {
            title: 'Our Approach',
            description: 'How we combine systems thinking, data, technology, and hands-on execution.',
            href: '/our-approach',
          },
        ],
      },
      {
        label: 'Company',
        links: [
          { title: 'Contact', description: 'Talk to us.', href: '/contact' },
          {
            title: 'Resources',
            description: 'Explore our thinking, tools, and frameworks.',
            href: '/resources',
          },
        ],
      },
    ],
    feature: {
      label: 'Our point of view',
      headline: 'Revenue growth needs an operating system.',
      body: 'See why we believe firms should manage revenue opportunity with the same discipline they apply to every other important part of the business.',
      cta: 'Our Approach',
      href: '/our-approach',
    },
  },
]

export const FOOTER_COLUMNS: { label: string; links: { title: string; href: string }[] }[] = [
  {
    label: 'Revenue Activation',
    links: [
      { title: 'What Is Revenue Activation', href: '/revenue-activation' },
      { title: 'How It Works', href: '/how-it-works' },
      { title: 'Revenue Plays', href: '/revenue-plays' },
      { title: 'Our Approach', href: '/our-approach' },
    ],
  },
  {
    label: 'Solutions',
    links: [
      { title: 'New Demand', href: '/solutions/new-demand' },
      { title: 'Strategic Referral Partners', href: '/solutions/strategic-referral-partner-acquisition' },
      { title: 'Target Accounts', href: '/solutions/target-account-acquisition' },
      { title: 'Existing Relationships', href: '/solutions/existing-relationships' },
    ],
  },
  {
    label: 'Industries',
    links: [
      { title: 'Financial Services', href: '/financial-services' },
      { title: 'Wealth Management', href: '/financial-services/wealth-management' },
      { title: 'Financial Advisors', href: '/financial-services/financial-advisors' },
      { title: 'Independent Insurance Agencies', href: '/insurance-agencies' },
    ],
  },
  {
    label: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'How We Work', href: '/how-we-work' },
      { title: 'Resources', href: '/resources' },
      { title: 'Contact', href: '/contact' },
    ],
  },
]
