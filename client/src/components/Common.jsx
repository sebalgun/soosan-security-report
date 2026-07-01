export function SectionHeading({ no, title, badge }) {
  return (
    <div className="section-heading">
      {no && <span className="section-heading__no num">{no}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {badge && <span className="section-heading__badge">{badge}</span>}
    </div>
  )
}

function riskTagClass(count, criticalCount) {
  if (criticalCount > 0) return 'risk-tag--critical'
  if (count > 0) return 'risk-tag--high'
  return 'risk-tag--safe'
}

export function StatusGrid({ items }) {
  return (
    <div className="status-grid">
      {items.map((it) => {
        const tone = it.critical > 0 ? 'critical' : it.high > 0 ? 'high' : 'safe'
        const dotColor = { critical: 'var(--risk-critical)', high: 'var(--risk-high)', safe: 'var(--risk-safe)' }[tone]
        return (
          <div className="status-node" key={it.code}>
            <div className="status-node__name">
              <span className="status-node__dot" style={{ background: dotColor }} />
              {it.name}
            </div>
            <div className="status-node__counts">
              {it.critical > 0 && <div><span className={`risk-tag ${riskTagClass(it.critical, it.critical)}`}>심각 {it.critical}건</span></div>}
              {it.high > 0 && <div><span className={`risk-tag ${riskTagClass(it.high, 0)}`}>위험 {it.high}건</span></div>}
              {it.high === 0 && it.critical === 0 && <div><span className="risk-tag risk-tag--safe">이슈 없음</span></div>}
            </div>
          </div>
        )
      })}
    </div>
  )
}

const LEGEND_TONE_CLASS = {
  critical: 'risk-tag--critical',
  high: 'risk-tag--high',
  medium: 'risk-tag--medium',
  safe: 'risk-tag--safe',
}

export function Legend({ items }) {
  return (
    <div className="legend">
      {items.map((it) => (
        <div key={it.level}>
          <span className={`risk-tag ${LEGEND_TONE_CLASS[it.tone]}`} style={{ marginBottom: 4 }}>{it.level}</span>
          <div style={{ color: 'var(--ink-500)' }}>{it.desc}</div>
        </div>
      ))}
    </div>
  )
}

export function PillList({ items }) {
  return (
    <div className="pill-list">
      {items.map((it, i) => (
        <div className={`pill ${it.tone === 'critical' ? 'pill--critical' : ''}`} key={i}>
          <b>[{it.company}]</b> {it.text}
        </div>
      ))}
    </div>
  )
}

export function StatRow({ stats }) {
  return (
    <div className="stat-row">
      {stats.map((s, i) => (
        <div className="stat-card" key={i}>
          <div className="stat-card__label">{s.label}</div>
          <div>
            <span className="stat-card__value">{s.value}</span>
            {s.delta && (
              <span className={`stat-card__delta ${s.deltaDir === 'down' ? 'stat-card__delta--down' : 'stat-card__delta--up'}`}>
                {s.delta}
              </span>
            )}
          </div>
          {s.note && <div className="stat-card__note">{s.note}</div>}
        </div>
      ))}
    </div>
  )
}
