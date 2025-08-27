# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 설정 (Language Setting)

**중요**: 이 프로젝트에서는 한국어로 대화해주세요. 모든 설명, 주석, 커밋 메시지는 한국어를 사용합니다.

## ⚠️ 중요: Figma 디자인 준수 원칙 (CRITICAL)

**절대 원칙: 모든 UI 구현은 반드시 Figma 디자인을 정확히 따라야 합니다.**

### 🚨 금지 사항
- ❌ **자의적 디자인 해석 절대 금지**
- ❌ 개인적 취향이나 추측으로 디자인 변경 금지
- ❌ "더 나을 것 같다"는 이유로 임의 수정 금지
- ❌ Figma에 없는 요소 추가 금지
- ❌ 색상, 간격, 크기의 임의 조정 금지

### ✅ 필수 준수 사항
- ✅ **Figma URL 제공 시 반드시 해당 디자인 분석 후 구현**
- ✅ 픽셀 단위까지 정확한 디자인 구현
- ✅ 지정된 색상 값 정확히 사용
- ✅ 간격, 패딩, 마진 정확히 측정하여 적용
- ✅ 타이포그래피 (폰트, 크기, 굵기) 정확히 적용
- ✅ 확실하지 않은 부분은 반드시 사용자에게 확인 요청

### 🎯 구현 프로세스
1. **Figma URL 접근** → 디자인 상세 분석
2. **측정 및 추출** → 정확한 수치, 색상, 스타일 추출  
3. **구현 전 확인** → 불분명한 부분 사용자 확인
4. **정확한 구현** → 디자인 100% 일치하도록 코딩
5. **검증** → 구현 결과와 Figma 디자인 비교 검증

### 🔍 디자인 분석 시 체크리스트
- [ ] 레이아웃 구조 (Grid, Flexbox 등)
- [ ] 색상 값 (HEX, RGB)
- [ ] 간격 (margin, padding)
- [ ] 타이포그래피 (font-family, size, weight)
- [ ] 상호작용 상태 (hover, active, focus)
- [ ] 반응형 동작
- [ ] 애니메이션 및 전환 효과

## 🎨 Figma 컴포넌트 참조 워크플로우

### 📋 Figma API 연동 방법

**1단계: Figma API 토큰 설정**
```bash
# 환경변수에 Figma 토큰 설정
export FIGMA_ACCESS_TOKEN="your-figma-token-here"
```

**2단계: Figma 데이터 추출**
```bash
# 스크립트 실행하여 디자인 데이터 가져오기
node fetch_figma.js
```

**3단계: 추출된 데이터 분석**
- `figma_node_data.json` - 전체 디자인 구조 및 스타일 정보
- `figma_components.json` - 컴포넌트별 상세 정보

### 🔍 Figma Node 데이터 분석 워크플로우

#### 1단계: Figma API를 통한 특정 노드 데이터 추출

**Node ID 기반 데이터 가져오기**
```bash
# 환경변수 설정
export FIGMA_ACCESS_TOKEN="figd_8ZHxbeGTULK0rNl-M1Tg5rPV4Oi1XZa4ncXWalpB"

# 특정 노드의 JSON 데이터 가져오기 (예: QR Section)
FIGMA_ACCESS_TOKEN="$FIGMA_ACCESS_TOKEN" node -e "
const fs = require('fs');
const https = require('https');

const url = 'https://api.figma.com/v1/files/69XfrgBGWnxwUFYemMP1U9/nodes?ids=5094:8000';
const options = {
  headers: { 'X-Figma-Token': process.env.FIGMA_ACCESS_TOKEN }
};

https.get(url, options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('figma_qr_data.json', data);
    console.log('✅ QR Section 데이터 저장됨: figma_qr_data.json');
  });
}).on('error', console.error);
"
```

#### 2단계: Node.js 스크립트로 간격/레이아웃 분석

