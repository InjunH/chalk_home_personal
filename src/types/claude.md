# Types 폴더 가이드라인

이 폴더는 CHALK HOME 웹사이트의 TypeScript 타입 정의를 관리합니다.

## 현재 파일 구조

### content.ts
**목적**: 웹사이트 콘텐츠의 타입 정의

#### 주요 인터페이스

##### Navigation 타입
```typescript
export interface NavigationContent {
  main_menu: string[]
  language: string
}
```

##### Hero Section 타입
```typescript
export interface HeroContent {
  main_title: {
    line1: string
    highlight: string  
    line2: string
  }
  sub_title: string
  intro_badge: string
}
```

##### Features 타입
```typescript
export interface FeaturesContent {
  section1: {
    title: string
    subtitle: string
    stats: Array<{
      label: string
      note?: string
    }>
  }
  section2: { ... }
  section3: { ... }
}
```

#### 특징
- **계층적 구조**: 중첩 객체를 정확히 타입화
- **선택적 프로퍼티**: `?`로 옵셔널 필드 표시
- **배열 타입**: `Array<Type>` 또는 `Type[]` 형태
- **유니언 타입**: 여러 가능한 값의 조합

## 타입 정의 원칙

### 인터페이스 vs 타입
```typescript
// 인터페이스 사용 (권장) - 확장 가능
interface UserProfile {
  id: string
  name: string
  email: string
}

interface AdminProfile extends UserProfile {
  role: 'admin'
  permissions: string[]
}

// 타입 alias 사용 - 유니언이나 복잡한 타입
type Status = 'loading' | 'success' | 'error'
type EventHandler<T> = (event: T) => void
```

### 명명 규칙
- **Interface**: PascalCase + `Interface` 접미사 (선택적)
- **Type Alias**: PascalCase
- **Generic**: 단일 대문자 (`T`, `K`, `V`)
- **Union Type**: 구체적이고 명시적인 이름

### 제네릭 활용
```typescript
// API 응답 타입
interface ApiResponse<T> {
  data: T
  status: number
  message: string
  timestamp: string
}

// 페이지네이션
interface PaginatedResponse<T> {
  items: T[]
  totalCount: number
  page: number
  pageSize: number
}

// 컴포넌트 Props
interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
  keyExtractor: (item: T) => string
}
```

## 예정된 타입 파일들

### common.ts
```typescript
// 공통 타입들
export type ID = string | number

export interface BaseEntity {
  id: ID
  createdAt: Date
  updatedAt: Date
}

export interface SelectOption<T = string> {
  label: string
  value: T
  disabled?: boolean
}

export type LoadingState = 'idle' | 'loading' | 'succeeded' | 'failed'

export interface ApiError {
  code: string
  message: string
  details?: Record<string, any>
}
```

### forms.ts
```typescript
// 폼 관련 타입들
export interface EmailFormData {
  email: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ValidationError {
  field: string
  message: string
}

export type FormState<T> = {
  data: T
  errors: ValidationError[]
  isSubmitting: boolean
  isValid: boolean
}
```

### ui.ts
```typescript
// UI 컴포넌트 타입들
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: ModalSize
  closeOnOverlayClick?: boolean
}
```

### api.ts
```typescript
// API 관련 타입들
export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: 'user' | 'admin'
  createdAt: string
}

export interface AuthResponse {
  user: User
  accessToken: string
  refreshToken: string
  expiresAt: string
}

export interface EmailSubscription {
  email: string
  isSubscribed: boolean
  subscribedAt: string
  preferences: {
    newsletter: boolean
    updates: boolean
    marketing: boolean
  }
}

// API 엔드포인트 응답 타입들
export type ApiEndpoints = {
  '/auth/login': {
    POST: {
      body: { email: string; password: string }
      response: AuthResponse
    }
  }
  '/users/profile': {
    GET: { response: User }
    PUT: { 
      body: Partial<Pick<User, 'name' | 'avatar'>>
      response: User 
    }
  }
  '/subscribe': {
    POST: {
      body: { email: string }
      response: EmailSubscription
    }
  }
}
```

