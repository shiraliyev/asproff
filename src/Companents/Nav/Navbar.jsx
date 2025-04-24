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
          <img src="img/betonlogo.png" className='navbarlogoimg' alt=""/>
          {/* <div className="cube-container">
  <div className="cube">
    <div className="cube-side front"></div>
    <div className="cube-side back"></div>
    <div className="cube-side left"></div>
    <div className="cube-side right"></div>
    <div className="cube-side top"></div>
    <div className="cube-side bottom"></div>

    <div className="cube-inside"></div>
  </div>
</div> */}
{/* <div className="prof-beton">
          <div className="prof">Prof</div>
          <div className="beton">Beton</div>
        </div> */}

        </Navbar.Brand>
        {/* 3D Kub burada əlavə edilir */}
        

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ul">
            <Nav.Link className='li a' href="/">{t('home')}</Nav.Link>
            <Nav.Link className='li a' href="/about">{t('about')}</Nav.Link>

            {/* Xidmətlərimiz */}
            <NavDropdown title={t('services')} id="basic-nav-dropdown" className='centernavbar'>
              <NavDropdown.Item href="/Dashinma">{t('dashinma')}</NavDropdown.Item>
              <NavDropdown.Item href="/Nezaret">{t('nezaret')}</NavDropdown.Item>
              <NavDropdown.Item href="/Bpompalama">{t('Concrete_pumping')}</NavDropdown.Item>
            </NavDropdown>

            {/* Məhsullar */}
            <NavDropdown title={t('Products')} id="basic-nav-dropdown" className='centernavbar'>
              <NavDropdown.Item href="/Betonmehsul">{t('Concreteproducts')}</NavDropdown.Item>
              <NavDropdown.Item href="/TikintiMateriallari">{t('TikintiMateriallari')}</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='li a' href="/Galery">{t('GALLERY')}</Nav.Link>

            <Nav.Link className='li a' href="/contact">{t('contact')}</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={capitalize(localStorage.getItem('selectedLanguage') || 'az')} id="language-switcher"className='centernavbar'>
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
