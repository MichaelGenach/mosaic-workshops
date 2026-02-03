import { React, useState, useRef, useEffect } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import './Private.css'
import PhotoCarousel from './PhotoCarousel';
import FaqPrivate from './FaqPrivate';
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
    subtitle: 'חוויית יצירה אומנותית ייחודית',
    description: `🎨 הצטרפו אלינו לסדנת פסיפס ייחודית בגלריית פסיפסים עתיקה מול הים, והפכו את יצירותיכם לאומנות אמיתית`,
    descriptionPoints: [
      'ליווי מקצועי של מומחי פסיפס ושימור עתיקות',
      'עמדת קפה עם כיבוד קל',
      'מוזיקה לבחירה ליצירת אווירה נוחה ומרגשת',
      'קחו הביתה את היצירה שלכם'
    ],
    galleryText: 'בגלריה שלנו אנו מייצרים ומוכרים פסיפסים שנוצרו בשיטה עתיקה ובסטנדרט גבוה, ומעבירים את הידע המקצועי שלנו בצורה חווייתית ומעשירה',
    cta: 'לתיאום סדנה פרטית',
    photoText: 'חוויה מגבשת ויצירתית',
    experienceTitle: 'למה לבחור בנו?',
    experiencePoints: [
      'מומחיות של מעל 30 שנים בתחום הפסיפס והשימור',
      'מיקום מדהים מול הים התיכון',
      'קבוצות קטנות לליווי אישי',
      'חומרים מקצועיים ואיכותיים'
    ],
    pricingTitle: 'מחירים ותיאום סדנאות',
    mosaicWorkshop: 'סדנאות פסיפס בוטיק',
    price: 'החל מ-250₪ לאדם',
    pricingNote: 'המחירים כוללים חומרים, הדרכה מקצועית ואווירה מיוחדת מול הים',
    orderNow: 'צרו קשר'
  },

  en: {
    title: 'Boutique Mosaic Workshops',
    subtitle: 'A Unique Artistic Creation Experience',
    description: `🎨 Join us for a unique mosaic workshop at our ancient mosaic gallery by the sea, and turn your creations into real art!`,
    descriptionPoints: [
      'Professional guidance from mosaic and restoration experts',
      'Coffee station with light refreshments',
      'Music of your choice',
      'Take your creation home with you'
    ],
    galleryText: 'In our gallery, we produce and sell mosaics that were created using traditional techniques at the highest standard, and share our professional knowledge in an experiential and enriching way.',
    cta: 'Book a private workshop',
    photoText: 'A Creative and Team-Building Experience',
    experienceTitle: 'Why Choose Us?',
    experiencePoints: [
      'Over 30 years of expertise in mosaics and restoration',
      'A stunning location by the Mediterranean Sea',
      'Small groups for personalized guidance',
      'Professional and high-quality materials'
    ],
    pricingTitle: 'Prices & Workshop Booking',
    mosaicWorkshop: 'Boutique Mosaic Workshops',
    price: 'From 250₪ per person',
    pricingNote: 'Prices include materials, professional instruction, and a unique seaside atmosphere',
    orderNow: 'Contact Us'
  }

}

