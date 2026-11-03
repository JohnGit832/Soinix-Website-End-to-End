import type { Metadata } from 'next'
import { SITE } from '@/lib/site'
import {
  CapabilitiesActivation,
  CapabilitiesFoundation,
  CapitalSignalIntelligence,
  HomeHero,
  MapYourMarket,
} from '@/components/home-intel/sections'

const TITLE = 'Asset Growth Infrastructure for Independent Wealth Firms | Soinix'
const DESCRIPTION =
  'We build and operate the asset-growth infrastructure that connects market opportunity to qualified advisor conversations for established independent wealth practices, without adding operational headcount.'

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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HomeHero />
      <CapabilitiesFoundation />
      <CapitalSignalIntelligence />
      <CapabilitiesActivation />
      <MapYourMarket />
    </main>
  )
}
