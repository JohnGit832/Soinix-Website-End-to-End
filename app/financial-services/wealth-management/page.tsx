import type { Metadata } from 'next'
import { Faq, IndustryFinalCta, RelatedLinks, StartReview } from '@/components/industry/kit'
import {
  WmBusinessOwners,
  WmClientMoments,
  WmCoi,
  WmExecutives,
  WmExistingRelationships,
  WmHeldAway,
  WmHero,
  WmNewDemand,
  WmOperatingGap,
  WmOrganicGrowth,
} from '@/components/pages/wealth-management/growth'
import {
  WmAdvisorCapacity,
  WmFirmOwns,
  WmGovernance,
  WmInfrastructure,
  WmLeadership,
  WmOperatingSystem,
  WmRevenuePlays,
  WmWhatWeOwn,
} from '@/components/pages/wealth-management/operations'

export const metadata: Metadata = {
  title: { absolute: 'Wealth Management Growth & Client Acquisition | Soinix' },
  description:
    'Build a stronger organic growth system across new client acquisition, COIs, business owners, executives, referrals, past prospects, and existing client relationships.',
  alternates: { canonical: '/financial-services/wealth-management' },
}

const FAQ = [
  {
    q: 'What is organic growth for a wealth management firm?',
    a: 'Organic growth is the change in assets driven by the firm itself: new households, new client assets, and expanded relationships, separate from market appreciation. A firm can grow AUM in a rising market while winning very few new clients, which is why leadership tracks net new assets and new households separately.',
  },
  {
    q: 'How can an RIA generate more new clients?',
    a: 'Define the households the firm serves best, build acquisition motions around them, such as business owners, executives, or pre-retirees, and develop COI relationships with professionals who already serve those households. Give business development dedicated ownership so follow-up and qualification happen consistently.',
  },
  {
    q: 'How can wealth management firms grow AUM organically?',
    a: 'Through new households, new client assets, client referrals, and broader relationships with existing clients. Each requires a deliberate motion: a clear ideal client, a relevant reason to talk, consistent follow-up, and routing to the advisor with fit and capacity.',
  },
  {
    q: 'How can RIAs build stronger COI relationships?',
    a: 'Map CPAs, estate attorneys, private bankers, and other professionals by client overlap and strategic fit. Build mutual understanding of each other’s client experience, stay present before a need appears, and measure which relationships create conversations and long-term value.',
  },
  {
    q: 'How can wealth managers attract business owners?',
    a: 'Start earlier in the wealth journey. Build campaigns and professional relationships around owners approaching succession, a sale, or an ownership transition, so the relationship exists before the business becomes a liquidity event.',
  },
  {
    q: 'What is a held-away asset opportunity?',
    a: 'It refers to client assets held at other institutions. A held-away asset conversation is a broader planning discussion about the client’s full financial picture. Whether consolidation makes sense is a suitability decision made by the advisor with the client.',
  },
  {
    q: 'How can a wealth management firm make client referrals more systematic?',
    a: 'Be clear about the households the firm wants introductions to, choose appropriate moments, make introductions easy for the client, follow up with care, and track the source. Systematic does not mean transactional. The experience should stay relationship-first.',
  },
  {
    q: 'How can advisors spend less time on prospecting while still supporting growth?',
    a: 'Move research, list building, outreach, follow-up, and qualification into a dedicated system. Advisors keep the high-value work: important prospect conversations, professional relationships, discovery, advice, and closing the relationship.',
  },
]

export default function WealthManagementPage() {
  return (
    <main>
      <WmHero />
      <WmOrganicGrowth />
      <WmOperatingGap />
      <WmNewDemand />
      <WmBusinessOwners />
      <WmExecutives />
      <WmCoi />
      <WmClientMoments />
      <WmExistingRelationships />
      <WmHeldAway />
      <WmRevenuePlays />
      <WmOperatingSystem />
      <WmWhatWeOwn />
      <WmFirmOwns />
      <WmAdvisorCapacity />
      <WmInfrastructure />
      <WmGovernance />
      <WmLeadership />
      <StartReview
        id="wm-start-heading"
        title="Start With The Growth Opportunity, Not The Tactic."
        lead="Our first conversation focuses on the firm's growth goals and where the strongest Revenue Play may exist."
        items={[
          'Growth Goals',
          'Ideal Client',
          'Client Acquisition Channels',
          'Advisor Capacity',
          'COI And Referral Strategy',
          'New-Market Opportunities',
          'Existing Prospect Opportunity',
          'Relationship Opportunity',
        ]}
        outcomes={['Where growth is most constrained', 'Where opportunity is strongest', 'What should be built first']}
      />
      <Faq id="wm-faq-heading" title="Wealth management growth, answered." items={FAQ} />
      <IndustryFinalCta
        title="Find The Organic Growth Opportunity Worth Building Around Next."
        body="We'll look across your ideal-client markets, new client acquisition channels, COI relationships, advisor capacity, and existing opportunities to identify where a more deliberate Revenue Activation system could create the strongest next move."
      />
      <RelatedLinks
        links={[
          { label: 'Financial Services', href: '/financial-services', body: 'Organic growth for relationship-led firms.' },
          { label: 'Financial Advisors', href: '/financial-services/financial-advisors', body: 'Client acquisition for advisor-led practices.' },
          { label: 'Revenue Activation', href: '/revenue-activation', body: 'The operating system behind growth.' },
          { label: 'Revenue Plays', href: '/revenue-plays', body: 'Defined growth motions we build and run.' },
        ]}
      />
    </main>
  )
}
