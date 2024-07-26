import { Inter, Poppins, Rubik } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

export const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});
