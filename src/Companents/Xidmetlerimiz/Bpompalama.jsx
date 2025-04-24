import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from 'react-i18next';
import './Xidmetler111.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import DataBpompalama from "../../Data/DataBpompalama";
function Bpompalama() {
  const [activeModal, setActiveModal] = useState(null);
  const { t } = useTranslation();
  const blocksRef = useRef([]);
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeModal]);
  
  const closeModal = () => setActiveModal(null);

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.8;
      const elements = document.querySelectorAll('.profbetonxidmetler11');
      elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        if (position < triggerHeight && window.scrollY > 50) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <main>
        <div className="designmain">
          <div className="designmainsec1">
            <div className="designmainsec1basliq">
              <h2>{t('Concrete_pumping')}</h2>
              <hr />
            </div>
            <div className="profbetonxidmetler11" ref={(el) => blocksRef.current.push(el)}>
              <Swiper
                spaceBetween={10}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                speed={4000}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 30 },
                  1024: { slidesPerView: 3, spaceBetween: 40 },
                }}
              >
                {DataBpompalama.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div
                      className="profbetonxidmetlercardsw"
                      onClick={() => setActiveModal(slide)}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="profbetonxidmetlercardimg"
                      />
                      <div className="profbetonxidmetlercardtext">
                        <h3>{t(slide.title)}</h3>
                        <p>{t(slide.description)}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </main>
      {activeModal && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <span className="closeButton" onClick={closeModal}>X</span>
            <img 
              src={activeModal.image} 
              alt={activeModal.title} 
              className="modalImage" 
            />
            <h2>{t(activeModal.title)}</h2>
            <p>{t(activeModal.modalContent)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bpompalama;
