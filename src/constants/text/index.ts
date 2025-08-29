// 텍스트 상수 관리
import { ko } from './ko';
import { en } from './en';

// 언어 타입 정의
type Language = 'ko' | 'en';

// 언어별 텍스트 매핑
const languages = {
  ko,
  en, // 영어 지원 추가
  // ja, // 추후 일본어 지원시 추가
} as const;

// 현재 언어 설정 (글로벌 상태)
let currentLanguage: Language = 'ko';

// 현재 언어의 텍스트 반환 함수
export const getTexts = () => languages[currentLanguage];

// 현재 언어의 텍스트를 동적으로 반환하는 객체
export const text = new Proxy({} as typeof ko, {
  get: (_, prop) => {
    const currentTexts = getTexts();
    return currentTexts[prop as keyof typeof currentTexts];
  }
});

// 타입 export
export type { TextContent } from './ko';

// 언어 변경 함수
export const changeLanguage = (lang: Language) => {
  currentLanguage = lang;
  // 추후 로컬 스토리지 저장 로직 추가
  console.log(`Language changed to: ${lang}`);
  return getTexts();
};

// 현재 언어 확인 함수
export const getCurrentLanguage = (): Language => currentLanguage;

// 지원 언어 목록 
export const getSupportedLanguages = () => Object.keys(languages) as Language[];

// 특정 키의 텍스트 가져오기 헬퍼 함수
export const getText = (path: string): string => {
  const keys = path.split('.');
  let result: unknown = text;
  
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      console.warn(`Text not found for path: ${path}`);
      return path; // fallback으로 path 자체를 반환
    }
  }
  
  return typeof result === 'string' ? result : String(result);
};

// 텍스트 포맷팅 헬퍼 함수
export const formatText = (template: string, values: Record<string, unknown>): string => {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return values[key] !== undefined ? String(values[key]) : match;
  });
};