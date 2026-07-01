import { useNavigate } from 'react-router-dom'
import { COMPANIES, REPORT } from '../data/mockReport.js'

export default function SelectCompanyPage() {
  const navigate = useNavigate()

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--navy-900)', padding: 24,
    }}>
      <div style={{ maxWidth: 480, width: '100%' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#9db4de', letterSpacing: '0.08em', marginBottom: 10 }}>
          SOOSAN GROUP · IT보안팀
        </div>
        <h1 style={{ color: '#fff', fontSize: 24, marginBottom: 6 }}>월간 보안보고 조회</h1>
        <p style={{ color: '#b7c4dd', fontSize: 13.5, marginBottom: 28, lineHeight: 1.6 }}>
          {REPORT.year}년 {REPORT.month}월 보고서 — 소속 회사를 선택하면 공통 보안 현황과<br />
          해당 회사의 보안 성적표를 함께 확인할 수 있습니다.
        </p>

        <div style={{ display: 'grid', gap: 10 }}>
          {COMPANIES.map((c) => (
            <button
              key={c.code}
              onClick={() => navigate(`/report?company=${c.code}`)}
              style={{
                textAlign: 'left', padding: '14px 16px', borderRadius: 10,
                border: '1px solid rgba(255,255,255,0.18)', background: 'rgba(255,255,255,0.06)',
                color: '#fff', fontSize: 14.5, fontWeight: 600, cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}
            >
              {c.name}
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#9db4de' }}>{c.code} →</span>
            </button>
          ))}
        </div>

        <div style={{ marginTop: 24, borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 16 }}>
          <button
            onClick={() => navigate('/admin')}
            style={{
              background: 'none', border: 'none', color: '#9db4de', fontSize: 12.5,
              cursor: 'pointer', textDecoration: 'underline', padding: 0,
            }}
          >
            IT보안팀 관리자로 접속 (2단계에서 구축)
          </button>
        </div>
      </div>
    </div>
  )
}
