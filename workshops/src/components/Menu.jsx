import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
// import logo from './images/logo.jpg'
import logoTrans from './images/logoTrans.png'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const menuRef = useRef(null);  // הפנייה לתפריט
  const subMenuRef = useRef(null); // הפנייה לתת-תפריט

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const scrollTo1 = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
    setSubMenuOpen(false);
  };

  const scrollTo2 = () => {
    window.scrollTo({ top: 50000, behavior: 'smooth' });
    setIsOpen(false);
    setSubMenuOpen(false);
  };

  // פונקציה לסגירת התפריט בעת לחיצה מחוץ לתפריט
  const handleClickOutside = (e) => {
    if (
      menuRef.current && !menuRef.current.contains(e.target) &&
      subMenuRef.current && !subMenuRef.current.contains(e.target)
    ) {
      setIsOpen(false);
      setSubMenuOpen(false);
    }
  };

  // מאזין לאירוע לחיצה מחוץ לתפריט
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  // const menuPress = () => {
  //   setSubMenuOpen(false)
  // }

  return (
    <div id="menu-container" >

      <div
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

     

      <div
        className={`linksDiv ${isOpen ? 'open' : ''}`}
        ref={menuRef}
      >
 {/* <img id='logoTrans' src={logoTrans} alt="" />  */}
       
        {/* <img id='logo' src={logo} alt="" /> */}
        <a href="#contact" className="links" onClick={scrollTo1}>יצירת קשר</a>
        <Link className="links" onClick={scrollTo1} to='/janur'>רכישת תנור קדרות</Link>
        <Link className="links" onClick={scrollTo1} to='/tours'>סיורים מרתקים</Link>



        {/* סעיף עם תפריט נפתח */}
        <div className="dropdown">
          <div
            className="links dropdown-toggle"
            onClick={toggleSubMenu}  // הוספת לחיצה על הדיב עצמו למזער את תת התפריט
          >
            סדנאות פסיפס ▾
          </div>
          {subMenuOpen && (
            <div
              className="dropdown-menu"
              ref={subMenuRef}
            >
              <Link className="links" onClick={scrollTo1} to='/private'><span id='privateMenu'> סדנאות פסיפס בוטיק </span></Link>
              <Link className="links" onClick={scrollTo1} to='/company'><span id='companyMenu'>סדנאות פסיפס לחברות </span></Link>
            </div>
          )}
        </div>


        <Link className="links" onClick={scrollTo1} to='/pottery'>סדנאות קדרות</Link>

        <Link className="links" onClick={scrollTo1} to='/'>בית</Link>
   
      </div>

    </div>
  );
}