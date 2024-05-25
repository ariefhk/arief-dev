import Link from "next/link"
import {
  FaGithub,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa"
import { Separator } from "../ui/separator"
import HireMeForm from "./hire-me-form"
import SectionWrapper from "./section-wrapper"

const sosmed = [
  {
    name: "Github",
    href: "https://github.com/ariefhk",
    icon: FaGithub,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ariefrhk",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/arieff.rh",
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/ariefrh_code",
    icon: FaTwitter,
  },
]

const Footer = () => {
  return (
    <div>
      <SectionWrapper className="grid py-10 md:grid-cols-2 gap-y-10 md:gap-y-0">
        <div className="space-y-5 order-last md:order-first">
          <div className="space-y-2">
            <h1 className="text-text24_30 font-bold">Let{"'"}s Connect</h1>
            <p className="text-text14_22 text-muted-foreground">
              I{"'"}m currently looking for new opportunities,{" "}
              <br className="md:block hidden" /> my inbox is always open.
              Whether you have a question or <br className="md:block hidden" />{" "}
              just want to say hi, I{"'"}
              ll try my best to get back to you!
            </p>
          </div>
          <div className="flex items-center gap-x-5">
            {sosmed.map((sosmedData, index) => {
              const Icon = sosmedData.icon
              return (
                <Link
                  key={index + 1}
                  href={sosmedData.href}
                  className="group flex flex-col gap-y-1">
                  <Icon className="w-8 h-8 flex-shrink-0" />
                  <Separator className="bg-primary invisible group-hover:visible" />
                </Link>
              )
            })}
          </div>
        </div>
        <div id="contact" className="space-y-5">
          <h1 className="text-text24_30 font-bold">Hire Me!</h1>
          <HireMeForm className="md:max-w-[500px]" />
        </div>
      </SectionWrapper>
      <Separator />
      <SectionWrapper className="text-center text-sm py-3">
        <h1>
          Made with <FaHeart className="text-red-500 inline mx-1" /> by{" "}
          <Link href={"/"} className="hover:underline hover:underline-offset-4">
            Arief Rachman Hakim
          </Link>
        </h1>
      </SectionWrapper>
    </div>
  )
}

export default Footer
