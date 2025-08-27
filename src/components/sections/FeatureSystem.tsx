import AILogoCard from '@/components/sections/home/FeatureSystem/AILogoCard';
import TextCard from '@/components/sections/home/FeatureSystem/TextCard';
import PassportCard from '@/components/sections/home/FeatureSystem/PassportCard';

export default function FeatureSystem() {
  return (
    <section className="bg-[#0C0C0C] overflow-hidden section-padding">
      <div className="max-w-[1920px] mx-auto container-padding">
        {/* 첫 번째 행 - AI 로고 카드 + Hyper-Personalized Learning Solution */}
        <div className="flex card-gap row-gap">
          <AILogoCard />
          
          <TextCard
            title={
              <>
                Hyper-Personalized
                <br />
                Learning Solution
              </>
            }
            description={
              <>
                초개인화로 학생의 상태와 목표, 성향과 선호도를 정확히 파악하고
                <br />
                개개인의 수준과 선호에 맞는 맞춤형 콘텐츠를 제작합니다.
              </>
            }
          />
        </div>

        {/* 두 번째 행 - G-LMS + Passport 이미지 */}
        <div className="flex card-gap">
          <TextCard
            title="G-LMS"
            subtitle={
              <>
                Gamified Learning Management
                <br />
                System
              </>
            }
            description={
              <>
                공부는 머릿속에 지식을 쌓아가는 과정입니다.
                <br />
                초크를 통해 우리는 성취를 눈으로 보고, 지식을 쌓아갑니다.
                <br />
                쌓여가는 지식과 성취되는 보상속에서, 공부는
                <br />
                &apos;해야 하는 것&apos;에서 &apos;하고 싶은 것&apos;이 됩니다.
              </>
            }
            hasSubtitle={true}
          />
          
          <PassportCard
 />
        </div>
      </div>
    </section>
  );
}
