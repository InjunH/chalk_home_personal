# CHALK HOME 에셋 추출 계획

## Figma에서 추출 필요한 에셋들

### 1. 이미지 에셋
- **iPad 목업 이미지** (Hero Section용)
- **앱 화면 스크린샷** (iPad 목업 내부)
- **리뷰 섹션 이미지** (4개의 라이트 효과 이미지)
- **썸네일 이미지** (Intro Section용 3개 프리뷰)

### 2. 아이콘 에셋
- **브랜드 로고** (CHALK 로고)
- **섹션 아이콘** (Intro 섹션 장식 요소)
- **따옴표 아이콘** (Review Section용)
- **네비게이션 아이콘** (메뉴, 화살표 등)

### 3. 그래픽 요소
- **그라데이션 배경** (Hero Section)
- **라이트 효과 오버레이** (45도 회전)
- **장식 요소** (섹션별 그래픽)

## 에셋 최적화 전략

### 이미지 최적화
- **WebP 포맷 변환** (호환성을 위해 PNG 백업)
- **반응형 이미지** (데스크톱/태블릿/모바일)
- **레이지 로딩 준비**
- **블러 플레이스홀더**

### 파일 구조
```
public/
├── images/
│   ├── hero/
│   │   ├── ipad-mockup.webp
│   │   ├── ipad-mockup-mobile.webp
│   │   └── app-screenshot.webp
│   ├── intro/
│   │   ├── preview-1.webp
│   │   ├── preview-2.webp
│   │   └── preview-3.webp
│   └── review/
│       ├── light-effect-1.webp
│       ├── light-effect-2.webp
│       ├── light-effect-3.webp
│       └── light-effect-4.webp
├── icons/
│   ├── chalk-logo.svg
│   ├── intro-icon.svg
│   ├── quote-icon.svg
│   └── ui/
│       ├── arrow-left.svg
│       ├── arrow-right.svg
│       └── menu.svg
└── graphics/
    ├── hero-gradient.svg
    ├── light-overlay.svg
    └── decorations/
        ├── section-divider.svg
        └── accent-shape.svg
```

## 대체 에셋 생성

Figma에서 직접 추출이 어려운 경우, 유사한 에셋을 생성:

### 1. iPad 목업
- 3D CSS 또는 SVG로 iPad 프레임 생성
- 앱 스크린샷을 내부에 배치

### 2. 라이트 효과
- CSS 그라데이션과 블러 효과로 구현
- SVG 필터를 활용한 글로우 효과

### 3. 그래픽 요소
- SVG 패턴과 그라데이션으로 생성
- CSS animation으로 동적 효과 구현

## 다음 작업

1. **public 폴더 구조 생성**
2. **필수 이미지 플레이스홀더 생성**
3. **SVG 아이콘 생성**
4. **Next.js Image 컴포넌트 설정**
5. **반응형 이미지 시스템 구축**