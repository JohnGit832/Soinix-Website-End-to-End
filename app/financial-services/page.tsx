import type { Metadata } from 'next'
import { Faq, IndustryFinalCta, RelatedLinks, StartReview } from '@/components/industry/kit'
import {
  FsBusinessDevelopmentGap,
  FsCoi,
  FsExistingRelationships,
  FsHero,
  FsIdealClient,
  FsNewDemand,
  FsNewDemandPlays,
  FsOrganicGrowth,
} from '@/components/pages/financial-services/growth'
import {
  FsAdvisorOwns,
  FsCapacity,
  FsChooseModel,
  FsGovernance,
  FsInfrastructure,
  FsOperatingSystem,
  FsVisibility,
  FsWhatWeRun,
} from '@/components/pages/financial-services/operations'

export const metadata: Metadata = {
  title: { absolute: 'Financial Services Growth & Client Acquisition | Soinix' },
  description:
    'Build a stronger organic growth system across new client acquisition, ideal-client markets, COIs, strategic referral relationships, and opportunities already within your financial firm.',
  alternates: { canonical: '/financial-services' },
}

const FAQ = [
  {
    q: 'What is organic growth in financial services?',
    a: 'Organic growth is the new client relationships and assets a firm wins through its own markets, referrals, and relationships, rather than through acquisitions or market movement. It is usually strongest when the firm is clear about its ideal client and has a consistent way to reach, follow up with, and qualify those people.',
  },
  {
    q: 'How can financial advisory firms generate more new clients?',
    a: 'Start by defining the client segments the firm serves best, then build a repeatable motion for each: research the market, identify the right people, give them a relevant reason to engage, follow up consistently, and route qualified interest to the advisor with capacity and fit.',
  },
  {
    q: 'How can financial firms build stronger COI relationships?',
    a: 'Focus on professionals who already serve the clients you want more of, such as CPAs, estate attorneys, and bankers. Make your ideal client clear, stay present in a way that is useful to them, and treat the relationship as something to develop over time rather than a single ask.',
  },
  {
    q: 'What is a COI strategy for financial advisors?',
    a: 'A COI strategy defines which centers of influence matter most, why the overlap exists, how the firm positions itself, and how relationships are developed and measured. It replaces ad hoc networking with a deliberate, prioritized plan.',
  },
  {
    q: 'How can financial firms create a more consistent referral pipeline?',
    a: 'Consistency comes from ownership. Referral relationships need someone responsible for staying in touch, recognizing when a client situation fits, and following up on introductions so they do not stall after the first conversation.',
  },
  {
    q: 'How can financial advisors improve client acquisition?',
    a: 'Separate the work that requires the advisor from the work that does not. Research, prospecting, follow-up, and qualification can be run as a system, so advisor time is spent on discovery, advice, and relationships.',
  },
  {
    q: 'What is Revenue Activation for financial services?',
    a: 'Revenue Activation is the operating layer between growth strategy and the advisor conversation. We find and prioritize opportunity across new markets and existing relationships, activate and follow up, qualify interest, route it to the right advisor, and measure what is working.',
  },
  {
    q: 'How can advisory firms reduce the amount of prospecting sitting with advisors?',
    a: 'Give business development a dedicated owner and a defined process. When prospecting and follow-up are run consistently outside the advisor calendar, advisors step in at the point where their expertise matters most.',
  },
]

export default function FinancialServicesPage() {
  return (
    <main>
        <FsHero />
        <FsOrganicGrowth />
        <FsBusinessDevelopmentGap />
        <FsNewDemand />
        <FsIdealClient />
        <FsCoi />
        <FsNewDemandPlays />
        <FsExistingRelationships />
        <FsOperatingSystem />
        <FsWhatWeRun />
        <FsAdvisorOwns />
        <FsCapacity />
        <FsVisibility />
        <FsChooseModel />
        <FsInfrastructure />
        <FsGovernance />
        <StartReview
          id="start-heading"
          title="Start With The Growth Opportunity, Not The Channel."
          lead="We begin by understanding how the firm grows today and where the strongest next opportunity sits."
          items={[
            'Growth Goals',
            'Ideal Client',
            'Current Client Acquisition',
            'Advisor Capacity',
            'Referral Strategy',
            'COI Relationships',
            'Target Markets',
            'Existing Prospect Pipeline',
            'Current Systems',
            'Business Development Ownership',
          ]}
          outcomes={[
            'Where growth is most constrained',
            'Where opportunity is strongest',
            'Which Revenue Play is worth building first',
          ]}
        />
        <Faq id="faq-heading" title="Financial services growth, answered." items={FAQ} />
        <IndustryFinalCta
          title="Find The Financial Growth Opportunity Worth Building Around Next."
          body="We'll look across your ideal-client markets, new client acquisition, professional referral relationships, advisor capacity, and existing opportunities to identify where a more deliberate Revenue Activation system could create the strongest next move."
        />
        <RelatedLinks
          links={[
            { label: 'Wealth Management', href: '/financial-services/wealth-management', body: 'Organic growth for independent RIAs.' },
            { label: 'Financial Advisors', href: '/financial-services/financial-advisors', body: 'Client acquisition for advisor-led practices.' },
            { label: 'Revenue Activation', href: '/revenue-activation', body: 'The operating system behind growth.' },
            { label: 'Revenue Plays', href: '/revenue-plays', body: 'Defined growth motions we build and run.' },
          ]}
        />
      </main>
  )
}
