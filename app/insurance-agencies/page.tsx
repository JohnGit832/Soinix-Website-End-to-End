import type { Metadata } from 'next'
import { Faq, IndustryFinalCta, RelatedLinks, StartReview } from '@/components/industry/kit'
import {
  InsAccountSelection,
  InsBookGrowth,
  InsCarrierAppetite,
  InsExistingBook,
  InsHero,
  InsNewDemand,
  InsNiches,
  InsOldQuotes,
  InsOrganicGrowth,
  InsProducerCapacity,
  InsReferralPartners,
  InsSignalsAndTiming,
} from '@/components/pages/insurance-agencies/growth'
import {
  InsHandoff,
  InsInfrastructure,
  InsLeadership,
  InsOperatingSystem,
  InsRevenuePlays,
  InsSalesCapacity,
  InsWhatWeOwn,
} from '@/components/pages/insurance-agencies/operations'

export const metadata: Metadata = {
  title: { absolute: 'Commercial Insurance Agency Growth & Producer Pipeline | Soinix' },
  description:
    'Build a stronger commercial new business engine across target accounts, carrier appetite, referral partners, renewal opportunities, old quotes, and the book of business your agency already owns.',
  alternates: { canonical: '/insurance-agencies' },
}

const FAQ = [
  {
    q: 'How can an independent insurance agency grow commercial lines?',
    a: 'Separate rate and exposure growth from net new commercial business, then build deliberate motions around it: a defined target account profile, carrier-appetite-led campaigns, niche specialization, referral partners, and structured work on old quotes, monoline accounts, and renewals.',
  },
  {
    q: 'How can commercial insurance producers build a stronger pipeline?',
    a: 'Move market research, account research, decision-maker identification, follow-up, and early qualification into a dedicated system. Producers spend their time on discovery, risk conversations, carrier strategy, submissions, and closing.',
  },
  {
    q: 'What is carrier appetite prospecting?',
    a: 'It means translating a carrier appetite the agency has access to into an ideal account profile, target market, and account list, then running campaigns to put appropriate business in front of that market. The agency and carrier determine actual eligibility and underwriting fit.',
  },
  {
    q: 'How can an agency identify better commercial target accounts?',
    a: 'Score accounts on account fit, appetite fit, commercial value, timing, an identifiable decision maker, and whether the agency can start a relevant conversation. The goal is quality of pursuit, not list volume.',
  },
  {
    q: 'What is old quote recovery?',
    a: 'It is a structured re-entry into accounts the agency previously quoted but did not bind. Old quotes are prioritized by time since quote, reason lost, renewal timing, current appetite, and producer capacity before anyone is recontacted.',
  },
  {
    q: 'How can insurance agencies grow through account rounding?',
    a: 'Identify monoline and under-rounded commercial accounts where a broader risk conversation may be worth having, often around renewal or a business change. The licensed agency team determines coverage needs and gives all advice.',
  },
  {
    q: 'How can commercial insurance agencies build referral partnerships?',
    a: 'Find CPAs, commercial lenders, business attorneys, and other professionals who serve the same businesses. Build mutual relevance and trust, make the agency’s commercial expertise clear, and create introductions when appropriate client situations appear.',
  },
  {
    q: 'How can insurance agencies improve producer productivity?',
    a: 'Stop asking producers to own every step from research through bind. Route qualified opportunities based on producer calendars, specialization, territory, and submission capacity so producer time goes where producer skill matters.',
  },
  {
    q: 'How can agencies use renewal timing in commercial prospecting?',
    a: 'Pace outreach ahead of known or reported renewal windows, and clearly label each date as verified, reported, estimated, or unknown. Estimated timing is a prioritization input and gets confirmed in conversation.',
  },
  {
    q: 'What is a Revenue Play for an insurance agency?',
    a: 'A Revenue Play is a defined growth motion, such as target account acquisition, carrier appetite acquisition, or old quote recovery. Each one specifies the opportunity, how it is identified, what gets activated, what makes it qualified, and where the producer enters.',
  },
]

export default function InsuranceAgenciesPage() {
  return (
    <main>
      <InsHero />
      <InsOrganicGrowth />
      <InsProducerCapacity />
      <InsNewDemand />
      <InsCarrierAppetite />
      <InsNiches />
      <InsAccountSelection />
      <InsSignalsAndTiming />
      <InsReferralPartners />
      <InsExistingBook />
      <InsOldQuotes />
      <InsBookGrowth />
      <InsRevenuePlays />
      <InsOperatingSystem />
      <InsHandoff />
      <InsWhatWeOwn />
      <InsSalesCapacity />
      <InsLeadership />
      <InsInfrastructure />
      <StartReview
        id="ins-start-heading"
        title="Start With The Commercial Opportunity, Not The Tactic."
        lead="Our first conversation focuses on the agency's commercial growth goals and the first Revenue Play worth building."
        items={[
          'Growth Goals',
          'Commercial Mix',
          'Target Industries',
          'Carrier Appetite',
          'Producer Team And Capacity',
          'Average Account Profile',
          'Market Geography',
          'Current Prospecting',
          'Referral Channels',
          'Existing Book',
          'Old Quote Volume',
          'Renewal Data',
          'Current AMS And CRM',
        ]}
        outcomes={['Where new business is most constrained', 'Where commercial opportunity is strongest', 'Which Revenue Play to build first']}
      />
      <Faq id="ins-faq-heading" title="Commercial agency growth, answered." items={FAQ} />
      <IndustryFinalCta
        title="Find The Commercial Revenue Play Worth Building Around Next."
        body="We'll look across your target markets, carrier appetite, referral channels, producer capacity, renewal opportunities, and existing book to identify where a more deliberate Revenue Activation system could create the strongest commercial opportunity."
      />
      <RelatedLinks
        links={[
          { label: 'Revenue Activation', href: '/revenue-activation', body: 'The operating system behind growth.' },
          { label: 'Revenue Plays', href: '/revenue-plays', body: 'Defined growth motions we build and run.' },
          { label: 'How It Works', href: '/how-it-works', body: 'From market to qualified opportunity.' },
          { label: 'Financial Services', href: '/financial-services', body: 'Organic growth for relationship-led firms.' },
        ]}
      />
    </main>
  )
}
