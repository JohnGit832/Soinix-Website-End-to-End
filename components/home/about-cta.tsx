import { SITE } from '@/lib/site'
import { LogoMark } from '@/components/brand/logo'
import { ButtonLink, Eyebrow, SectionHeading } from '@/components/site/primitives'

export function AboutCompany() {
  return (
    <section aria-labelledby="about-heading" className="bg-paper">
      <div className="container-site grid grid-cols-1 items-center gap-14 py-24 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20 lg:py-36">
        <div className="bg-grid relative flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-2xl border border-line bg-background">
          <LogoMark variant="green" size={180} />
        </div>
        <div className="flex flex-col gap-8">
          <Eyebrow>About Us</Eyebrow>
          <SectionHeading className="text-ink">
            <span id="about-heading">We Built Soinix Around A Simple Idea.</span>
          </SectionHeading>
          <div className="flex max-w-2xl flex-col gap-5 text-lede text-pretty text-muted-foreground">
            <p className="text-ink">
              Revenue growth should not depend on disconnected campaigns, forgotten opportunities, scattered
              data, or someone remembering to follow up.
            </p>
            <p>
              We build Revenue Activation systems that bring strategy, data, technology, and execution
              together around one goal, creating more qualified revenue opportunities.
            </p>
            <p>
              Our work is built around measurable outcomes, clear ownership, and systems that become
              stronger as the business learns what works.
            </p>
          </div>
          <ButtonLink href="/about" variant="secondary" className="self-start">
            Learn About Soinix
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

export function FinalCta() {
  return (
    <section aria-labelledby="cta-heading" className="on-dark relative overflow-hidden bg-ink text-background">
      <div aria-hidden="true" className="bg-grid-dark absolute inset-0" />
      <div className="container-site relative flex flex-col items-start gap-10 py-28 lg:py-40">
        <Eyebrow tone="dark">Revenue Activation Review</Eyebrow>
        <SectionHeading className="max-w-5xl text-background">
          <span id="cta-heading">
            Find The Revenue Opportunities <span className="text-signal">Worth Activating Next.</span>
          </span>
        </SectionHeading>
        <p className="max-w-2xl text-lede text-pretty text-background/75">
          {"We'll look at where new demand could be created, where existing opportunities may be going unused, and which Revenue Plays may be worth building first."}
        </p>
        <div className="flex flex-col gap-4">
          <ButtonLink href={SITE.bookHref} variant="signal" size="lg">
            {SITE.bookLabel}
          </ButtonLink>
          <p className="text-[14.5px] text-background/55">
            A focused conversation around your market, growth priorities, and current systems.
          </p>
        </div>
      </div>
    </section>
  )
}
