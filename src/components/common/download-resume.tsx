import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Download } from "lucide-react";

export default function DownloadResume() {
  return (
    <Button size={"lg"} asChild className="w-max mt-2 py-2 px-4 text-base flex justify-center items-center gap-x-2">
      <Link
        href={"/files/cv_arief_rachman_hakim_web_developer.pdf"}
        target="_blank"
        rel="noopener noreferrer"
        locale={false}
        download
      >
        <Download className="mx-1" /> Download Resume <span className="px-1">/</span> CV
      </Link>
    </Button>
  );
}
