// NavBar.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './css/navbar.css';
import { useTranslation } from 'react-i18next';

function NavBar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('selectedLanguage', lng);
  };

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img src="img/logonav.PNG" alt=""/>
        </Navbar.Brand>
        <div className="navblokbos"></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ul">
            <Nav.Link className='li a' href="/">{t('home')}</Nav.Link>
            <Nav.Link className='li a' href="/about">{t('about')}</Nav.Link>

            <NavDropdown title={t('our_companies')} id="basic-nav-dropdown">
              <NavDropdown.Item href="/profbeton">ProfBeton</NavDropdown.Item>
              <NavDropdown.Item href="/aslift">As Lift & Elevator</NavDropdown.Item>
              <NavDropdown.Item href="/BCC">BCC Construction</NavDropdown.Item>
              <NavDropdown.Item href="/ASPEK">As Prof Engineering Konsaltinq</NavDropdown.Item>
              <NavDropdown.Item href="/firesafety">Fire Safety Caspian Azerbaijan</NavDropdown.Item>
              
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="/comanda">
                {t('shirketlernakomanda-rehberlik1')}
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link className='li a' href="/vacancies">{t('career')}</Nav.Link>
            <Nav.Link className='li a' href="/contact">{t('contact')}</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={capitalize(localStorage.getItem('selectedLanguage') || 'az')} id="language-switcher">
              <NavDropdown.Item onClick={() => changeLanguage('az')}>Az</NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLanguage('ru')}>Ru</NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLanguage('en')}>En</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
