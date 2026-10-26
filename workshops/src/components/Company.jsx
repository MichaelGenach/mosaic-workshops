import { React, useState } from 'react'
import FadeIn from 'react-fade-in';
import { Link, useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import './Company.css'
import FaqCompany from './FaqCompany';
import Contact from './Contact';
import Footer from './Footer';
import PhotoCarousel from './PhotoCarousel';

// Import images
import photo1 from './images/photo1.jpg'
import photo44 from './images/photo44.jpg'
import photo45 from './images/photo45.jpg'
import photo46 from './images/photo46.jpg'
import photo50 from './images/photo50.jpg'
import photo58 from './images/photo58.jpg'
import photo59 from './images/photo59.jpg'
import photo63 from './images/photo63.jpg'
import photo64 from './images/photo64.jpg'
import photo66 from './images/photo66.jpg'
import photo68 from './images/photo68.jpg'
import photo69 from './images/photo69.jpg'
import photo72 from './images/photo72.jpg'
import photo98 from './images/photo98.jpg'
import photo100 from './images/photo100.jpg'
import photo101 from './images/photo101.jpg'
import photo107 from './images/photo107.jpg'
import photo121 from './images/photo121.jpg'
import photo122 from './images/photo122.jpg'
import photo126 from './images/photo126.jpg'
import photo192 from './images/photo192.jpg'
import photo193 from './images/photo193.jpg'
import photo261 from './images/photo261.jpeg'
import photo262 from './images/photo262.jpeg'
import photo263 from './images/photo263.jpeg'
import photo264 from './images/photo264.jpeg'
import photo265 from './images/photo265.jpeg'
import photo266 from './images/photo266.jpeg'

// Import videos
import video10 from './videos/video10.mp4'
import video14 from './videos/video14.mp4'

// Import icons
import { HiUserGroup } from "react-icons/hi";
import { FaPaintBrush, FaWhatsapp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { GiCalendarHalfYear } from "react-icons/gi";
import { PiFlowerLotusBold } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoSparkles } from "react-icons/io5";

// WhatsApp: one number, one helper. Every WhatsApp button on this page builds
// its link with waLink(<message matching the button's context>).
const whatsappNumber = '9720523948920';
const waLink = (text) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

const translations = {
  he: {
    title: 'פעילויות גיבוש לחברות',
    icons: [
      'חוויה ייחודית',
      'פעילות קבוצתית',
      'יצירתיות',
      'זיכרון לנצח',
      'מגיעים גם אליכם'
    ],
    cta: 'צרו קשר עכשיו',
    ctaWa: 'תאמו  בוואצאפ',
    waMessage: 'שלום, אשמח לפרטים על פעילות גיבוש לחברה (סדנת פסיפס/קדרות) ובקבלת הצעת מחיר',
    description: `🎨 יוצרים יחד – פסיפס אחד, צוות אחד!

    צרו יצירת אומנות משותפת! כל משתתף יוצר חלק אישי מפסיפס גדול, ובסיום כולם מתחברים יחד ליצירה מרהיבה אחת – עבודת צוות במיטבה.
    
    ✨ מה מחכה לכם?
    - סדנת פסיפס חווייתית ומודרכת
    - יצירה אישית שהופכת להצלחה משותפת
    - חוויה מגבשת, יצירתית ובלתי נשכחת מול הים בנמל קיסריה`,
    gallery: 'גלריית פעילויות',
    section1Title: 'למה לבחור בנו?',
    section1Text: 'עם ניסיון של שנים בהובלת פעילויות גיבוש לחברות מובילות, אנו מתמחים ביצירת חוויות שמחברות בין אנשים דרך אומנות ויצירה.',
    section2Title: 'מגוון פעילויות',
    section2Text: 'קדרות, פסיפס, ציור וחרס - כל פעילות מותאמת אישית לצרכי החברה ולגודל הקבוצה.',
    section3Title: 'לכל הגילאים והרמות',
    section3Text: 'הפעילויות מתאימות לכולם - ממתחילים מוחלטים ועד למנוסים, כולם ייהנו וייצרו משהו מיוחד.',
    infoTitle: '💼 מידע נוסף',
    infoText: 'הפעילויות שלנו מתאימות לקבוצות בכל גודל - מצוותים קטנים ועד לאירועי חברה גדולים. כל פעילות כוללת את כל הציוד, ההדרכה המקצועית והחומרים הנדרשים. אנחנו דואגים לכל פרט כדי שהחוויה תהיה מושלמת.',
    priceNote: '🎟️ מחירים מותאמים אישית לפי גודל הקבוצה והפעילות הנבחרת'
  },
  en: {
    title: 'Team Building Activities',
    icons: [
      'Unique Experience',
      'Group Activity',
      'Creativity',
      'Forever Memory',
      'We Also Come to You'
    ],
    cta: 'Contact Us Now',
    ctaWa: 'Plan your team event on WhatsApp',
    waMessage: "Hi, I'm interested in a team-building activity for my company (mosaic/pottery workshop) and would like a quote",
    description: `🎨 Create Together – One Mosaic, One Team!

    Create a shared work of art! Each participant designs an individual piece of a large mosaic, and at the end, everyone brings their pieces together to create one stunning masterpiece – teamwork at its best.
    
    ✨ What to Expect:
    - An engaging, guided mosaic workshop
    - Individual creativity transformed into a shared achievement
    - An unforgettable team-building experience by the sea at Caesarea Harbor`,
    gallery: 'Activity Gallery',
    section1Title: 'Why Choose Us?',
    section1Text: 'With years of experience leading team-building activities for top companies, we specialize in creating experiences that connect people through art and creation.',
    section2Title: 'Variety of Activities',
    section2Text: 'Pottery, mosaics, painting, and ceramics - each activity is customized to company needs and group size',
    section3Title: 'For All Ages & Levels',
    section3Text: 'Activities suitable for everyone - from complete beginners to experienced, everyone will enjoy and create something special.',
    infoTitle: '💼 Additional Information',
    infoText: 'Our activities are suitable for groups of any size - from small teams to large company events. Each activity includes all equipment, professional instruction, and required materials. We take care of every detail to ensure the experience is perfect.',
    priceNote: '🎟️ Custom pricing based on group size and chosen activity'
  }
}

export default function Company({ language, languageSettings }) {
  const t = translations[language];
  const settings = languageSettings[language];

  const arrPhotoCarousel = [
    photo1, photo45, photo58, photo59, photo63, photo64, photo66,
    photo69, photo72, photo98, photo100, photo101,
    photo107, photo121, photo122, photo126, photo192, photo193,
    photo261, photo262, photo263, photo264, photo265, photo266,
  ]

  return (
    <div id='mainDivCompany'>

      <FadeIn>
        {/* Hero Section */}
        <section className='hero-section-company'>
          <div className='hero-content-company'>
            <h1 className='hero-title-company'>{t.title}</h1>
            <div className='hero-underline-company'></div>
          </div>
        </section>

        <div className='videos-container'>
          <video className="company-video" src={video14} autoPlay loop muted playsInline />
          <video className="company-video" src={video10} autoPlay loop muted playsInline />
        </div>

        {/* Icons & Videos Section */}
        <section className='media-section'>
        <div className='icons-grid'>
  <div className='icon-card'>
    <IoSparkles className='icon' />
    <p className='icon-text'>{t.icons[0]}</p>
  </div>

  <div className='icon-card'>
    <HiUserGroup className='icon' />
    <p className='icon-text'>{t.icons[1]}</p>
  </div>

  <div className='icon-card'>
    <FaPaintBrush className='icon' />
    <p className='icon-text'>{t.icons[2]}</p>
  </div>


  <div className='icon-card'>
    <FaHome className='icon' />
    <p className='icon-text'>{t.icons[4]}</p>
  </div>
</div>

        </section>

        {/* Testimonials Section */}
        <section className="company-testimonials-section" style={settings}>
          <h2 className="company-testimonials-title">
            {language === 'he' ? 'מה אומרות החברות שעבדו איתנו' : 'What Companies Say About Us'}
          </h2>

<div className="company-testimonials-grid">
  {(language === 'he' ? [
    {
      name: 'דנה רוזנברג',
      position: 'מנהלת משאבי אנוש',
      text: 'הגענו עם 45 עובדים ליום הגיבוש השנתי שלנו והיה ממש מוצלח. הפעילות הייתה נעימה, כולם היו מעורבים וכל אחד יצא עם פסיפס שהכין בעצמו. גם האווירה הייתה מעולה, והרגשנו שזה משהו קצת שונה מיום גיבוש רגיל.',
      rating: 5
    },
    {
      name: 'יוסי מזרחי',
      position: 'משאבי אנוש',
      company: 'Tech Startup',
      text: 'חיפשנו פעילות קצת אחרת לצוות, והפסיפס התאים לנו מאוד. היה שילוב טוב בין עבודה משותפת לבין זמן שכל אחד יכול לעבוד בקצב שלו. כולם השתתפו ונהנו, והיה נחמד לראות את התוצרים בסוף.',
      rating: 5
    },
    {
      name: 'מיכל אבני',
      position: 'סמנכ"לית תפעול',
      text: 'עשינו כבר לא מעט פעילויות גיבוש, והפעם רצינו משהו רגוע ויצירתי יותר. היה כיף לראות איך כולם נכנסו לזה, גם מי שבהתחלה היה קצת סקפטי. יצאנו עם חוויה טובה ועם פסיפסים שכל אחד לקח איתו.',
      rating: 5
    }
  ] : [
    {
      name: 'Dana Rosenberg',
      position: 'HR Manager',
      text: 'We came with 45 employees for our annual team-building day and it worked really well. The activity was relaxed and engaging, and everyone made their own mosaic to take home. The atmosphere was great too, and it felt like a nice change from the usual team-building activities.',
      rating: 5
    },
    {
      name: 'Yossi Mizrahi',
      position: 'HR',
      company: 'Tech Startup',
      text: 'We were looking for something a little different for our team, and the mosaic workshop was a great fit. There was a nice balance between working together and having time to work at your own pace. Everyone took part and enjoyed it, and it was great seeing all the different creations at the end.',
      rating: 5
    },
    {
      name: 'Michal Avni',
      position: 'VP Operations',
      text: 'We’ve done quite a few team-building activities over the years, and this workshop was one of the more successful ones. It was great to see everyone getting into it, and there was something really enjoyable about sitting together, creating, and taking a break from the usual routine. We had a great time and everyone left with a mosaic they had made themselves.',
      rating: 5
    }
            ]).map((testimonial, index) => (
              <div
                key={index}
                className="company-testimonial-card"
              >
                <div className="company-testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="company-star">⭐</span>
                  ))}
                </div>
                <p className="company-testimonial-text">"{testimonial.text}"</p>
                <div className="company-testimonial-author">
                  <div className="company-author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="company-author-info">
                    <h4 className="company-author-name">{testimonial.name}</h4>
                    <p className="company-author-position">{testimonial.position}</p>
                    <p className="company-author-company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Button — opens WhatsApp with a message matching this page */}
        <div className='cta-container'>
          <a
            href={waLink(t.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className='cta-button cta-button--wa'
          >
            <FaWhatsapp className='cta-wa-icon' aria-hidden="true" />
            <span className='cta-wa-text'>{t.ctaWa}</span>
          </a>
        </div>

        {/* Description Section */}
        <section className='description-section'>
          <div
            className='description-card'
            style={{
              direction: settings.direction,
              textAlign: settings.textAlign
            }}
          >
            <p>{t.description}</p>
          </div>
        </section>

        {/* Photo Carousel */}
        <section className='carousel-section'>
          <h2 className='section-title'>{t.gallery}</h2>
          <PhotoCarousel arrPhotoCarousel={arrPhotoCarousel} />
        </section>

        {/* Content Sections with Images */}
        <section className='content-grid' style={{ direction: settings.direction }}>
          <div className='content-item'>
            <div className='content-text'>
              <h3>{t.section1Title}</h3>
              <p>{t.section1Text}</p>
            </div>
            <img src={photo58} alt="Team building activity" className='content-image' />
          </div>

          <div className='content-item reverse'>

            <div className='content-text'>
              <h3>{t.section2Title}</h3>
              <p>{t.section2Text}</p>
            </div>
            <img src={photo45} alt="Creative workshop" className='content-image' />
          </div>

          <div className='content-item' style={{ direction: settings.direction }}>
            <div className='content-text'>
              <h3>{t.section3Title}</h3>
              <p>{t.section3Text}</p>
            </div>
            <img src={photo50} alt="Group activity" className='content-image' />
          </div>
        </section>

        {/* Additional Info Section */}
        <section className='info-section'>
          <div className='info-container'>
            <h2>{t.infoTitle}</h2>
            <p
              style={{
                direction: settings.direction,
              }}
            >
              {t.infoText}
            </p>
            <a href="#contact" className='price-note'>{t.priceNote}</a>
          </div>
        </section>

        {/* Final Image */}
        <section className='final-image-section'>
          <img src={photo46} alt="Company event" className='final-image' />
        </section>

      </FadeIn>

      <FaqCompany language={language} languageSettings={languageSettings} />

      <Contact language={language} languageSettings={languageSettings} />
      <Footer language={language} languageSettings={languageSettings} />
    </div>
  )
}