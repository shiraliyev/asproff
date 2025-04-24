import React, { useState, useEffect } from 'react';
import './i18n'; // i18next konfiqurasiyasını idxal edin
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';


import Vacancies from './Companents/Vacancies/Vacancies';
import Navbar from './Companents/Nav/Navbar';
import Appeal from './Companents/Appeal/Appeal';
import Footer from './Companents/Footer/Footer';
import Home from './Companents/Home/Home';
import About from './Companents/About/About';
import Contact from './Companents/Contact/Contact';
import NotFoundPage from './Companents/NotFoundPage/NotFoundPage';
// import Aslift from './Companents/Xidmətlərimiz/Aslift';
// import ASPEK from './Companents/Xidmətlərimiz/ASPEK';
// import BCC from './Companents/Xidmətlərimiz/BCC';
// import Profbeton from './Companents/Xidmətlərimiz/Profbeton';
// import FireSafety from './Companents/Xidmətlərimiz/FireSafety';
import Comanda from './Companents/Comanda/Comanda';
import Nezaret from './Companents/Xidmetlerimiz/Nezaret';
import Dashinma from './Companents/Xidmetlerimiz/Dashinma';
import Bpompalama from './Companents/Xidmetlerimiz/Bpompalama';
import TikintiMateriallari from './Companents/Mehsullar/TikintiMateriallari';
import Betonmehsul from './Companents/Mehsullar/Betonmehsul';
import Galery from './Companents/Galery/Galery';




function App() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    return savedLanguage || 'az'; // Varsayılan dil
  });

  useEffect(() => {
    // Dil değiştiğinde i18n kütüphanesine bildir
    i18n.changeLanguage(selectedLanguage);
    // Dil değiştiğinde localStorage'a kaydet
    localStorage.setItem('selectedLanguage', selectedLanguage);
  }, [selectedLanguage, i18n]);


  
  return (
    <>
     <Navbar selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/vacancies' element={<Vacancies />} />
        <Route path='/comanda' element={<Comanda />} />
        <Route path='/appeal' element={<Appeal />} />
        {/* <Route path='/aslift' element={<Aslift />} /> */}
        {/* <Route path='/firesafety' element={<FireSafety />} /> */}
        {/* <Route path='/profbeton' element={<Profbeton />} /> */}
        {/* <Route path='/BCC' element={<BCC />} /> */}
        {/* <Route path='/ASPEK' element={<ASPEK />} /> */}
        {/* <Route path='/Xidmetler' element={<Xidmetler />} /> */}
        <Route path='/Nezaret' element={<Nezaret />} />
        <Route path='/Bpompalama' element={<Bpompalama />} />
        <Route path='/Dashinma' element={<Dashinma />} />
        <Route path='/TikintiMateriallari' element={<TikintiMateriallari />} />
        <Route path='/Betonmehsul' element={<Betonmehsul />} />
        <Route path='/Galery' element={<Galery />} />

       
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;