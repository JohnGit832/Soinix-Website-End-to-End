import type { MetadataRoute } from 'next'
import { PLANNED_PAGES } from '@/lib/pages'
import { SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/book', ...PLANNED_PAGES.map((page) => page.href)]
  return routes.map((route) => ({
    url: `${SITE.url}${route === '/' ? '' : route}`,
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }))
}