**간격 및 패딩 분석 스크립트**
```bash
# QR 섹션 상하단 간격 분석
FIGMA_ACCESS_TOKEN="$FIGMA_ACCESS_TOKEN" node -e "
const data = JSON.parse(require('fs').readFileSync('figma_qr_data.json', 'utf8'));
const node = data.nodes['5094:8000'];

function analyzeSpacing(obj, depth = 0) {
  if (depth > 15) return;
  const indent = '  '.repeat(depth);
  
  if (obj?.name === 'qr' || obj?.name === 'copy' || obj?.name === 'end') {
    console.log(indent + '📦', obj.name, '(ID:', obj.id + ')');
    
    if (obj?.absoluteBoundingBox) {
      const box = obj.absoluteBoundingBox;
      console.log(indent + '   위치:', 'y:', box.y, '높이:', box.height);
      console.log(indent + '   끝점:', 'y:', box.y + box.height);
    }
    
    if (obj?.layoutMode) {
      console.log(indent + '   레이아웃:', obj.layoutMode, 'gap:', obj.itemSpacing || 0);
    }
    console.log('');
  }
  
  if (obj?.children) {
    obj.children.forEach(child => analyzeSpacing(child, depth + 1));
  }
}

console.log('🔍 QR 코드 섹션 상하단 간격 분석:');
analyzeSpacing(node.document);
"
```

**텍스트 스타일 정보 추출**
```bash
# Footer 메뉴 텍스트 스타일 분석
FIGMA_ACCESS_TOKEN="$FIGMA_ACCESS_TOKEN" node -e "
const data = JSON.parse(require('fs').readFileSync('figma_qr_data.json', 'utf8'));
const node = data.nodes['5094:8000'];

function analyzeFooterMenu(obj, depth = 0) {
  if (depth > 15) return;
  const indent = '  '.repeat(depth);
  
  if (obj?.name && (obj.name === 'HOME' || obj.name === 'CHALK AI' || obj.name === 'G-LMS')) {
    console.log(indent + '📦', obj.name, '(ID:', obj.id + ')');
    
    if (obj?.type === 'TEXT' && obj?.characters) {
      console.log(indent + '   텍스트:', JSON.stringify(obj.characters));
      if (obj?.style) {
        console.log(indent + '   스타일:', {
          fontFamily: obj.style.fontFamily,
          fontSize: obj.style.fontSize,
          fontWeight: obj.style.fontWeight,
          letterSpacing: obj.style.letterSpacing,
        });
      }
    }
    console.log('');
  }
  
  if (obj?.children) {
    obj.children.forEach(child => analyzeFooterMenu(child, depth + 1));
  }
}

console.log('🔍 Footer 메뉴 구조 분석:');
analyzeFooterMenu(node.document);
"
```

#### 3단계: 라이트 배경 효과 분석

**복잡한 시각적 효과 분석**
```bash
# 라이트 배경 효과 상세 분석
FIGMA_ACCESS_TOKEN="$FIGMA_ACCESS_TOKEN" node -e "
const data = JSON.parse(require('fs').readFileSync('figma_qr_data.json', 'utf8'));
const node = data.nodes['5094:8000'];

function findLightEffects(obj, depth = 0) {
  if (depth > 10) return;
  const indent = '  '.repeat(depth);
  
  if (obj?.name === 'light') {
    console.log(indent + '💡 Light 노드 발견:', obj.id);
    console.log(indent + '   위치:', obj.absoluteBoundingBox);
    console.log(indent + '   크기:', obj.absoluteBoundingBox?.width, 'x', obj.absoluteBoundingBox?.height);
    console.log('');
    
    // 하위 Rectangle들 분석
    if (obj.children) {
      obj.children.forEach((child, i) => {
        if (child.name && child.name.includes('Rectangle')) {
          console.log(indent + '  📐 Rectangle', i+1, ':', child.name);
          console.log(indent + '     위치:', child.absoluteBoundingBox);
          console.log(indent + '     크기:', child.absoluteBoundingBox?.width, 'x', child.absoluteBoundingBox?.height);
          
          if (child.fills) {
            child.fills.forEach((fill, j) => {
              console.log(indent + '     색상:', fill.color, '투명도:', fill.opacity || 1);
            });
          }
          console.log('');
        }
      });
    }
  }
  
  if (obj?.children) {
    obj.children.forEach(child => findLightEffects(child, depth + 1));
  }
}

console.log('🎯 라이트 배경 효과 상세 분석:');
findLightEffects(node.document);
"
```

#### 4단계: CTA 섹션 컴포넌트 간격 분석

