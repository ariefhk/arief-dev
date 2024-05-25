"use client"

import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import SectionWrapper from "../common/section-wrapper"
import { Button } from "../ui/button"

const HeroButton = () => {
  return (
    <div className="flex items-center gap-x-5">
      <Button asChild className="rounded-full">
        <Link href="/#contact">Hire me</Link>
      </Button>
      <Button variant={"outline"} className="rounded-full">
        <Link
          href={"/files/arief-resume-cv.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          locale={false}
          download>
          Download Resume <span className="px-1">/</span> CV
        </Link>
      </Button>
    </div>
  )
}

export default function Hero() {
  return (
    <SectionWrapper className="pt-[30px]">
      <section
        id="about-me"
        className="overflow-hidden  sm:grid sm:grid-cols-3">
        <div className=" md:pr-14 lg:pr-8 lg:py-24 lg:col-span-2 col-span-3">
          <div className="text-wrap">
            <h1 className="text-text20_30  md:text-4xl lg:text-4xl xl:text-text48_48 font-extrabold">
              <span className=" bg-clip-text  bg-gradient-to-r from-primary-400 to-secondary-600">
                Hello, I&apos;m{" "}
              </span>
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  "Arief Rachman Hakim",
                  1000,
                  "Web Developer",
                  1000,
                  "Frontend Developer",
                  1000,
                  "Backend Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="  text-text12_20 md:text-text14_22  xl:text-text16_24  mt-4 md:mt-6 md:block ">
              I am dedicated to continuous learning and staying updated with the
              latest trends and best practices in web development. My
              problem-solving skills, combined with a passion for developing{" "}
              efficient and user-friendly applications make me a valuable
              addition to any team.
            </p>
            <div className="mt-4 md:mt-8">
              <HeroButton />
            </div>
          </div>
        </div>
        <div className="lg:flex hidden  justify-center items-center lg:col-span-1">
          <div className="bg-primary h-[266px] w-[266px] rounded-full flex justify-center items-center">
            <div className=" relative rounded-full overflow-hidden h-[260px] w-[260px] ">
              <Image
                alt=""
                src={"/images/arief-bebas.jpg"}
                fill
                priority
                className="object-cover "
              />
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  )
}
