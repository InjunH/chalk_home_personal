# CHALK HOME 프로젝트 계획

## 프로젝트 개요
- **프로젝트명**: CHALK HOME
- **목적**: Hyper-Personalized Learning Solution (초개인화 학습 솔루션)
- **디자인 소스**: Figma ([최종산출물] FIRSTHABIT&CHALK_WEB)

## Figma 디자인 분석 결과

### 주요 섹션
1. **메인 페이지 (main)**
   - KV (Key Visual) 섹션
     - 히어로 이미지 + 라이트 효과
     - iPad 목업 이미지
   - 타이틀 섹션: "WE ALL Dream DIFFERENTLY"
   - 인트로 섹션: "INTRO : INTO THE CHALK"
   - 카피 섹션: "대치동에서도 볼 수 없던 최고의 선생님을 만나보세요"
   - 리뷰 섹션: 베타 학부모 후기

### 디자인 특징
- 그라데이션 효과 사용
- 모던하고 깔끔한 레이아웃
- 교육 테크 분야의 프리미엄 느낌

## 기술 스택 제안

**자세한 내용**: [TECH_STACK.md](./TECH_STACK.md) 참조

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Modules
- **Animation**: Framer Motion

### 상태 관리
- **Zustand** (확정)

### 개발 도구
- **ESLint** + **Prettier** + **Husky**

## 현재 프로젝트 구조

```
chalk_home/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          ✅ 생성됨
│   │   ├── page.tsx            ✅ 생성됨
│   │   └── globals.css         ✅ 생성됨
│   ├── components/              # 컴포넌트 (예정)
│   │   ├── common/             # 공통 컴포넌트
│   │   ├── sections/           # 페이지 섹션
│   │   │   ├── HeroSection/
│   │   │   ├── IntroSection/
│   │   │   ├── ReviewSection/
│   │   │   └── ...
│   │   └── ui/                 # UI 기본 컴포넌트
│   ├── lib/                    # 유틸리티 (예정)
│   ├── hooks/                  # 커스텀 훅 (예정)
│   ├── styles/                 # 글로벌 스타일 (예정)
│   └── types/                  # TypeScript 타입 (예정)
├── public/                     # 정적 파일 ✅ 생성됨
├── package.json                ✅ 생성됨
├── tsconfig.json               ✅ 생성됨
├── tailwind.config.ts          ✅ 생성됨
├── next.config.ts              ✅ 생성됨
├── eslint.config.mjs           ✅ 생성됨
├── PROJECT_PLAN.md             ✅ 완료
├── TECH_STACK.md               ✅ 완료
├── SECTION_SPECS.md            ✅ 완료
├── CONTENT_DATA.json           ✅ 완료
└── CLAUDE.md                   ✅ 완료
```

## 개발 단계

### Phase 1: 프로젝트 초기 설정 (1일) ✅ 완료
- [x] Next.js 프로젝트 생성 (Next.js 15.5.0)
- [x] TypeScript 설정 (TypeScript 5)
- [x] Tailwind CSS 설정 (Tailwind CSS 4)
- [x] ESLint 설정
- [x] 기본 폴더 구조 생성 (App Router 구조)

### Phase 2: 디자인 시스템 구축 (2일)
- [ ] 색상 팔레트 정의
- [ ] 타이포그래피 시스템
- [ ] 스페이싱 시스템
- [ ] 기본 UI 컴포넌트 (Button, Card, etc.)

### Phase 3: 메인 페이지 개발 (3-4일)
- [ ] Hero 섹션 (KV)
- [ ] Intro 섹션
- [ ] Dream 섹션
- [ ] 카피 섹션
- [ ] 리뷰 섹션
- [ ] 애니메이션 효과

### Phase 4: 반응형 디자인 (2일)
- [ ] 모바일 최적화
- [ ] 태블릿 최적화
- [ ] 데스크톱 최적화

### Phase 5: 성능 최적화 & 테스트 (1-2일)
- [ ] 이미지 최적화
- [ ] 코드 스플리팅
- [ ] SEO 최적화
- [ ] 크로스 브라우저 테스트

## 다음 단계

1. ✅ 기술 스택 확정 ([TECH_STACK.md](./TECH_STACK.md))
2. ✅ Next.js 프로젝트 초기화 (Next.js 15.5.0, React 19.1.0, TypeScript 설정 완료)
3. ⏳ Figma 디자인에서 에셋 추출 ([CONTENT_DATA.json](./CONTENT_DATA.json))
4. 컴포넌트 개발 시작

## 현재 설치된 기술 스택

### ✅ 설치 완료
- **Next.js**: 15.5.0 (App Router)
- **React**: 19.1.0 (최신 React 19)
- **TypeScript**: 5.x
- **Tailwind CSS**: 4.x
- **ESLint**: 9.x

### 📦 추가 설치 예정
- Framer Motion (애니메이션)
- Zustand (상태 관리)
- 기타 UI 라이브러리들

## 다음 단계

**3단계**: Figma 디자인에서 에셋 추출
- 이미지 파일 다운로드 및 최적화
- 아이콘 추출 및 SVG 변환
- 폰트 파일 설정

**4단계**: 컴포넌트 개발 시작
- Hero Section 구현
- 기본 UI 컴포넌트 라이브러리
- 디자인 시스템 적용