import React from 'react';
import './css/footer.css';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  const contactData = [
    {
      icon: <span className="material-symbols-outlined">phone_iphone</span>,
      title: t('number'),
      content: '(+994) 55 204 10 11',
      link: 'tel:+994552041011',
    },
    {
      icon: <span className="material-symbols-outlined">mail</span>,
      title: t('Email'),
      content: 'ferid.abdullayev@asprof.az',
      link: 'mailto:ferid.abdullayev@asprof.az?subject=Buraya%20ismarıc%20növünü%20qeyd%20edin:',
    },
    {
      icon: <span className="material-symbols-outlined">call</span>,
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
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column">
              <h4>Profbeton</h4>
              <ul>
                <li><a href="/" className="footer-link">{t('home')}</a></li>
                <li><a href="/contact" className="footer-link">{t('contact')}</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>{t('contact')}</h4>
              <ul>
                {contactData.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="footer-link"
                    >
                      {item.icon} {item.content}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <h5>{t('shirketlernakomanda-footer1')}</h5>
            <h6>Developed by <a href="https://www.instagram.com/arkdiv?igsh=cDUwNGhpZnQ0N2l6" className="footer-link"> <i className="fa-brands fa-instagram"></i> ARKDİV</a> <br /> Naghi Shiraliyev </h6>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
