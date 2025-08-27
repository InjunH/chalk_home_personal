# Features 컴포넌트

FeatureValue 섹션의 세분화된 컴포넌트들을 관리합니다.

## 컴포넌트 구조

```
features/
├── FeatureMainTitle.tsx    # "The New Paradigm" 메인 타이틀 + light 효과
├── StatCard.tsx           # 개별 통계 카드
├── StatCardList.tsx       # 통계 카드 목록 컨테이너
└── README.md             # 이 파일
```

## 컴포넌트 상세

### FeatureMainTitle
**목적**: "The New Paradigm" 메인 타이틀과 light 효과를 담당하는 컴포넌트

**특징**:
- Figma 정확한 타이포그래피 적용 (Suisse Intl + NN Konrad 조합)
- 반응형 폰트 크기 (clamp 사용)
- Light 효과 애니메이션
- 그라데이션 텍스트 (NN Konrad "New" 부분)

**사용법**:
```jsx
import FeatureMainTitle from "@/components/features/FeatureMainTitle";

<FeatureMainTitle />
```

### StatCard
**목적**: 개별 통계 카드 (76.4%, 3.2시간 등)

**Props**:
```typescript
interface StatCardProps {
  stat: Stat; // { value, unit, label, sub_label?, icon }
}
```

**특징**:
- Figma 스펙 정확한 크기 (605px × 542px)
- 4% 투명도 배경, 32px 둥근 모서리
- Pretendard Black (900) 폰트
- 반응형 크기 조정

**사용법**:
```jsx
import StatCard from "@/components/features/StatCard";

<StatCard stat={{
  value: "76.4",
  unit: "%", 
  label: "CHALK 사용시 완강률",
  sub_label: "*기존학원 완강률 10%",
  icon: "/path/to/icon.svg"
}} />
```

### StatCardList
**목적**: 통계 카드들의 컨테이너 및 레이아웃 관리

**Props**:
```typescript
interface StatCardListProps {
  stats: Stat[]; // 통계 데이터 배열
}
```

**특징**:
- Figma 스펙 정확한 간격 (28px gap)
- 중앙 정렬 + 반응형 wrap
- 542px 최소 높이 보장

**사용법**:
```jsx
import StatCardList from "@/components/features/StatCardList";

<StatCardList stats={features.value.stats} />
```

## 타입 정의

**위치**: `/src/types/feature.ts`

```typescript
export interface Stat {
  value: string;      // "76.4"
  unit: string;       // "%"
  label: string;      // "CHALK 사용시 완강률"
  sub_label?: string; // "*기존학원 완강률 10%" (선택적)
  icon: string;       // "/images/icon.svg"
}

export interface FeatureValueData {
  subtitle: string;   // "Your new Companion"
  stats: Stat[];      // 통계 데이터 배열
}
```

## 스타일 가이드

### 폰트 시스템
- **메인 타이틀**: Suisse Intl Bold 700 + NN Konrad Bold 700
- **통계 숫자**: Pretendard Black 900
- **라벨**: Pretendard Bold 700

### 색상 시스템
- **배경**: rgba(255, 255, 255, 0.04) - 4% 투명도
- **텍스트**: white, white/60, white/40
- **그라데이션**: #b4b4b4 → white → #9a9a9a

### 간격 시스템
- **섹션 간**: 240px, 120px, 54px (Figma 스펙)
- **카드 간**: 28px
- **내부 패딩**: 46px

## 성능 최적화

1. **clamp() 함수**: 반응형 폰트 크기로 미디어 쿼리 불필요
2. **컴포넌트 분리**: 재사용성 및 번들 최적화
3. **타입 안전성**: TypeScript로 런타임 에러 방지
4. **OptimizedImage**: 이미지 최적화 자동 처리

## 접근성

1. **시맨틱 마크업**: 적절한 HTML 구조
2. **Alt 텍스트**: 모든 이미지에 설명 제공
3. **키보드 접근**: 포커스 가능한 요소들
4. **색상 대비**: WCAG 기준 준수

## 향후 개선 사항

- [ ] 애니메이션 효과 추가 (Framer Motion)
- [ ] 다크모드 지원
- [ ] 더 많은 통계 데이터 타입 지원
- [ ] 카드 호버 인터랙션 강화