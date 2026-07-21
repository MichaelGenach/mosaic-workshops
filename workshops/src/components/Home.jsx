import { React, lazy, Suspense, useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { Link, useNavigate } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import './Home.css';
import ShareButton from './ShareButton';
import MainButtons from './MainButtons'
import Faq from './Faq'
import Footer from './Footer';
import Reviews from './Reviews';
import Pricing from './Pricing';
import Contact from './Contact';
import video1 from './videos/video1.mov'
import thumbNail from './images/thumbNail.png';
import photo74 from './images/photo74.jpg'
import photo215 from './images/photo215.jpg'
import photo196 from './images/photo196.jpg'
import photo37 from './images/photo37.jpg'

// PhotoCarousel now owns all of its own image imports internally,
// and is only downloaded (with its images) when it's actually rendered.
const PhotoCarousel = lazy(() => import('./PhotoCarousel'));


export default function Home({ language, languageSettings }) {

  // On mobile, img1/img3/img4 are hidden — previously via CSS display:none,
  // which still downloaded them. Computing isMobile synchronously on first
  // render (not in an effect) means they're never added to the DOM at all
  // on mobile, so the browser never requests them.
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const translate = {
    he: {
      title: "Genach Workshops",
      subtitle: "חוויה בלתי נשכחת: סדנאות קדרות, סדנאות פסיפסים, סיורים מרתקים והפקת ימי גיבוש בנמל קיסריה",
      contact: "ליצירת קשר",
      order: "לתיאום סדנאות וסיורים",
      microcopy: "בלי התחייבות • מענה אישי ומהיר"
    },
    en: {
      title: "Genach Workshops",
      subtitle: "An unforgettable experience: Pottery workshops, mosaic workshops, fascinating tours and team-building events in Caesarea Harbor",
      contact: "Contact Us",
      order: "Coordinate Workshops & Tours",
      microcopy: "No obligation • Personal & fast response"
    }
  };


  const altTexts = {
    img1: {
      he: "קבוצה העוסקת בהכנת פסיפס של חברת סוני",
      en: "A group working on a mosaic for Sony company",

    },
    img4: {
      he: "תמונת סלפי של קבוצה על רקע הים לאחר סיור מרתק",
      en: "Group selfie with the sea in the background after an exciting tour",

    },
    img3: {
      he: "תמונה של זוג מכין יצירת קדרות בסדנא שלנו",
      en: "A couple creating pottery in our workshop",

    },
    img2: {
      he: "תמונה של לקוחות נהנים מסדנת פסיפס בוטיק בגלריה שלנו",
      en: "Customers enjoying a boutique mosaic workshop in our gallery",

    }
  };

  const t = translate[language];
  const settings = languageSettings[language];






  return (
    <div id='main'>

      <div className='container'>
        <video
          src={video1}
          poster={thumbNail}
          autoPlay
          loop
          muted
          playsInline
          id='video1'
        />
        <div id='overlay'></div>

        <div className='frontTitleDiv'>
          <div id='moveDownHome'>
            <FadeIn>
              <h1 id='title'>{t.title}</h1>
              <p id='title2'>{t.subtitle}</p>

              <MainButtons language={language} languageSettings={languageSettings} />

              <Reviews language={language} />
            </FadeIn>
          </div>
        </div>
      </div>

      <div id='sss' className='s'>
        {!isMobile && (
          <>
            <img
              id='img1'
              src={photo74}
              loading="lazy"
              alt={altTexts.img1[language]}
            />

            <img
              id='img4'
              src={photo215}
              loading="lazy"
              alt={altTexts.img4[language]}
            />

            <img
              id='img3'
              src={photo196}
              loading="lazy"
              alt={altTexts.img3[language]}
            />
          </>
        )}

        <img
          id='img2'
          src={photo37}
          loading="lazy"
          alt={altTexts.img2[language]}
        />
      </div>


      <Pricing language={language} />

      <Suspense fallback={<div id="carouselLoadingPlaceholder" />}>
        <PhotoCarousel />
      </Suspense>

      <Faq language={language} languageSettings={languageSettings} />
      <Contact language={language} languageSettings={languageSettings} />
      <Footer language={language} languageSettings={languageSettings} />
    </div>
  );
}