import { SITE } from '@/lib/site'
import { ButtonLink, Eyebrow } from '@/components/site/primitives'
import { RotatingPhrase } from './rotating-phrase'
import { HeroSystem } from './hero-system'

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div className="container-site grid grid-cols-1 items-center gap-14 pb-20 pt-14 md:pt-20 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,1fr)] lg:gap-12 lg:pb-28 lg:pt-20 xl:gap-20">
        <div className="flex flex-col gap-8">
          <Eyebrow>Revenue Activation</Eyebrow>
          <h1 id="hero-heading" className="text-hero text-balance font-medium text-ink">
            Turn More Opportunity Into Revenue.
          </h1>
          <RotatingPhrase />
          <p className="text-lede max-w-xl text-pretty text-muted-foreground">
            We build and run Revenue Activation systems for wealth management firms and independent
            insurance agencies, working both new demand and existing relationships to create more
            qualified revenue opportunities.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={SITE.bookHref} size="lg">
              {SITE.bookLabel}
            </ButtonLink>
            <ButtonLink href="/how-it-works" variant="secondary" size="lg">
              See How It Works
            </ButtonLink>
          </div>
        </div>
        <HeroSystem />
      </div>
    </section>
  )
}
