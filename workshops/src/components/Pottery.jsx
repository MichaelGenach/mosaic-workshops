import { React, useState, useRef, useEffect } from 'react'
import FadeIn from 'react-fade-in';
import { Link, useNavigate, } from 'react-router-dom'
import { motion } from "framer-motion"
import './Pottery.css'
import BookingWidget from './BookingWidget';
import Contact from './Contact';
import Footer from './Footer';
import PhotoCarousel from './PhotoCarousel';
import photo161 from './images/photo161.jpg'
import photo162 from './images/photo162.jpg'
import photo163 from './images/photo163.jpg'
import photo164 from './images/photo164.jpg'
import photo165 from './images/photo165.jpg'
import photo174 from './images/photo174.jpg'
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
import photo202 from './images/photo202.jpg'
import photo203 from './images/photo203.jpg'
import photo204 from './images/photo204.jpg'
import photo205 from './images/photo205.jpg'
import photo206 from './images/photo206.jpg'
import photo207 from './images/photo207.jpg'
import photo208 from './images/photo208.jpg'
import photo209 from './images/photo209.jpg'
import photo210 from './images/photo210.jpg'
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

import video9 from './videos/video9.mp4'
import video12 from './videos/video12.mp4'
import video13 from './videos/video13.mp4'

import { HiUserGroup } from "react-icons/hi";
import { FaPaintBrush } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { GiCalendarHalfYear } from "react-icons/gi";
import { PiFlowerLotusBold } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import Pricing from './Pricing';

const translations = {
  he: {
    title: 'סדנאות קדרות',
    icons: ['מרגיע', 'יצירה מקצועית', 'גיבוש והנאה', 'לוקחים הביתה'],
    cta: 'לתיאום מיידי',
    description: `הזמינו את המשפחה, החברים או הצוות לעולם של יצירה והשראה בסדנת קדרות ייחודית,

על גלגל האובניים תתנסו בעבודה עם חומרים איכותיים, תלמדו טכניקות מסורתיות ומודרניות, ותעצבו כלי קרמיקה בעבודת יד.

אין צורך בניסיון קודם – מושלם לימי גיבוש, אירועים משפחתיים או מתנה מקורית לעצמכם.`,

    whatIncluded: '?מה זה כולל',
    included: [
      'ציוד מקצועי ברמה הגבוהה ביותר',
      'הדרכה אישית ממומחים בעלי שם עולמי',
      'התאמה לכל רמות הניסיון',
      'קחו את היצירות שלכם הביתה'
    ],

    whyUs: '?למה לבחור בנו',
    reasons: [
      { icon: '🏆', title: 'ניסיון עשיר', text: 'מעל 30 שנות ניסיון' },
      { icon: '🎨', title: 'ציוד מקצועי', text: 'אובניים חשמליים וכלים יעודיים' },
      { icon: '👥', title: 'קבוצות קטנות', text: 'תשומת לב אישית לכל משתתף' },
      { icon: '🌊', title: 'מיקום מושלם', text: 'סדנה מול הים במיקום מדהים' }
    ],

    testimonials: 'מה אומרים עלינו',
    reviews: [
      { name: 'שרה כהן', text: 'חוויה מדהימה! הצוות סבלני והמקצועיות ברמה גבוהה', rating: 5 },
      { name: 'דוד לוי', text: 'יום גיבוש מעולה לחברה, כולם נהנו והתלהבו', rating: 5 },
      { name: 'מיכל אברהם', text: 'סדנה משפחתית נהדרת, הילדים והמבוגרים נהנו', rating: 5 }
    ],

    galleryText: 'פעילויות גיבוש',
    pricingTitle: 'מחירים ותיאום סדנאות',
    potteryWorkshop: 'סדנאות קדרות',
    pricePerPerson: 'מחיר לסדנה: 250₪ לאדם',
    pricingNote: 'המחירים כוללים חומרים, הדרכה מקצועית ואווירה מיוחדת מול הים',
    orderNow: 'הזמינו עכשיו בווטסאפ',
    ctaFinal: '?מוכנים ליצור משהו מיוחד',
    ctaFinalSub: 'הצטרפו לאלפי לקוחות מרוצים שחוו את קסם הקדרות',
  },

  en: {
    title: 'Pottery Workshops',
    icons: ['Relaxing', 'Pro creation', 'Team bonding', 'Take it home'],
    cta: 'Book Now',
    description: `Invite your family, friends or team to a world of creativity and inspiration in a unique pottery workshop!

Experience the potter's wheel, work with quality materials, learn traditional and modern techniques, and create handmade ceramics.

No prior experience needed – perfect for team events, family gatherings, or an original gift.`,

    whatIncluded: 'What\'s Included?',
    included: [
      'Highest quality professional equipment',
      'Personal guidance from world experts',
      'Suitable for all skill levels',
      'Take your creations home!'
    ],

    whyUs: 'Why Choose Us?',
    reasons: [
      { icon: '🏆', title: 'Rich Experience', text: 'Over 30 years of experience' },
      { icon: '🎨', title: 'Pro Equipment', text: 'Professional-grade pottery wheels' },
      { icon: '👥', title: 'Small Groups', text: 'Personal attention for each participant' },
      { icon: '🌊', title: 'Perfect Location', text: 'Seaside workshop with a stunning location' }
    ],

    testimonials: 'What People Say',
    reviews: [
      { name: 'Sarah Cohen', text: 'Amazing experience! Patient staff and high professionalism', rating: 5 },
      { name: 'David Levy', text: 'Excellent team building day, everyone enjoyed', rating: 5 },
      { name: 'Michelle Abraham', text: 'Great family workshop, kids and adults loved it', rating: 5 }
    ],

    galleryText: 'Team Activities',
    pricingTitle: 'Prices & Booking',
    potteryWorkshop: 'Pottery Workshops',
    pricePerPerson: 'Price: 250₪ per person',
    pricingNote: 'Prices include materials, professional instruction, and unique seaside atmosphere',
    orderNow: 'Book Now on WhatsApp',
    ctaFinal: 'Ready to Create Something Special?',
    ctaFinalSub: 'Join thousands of satisfied customers who experienced the magic of pottery',
  }
}

