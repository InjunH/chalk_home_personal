// Figma Images API를 사용하여 이미지 다운로드
import fs from 'fs/promises';
import path from 'path';

const FIGMA_FILE_KEY = '69XfrgBGWnxwUFYemMP1U9';
const FIGMA_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

if (!FIGMA_TOKEN) {
  console.error('❌ FIGMA_ACCESS_TOKEN 환경 변수가 설정되지 않았습니다.');
  process.exit(1);
}

// figma_node_data.json에서 모든 imageRef 추출
async function extractImageRefs() {
  try {
    const data = await fs.readFile('figma_node_data.json', 'utf8');
    const figmaData = JSON.parse(data);
    
    const imageRefs = new Set();
    
    // JSON을 재귀적으로 탐색하여 imageRef 찾기
    function findImageRefs(obj) {
      if (typeof obj === 'object' && obj !== null) {
        if (obj.imageRef) {
          imageRefs.add(obj.imageRef);
        }
        for (const key in obj) {
          findImageRefs(obj[key]);
        }
      }
    }
    
    findImageRefs(figmaData);
    return Array.from(imageRefs);
  } catch (error) {
    console.error('❌ figma_node_data.json 읽기 실패:', error.message);
    return [];
  }
}

// Figma Images API를 사용하여 이미지 URL 가져오기 (배치별로 처리)
async function getImageUrls(imageRefs) {
  try {
    console.log(`📷 ${imageRefs.length}개의 이미지 URL을 가져오는 중...`);
    
    const allImages = {};
    const batchSize = 5; // 한번에 5개씩 처리
    
    for (let i = 0; i < imageRefs.length; i += batchSize) {
      const batch = imageRefs.slice(i, i + batchSize);
      console.log(`  📦 배치 ${Math.floor(i/batchSize) + 1}/${Math.ceil(imageRefs.length/batchSize)}: ${batch.length}개 이미지`);
      
      try {
        const response = await fetch(
          `https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${batch.join(',')}&format=png&scale=2`,
          {
            headers: {
              'X-Figma-Token': FIGMA_TOKEN
            }
          }
        );

        if (!response.ok) {
          console.error(`  ❌ 배치 ${Math.floor(i/batchSize) + 1} 실패: HTTP ${response.status}`);
          continue;
        }

        const data = await response.json();
        Object.assign(allImages, data.images);
        
        // API 제한을 피하기 위해 잠시 대기
        await new Promise(resolve => setTimeout(resolve, 1000));
        
      } catch (batchError) {
        console.error(`  ❌ 배치 ${Math.floor(i/batchSize) + 1} 오류:`, batchError.message);
      }
    }
    
    return allImages;
  } catch (error) {
    console.error('❌ Figma Images API 요청 실패:', error.message);
    throw error;
  }
}

// 이미지 다운로드
async function downloadImage(url, filename) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const buffer = await response.arrayBuffer();
    await fs.writeFile(`public/images/chalk-ai/${filename}`, Buffer.from(buffer));
    console.log(`✅ 다운로드 완료: ${filename}`);
  } catch (error) {
    console.error(`❌ ${filename} 다운로드 실패:`, error.message);
  }
}

// 메인 실행 함수
async function main() {
  try {
    console.log('🚀 Figma 이미지 다운로드 시작\n');
    
    // public/images/chalk-ai 디렉터리 생성
    await fs.mkdir('public/images/chalk-ai', { recursive: true });
    console.log('📁 public/images/chalk-ai 디렉터리 생성 완료\n');
    
    // 이미지 참조 추출
    const imageRefs = await extractImageRefs();
    console.log(`🔍 발견된 imageRef: ${imageRefs.length}개`);
    console.log(imageRefs.map(ref => `- ${ref.slice(0, 12)}...`).join('\n') + '\n');
    
    if (imageRefs.length === 0) {
      console.log('❌ 다운로드할 이미지가 없습니다.');
      return;
    }
    
    // 이미지 URL 가져오기
    const imageUrls = await getImageUrls(imageRefs);
    
    // 이미지 다운로드
    console.log('\n📥 이미지 다운로드 시작...\n');
    const downloadPromises = [];
    
    for (const [imageRef, url] of Object.entries(imageUrls)) {
      if (url) {
        const filename = `${imageRef.slice(0, 12)}.png`;
        downloadPromises.push(downloadImage(url, filename));
      }
    }
    
    await Promise.all(downloadPromises);
    
    // 이미지 매핑 정보 저장
    const imageMapping = {};
    for (const [imageRef, url] of Object.entries(imageUrls)) {
      if (url) {
        imageMapping[imageRef] = `/images/chalk-ai/${imageRef.slice(0, 12)}.png`;
      }
    }
    
    await fs.writeFile(
      'figma_image_mapping.json',
      JSON.stringify(imageMapping, null, 2)
    );
    
    console.log('\n✅ 모든 이미지 다운로드 완료!');
    console.log('💾 figma_image_mapping.json 파일로 매핑 정보 저장됨');
    console.log(`📊 총 ${Object.keys(imageMapping).length}개의 이미지 다운로드`);
    
  } catch (error) {
    console.error('\n❌ 실행 중 오류 발생:', error);
    process.exit(1);
  }
}

// 스크립트 실행
main();