import Image from "next/image";

export default function HeroImage() {
  return <Image src={"/images/arief-bebas.jpg"} alt="logo" loading="eager" priority fill className=" object-cover" />;
}
