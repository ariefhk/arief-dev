import FramerWrapper from "@/components/common/framer-wrapper";
import HeroTexts from "@/components/common/hero-text";
import HeroImage from "@/components/common/hero-image";
import SocialLinks from "@/components/common/social-link";
import DownLoadResumeBtn from "@/components/common/download-resume";

export default function HomePage() {
  return (
    <div className="max-w-screen-xl w-full justify-between flex  mx-auto">
      {/* LEFT SIDE  */}
      <FramerWrapper className=" h-full w-auto flex flex-col justify-start gap-4" y={0} x={-100}>
        <HeroTexts />
        <div className="h-fit w-full flex gap-3">
          <SocialLinks />
        </div>
        <DownLoadResumeBtn />
      </FramerWrapper>
      {/* RIGHT SIDE image  */}

      <FramerWrapper className="h-[300px]  w-[300px] rounded-full overflow-hidden relative block max-lg:hidden" y={0} x={100}>
        <HeroImage />
      </FramerWrapper>
    </div>
  );
}
