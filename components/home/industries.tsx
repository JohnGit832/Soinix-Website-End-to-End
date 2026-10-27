import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Eyebrow, SectionHeading } from '@/components/site/primitives'

export function Industries() {
  return (
    <section aria-labelledby="industries-heading" className="border-t border-line">
      <div className="container-site flex flex-col gap-14 py-24 lg:gap-20 lg:py-36">
        <div className="flex max-w-3xl flex-col gap-8">
          <Eyebrow>Industries</Eyebrow>
          <SectionHeading className="text-ink">
            <span id="industries-heading">Built For Relationship-Led Financial Businesses.</span>
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-background transition-colors duration-300 hover:border-brand/45">
            <IndustryImage src="/images/industry-financial-services.png" alt="A calm private wealth management office with deep green chairs and a walnut meeting table" />
            <div className="flex flex-1 flex-col gap-8 p-7 md:p-9">
              <div className="flex flex-col gap-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">/financial-services</p>
                <h3 className="text-3xl font-medium tracking-tight text-ink md:text-4xl">
                  <Link href="/financial-services" className="after:absolute after:inset-0 focus-visible:outline-none">
                    Financial Services
                  </Link>
                </h3>
                <p className="max-w-lg text-pretty text-[16.5px] leading-relaxed text-muted-foreground">
                  Build more qualified revenue conversations across new client demand, strategic referral
                  relationships, and opportunities already within the firm.
                </p>
              </div>
              <ul className="mt-auto flex flex-col divide-y divide-line border-y border-line">
                {[
                  { title: 'Wealth Management', href: '/financial-services/wealth-management' },
                  { title: 'Financial Advisors', href: '/financial-services/financial-advisors' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group/sub flex min-h-14 items-center justify-between text-[16px] font-medium text-ink hover:text-brand"
                    >
                      {link.title}
                      <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover/sub:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <Link
            href="/insurance-agencies"
            className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-background transition-colors duration-300 hover:border-brand/45"
          >
            <IndustryImage src="/images/industry-insurance-agencies.png" alt="A modern independent insurance agency office with a glass storefront in morning light" />
            <div className="flex flex-1 flex-col gap-8 p-7 md:p-9">
              <div className="flex flex-col gap-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">/insurance-agencies</p>
                <h3 className="text-3xl font-medium tracking-tight text-ink md:text-4xl">Independent Insurance Agencies</h3>
                <p className="max-w-lg text-pretty text-[16.5px] leading-relaxed text-muted-foreground">
                  Create more quoted and bound commercial business across new demand, referral channels,
                  target accounts, and the existing book.
                </p>
              </div>
              <span className="mt-auto flex min-h-14 items-center justify-between border-y border-line text-[16px] font-medium text-brand">
                Explore Insurance Agencies
                <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

function IndustryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden bg-paper">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-[var(--ease-system)] group-hover:scale-[1.03]"
      />
    </div>
  )
}
