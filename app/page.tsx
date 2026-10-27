import { SITE } from '@/lib/site'
import { Hero } from '@/components/home/hero'
import { Opportunity } from '@/components/home/opportunity'
import { TwoSources } from '@/components/home/two-sources'
import { Process } from '@/components/home/process'
import { Solutions } from '@/components/home/solutions'
import { Execution } from '@/components/home/execution'
import { Industries } from '@/components/home/industries'
import { Infrastructure } from '@/components/home/infrastructure'
import { WhyModel } from '@/components/home/why-model'
import { AboutCompany, FinalCta } from '@/components/home/about-cta'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}/brand/sgt-green.png`,
  description: SITE.description,
}

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <Opportunity />
      <TwoSources />
      <Process />
      <Solutions />
      <Execution />
      <Industries />
      <Infrastructure />
      <WhyModel />
      <AboutCompany />
      <FinalCta />
    </main>
  )
}
