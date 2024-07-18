import React, { useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import './css/Home.css';

function Home() {
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
               {/* <section className="sec1">
            <div className="sec1div1">
              <h2>"Müştərilərimizlə birləşərək,güclü bir dünya yaradırıq."</h2>
            </div>
          </section> */}
                    {/* <section className="sec1">
            <div className="sec1div1">
              <h2>"Müştərilərimizlə birləşərək,güclü bir dünya yaradırıq."</h2>
            </div>
          </section> */}
        <main>
<section className="homesec15foto">
<div className="homesec15fotoboss">
<div className="bacgroungsec1bina1text">
<div className="sec1div1">
  <h2 className=" rowdies-bold">ASPROF GROUP</h2> <br />
              <h3  className="fira-sans-condensed-thin">{t( 'homesec1binatext')}</h3>
            </div>
</div>
          <div className="bacgroungsec1bina1"></div>
        </div>
    {/* <img src="img/bacgroungsec1bina2.png" className="bacgroungsec1bina1" alt="" /> */}
    <div className="cloud cloud1"></div>
    <div className="cloud cloud2"></div>
    <div className="cloudtop2 cloud3"></div>
    <div className="cloud cloud4"></div>
    <div className="cloud cloud5"></div>
    <div className="cloud cloud6"></div>
    <div className="cloudtop2 cloud7"></div>
    <div className="cloud cloud8"></div>
    <div className="cloud cloud9"></div>
    <div className="cloud cloud10"></div>
    <div className="cloudtop2 cloud11"></div>
    <div className="cloud cloud12"></div>
</section>
  {/* <div className="collage">
    <div className="small-image img1">
      <img src="img/homeshirketyangin.jpg" alt="Şəkil 1" />
    </div>
    <div className="small-image img2">
      <img src="img/homeshirketbeton.jpg" alt="Şəkil 2" />
    </div>
    {/* <!-- Daha fazla şəkil burada olacaq --> 
  </div> */}
        {/* <section className="hero">
        <video autoPlay loop muted playsInline className="video">
          <source src="/img/Asprofhomevideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content5">
          <h2 className="asp">ASProf Group</h2>
        </div>
      </section> */}

          <div className="kariyerdiv0111111">
            <img src="img/logonav.PNG" alt=""/> 
          </div>
          <section className="sec2">
            <div className="homesec2div1">
              <h2 className="homesec2div1h2">{t( 'companies')}</h2>
              
            </div>
            <div className="homesec2div2">
            < a href="https://profbeton.az/" className="ainline" target="_blank">
            <div className="homesec2div2blok" >
                <div className="homesec2div2blokimgbeton"></div>
                <div className="homesec2div2blokname">
                  <h4 className="homesec2div2bloknameh4">ProfBeton MMC</h4>
                </div>
              </div>
              </a>
              < a href="https://fsca.az/" className="ainline" target="_blank">
              <div className="homesec2div2blok" >
                <div className="homesec2div2blokimgfire"></div>
                <div className="homesec2div2blokname">
                  <h4 className="homesec2div2bloknameh4">Fire Safety Caspian Azerbaijan MMC</h4>
                </div>
              </div>
              </a>
              < a href="https://aslift.az/" className="ainline" target="_blank">
              <div className="homesec2div2blok" >
                <div className="homesec2div2blokimglift"></div>
                <div className="homesec2div2blokname">
                  <h4 className="homesec2div2bloknameh4">As Lift & Elevator MMC</h4>
                </div>
              </div>
              </a>
              < a href="/ASPEK" className="ainline" >

              <div className="homesec2div2blok" >
                <div className="homesec2div2blokimgEngineering"></div>
                <div className="homesec2div2blokname">
                  <h4 className="homesec2div2bloknameh4">As Prof Engineering Konsaltinq MMC</h4>
                </div>
              </div>
              </a>
              < a href="/BCC" className="ainline">
              <div className="homesec2div2blok" >
                <div className="homesec2div2blokimgBCC"></div>
                <div className="homesec2div2blokname">
                  <h4 className="homesec2div2bloknameh4">Baku Construction Company MMC</h4>
                </div>
              </div>
             </a>
            </div>
          </section>
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
          <div className="designmain">
            <div className="designmainsec1">
              <div className="designmainsec1basliq">
                <h2>{t( 'services')}</h2>
                
                <hr />
              </div>
              {/* Bloklar */}
              <div className="designmainsec1div1" ref={(el) => (blocksRef.current[0] = el)}>
                <div className="designmainsec1div1div1"></div>
                <div className="designmainsec1div1div2">
                  <div className="designmainsec1div1div2div1betonimg"></div>
                  <div className="designmainsec1div1div2div2">
                    <h3>ProfBeton MMC</h3>
                    <h5>{t( 'profbeton_intro')}</h5>
                    
                    <h6>{t( 'profbeton_description')}</h6>
                    
                  </div>
                </div>
              </div>
              <div className="designmainsec1div1" ref={(el) => (blocksRef.current[1] = el)}>
                <div className="designmainsec1div1div2">
                  <div className="designmainsec1div1div2div2">
                    <h3>Fire Safety Caspian Azerbaijan MMC</h3>
                    <h5>{t( 'fire_safety_intro')}</h5>
                    
                    <h6>{t( 'fire_safety_description')}</h6></div>
                  <div className="designmainsec1div1div2div1fireeimg"></div>
                </div>
                <div className="designmainsec1div1div1"></div>
              </div>
              <div className="designmainsec1div1" ref={(el) => (blocksRef.current[2] = el)}>
                <div className="designmainsec1div1div1"></div>
                <div className="designmainsec1div1div2">
                  <div className="designmainsec1div1div2div1liftimg"></div>
                  <div className="designmainsec1div1div2div2">
                    <h3>As Lift & Elevator MMC</h3>
                    <h5>AS LİFT & ELEVATOR MMC</h5>
                    <h6>{t( 'as_lift_description')}</h6>
                  </div>
                </div>
              </div>
              <div className="designmainsec1div1" ref={(el) => (blocksRef.current[3] = el)}>
                <div className="designmainsec1div1div2">
                  <div className="designmainsec1div1div2div2">
                    <h3>As Prof Engineering Konsaltinq MMC</h3>
                    <h5>{t( 'as_prof_intro')}</h5>
                    <h6>{t( 'as_prof_description')}</h6>
                  </div>
                  <div className="designmainsec1div1div2div1enginer"></div>
                </div>
                <div className="designmainsec1div1div1"></div>
              </div>
              <div className="designmainsec1div1" ref={(el) => (blocksRef.current[4] = el)}>
                <div className="designmainsec1div1div1"></div>
                <div className="designmainsec1div1div2">
                  <div className="designmainsec1div1div2div1temirimg"></div>
                  <div className="designmainsec1div1div2div2">
                    <h3>Baku Construction Company MMC</h3>
                    <h5> {t( 'baku_construction_intro')}</h5>
                    <h6>{t( 'baku_construction_description')}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="kariyerdiv0111111">
            <img src="img/logonav.PNG" alt=""/> 
          </div>

        </main>
      </div>
    );
}

export default Home;
 
////////////////////////////
