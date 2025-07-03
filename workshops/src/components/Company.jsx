import { React, useEffect, useRef, useState } from 'react'
import { Link, useNavigate, } from 'react-router-dom';
import './Company.css'
import { FaRegClock } from "react-icons/fa";
import BookingWidget from './BookingWidget';
import Contact from './Contact';
import Footer from './Footer';
import PhotoCarousel from './PhotoCarousel';
import FadeIn from 'react-fade-in';
import photo1 from './images/photo1.jpg'
import photo44 from './images/photo44.jpg'
import photo45 from './images/photo45.jpg'
import photo46 from './images/photo46.jpg'
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
import video10 from './videos/video10.mp4'
import video14 from './videos/video14.mp4'
import { HiUserGroup } from "react-icons/hi";
import { FaPaintBrush } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { GiCalendarHalfYear } from "react-icons/gi";
import { motion } from "framer-motion"

const translations = {
  he: {
    title: 'סדנאות פסיפסי לוגו עבור חברות',
    icons: ['חלוקה לקבוצות', 'יצירה מקצועית', 'גיבוש והנאה', 'תוצאה משותפת'],
    cta: 'לתיאום מיידי',
    description: `🎨 הצטרפו לסדנת פסיפס ייחודית שבה תיצרו יצירת אומנות מרהיבה למשרד שלכם!  
👥 בסדנה נחלק את הצוותים לקבוצות, כאשר כל קבוצה תעבוד על חלקים שונים של פסיפס גדול.  
🧩 לאחר מכן, נארגן את כל החלקים יחד ליצירה אחת שלמה ומרשימה של לוגו החברה שלכם!  

✨ הסדנה מספקת:  
✅ חוויית יצירה משותפת ומאתגרת  
✅ ליווי מקצועי של מומחים בשימור עתיקות ופסיפסים  
✅ עיבוד מקצועי לפסיפס שיהיה יציב, יפה ומרהיב  

🚀 הצטרפו אלינו ליצירת פסיפס מיוחד שיבטא את ערכי החברה שלכם ויהפוך למרכיב אומנותי וייחודי במשרד!`,
    textPhotoC: 'עובדים בשיתוף פעולה',
    photo58Alt: "עובדי המרכז הרפואי הלל יפה מציגים את יצירתם המרשימה שהכינו בסדנה שלנו",
    photo46Caption: "פסיפס אשר נעשה על ידי עובדי חברת סוני במסגרת הסדנא שלנו",
    photo46Alt: "פסיפס שנעשה על ידי עובדי חברת סוני במסגרת הסדנא שלנו",
    pricingTitle: '🎟️ מחירים ותיאום סדנאות',
    workshopTitle: '🏢 סדנאות לוגו פסיפס לחברות',
    price: '🧑‍💼 סדנה לחברות: תמחור מותאם אישית',
    pricingNote: 'המחירים כוללים חומרים, הדרכה מקצועית ואווירה מיוחדת מול הים 🌊',
    orderNow: '📩 הזמינו עכשיו',
  },
  en: {
    title: 'Mosaic Logo Workshops for Companies',
    icons: ['Group division', 'Pro creation', 'Team bonding', 'Joint result'],
    cta: 'Book Now',
    description: `🎨 Join a unique mosaic workshop where you will create a stunning artwork for your office!  
👥 Teams will be divided into groups, each working on different parts of a large mosaic.  
🧩 Afterwards, all parts will be assembled into one impressive complete mosaic logo for your company!  

✨ The workshop provides:  
✅ A shared and challenging creative experience  
✅ Professional guidance by experts in mosaic and antiquities consevation  
✅ Professional processing of the mosaic to ensure it is stable, beautiful, and impressive  

🚀 Join us to create a special mosaic expressing your company values and becoming a unique artistic feature in your office!`,
    textPhotoC: 'Working in collaboration',
    photo58Alt: "Employees of Hillel Yaffe Medical Center presenting their impressive creation made in our workshop",
    photo46Caption: "Mosaic made by Sony company employees during our workshop",
    photo46Alt: "Mosaic made by Sony company employees during our workshop",
    pricingTitle: '🎟️ Prices & Workshop Booking',
    workshopTitle: '🏢 Mosaic Logo Workshops for Companies',
    price: '🧑‍💼 Corporate workshops: custom pricing',
    pricingNote: 'Prices include materials, professional guidance, and a unique seaside atmosphere 🌊',
    orderNow: '📩 Book Now',
  },

}

export default function Company({ language, languageSettings }) {
  const t = translations[language];
  const settings = languageSettings[language]

  const arrPhotoCarousel = [
    photo64, photo45, photo192, photo63, photo193, photo118, photo121, photo122, photo73,
    photo1, photo74, photo65, photo66, photo67, photo69, photo70, photo59, photo58,
    photo72, photo98, photo100, photo101, photo107, photo71, photo126,
  ]

  return (
    <div id='mainDivCompany'>
      <FadeIn>
        <br /><br /><br />
        <h1>{t.title}</h1>

        <div id='twoCompanyVideosAndIcons'>

          <div id='companyIconsDiv'>
            <div className='companyIconsMiniDiv'>
              <HiUserGroup className='companyIcons' />
              <p className='companyIconsText'>{t.icons[0]}</p>
            </div>
            <div className='companyIconsMiniDiv'>
              <FaPaintBrush className='companyIcons' />
              <p className='companyIconsText'>{t.icons[1]}</p>
            </div>
            <div className='companyIconsMiniDiv'>
              <FaHeart className='companyIcons' />
              <p className='companyIconsText'>{t.icons[2]}</p>
            </div>
            <div className='companyIconsMiniDiv'>
              <GiCalendarHalfYear className='companyIcons' />
              <p className='companyIconsText'>{t.icons[3]}</p>
            </div>
          </div>

          <div id='twoCompanyVideos'>
            <video
              id="video14"
              src={video14}
              autoPlay
              loop
              muted
              title={t.title + " - video 1"}
            />
            <video
              id="video10"
              src={video10}
              autoPlay
              loop
              muted
              title={t.title + " - video 2"}
            />
          </div>
        </div>

        <div id='CTACompany'>
          <a href="#contact" className='CTA'>{t.cta}</a>
        </div>

        <p id='companyText' style={{
          direction: settings.direction,
          textAlign: settings.textAlign
        }}>{t.description}</p>

        <PhotoCarousel arrPhotoCarousel={arrPhotoCarousel} />

        <p className='textPhotoC' id='ovdimCompany'>{t.textPhotoC}</p>

        <img
          id='photo58'
          src={photo58}
          loading="lazy"
          alt={t.photo58Alt}
        />

        <div id='photo46Div'>
          <p>{t.photo46Caption}</p>
          <img
            src={photo46}
            id='photo46'
            loading="lazy"
            alt={t.photo46Alt}
          />
        </div>

        <br />
      </FadeIn>

      <section className="pricing-section">
        <h2 className="pricing-title">{t.pricingTitle}</h2>
        <div className="pricing-grid">
          <a href="#contact" className='pricingLink'>
            <div className="price-card">
              <h3>{t.workshopTitle}</h3>
              <ul>
                <li>{t.price}</li>
              </ul>
            </div>
          </a>
        </div>
        <p className="pricing-note">{t.pricingNote}</p>
        <a href="#contact" className="cta-button">{t.orderNow}</a>
      </section>

      <Contact language={language} languageSettings={languageSettings} />
      <Footer language={language} languageSettings={languageSettings} />
    </div>
  )
}