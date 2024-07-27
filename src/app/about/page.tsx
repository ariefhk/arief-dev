import { Badge } from "@/components/ui/badge";
import { User2 } from "lucide-react";
import FramerWrapper from "@/components/common/framer-wrapper";
import Heading from "@/components/common/heading";
import Aboutfooter from "@/components/common/about";
import Wrapper from "@/components/common/wrapper";

export default function AboutPage() {
  return (
    <Wrapper>
      <div className="h-full w-full relative flex flex-col items-start gap-8 overflow-hidden">
        <div className="space-y-3">
          <Badge className=" gap-2">
            <User2 className="h-5 w-5" />
            About me
          </Badge>
          <div className="flex flex-col gap-10">
            <Heading>Fullstack Developer</Heading>
            <FramerWrapper y={0} x={100}>
              <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg leading-8">
                I am a Full Stack Developer with strong interest in Web and Mobile App development with a focus on JavaScript
                Ecosystem including Node.js, Express.js, Nest.js, React, React Native, and Next.js. I am eager to apply my skills
                and knowledge to real-world projects and passionate about continuous learning and professional growth.
              </p>
            </FramerWrapper>
          </div>
        </div>
        <FramerWrapper className="w-full flex flex-row justify-between max-lg:flex-col max-lg:gap-y-5" y={100} delay={0.3}>
          <Aboutfooter />
        </FramerWrapper>
      </div>
    </Wrapper>
  );
}
