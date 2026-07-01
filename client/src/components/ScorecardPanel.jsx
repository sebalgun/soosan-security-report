const STATE_CLASS = { ok: 'checklist__item--ok', warn: 'checklist__item--warn', fail: 'checklist__item--fail' }

function Checklist({ groups }) {
  return (
    <>
      {Object.entries(groups).map(([groupName, items]) => (
        <div key={groupName} style={{ marginBottom: 8 }}>
          <span className="stat-card__note" style={{ fontWeight: 700, color: 'var(--ink-700)' }}>{groupName}</span>
          <div className="checklist">
            {items.map((it) => (
              <span key={it.label} className={`checklist__item ${STATE_CLASS[it.state]}`}>{it.label}</span>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default function ScorecardPanel({ companyName, data }) {
  if (!data) {
    return (
      <div className="scorecard-lock">
        아직 이번 달 보안 성적표 데이터가 입력되지 않았습니다.<br />
        관리자 입력 후 이 화면에 자동으로 표시됩니다.
      </div>
    )
  }

  return (
    <div className="scorecard">
      <div className="scorecard__head">
        <div className="scorecard__grade">{data.grade}</div>
        <div>
          <div className="scorecard__name">{companyName}</div>
          <div className="scorecard__build-rate">보안 1단계 구축률 {data.buildRate}% · 위험도 {data.riskLevel}</div>
        </div>
      </div>

      <div className="scorecard__narrative">{data.narrative}</div>

      <div style={{ padding: '16px 22px', borderBottom: '1px solid var(--hairline)' }}>
        <Checklist groups={data.checklist} />
      </div>

      <div className="scorecard__grid">
        <div className="scorecard__panel">
          <div className="scorecard__panel-title">
            악성메일 모의훈련 <span className="scorecard__panel-tag">참여율 {data.phishing.participation}</span>
          </div>
          <div className="scorecard__metric-row">
            <div><div className="scorecard__metric-label">열람률</div><div className="scorecard__metric-value">{data.phishing.openRate}</div></div>
            <div><div className="scorecard__metric-label">클릭률</div><div className="scorecard__metric-value">{data.phishing.clickRate} <span style={{ fontSize: 11, color: 'var(--risk-safe)' }}>{data.phishing.clickDelta}</span></div></div>
          </div>
          <div className="scorecard__metric-row">
            <div><div className="scorecard__metric-label">신고율</div><div className="scorecard__metric-value">{data.phishing.reportRate}</div></div>
            <div><div className="scorecard__metric-label">그룹 평균 열람률</div><div className="scorecard__metric-value">{data.phishing.groupAvg}</div></div>
          </div>
        </div>

        <div className="scorecard__panel">
          <div className="scorecard__panel-title">
            보안 취약점 <span className="scorecard__panel-tag">전월 대비 {data.vulnerability.delta}</span>
          </div>
          <div className="scorecard__metric-row">
            <div><div className="scorecard__metric-label">당월 발생</div><div className="scorecard__metric-value">{data.vulnerability.count}건</div></div>
            <div><div className="scorecard__metric-label">도메인 대비</div><div className="scorecard__metric-value">{data.vulnerability.domainShare}</div></div>
          </div>
          <div className="scorecard__panel-note">주요 원인: {data.vulnerability.cause}</div>
        </div>

        <div className="scorecard__panel" style={{ gridColumn: '1 / -1' }}>
          <div className="scorecard__panel-title">바이러스 탐지 현황</div>
          {data.virus.count == null ? (
            <div className="scorecard__panel-note">데이터 입력 필요 — 관리자 입력 후 표시됩니다.</div>
          ) : (
            <div className="scorecard__metric-row">
              <div><div className="scorecard__metric-label">탐지 건수</div><div className="scorecard__metric-value">{data.virus.count}건</div></div>
              <div><div className="scorecard__metric-label">전월 대비</div><div className="scorecard__metric-value">{data.virus.delta}</div></div>
            </div>
          )}
        </div>
      </div>

      <div className="action-plan">
        <div className="scorecard__panel-title" style={{ marginBottom: 12 }}>경영진 제언 (Action Plan)</div>
        {data.actionPlan.map((a, i) => (
          <div className="action-plan__item" key={i}>
            <span className="action-plan__num">{i + 1}</span>
            <div>
              <div className="action-plan__title">{a.title}</div>
              <div className="action-plan__desc">{a.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
