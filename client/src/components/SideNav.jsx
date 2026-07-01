const SECTIONS = [
  { id: 'sec-overview', label: '월간 그룹사 보안 현황' },
  { id: 'sec-scorecard', label: '보안 성적표', restricted: true },
  { id: 'sec-vulnerability', label: '1. 보안 취약점 현황' },
  { id: 'sec-phishing', label: '2. 악성메일 모의훈련 현황' },
  { id: 'sec-virus', label: '3. 통합 바이러스 탐지' },
  { id: 'sec-affiliates', label: '4. 계열사별 현황' },
  { id: 'sec-issues', label: '5. 주요 보안 이슈사항' },
  { id: 'sec-diagnosis', label: '6. 월간 보안 진단 현황' },
]

export default function SideNav() {
  return (
    <nav className="side-nav">
      <div className="side-nav__eyebrow">목차</div>
      {SECTIONS.map((s) => (
        <a key={s.id} href={`#${s.id}`} className={s.restricted ? 'is-restricted' : ''}>
          {s.label}
        </a>
      ))}
    </nav>
  )
}
