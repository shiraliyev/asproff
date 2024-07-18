import React from 'react';
import './Xidmetler.css';
import { useTranslation } from 'react-i18next';

function Profbeton() {
  const { t } = useTranslation();

  return (
    <main className="xidmetlermain">
      <section className="xidmetlersec1enginer">
        <div className="xidemtlersection1div1">
          <h2 className='xidmetlerh2'>As Prof Engineering Konsaltinq MMC</h2>
          <h5 className='xidmetlerh5'>{t( 'shirketlernaASPEK1')}</h5>
          <h6 className='xidmetlerh6'>{t( 'shirketlernavASPEK2')}</h6>
          <a href="" target="_blank"> <button className="xidmetbutton">{t( 'shirketlernavkechid')} <i className="fa-solid fa-arrow-right"></i></button></a>
        </div>
      </section>
    </main>
  );
}

export default Profbeton;
