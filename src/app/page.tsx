import FramerWrapper from "@/components/common/framer-wrapper";
import HeroTexts from "@/components/common/hero-text";
import HeroImage from "@/components/common/hero-image";
import SocialLinks from "@/components/common/social-link";
import DownloadResume from "@/components/common/download-resume";
import Wrapper from "@/components/common/wrapper";

export default function HomePage() {
  return (
    <Wrapper>
      <div className="justify-between flex">
        {/* LEFT SIDE  */}
        <FramerWrapper className=" h-full w-auto flex flex-col justify-start gap-4" y={0} x={-100}>
          <HeroTexts />
          <div className="h-fit w-full flex gap-3">
            <SocialLinks />
          </div>
          <DownloadResume />
        </FramerWrapper>
        {/* RIGHT SIDE IMAGE  */}
        <FramerWrapper className="h-[300px]  w-[300px] rounded-full overflow-hidden relative block max-lg:hidden" y={0} x={100}>
          <HeroImage />
        </FramerWrapper>
      </div>
    </Wrapper>
  );
}
