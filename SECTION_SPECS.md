# CHALK HOME 섹션별 세부 명세서

## 1. Hero Section (KV - Key Visual)

### 구성 요소
- **배경**
  - 그라데이션 배경 (Angular Gradient)
  - 라이트 효과 오버레이 (45도 회전, opacity: 0.4)
  
- **메인 비주얼**
  - iPad 목업 이미지
  - 실제 앱 화면 노출
  - 플로팅 애니메이션 효과 적용

- **타이틀 영역**
  - 메인 타이틀: "WE ALL Dream DIFFERENTLY"
  - 서브 타이틀: "Hyper-Personalized Learning Solution"
  - 애니메이션: 페이드인 + 슬라이드업

### 인터랙션
- 스크롤 시 패럴랙스 효과
- 마우스 호버 시 목업 이미지 미세 움직임
- 라이트 효과 자동 회전 애니메이션

### 반응형 대응
- Desktop (1920px): 풀 와이드 레이아웃
- Tablet (768px-1919px): 패딩 조정, 이미지 크기 조정
- Mobile (< 768px): 수직 정렬, 텍스트 크기 최적화

---

## 2. Intro Section

### 구성 요소
- **섹션 타이틀**
  - "INTRO : INTO THE CHALK"
  - 아이콘 장식 요소

- **메인 카피**
  - "대치동에서도 볼 수 없던 최고의 선생님을 만나보세요"
  - 포인트 컬러 강조

- **썸네일 이미지**
  - 3개의 프리뷰 이미지
  - 호버 시 확대 효과

### 인터랙션
- 스크롤 트리거 애니메이션 (Intersection Observer)
- 순차적 요소 등장 효과
- 호버 시 이미지 스케일 & 그림자 효과

---

## 3. Review Section

### 구성 요소
- **리뷰 카드**
  - 인용구 형식의 텍스트
  - 리뷰어 정보 (이름, 역할)
  - 따옴표 아이콘

- **이미지 갤러리**
  - 4개의 라이트 효과 이미지
  - 그리드 레이아웃

### 데이터 구조
```typescript
interface Review {
  id: string;
  content: string;
  reviewer: {
    name: string;
    role: string;
  };
  date?: string;
}
```

### 인터랙션
- 자동 슬라이드 (5초 간격)
- 수동 네비게이션 버튼
- 터치/스와이프 지원

---

## 4. 공통 컴포넌트 명세

### Button Component
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
```

### Card Component
```typescript
interface CardProps {
  variant?: 'default' | 'elevated' | 'bordered';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}
```

---

## 5. 디자인 토큰

### 색상 팔레트
```css
/* Primary Colors */
--color-primary: #6B5EFF;      /* 메인 보라색 */
--color-primary-light: #8B7FFF;
--color-primary-dark: #5548E0;

/* Secondary Colors */
--color-secondary: #FF6B9D;
--color-accent: #FFD93D;

/* Neutral Colors */
--color-gray-900: #1A1A1A;
--color-gray-800: #2D2D2D;
--color-gray-700: #404040;
--color-gray-600: #525252;
--color-gray-500: #737373;
--color-gray-400: #A3A3A3;
--color-gray-300: #D4D4D4;
--color-gray-200: #E5E5E5;
--color-gray-100: #F5F5F5;
--color-white: #FFFFFF;

/* Gradient */
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-light: conic-gradient(from 0deg, rgba(255, 255, 255, 0.1), transparent);
```

### 타이포그래피
```css
/* Font Family */
--font-primary: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
--text-6xl: 3.75rem;    /* 60px */

/* Font Weights */
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

### 스페이싱
```css
/* Spacing Scale */
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### 애니메이션
```css
/* Transitions */
--transition-fast: 150ms ease;
--transition-base: 250ms ease;
--transition-slow: 350ms ease;

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

---

## 6. 페이지 플로우

### 스크롤 인터랙션
1. **초기 로드**
   - Hero 섹션 페이드인
   - 순차적 요소 애니메이션 (200ms 간격)

2. **스크롤 트리거**
   - 각 섹션 진입 시 애니메이션 시작
   - Intersection Observer API 활용
   - threshold: 0.2 (20% 노출 시 트리거)

3. **패럴랙스 효과**
   - 배경 이미지: speed 0.5
   - 텍스트: speed 1.0
   - 장식 요소: speed 1.5

### 사용자 인터랙션
- **호버 효과**: 모든 인터랙티브 요소
- **클릭 피드백**: 리플 효과 또는 스케일 다운
- **포커스 스타일**: 접근성 고려한 아웃라인

---

## 7. 성능 최적화 전략

### 이미지 최적화
- WebP 포맷 우선 사용
- 레이지 로딩 구현
- 반응형 이미지 (srcset)
- 블러 플레이스홀더

### 코드 최적화
- 컴포넌트 레이지 로딩
- React.memo 활용
- useMemo, useCallback 최적화
- 번들 크기 모니터링

### 애니메이션 최적화
- CSS transform 우선 사용
- will-change 속성 활용
- requestAnimationFrame 활용
- GPU 가속 활용

---

## 8. 접근성 고려사항

### WCAG 2.1 AA 준수
- 색상 대비 4.5:1 이상
- 키보드 네비게이션 완벽 지원
- 스크린 리더 호환성
- ARIA 레이블 적용

### 시맨틱 HTML
- 적절한 heading 구조
- landmark 역할 지정
- 의미있는 alt 텍스트

---

## 9. 브라우저 지원

### 지원 브라우저
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### 폴리필 전략
- Intersection Observer
- CSS Grid/Flexbox
- ES6+ 기능

---

## 10. 개발 우선순위

### Phase 1 (필수)
1. Hero Section
2. 기본 레이아웃
3. 반응형 구조

### Phase 2 (중요)
1. Intro Section
2. Review Section
3. 애니메이션 기본

### Phase 3 (향상)
1. 고급 애니메이션
2. 성능 최적화
3. 접근성 개선