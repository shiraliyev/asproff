import React from 'react';
import './css/Contact.css';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <main class="contactmain">
      
        <section class="contactsec1">
            <div class="contactsec1div">
         <div className="contactblokbosluq"></div>

         <div class="contactblok">
            <h2 class="contacth2">
            <i class="fa-solid fa-phone radius"></i>
            </h2>
            <h3 class="contacth3">
                {t('number')} 
            </h3>
            <h4 class="contacth4">
            +994 (12) 526 12 62 
                 <br/>
                 +994 (50) 411 11 10
            </h4>
          </div>
         <div className="contactblokbosluq"></div>

          <div class="contactblok">
        
            <h2 class="contacth2">
            <a className='contacth2aa' href="mailto:office@asprof.az?subject=">
                <i class="fa-solid fa-envelope radius"></i>
                </a>
            </h2>
            <h3 class="contacth3">
            {t('Email')} 
            </h3>
            <h4 class="contacth4">
            office@asprof.az <br/>
            CV@asprof.az ;
            </h4>
           
          </div>
          <div className="contactblokbosluq"></div>
          {/* <div class="contactblok">
            <h2 class="contacth2">
                <i class="fa-solid fa-location-dot radius"></i>
            </h2>
            <h3 class="contacth3">
                Ünvan
            </h3>
            <h4 class="contacth4">
                AsPROF Group, Ceyhun Hacıbəyli, 39, 
                 Bakı, AZ1000, (2-ci mərtəbədə yerləşir)
            </h4>
          </div> */}
        </div>
        </section>
        {/* <section class="contactsec2">
            <div class="contactsec2div1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.1452904470643!2d49.87806679999997!3d40.38347239999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d1f6cccd307%3A0x1ca8f03c494795dc!2sAsProf!5e0!3m2!1sru!2saz!4v1716062622836!5m2!1sru!2saz" class="contactmaps" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="contactsec2div2">
            <h2 class="contactsec2div2h2"><i class="fa-solid fa-map-location-dot contactmapss"></i></h2>
                  <h3 class="contactsec2div2h3">ASProf Group</h3>
        </div>
        </section> */}
    </main>
  )
}

export default Contact;