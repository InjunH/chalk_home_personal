# CHALK HOME 기술 스택 확정

## ✅ 최종 확정 기술 스택

### 🎯 Core Framework
- **Next.js 15.5.0** (App Router) ✅ 설치됨
  - 최신 React 19 Server Components 지원
  - Turbopack 개발 서버 적용
  - 뛰어난 SEO 최적화
  - 이미지 최적화 내장
  - 빌트인 폰트 최적화

### 📝 Language
- **TypeScript 5.x** ✅ 설치됨
  - 엄격한 타입 검사 활성화
  - 타입 안정성
  - 개발 생산성 향상
  - IDE 자동완성 지원
  - Path aliases 설정 (`@/*` 등)

### 🎨 Styling
- **Tailwind CSS 4.x** ✅ 설치됨
  - PostCSS 기반 최신 아키텍처
  - 빠른 프로토타이핑
  - 일관된 디자인 시스템
  - CHALK 브랜드 색상 팩럿
  - 커스텀 애니메이션 설정
  
- **CSS Modules** (보조) - 예정
  - 복잡한 애니메이션용
  - 컴포넌트별 스코프 격리

### 🎬 Animation
- **Framer Motion 11.x** 📦 예정
  - 부드러운 애니메이션
  - 스크롤 트리거 애니메이션
  - 제스처 기반 인터랙션
  - 패럴랙스 효과

### 📦 State Management
- **Zustand 4.5.x** 📦 예정
  - 간단한 API
  - TypeScript 완벽 지원
  - 작은 번들 사이즈 (8kb)
  - DevTools 지원

### 🛠️ Development Tools

#### Code Quality
- **ESLint 9.x** ✅ 설치됨
  - Next.js 15.5.0 권장 설정
  - TypeScript 엄격 규칙
  - Tailwind CSS 클래스 정렬 (예정)
  
- **Prettier 3.x** 📦 예정
  - 일관된 코드 포맷팅
  - Tailwind CSS 플러그인

#### Git Hooks
- **Husky 9.x**
  - pre-commit 훅
  - commit-msg 검증
  
- **lint-staged 15.x**
  - 스테이징된 파일만 린트

#### Commit Convention
- **Commitizen**
  - 표준화된 커밋 메시지
  
- **Conventional Commits**
  - feat, fix, docs, style, refactor

### 📱 추가 라이브러리

#### UI/UX
- **@radix-ui/react-**
  - 접근성 보장된 UI 컴포넌트
  - Dialog, Dropdown, Accordion 등
  
- **react-intersection-observer**
  - 스크롤 트리거 애니메이션용
  
- **clsx + tailwind-merge**
  - 조건부 클래스 관리

#### 폰트
- **Pretendard**
  - 한글 최적화 폰트
  - Variable Font 지원

#### 아이콘
- **lucide-react**
  - 가벼운 SVG 아이콘
  - Tree-shaking 지원

#### 이미지
- **sharp** (Next.js 이미지 최적화용)
  - 자동 WebP 변환
  - 리사이징

### 📊 Analytics & Monitoring
- **Vercel Analytics** (프로덕션)
  - Web Vitals 모니터링
  - 실시간 성능 지표

### 🚀 Deployment
- **Vercel**
  - Next.js 네이티브 지원
  - 자동 배포 (GitHub 연동)
  - Edge Functions
  - 이미지 최적화 CDN

## 📋 Package.json Dependencies

## 현재 설치된 의존성 (package.json)

```json
{
  "name": "chalk-web",
  "version": "0.1.0",
  "dependencies": {
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "next": "15.5.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    "eslint": "^9",
    "eslint-config-next": "15.5.0",
    "@eslint/eslintrc": "^3"
  }
}
```

## 추가 예정 의존성

```json
{
  "dependencies": {
    "framer-motion": "^11.0.0",
    "zustand": "^4.5.0",
    "@radix-ui/react-dialog": "^1.0.0",
    "@radix-ui/react-dropdown-menu": "^2.0.0",
    "@radix-ui/react-accordion": "^1.1.0",
    "react-intersection-observer": "^9.8.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "lucide-react": "^0.350.0"
  },
  "devDependencies": {
    "prettier": "^3.2.0",
    "prettier-plugin-tailwindcss": "^0.5.0",
    "husky": "^9.0.0",
    "lint-staged": "^15.2.0",
    "@commitlint/cli": "^18.6.0",
    "@commitlint/config-conventional": "^18.6.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

## 🔧 설정 파일들

### 현재 설정된 tsconfig.json

사용자가 생성한 코드에서 확인해주세요.

### 추가 예정 tsconfig.json 설정

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/styles/*": ["./src/styles/*"],
      "@/types/*": ["./src/types/*"]
    }
  }
}
```

### 현재 설정된 tailwind.config.ts

사용자가 생성한 코드에서 확인해주세요. 예상 설정:

```typescript
// CHALK 브랜드 색상과 애니메이션이 적용된 tailwind.config.ts
// CONTENT_DATA.json의 디자인 시스템과 연동
```

## ✅ 기술 스택 선정 이유

### Next.js 14 (App Router)
- ✅ SEO 최적화 필수 (교육 플랫폼 특성상 검색 노출 중요)
- ✅ 서버 컴포넌트로 초기 로딩 속도 개선
- ✅ 이미지 최적화 자동화
- ✅ Vercel 배포 최적화

### TypeScript
- ✅ 대규모 프로젝트 유지보수성
- ✅ 컴포넌트 props 타입 안정성
- ✅ IDE 자동완성으로 개발 속도 향상

### Tailwind CSS
- ✅ 디자인 시스템 일관성
- ✅ 반응형 디자인 구현 용이
- ✅ 빠른 프로토타이핑
- ✅ 작은 CSS 번들 사이즈

### Framer Motion
- ✅ 고품질 애니메이션 구현
- ✅ 스크롤 기반 애니메이션 지원
- ✅ 성능 최적화된 애니메이션

### Zustand
- ✅ 간단한 API (Redux 대비)
- ✅ TypeScript 완벽 지원
- ✅ 작은 번들 사이즈
- ✅ 빠른 학습 곡선

## 🚀 현재 상황

**✅ 완료된 단계**:
- 1단계: 기술 스택 확정
- 2단계: Next.js 초기화 (Next.js 15.5.0 + React 19.1.0 + TypeScript + Tailwind CSS 4)

**📦 다음 단계**:
- 3단계: Figma 에셋 추출
- 4단계: 컴포넌트 개발

**주요 버전 업그레이드**:
- Next.js 14.2.x → 15.5.0 (최신 버전)
- React 18.3.0 → 19.1.0 (최신 React 19)
- Tailwind CSS 3.4.x → 4.x (PostCSS 아키텍처)
- ESLint 8.x → 9.x (최신 버전)