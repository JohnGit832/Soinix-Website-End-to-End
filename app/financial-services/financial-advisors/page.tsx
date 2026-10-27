import type { Metadata } from 'next'
import { Faq, IndustryFinalCta, RelatedLinks, StartReview } from '@/components/industry/kit'
import {
  FaCapacityProblem,
  FaClientProfiles,
  FaClientReferrals,
  FaCoi,
  FaExistingPipeline,
  FaGrowthGap,
  FaHero,
  FaNewDemand,
  FaRevenuePlays,
} from '@/components/pages/financial-advisors/growth'
import {
  FaAcquisitionSystem,
  FaAdvisorOwns,
  FaGovernance,
  FaInfrastructure,
  FaOwnerView,
  FaPracticeCapacity,
  FaWhatWeOwn,
} from '@/components/pages/financial-advisors/operations'

export const metadata: Metadata = {
  title: { absolute: 'Financial Advisor Client Acquisition & Practice Growth | Soinix' },
  description:
    'Build a stronger financial advisor client acquisition system across new prospects, niche markets, COIs, referrals, past prospects, and existing relationships.',
  alternates: { canonical: '/financial-services/financial-advisors' },
}

const FAQ = [
  {
    q: 'How do financial advisors get more clients?',
    a: 'The most consistent practices define a clear ideal client, then build deliberate motions to reach them: niche prospecting, COI development, client referrals, and follow-up with past prospects. Growth becomes repeatable when someone owns that work every week, not just when the advisor has spare time.',
  },
  {
    q: 'How can financial advisors improve prospecting?',
    a: 'Prospect around a specific client profile instead of everyone who could hire an advisor. Research the people in that niche, give them a relevant reason to talk based on their situation, follow up consistently, and qualify fit and timing before the discovery meeting.',
  },
  {
    q: 'What is a COI strategy for financial advisors?',
    a: 'A COI strategy identifies the CPAs, attorneys, bankers, and other professionals who already serve your ideal clients, then builds mutual understanding over time. The goal is to be the clear, credible resource when one of their clients has a need you are well positioned to address.',
  },
  {
    q: 'How can financial advisors generate more client referrals?',
    a: 'Be clear about who you want introductions to, choose appropriate moments to ask, make the introduction easy for the client, follow up with care, and track the source. Referrals grow when the process is deliberate and the experience stays relationship-first.',
  },
  {
    q: 'How can advisors grow without spending all day prospecting?',
    a: 'Separate the work only the advisor can do from the work that can be run as a system. Research, outreach, follow-up, qualification, and scheduling can be owned outside the advisor calendar, so the advisor steps in at discovery.',
  },
  {
    q: 'What is an ideal client profile for a financial advisor?',
    a: 'It describes who the practice serves best, the financial problems or transitions that make the advisor relevant, the moments that make a conversation timely, where those people can be reached, and which professionals already know them.',
  },
  {
    q: 'How can financial advisors reactivate old prospects?',
    a: 'Start with context. Review what was discussed and what may have changed, such as a retirement date approaching or a business event, and reconnect with a legitimate reason. Prioritize the right people and route real interest back to the original advisor.',
  },
  {
    q: 'How can financial advisors build a niche?',
    a: 'Choose a group the practice already serves well, such as business owners, physicians, or pre-retirees, and understand their situations deeply. Then build prospecting, COI relationships, and content around that group so the practice becomes known for serving them.',
  },
  {
    q: 'How can financial advisors create a more consistent discovery meeting pipeline?',
    a: 'Give business development clear ownership and a repeatable process: find, prioritize, activate, follow up, qualify, route, and measure. Pace the pipeline to advisor capacity so every discovery meeting gets the attention it deserves.',
  },
]

export default function FinancialAdvisorsPage() {
  return (
    <main>
      <FaHero />
      <FaCapacityProblem />
      <FaGrowthGap />
      <FaNewDemand />
      <FaClientProfiles />
      <FaCoi />
      <FaClientReferrals />
      <FaExistingPipeline />
      <FaRevenuePlays />
      <FaAcquisitionSystem />
      <FaWhatWeOwn />
      <FaAdvisorOwns />
      <FaOwnerView />
      <FaPracticeCapacity />
      <FaInfrastructure />
      <FaGovernance />
      <StartReview
        id="fa-start-heading"
        title="Start With The Practice You Want To Build."
        lead="We begin by understanding the practice today and where its strongest next growth opportunity sits."
        items={[
          'Ideal Client',
          'Current Book',
          'Client Acquisition Goals',
          'Niche',
          'Current Prospecting',
          'COI Strategy',
          'Referral Process',
          'Past Prospect Pipeline',
          'Advisor Capacity',
          'Current Systems',
        ]}
        outcomes={['Where growth is most constrained', 'Where opportunity is strongest', 'Which Revenue Play is worth building first']}
      />
      <Faq id="fa-faq-heading" title="Financial advisor growth, answered." items={FAQ} />
      <IndustryFinalCta
        title="Build A Client Acquisition System Around The Practice You Want To Grow."
        body="We'll look at your ideal clients, prospecting, referral relationships, COIs, existing pipeline, and advisor capacity to identify where a more deliberate growth system could create the strongest next move."
      />
      <RelatedLinks
        links={[
          { label: 'Financial Services', href: '/financial-services', body: 'Organic growth for relationship-led firms.' },
          { label: 'Wealth Management', href: '/financial-services/wealth-management', body: 'Organic growth for independent RIAs.' },
          { label: 'Revenue Activation', href: '/revenue-activation', body: 'The operating system behind growth.' },
          { label: 'How It Works', href: '/how-it-works', body: 'From opportunity to qualified conversation.' },
        ]}
      />
    </main>
  )
}
