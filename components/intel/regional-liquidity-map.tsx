import { cn } from '@/lib/utils'
import type { MarketCluster } from './data'

const COLS = 34
const ROWS = 22

function densityAt(x: number, y: number, clusters: MarketCluster[]) {
  let d = 0
  for (const c of clusters) {
    const dx = x - c.x
    const dy = (y - c.y) * 1.25
    d += c.weight * Math.exp(-(dx * dx + dy * dy) / (2 * c.spread * c.spread))
  }
  return Math.min(d, 1)
}

function buildField(clusters: MarketCluster[]) {
  const dots: { cx: number; cy: number; d: number }[] = []
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const x = (c + 0.5) / COLS
      const y = (r + 0.5) / ROWS
      dots.push({ cx: x * 100, cy: y * 64, d: densityAt(x, y, clusters) })
    }
  }
  return dots
}

/**
 * Stylised dot-density field of a regional market. Not a cartographic map:
 * clusters are placed relative to one another to communicate where wealth
 * events concentrate.
 */
export function RegionalLiquidityMap({
  clusters,
  activeId,
  className,
}: {
  clusters: MarketCluster[]
  activeId?: string
  className?: string
}) {
  const dots = buildField(clusters)
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <svg
        viewBox="0 0 100 64"
        className="block h-auto w-full"
        role="img"
        aria-label="Illustrative capital movement density across the Michigan and Great Lakes market, with the highest concentration around Oakland County and Detroit Metro."
      >
        {dots.map((dot, i) => {
          const visible = dot.d > 0.04
          return (
            <circle
              key={i}
              cx={dot.cx}
              cy={dot.cy}
              r={visible ? 0.32 + dot.d * 0.62 : 0.22}
              className={visible && dot.d > 0.55 ? 'fill-signal' : 'fill-background'}
              fillOpacity={visible ? (dot.d > 0.55 ? 0.35 + dot.d * 0.5 : 0.12 + dot.d * 0.55) : 0.07}
            />
          )
        })}
        {clusters.map((c) => {
          const active = c.id === activeId
          const cx = c.x * 100
          const cy = c.y * 64
          return (
            <g key={c.id}>
              {active ? (
                <>
                  <circle cx={cx} cy={cy} r={2.2} className="animate-blip fill-signal/30" />
                  <circle
                    cx={cx}
                    cy={cy}
                    r={4.4}
                    className="fill-none stroke-signal/60"
                    strokeWidth={0.18}
                    strokeDasharray="0.8 0.8"
                  />
                </>
              ) : null}
              <circle
                cx={cx}
                cy={cy}
                r={active ? 0.95 : 0.6}
                className={cn(
                  'transition-all duration-500',
                  active ? 'fill-signal' : 'fill-background/70',
                )}
              />
            </g>
          )
        })}
      </svg>

      {clusters.map((c) => {
        const active = c.id === activeId
        const flip = c.x > 0.62
        return (
          <span
            key={c.id}
            aria-hidden="true"
            className={cn(
              'pointer-events-none absolute -translate-y-1/2 whitespace-nowrap font-mono text-[9.5px] uppercase tracking-[0.12em] transition-colors duration-500',
              flip ? '-translate-x-full pr-3' : 'pl-3',
              active ? 'text-signal' : 'text-background/45',
            )}
            style={{ left: `${c.x * 100}%`, top: `${c.y * 100}%` }}
          >
            {c.label}
          </span>
        )
      })}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 animate-scan-sweep">
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-signal/10 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-px bg-signal/40" />
      </div>
    </div>
  )
}
