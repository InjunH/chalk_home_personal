# Lib 폴더 가이드라인

이 폴더는 CHALK HOME 웹사이트의 유틸리티 함수, 설정, 데이터 관리 파일들을 포함합니다.

## 현재 파일 구조

### assets.ts
**목적**: 타입 안전한 에셋 경로 관리 시스템

#### 구조
```typescript
export const ASSETS = {
  images: {
    hero: { ... },
    intro: { ... },
    features: { ... },
    review: { ... },
    content: { ... }
  },
  icons: {
    intro: string,
    quote: string,
    ui: { arrowLeft, arrowRight }
  },
  logos: {
    chalk: string
  },
  graphics: {
    heroGradient: string,
    lightOverlay: string
  }
}
```

#### 특징
- **타입 안전성**: 자동 완성 및 오타 방지
- **중앙 집중 관리**: 모든 에셋 경로를 한 곳에서 관리
- **카테고리 분류**: 논리적 그룹으로 구성
- **절대 경로**: `/images/`, `/icons/` 등 public 폴더 기준

### content.ts
**목적**: 웹사이트의 모든 텍스트 콘텐츠 관리

#### 구조
```typescript
export const siteContent = {
  navigation: { ... },
  hero: { ... },
  intro: { ... },
  review: { ... },
  features: {
    section1: { ... },
    section2: { ... },
    section3: { ... }
  },
  cta: { ... },
  footer: { ... }
}
```

#### 특징
- **다국어 지원 준비**: 향후 i18n 구조로 확장 가능
- **중앙 집중 관리**: 모든 텍스트를 한 곳에서 수정
- **타입 안전성**: content.ts 타입과 연동
- **구조적 조직**: 페이지 섹션별로 분류

## 개발 가이드라인

### 에셋 관리 원칙
```typescript
// 올바른 사용법
import { ASSETS } from '@/lib/assets'
<img src={ASSETS.images.hero.ipadMockupReal} alt="..." />

// 잘못된 사용법 - 하드코딩 금지
<img src="/images/hero/ipad-mockup-real.png" alt="..." />
```

### 콘텐츠 관리 원칙
```typescript
// 올바른 사용법
import { siteContent } from '@/lib/content'
const { hero } = siteContent
<h1>{hero.main_title.line1}</h1>

// 잘못된 사용법 - 하드코딩 금지
<h1>대치동에서도 볼 수 없던</h1>
```

### 새로운 에셋 추가 시
1. `public/` 폴더에 파일 배치
2. `assets.ts`에 경로 추가
3. 적절한 카테고리 분류
4. TypeScript 타입 확인

### 새로운 콘텐츠 추가 시
1. `content.ts`에 데이터 추가
2. 해당 섹션에 논리적 배치
3. `types/content.ts`에 타입 정의 추가

## 예정된 파일들

### constants.ts
```typescript
export const APP_CONFIG = {
  name: 'CHALK',
  version: '1.0.0',
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
    timeout: 10000
  },
  features: {
    analytics: true,
    darkMode: false
  }
}

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const
```

### utils.ts
```typescript
// 공통 유틸리티 함수들
export const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ')
}

export const formatDate = (date: Date | string) => {
  // 날짜 포맷팅 로직
}

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
) => {
  // 디바운스 로직
}
```

### api.ts (향후 백엔드 연동 시)
```typescript
class ApiClient {
  private baseUrl: string
  
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }
  
  async post<T>(endpoint: string, data: any): Promise<T> {
    // API 호출 로직
  }
  
  async get<T>(endpoint: string): Promise<T> {
    // API 호출 로직
  }
}

export const api = new ApiClient(APP_CONFIG.api.baseUrl)
```

### validation.ts (폼 검증 시)
```typescript
import { z } from 'zod'

export const emailSchema = z.object({
  email: z.string().email('유효한 이메일을 입력해주세요')
})

export const contactSchema = z.object({
  name: z.string().min(2, '이름을 입력해주세요'),
  email: z.string().email('유효한 이메일을 입력해주세요'),
  message: z.string().min(10, '메시지는 10자 이상 입력해주세요')
})
```

## 파일 구성 원칙

### 명명 규칙
- **kebab-case**: 파일명 (예: `user-utils.ts`)
- **camelCase**: 변수명, 함수명
- **PascalCase**: 클래스명, 컴포넌트명
- **UPPER_SNAKE_CASE**: 상수명

### 디렉토리 구조 (향후)
```
src/lib/
├── api/          # API 관련 함수들
├── utils/        # 유틸리티 함수들
├── constants/    # 상수 정의
├── hooks/        # 커스텀 훅들
├── store/        # 상태 관리 (Zustand)
└── validations/  # 검증 스키마들
```

### Export 패턴
```typescript
// 개별 export (권장)
export const utilFunction = () => {}
export const CONFIG = {}

// 네임스페이스 export (필요시)
export * as dateUtils from './date'
export * as stringUtils from './string'

// 기본 export (클래스나 주요 객체만)
export default class ApiClient {}
```

## 성능 고려사항

### Tree Shaking
- 필요한 것만 import하도록 구성
- default export보다 named export 선호
- 큰 라이브러리는 dynamic import 고려

### 번들 사이즈
- 외부 라이브러리 의존성 최소화
- 코드 분할 적절히 적용
- 사용하지 않는 코드 정리

### 메모리 관리
- 큰 데이터 객체는 lazy loading
- 이벤트 리스너 적절히 정리
- 메모리 누수 방지

## 타입 안전성

### 엄격한 타입 정의
```typescript
// 리터럴 타입 활용
type Theme = 'light' | 'dark'
type Size = 'sm' | 'md' | 'lg'

// 유니언 타입 활용  
type Status = 'loading' | 'success' | 'error'

// 제네릭 활용
interface ApiResponse<T> {
  data: T
  status: number
  message: string
}
```

### 런타임 검증
- Zod 스키마로 외부 데이터 검증
- 타입 가드 함수 활용
- 환경 변수 검증

## 주의사항
- 모든 경로는 절대 경로(`@/lib/...`) 사용
- 환경별 설정은 환경 변수 활용
- 민감 정보는 서버 사이드에서만 사용
- 타입 안전성을 해치는 `any` 사용 금지
- 순수 함수 작성 원칙 준수