import { useSearchParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { COMPANIES, REPORT } from '../data/mockReport.js'
import TopBar from '../components/TopBar.jsx'
import SideNav from '../components/SideNav.jsx'
import { SectionHeading, StatusGrid, Legend, PillList, StatRow } from '../components/Common.jsx'
import MonthlyTable from '../components/MonthlyTable.jsx'
import IssueCard from '../components/IssueCard.jsx'
import ScorecardPanel from '../components/ScorecardPanel.jsx'

export default function ReportPage() {
  const [params, setParams] = useSearchParams()
  const navigate = useNavigate()
  const companyCode = params.get('company') || COMPANIES[0].code
  const company = COMPANIES.find((c) => c.code === companyCode) || COMPANIES[0]

  useEffect(() => {
    if (!params.get('company')) {
      setParams({ company: COMPANIES[0].code }, { replace: true })
    }
  }, [])

  const handleCompanyChange = (code) => setParams({ company: code })

  return (
    <div className="app-shell">
      <TopBar year={REPORT.year} month={REPORT.month} companyCode={companyCode} onCompanyChange={handleCompanyChange} />
      <SideNav />

      <main className="report">
        {/* 표지 요약 배너 */}
        <section className="section" id="sec-overview">
          <div className="cover">
            <div className="cover__eyebrow">SOOSAN GROUP SECURITY REPORT</div>
            <h1 className="cover__title">{REPORT.year}.{String(REPORT.month).padStart(2, '0')} {REPORT.cover.title}</h1>
            <div className="cover__stat-row">
              <div>
                <div className="cover__stat-label">보안 1단계 이행률 평균</div>
                <div className="cover__stat-value num">{REPORT.cover.implementationRateAvg}%</div>
              </div>
              <div>
                <div className="cover__stat-label">고위험 대상</div>
                <div className="cover__stat-value" style={{ fontSize: 15 }}>{REPORT.cover.note}</div>
              </div>
              <div>
                <div className="cover__stat-label">현재 조회 중인 회사</div>
                <div className="cover__stat-value" style={{ fontSize: 15 }}>{company.name}</div>
              </div>
            </div>
          </div>

          <SectionHeading title="계열사 보안 이슈사항" badge="전체 공개" />
          <StatusGrid items={REPORT.statusGrid} />
        </section>

        {/* 위험도 정의 + 이번 달 주요 이슈 하이라이트 */}
        <section className="section">
          <Legend items={REPORT.legend} />
          <p className="section-lead" style={{ marginTop: 16, marginBottom: 10, fontWeight: 700 }}>
            {REPORT.year}.{String(REPORT.month).padStart(2, '0')} 보안 이슈사항: 위험 {REPORT.statusGrid.reduce((s, i) => s + i.high, 0)}건 발생
          </p>
          <PillList items={REPORT.majorIssuePills} />
        </section>

        {/* 회사별 비공개 - 보안 성적표 */}
        <section className="section" id="sec-scorecard">
          <SectionHeading title="보안 성적표" badge={`${company.name} 전용 · 비공개`} />
          <ScorecardPanel companyName={company.name} data={REPORT.scorecards[companyCode]} />
        </section>

        {/* 1. 보안 취약점 현황 */}
        <section className="section" id="sec-vulnerability">
          <SectionHeading no="01" title={REPORT.narratives.vulnerability.title} badge="전체 공개" />
          <p className="section-lead">{REPORT.narratives.vulnerability.lead}</p>
          <StatRow stats={REPORT.narratives.vulnerability.stats} />
        </section>

        {/* 2. 악성메일 모의훈련 현황 */}
        <section className="section" id="sec-phishing">
          <SectionHeading no="02" title={REPORT.narratives.phishing.title} badge="전체 공개" />
          <p className="section-lead">{REPORT.narratives.phishing.lead}</p>
          <StatRow stats={REPORT.narratives.phishing.stats} />
        </section>

        {/* 3. 통합 바이러스 탐지 */}
        <section className="section" id="sec-virus">
          <SectionHeading no="03" title={REPORT.narratives.virus.title} badge="전체 공개" />
          <p className="section-lead">{REPORT.narratives.virus.lead}</p>
          <StatRow stats={REPORT.narratives.virus.stats} />
        </section>

        {/* 4. 계열사별 현황 */}
        <section className="section" id="sec-affiliates">
          <SectionHeading no="04" title="수산그룹 계열사별 현황" badge="전체 공개" />

          <h3 style={{ fontSize: 14, marginBottom: 10 }}>계열사별 보안 취약점</h3>
          <MonthlyTable {...REPORT.monthlyTables.vulnerability} />

          <h3 style={{ fontSize: 14, margin: '24px 0 10px' }}>계열사별 악성메일 모의훈련 현황</h3>
          <MonthlyTable {...REPORT.monthlyTables.phishing} />

          <h3 style={{ fontSize: 14, margin: '24px 0 10px' }}>계열사별 바이러스 탐지 현황</h3>
          <MonthlyTable {...REPORT.monthlyTables.virus} />
        </section>

        {/* 5. 주요 보안 이슈사항 */}
        <section className="section" id="sec-issues">
          <SectionHeading no="05" title="수산그룹 전체 주요 보안 이슈사항" badge="전체 공개" />
          {REPORT.majorIssues.map((issue) => <IssueCard issue={issue} key={issue.no} />)}
        </section>

        {/* 6. 월간 보안 진단 현황 */}
        <section className="section" id="sec-diagnosis">
          <SectionHeading no="06" title="수산그룹 월간 보안 진단 현황" badge="전체 공개" />

          <h3 style={{ fontSize: 14, marginBottom: 10 }}>{REPORT.securityNotice.title}</h3>
          <p className="section-lead">{REPORT.securityNotice.body}</p>

          <h3 style={{ fontSize: 14, margin: '24px 0 10px' }}>{REPORT.phishingDrill.title}</h3>
          <p className="section-lead">{REPORT.phishingDrill.note}</p>
          <div className="table-wrap">
            <table className="rt">
              <thead>
                <tr><th className="label-col">계열사</th><th>대상 인원</th><th>2회 연속 감염자</th></tr>
              </thead>
              <tbody>
                {REPORT.phishingDrill.byCompany.map((row) => (
                  <tr key={row.company}>
                    <td className="label-col">{row.company}</td>
                    <td>{row.total}명</td>
                    <td className={row.repeatOffenders > 0 ? 'delta-up' : ''}>{row.repeatOffenders}명</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div style={{ textAlign: 'center', color: 'var(--ink-300)', fontSize: 12, marginTop: 40 }}>
          본 보고서는 IT보안팀에서 매월 발행합니다 · 발행일 {REPORT.publishedAt}
        </div>
      </main>
    </div>
  )
}