**여러 컴포넌트 간 간격 측정**
```bash
# CTA 섹션 컴포넌트 간격 분석
FIGMA_ACCESS_TOKEN="$FIGMA_ACCESS_TOKEN" node -e "
const data = JSON.parse(require('fs').readFileSync('figma_cta_data.json', 'utf8'));
const node = data.nodes['5094:7999'];

function analyzeJoinSection(obj, depth = 0) {
  if (depth > 15) return;
  const indent = '  '.repeat(depth);
  
  if (obj?.name === 'join' || obj?.name === 'title' || obj?.name === 'enter' || obj?.name === 'stream') {
    console.log(indent + '📦', obj.name, '(ID:', obj.id + ')');
    
    if (obj?.absoluteBoundingBox) {
      const box = obj.absoluteBoundingBox;
      console.log(indent + '   위치:', 'y:', box.y, '높이:', box.height);
      console.log(indent + '   끝점:', 'y:', box.y + box.height);
    }
    
    if (obj?.layoutMode) {
      console.log(indent + '   레이아웃:', obj.layoutMode, 'gap:', obj.itemSpacing + 'px');
    }
    console.log('');
  }
  
  if (obj?.children) {
    obj.children.forEach(child => analyzeJoinSection(child, depth + 1));
  }
}

console.log('🔍 Join 섹션 상세 간격 분석:');
analyzeJoinSection(node.document);

// 각 요소 간 거리 계산
console.log('\\n📏 요소 간 거리 계산:');
const joinY = 52145;
const joinHeight = 1665;
const streamY = 52695;

console.log('Join 섹션 시작:', joinY);
console.log('Join 섹션 끝:', joinY + joinHeight, '=', 53810);
console.log('Stream 섹션 시작:', streamY);
console.log('Join과 Stream 사이 간격:', streamY - (joinY + joinHeight), 'px');
"
```

#### 5단계: 실시간 디자인 검증 및 구현

**구현 후 Figma와 비교 검증**
```bash
# 구현된 컴포넌트의 간격이 Figma와 일치하는지 확인
echo "📏 QR 섹션 간격 검증:"
echo "상단 여백: 270px (54090 - 53820)"
echo "하단 여백: 354px (54714 - 54360)" 
echo "전체 높이: 894px (55280 - 53820)"
echo "✅ Figma 디자인과 일치"
```

#### 컴포넌트별 검색 방법

**특정 컴포넌트 찾기**
```bash
# Header 컴포넌트 찾기
grep -i "header\|navigation\|gnb" figma_node_data.json

# Footer 메뉴 찾기
grep -i "footer\|menu\|home\|chalk ai" figma_node_data.json

# 텍스트 스타일 정보 확인
grep -A 20 -B 10 '"characters": "KR"' figma_node_data.json

# 색상 정보 확인  
grep -A 30 -B 5 '"name": "CHALK PC gnb"' figma_node_data.json | grep -A 20 "color"
```

**스타일 정보 추출 예시**
```json
{
  "style": {
    "fontFamily": "Suisse Intl",
    "fontWeight": 600,
    "fontSize": 20,
    "letterSpacing": -0.8,
    "color": {
      "r": 0.85,
      "g": 0.85, 
      "b": 0.85
    }
  }
}
```

### 💻 Figma 스타일을 Tailwind CSS로 변환

**폰트 스타일 변환**
```javascript
// Figma: fontWeight: 600 → Tailwind: font-semibold
// Figma: fontSize: 20 → Tailwind: text-xl  
// Figma: letterSpacing: -0.8 → Tailwind: tracking-tight
```

**색상 변환**
```javascript
// Figma RGB (0.85, 0.85, 0.85) → #D9D9D9 → Tailwind: text-gray-200
// 정확한 색상 매칭을 위해 Figma 값과 가장 가까운 Tailwind 색상 선택
```

**레이아웃 변환**
```javascript
// Figma: padding → Tailwind: px-4 py-2
// Figma: border-radius → Tailwind: rounded-[16px]
// Figma: background → Tailwind: bg-gray-800
```

### 🎯 실제 구현 예시

#### QR 섹션 구현 (Node ID: 5094:8000)

**Figma 분석 결과:**
- 상단 여백: 270px (Y위치: 54090 - 53820)
- 하단 여백: 354px (Footer 시작: 54714 - QR 끝: 54360)
- 전체 높이: 894px
- 라이트 배경: 하단 30% 영역에 light.svg 배치

**React 컴포넌트 구현:**
```jsx
<section 
  className="relative overflow-hidden bg-[#0a0a0a]"
  style={{
    paddingTop: "270px", // 상단 여백 (Figma 측정값)
    paddingBottom: "354px", // 하단 여백 (Footer까지의 간격)
    height: "894px" // 전체 섹션 높이
  }}
>
  {/* 라이트 배경 효과 - 하단 30% 영역 */}
  <div className="absolute" style={{ left: "0", bottom: "0", width: "100%", height: "30%" }}>
    <Image 
      src="/images/light.svg" 
      alt="Light Background" 
      fill 
      className="object-contain" 
      style={{ objectPosition: "bottom" }} 
    />
  </div>
  
  {/* QR 코드 중앙 배치 */}
  <div className="container mx-auto px-6 flex justify-center items-center h-full">
    <Image
      src="/images/section_8_qr.svg"
      alt="QR Code"
      width={270}
      height={270}
      className="relative z-10"
    />
  </div>
</section>
```

