# UI 컴포넌트 가이드라인

이 폴더는 CHALK HOME 웹사이트의 재사용 가능한 UI 컴포넌트들을 관리합니다.

## 현재 컴포넌트

### OptimizedImage.tsx
**목적**: Next.js Image 최적화와 일반 img 태그를 지능적으로 선택하는 이미지 컴포넌트

#### 기능
- **조건부 렌더링**:
  - SVG 파일 또는 외부 URL (`http`로 시작) → 일반 `<img>` 태그 사용
  - 로컬 PNG/JPG 파일 → Next.js `<Image>` 컴포넌트 사용
- **fill prop 지원**: 부모 컨테이너에 맞춰 채우기
- **기본 사이즈**: width=800, height=600 (미지정 시)

#### Props 인터페이스
```typescript
interface OptimizedImageProps {
  src: string           // 이미지 경로 (필수)
  alt: string          // 대체 텍스트 (필수)
  className?: string   // CSS 클래스
  width?: number       // 너비
  height?: number      // 높이  
  fill?: boolean       // 부모 컨테이너 채우기
  priority?: boolean   // 우선 로딩 (LCP 향상)
}
```

#### 사용 예시
```tsx
// SVG나 외부 이미지
<OptimizedImage 
  src="/icons/logo.svg" 
  alt="Logo" 
  className="w-8 h-8" 
/>

// 로컬 이미지 (고정 크기)
<OptimizedImage 
  src="/images/hero.jpg"
  alt="Hero Image"
  width={800}
  height={600}
  className="rounded-lg"
/>

// 반응형 이미지 (fill)
<OptimizedImage 
  src="/images/background.jpg"
  alt="Background"
  fill
  className="object-cover"
/>
```

## UI 컴포넌트 개발 원칙

### 설계 철학
1. **재사용성**: 다양한 맥락에서 사용 가능해야 함
2. **접근성**: WCAG 2.1 AA 기준 준수
3. **성능**: 렌더링 최적화 및 번들 크기 최소화
4. **타입 안전성**: TypeScript 인터페이스 정의 필수
5. **일관성**: CHALK 브랜드 가이드라인 준수

### 파일 명명 규칙
- PascalCase 사용 (예: `ButtonComponent.tsx`)
- 컴포넌트명과 파일명 일치
- 관련 타입은 같은 파일에 정의 또는 별도 `.types.ts` 파일

### Props 설계 가이드라인
```typescript
// 기본 구조
interface ComponentProps {
  // 필수 props는 위에
  children?: React.ReactNode
  className?: string
  // 선택적 props는 아래에
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick?: () => void
  // HTML 속성 확장 시
  ...props
}
```

### 스타일링 가이드라인
```tsx
// Tailwind CSS 클래스 조합 패턴
const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-colors'
const variantClasses = {
  primary: 'bg-purple-500 text-white hover:bg-purple-600',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
}

// 조건부 클래스 적용
<button 
  className={`${baseClasses} ${variantClasses[variant]} ${className || ''}`}
>
```

## 추가 예정 컴포넌트

### Button 컴포넌트
```typescript
interface ButtonProps {
  children: React.ReactNode
  variant: 'primary' | 'secondary' | 'outline' | 'ghost'
  size: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}
```

### Input 컴포넌트
```typescript
interface InputProps {
  label?: string
  placeholder?: string
  error?: string
  required?: boolean
  type?: 'text' | 'email' | 'password' | 'tel'
  value: string
  onChange: (value: string) => void
}
```

### Modal 컴포넌트
```typescript
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}
```

### Card 컴포넌트
```typescript
interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  shadow?: 'none' | 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}
```

## 성능 최적화 가이드

### 이미지 최적화
- OptimizedImage 컴포넌트 사용 필수
- priority prop 활용 (Above-the-fold 이미지)
- 적절한 크기와 형식 선택
- lazy loading 기본 적용

### 컴포넌트 최적화  
```tsx
// React.memo로 불필요한 리렌더링 방지
export default React.memo(Component)

// useCallback으로 함수 메모이제이션
const handleClick = useCallback(() => {
  // 핸들러 로직
}, [dependencies])

// useMemo로 계산 결과 캐싱
const computedValue = useMemo(() => {
  return expensiveCalculation(props)
}, [props.value])
```

## 접근성 체크리스트

### 키보드 네비게이션
- [ ] Tab으로 모든 상호작용 요소 접근 가능
- [ ] Enter/Space로 버튼 활성화 가능
- [ ] Escape로 모달/드롭다운 닫기 가능

### 스크린 리더
- [ ] 의미있는 alt 텍스트 제공
- [ ] aria-label, aria-describedby 적절히 사용
- [ ] role 속성 필요시 명시

### 색상 및 대비
- [ ] 색상만으로 정보 전달하지 않기
- [ ] 최소 4.5:1 대비율 유지 (AA 기준)
- [ ] 포커스 상태 명확히 표시

## 테스트 가이드라인

### 단위 테스트
```tsx
// @testing-library/react 사용 예시
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('버튼 클릭 시 함수 호출', async () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>클릭</Button>)
  
  await userEvent.click(screen.getByRole('button'))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
```

### 접근성 테스트
```tsx
import { axe, toHaveNoViolations } from 'jest-axe'

test('접근성 위반 없음', async () => {
  expect.extend(toHaveNoViolations)
  const { container } = render(<Component />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

## 문서화 가이드라인

### Storybook (향후 도입 시)
```tsx
export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: '재사용 가능한 버튼 컴포넌트입니다.'
      }
    }
  }
}

export const Primary = {
  args: {
    children: '기본 버튼',
    variant: 'primary'
  }
}
```

## 주의사항
- 모든 컴포넌트는 TypeScript로 작성
- Props 인터페이스 정의 필수
- className prop 지원으로 커스터마이징 허용
- forwardRef 사용 시 적절한 타입 정의
- 성능과 접근성을 항상 고려