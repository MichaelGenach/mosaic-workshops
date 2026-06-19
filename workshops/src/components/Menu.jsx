import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import logoTrans from './images/logoTrans.png'
import { IoMdShare } from "react-icons/io";

export default function Menu({ language, setLanguage, languageSettings }) {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [toursSubMenuOpen, setToursSubMenuOpen] = useState(false);
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const menuRef = useRef(null);
  const subMenuRef = useRef(null);
  const toursSubMenuRef = useRef(null);
  const shareMenuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
    setToursSubMenuOpen(false);
  };

  const toggleToursSubMenu = () => {
    setToursSubMenuOpen(!toursSubMenuOpen);
    setSubMenuOpen(false);
  };

  const toggleShareMenu = () => setShareMenuOpen(!shareMenuOpen);

  const scrollTo1 = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
    setSubMenuOpen(false);
    setToursSubMenuOpen(false);
    setShareMenuOpen(false);
  };

  const handleShareClick = async () => {
    const isMobileDevice = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobileDevice && navigator.share) {
      const url = window.location.href;
      const translations = {
        he: "סדנאות וסיורים מומלצים בקיסריה – לפרטים והמלצות:",
        en: "Recommended workshops and tours in Caesarea – details and recommendations:"
      };
      const text = translations[language];
      const title = 'סדנאות וסיורים בקיסריה';

      try {
        await navigator.share({ title, text, url });
        setIsOpen(false);
      } catch (err) {
        console.log('Share cancelled or failed:', err);
      }
    } else {
      toggleShareMenu();
    }
  };

  const handleShare = async (platform) => {
    const url = window.location.href;
    const translations = {
      he: "סדנאות וסיורים מומלצים בקיסריה – לפרטים והמלצות:",
      en: "Recommended workshops and tours in Caesarea – details and recommendations:"
    };
    const text = translations[language];

    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'telegram':
        window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`);
        break;
      case 'instagram':
        await navigator.clipboard.writeText(text + ' ' + url);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
        window.open('https://www.instagram.com/');
        break;
      case 'email':
        window.location.href = `mailto:?body=${encodeURIComponent(text + '\n\n' + url)}`;
        break;
      case 'sms':
        window.location.href = `sms:?body=${encodeURIComponent(text + ' ' + url)}`;
        break;
      case 'copy':
        await navigator.clipboard.writeText(url);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
        break;
      default:
        break;
    }

    setShareMenuOpen(false);
    setIsOpen(false);
  };

  const handleClickOutside = (e) => {
    if (subMenuRef.current && !subMenuRef.current.contains(e.target) &&
        !e.target.closest('.dropdown-toggle')) {
      setSubMenuOpen(false);
    }
    if (toursSubMenuRef.current && !toursSubMenuRef.current.contains(e.target) &&
        !e.target.closest('.dropdown-toggle')) {
      setToursSubMenuOpen(false);
    }
    if (menuRef.current && !menuRef.current.contains(e.target) &&
        shareMenuRef.current && !shareMenuRef.current.contains(e.target)) {
      setIsOpen(false);
      setSubMenuOpen(false);
      setToursSubMenuOpen(false);
      setShareMenuOpen(false);
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
      tours: 'סיורים ▾',
      allTours: 'כל הסיורים',
      bikeTours: 'סיורי אופניים 🚴',
      footTours: 'סיורים רגליים 🚶',
      mosaic: 'סדנאות פסיפס ▾',
      boutique: 'סדנאות פסיפס בוטיק 🎨',
      company: 'סדנאות פסיפס לחברות 👥',
      pottery: 'סדנאות קדרות',
      home: 'בית',
      english: 'English',
      share: <IoMdShare style={{ fontSize: '27px', position: 'relative', top: '5px' }} />,
      whatsapp: 'WhatsApp',
      facebook: 'Facebook',
      twitter: 'Twitter',
      linkedin: 'LinkedIn',
      telegram: 'Telegram',
      instagram: 'Instagram',
      email: 'אימייל',
      sms: 'SMS',
      copy: 'העתק קישור',
      copied: '!הקישור הועתק',
    },
    en: {
      contact: 'Contact',
      kilns: 'Pottery Kilns',
      tours: 'Tours ▾',
      allTours: 'All Tours',
      bikeTours: 'Bike Tours 🚴',
      footTours: 'Walking Tours 🚶',
      mosaic: 'Mosaic Workshops ▾',
      boutique: 'Boutique Mosaic Workshops 🎨',
      company: 'Corporate Mosaic Workshops 👥',
      pottery: 'Pottery Workshops',
      home: 'Home',
      english: 'עברית',
      share: <IoMdShare style={{ fontSize: '27px', position: 'relative', top: '5px' }} />,
      whatsapp: 'WhatsApp',
      facebook: 'Facebook',
      twitter: 'Twitter',
      linkedin: 'LinkedIn',
      telegram: 'Telegram',
      instagram: 'Instagram',
      email: 'Email',
      sms: 'SMS',
      copy: 'Copy Link',
      copied: 'Link Copied!',
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
        <div className="links" id="en" onClick={() => setLanguage(language === 'he' ? 'en' : 'he')} style={{ cursor: 'pointer' }}>
          {t.english}
        </div>

        <div className="links" onClick={handleShareClick} style={{ cursor: 'pointer' }}>
          {t.share}
        </div>

        <a href="#contact" className="links" onClick={scrollTo1}>{t.contact}</a>
        <Link className="links" onClick={scrollTo1} to='/janur'>{t.kilns}</Link>

        <div className="dropdown">
          <div className="links dropdown-toggle" onClick={toggleToursSubMenu}>
            <div className="linksToggle">{t.tours}</div>
          </div>
          {toursSubMenuOpen && (
            <div className="dropdown-menu" ref={toursSubMenuRef}>
              <Link style={{ direction: settings.direction, textAlign: settings.textAlign }}
                className="links" onClick={scrollTo1} to='/tours'>
                <span id='allToursMenu'>{t.allTours}</span>
              </Link>
              <Link style={{ direction: settings.direction, textAlign: settings.textAlign }}
                className="links" onClick={scrollTo1} to='/bike-tours'>
                <span id='bikeToursMenu'>{t.bikeTours}</span>
              </Link>
              <Link style={{ direction: settings.direction, textAlign: settings.textAlign }}
                className="links" onClick={scrollTo1} to='/foot-tours'>
                <span id='footToursMenu'>{t.footTours}</span>
              </Link>
            </div>
          )}
        </div>

        <div className="dropdown">
          <div className="links dropdown-toggle" onClick={toggleSubMenu}>
            <div className="linksToggle">{t.mosaic}</div>
          </div>
          {subMenuOpen && (
            <div className="dropdown-menu" ref={subMenuRef}>
              <Link style={{ direction: settings.direction, textAlign: settings.textAlign }}
                className="links" onClick={scrollTo1} to='/private'>
                <span id='privateMenu'>{t.boutique}</span>
              </Link>
              <Link style={{ direction: settings.direction, textAlign: settings.textAlign }}
                className="links" onClick={scrollTo1} to='/company'>
                <span id='companyMenu'>{t.company}</span>
              </Link>
            </div>
          )}
        </div>

        <Link className="links" onClick={scrollTo1} to='/pottery'>{t.pottery}</Link>
        <Link className="links" onClick={scrollTo1} to='/'>{t.home}</Link>
      </div>

      {shareMenuOpen && (
        <>
          <div className="share-menu-desktop" ref={shareMenuRef}>
            {['whatsapp', 'facebook', 'instagram', 'twitter', 'linkedin', 'telegram', 'email', 'sms', 'copy']
              .map(p => (
                <button
                  key={p}
                  className={`share-option share-${p}`}
                  onClick={() => handleShare(p)}
                >
                  <span>{p === 'copy' ? (showCopied ? t.copied : t.copy) : t[p]}</span>
                </button>
              ))}
          </div>
          <div className="share-backdrop" onClick={() => setShareMenuOpen(false)} />
        </>
      )}
    </div>
  );
}