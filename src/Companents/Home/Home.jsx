import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from 'react-i18next';
import './css/Home.css';
import Homesec1 from "./Homesec1/Homesec1";
import Homesec2 from "./Homesec2/Homesec2";
import Homesec3l from "./Homesec3l/Homesec3l";
import Homesec4 from "./Homesec4/Homesec4";
import Homesec5 from "./Homesec5/Homesec5";
import Homesecabout from "./Homesecabout/Homesecabout";

function Home() {
  const [activeModal, setActiveModal] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const closeModal = () => setActiveModal(null);

  // Scroll funksiyasını əlavə edir
  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.8;
      const element = document.querySelector('.profbetonxidmetler1');
      
      if (element) {
        const position = element.getBoundingClientRect().top;

        if (position < triggerHeight && window.scrollY > 50) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { t } = useTranslation();
  const blocksRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const screenPosition = window.innerHeight / 1.3;
      blocksRef.current.forEach((block, index) => {
        const blockPosition = block.getBoundingClientRect().top;
        if (blockPosition < screenPosition) {
          setTimeout(() => {
            block.classList.add("visible");
          }, index * 200); // Hər bir blok üçün gecikmə
        } else {
          setTimeout(() => {
            block.classList.remove("visible");
          }, index * 200); // Hər bir blok üçün gecikmə
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  return (
    <div>
      <main>
        {/* ----------------------------- LAYİHƏLƏR BLOKU 4 START ------------------------------- */}
        <Homesec4 />
        {/* ----------------------------- LAYİHƏLƏR BLOKU 4 END ------------------------------- */}
        
        <div className="designmain">
          {/* ----------------------------- Homesecabout BLOKU START ------------------------------- */}
          <Homesecabout />
          {/* -----------------------------  Homesecabout BLOKU END ------------------------------- */}

          {/* ----------------------------- XİDMƏTLƏR BLOKU START ------------------------------- */}
          <Homesec1 />
          {/* ----------------------------- XİDMƏTLƏR BLOKU END ------------------------------- */}

          {/* ----------------------------- MƏHSULLAR BLOKU 2 START ------------------------------- */}
          <Homesec2 />
          {/* ----------------------------- MƏHSULLAR BLOKU 2 END ------------------------------- */}

          {/* ----------------------------- LAYİHƏLƏR BLOKU 3 START ------------------------------- */}
          <Homesec3l />
          {/* ----------------------------- LAYİHƏLƏR BLOKU 3 END ------------------------------- */}

          {/* ----------------------------- LAYİHƏLƏR BLOKU 3 START ------------------------------- */}
          <Homesec5 />
          {/* ----------------------------- LAYİHƏLƏR BLOKU 3 END ------------------------------- */}
        </div>
      </main>
    </div>
  );
}

export default Home;
