import React from 'react';
import FadeIn from 'react-fade-in';
import { Link, useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import './Janur.css'
import Contact from './Contact';
import Footer from './Footer';

import photo168 from './images/photo168.jpg'
import photo171 from './images/photo171.jpg'
import video5 from './videos/video5.mp4'

// Icons migrated from react-icons to lucide-react (smaller bundle, better tree-shaking)
import { Home as HomeIcon, Flame, Banknote, Sparkles } from 'lucide-react';

const translations = {
  he: {
    title: "ג'נור - תנור הקדרות המהפכני",
    subtitle: "תנור הקדרות הקטן שמשנה את חוקי המשחק!",
    description: `הכירו את "ג'נור" – תנור קדרות קומפקטי ויעיל, שמאפשר לכם ליצור יצירות קרמיקה איכותיות בנוחות של הבית, בלי הצורך בתנור קדרות מסורתי גדול, מסורבל ויקר.`,
    features: [
      {
        icon: <HomeIcon />,
        title: "מתאים לשימוש ביתי",
        text: "לא תופס מקום, קל להפעלה ולשימוש"
      },
      {
        icon: <Flame />,
        title: "חסכוני ויעיל",
        text: "מחמם לטמפרטורה אידיאלית לשריפת קרמיקה"
      },
      {
        icon: <Banknote />,
        title: "מחיר משתלם",
        text: "הופך את עולם הקדרות לנגיש לכל אחד"
      },
      {
        icon: <Sparkles />,
        title: "תוצאה איכותית",
        text: "מבטיח יצירות קרמיקה ברמה מקצועית"
      }
    ],
    guidance: "לפני הרכישה יש להיעזר בהדרכה של אמיר – היבואן הרשמי של תנור \"ג'נור\".",
    closing: "צרו יצירות קרמיקה בקלות ובדיוק כמו שתמיד חלמתם!",
    cta: "צרו קשר לפרטים נוספים",
    galleryTitle: "ג'נור בפעולה",
    videoTitle: "פותחים את תנור הקדרות ג'נור ורואים כלי חרס אדום לוהט",
    altPhoto171: "תמונה של תנור הקדרות ג'נור כשהוא פתוח עם כלי לוהט בפנים",
    altPhoto168: "תמונה של תנור הקדרות ג'נור כשהוא סגור"
  },
  en: {
    title: "Janur - The Revolutionary Pottery Kiln",
    subtitle: "The small pottery kiln that changes the game!",
    description: `Meet "Janur" – a compact and efficient pottery kiln that lets you create high-quality ceramic works comfortably at home, without needing a large, bulky, and expensive traditional kiln.`,
    features: [
      {
        icon: <HomeIcon />,
        title: "Home Use",
        text: "Space-saving, easy to operate and use"
      },
      {
        icon: <Flame />,
        title: "Efficient",
        text: "Heats to ideal temperature for ceramic firing"
      },
      {
        icon: <Banknote />,
        title: "Affordable",
        text: "Making pottery accessible to everyone"
      },
      {
        icon: <Sparkles />,
        title: "Quality Results",
        text: "Professional-grade ceramic creations"
      }
    ],
    guidance: "Before purchasing, get guidance from Amir – the official importer of the 'Janur' kiln.",
    closing: "Create ceramic works easily and just like you've always dreamed!",
    cta: "Contact Us for Details",
    galleryTitle: "Janur in Action",
    videoTitle: "Opening the Janur pottery kiln showing a glowing red ceramic piece inside",
    altPhoto171: "Photo of Janur pottery kiln open with a glowing hot ceramic piece inside",
    altPhoto168: "Photo of Janur pottery kiln closed"
  }
}

export default function Janur({ language, languageSettings }) {
  const t = translations[language];
  const settings = languageSettings[language];

  return (
    <div id='mainDivJanur' style={{direction: settings.direction}}>
      <br /><br /><br />
      
      <FadeIn>
        {/* Hero Section */}
        <section className='janur-hero'>
          <div className='hero-content-janur'>
            <h1 className='hero-title-janur'>{t.title}</h1>
            <div className='hero-underline-janur'></div>
            <p className='hero-subtitle-janur'>{t.subtitle}</p>
          </div>
        </section>

        {/* Main Content Section */}
        <section className='janur-main-content'>
          <div className='content-wrapper'>
            <div 
              className='description-card'
              style={{
                direction: settings.direction,
                textAlign: settings.textAlign
              }}
            >
              <p className='main-description'>{t.description}</p>
            </div>

            <div className='video-container'>
              <video
                src={video5}
                autoPlay
                loop
                muted
                playsInline
                className='janur-video'
                title={t.videoTitle}
              />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className='features-section'>
          <div className='features-grid'>
            {t.features.map((feature, index) => (
              <div key={index} className='feature-card'>
                <div className='feature-icon'>{feature.icon}</div>
                <h3 className='feature-title'>{feature.title}</h3>
                <p className='feature-text'>{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Important Note */}
        <section className='guidance-section'>
          <div 
            className='guidance-card'
            style={{
              direction: settings.direction,
              textAlign: 'center'
            }}
          >
            <p className='guidance-text'>{t.guidance}</p>
            <p className='closing-text'>{t.closing}</p>
          </div>
        </section>

        {/* CTA Button */}
        <div className='cta-container'>
          <a href="#contact" className='cta-button'>
            {t.cta}
          </a>
        </div>

        {/* Gallery Section */}
        <section className='gallery-section-janur'>
          <h2 className='gallery-title-janur'>{t.galleryTitle}</h2>
          <div className='gallery-grid-janur'>
            <div className='gallery-item-janur'>
              <img
                src={photo171}
                alt={t.altPhoto171}
                className='gallery-image-janur'
                id='photo171'
                loading="lazy"
              />
   
            </div>
            <div className='gallery-item-janur'>
              <img
                src={photo168}
                alt={t.altPhoto168}
                className='gallery-image-janur'
                loading="lazy"
              />
     
            </div>
          </div>
        </section>

      </FadeIn>

      <Contact language={language} languageSettings={languageSettings} />
      <Footer language={language} languageSettings={languageSettings} />
    </div>
  )
}