### events.ts
```typescript
// 이벤트 관련 타입들
export interface ClickEvent {
  type: 'click'
  element: string
  timestamp: number
  userId?: string
}

export interface PageViewEvent {
  type: 'page_view'
  path: string
  timestamp: number
  referrer?: string
}

export interface FormSubmitEvent {
  type: 'form_submit'
  formName: string
  success: boolean
  timestamp: number
}

export type AnalyticsEvent = ClickEvent | PageViewEvent | FormSubmitEvent

export interface EventHandler<T extends AnalyticsEvent> {
  (event: T): void
}
```

## 고급 타입 패턴

### Utility Types 활용
```typescript
// Pick - 특정 프로퍼티만 선택
type UserUpdate = Pick<User, 'name' | 'avatar'>

// Omit - 특정 프로퍼티 제외
type CreateUser = Omit<User, 'id' | 'createdAt'>

// Partial - 모든 프로퍼티를 옵셔널로
type PartialUser = Partial<User>

// Required - 모든 프로퍼티를 필수로
type RequiredConfig = Required<AppConfig>
```

### 조건부 타입
```typescript
// 조건부 타입
type ApiResult<T> = T extends string 
  ? { message: T } 
  : { data: T }

// 템플릿 리터럴 타입
type EventName<T extends string> = `on${Capitalize<T>}`
type ButtonEvent = EventName<'click'> // 'onClick'

// 매핑된 타입
type EventHandlers<T> = {
  [K in keyof T as EventName<string & K>]: (value: T[K]) => void
}
```

### 브랜드 타입
```typescript
// 타입 안전성을 위한 브랜드 타입
type UserId = string & { readonly __brand: 'UserId' }
type Email = string & { readonly __brand: 'Email' }

const createUserId = (id: string): UserId => id as UserId
const createEmail = (email: string): Email => email as Email
```

## 타입 가드 함수들

### runtime-types.ts (예정)
```typescript
// 타입 가드 함수들
export const isString = (value: unknown): value is string => {
  return typeof value === 'string'
}

export const isUser = (value: unknown): value is User => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'email' in value &&
    'name' in value
  )
}

export const isApiError = (error: unknown): error is ApiError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    'message' in error
  )
}
```

## 모듈 확장 (Declaration Merging)

### global.d.ts (예정)
```typescript
// 전역 타입 확장
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string
      NEXT_PUBLIC_GA_ID: string
      DATABASE_URL: string
    }
  }
  
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

// Next.js 모듈 확장
declare module 'next' {
  interface NextApiRequest {
    user?: User
  }
}
```

## 개발 가이드라인

### 타입 정의 순서
1. **기본 타입**: primitive 타입들
2. **유니언 타입**: 가능한 값들의 조합
3. **인터페이스**: 객체의 구조
4. **제네릭**: 재사용 가능한 타입
5. **유틸리티 타입**: 기존 타입을 변형한 타입

### 주석과 문서화
```typescript
/**
 * 사용자 프로필 정보
 * @interface UserProfile
 */
export interface UserProfile {
  /** 고유 식별자 */
  id: string
  
  /** 사용자 이메일 (로그인에 사용) */
  email: string
  
  /** 표시될 사용자 이름 */
  name: string
  
  /** 프로필 이미지 URL (선택사항) */
  avatar?: string
  
  /** 
   * 사용자 역할
   * @default 'user'
   */
  role: 'user' | 'admin'
}
```

### 오류 방지 패턴
```typescript
// null/undefined 체크
type NonNullable<T> = T extends null | undefined ? never : T

// 빈 객체 방지
type NonEmptyObject<T> = keyof T extends never ? never : T

// 문자열 비어있음 방지  
type NonEmptyString<T> = T extends '' ? never : T
```

## 주의사항
- `any` 타입 사용 금지 - `unknown` 사용 권장
- 타입 단언(`as`) 최소화 - 타입 가드 사용 권장
- 복잡한 타입은 주석으로 설명
- 외부 라이브러리 타입 확장 시 별도 파일 관리
- 순환 참조 주의 - 필요시 `import type` 사용