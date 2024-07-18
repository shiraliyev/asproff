import React from 'react';
import './css/About.css';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <main>
      <section className="bg3 aboutsec3">
        <div className="sec3div1">
          <h2>{t('about_us')}</h2>
          <b>{t('trust_and_progress')}</b>
          <p>{t('as_prof_group_intro')}</p>
        </div>
      </section>
      
      <section className="aboutsec3 bg4">
        <div className="sec3div1">
          <h2>{t('our_goal')}</h2>
          <b>{t('trust_and_progress_2')}</b>
          <p>{t('as_prof_group_goal')}</p>
        </div>
      </section>
    </main>
  );
}

export default About;
