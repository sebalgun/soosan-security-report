import { useNavigate } from 'react-router-dom'
import { COMPANIES } from '../data/mockReport.js'

export default function TopBar({ year, month, companyCode, onCompanyChange }) {
  const navigate = useNavigate()

  return (
    <header className="top-bar">
      <div className="top-bar__brand">
        <span className="top-bar__brand-mark">SOOSAN·SEC</span>
        <span className="top-bar__title">월간 그룹사 보안보고</span>
        <span className="top-bar__period num">{year}.{String(month).padStart(2, '0')}</span>
      </div>
      <div className="top-bar__right">
        <select
          className="company-switch"
          value={companyCode}
          onChange={(e) => onCompanyChange(e.target.value)}
        >
          {COMPANIES.map((c) => (
            <option key={c.code} value={c.code}>{c.name}</option>
          ))}
        </select>
        <button className="btn btn--pdf" onClick={() => window.print()}>PDF 다운로드</button>
        <button className="btn btn--admin" onClick={() => navigate('/admin')}>관리자</button>
      </div>
    </header>
  )
}
