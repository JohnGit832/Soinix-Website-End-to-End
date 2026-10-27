import Link from 'next/link'
import { FOOTER_COLUMNS, SITE } from '@/lib/site'
import { LogoMark } from '@/components/brand/logo'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="on-dark bg-ink text-background">
      <div className="container-site flex flex-col gap-16 pb-10 pt-20 lg:pt-28">
        <div className="flex flex-col gap-14 lg:flex-row lg:justify-between">
          <div className="flex max-w-sm flex-col gap-6">
            <Link href="/" aria-label="Soinix Growth Technologies, home" className="self-start rounded-md">
              <LogoMark variant="green" size={48} />
            </Link>
            <p className="text-pretty text-lg leading-relaxed text-background/80">
              We build and run Revenue Activation systems that turn market opportunity into qualified
              revenue conversations.
            </p>
            <Link
              href={SITE.bookHref}
              className="group/btn inline-flex h-11 items-center gap-2 self-start rounded-lg bg-signal px-5 text-[14.5px] font-medium text-ink transition-colors hover:bg-background"
            >
              {SITE.bookLabel}
            </Link>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:gap-x-14">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.label} className="flex flex-col gap-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-background/45">
                  {column.label}
                </p>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.href + link.title}>
                      <Link
                        href={link.href}
                        className="text-[14.5px] text-background/75 transition-colors hover:text-background"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-background/12 pt-8 text-[13px] text-background/50 md:flex-row md:items-center md:justify-between">
          <p>
            {'\u00A9'} {year} {SITE.legalName}
          </p>
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/privacy" className="hover:text-background">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-background">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
