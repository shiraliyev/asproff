import React, { useState, useEffect } from 'react';
import './Galery.css';
import Datagalery from '../../Data/Datagalery';

function Galery() {
  const [activeMedia, setActiveMedia] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [activeLogo, setActiveLogo] = useState(null);

  const closeModal = () => {
    setActiveMedia(null);
    setMediaType(null);
    setActiveLogo(null);
    document.body.classList.remove('modal-open'); // Modal bağlananda skrollu açırıq
  };

  const openModal = (item) => {
    setActiveMedia(item.src);
    setMediaType(item.type);
    setActiveLogo(item.logo);
    document.body.classList.add('modal-open'); // Modal açıldıqda skrollu bağlayırıq
  };

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.8;
      const element = document.querySelector('.profbetonxidmetlergalery1');
      const position = element.getBoundingClientRect().top;

      if (position < triggerHeight && window.scrollY > 50) {
        element.classList.add('visiblegalery');
      } else {
        element.classList.remove('visiblegalery');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sehifelenmegalery1">
      <div className="profbetonxidmetlergalery1">
        <div className="profbetonxidmetlerdivgalery11">
          {Datagalery.map((item, index) => (
            <div
              key={index}
              className="profbetonxidmetlercardgalery"
              onClick={() => openModal(item)}
            >
              {item.type === 'image' ? (
                <img src={item.src} alt={`Media ${index}`} className="profbetonxidmetlercardimggalery" />
              ) : (
                <video muted className="profbetonxidmetlercardimggalery">
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
              <div className="logogalery">
                <img src={item.logo} alt="Logo" className="logoImagegalery" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeMedia && (
        <div className="modalOverlaygalery" onClick={closeModal}>
          <div className="modalContentgalery" onClick={(e) => e.stopPropagation()}>
            <div className="modalLogogalery">
              <img src={activeLogo} alt="Modal Logo" />
            </div>
            <span className="closeButtongalery" onClick={closeModal}>X</span>
            {mediaType === 'image' ? (
              <img src={activeMedia} alt="Full Media" className="modalImagegalery" />
            ) : (
              <video controls autoPlay className="modalVideogalery">
                <source src={activeMedia} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Galery;
