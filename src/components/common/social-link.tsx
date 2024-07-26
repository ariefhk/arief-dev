import { cn } from "@/lib/class-merge";
import { Instagram, Linkedin, Youtube, Github } from "lucide-react";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import FramerWrapper from "./framer-wrapper";

const SocialLinks = () => {
  const links = [
    { name: "Github", link: "https://github.com/ariefhk", icon: <Github /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/ariefrhk", icon: <Linkedin /> },
    { name: "Instagram", link: "https://www.instagram.com/ariefrh.dev", icon: <Instagram /> },
    { name: "Youtube", link: "http://www.youtube.com/@arief_dev", icon: <Youtube /> },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={indx + 1} delay={timing} y={50}>
            <Link target="blank" href={itm.link} className={cn(buttonVariants({ variant: "outline", size: "icon" }))}>
              {itm.icon}
            </Link>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
