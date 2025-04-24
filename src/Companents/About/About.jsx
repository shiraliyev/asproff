import React from 'react';
import './css/About.css';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <main>
      <section className="grid-container aboutsec3 bg3">
        <div className="grid-item">
          <h2>{t('about_us')}</h2>
          <b>{t('trust_and_progress')}</b>
          <p>{t('as_prof_group_intro')}</p>
        </div>
      </section>
      
      <section className="grid-container aboutsec3 bg4">
        <div className="grid-item">
          <h2>{t('our_goal')}</h2>
          <b>{t('Profbetonmeqsedbasliq')}</b>
          <p>{t('Profbetonmeqsedtext')}</p>
        </div>
      </section>
    </main>
  );
}

export default About;
