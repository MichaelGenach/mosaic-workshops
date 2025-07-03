import { React, useState, useRef, useEffect } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import './Private.css'
import PhotoCarousel from './PhotoCarousel';
import Contact from './Contact';
import Footer from './Footer';
import BookingWidget from './BookingWidget';
import FadeIn from 'react-fade-in';
import { FaWaze, FaInstagram } from "react-icons/fa";
import photo37 from './images/photo37.jpg'
import photo38 from './images/photo38.jpg'
import photo39 from './images/photo39.jpg'

import photo3 from './images/photo3.jpg'
import photo4 from './images/photo4.jpg'
import photo5 from './images/photo5.jpg'
import photo6 from './images/photo6.jpg'
import photo7 from './images/photo7.jpg'
import photo8 from './images/photo8.jpg'
// import photo9 from './images/photo9.jpg'
// import photo10 from './images/photo10.jpg'
import photo11 from './images/photo11.jpg'
// import photo12 from './images/photo12.jpg'
import photo13 from './images/photo13.jpg'
// import photo14 from './images/photo14.jpg'
import photo15 from './images/photo15.jpg'
import photo16 from './images/photo16.jpg'
import photo17 from './images/photo17.jpg'
import photo18 from './images/photo18.jpg'
import photo19 from './images/photo19.jpg'
import photo20 from './images/photo20.jpg'
import photo21 from './images/photo21.jpg'
// import photo22 from './images/photo22.jpg'
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
import photo76 from './images/photo76.jpg'
import photo77 from './images/photo77.jpg'
import photo78 from './images/photo78.jpg'
import photo79 from './images/photo79.jpg'
import photo80 from './images/photo80.jpg'
import photo81 from './images/photo81.jpg'
import photo82 from './images/photo82.jpg'
import photo83 from './images/photo83.jpg'
import photo84 from './images/photo84.jpg'
import photo85 from './images/photo85.jpg'
import photo86 from './images/photo86.jpg'
import photo87 from './images/photo87.jpg'
import photo88 from './images/photo88.jpg'
import photo89 from './images/photo89.jpg'
import photo90 from './images/photo90.jpg'
import photo91 from './images/photo91.jpg'
import photo92 from './images/photo92.jpg'
import photo93 from './images/photo93.jpg'
import photo94 from './images/photo94.jpg'
import photo95 from './images/photo95.jpg'
import photo96 from './images/photo96.jpg'
import photo97 from './images/photo97.jpg'
import photo103 from './images/photo103.jpg'
import photo104 from './images/photo104.jpg'
import photo105 from './images/photo105.jpg'
import photo106 from './images/photo106.jpg'
import photo109 from './images/photo109.jpg'
import photo110 from './images/photo110.jpg'
import photo111 from './images/photo111.jpg'
import photo112 from './images/photo112.jpg'
import photo113 from './images/photo113.jpg'
import photo114 from './images/photo114.jpg'
import photo115 from './images/photo115.jpg'
import photo116 from './images/photo116.jpg'
import photo117 from './images/photo117.jpg'
import photo119 from './images/photo119.jpg'
import photo120 from './images/photo120.jpg'
import photo128 from './images/photo128.jpg'
import photo132 from './images/photo132.jpg'
import photo133 from './images/photo133.jpg'
import photo138 from './images/photo138.jpg'
import photo139 from './images/photo139.jpg'
import photo140 from './images/photo140.jpg'
import photo142 from './images/photo142.jpg'
import photo149 from './images/photo149.jpg'
import photo151 from './images/photo151.jpg'
import photo153 from './images/photo153.jpg'


