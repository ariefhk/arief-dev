import FramerWrapper from "@/components/common/framer-wrapper";
import HeroTexts from "@/components/common/hero-text";

export default function HomePage() {
  return (
    <>
      {/* LEFT SIDE  */}
      <FramerWrapper className=" h-full w-auto flex flex-col justify-start gap-4" y={0} x={-100}>
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-3">{/* <SocialLinks /> */}</div>
        {/* <DownLoadResumeBtn /> */}
      </FramerWrapper>
      {/* RIGHT SIDE image  */}

      {/* GITHUB BUTTON  */}
      {/* <GithubBtn /> */}
    </>
  );
}
