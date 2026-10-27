import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PLANNED_PAGES, findPlannedPage } from '@/lib/pages'
import { SITE } from '@/lib/site'
import { ButtonLink, Eyebrow } from '@/components/site/primitives'

type Props = { params: Promise<{ slug: string[] }> }

const DEDICATED_ROUTES = new Set(['/financial-services', '/financial-services/financial-advisors',
  '/financial-services/wealth-management',
  '/insurance-agencies',
])

export function generateStaticParams() {
  return PLANNED_PAGES.filter((page) => !DEDICATED_ROUTES.has(page.href)).map((page) => ({
    slug: page.href.slice(1).split('/'),
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = findPlannedPage(slug)
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.href },
  }
}

export default async function PlannedPage({ params }: Props) {
  const { slug } = await params
  const page = findPlannedPage(slug)
  if (!page) notFound()

  return (
    <main className="border-b border-line">
      <div className="container-site flex min-h-[70vh] flex-col justify-center gap-8 pb-24 pt-40 lg:pt-48">
        <Eyebrow>{page.section}</Eyebrow>
        <h1 className="max-w-4xl text-balance text-5xl font-medium leading-[1.05] tracking-tight text-ink md:text-7xl">
          {page.title}
        </h1>
        <p className="max-w-2xl text-lede text-pretty text-muted-foreground">{page.description}</p>
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
          Full page in progress
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <ButtonLink href={SITE.bookHref}>{SITE.bookLabel}</ButtonLink>
          <ButtonLink href="/" variant="text">
            Back to home
          </ButtonLink>
        </div>
      </div>
    </main>
  )
}