const altTexts = {
  photo37: {
    he: "לקוחות נהנים מסדנת פסיפס בגלריה",
    en: "Customers enjoying a mosaic workshop in the gallery",
  },
  photo103: {
    he: "קבוצה יוצרת פסיפס בסדנה",
    en: "Group creating mosaic in workshop",
  }
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
    <div className="private-page" >

      {/* Hero Section */}
      <section className="private-hero" >
        <div className="private-hero-content">
          <h1 className="private-hero-title">{t.title}</h1>
          <p className="private-hero-subtitle">{t.subtitle}</p>
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="private-carousel-section" style={{ direction: 'ltr' }}>
        <PhotoCarousel arrPhotoCarousel={arrPhotoCarousel} />
      </section>




{/* Testimonials Section */}
<section className="mosaic-testimonials-section" style={settings}>
        <h2 className="mosaic-testimonials-title">{language === 'he' ? 'מה אומרים המשתתפים שלנו' : 'What Our Participants Say'}</h2>
        
        <div className="mosaic-testimonials-grid">
          {(language === 'he' ? [
            {
              name: 'יעל כהן',
              workshop: 'סדנת פסיפס זוגית',
              text: 'חוויה מדהימה! הכנו ביחד פסיפס יפה מאוד מול הים, האווירה היתה קסומה והליווי המקצועי של כנרת היה ברמה ממש גבוהה. ממליצה בחום!',
              rating: 5
            },
            {
              name: 'אבי שלום',
              workshop: 'סדנה משפחתית',
              text: 'ארגנו את הסדנה כל המשפחה וזו היתה החלטה מצוינת, הכל היה מקצועי מאוד והאווירה מול הים ממש הוסיפה לחוויה.',
              rating: 5
            },
            {
              name: 'מירב שפירא',
              workshop: 'סדנה קבוצתית',
              text: 'תמיד רציתי ללמוד פסיפס והסדנה הזו הייתה מושלמת! המדריכה כנרת היתה מקצועית מאוד, הסבירה בסבלנות, והיצירות שלנו יצאו מעל ומעבר לציפיות, תודה!',
              rating: 5
            }
          ] : [
            {
              name: 'Yael Cohen',
              workshop: 'Couples Mosaic Workshop',
              text: 'An amazing experience! We created a beautiful mosaic together by the sea. The atmosphere was magical, and Kinneret’s professional guidance was truly top-level. Highly recommended!',
              rating: 5
            },
            {
              name: 'Avi Shalom',
              workshop: 'Family Workshop',
              text: 'We organized the workshop for the whole family and it was an excellent decision. Everything was very professional, and the seaside atmosphere really added to the experience.',
              rating: 5
            },
            {
              name: 'Merav Shapira',
              workshop: 'Group Workshop',
              text: 'I had always wanted to learn mosaic, and this workshop was perfect! The instructor, Kinneret, was extremely professional, explained everything patiently, and our creations turned out beyond expectations. Thank you!',
              rating: 5
            }
            
          ]).map((testimonial, index) => (
            <div
              key={index}
              className="mosaic-testimonial-card"
            >
              <div className="mosaic-testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="mosaic-star">⭐</span>
                ))}
              </div>
              <p className="mosaic-testimonial-text">"{testimonial.text}"</p>
              <div className="mosaic-testimonial-author">
                <div className="mosaic-author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="mosaic-author-info">
                  <h4 className="mosaic-author-name">{testimonial.name}</h4>
                  <p className="mosaic-author-workshop">{testimonial.workshop}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Description Section */}
      <section className="private-description-section" style={settings}>
        <div className="private-description-container">
          <p className="private-description-intro">{t.description}</p>

          <div className="private-cta-wrapper">
            <a href="#contact" className="private-cta-button">
              {t.cta}
            </a>
          </div>

          <div className="private-features-grid">
            {t.descriptionPoints.map((point, index) => (
              <div key={index} className="private-feature-card">
                <div className="private-feature-icon">✓</div>
                <p className="private-feature-text">{point}</p>
              </div>
            ))}
          </div>

          <p className="private-gallery-text">{t.galleryText}</p>


        </div>
      </section>

      {/* Image Grid Section */}
      <section className="private-images-section">
        <div className="private-images-grid">
          <div className="private-image-wrapper">
            <img
              src={photo37}
              alt={altTexts.photo37[language]}
              className="private-image"
              loading="lazy"
            />
          </div>
        </div>

      </section>

      {/* Why Choose Us Section */}
      <section className="private-experience-section" style={settings}>
        <h2 className="private-experience-title">{t.experienceTitle}</h2>
        <div className="private-experience-grid">
          {t.experiencePoints.map((point, index) => (
            <div key={index} className="private-experience-card">
              <div className="private-experience-number">{index + 1}</div>
              <p className="private-experience-text">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="private-pricing-section">
        <h2 className="private-pricing-title">{t.pricingTitle}</h2>

        <a href="#contact" className="private-pricing-card-link">
          <div className="private-pricing-card">
            <div className="private-pricing-icon">🖼️</div>
            <h3 className="private-pricing-card-title">{t.mosaicWorkshop}</h3>
            <div className="private-pricing-price">
              <span className="private-pricing-amount">{t.price}</span>
            </div>
            <div className="private-pricing-cta">
              <div className="private-pricing-cta" style={settings}>

                <span>{t.orderNow}</span>
                <svg

                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  style={language === 'he' ? { transform: 'scaleX(-1)' } : {}}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </a>

        <p className="private-pricing-note">{t.pricingNote}</p>
      </section>

<FaqPrivate language={language} languageSettings={languageSettings} />

      {/* Contact & Footer */}
      <Contact language={language} instaLink={instaLink} languageSettings={languageSettings} />
      <Footer language={language} languageSettings={languageSettings} />
    </div>
  )
}