import FramerWrapper from "@/components/common/framer-wrapper";
import Heading from "@/components/common/heading";
import Wrapper from "@/components/common/wrapper";
import { Badge } from "@/components/ui/badge";
import { Layers, User2 } from "lucide-react";
import React from "react";

export default function ProjectsPage() {
  return (
    <Wrapper>
      <div className="h-full w-full relative flex flex-col items-start gap-8 overflow-hidden">
        <div className="space-y-3">
          <Badge className=" gap-2">
            <Layers className="h-5 w-5" />
            Projects
          </Badge>
          <div className="flex flex-col gap-10">
            <Heading> Projects that I have worked on</Heading>
            <FramerWrapper y={0} x={100}>
              <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg leading-8">Soon...</p>
            </FramerWrapper>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
