import ContactForm from "@/components/common/contact-form";
import FramerWrapper from "@/components/common/framer-wrapper";
import Heading from "@/components/common/heading";
import Wrapper from "@/components/common/wrapper";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";
import React from "react";

export default function ContactPage() {
  return (
    <Wrapper>
      <div className="h-full w-full relative flex flex-col items-start gap-10 overflow-hidden">
        <div className="space-y-3">
          <Badge className=" gap-2">
            <Phone className="h-5 w-5" />
            Contact
          </Badge>
          <Heading>Contact Me!</Heading>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="h-auto w-full flex justify-center items-center">
            <FramerWrapper y={0} scale={0.8}>
              <ContactForm />
            </FramerWrapper>
          </div>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base"></p>
        </div>
      </div>
    </Wrapper>
  );
}
