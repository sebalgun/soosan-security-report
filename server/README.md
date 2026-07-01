# 백엔드 (2단계에서 구축)

다음 단계에서 이 폴더에 아래 구조로 구축할 예정입니다.

```
server/
  src/
    index.js            # Express 앱 진입점
    db.js               # SQLite 연결/초기화
    routes/
      reports.js        # 월별 보고서 CRUD API (관리자 입력폼이 호출)
      companies.js
    pdf/
      renderPdf.js       # Puppeteer로 클라이언트 리포트 페이지를 그대로 PDF화
  data/
    app.db              # SQLite 파일
```

## API 설계 초안
- `GET /api/reports/:year/:month` — 공통 보고서 데이터 (회사별 성적표 제외)
- `GET /api/reports/:year/:month/scorecard/:companyCode` — 특정 회사 보안 성적표만 반환
- `PUT /api/reports/:year/:month` — 관리자 입력폼에서 전체 데이터 저장 (upsert)
- `GET /api/reports/:year/:month/pdf?company=CODE` — 해당 회사 관점의 PDF 다운로드

프론트엔드(`client/src/data/mockReport.js`)의 데이터 구조를 그대로 DB 스키마/응답 형태로 사용할 수 있도록 설계했습니다.
