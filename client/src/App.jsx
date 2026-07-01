import { Routes, Route } from 'react-router-dom'
import SelectCompanyPage from './pages/SelectCompanyPage.jsx'
import ReportPage from './pages/ReportPage.jsx'
import AdminPlaceholderPage from './pages/AdminPlaceholderPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SelectCompanyPage />} />
      <Route path="/report" element={<ReportPage />} />
      <Route path="/admin" element={<AdminPlaceholderPage />} />
    </Routes>
  )
}
