import './Homesecabout.css';
import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from 'react-i18next';
    
function Homesecabout() {

    const [activeModal, setActiveModal] = useState(null);
  const { t } = useTranslation();
  const blocksRef = useRef([]);
  const closeModal = () => setActiveModal(null);

            return (
                <section className="sec3">
                <div className="sec3div1">
                <h2>{t( 'about_us')}</h2>
                  <b>{t( 'trust_and_progress')}</b>
                  <p>{t( 'as_prof_group_intro')}</p>
                  <a href="/about" >
                    <button href="/about" >{t( 'learn_more')}</button>
                    
                  </a>
                </div>
              </section>
            )
          }
          
          export default Homesecabout;