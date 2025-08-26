// Figma API를 사용하여 컴포넌트 정보 가져오기
import fs from 'fs/promises';

const FIGMA_FILE_KEY = '69XfrgBGWnxwUFYemMP1U9';
const NODE_ID = '5052:6037'; // URL에서 추출한 노드 ID - FeatureSystem 섹션

// Figma Personal Access Token이 필요합니다
// https://www.figma.com/developers/api#access-tokens 에서 생성 가능
const FIGMA_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

if (!FIGMA_TOKEN) {
  console.error('❌ FIGMA_ACCESS_TOKEN 환경 변수가 설정되지 않았습니다.');
  console.log('\n토큰 생성 방법:');
  console.log('1. https://www.figma.com/settings 로 이동');
  console.log('2. "Personal access tokens" 섹션 찾기');
  console.log('3. "Create new token" 클릭');
  console.log('4. 토큰 복사 후 다음 명령어 실행:');
  console.log('   export FIGMA_ACCESS_TOKEN="your-token-here"');
  process.exit(1);
}

// Figma API 엔드포인트
const BASE_URL = 'https://api.figma.com/v1';

// 파일 정보 가져오기
async function getFigmaFile() {
  try {
    console.log('📋 Figma 파일 정보를 가져오는 중...');
    
    const response = await fetch(`${BASE_URL}/files/${FIGMA_FILE_KEY}?node_ids=${NODE_ID}`, {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Figma API 요청 실패:', error.message);
    throw error;
  }
}

// 컴포넌트 정보 가져오기
async function getComponents() {
  try {
    console.log('🎨 컴포넌트 정보를 가져오는 중...');
    
    const response = await fetch(`${BASE_URL}/files/${FIGMA_FILE_KEY}/components`, {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ 컴포넌트 정보 요청 실패:', error.message);
    throw error;
  }
}

// 노드 정보 상세 가져오기
async function getNodeInfo() {
  try {
    console.log(`📍 노드 ${NODE_ID} 정보를 가져오는 중...`);
    
    const response = await fetch(`${BASE_URL}/files/${FIGMA_FILE_KEY}/nodes?ids=${NODE_ID}`, {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ 노드 정보 요청 실패:', error.message);
    throw error;
  }
}

// 메인 실행 함수
async function main() {
  try {
    console.log('🚀 Figma API 연결 시작\n');
    console.log(`📁 파일 키: ${FIGMA_FILE_KEY}`);
    console.log(`🔍 노드 ID: ${NODE_ID}\n`);

    // 노드 정보 가져오기
    const nodeData = await getNodeInfo();
    console.log('\n✅ 노드 정보를 성공적으로 가져왔습니다!');
    
    // JSON 파일로 저장
    await fs.writeFile(
      'figma_node_data.json', 
      JSON.stringify(nodeData, null, 2)
    );
    console.log('💾 figma_node_data.json 파일로 저장되었습니다.');

    // 컴포넌트 정보도 가져오기
    const componentsData = await getComponents();
    if (componentsData.meta?.components) {
      await fs.writeFile(
        'figma_components.json',
        JSON.stringify(componentsData, null, 2)
      );
      console.log('💾 figma_components.json 파일로 저장되었습니다.');
      console.log(`\n📊 총 ${componentsData.meta.components.length}개의 컴포넌트를 찾았습니다.`);
    }

    // 주요 정보 출력
    if (nodeData.nodes && nodeData.nodes[NODE_ID]) {
      const node = nodeData.nodes[NODE_ID];
      console.log('\n📌 노드 정보 요약:');
      console.log(`- 이름: ${node.document?.name || '알 수 없음'}`);
      console.log(`- 타입: ${node.document?.type || '알 수 없음'}`);
      if (node.document?.children) {
        console.log(`- 하위 요소: ${node.document.children.length}개`);
      }
    }

  } catch (error) {
    console.error('\n❌ 실행 중 오류 발생:', error);
    process.exit(1);
  }
}

// 스크립트 실행
main();