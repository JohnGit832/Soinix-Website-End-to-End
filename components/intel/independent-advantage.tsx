import { INDEPENDENT_ADVANTAGE, INSTITUTIONAL_INFRA } from './data'
import { TechLabel } from './primitives'

function Column({ label, items, tone }: { label: string; items: string[]; tone: 'cream' | 'signal' }) {
  return (
    <div className="flex flex-1 flex-col rounded-[4px] border border-background/12">
      <div className="border-b border-background/10 px-4 py-3">
        <TechLabel className={tone === 'cream' ? 'text-cream/80' : 'text-signal'}>{label}</TechLabel>
      </div>
      <ul className="flex flex-col">
        {items.map((item) => (
          <li
            key={item}
            className="flex h-12 items-center gap-3 border-b border-background/[0.07] px-4 text-[15px] text-background/85 last:border-b-0"
          >
            <span aria-hidden="true" className={tone === 'cream' ? 'size-1 bg-cream/70' : 'size-1 bg-signal'} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Operator({ children }: { children: string }) {
  return (
    <span
      aria-hidden="true"
      className="flex items-center justify-center py-3 font-mono text-2xl font-light text-background/40 lg:w-14 lg:py-0"
    >
      {children}
    </span>
  )
}

export function IndependentAdvantage() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-stretch">
      <Column label="Independent Advantage" items={INDEPENDENT_ADVANTAGE} tone="cream" />
      <Operator>+</Operator>
      <Column label="Institutional Infrastructure" items={INSTITUTIONAL_INFRA} tone="signal" />
      <Operator>=</Operator>
      <div className="flex flex-col justify-between gap-8 rounded-[4px] border border-signal/40 bg-signal/[0.06] p-5 lg:w-[30%]">
        <TechLabel tone="signal">Outcome</TechLabel>
        <div className="flex flex-col gap-3">
          <p className="text-3xl font-medium tracking-tight text-background text-balance">
            Scalable Organic Growth
          </p>
          <p className="text-pretty text-[14.5px] leading-relaxed text-background/65">
            Institutional growth capability, without surrendering independence.
          </p>
        </div>
      </div>
    </div>
  )
}
