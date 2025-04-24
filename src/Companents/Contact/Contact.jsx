import React from 'react';
import './css/Contact.css';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  const contactData = [
    {
      icon: <span className="material-symbols-outlined">phone_iphone</span>, // Material Design iconu
      title: t('number'),
      content: '(+994) 55 204 10 11',
      link: 'tel:+994552041011',
    },
    {
      icon: <span class="material-symbols-outlined">mail</span>,
      title: t('Email'),
      content: 'ferid.abdullayev@asprof.az',
      link: 'mailto:ferid.abdullayev@asprof.az?subject=Buraya%20ismarıc%20növünü%20qeyd%20edin:',
    },
    {
      icon: <span class="material-symbols-outlined">call</span>,
      title: t('number'),
      content: '(+994) 12 440 71 20/21',
      link: 'tel:+994124407120',
      
    },
  ];

  const handleCardClick = (link) => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <main className="contactmain">
      <section className="contactgrid">
        {contactData.map((item, index) => (
          <div
            className="contactblok"
            key={index}
            onClick={() => handleCardClick(item.link)}
          >
            <h2 className="contacth2">{item.icon}</h2>
            <h3 className="contacth3">{item.title}</h3>
            <h4 className="contacth4">{item.content}</h4>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Contact;
