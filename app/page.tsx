import type { Metadata } from 'next'
import { SITE } from '@/lib/site'
import {
  CompoundingIntelligence,
  HomeHero,
  IdealClients,
  IndependentsWin,
  MapYourMarket,
  MarketIntelligence,
  OperatingModel,
  RegionalIntelligence,
  TimingGap,
  ZeroFootprint,
} from '@/components/home-intel/sections'

const TITLE = 'Organic Asset Growth Infrastructure for Independent Wealth Firms | Soinix'
const DESCRIPTION =
  'Soinix gives established independent RIAs and wealth firms earlier visibility into high-value wealth events across their markets, and the infrastructure to turn those signals into qualified advisor conversations.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: SITE.url },
  twitter: { title: TITLE, description: DESCRIPTION },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}/brand/sgt-green.png`,
  description: DESCRIPTION,
}

export default function HomePage() {
  return (
    <main className="on-dark bg-ink text-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HomeHero />
      <TimingGap />
      <MarketIntelligence />
      <RegionalIntelligence />
      <ZeroFootprint />
      <OperatingModel />
      <IndependentsWin />
      <IdealClients />
      <CompoundingIntelligence />
      <MapYourMarket />
    </main>
  )
}
