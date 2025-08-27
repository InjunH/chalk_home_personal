# 공통 컴포넌트 리팩토링 가이드

이 문서는 NN Konrad 타이틀 및 섹션 헤더를 공통 컴포넌트로 변환한 작업 내역을 정리합니다.

## 🎯 작업 목표

기존의 인라인 스타일과 중복된 코드를 공통 컴포넌트로 통합하여:
- 코드 재사용성 향상
- 일관된 스타일 적용
- 유지보수성 개선

## 📦 생성된 공통 컴포넌트

### 1. NNKonradTitle.tsx

**위치**: `/src/components/ui/NNKonradTitle.tsx`

**기능**: NN Konrad 폰트를 사용하는 타이틀 컴포넌트

#### Props 인터페이스
```typescript
interface NNKonradTitleProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "silver" | "gold" | "highlight";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
```

#### Variant 종류
- **default**: 순백색 텍스트 (`#ffffff`)
- **muted**: 60% 투명도 (`rgba(255, 255, 255, 0.6)`)
- **silver**: 은색 그라데이션 (`#b4b4b4` → `#ffffff` → `#9a9a9a`)
- **gold**: 골드 그라데이션 (`#F8EACA` → `#FFF6E8` → `#C2AD89`)
- **highlight**: 초록-파랑 그라데이션 (`#16CF6B` → `#1E90FF`)

#### 스타일 특징
- 폰트: NN Konrad, serif
- 크기: 6rem (96px)
- 굵기: 700 (Bold)
- 자간: -0.18rem (-2.88px)
- 행간: 1.0
- 정렬: center

### 2. FeatureTitleSection.tsx

**위치**: `/src/components/ui/FeatureTitleSection.tsx`

**기능**: 간격 제어를 위한 레이아웃 컨테이너

#### Props 인터페이스
```typescript
interface FeatureTitleSectionProps {
  children: React.ReactNode;
  gap?: string;
  className?: string;
  layout?: "horizontal" | "vertical";
}
```

#### 레이아웃 종류
- **horizontal**: `flex flex-row items-center justify-center`
- **vertical**: `text-center flex flex-col`

#### 사용 예시
```tsx
// 수평 레이아웃 (The + New 조합)
<FeatureTitleSection layout="horizontal" gap="gap-2">
  <span className="text-white">The</span>
  <NNKonradTitle variant="silver">New</NNKonradTitle>
</FeatureTitleSection>

// 수직 레이아웃 (제목 + 하이라이트)
<FeatureTitleSection gap="gap-0">
  <h2 className="text-white font-bold uppercase">BE READY FOR THE</h2>
  <NNKonradTitle variant="gold" as="h3">Next Big Thing</NNKonradTitle>
</FeatureTitleSection>
```

## 🔄 적용된 파일들

### 1. FeatureMainTitle.tsx
**변경 전**: 개별 div + 인라인 스타일
**변경 후**: FeatureTitleSection 사용

```tsx
// 기존
<div className="flex flex-row items-center justify-center relative">
  <span className="text-white feature-title-the mr-2">The</span>
  <NNKonradTitle variant="silver">New</NNKonradTitle>
</div>

// 변경 후
<FeatureTitleSection layout="horizontal" gap="gap-2">
  <span className="text-white feature-title-the">The</span>
  <NNKonradTitle variant="silver">New</NNKonradTitle>
</FeatureTitleSection>
```

### 2. FeatureSectionVideo.tsx
**변경 전**: 개별 헤더 함수
**변경 후**: FeatureTitleSection + SectionSubtitle

```tsx
// 기존
<div className="text-center flex flex-col gap-54">
  <p className="text-white/60...">...</p>
  <h2 className="text-white font-bold uppercase...">BE READY FOR THE</h2>
  <NNKonradTitle variant="gold">Next Big Thing</NNKonradTitle>
</div>

// 변경 후
<>
  <SectionSubtitle className="mb-[3.8rem]">
    {features.video.title}
  </SectionSubtitle>
  <FeatureTitleSection layout="vertical">
    <h2 className="text-white font-bold uppercase text-center feature-video-main-title">
      BE READY FOR THE
    </h2>
    <NNKonradTitle variant="gold" className="text-cta-subtitle">
      Next Big Thing
    </NNKonradTitle>
  </FeatureTitleSection>
</>
```

### 3. CTASection.tsx
**변경 전**: 개별 div 구조
**변경 후**: FeatureTitleSection 적용

```tsx
// 기존
<div className="flex flex-col">
  <h2 className="text-white font-bold uppercase text-cta-title">
    follow the path
  </h2>
  <h3 className="text-white font-bold text-cta-subtitle">
    Find the New
  </h3>
</div>

// 변경 후
<FeatureTitleSection gap="gap-0">
  <h2 className="text-white font-bold uppercase text-cta-title">
    follow the path
  </h2>
  <NNKonradTitle variant="silver" as="h3" className="text-cta-subtitle">
    Find the New
  </NNKonradTitle>
</FeatureTitleSection>
```

