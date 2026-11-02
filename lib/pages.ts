import { NAV, type NavLink } from './site'

export type PlannedPage = {
  href: string
  title: string
  description: string
  section: string
}

const EXTRA_PAGES: PlannedPage[] = [
  {
    href: '/solutions/new-demand',
    title: 'New Demand',
    description:
      'Create new revenue opportunities across the markets, accounts, prospects, and strategic relationships you want to win next.',
    section: 'Solutions',
  },
  {
    href: '/solutions/existing-relationships',
    title: 'Existing Relationships',
    description:
      'Turn more of the relationships, conversations, data, and demand already around your business into active revenue opportunities.',
    section: 'Solutions',
  },
  {
    href: '/resources',
    title: 'Resources',
    description: 'Research, frameworks and tools on market intelligence and organic asset growth.',
    section: 'Resources',
  },
  // Legacy routes kept reachable for backward compatibility. Not surfaced in navigation.
  {
    href: '/revenue-activation',
    title: 'Growth Infrastructure',
    description: 'How Soinix turns market opportunity into qualified advisor conversations.',
    section: 'About',
  },
  {
    href: '/how-it-works',
    title: 'How It Works',
    description: 'How opportunity moves from market intelligence to a qualified advisor conversation.',
    section: 'About',
  },
  {
    href: '/revenue-plays',
    title: 'Growth Plays',
    description: 'The growth opportunities the infrastructure can be configured around.',
    section: 'Solutions',
  },
  {
    href: '/solutions/relationship-expansion-and-referral-activation',
    title: 'Relationship Expansion and Referral Programs',
    description:
      'Find additional opportunities across the relationships you already have and turn trust into a more consistent source of introductions.',
    section: 'Solutions',
  },
  {
    href: '/privacy',
    title: 'Privacy',
    description: 'How we handle information shared with us.',
    section: 'Legal',
  },
  {
    href: '/terms',
    title: 'Terms',
    description: 'The terms that govern use of this website.',
    section: 'Legal',
  },
]

function collect(): PlannedPage[] {
  const map = new Map<string, PlannedPage>()
  const add = (link: NavLink, section: string) => {
    if (!map.has(link.href)) {
      map.set(link.href, {
        href: link.href,
        title: link.title,
        description: link.description,
        section,
      })
    }
  }
  for (const menu of NAV) {
    for (const group of menu.groups) {
      for (const link of group.links) add(link, menu.label)
    }
  }
  for (const page of EXTRA_PAGES) map.set(page.href, page)
  map.delete('/book')
  return [...map.values()]
}

export const PLANNED_PAGES = collect()

export function findPlannedPage(slug: string[]) {
  const href = `/${slug.join('/')}`
  return PLANNED_PAGES.find((page) => page.href === href)
}
