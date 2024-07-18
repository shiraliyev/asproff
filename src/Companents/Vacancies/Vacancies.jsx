import React from 'react';
import './css/Vacancies.css';
import Data from "../../Data/Data";
import { useTranslation } from 'react-i18next';

function Vacancies() {
  const { t } = useTranslation();

  return (
    <main className="mainkareyer">
      <section className="kareyersec1">
        <div className="kareyersec1div01">
          <h2 className="kareyersec1div01h2">{t('vacnyZirveler')}</h2>
          
          <h3 className="kareyersec1div01h3">{t('vacnyPeşakar')}</h3>
          
        </div>
      </section>
      <div className="kariyerdiv0111111">
        <img src="img/logonav.PNG" alt=""/> 
      </div>

      <section className="kareyersec2">
        <div className="karyerparametr">
          <h2 className="parametrh2">{t('Vacancies')}</h2>
        </div>
        <div className="vakansiyalar">
          {Data.map(vacancy => (
            <a href="/appeal" key={vacancy._id}>
              <div className="vakans">
                <div className="vakansblok">
                  <i className="fa-solid fa-user-tie karyerlocicon"></i>
                  <p className="vakansblokp">{vacancy.İxtisas}</p>                               
                </div>
                <div className="vakansblok">
                  <i className="fa-solid fa-location-dot karyerlocicon"></i>
                  <p className="vakansblokp">{vacancy.konum}</p>
                </div>
                <div className="vakansblok">
                  <i className="fa-solid fa-calendar-days karyerlocicon"></i> 
                  <p className="vakansblokp">{vacancy.zaman}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <div className="kariyerdiv0555"></div>
      <div className="kariyerdiv0111111">
        <img src="img/logonav.PNG" alt=""/> 
      </div>
    </main>
  );
}

export default Vacancies;
