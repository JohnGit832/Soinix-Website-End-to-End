'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import {
  MATRIX_COLUMNS,
  MATRIX_ROWS,
  MATRIX_SEGMENTS,
  SIGNAL_DISTRIBUTION,
  type MatrixColumnId,
  type MatrixRow,
  type MatrixSegmentId,
} from './data'
import { ConceptNote, DensityBar, TechLabel } from './primitives'

function valueFor(row: MatrixRow, col: MatrixColumnId, segment: MatrixSegmentId) {
  if (col !== 'signal' || segment === 'both') return row.values[col]
  const focus = segment === 'exec' ? row.values.exec : row.values.owner
  return Math.round((row.values.signal + focus) / 2)
}

function isEmphasised(col: MatrixColumnId, segment: MatrixSegmentId) {
  if (col === 'signal') return true
  if (segment === 'exec') return col === 'exec'
  if (segment === 'owner') return col === 'owner'
  return col === 'exec' || col === 'owner'
}

const CELL_TONE = ['bg-background/[0.03]', 'bg-signal/[0.08]', 'bg-signal/15', 'bg-signal/25', 'bg-signal/40', 'bg-signal/60']

export function RegionalSignalMatrix() {
  const [segment, setSegment] = useState<MatrixSegmentId>('both')
  const [focusRow, setFocusRow] = useState(MATRIX_ROWS[0].id)
  const row = MATRIX_ROWS.find((r) => r.id === focusRow) ?? MATRIX_ROWS[0]

  return (
    <div className="flex flex-col rounded-[4px] border border-background/12 bg-background/[0.02]">
      <dl className="grid grid-cols-1 border-b border-background/10 sm:grid-cols-3">
        <div className="flex flex-col gap-1.5 border-b border-background/10 px-4 py-3 sm:border-b-0 sm:border-r">
          <dt><TechLabel>Region</TechLabel></dt>
          <dd className="text-[14.5px] font-medium text-background">Detroit Metro</dd>
        </div>
        <div className="flex flex-col gap-1.5 border-b border-background/10 px-4 py-3 sm:border-b-0 sm:border-r">
          <dt><TechLabel>Target segment</TechLabel></dt>
          <dd className="text-[14.5px] font-medium text-background">
            {MATRIX_SEGMENTS.find((s) => s.id === segment)?.label}
          </dd>
        </div>
        <div className="flex flex-col gap-1.5 px-4 py-3">
          <dt><TechLabel>Event type</TechLabel></dt>
          <dd className="text-[14.5px] font-medium text-background">Liquidity / Equity / Transition</dd>
        </div>
      </dl>

      <div className="flex flex-wrap items-center gap-2 border-b border-background/10 px-4 py-3" role="group" aria-label="Target segment">
        {MATRIX_SEGMENTS.map((s) => (
          <button
            key={s.id}
            type="button"
            aria-pressed={segment === s.id}
            onClick={() => setSegment(s.id)}
            className={cn(
              'h-8 rounded-[3px] border px-3 font-mono text-[10.5px] uppercase tracking-[0.12em] transition-colors',
              segment === s.id
                ? 'border-signal/60 bg-signal/10 text-signal'
                : 'border-background/15 text-background/55 hover:text-background',
            )}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="border-b border-background/10 lg:border-b-0 lg:border-r">
          {/* Desktop / tablet matrix */}
          <table className="hidden w-full border-collapse md:table">
            <caption className="sr-only">
              Illustrative signal density by sub-market. Values from 1 (low) to 5 (high).
            </caption>
            <thead>
              <tr className="border-b border-background/10">
                <th scope="col" className="px-4 py-3 text-left">
                  <TechLabel>Sub-market</TechLabel>
                </th>
                {MATRIX_COLUMNS.map((col) => (
                  <th key={col.id} scope="col" className="px-1.5 py-3 text-center">
                    <TechLabel className={isEmphasised(col.id, segment) ? 'text-background/85' : undefined}>
                      {col.label}
                    </TechLabel>
                  </th>
                ))}
                <th scope="col" className="px-4 py-3 text-right">
                  <TechLabel>Event window</TechLabel>
                </th>
              </tr>
            </thead>
            <tbody>
              {MATRIX_ROWS.map((r) => {
                const isFocus = r.id === focusRow
                return (
                  <tr
                    key={r.id}
                    onMouseEnter={() => setFocusRow(r.id)}
                    className={cn('border-b border-background/[0.07] transition-colors last:border-b-0', isFocus && 'bg-background/[0.04]')}
                  >
                    <th scope="row" className="px-4 py-2 text-left">
                      <button
                        type="button"
                        onClick={() => setFocusRow(r.id)}
                        onFocus={() => setFocusRow(r.id)}
                        className={cn('text-[14px] font-normal transition-colors', isFocus ? 'text-background' : 'text-background/70')}
                      >
                        {r.label}
                      </button>
                    </th>
                    {MATRIX_COLUMNS.map((col) => {
                      const v = valueFor(r, col.id, segment)
                      const emph = isEmphasised(col.id, segment)
                      return (
                        <td key={col.id} className="px-1.5 py-2">
                          <span
                            className={cn(
                              'mx-auto flex h-8 max-w-20 items-center justify-center rounded-[2px] font-mono text-[11px] transition-all duration-300',
                              CELL_TONE[v],
                              emph ? 'text-background' : 'text-background/40 opacity-60',
                            )}
                          >
                            {v}
                          </span>
                        </td>
                      )
                    })}
                    <td className="px-4 py-2 text-right font-mono text-[11.5px] text-background/65">{r.window}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          {/* Mobile: stacked sub-market readings */}
          <ul className="flex flex-col md:hidden">
            {MATRIX_ROWS.map((r) => (
              <li key={r.id} className="flex flex-col gap-3 border-b border-background/10 px-4 py-4 last:border-b-0">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-[15px] font-medium text-background">{r.label}</span>
                  <span className="font-mono text-[11px] text-background/60">{r.window}</span>
                </div>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {MATRIX_COLUMNS.map((col) => (
                    <div key={col.id} className="flex items-center justify-between gap-2">
                      <dt><TechLabel>{col.label}</TechLabel></dt>
                      <dd>
                        <span className="sr-only">{valueFor(r, col.id, segment)} of 5</span>
                        <DensityBar value={valueFor(r, col.id, segment)} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
        </div>

        <aside className="flex flex-col" aria-label="Market signal distribution">
          <div className="flex flex-col gap-4 border-b border-background/10 px-4 py-4">
            <TechLabel tone="bright">Market Signal Distribution</TechLabel>
            <ul className="flex flex-col gap-3.5">
              {SIGNAL_DISTRIBUTION.map((d) => (
                <li key={d.label} className="flex flex-col gap-1.5">
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="text-[13.5px] text-background/75">{d.label}</span>
                    <span className="font-mono text-[12px] text-background">{d.value}%</span>
                  </span>
                  <span aria-hidden="true" className="h-1 w-full bg-background/10">
                    <span className="block h-full bg-signal/70" style={{ width: `${d.value * 2.5}%` }} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden flex-col gap-2 px-4 py-4 md:flex" aria-live="polite">
            <TechLabel>Sub-market reading</TechLabel>
            <span className="text-[15px] font-medium text-background">{row.label}</span>
            <span className="text-[13.5px] leading-relaxed text-background/60">
              Industry concentration: {row.industry}. Estimated event window {row.window}.
            </span>
          </div>
        </aside>
      </div>

      <div className="border-t border-background/10 px-4 py-2.5">
        <ConceptNote>Hypothetical matrix. Illustrative values, not real market data.</ConceptNote>
      </div>
    </div>
  )
}
