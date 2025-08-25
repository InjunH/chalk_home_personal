# Sections 컴포넌트 가이드라인

이 폴더는 CHALK HOME 웹사이트의 메인 페이지 섹션들을 관리합니다.

## 섹션 구조 및 순서

1. **HeroSection** - 메인 히어로 섹션
2. **IntroSection** - 서비스 소개 섹션  
3. **ReviewSection** - 고객 후기 섹션
4. **FeatureSection1** - 핵심 통계 섹션
5. **FeatureSection2** - 기능 상세 설명 섹션
6. **FeatureSection3** - 추가 기능 및 플랫폼 오버뷰 섹션
7. **CTASection** - 행동 유도 섹션

## 공통 디자인 원칙

### 색상 시스템
- **배경 변화**: 검정 → 흰색 → 회색 → 검정/그라데이션으로 시각적 리듬 생성
- **브랜드 컬러**:
  - Purple: `from-purple-400 to-purple-600`
  - Pink: `from-pink-400 to-pink-600` 
  - Yellow: `bg-yellow-400` (액센트)
  - Orange: `bg-orange-400/600` (보조)

### 레이아웃 패턴
- **컨테이너**: `container mx-auto px-6`
- **수직 간격**: `py-20` (섹션 패딩)
- **내부 간격**: `space-y-8/12/16/20` (요소 간 간격)
- **그리드**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3/4`

### 타이포그래피 체계
- **메인 제목**: `text-4xl md:text-6xl lg:text-7xl font-bold`
- **서브 제목**: `text-xl md:text-2xl`
- **본문**: `text-lg leading-relaxed`
- **소제목**: `text-sm font-semibold uppercase tracking-wide`

## 섹션별 특징

### HeroSection (메인 비주얼)
- **배경**: 검정 + 그라데이션 오버레이
- **레이아웃**: 2열 (텍스트 + iPad 목업)
- **특수 효과**: 떠다니는 애니메이션 점들
- **CTA**: 2개 버튼 (체험해보기, 더 알아보기)

### IntroSection (서비스 소개)
- **배경**: 흰색
- **레이아웃**: 중앙 정렬 + 3열 이미지 그리드
- **효과**: 호버 시 확대 애니메이션

### ReviewSection (고객 후기)
- **배경**: 회색 (gray-50)
- **레이아웃**: 2열 (후기 텍스트 + 비주얼 그리드)
- **특징**: 2개의 인용문 + 리뷰어 정보

### FeatureSection1 (통계)
- **배경**: 검정
- **레이아웃**: 3열 통계 카드
- **애니메이션**: 프로그레스 바 + 숫자 강조

### FeatureSection2 (기능 상세)
- **배경**: 그라데이션 (purple-50 to pink-50)
- **레이아웃**: 교대 레이아웃 (지그재그)
- **특징**: 말풍선 UI + 실시간 상태 표시

### FeatureSection3 (추가 기능)
- **배경**: 흰색
- **레이아웃**: 2x2 그리드 + 대형 이미지 + 통계 컬럼
- **이모지**: 각 기능별 이모지 아이콘

### CTASection (행동 유도)
- **배경**: 검정 → 보라 그라데이션
- **레이아웃**: 2열 (CTA 폼 + 캐러셀)
- **기능**: 이메일 수집 폼 + 슬라이드 캐러셀

## 개발 가이드라인

### 성능 최적화
- 모든 이미지는 OptimizedImage 컴포넌트 사용
- 큰 섹션은 lazy loading 고려
- 애니메이션은 CSS transforms 사용

### 반응형 디자인
- 모바일 우선 접근법
- Breakpoints: `md:768px`, `lg:1024px`
- 텍스트 크기와 간격의 반응형 조정

### 접근성
- 시맨틱 HTML5 태그 사용 (`<section>`)
- 적절한 heading 계층 구조
- 키보드 네비게이션 지원
- alt 텍스트 제공

### 상태 관리
- 현재는 컴포넌트 레벨 state 사용
- 복잡한 상호작용 시 Zustand 도입 고려

## 애니메이션 가이드

### 기본 애니메이션
- **Hover Effects**: `hover:scale-105`, `hover:shadow-xl`
- **Transitions**: `transition-all duration-300/500`
- **Pulse**: `animate-pulse` (로딩 상태)

### 커스텀 애니메이션
```css
.animate-float {
  animation: float 3s ease-in-out infinite;
}
```

## 콘텐츠 관리
- 모든 텍스트는 `@/lib/content.ts`에서 관리
- 이미지 경로는 `@/lib/assets.ts`에서 관리
- 다국어 지원 시 i18n 구조 고려

## 향후 개선 사항
- [ ] Framer Motion 라이브러리 도입
- [ ] 스크롤 애니메이션 (AOS)
- [ ] 인터랙티브 요소 추가
- [ ] 성능 메트릭 모니터링
- [ ] A/B 테스트 기능 추가