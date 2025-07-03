import { React } from 'react'
import { motion } from "framer-motion"
import { Link, useNavigate } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import './Home.css';
import Faq from './Faq'
import Footer from './Footer';
import PhotoCarousel from './PhotoCarousel';
import Reviews from './Reviews';
import Pricing from './Pricing';
import Contact from './Contact';
import video1 from './videos/video1.mov'
import photo74 from './images/photo74.jpg'
import photo215 from './images/photo215.jpg'
import photo196 from './images/photo196.jpg'
import photo37 from './images/photo37.jpg'

// שאר התמונות לקרוסלה
import photo3 from './images/photo3.jpg'
import photo4 from './images/photo4.jpg'
import photo5 from './images/photo5.jpg'
import photo7 from './images/photo7.jpg'
import photo8 from './images/photo8.jpg'
import photo11 from './images/photo11.jpg'
import photo13 from './images/photo13.jpg'
import photo15 from './images/photo15.jpg'
import photo16 from './images/photo16.jpg'
import photo17 from './images/photo17.jpg'
import photo18 from './images/photo18.jpg'
import photo19 from './images/photo19.jpg'
import photo20 from './images/photo20.jpg'
import photo21 from './images/photo21.jpg'
import photo23 from './images/photo23.jpg'
import photo24 from './images/photo24.jpg'
import photo25 from './images/photo25.jpg'
import photo26 from './images/photo26.jpg'
import photo27 from './images/photo27.jpg'
import photo28 from './images/photo28.jpg'
import photo29 from './images/photo29.jpg'
import photo30 from './images/photo30.jpg'
import photo31 from './images/photo31.jpg'
import photo32 from './images/photo32.jpg'
import photo33 from './images/photo33.jpg'
import photo36 from './images/photo36.jpg'
import photo55 from './images/photo55.jpg'
import photo56 from './images/photo56.jpg'
import photo75 from './images/photo75.jpg'
import photo105 from './images/photo105.jpg'
import photo110 from './images/photo110.jpg'
import photo111 from './images/photo111.jpg'
import photo113 from './images/photo113.jpg'
import photo114 from './images/photo114.jpg'
import photo115 from './images/photo115.jpg'
import photo116 from './images/photo116.jpg'
import photo117 from './images/photo117.jpg'
import photo119 from './images/photo119.jpg'
import photo120 from './images/photo120.jpg'
import photo121 from './images/photo121.jpg'
import photo124 from './images/photo124.jpg'
import photo132 from './images/photo132.jpg'
import photo133 from './images/photo133.jpg'
import photo138 from './images/photo138.jpg'
import photo139 from './images/photo139.jpg'
import photo140 from './images/photo140.jpg'
import photo146 from './images/photo146.jpg'
import photo162 from './images/photo162.jpg'
import photo164 from './images/photo164.jpg'
import photo165 from './images/photo165.jpg'
import photo180 from './images/photo180.jpg'
import photo181 from './images/photo181.jpg'
import photo182 from './images/photo182.jpg'
import photo183 from './images/photo183.jpg'
import photo186 from './images/photo186.jpg'
import photo187 from './images/photo187.jpg'
import photo189 from './images/photo189.jpg'
import photo190 from './images/photo190.jpg'
import photo191 from './images/photo191.jpg'
import photo194 from './images/photo194.jpg'
import photo198 from './images/photo198.jpg'
import photo199 from './images/photo199.jpg'
import photo200 from './images/photo200.jpg'
import photo201 from './images/photo201.jpg'
import photo211 from './images/photo211.jpg'
import photo212 from './images/photo212.jpg'
import photo213 from './images/photo213.jpg'
import photo214 from './images/photo214.jpg'
import photo215b from './images/photo215.jpg' // בשם אחר כדי להימנע מכפל שמות
import photo216 from './images/photo216.jpg'
import photo217 from './images/photo217.jpg'
import photo218 from './images/photo218.jpg'
import photo219 from './images/photo219.jpg'
import photo220 from './images/photo220.jpg'
import photo221 from './images/photo221.jpg'
import photo222 from './images/photo222.jpg'
import photo223 from './images/photo223.jpg'
import photo224 from './images/photo224.jpg'
import photo225 from './images/photo225.jpg'
import photo226 from './images/photo226.jpg'
import photo227 from './images/photo227.jpg'
import photo228 from './images/photo228.jpg'
import photo229 from './images/photo229.jpg'
import photo230 from './images/photo230.jpg'
import photo231 from './images/photo231.jpg'
import photo232 from './images/photo232.jpg'
import photo233 from './images/photo233.jpg'
import photo234 from './images/photo234.jpg'
import photo235 from './images/photo235.jpg'
import photo236 from './images/photo236.jpg'
import photo237 from './images/photo237.jpg'
import photo238 from './images/photo238.jpg'
import photo239 from './images/photo239.jpg'
import photo240 from './images/photo240.jpg'
import photo241 from './images/photo241.jpg'
import photo242 from './images/photo242.jpg'
import photo243 from './images/photo243.jpg'
import photo244 from './images/photo244.jpg'
import photo245 from './images/photo245.jpg'
import photo246 from './images/photo246.jpg'
import photo247 from './images/photo247.jpg'
import photo248 from './images/photo248.jpg'
import photo249 from './images/photo249.jpg'
import photo250 from './images/photo250.jpg'
import photo251 from './images/photo251.jpg'
import photo252 from './images/photo252.jpg'
import photo253 from './images/photo253.jpg'
import photo254 from './images/photo254.jpg'