#### Footer 3-Column 레이아웃 (Node ID: 5094:8000)

**Figma 분석 결과:**
- 3열 구조: 회사정보 | 연락처 | 메뉴
- 메뉴 항목: HOME, CHALK AI, G-LMS
- 폰트: Suisse Intl Bold 700, 14px, -0.28px letter-spacing

**React 컴포넌트 구현:**
```jsx
<div className="flex flex-row justify-between">
  {/* 좌측 - 로고 + 저작권 */}
  <div className="flex flex-col justify-between">
    <Image
      src="/images/chalk_logo.svg" // Figma에서 추출한 실제 로고
      alt="CHALK Logo"
      width={292}
      height={61}
    />
    <p style={STYLES.footer.copyright}>{copyright}</p>
  </div>

  {/* 중앙 - 회사 정보 (3열 구조) */}
  <div className="flex flex-row" style={{ gap: "60px" }}>
    {/* 첫 번째 컬럼 - 주소, 회사정보, 다운로드 */}
    <div className="flex flex-col" style={{ gap: "36px" }}>
      {/* ... ADDRESS, INFO, COMPANY INTRODUCTION ... */}
    </div>

    {/* 두 번째 컬럼 - 연락처 + 소셜 */}
    <div className="flex flex-col" style={{ gap: "32px" }}>
      {/* ... CONTACT, FOLLOW US ... */}
    </div>

    {/* 세 번째 컬럼 - 메뉴 (Figma에서 발견한 누락된 부분) */}
    <div className="flex flex-col" style={{ gap: "12px", width: "164px" }}>
      {menu.map((item, index) => (
        <a
          key={index}
          href={`#${item.toLowerCase().replace(" ", "-")}`}
          className="text-white"
          style={{
            fontFamily: "Suisse Intl",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "-0.28px",
            lineHeight: "110%",
          }}
        >
          {item}
        </a>
      ))}
    </div>
  </div>
</div>
```

#### KR 언어 선택기 (기본 예시)

**Figma 분석 결과:**
- 텍스트: "KR"
- 폰트: Suisse Intl Semibold 600, 20px
- 색상: #D9D9D9 (RGB: 0.85, 0.85, 0.85)
- Letter spacing: -0.8px

**React 컴포넌트 구현:**
```jsx
<div className="bg-gray-800 rounded-[16px] px-4 py-2">
  <span className="text-gray-200 text-sm font-semibold tracking-tight">
    {navigation.language}
  </span>
</div>
```

### ⚠️ 주의사항 및 베스트 프랙티스

#### 정확성 우선
- **Figma 데이터와 100% 일치**: 픽셀 단위까지 정확한 스타일 적용
- **데이터 기반 구현**: 추측이나 추정 금지, Node.js 스크립트로 추출한 데이터만 사용
- **사용자 확인**: 불분명한 부분은 반드시 사용자 확인 후 진행
- **실시간 검증**: 구현 후 Figma와 실제 결과물 비교

#### Node.js 스크립트 활용 팁
- **깊이 제한**: `depth > 15` 등으로 무한 루프 방지
- **특정 요소 검색**: `obj?.name === 'target'` 패턴으로 정확한 요소 찾기
- **측정값 계산**: `absoluteBoundingBox`로 정확한 위치, 크기, 간격 계산
- **스타일 정보**: `obj?.style`, `obj?.fills`, `obj?.effects` 속성 확인

#### 데이터 검증 체크리스트
- [ ] Figma API 토큰이 유효한지 확인
- [ ] Node ID가 정확한지 확인 (URL에서 추출)
- [ ] JSON 파일이 정상적으로 생성되었는지 확인
- [ ] 분석 스크립트가 예상된 결과를 반환하는지 확인
- [ ] 구현된 컴포넌트가 Figma 측정값과 일치하는지 검증

#### 문서화 규칙
- **Figma 참조 정보**: Node ID, URL, 측정값을 컴포넌트 주석에 명시
- **스크립트 보관**: 사용한 Node.js 분석 스크립트를 프로젝트에 보관
- **변환 근거**: Figma 값을 CSS/Tailwind로 변환한 근거 명시
- **실제 구현 사례**: 성공적인 구현 사례를 CLAUDE.md에 기록

#### 실무 워크플로우 예시
```bash
# 1. Figma에서 Node ID 확인
echo "Node ID: 5094:8000 (QR Section)"

