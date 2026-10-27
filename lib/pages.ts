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
    href: '/solutions/relationship-expansion-and-referral-activation',
    title: 'Relationship Expansion and Referral Activation',
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
    link.children?.forEach((child) => add(child, section))
  }
  for (const menu of NAV) {
    for (const column of menu.columns) {
      for (const link of column.links) add(link, menu.label)
    }
    add(
      { title: menu.feature.headline, description: menu.feature.body, href: menu.feature.href },
      menu.label,
    )
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
