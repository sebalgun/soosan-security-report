function cellClass(val) {
  if (typeof val !== 'string') return ''
  if (val.includes('▲')) return 'delta-up'
  if (val.includes('▼')) return 'delta-down'
  return ''
}

export default function MonthlyTable({ months, rows, note }) {
  return (
    <div>
      <div className="table-wrap">
        <table className="rt">
          <thead>
            <tr>
              <th className="label-col">구분</th>
              {months.map((m) => <th key={m}>{m}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.company}>
                <td className="label-col">{r.company}</td>
                {r.values.map((v, i) => (
                  <td key={i} className={cellClass(v)}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="stat-card__note" style={{ marginTop: 10 }}>{note}</p>}
    </div>
  )
}
