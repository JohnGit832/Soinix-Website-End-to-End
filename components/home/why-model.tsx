import { Eyebrow, SectionHeading } from '@/components/site/primitives'

const LINES = [
  ['A strong market', 'a strong pipeline.'],
  ['A large database', 'follow-up.'],
  ['A trusted network', 'referrals.'],
  ['A good target list', 'conversations.'],
]

const CHAIN = ['Opportunity', 'Ownership', 'Execution', 'Conversation', 'Revenue']

export function WhyModel() {
  return (
    <section aria-labelledby="why-heading" className="border-t border-line">
      <div className="container-site flex flex-col gap-16 py-24 lg:py-36">
        <div className="flex max-w-4xl flex-col gap-8">
          <Eyebrow>Why Revenue Activation</Eyebrow>
          <SectionHeading className="text-ink">
            <span id="why-heading">Growth Breaks When Opportunity Has No Owner.</span>
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-20">
          <div className="flex flex-col gap-10">
            <ul className="flex flex-col divide-y divide-line border-y border-line">
              {LINES.map(([subject, outcome]) => (
                <li key={subject} className="py-5 text-2xl font-medium leading-snug tracking-tight md:py-6 md:text-[32px]">
                  <span className="text-ink">{subject}</span>{' '}
                  <span className="text-muted-foreground">does not guarantee</span>{' '}
                  <span className="text-ink">{outcome}</span>
                </li>
              ))}
            </ul>
            <p className="max-w-2xl text-pretty text-lede text-ink">
              Revenue Activation creates ownership between identifying an opportunity and getting the right
              conversation in front of the team.
            </p>
          </div>

          <ol className="flex flex-col self-center" aria-label="From opportunity to revenue">
            {CHAIN.map((step, i) => {
              const isOwnership = step === 'Ownership'
              const isLast = i === CHAIN.length - 1
              return (
                <li key={step} className="flex flex-col items-start">
                  <div
                    className={
                      isOwnership
                        ? 'flex w-full items-center justify-between rounded-xl bg-brand px-5 py-4 text-primary-foreground'
                        : isLast
                          ? 'flex w-full items-center justify-between rounded-xl bg-ink px-5 py-4 text-background'
                          : 'flex w-full items-center justify-between rounded-xl border border-line px-5 py-4 text-ink'
                    }
                  >
                    <span className="font-mono text-[12.5px] uppercase tracking-[0.16em]">{step}</span>
                    {isOwnership ? (
                      <span className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.12em] text-primary-foreground/75">
                        <span aria-hidden="true" className="size-1.5 rounded-full bg-signal" />
                        Soinix
                      </span>
                    ) : null}
                  </div>
                  {!isLast ? <span aria-hidden="true" className="ml-8 h-7 w-px bg-ink/20" /> : null}
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