export default function Home({ language, languageSettings  }) {

  const arrPhotoCarousel = [
    photo3, photo4, photo5, photo7, photo8, photo11, photo13, photo15, photo16, photo17, photo18, photo19,
    photo20, photo21, photo23, photo24, photo25, photo26, photo27, photo28, photo29, photo30, photo31,
    photo32, photo33, photo36, photo55, photo56, photo75, photo105, photo110, photo111, photo113, photo114,
    photo115, photo116, photo117, photo119, photo120, photo121, photo124, photo132, photo133, photo138,
    photo139, photo140, photo146, photo162, photo164, photo165, photo180, photo181, photo182, photo183,
    photo186, photo187, photo189, photo190, photo191, photo194, photo198, photo199, photo200, photo201,
    photo211, photo212, photo213, photo214, photo215b, photo216, photo217, photo218, photo219, photo220,
    photo221, photo222, photo223, photo224, photo225, photo226, photo227, photo228, photo229, photo230,
    photo231, photo232, photo233, photo234, photo235, photo236, photo237, photo238, photo239, photo240,
    photo241, photo242, photo243, photo244, photo245, photo246, photo247, photo248, photo249, photo250,
    photo251, photo252, photo253, photo254
  ];

  const translate = {
    he: {
      title: "Genach Workshops",
      subtitle: "חוויה בלתי נשכחת:  סדנאות קדרות, סדנאות פסיפסים, סיורים מרתקים והפקת ימי גיבוש בנמל קיסריה",
      contact: "ליצירת קשר",
      order: "להזמנה מיידית"
    },
    en: {
      title: "Genach Workshops",
      subtitle: "An unforgettable experience: Pottery workshops, mosaic workshops, fascinating tours and team-building events in Caesarea Harbor",
      contact: "Contact Us",
      order: "Instant Booking"
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


  return (
    <div id='main'>

      <div className='container'>
        <video src={video1} autoPlay loop muted id='video1' />
        <div id='overlay'></div>

        <div className='frontTitleDiv'>
          <div id='moveDownHome'>
            <FadeIn>
              <h1 id='title'>{t.title}</h1>
              <p id='title2'>{t.subtitle}</p>

              <div id='lepirteiVeLasadnaDiv'>
                <a href="#contact">
                  <button id='leyezirat'>{t.contact}</button>
                </a>

                <a href="https://wa.me/9720523948920" target="_blank" rel="noopener noreferrer">
                  <button id='lehazmana'>
                    <i className="bi bi-whatsapp" id='W'></i> {t.order}
                  </button>
                </a>
              </div>

              <Reviews language={language}/>
            </FadeIn>
          </div>
        </div>
      </div>

      <div id='sss' className='s'>
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

        <img
          id='img2'
          src={photo37}
          loading="lazy"
          alt={altTexts.img2[language]}
        />
      </div>


      <Pricing language={language} />
      <PhotoCarousel arrPhotoCarousel={arrPhotoCarousel} />
      <Faq language={language} languageSettings={languageSettings}  />
      <Contact language={language} languageSettings={languageSettings} />
      <Footer language={language} languageSettings={languageSettings} />
    </div>
  );
}