const altTexts = {
  photo204: {
    he: "לקוחות מציגים את יצירותיהם",
    en: "Customers showcasing their creations",
  },
};

export default function Pottery({ language, languageSettings }) {

  const t = translations[language];
  const settings = languageSettings[language];


  const arrPhotoCarousel = [
    photo203, photo202, photo199, photo198, photo200, photo201, photo162, photo189, photo190, photo180,
    photo181, photo182, photo183, photo194, photo164, photo165, photo186, photo187, photo191, photo216,
    photo217, photo218, photo219, photo220, photo221, photo222, photo223, photo224, photo225, photo226,
    photo227, photo228, photo229, photo230, photo231, photo232, photo233, photo234, photo235, photo236,
    photo237, photo238, photo239, photo240, photo241, photo242, photo243, photo244, photo245, photo246,
    photo247, photo248, photo249, photo250, photo251, photo252, photo253, photo254
  ]

  return (
    <div id='mainDivPottery'>
      <br />

      <FadeIn>
        <div id='headLine'>
          <h1>{t.title}</h1>
        </div>

        <div id='twoPotteryVideosAndIcons'>
          <div id='twoPotteryVideos'>
            <video id="video12" src={video12} autoPlay loop muted title="Pottery workshop video demo" />
            <video id="video13" src={video13} autoPlay loop muted title="Pottery workshop video demo" />
          </div>

          <div id='potteryIconsDiv'>
            <div className='potteryIconsMiniDiv'><PiFlowerLotusBold className='potteryIcons' /><p className='potteryIconsText'>{t.icons[0]}</p></div>
            <div className='potteryIconsMiniDiv'><FaPaintBrush className='potteryIcons' /><p className='potteryIconsText'>{t.icons[1]}</p></div>
            <div className='potteryIconsMiniDiv'><FaHeart className='potteryIcons' /><p className='potteryIconsText'>{t.icons[2]}</p></div>
            <div className='potteryIconsMiniDiv'><FaHome className='potteryIcons' /><p className='potteryIconsText'>{t.icons[3]}</p></div>
          </div>
        </div>


        <a href="#contact" id='CTAPottery'>{t.cta}</a>


        <div id='explainPotteryDiv'>
          <p id='explainPotteryText' style={{
            direction: settings.direction,
            textAlign: settings.textAlign
          }}>{t.description}</p>
        </div>

        {/* קטע חדש - מה כולל */}
        <div className='whatIncludedSection'>
          <h2 className='sectionTitle'>{t.whatIncluded}</h2>
          <div className='includedGrid' >
            {t.included.map((item, index) => (
              <div key={index} className='includedItem' style={settings
              }>
                <span className='checkIcon'>✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* קטע חדש - למה לבחור בנו */}
        <div className='whyUsSection'>
          <h2 className='sectionTitle'>{t.whyUs}</h2>
          <div className='reasonsGrid'>
            {t.reasons.map((reason, index) => (
              <div key={index} className='reasonCard'>
                <div className='reasonIcon'>{reason.icon}</div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            ))}
          </div>
        </div>

        <PhotoCarousel arrPhotoCarousel={arrPhotoCarousel} />

        {/* קטע חדש - המלצות */}
        <div className='testimonialsSection'>
          <h2 className='sectionTitle'>{t.testimonials}</h2>
          <div className='testimonialsGrid'>
            {t.reviews.map((review, index) => (
              <div key={index} className='testimonialCard'>
                <div className='stars'>{'⭐'.repeat(review.rating)}</div>
                <p className='reviewText' style={{
                  direction: settings.direction
                }}>"{review.text}"</p>
                <p style={{
                  direction: settings.direction
                }} className='reviewName'> - {review.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="textPhotoContainerPottery"></div>
        <p id='textPhoto161'>{t.galleryText}</p>

        <img
          id='photo204'
          src={photo204}
          loading="lazy"
          alt={altTexts.photo204[language]}
        />


      </FadeIn>

      <Contact language={language} languageSettings={languageSettings} />
      <Footer language={language} languageSettings={languageSettings} />
    </div>
  )
}