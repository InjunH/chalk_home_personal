# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 설정 (Language Setting)

**중요**: 이 프로젝트에서는 한국어로 대화해주세요. 모든 설명, 주석, 커밋 메시지는 한국어를 사용합니다.

## ⚠️ 중요: Figma 디자인 준수 원칙 (CRITICAL)

**절대 원칙: 모든 UI 구현은 반드시 Figma 디자인을 정확히 따라야 합니다.**

### 🚨 금지 사항
- ❌ **자의적 디자인 해석 절대 금지**
- ❌ 개인적 취향이나 추측으로 디자인 변경 금지
- ❌ "더 나을 것 같다"는 이유로 임의 수정 금지
- ❌ Figma에 없는 요소 추가 금지
- ❌ 색상, 간격, 크기의 임의 조정 금지

### ✅ 필수 준수 사항
- ✅ **Figma URL 제공 시 반드시 해당 디자인 분석 후 구현**
- ✅ 픽셀 단위까지 정확한 디자인 구현
- ✅ 지정된 색상 값 정확히 사용
- ✅ 간격, 패딩, 마진 정확히 측정하여 적용
- ✅ 타이포그래피 (폰트, 크기, 굵기) 정확히 적용
- ✅ 확실하지 않은 부분은 반드시 사용자에게 확인 요청

### 🎯 구현 프로세스
1. **Figma URL 접근** → 디자인 상세 분석
2. **측정 및 추출** → 정확한 수치, 색상, 스타일 추출  
3. **구현 전 확인** → 불분명한 부분 사용자 확인
4. **정확한 구현** → 디자인 100% 일치하도록 코딩
5. **검증** → 구현 결과와 Figma 디자인 비교 검증

### 🔍 디자인 분석 시 체크리스트
- [ ] 레이아웃 구조 (Grid, Flexbox 등)
- [ ] 색상 값 (HEX, RGB)
- [ ] 간격 (margin, padding)
- [ ] 타이포그래피 (font-family, size, weight)
- [ ] 상호작용 상태 (hover, active, focus)
- [ ] 반응형 동작
- [ ] 애니메이션 및 전환 효과

## Project Overview

**CHALK HOME** - Hyper-Personalized Learning Solution 웹사이트

이 프로젝트는 CHALK AI 학습 플랫폼의 홈페이지로, Next.js 15.5.0 + React 19 + TypeScript + Tailwind CSS로 구축되었습니다.

### 프로젝트 특징
- **기술 스택**: Next.js 15.5.0, React 19.1.0, TypeScript, Tailwind CSS 4.x
- **디자인 소스**: Figma 디자인 시스템 (정확한 구현 필수)
- **콘텐츠**: 실제 CHALK 서비스 콘텐츠 및 에셋 사용
- **성능**: 최적화된 이미지, 번들 크기, 접근성 고려

## Development Setup

### 설치 및 실행
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 타입 체크
npm run type-check

# 린트 검사
npm run lint
```

### 개발 환경
- **개발 서버**: http://localhost:3000
- **Node.js**: v18+ 권장
- **패키지 매니저**: npm
- **빌드 도구**: Turbopack (Next.js 15 기본)

## Architecture Guidelines

### 폴더 구조
```
src/
├── app/              # Next.js App Router 페이지
├── components/       # React 컴포넌트
│   ├── common/      # Header, Footer 등 공통 컴포넌트
│   ├── sections/    # 페이지 섹션 컴포넌트
│   └── ui/          # 재사용 UI 컴포넌트
├── lib/             # 유틸리티, 설정, 데이터
├── types/           # TypeScript 타입 정의
└── styles/          # 글로벌 스타일
```

### 핵심 원칙
- **Figma First**: 모든 UI는 Figma 디자인을 정확히 따름
- **TypeScript Strict**: 타입 안전성 최우선
- **Performance**: 이미지 최적화, 번들 최적화, Core Web Vitals
- **Accessibility**: WCAG 2.1 AA 기준 준수

## Common Commands

### 개발 명령어
- `npm run dev` - 개발 서버 시작 (Turbopack)
- `npm run build` - 프로덕션 빌드
- `npm run start` - 프로덕션 서버 실행
- `npm run lint` - ESLint 검사
- `npm run type-check` - TypeScript 타입 체크

### 유용한 스크립트
- `npm run analyze` - 번들 분석 (향후 추가 예정)
- `npm run test` - 테스트 실행 (향후 추가 예정)

## 중요 파일들

### 설정 파일
- `next.config.js` - Next.js 설정
- `tailwind.config.ts` - Tailwind CSS 설정
- `tsconfig.json` - TypeScript 설정
- `.eslintrc.json` - ESLint 설정

### 데이터 및 에셋
- `CONTENT_DATA.json` - 웹사이트 모든 텍스트 콘텐츠
- `src/lib/assets.ts` - 이미지 및 에셋 경로 관리
- `public/` - 정적 파일 (이미지, 아이콘 등)

### 문서화
- 각 폴더별 `claude.md` - 개발 가이드라인
- `PROJECT_PLAN.md` - 프로젝트 계획 및 진행 상황
- `TECH_STACK.md` - 기술 스택 상세 정보
