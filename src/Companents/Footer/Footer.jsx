import React from 'react';
import './css/footer.css';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <div>
      <footer>
        <div className="footeresas">
          <div className="footerblok">
            <div className="footerblok01">
              <h4>ASProf Group</h4>
            </div>
            <div className="footerblok02">
              <ul>
                <li><a href="/" className="footerlistlinkedina">{t('home')}</a></li>
                <li><a href="/contact" className="footerlistlinkedina">{t('contact')}</a></li>
                <li><a href="/vacancies" className="footerlistlinkedina">{t('Vacancies')}</a></li>
              </ul>
            </div>
          </div>
          <div className="footerblok">
            <div className="footerblok01">
              <h4><span className="icon-text">{t('contact')}</span> <i className="fa-brands fa-linkedin"></i></h4>
            </div>
            <div className="footerblok02">
              <ul>
                <li>
                  <a target="_blank" href="https://az.linkedin.com/company/asprof-group" className="footerlistlinkedina">
                    <i className="fa-brands fa-linkedin"></i><span className="icon-text">ASProf Group</span>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.linkedin.com/company/as-lift-elevator" className="footerlistlinkedina">
                    <i className="fa-brands fa-linkedin"></i><span className="icon-text">As Lift & Elevator MMC</span>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://az.linkedin.com/company/fsca" className="footerlistlinkedina">
                    <i className="fa-brands fa-linkedin"></i><span className="icon-text">Fire Safety Caspian Azerbaijan MMC</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footeralt">
          <h5 className="footeralth5">{t('shirketlernakomanda-footer1')}</h5>
          <h6 className="footeralth6">Developed by <i className="fa-brands fa-instagram"></i> ARKDİV</h6>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
