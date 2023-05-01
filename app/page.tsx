"use client";
import styles from "./page.module.css";
import { useState, useRef, useEffect } from "react";
import { Poppins } from "next/font/google";
import Slider from "@/components/slider/page";
import TopServices from "@/components/topServices/page";
import Services from "@/components/services/page";
import Steps from "@/components/steps/page";
import Partners from "@/components/partners/page";
import Statisticks from "@/components/statisticks/page";
import Download from "@/components/download/page";
import Contact from "@/components/contact/page";
import Modal from "@/elements/modal/page";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
});

export default function Home() {
  const [modal, setModal] = useState<boolean>(false);
  const [modalInfo, setModalInfo] = useState({
    modalTitle: "",
    serviceTitle: "",
    services: [],
  });
  return (
    <main className={`${poppins.className} container mx-auto`}>
      <Slider />
      <TopServices />
      <Services
        modal={modal}
        setModal={setModal}
        modalInfo={modalInfo}
        setModalInfo={setModalInfo}
      />
      <Steps />
      <Partners />
      <Statisticks />
      <Download />
      <Contact />
      <Modal
        show={modal ? "showPopup" : "hidePopup"}
        modalInfo={modalInfo}
        setModalInfo={setModalInfo}
        modal={modal}
        setModal={setModal}
      />
    </main>
  );
}
