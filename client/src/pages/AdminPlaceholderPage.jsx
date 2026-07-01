import { useNavigate } from 'react-router-dom'

export default function AdminPlaceholderPage() {
  const navigate = useNavigate()
  return (
    <div style={{ maxWidth: 560, margin: '80px auto', padding: 24, textAlign: 'center' }}>
      <h1 style={{ fontSize: 20, marginBottom: 10 }}>관리자 입력폼</h1>
      <p style={{ color: 'var(--ink-500)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
        지금은 <b>1단계: 전체 템플릿 디자인</b> 확인 단계입니다.<br />
        관리자가 월간 데이터를 입력하고 저장하면 이 화면의 보고서가 자동 생성되도록,
        다음 단계에서 백엔드 API와 함께 이 페이지를 구축합니다.
      </p>
      <button className="btn btn--pdf" style={{ color: 'var(--navy-900)' }} onClick={() => navigate('/')}>
        회사 선택으로 돌아가기
      </button>
    </div>
  )
}