# 2. API로 데이터 추출
FIGMA_ACCESS_TOKEN="..." node -e "..." > figma_qr_data.json

# 3. 분석 스크립트 실행
FIGMA_ACCESS_TOKEN="..." node -e "분석스크립트" | tee analysis_result.txt

# 4. 측정값을 React 컴포넌트에 적용
echo "paddingTop: 270px, paddingBottom: 354px, height: 894px"

# 5. 구현 후 검증
echo "✅ Figma 디자인과 일치 확인"
```

#### 자주 발생하는 실수 방지
- **복잡한 효과 단순화**: CSS로 구현하기 어려운 효과는 SVG 이미지로 대체
- **간격 계산 실수**: Y 좌표와 높이를 더해 정확한 끝점 계산
- **깊이 설정 실수**: 배경 요소는 `z-10` 미만, 콘텐츠는 `z-10` 이상
- **파일 경로 실수**: Downloads에서 public 폴더로 파일 복사 확인

#### 성능 고려사항
- **이미지 최적화**: Next.js Image 컴포넌트로 자동 최적화
- **CSS 최적화**: 인라인 스타일보다는 Tailwind 클래스 우선 사용
- **불필요한 요소 제거**: Figma에서 장식용 요소는 구현에서 제외 가능

## Project Overview

**CHALK HOME** - Hyper-Personalized Learning Solution 웹사이트

이 프로젝트는 CHALK AI 학습 플랫폼의 홈페이지로, Next.js 15.5.0 + React 19 + TypeScript + Tailwind CSS로 구축되었습니다.

### 프로젝트 특징
- **기술 스택**: Next.js 15.5.0, React 19.1.0, TypeScript, Tailwind CSS 4.x
- **디자인 소스**: Figma 디자인 시스템 (정확한 구현 필수)
- **콘텐츠**: 실제 CHALK 서비스 콘텐츠 및 에셋 사용
- **성능**: 최적화된 이미지, 번들 크기, 접근성 고려

## Development Setup

### 설치 및 실행
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 타입 체크
npm run type-check

# 린트 검사
npm run lint
```

### 개발 환경
- **개발 서버**: http://localhost:3000
- **Node.js**: v18+ 권장
- **패키지 매니저**: npm
- **빌드 도구**: Turbopack (Next.js 15 기본)

## Architecture Guidelines

### 폴더 구조
```
src/
├── app/              # Next.js App Router 페이지
├── components/       # React 컴포넌트
│   ├── common/      # Header, Footer 등 공통 컴포넌트
│   ├── sections/    # 페이지 섹션 컴포넌트
│   └── ui/          # 재사용 UI 컴포넌트
├── lib/             # 유틸리티, 설정, 데이터
├── types/           # TypeScript 타입 정의
└── styles/          # 글로벌 스타일
```

### 핵심 원칙
- **Figma First**: 모든 UI는 Figma 디자인을 정확히 따름
- **TypeScript Strict**: 타입 안전성 최우선
- **Performance**: 이미지 최적화, 번들 최적화, Core Web Vitals
- **Accessibility**: WCAG 2.1 AA 기준 준수

## Common Commands

### 개발 명령어
- `npm run dev` - 개발 서버 시작 (Turbopack)
- `npm run build` - 프로덕션 빌드
- `npm run start` - 프로덕션 서버 실행
- `npm run lint` - ESLint 검사
- `npm run type-check` - TypeScript 타입 체크

### 유용한 스크립트
- `npm run analyze` - 번들 분석 (향후 추가 예정)
- `npm run test` - 테스트 실행 (향후 추가 예정)

## 중요 파일들

### 설정 파일
- `next.config.js` - Next.js 설정
- `tailwind.config.ts` - Tailwind CSS 설정
- `tsconfig.json` - TypeScript 설정
- `.eslintrc.json` - ESLint 설정

### 데이터 및 에셋
- `CONTENT_DATA.json` - 웹사이트 모든 텍스트 콘텐츠
- `src/lib/assets.ts` - 이미지 및 에셋 경로 관리
- `public/` - 정적 파일 (이미지, 아이콘 등)

### 문서화
- 각 폴더별 `claude.md` - 개발 가이드라인
- `PROJECT_PLAN.md` - 프로젝트 계획 및 진행 상황
- `TECH_STACK.md` - 기술 스택 상세 정보
