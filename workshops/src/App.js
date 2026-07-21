import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Private from './components/Private';
import Company from './components/Company';
import Tours from './components/Tours';
import BikeTours from './components/BikeTours';
import FootTours from './components/FootTours';
import Pottery from './components/Pottery';
import Janur from './components/Janur';
import HazharatNegishut from './components/HazharatNegishut';
import ShareButton from './components/ShareButton';
import Contact from './components/Contact';
import StickyWhatsappButton from './components/StickyWhatsappButton';
import Privacy from './components/Privacy';
import Terms from './components/Terms';




function App() {

  const [language, setLanguage] = useState('he'); // 'he' עברית, 'en' אנגלית

  const languageSettings = {
    he: {
      direction: 'rtl',
      textAlign: 'right'
    },
    en: {
      direction: 'ltr',
      textAlign: 'left'
    },
  }

  const fontsByLanguage = {
    he: "'Segoe UI', 'Helvetica Neue', sans-serif",
    en: "'Segoe UI', 'Helvetica Neue', sans-serif"
  };


  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-ND4DK7X2' });
    console.log('Google tag works!')
  }, []);


  return (
    <div className="App" style={{ fontFamily: fontsByLanguage[language] }}>

      <BrowserRouter>
        <Menu language={language} setLanguage={setLanguage} languageSettings={languageSettings} />
        {/* <ShareButton /> */}
        <StickyWhatsappButton />

        <Routes>
          <Route path='/' element={<Home language={language} languageSettings={languageSettings} />} />
          <Route path='/private' element={<Private language={language} languageSettings={languageSettings} />} />
          <Route path='/company' element={<Company language={language} languageSettings={languageSettings} />} />
          <Route path='/tours' element={<Tours language={language} languageSettings={languageSettings} />} />
          <Route path='/bike-tours' element={<BikeTours language={language} languageSettings={languageSettings} />} />
          <Route path='/foot-tours' element={<FootTours language={language} languageSettings={languageSettings} />} />
          <Route path='/pottery' element={<Pottery language={language} languageSettings={languageSettings} />} />
          <Route path='/janur' element={<Janur language={language} languageSettings={languageSettings} />} />
          <Route path='/hazharatNegishut' element={<HazharatNegishut language={language} languageSettings={languageSettings} />} />
          <Route path="/privacy" element={<Privacy language={language} languageSettings={languageSettings} />} />
          <Route path="/terms" element={<Terms language={language} languageSettings={languageSettings} />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;