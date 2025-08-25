# Common 컴포넌트 가이드라인

이 폴더는 CHALK HOME 웹사이트의 공통 컴포넌트들을 관리합니다.

## 컴포넌트 구조

### Header.tsx - Figma 디자인 기반 구현 요구사항
- **목적**: 전역 네비게이션 헤더 컴포넌트
- **현재 구현 상태**: 
  - ✅ 화면 최상단 고정 (`fixed top-0`)
  - ✅ 검은 배경 + 블러 효과 (`bg-black/80 backdrop-blur-sm`)
  - ✅ CHALK 로고 배치
  - ✅ 메인 네비게이션 메뉴 (데스크톱)
  - ⚠️ 모바일 햄버거 메뉴 (버튼만 구현, 기능 없음)
  - ✅ 언어 표시
- **의존성**: `@/lib/assets` (로고), `@/lib/content` (네비게이션 메뉴)
- **최적화**: OptimizedImage 컴포넌트 사용

#### Figma 디자인 기반 개선 요구사항
1. **레이아웃 & 구조**
   - 좌측: CHALK 로고 (높이 32px-40px)
   - 중앙: 메인 네비게이션 메뉴 (데스크톱)
   - 우측: CTA 버튼 + 언어 선택 + 햄버거 메뉴

2. **네비게이션 메뉴**
   - 현재 페이지 섹션 하이라이트
   - 부드러운 스크롤 네비게이션
   - 호버 효과: 하단 언더라인 또는 배경 변화

3. **CTA 버튼 (누락된 요소)**
   - "체험하기" 또는 "무료 시작" 버튼
   - 브랜드 그라데이션 배경
   - 둥근 모서리 디자인

4. **모바일 햄버거 메뉴**
   - 애니메이션 아이콘 (3줄 → X)
   - 풀스크린 오버레이 메뉴
   - 메뉴 항목 fade-in 애니메이션

5. **상호작용 & 애니메이션**
   - 스크롤 시 헤더 투명도/배경 변화
   - 메뉴 항목 호버 효과
   - 현재 섹션 자동 하이라이트

### Footer.tsx
- **목적**: 전역 푸터 컴포넌트  
- **특징**:
  - 4열 그리드 레이아웃 (모바일에서 1열로 축소)
  - 앱 정보, 회사 정보, 메뉴, 링크 섹션
  - 저작권 정보
- **의존성**: `@/lib/content` (푸터 콘텐츠)

## 개발 가이드라인

### 스타일링 원칙
- Tailwind CSS 클래스 사용
- 모바일 우선 반응형 디자인 (`md:`, `lg:` breakpoints)
- CHALK 브랜드 컬러 준수:
  - Primary: `#6B5EFF` (purple-500/600)
  - Secondary: `#FF6B9D` (pink-500/600)  
  - Accent: `#FFD93D` (yellow-400)

### 접근성 고려사항
- 키보드 네비게이션 지원
- 적절한 alt 텍스트 제공
- 색상 대비 비율 준수
- 시맨틱 HTML 사용

### 성능 최적화
- OptimizedImage 컴포넌트 사용 필수
- 불필요한 리렌더링 방지
- 이미지 최적화 및 lazy loading

## Header 구현 명세서

### 필수 구현 요소

#### 1. CTA 버튼 추가 (Priority: HIGH)
```tsx
// 우측 영역에 추가할 CTA 버튼
<button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
  체험하기
</button>
```

#### 2. 스크롤 반응형 헤더 (Priority: HIGH)
```tsx
// useState + useEffect로 스크롤 위치 감지
const [isScrolled, setIsScrolled] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50)
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

// 조건부 배경 스타일링
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  isScrolled 
    ? 'bg-black/95 backdrop-blur-md shadow-lg' 
    : 'bg-black/80 backdrop-blur-sm'
}`}
```

#### 3. 현재 섹션 하이라이트 (Priority: MEDIUM)
```tsx
// Intersection Observer로 현재 섹션 감지
const [activeSection, setActiveSection] = useState('')

// 네비게이션 링크 활성화 스타일
className={`text-sm font-medium transition-colors relative ${
  activeSection === item.toLowerCase() 
    ? 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500' 
    : 'text-white/80 hover:text-white'
}`}
```

#### 4. 햄버거 메뉴 기능 (Priority: MEDIUM)
```tsx
// 모바일 메뉴 상태 관리
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

// 햄버거 아이콘 애니메이션
<button 
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  className="md:hidden text-white p-2 relative"
>
  <div className={`w-6 h-6 flex flex-col justify-center items-center transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''}`}>
    <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90 absolute' : 'mb-1'}`}></span>
    <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
    <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-90 absolute' : 'mt-1'}`}></span>
  </div>
</button>
```

### 스타일링 상세 가이드

#### 색상 시스템
- **기본 배경**: `bg-black/80` (스크롤 전)
- **스크롤 후 배경**: `bg-black/95` (더 진한 배경)
- **텍스트 색상**: `text-white/80` (기본), `text-white` (호버/활성)
- **CTA 버튼**: `bg-gradient-to-r from-purple-500 to-pink-500`
- **활성 링크 언더라인**: `bg-gradient-to-r from-purple-500 to-pink-500`

#### 애니메이션 & 전환
- **기본 전환**: `transition-all duration-300`
- **호버 효과**: `hover:scale-105`, `hover:shadow-lg`
- **스크롤 전환**: `transition-all duration-300`
- **메뉴 전환**: `transition-transform duration-300 ease-in-out`

#### 반응형 브레이크포인트
- **모바일**: `< 768px` - 햄버거 메뉴 표시
- **태블릿**: `768px - 1024px` - 네비게이션 축소
- **데스크톱**: `> 1024px` - 풀 네비게이션 표시

### 접근성 개선사항
```tsx
// ARIA 레이블 추가
<nav role="navigation" aria-label="메인 네비게이션">
  <button 
    aria-label="메뉴 열기"
    aria-expanded={isMobileMenuOpen}
    aria-controls="mobile-menu"
  >
```

### 성능 최적화
- `useCallback`으로 이벤트 핸들러 메모이제이션
- `throttle`로 스크롤 이벤트 최적화
- `React.memo`로 불필요한 리렌더링 방지

## 구현 우선순위

### Phase 1 (즉시 구현)
- [x] 현재 구현 상태 분석
- [ ] CTA 버튼 추가
- [ ] 스크롤 반응형 배경

### Phase 2 (단기 구현)
- [ ] 현재 섹션 하이라이트
- [ ] 부드러운 스크롤 네비게이션
- [ ] 호버 효과 개선

### Phase 3 (중기 구현)  
- [ ] 햄버거 메뉴 기능
- [ ] 모바일 오버레이 메뉴
- [ ] 메뉴 애니메이션

### Footer 개선  
- [ ] 소셜 미디어 링크 추가
- [ ] 뉴스레터 구독 기능
- [ ] 다국어 지원 토글

## 주의사항
- 헤더는 z-index 50으로 다른 요소들보다 위에 표시됨
- 헤더 높이만큼 메인 콘텐츠에 패딩 필요
- 모든 이미지는 OptimizedImage 컴포넌트 사용
- 콘텐츠 변경 시 `@/lib/content` 파일 수정