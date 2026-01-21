import { React, useState } from 'react'
import FadeIn from 'react-fade-in';
import { Link, useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import './Company.css'
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
import photo65 from './images/photo65.jpg'
import photo66 from './images/photo66.jpg'
import photo67 from './images/photo67.jpg'
import photo68 from './images/photo68.jpg'
import photo69 from './images/photo69.jpg'
import photo70 from './images/photo70.jpg'
import photo71 from './images/photo71.jpg'
import photo72 from './images/photo72.jpg'
import photo73 from './images/photo73.jpg'
import photo74 from './images/photo74.jpg'
import photo98 from './images/photo98.jpg'
import photo99 from './images/photo99.jpg'
import photo100 from './images/photo100.jpg'
import photo101 from './images/photo101.jpg'
import photo107 from './images/photo107.jpg'
import photo118 from './images/photo118.jpg'
import photo121 from './images/photo121.jpg'
import photo122 from './images/photo122.jpg'
import photo126 from './images/photo126.jpg'
import photo192 from './images/photo192.jpg'
import photo193 from './images/photo193.jpg'

// Import videos
import video10 from './videos/video10.mp4'
import video14 from './videos/video14.mp4'

// Import icons
import { HiUserGroup } from "react-icons/hi";
import { FaPaintBrush } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { GiCalendarHalfYear } from "react-icons/gi";
import { PiFlowerLotusBold } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoSparkles } from "react-icons/io5";

const translations = {
  he: {
    title: 'פעילויות גיבוש לחברות',
    icons: ['חוויה ייחודית', 'פעילות קבוצתית', 'יצירתיות', 'זיכרון לנצח'],
    cta: 'צרו קשר עכשיו',
    description: `🎨 הזמינו את הצוות שלכם לחוויה יוצאת דופן של יצירה משותפת!
    
בסדנאות הגיבוש המיוחדות שלנו, חבריכם לעבודה יחוו פעילות שמשלבת אומנות עתיקה, עבודת צוות ויצירתיות אישית. כל משתתף יקבל הדרכה אישית ממומחים בעלי שם עולמי בשימור מלאכות עתיקות.

✨ מה כולל יום הגיבוש:
• סדנת קדרות או פסיפס עם ציוד מקצועי
• הדרכה מקצועית ואישית
• חוויה בלתי נשכחת מול הים
• יצירות אישיות שכל עובד לוקח הביתה`,
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
    icons: ['Unique Experience', 'Group Activity', 'Creativity', 'Forever Memory'],
    cta: 'Contact Us Now',
    description: `🎨 Invite your team to an extraordinary shared creative experience!
    
In our special team-building workshops, your Colleagues will experience an activity that combines ancient art, teamwork, and personal creativity. Each participant receives personal guidance from world-renowned experts in ancient crafts preservation.

✨ What's included:
• Pottery or mosaic workshop with professional equipment
• Professional personal instruction
• Unforgettable seaside experience
• Personal creations each employee takes home`,
    gallery: 'Activity Gallery',
    section1Title: 'Why Choose Us?',
    section1Text: 'With years of experience leading team-building activities for top companies, we specialize in creating experiences that connect people through art and creation.',
    section2Title: 'Variety of Activities',
    section2Text: 'Pottery, mosaics, painting, and ceramics - each activity is customized to company needs and group size.',
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
    photo64, photo45, photo192, photo63, photo193, photo118, photo121, photo122, photo73,
    photo1, photo74, photo65, photo66, photo67, photo69, photo70, photo59, photo58,
    photo72, photo98, photo100, photo101, photo107, photo71, photo126,
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
              <FaHeart className='icon' />
              <p className='icon-text'>{t.icons[3]}</p>
            </div>
          </div>


        </section>

        {/* CTA Button */}
        <div className='cta-container'>
          <a href="#contact" className='cta-button'>
            {t.cta}
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

          <div className='content-item'>
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

      <Contact language={language} languageSettings={languageSettings} />
      <Footer language={language} languageSettings={languageSettings} />
    </div>
  )
}