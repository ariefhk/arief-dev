import { cn } from "@/lib/class-merge";
import React from "react";

interface WrapperProps extends React.PropsWithChildren {
  className?: string;
}

export default function Wrapper(props: Readonly<WrapperProps>) {
  return <div className={cn("max-w-screen-xl h-full mx-auto w-full mt-[80px]", props.className)}>{props.children}</div>;
}
