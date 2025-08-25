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

### HeroSection (메인 비주얼) - Figma 기반 완전 분석

#### 📋 Figma 디자인 요구사항

**🎨 배경 및 시각적 효과**
- **기본 배경**: 검정색 (`bg-black`)
- **라이트 그라데이션**: 45도 회전된 Angular Gradient 오버레이
  - 색상: Green-blue gradient (`#16CF6B` → 투명)  
  - 투명도: 40% (`opacity-40`)
  - 회전: 45도 (`rotate-45`)
- **iPad 목업**: `iPad-silhouette-mockup` 이미지 사용
- **마스킹 효과**: 이미지 마스킹 레이어 적용

**📝 텍스트 요소 및 정확한 스타일**

1. **Intro Badge**: "INTRO : INTO THE CHALK"
   - 폰트: Suisse Intl Bold 700
   - 크기: 16px (`text-base`)
   - Letter spacing: -0.32px (`tracking-tight`)
   - Line height: 110% (`leading-normal`)

2. **메인 타이틀**: "WE ALL Dream DIFFERENTLY"
   - **"WE ALL"**: 
     - 폰트: Suisse Intl Bold 700, UPPERCASE
     - 크기: 182px (데스크톱 기준)
     - Letter spacing: -1.82px
     - Line height: 90%
     - 정렬: CENTER
   - **"Dream"** (하이라이트):
     - 폰트: NN Konrad Bold 700 (특별 폰트!)
     - 크기: 182px (메인), 51px (서브)
     - Letter spacing: -3.64px (메인), -0.51px (서브)
     - Line height: 100%
     - **중요**: 그라데이션 또는 특별한 색상 효과 적용
   - **"DIFFERENTLY"**:
     - 폰트: Suisse Intl Bold 700, UPPERCASE
     - 크기: 182px
     - Letter spacing: -1.82px
     - Line height: 90%

3. **서브 타이틀**: "Hyper-Personalized Learning Solution"
   - 위치: 메인 타이틀 하단
   - 중복 출현 (badge와 별도)

**🎯 레이아웃 구조**
- **전체**: KV 프레임 내부에 img + area 구조
- **좌측**: 텍스트 콘텐츠 영역 (area)
- **우측**: iPad 목업 + 마스킹 이미지
- **특별 요소**: 썸네일 이미지와 아이콘 영역

**🔧 필요한 수정사항**

1. **폰트 시스템 점검**
   - NN Konrad 폰트 추가 필요 (Dream 텍스트용)
   - Suisse Intl 폰트 확인

2. **타이포그래피 정확한 구현**
   - 182px 대형 텍스트 반응형 처리
   - Letter spacing 정확한 적용
   - Line height 90%/100%/110% 구분 적용

3. **배경 그라데이션 재구현**
   - Angular gradient 45도 회전
   - Green-blue 색상 적용
   - 40% 투명도 정확한 적용

4. **"Dream" 텍스트 특별 처리**
   - NN Konrad 폰트 적용
   - 그라데이션/색상 효과 추가
   - 하이라이트 효과 강화

**🎨 색상 시스템 (Figma 추출)**
- Primary Green: `#16CF6B` (Angular gradient 시작점)
- Background: Pure Black `#000000`
- Text: White `#FFFFFF`
- Highlight: Dream 텍스트용 특별 색상/그라데이션

**📱 반응형 고려사항**
- 182px → 모바일에서 적절한 크기로 스케일링
- 2행 → 3행 타이틀 분리 처리
- iPad 목업 크기 조정
- 텍스트 간격 반응형 조정

**⚡ 성능 최적화**
- 대형 폰트 로딩 최적화
- 그라데이션 CSS 최적화
- 이미지 마스킹 효과 최적화

**🔍 주의사항**
- NN Konrad 폰트가 핵심 - 라이선스 확인 필요
- Dream 텍스트의 특별한 스타일링이 디자인의 핵심
- 정확한 Letter spacing이 전체 느낌을 좌우

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