import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import logoTrans from './images/logoTrans.png'

export default function Menu({ language, setLanguage, languageSettings }) {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const subMenuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubMenu = () => setSubMenuOpen(!subMenuOpen);
  const scrollTo1 = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
    setSubMenuOpen(false);
  };

  const handleClickOutside = (e) => {
    if (
      menuRef.current && !menuRef.current.contains(e.target) &&
      subMenuRef.current && !subMenuRef.current.contains(e.target)
    ) {
      setIsOpen(false);
      setSubMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const translate = {
    he: {
      contact: 'יצירת קשר',
      kilns: 'תנורי קדרות',
      tours: 'סיורים מרתקים',
      mosaic: 'סדנאות פסיפס ▾',
      boutique: 'סדנאות פסיפס בוטיק',
      company: 'סדנאות פסיפס לחברות',
      pottery: 'סדנאות קדרות',
      home: 'בית',
      english: 'English'
    },
    en: {
      contact: 'Contact',
      kilns: 'Pottery Kilns',
      tours: 'Fascinating Tours',
      mosaic: 'Mosaic Workshops ▾',
      boutique: 'Boutique Mosaic Workshops',
      company: 'Corporate Mosaic Workshops',
      pottery: 'Pottery Workshops',
      home: 'Home',
      english: 'עברית'
    }
  };

  const t = translate[language];
  const settings = languageSettings[language];

  return (
    <div id="menu-container">
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`linksDiv ${isOpen ? 'open' : ''}`} ref={menuRef}>
        {/* כפתור החלפת שפה */}
        <div className="links" id="en" onClick={() => setLanguage(language === 'he' ? 'en' : 'he')} style={{ cursor: 'pointer' }}>
          {t.english}
        </div>


        <a href="#contact" className="links" onClick={scrollTo1}>{t.contact}</a>
        <Link className="links" onClick={scrollTo1} to='/janur'>{t.kilns}</Link>
        <Link className="links" onClick={scrollTo1} to='/tours'>{t.tours}</Link>

        <div className="dropdown">
          <div className="links dropdown-toggle" onClick={toggleSubMenu}>
            <div className="linksToggle">{t.mosaic}</div>
          </div>
          {subMenuOpen && (
           
           <div className="dropdown-menu" ref={subMenuRef} >
             
              <Link style={{
                direction: settings.direction,
                textAlign: settings.textAlign
              }} className="links" onClick={scrollTo1} to='/private'><span id='privateMenu'>{t.boutique}</span></Link>
             
              <Link style={{
                direction: settings.direction,
                textAlign: settings.textAlign
              }} className="links" onClick={scrollTo1} to='/company'><span id='companyMenu'>{t.company}</span></Link>
           
            </div>

          )}
        </div>

        <Link className="links" onClick={scrollTo1} to='/pottery'>{t.pottery}</Link>
        <Link className="links" onClick={scrollTo1} to='/'>{t.home}</Link>
      </div>
    </div>
  );
}
