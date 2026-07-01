const LEVEL_LABEL = { critical: '심각', high: '위험', medium: '보통', safe: '낮음' }
const LEVEL_CLASS = { critical: 'risk-tag--critical', high: 'risk-tag--high', medium: 'risk-tag--medium', safe: 'risk-tag--safe' }

export default function IssueCard({ issue }) {
  return (
    <div className="issue-card">
      <div className="issue-card__head">
        <span className="issue-card__index num">{String(issue.no).padStart(2, '0')}</span>
        <span className="issue-card__title">{issue.title}</span>
        <span className={`risk-tag ${LEVEL_CLASS[issue.level]} issue-card__level`}>{LEVEL_LABEL[issue.level]}</span>
      </div>
      <div className="issue-card__meta">
        <div><div className="issue-card__meta-label">발생일</div>{issue.date}</div>
        <div><div className="issue-card__meta-label">대상</div>{issue.target}</div>
        <div><div className="issue-card__meta-label">보안 수준</div>{LEVEL_LABEL[issue.level]}</div>
      </div>
      <div className="issue-card__body">
        <div className="issue-card__section-label">개요</div>
        <ol>{issue.summary.map((s, i) => <li key={i}>{s}</li>)}</ol>
        <div className="issue-card__section-label">조치 사항</div>
        <ul>{issue.action.map((a, i) => <li key={i}>{a}</li>)}</ul>
      </div>
    </div>
  )
}
