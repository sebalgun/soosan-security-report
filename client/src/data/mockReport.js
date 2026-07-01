// 이 파일은 2단계(관리자 입력폼 + 백엔드)에서 그대로 API 응답 스키마로 옮겨갈 목업 데이터입니다.
// 실제 문서(수산그룹_월간_보안보고_샘플.docx) 내용을 그대로 구조화했습니다.

export const COMPANIES = [
  { code: 'IND', name: '수산인더스트리' },
  { code: 'ENS', name: '수산이앤에스' },
  { code: 'CEBOTICS', name: '수산세보틱스' },
  { code: 'INT', name: '수산아이앤티' },
  { code: 'HOMETECH', name: '수산홈텍' },
]

const RISK = { CRITICAL: 'critical', HIGH: 'high', MEDIUM: 'medium', SAFE: 'safe' }

export const REPORT = {
  year: 2026,
  month: 2,
  publishedAt: '2026-03-05',

  cover: {
    title: '월간 그룹사 보안 현황',
    implementationRateAvg: 72,
    note: '고위험: 계열사 1개소 및 통합 시스템',
  },

  // 회사별 이슈 카운트 배지 (공통 섹션 - 전체 공개)
  statusGrid: [
    { code: 'ALL', name: '통합시스템', high: 1, critical: 0 },
    { code: 'IND', name: '수산인더스트리', high: 1, critical: 0 },
    { code: 'ENS', name: '수산이앤에스', high: 1, critical: 0 },
    { code: 'CEBOTICS', name: '수산세보틱스', high: 2, critical: 1 },
    { code: 'INT', name: '수산아이앤티', high: 1, critical: 0 },
  ],

  legend: [
    { level: '심각 (Critical)', desc: '개인정보/중요 데이터 침해 사실 확인 상태', tone: RISK.CRITICAL },
    { level: '위험 (High)', desc: '중요 데이터 외부 노출로 침해 발생 가능성 존재', tone: RISK.HIGH },
    { level: '보통 (Medium)', desc: '관리 미흡 시 향후 노출·사고로 이어질 수 있는 상태', tone: RISK.MEDIUM },
    { level: '낮음 (Low)', desc: '보안 통제·관리가 적절히 이루어지는 안정 상태', tone: RISK.SAFE },
  ],

  majorIssuePills: [
    { company: '수산세보틱스', text: 'ERP 웹 접속 포트 오픈 취약점', tone: RISK.HIGH },
    { company: '수산세보틱스', text: 'ERP 2차 인증 미적용', tone: RISK.HIGH },
    { company: '수산인더스트리/이앤에스', text: 'NAS 2차 인증 미적용', tone: RISK.HIGH },
    { company: '수산인더스트리', text: '홈페이지 웹서버 취약점 노출', tone: RISK.HIGH },
    { company: '수산홈텍', text: '웹 서버 취약점 노출', tone: RISK.HIGH },
  ],

  narratives: {
    vulnerability: {
      title: '보안 취약점 현황',
      lead: '매월 취약점 점검 도구를 통한 보안 취약점 점검 서비스 수행. 각 계열사별 조치 요청 후 검증 작업 진행 중. 2월 취약점 점검 도구 변경에 따른 탐지 고도화로 탐지 수 증가.',
      stats: [
        { label: '2월 총 탐지', value: '29건', delta: null, note: '점검 도구 고도화로 탐지량 증가' },
        { label: '조치 중 잔존 취약점 합산', value: '40건', delta: null, note: '계열사 조치 완료 후 최종 검증' },
      ],
    },
    phishing: {
      title: '악성메일 모의훈련 현황',
      lead: '2월 악성메일 모의훈련 결과 감염률이 전월 대비 감소했습니다. 반복 훈련과 감염자 대상 오프라인 보안 교육이 임직원 대응 역량 향상에 효과를 보이고 있습니다.',
      stats: [
        { label: '평균 감염률', value: '2.1%', delta: '-4.3%p', deltaDir: 'down', note: '전월 대비 개선' },
        { label: '2회 연속 감염자', value: '8명', delta: null, note: '오프라인 교육 대상' },
      ],
    },
    virus: {
      title: '통합 바이러스 탐지',
      lead: '2월 탐지 건수는 전월 대비 약 700건 감소했습니다. 보안 공지를 통한 인증 툴 사용 금지 메일 발송으로 탐지 건수가 감소한 것으로 확인됩니다.',
      stats: [
        { label: '2월 탐지 건수', value: '2,197건', delta: '-700건', deltaDir: 'down', note: '전월 대비' },
        { label: '고위험 악성코드', value: '0건', delta: null, note: '발견 시 IT보안팀 PC 점검' },
      ],
    },
  },

  // 계열사별 월별 현황 테이블 (공통 섹션)
  monthlyTables: {
    vulnerability: {
      months: ['2025.06', '2025.07', '2025.08', '2025.09', '2025.10', '2025.11', '2025.12', '2026.01', '2026.02'],
      rows: [
        { company: 'IND', values: ['2건(-)', '1건(▼1)', '1건(▼1)', '0건(▼1)', '0건(-)', '1건(▲1)', '0건(▼1)', '1건(▲1)', '17건(▲16)'] },
        { company: 'ENS', values: ['0건(▼3)', '0건(-)', '0건(-)', '0건(-)', '0건(-)', '0건(-)', '0건(-)', '1건(▲1)', '0건(▼1)'] },
        { company: 'CEBOTICS', values: ['0건(▼3)', '0건(-)', '0건(-)', '0건(-)', '2건(▲2)', '0건(-)', '14건(▲14)', '2건(▲2)', '12건(▲10)'] },
        { company: 'INT', values: ['1건(▼1)', '0건(-)', '0건(-)', '0건(-)', '0건(-)', '0건(-)', '0건(-)', '6건(▲6)', '0건(▼6)'] },
      ],
      note: '수산인더스트리 홈페이지 XSS 취약점 17건 검출·조치 완료 / 수산세보틱스 XSS 1건, 정보 누출 11건으로 총 12건 검출, 조치 중',
    },
    phishing: {
      months: ['25.07 5차', '25.08 6차', '25.09 7차', '25.10 8차', '25.11 9차', '25.12 10차', '26.01 1차', '26.02 2차'],
      rows: [
        { company: 'IND', values: ['2%(▼1%)', '6%(▲4%)', '2%(▼4%)', '8%(▲6%)', '0.9%(▼7%)', '15%(▲14%)', '5.7%(▼9%)', '1.5%(▼4.2%)'] },
        { company: 'ENS', values: ['2%(-)', '11%(▲9%)', '1%(▼10%)', '8%(▲7%)', '0.3%(▼7%)', '21%(▲20%)', '5.4%(▼16%)', '2.1%(▼3.3%)'] },
        { company: 'CEBOTICS', values: ['4%(-)', '7%(▲3%)', '2%(▼5%)', '6%(▲4%)', '0.2%(▼6%)', '21%(▲20%)', '9.9%(▼11%)', '2.7%(▼7.2%)'] },
        { company: 'INT', values: ['1%(▼1%)', '5%(▲4%)', '0%(▼5%)', '1%(▲1%)', '1%(-)', '12%(▲11%)', '1.4%(▼12%)', '0.7%(▼0.7%)'] },
      ],
      note: '명절 연휴 기간을 고려한 사회공학적 피싱메일 모의훈련 결과 전체 평균 감염률 4.3% 감소, 지속적인 개선 추세 확인',
    },
    virus: {
      months: ['2025.07', '2025.08', '2025.09', '2025.10', '2025.11', '2025.12', '2026.01', '2026.02'],
      rows: [
        { company: 'IND/ENS', values: ['120건(▼220)', '0건(-)', '5건(▲5)', '0건(▼5)', '39건(▲39)', '2,841건(▲2802)', '2,789건(▼52)', '2,120건(▼669)'] },
        { company: 'CEBOTICS', values: ['17건(▼125)', '16건(▼1)', '34건(▲18)', '119건(▲18)', '131건(▲12)', '44건(▼91)', '94건(▲50)', '45건(▼49)'] },
        { company: 'INT', values: ['59건(▼36)', '13건(▼46)', '53건(▲40)', '10건(▼43)', '10건(-)', '16건(▲6)', '26건(▲10)', '32건(▲6)'] },
      ],
      note: 'V3 검사 시 탐지/치료 내역이 개별 누적되어 전체 건수 증가. 대부분 낮은 위험 탐지(인증툴, 설계도면 등)',
    },
  },

  // 주요 보안 이슈사항 상세 카드 (공통 섹션)
  majorIssues: [
    {
      no: 1,
      title: '수산그룹 ERP 2차 인증 미적용',
      date: '2025.08',
      target: '수산세보틱스',
      level: RISK.HIGH,
      summary: [
        '유출된 계정 정보를 이용하여 ERP 로그인 성공 사례 확인',
        'ERP 시스템에 2단계 인증이 적용되지 않아 비밀번호 유출 시 로그인 가능한 취약점 존재',
        'ERP 시스템은 외부 접근이 가능하도록 노출되어 있어, 계정 탈취 시 재무·회계 시스템 유출로 이어질 위협 가능성 발생',
      ],
      action: ['ERP 2차 인증 적용 진행 중 (수산세보틱스 2026년 4월 중순 작업 예정)'],
    },
    {
      no: 2,
      title: '세보틱스 ERP 외부 HTTP(80)포트 오픈 취약점',
      date: '2026.01 (개방 확인 시점)',
      target: '수산세보틱스',
      level: RISK.HIGH,
      summary: [
        'ERP 등 재무 시스템의 HTTP 포트가 외부에서 접근 가능한 경우, 평문 통신으로 인해 통신 내역 확인 및 내부 정보 유출 가능',
        '방화벽을 통한 접근 제어로 내부에서만 사용 중이라는 회신을 받았으나, IT보안팀 확인 결과 외부 HTTP(80)포트 오픈 확인',
        '세보틱스 IT담당자를 통해 내용 전달 후 조치 요청 상태',
      ],
      action: ['세보틱스 담당자 내용 전달 완료, 회신 대기 중'],
    },
    {
      no: 3,
      title: '에너지계열 NAS 2차 인증 미적용',
      date: '2026.02',
      target: '수산인더스트리, 수산이앤에스',
      level: RISK.HIGH,
      summary: [
        '업무 파일 보관 용도로 NAS 사용 중',
        'NAS 사용자 2단계 인증이 적용되지 않아 추가 검증 없이 접근 가능',
        '업무망에서만 접속하도록 접근 제어는 되어 있으나, 2차 인증 비활성화 상태로 계정 보안 보완 필요',
      ],
      action: ['수산인더스트리 6월 중순 NAS 2차 인증 설정 예정', '수산이앤에스 2차 인증 작업 일정 확인 중'],
    },
    {
      no: 4,
      title: 'IND 홈페이지 SQL 인젝션 취약점',
      date: '2026.02',
      target: '수산인더스트리',
      level: RISK.HIGH,
      summary: [
        '취약점 스캔 도구를 통해 홈페이지 하위 경로 17곳에서 SQL 인젝션 취약점 탐지',
        '사용자 입력값을 악용해 DB를 변조, 인증 우회 또는 데이터 유출·삭제가 가능한 취약점으로 선제 조치 필요',
        'IND 담당자 측 전달 및 조치 요청, IT보안팀 WAF 차단 정책 추가 적용',
      ],
      action: ['담당자 조치 완료', 'SQL 인젝션 17건 WAF 차단 정책 적용 및 최종 검증 완료'],
    },
    {
      no: 5,
      title: '수산홈텍 홈페이지 SQL 인젝션 및 XSS 취약점',
      date: '2026.02',
      target: '수산홈텍',
      level: RISK.HIGH,
      summary: [
        '홈페이지 하위 경로 12곳에서 SQL 인젝션 2건, XSS 10건 탐지',
        'SQL 인젝션은 DB 변조를 통한 인증 우회·데이터 유출 위험, XSS는 쿠키 탈취·무단 접근 위험',
        '외부 호스팅 업체 보안 조치 요청 상태이며 조치 중',
      ],
      action: ['도메인 호스팅 업체 담당자 전달 완료, 회신 대기 중', '취약점 12건 WAF 차단 정책 적용 및 최종 검증 완료'],
    },
  ],

  securityNotice: {
    title: '2월 전사 보안 공지 — 발신자 명의 도용 및 URL 클릭 주의',
    body: '수산그룹 임직원 보안 인식 제고를 위해 IT보안팀에서 월 1회 보안 공지 메일을 발송합니다. 발신자가 정상으로 확인되더라도 URL이 포함된 경우 발신자에게 직접 확인 후 클릭해야 합니다.',
  },

  phishingDrill: {
    title: '2월 악성메일 모의훈련 — "배송이 일시 보류되었습니다"',
    note: '악성 모의메일 2회 연속 감염자 대상 명단 취합 후 오프라인 보안 교육 진행. 2회 연속 감염자는 총 8명입니다.',
    // 실제 서비스에서는 개인정보 보호를 위해 이 명단도 회사별 접근 제한을 권장합니다 (README 참고)
    byCompany: [
      { company: '수산인더스트리', total: 19, repeatOffenders: 5 },
      { company: '수산이앤에스', total: 15, repeatOffenders: 1 },
      { company: '수산세보틱스', total: 13, repeatOffenders: 2 },
      { company: '수산아이앤티', total: 1, repeatOffenders: 0 },
      { company: '수산홈텍', total: 1, repeatOffenders: 0 },
    ],
  },

  // ---------------------------------------------------------------
  // 회사별 비공개 데이터: 보안 성적표 — company 코드로만 접근 가능
  // ---------------------------------------------------------------
  scorecards: {
    IND: {
      grade: 'B', gradeTone: 'b', buildRate: 77, riskLevel: '주의', riskNote: '보안 정책 수립 필요',
      checklist: {
        네트워크: [{ label: '보안솔루션', state: 'ok' }, { label: '보안 정책', state: 'warn' }],
        엔드포인트: [{ label: '백신', state: 'ok' }, { label: '롤백솔루션', state: 'ok' }],
        사람: [{ label: '악성메일훈련', state: 'ok' }, { label: '보안교육', state: 'ok' }],
      },
      narrative: '기술적 취약점(홈페이지 XSS 17건)이 급증했으나 조치가 완료되었고, 임직원 모의훈련 참여율과 신고율은 양호한 수준을 유지하고 있습니다.',
      phishing: { openRate: '15%', groupAvg: '8%', clickRate: '1.5%', clickDelta: '▼4.2%', reportRate: '40%', participation: '98%' },
      vulnerability: { count: 17, delta: '▲16', domainShare: '10.8%', cause: '홈페이지 XSS' },
      virus: { count: 2120, delta: '▼669', highRisk: 0 },
      actionPlan: [
        { title: '홈페이지 취약점 재점검 주기 단축', desc: '월 1회 → 2주 1회 스캔으로 조기 탐지' },
        { title: 'NAS 2차 인증 6월 적용 일정 준수', desc: '일정 지연 시 접근 제어 임시 강화' },
      ],
    },
    ENS: {
      grade: 'B', gradeTone: 'b', buildRate: 77, riskLevel: '주의', riskNote: '보안 정책 수립 필요',
      checklist: {
        네트워크: [{ label: '보안솔루션', state: 'ok' }, { label: '보안 정책', state: 'warn' }],
        엔드포인트: [{ label: '백신', state: 'ok' }, { label: '롤백솔루션', state: 'ok' }],
        사람: [{ label: '악성메일훈련', state: 'ok' }, { label: '보안교육', state: 'ok' }],
      },
      narrative: 'NAS 2차 인증 미적용 건을 제외하면 전반적으로 안정적인 상태이며, 모의훈련 감염률도 지속적으로 개선되고 있습니다.',
      phishing: { openRate: '9%', groupAvg: '8%', clickRate: '2.1%', clickDelta: '▼3.3%', reportRate: '35%', participation: '96%' },
      vulnerability: { count: 0, delta: '▼1', domainShare: '0%', cause: '-' },
      virus: { count: 2120, delta: '▼669', highRisk: 0 },
      actionPlan: [
        { title: 'NAS 2차 인증 일정 확정', desc: '적용 일정 확정 후 공유' },
        { title: '모의훈련 신고율 우수 부서 사례 공유', desc: '타 부서 확산 유도' },
      ],
    },
    CEBOTICS: {
      grade: 'A', gradeTone: 'a', buildRate: 45, riskLevel: '안전', riskNote: '보안 1단계 구축 필요',
      checklist: {
        네트워크: [{ label: '보안솔루션', state: 'fail' }, { label: '보안 정책', state: 'warn' }],
        엔드포인트: [{ label: '백신', state: 'ok' }, { label: '롤백솔루션', state: 'fail' }],
        사람: [{ label: '악성메일훈련', state: 'ok' }, { label: '보안교육', state: 'fail' }],
      },
      narrative: 'ERP 2차 인증 미적용 및 외부 포트 오픈 등 위험도가 높은 이슈가 다수 확인되어 보안 1단계 구축이 시급합니다.',
      phishing: { openRate: '18%', groupAvg: '8%', clickRate: '2.7%', clickDelta: '▼7.2%', reportRate: '28%', participation: '91%' },
      vulnerability: { count: 12, delta: '▲10', domainShare: '7.6%', cause: 'XSS·정보 누출' },
      virus: { count: 45, delta: '▼49', highRisk: 0 },
      actionPlan: [
        { title: 'ERP 2차 인증 4월 적용 완료', desc: '재무 시스템 계정 탈취 리스크 제거' },
        { title: '외부 노출 포트 즉시 차단', desc: '방화벽 정책 재점검 및 최소 권한 원칙 적용' },
        { title: '보안 교육 미이수자 재교육', desc: '체크리스트 fail 항목 우선 해소' },
      ],
    },
    INT: {
      grade: 'C', gradeTone: 'c', buildRate: 90, riskLevel: '안전', riskNote: '보안 안정 상태',
      checklist: {
        네트워크: [{ label: '보안솔루션', state: 'ok' }, { label: '보안 정책', state: 'ok' }],
        엔드포인트: [{ label: '백신', state: 'ok' }, { label: '롤백솔루션', state: 'ok' }],
        사람: [{ label: '악성메일훈련', state: 'ok' }, { label: '보안교육', state: 'ok' }],
      },
      narrative: '현재 INT는 기술 취약점이 증가했으나, 임직원 대응력과 신고 체계는 개선 흐름을 보이고 있습니다. 신규 서비스 런칭에 따른 설정 오류가 다수 발견되었으나, 클릭률 개선과 높은 신고율을 감안할 때 실제 사고 확산 가능성은 통제 가능한 수준입니다.',
      phishing: { openRate: '15%', groupAvg: '8%', clickRate: '5%', clickDelta: '▼2%', reportRate: '40%', participation: '98%' },
      vulnerability: { count: 17, delta: '▲16', domainShare: '10.8%', cause: '설정 오류(신규서비스)' },
      virus: { count: null, delta: null, highRisk: null },
      actionPlan: [
        { title: '신규 서비스 오픈 전 보안 설정 점검 의무화', desc: '초기 설정 오류로 인한 취약점 급증 방지' },
        { title: '열람률 높은 조직 대상 표적 재훈련 시행', desc: '메일 기반 침해사고 진입 가능성 축소' },
        { title: '의심 메일 신고 보상·피드백 체계 정례화', desc: '사고 조기 탐지 및 확산 차단 역량 강화' },
      ],
    },
    HOMETECH: {
      grade: 'B', gradeTone: 'b', buildRate: 70, riskLevel: '주의', riskNote: '보안 정책 수립 필요',
      checklist: {
        네트워크: [{ label: '보안솔루션', state: 'ok' }, { label: '보안 정책', state: 'warn' }],
        엔드포인트: [{ label: '백신', state: 'ok' }, { label: '롤백솔루션', state: 'warn' }],
        사람: [{ label: '악성메일훈련', state: 'ok' }, { label: '보안교육', state: 'ok' }],
      },
      narrative: '홈페이지 SQL 인젝션·XSS 취약점이 확인되어 외부 호스팅사와 조치를 진행 중이며, WAF 차단 정책은 이미 적용·검증되었습니다.',
      phishing: { openRate: '11%', groupAvg: '8%', clickRate: '3.2%', clickDelta: '▼1.1%', reportRate: '30%', participation: '89%' },
      vulnerability: { count: 12, delta: '▲12', domainShare: '9.1%', cause: 'SQL 인젝션·XSS' },
      virus: { count: null, delta: null, highRisk: null },
      actionPlan: [
        { title: '호스팅사 조치 완료 여부 재확인', desc: '회신 지연 시 에스컬레이션' },
        { title: '롤백솔루션 도입 검토', desc: '엔드포인트 침해 시 신속 복구 체계 마련' },
      ],
    },
  },
}
