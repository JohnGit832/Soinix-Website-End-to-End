import type { Metadata } from 'next'
import { SITE } from '@/lib/site'
import { Eyebrow } from '@/components/site/primitives'

export const metadata: Metadata = {
  title: 'Book a Revenue Activation Review',
  description:
    'A focused conversation around your market, growth priorities, and current systems, and which Revenue Plays may be worth building first.',
  alternates: { canonical: '/book' },
}

const COVERED = [
  'Where new demand could be created in your market',
  'Which existing opportunities may be going unused',
  'Which Revenue Plays may be worth building first',
  'How the work would fit into your current systems',
]

export default function BookPage() {
  return (
    <main className="border-b border-line">
      <div className="container-site grid grid-cols-1 gap-16 pb-24 pt-40 lg:grid-cols-2 lg:gap-20 lg:pt-48">
        <div className="flex flex-col gap-8">
          <Eyebrow>Revenue Activation Review</Eyebrow>
          <h1 className="text-balance text-5xl font-medium leading-[1.05] tracking-tight text-ink md:text-6xl">
            Find The Revenue Opportunities <span className="text-brand">Worth Activating Next.</span>
          </h1>
          <p className="max-w-xl text-lede text-pretty text-muted-foreground">
            A focused conversation around your market, growth priorities, and current systems.
          </p>
        </div>
        <div className="flex flex-col gap-8 rounded-2xl border border-line bg-paper p-7 md:p-10">
          <h2 className="text-2xl font-medium tracking-tight text-ink">What we will cover</h2>
          <ul className="flex flex-col divide-y divide-line border-y border-line">
            {COVERED.map((item) => (
              <li key={item} className="flex items-start gap-3 py-4 text-[16px] leading-relaxed text-ink">
                <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href={SITE.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-13 items-center justify-center rounded-full bg-brand px-7 text-[15px] font-medium text-primary-foreground transition-colors hover:bg-brand/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Choose a time
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </main>
  )
}
