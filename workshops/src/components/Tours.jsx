import { React, useEffect } from 'react'
import { Link, useNavigate, } from 'react-router-dom';
import './Tours.css'
import Contact from './Contact';
import Footer from './Footer';
import BookingWidget from './BookingWidget';
import PhotoCarousel from './PhotoCarousel';
import FadeIn from 'react-fade-in';
import photo40 from './images/photo40.jpg'
import photo41 from './images/photo41.jpg'
import photo42 from './images/photo42.jpg'
import photo51 from './images/photo51.jpg'
import photo52 from './images/photo52.jpg'
import photo53 from './images/photo53.jpg'
import photo54 from './images/photo54.jpg'
import photo55 from './images/photo55.jpg'
import photo56 from './images/photo56.jpg'
import photo75 from './images/photo75.jpg'
import photo197 from './images/photo197.jpg'
import photo211 from './images/photo211.jpg'
import photo212 from './images/photo212.jpg'
import photo213 from './images/photo213.jpg'
import photo214 from './images/photo214.jpg'
import photo215 from './images/photo215.jpg'
import madregot from './videos/madregot.mp4'
import yam from './videos/yam.mp4'
import porfir from './videos/porfir.mp4'
import { MdOutlineRecommend } from "react-icons/md";
import { TbVip } from "react-icons/tb";
import { TbMapStar } from "react-icons/tb";
import { PiCertificate } from "react-icons/pi";
import { FaWaze, FaInstagram } from "react-icons/fa";



import { useRef } from 'react';
import { motion } from "framer-motion"
const translations = {
    he: {
        title: 'סיורים מרתקים',
        icons: ['סיור פרטי', 'מטיילים ממליצים', 'מסלול לבחירתכם', 'מורה דרך מוסמך'],
        videosAlt: [
            "מקטע מהסיור: וידאו של ירידה במדרגות עתיקות",
            "מקטע מהסיור: וידאו של נוף של ים",
            "מקטע מהסיור: וידאו של רחוב עתיק ומרשים"
        ],
        cta: 'לתיאום מיידי',
        experienceTitle1: '🌅 דמיינו את זה...',
        experienceText1: 'אתם משוטטים בין חורבותיה הקסומות של קיסריה העתיקה. כל אבן לוחשת סיפור מהעבר, כל צעד מחבר אתכם לתרבות רומית מרהיבה.',
        experienceTitle2: '🍷 ואז, עם שקיעת השמש…',
        experienceText2: 'נעצור מול נוף עוצר נשימה, שם יחכה לכם מגש טעימות עשיר:',
        experienceList: [
            '🧀 גבינות בוטיק בעבודת יד',
            '🍞 לחמים טריים וריחניים',
            '🍷 יין משובח שיחמיא לכל ביס'
        ],
        experienceMusic: '🎶 כל זה מלוּוה במוזיקה חיה שתעטוף אתכם באווירה מושלמת.',
        experiencePottery: '🎨 ולסיום – הדגמת קדרות חיה! האובניים מסתובבים, החימר מתעצב, ואתם עדים לרגע הקסם שבו חומר הופך לאמנות.',
        whatYouGetTitle: '✨ מה תקבלו בסיור?',
        whatYouGetList: [
            '✅ חוויית סיור סוחפת שמחברת היסטוריה מרתקת לנופים מרהיבים',
            '✅ תובנות מקצועיות על עולם הארכיאולוגיה ושימור אתרים',
            '✅ סיפורים מרגשים שלא תמצאו באף ספר היסטוריה',
            '✅ טיפים בלעדיים על המקומות הסודיים של קיסריה',
            '✅ מדריך מוסמך ומומחה לשימור אתרים – מהצלת פסיפס הציפורים ועד הקטקומבות ברומא',
            '✅ חוויה בלתי נשכחת!'
        ],
        pricingTitle: '🎟️ מחירים ותיאום סיורים',
        pricingWorkshopTitle: '🏛️ סיורים מרתקים',
        pricingList: [
            '📍 סיור קבוצתי: החל מ-500₪ לסיור',
            '🕯️ סיור עששיות ערב: החל מ-500₪ לסיור'
        ],
        pricingNote: 'המחירים כוללים הדרכה מקצועית ואווירה מיוחדת מול הים 🌊',
        orderNow: '📩 הזמינו עכשיו',
        instaLink: "https://www.instagram.com/art_music_explore/"
    },
    en: {
        title: 'Fascinating Tours',
        icons: ['Private Tour', 'Picked by Travelers', 'Route of Your Choice', 'Certified Guide'],
        videosAlt: [
            "Tour clip: video of descending ancient stairs",
            "Tour clip: video of sea view",
            "Tour clip: video of an ancient and impressive street"
        ],
        cta: 'Book Now',
        experienceTitle1: '🌅 Imagine this...',
        experienceText1: 'You stroll among the magical ruins of ancient Caesarea. Every stone whispers a story from the past, every step connects you to a magnificent Roman culture.',
        experienceTitle2: '🍷 And then, at sunset…',
        experienceText2: 'We stop before a breathtaking view, where a rich tasting platter awaits you:',
        experienceList: [
            '🧀 Handmade boutique cheeses',
            '🍞 Fresh and fragrant breads',
            '🍷 Fine wine that complements every bite'
        ],
        experienceMusic: '🎶 All accompanied by live music that wraps you in the perfect atmosphere.',
        experiencePottery: '🎨 And finally – live pottery demonstration! The wheels spin, the clay takes shape, and you witness the magical moment when material turns into art.',
        whatYouGetTitle: '✨ What will you get on the tour?',
        whatYouGetList: [
            '✅ An immersive tour experience connecting fascinating history to stunning landscapes',
            '✅ Professional insights into archaeology and site conservation',
            '✅ Emotional stories you won’t find in any history book',
            '✅ Exclusive tips about Caesarea’s secret spots',
            '✅ A certified guide and conservation expert – from saving the Birds Mosaic in Caesarea to the Jewish catacombs in Rome',
            '✅ An unforgettable experience!'
        ],
        pricingTitle: '🎟️ Prices & Tour Booking',
        pricingWorkshopTitle: '🏛️ Exciting Tours',
        pricingList: [
            '📍 Group tour: from 500₪ per tour',
            '🕯️ Evening lantern tour: from 500₪ per tour'
        ],
        pricingNote: 'Prices include professional guidance and a special seaside atmosphere 🌊',
        orderNow: '📩 Book Now',
        instaLink: "https://www.instagram.com/art_music_explore/"
    },
    
}

