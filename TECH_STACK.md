# CHALK HOME 기술 스택 확정

## ✅ 최종 확정 기술 스택

### 🎯 Core Framework
- **Next.js 14.2.x** (App Router)
  - 최신 React Server Components 지원
  - 뛰어난 SEO 최적화
  - 이미지 최적화 내장
  - 빌트인 폰트 최적화

### 📝 Language
- **TypeScript 5.x**
  - 타입 안정성
  - 개발 생산성 향상
  - IDE 자동완성 지원

### 🎨 Styling
- **Tailwind CSS 3.4.x**
  - 빠른 프로토타이핑
  - 일관된 디자인 시스템
  - 퍼지 기능 제거로 번들 사이즈 최적화
  
- **CSS Modules** (보조)
  - 복잡한 애니메이션용
  - 컴포넌트별 스코프 격리

### 🎬 Animation
- **Framer Motion 11.x**
  - 부드러운 애니메이션
  - 스크롤 트리거 애니메이션
  - 제스처 기반 인터랙션
  - 패럴랙스 효과

### 📦 State Management
- **Zustand 4.5.x**
  - 간단한 API
  - TypeScript 완벽 지원
  - 작은 번들 사이즈 (8kb)
  - DevTools 지원

### 🛠️ Development Tools

#### Code Quality
- **ESLint 8.x**
  - Next.js 권장 설정
  - TypeScript 규칙
  - Tailwind CSS 클래스 정렬
  
- **Prettier 3.x**
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

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "typescript": "^5.4.0",
    "tailwindcss": "^3.4.0",
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
    "@types/node": "^20.11.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.2.0",
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

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/styles/*": ["./src/styles/*"],
      "@/types/*": ["./src/types/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### tailwind.config.ts
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B5EFF',
          light: '#8B7FFF',
          dark: '#5548E0',
        },
        secondary: '#FF6B9D',
        accent: '#FFD93D',
        gray: {
          900: '#1A1A1A',
          800: '#2D2D2D',
          700: '#404040',
          600: '#525252',
          500: '#737373',
          400: '#A3A3A3',
          300: '#D4D4D4',
          200: '#E5E5E5',
          100: '#F5F5F5',
        }
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
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

## 🚀 다음 단계

이제 기술 스택이 확정되었으므로 Next.js 프로젝트를 초기화할 준비가 되었습니다.