const translations = {
  he: {
    title: 'סדנאות פסיפס בוטיק',
    description: `🎨 הצטרפו אלינו לסדנת פסיפס ייחודית בגלריית פסיפסים עתיקה מול הים, והפכו את יצירותיכם לאומנות אמיתית!
👩‍🎨 בסדנה תיהנו מליווי צמוד של מומחי פסיפס ושימור עם ניסיון עשיר בתחום, שיסייעו לכם ליצור פסיפס מרהיב שתוכלו לקחת הביתה בסיום הסדנה.

✨ הסדנה מספקת:
✅ ליווי מקצועי של מומחי פסיפס ושימור עתיקות
✅ עמדת קפה עם כיבוד קל
✅ מוזיקה לבחירה ליצירת אווירה נוחה ומרגשת
✅ זמן יצירה אישי עם תמיכה אישית של אנשי מקצוע

🏛️ בגלריה שלנו אנו מייצרים ומוכרים פסיפסים בשיטה עתיקה ובסטנדרט גבוה, ומעבירים את הידע המקצועי שלנו בצורה חווייתית ומעשירה.
🚀 הצטרפו אלינו לחוויה אומנותית ומלמדת!`,
    cta: 'לתיאום מיידי',
    photoText: 'חוויה מגבשת ויצירתית',
    pricingTitle: '🎟️ מחירים ותיאום סדנאות',
    mosaicWorkshop: '🖼️ סדנאות פסיפס',
    price: '👨‍👩‍👧‍👦 מחיר לסדנה: החל מ-250₪ לאדם',
    pricingNote: 'המחירים כוללים חומרים, הדרכה מקצועית ואווירה מיוחדת מול הים 🌊',
    orderNow: '📩 הזמן עכשיו'
  },
  en: {
    title: 'Boutique Mosaic Workshops',
    description: `🎨 Join us for a unique mosaic workshop at our ancient gallery by the sea and turn your creation into real art!
👩‍🎨 You’ll enjoy close guidance from mosaic and preservation experts, helping you create a stunning mosaic to take home.

✨ The workshop includes:
✅ Professional guidance from mosaic and ancient art experts
✅ Coffee station with light refreshments
✅ Music of your choice for the perfect atmosphere
✅ Personal creative time with expert support

🏛️ Our gallery produces and sells mosaics using ancient techniques at the highest standard, passing on our knowledge in an experiential, enriching way.
🚀 Join us for an artistic and educational experience!`,
    cta: 'Book Now',
    photoText: 'Creative & Team-Building Experience',
    pricingTitle: '🎟️ Prices & Workshop Booking',
    mosaicWorkshop: '🖼️ Mosaic Workshops',
    price: '👨‍👩‍👧‍👦 Price: From 250₪ per person',
    pricingNote: 'Prices include materials, professional guidance, and a unique seaside atmosphere 🌊',
    orderNow: '📩 Book Now'
  }
}

const altTexts = {
  photo37: {
    he: "לקוחות נהנים מסדנת פסיפס בגלריה",
    en: "Customers enjoying a mosaic workshop in the gallery",
  },
  photo38: {
    he: "לקוחות נהנים מסדנת פסיפס בגלריה",
    en: "Customers enjoying a mosaic workshop in the gallery",
  },
  // אפשר להוסיף כאן עוד alt לתמונות נוספות לפי הצורך
};


export default function Private({ language, languageSettings }) {

  const t = translations[language];
  const settings = languageSettings[language];
  const instaLink = "https://www.instagram.com/genach_mosaic_workshop/";

  const arrPhotoCarousel = [
    photo149, photo153, photo151, photo39, photo3, photo4, photo5, photo6, photo7,
    photo8, photo11, photo13, photo15, photo16, photo17, photo18, photo19, photo20,
    photo21, photo23, photo24, photo25, photo26, photo27, photo28, photo29, photo30,
    photo31, photo76, photo78, photo79, photo81, photo82, photo84, photo85, photo87,
    photo89, photo90, photo91, photo93, photo95, photo96, photo97, photo104, photo105,
    photo106, photo110, photo111, photo112, photo113, photo114, photo115, photo116,
    photo117, photo119, photo120, photo128, photo132, photo133, photo138, photo139,
    photo140, photo142
  ]

  return (
    <div id='mainDivPrivate'>
      <br /><br /><br />
      <FadeIn>
        <h1 id='titlePrivate'>{t.title}</h1>
        <PhotoCarousel arrPhotoCarousel={arrPhotoCarousel} />

        <p id='subTitlePrivate' style={{
          direction: settings.direction,
          textAlign: settings.textAlign
        }}>{t.description}</p>

        <div id='CTAPrivate'>
          <a href="#contact" className='CTA'>{t.cta}</a>
        </div>

        <img
          id='photo37'
          src={photo37}
          loading="lazy"
          alt={altTexts.photo37[language]}
        />

        <p id='textPhoto38'>{t.photoText}</p>
        <img
          id='photo38'
          src={photo103}
          loading="lazy"
          alt={altTexts.photo38[language]}
        />

      </FadeIn>

      <section className="pricing-section">
        <h2 className="pricing-title">{t.pricingTitle}</h2>
        <div className="pricing-grid">
          <a href="#contact" className='pricingLink'>
            <div className="price-card">
              <h3>{t.mosaicWorkshop}</h3>
              <ul>
                <li>{t.price}</li>
              </ul>
            </div>
          </a>
        </div>
        <p className="pricing-note">{t.pricingNote}</p>
        <a href="#contact" className="cta-button">{t.orderNow}</a>
      </section>

      <Contact language={language} instaLink={instaLink} languageSettings={languageSettings} />
      <Footer language={language} languageSettings={languageSettings} />
    </div>
  )
}