export default function Tours({ language, languageSettings }) {
    
    const t = translations[language]
    const settings = languageSettings[language];

    const arrPhotoCarousel = [
        photo215,
        photo56,
        photo214,
        photo213,
        photo211,
        photo55,
        photo75,
    ]

    return (
        <div id='mainDivTours'>
            <FadeIn>
                <br /><br /><br /><br />
                <h1 className='toursTitle'>{t.title}</h1>
                <br />

                <div id='twoToursVideosAndIcons'>

                    <div id='toursIconsDiv'>
                        <div className='toursIconsMiniDiv'>
                            <TbVip className='toursIcons' />
                            <p className='toursIconsText'>{t.icons[0]}</p>
                        </div>
                        <div className='toursIconsMiniDiv'>
                            <MdOutlineRecommend className='toursIcons' />
                            <p className='toursIconsText'>{t.icons[1]}</p>
                        </div>
                        <div className='toursIconsMiniDiv'>
                            <TbMapStar className='toursIcons' />
                            <p className='toursIconsText'>{t.icons[2]}</p>
                        </div>
                        <div className='toursIconsMiniDiv'>
                            <PiCertificate className='toursIcons' />
                            <p className='toursIconsText'>{t.icons[3]}</p>
                        </div>
                    </div>

                    <div id='threeToursVideosDiv'>
                        <video
                            id="madregot"
                            src={madregot}
                            autoPlay
                            loop
                            muted
                            title={t.videosAlt[0]}
                        />
                        <video
                            id="yam"
                            src={yam}
                            autoPlay
                            loop
                            muted
                            title={t.videosAlt[1]}
                        />
                        <video
                            id="porfir"
                            src={porfir}
                            autoPlay
                            loop
                            muted
                            title={t.videosAlt[2]}
                        />
                    </div>
                </div>

                <a href="#contact" id='CTATours' className='CTA'>{t.cta}</a>

                <div id="tourExperience" style={{
                    direction: settings.direction,
                    textAlign: settings.textAlign
                }}>
                    <h2>{t.experienceTitle1}</h2>
                    <p>{t.experienceText1}</p>

                    <h3>{t.experienceTitle2}</h3>
                    <p>{t.experienceText2}</p>

                    <ul>
                        {t.experienceList.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>

                    <p>{t.experienceMusic}</p>
                    <p>{t.experiencePottery}</p>

                    <h3>{t.whatYouGetTitle}</h3>
                    <ul>
                        {t.whatYouGetList.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div id='carouselToursPhotos'>
                    <PhotoCarousel arrPhotoCarousel={arrPhotoCarousel} />
                </div>
            </FadeIn>

            <section className="pricing-section">
                <h2 className="pricing-title">{t.pricingTitle}</h2>
                <div className="pricing-grid">
                    <a href="#contact" className='pricingLink'>
                        <div className="price-card">
                            <h3>{t.pricingWorkshopTitle}</h3>
                            <ul>
                                {t.pricingList.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </a>
                </div>

                <p className="pricing-note">{t.pricingNote}</p>
                <a href="#contact" className="cta-button">{t.orderNow}</a>
            </section>

            <Contact instaLink={t.instaLink} language={language} languageSettings={languageSettings} />
            <Footer language={language} languageSettings={languageSettings} />
        </div>
    )
}