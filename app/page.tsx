import Image from "next/image";
import styles from "./page.module.css";
import Slider from "@/components/slider/page";
import { Poppins } from "next/font/google";
import Services from "@/components/services/page";
import Steps from "@/components/steps/page";
import Partners from "@/components/partners/page";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`${poppins.className} container mx-auto`}>
      <Slider />
      <Services />
      <Steps />
      <Partners />
    </main>
  );
}