### 4. FeatureExperience.tsx
**변경 전**: `muted` boolean prop
**변경 후**: `variant="muted"` 문자열 prop

```tsx
// 기존
<NNKonradTitle muted>
  {features.experience.content.bottom}
</NNKonradTitle>

// 변경 후
<NNKonradTitle variant="muted">
  {features.experience.content.bottom}
</NNKonradTitle>
```

## 🎨 색상 시스템

### Figma에서 추출한 색상값

#### Silver Gradient (은색)
```css
background: linear-gradient(180deg, #b4b4b4 0%, #ffffff 50%, #9a9a9a 100%);
```

#### Gold Gradient (골드)
```css
background: linear-gradient(90deg, #F8EACA 0%, #FFF6E8 50%, #C2AD89 100%);
```

#### Highlight Gradient (초록-파랑)
```css
background: linear-gradient(135deg, #16CF6B 0%, #1E90FF 100%);
```

### CSS 그라데이션 텍스트 효과

모든 그라데이션 variant는 다음 CSS 속성을 사용:
```css
WebkitBackgroundClip: "text"
WebkitTextFillColor: "transparent"
backgroundClip: "text"
```

## 📝 새 페이지 적용 가이드

### 1. Import 추가
```tsx
import NNKonradTitle from "@/components/ui/NNKonradTitle";
import FeatureTitleSection from "@/components/ui/FeatureTitleSection";
import SectionSubtitle from "@/components/ui/SectionSubtitle"; // 필요 시
```

### 2. 기본 사용법

#### NN Konrad 텍스트
```tsx
<NNKonradTitle variant="silver">Your Text</NNKonradTitle>
<NNKonradTitle variant="gold" as="h1">Main Title</NNKonradTitle>
<NNKonradTitle variant="highlight" className="custom-class">Special</NNKonradTitle>
```

#### 섹션 레이아웃
```tsx
// 수직 레이아웃
<FeatureTitleSection gap="gap-6">
  <h2>Title</h2>
  <NNKonradTitle variant="gold">Highlight</NNKonradTitle>
  <p>Description</p>
</FeatureTitleSection>

// 수평 레이아웃  
<FeatureTitleSection layout="horizontal" gap="gap-2">
  <span>Regular Text</span>
  <NNKonradTitle variant="silver">Special</NNKonradTitle>
</FeatureTitleSection>
```

### 3. 일반적인 패턴

#### 메인 제목 패턴
```tsx
<FeatureTitleSection layout="horizontal" gap="gap-2">
  <span className="text-white font-bold">The</span>
  <NNKonradTitle variant="silver">New</NNKonradTitle>
</FeatureTitleSection>
```

#### CTA 제목 패턴
```tsx
<FeatureTitleSection gap="gap-0">
  <h2 className="text-white font-bold uppercase">MAIN TITLE</h2>
  <NNKonradTitle variant="gold" as="h3">Highlight Text</NNKonradTitle>
</FeatureTitleSection>
```

#### 소제목 포함 패턴
```tsx
<>
  <SectionSubtitle className="mb-[3.8rem]">
    Subtitle Text
  </SectionSubtitle>
  <FeatureTitleSection>
    {/* 메인 콘텐츠 */}
  </FeatureTitleSection>
</>
```

## ⚠️ 주의사항

### Variant 선택 가이드
- **silver**: "New", "Innovation" 등 기술적 하이라이트
- **gold**: "Next Big Thing", "Find the New" 등 프리미엄 느낌
- **highlight**: 특별한 강조가 필요한 텍스트
- **muted**: 부가 설명이나 서브텍스트

### 간격 설정
- `gap-0`: 요소 간 간격 없음 (-13px Figma 설정용)
- `gap-2`: 작은 간격 (0.5rem)
- `gap-4`: 기본 간격 (1rem)
- `gap-54`: 큰 간격 (3.375rem, Figma 54px)

### CSS 클래스 조합
기존 CSS 클래스와 조합하여 세밀한 스타일 제어:
```tsx
<NNKonradTitle 
  variant="gold" 
  className="text-cta-subtitle feature-custom-style"
>
  Text
</NNKonradTitle>
```

## 🚀 빌드 확인

모든 변경사항이 적용된 후 `npm run build` 성공 확인됨:
- TypeScript 컴파일 성공
- ESLint 검사 통과 (warning만 존재)
- 정적 페이지 생성 완료

## 📋 체크리스트

새 페이지 작업 시 확인사항:
- [ ] NN Konrad 텍스트는 NNKonradTitle 컴포넌트 사용
- [ ] 적절한 variant 선택 (silver/gold/highlight)
- [ ] 간격이 필요한 섹션은 FeatureTitleSection 사용
- [ ] 기존 CSS 클래스와 조합하여 세밀한 제어
- [ ] 빌드 테스트로 타입 에러 확인
- [ ] Semantic HTML 태그 적절히 사용 (as prop)