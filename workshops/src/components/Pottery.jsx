import { React, useState, useRef, useEffect } from 'react'
import FadeIn from 'react-fade-in';
import { Link, useNavigate, } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"
import './Pottery.css'
import BookingWidget from './BookingWidget';
import FaqPottery from './FaqPottery'
import Contact from './Contact';
import Footer from './Footer';
import MainButtons from './MainButtons';
import PhotoCarousel from './PhotoCarousel';
import thumbNailPotteryMainVideo from './images/thumbNailPotteryMainVideo.png'
import mainVideoPottery from './videos/mainVideoPottery.mp4'
import Reviews from './Reviews';
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
import photo256 from './images/photo256.png'
import photo257 from './images/photo257.jpeg'
import photo258 from './images/photo258.jpeg'
import photo168 from './images/photo168.jpg'

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

const whatsappNumber = '9720523948920';

const translations = {
  he: {
    title: 'סדנאות קדרות',
    icons: ['מרגיע', 'יצירה מקצועית', 'גיבוש והנאה', 'לוקחים הביתה'],
    cta: 'לתיאום סדנה פרטית',
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
      // { icon: '👥', title: 'קבוצות קטנות', text: 'תשומת לב אישית לכל משתתף' },
      { icon: '🌊', title: 'מיקום מושלם', text: 'סדנה מול הים במיקום מדהים' },
      { icon: '🏠', title: 'מגיעים גם אליכם', text: 'בבית פרטי או בעסק שלכם, בכל רחבי הארץ' }
    ],

    workshopsTag: 'הסדנאות שלנו',
    workshopsTitle: 'בחרו את סוג הסדנה',
    workshopsSubtitle: 'משלוש חוויות קרמיקה שונות — מהיצירה הראשונית ועד לגימור המבריק, בחרו את מה שמתאים לכם',
    workshopsCta: 'תאמו בוואטסאפ',
    workshops: [
      {
        icon: '🏺',
        title: 'אובניים - יצירה אישית וייחודית',
        subtitle: 'מפגש אחד',
        desc: 'סדנה מושלמת למתחילים ולמתקדמים: יוצרים כלי חרס משלכם על גלגל האבניים בעבודת יד, מגוש חומר ועד לצורה מוגמרת. הכלי נשאר ברשותכם לייבוש עצמי בבית – ללא צורך בתנור וללא המתנה.',
        color: '#d2691e',
        tags: [' למתקדמים ולמתחילים', 'עד שעתיים', 'לוקחים איתכם'],
        price: '250₪ לאדם',
        img: photo256,
      },
      {
        icon: '🔥',
        title: 'קרמיקה יצירה מלאה עם תנור',
        subtitle: 'יצירה ושריפה מקצועית',
        desc: 'החוויה המלאה: יוצרים על האבניים ולאחר מכן שורפים את הכלי בתנור הקרמיקה המקצועי החדש שלנו. השריפה הופכת את החומר לקרמיקה חזקה ועמידה, מוכנה לשימוש יומיומי בבית.',
        color: '#8b4513',
        tags: ['תוצר סופי ועמיד', 'תהליך שלם', 'מומלץ למתנות'],
        price: 'החל מ-350₪ לאדם',
        img: photo258,
      },
      {
        icon: '🎨',
        title: 'גלזורה וצביעה',
        subtitle: 'צביעה וגימור סופי',
        desc: 'מוסיפים צבע וברק לכלי קרמי שכבר עבר שריפה ראשונה (ביסקוויט). צובעים בגלזורה מקצועית, ולאחר מכן שורפים שוב לקבלת גימור מבריק, צבעוני ועמיד למים.',
        color: '#daa520',
        tags: ['גימור מבריק', 'שריפה שנייה', 'התאמה אישית'],
        price: 'לפי תיאום',
        img: photo257,
      },
    ],

    galleryText: 'פעילויות גיבוש',
    pricingTitle: 'מחירים ותיאום סדנאות',
    potteryWorkshop: 'סדנאות קדרות',
    pricePerPerson: 'מחיר לסדנה: 250₪ לאדם',
    pricingNote: 'המחירים כוללים חומרים, הדרכה מקצועית ואווירה מיוחדת מול הים',
    orderNow: 'הזמינו עכשיו בווטסאפ',
    ctaFinal: '?מוכנים ליצור משהו מיוחד',
    ctaFinalSub: 'הצטרפו לאלפי לקוחות מרוצים שחוו את קסם הקדרות',
    janurTag: 'למי שרוצה להמשיך ליצור גם בבית',
    janurTitle: 'תנור הקדרות ג׳נור',
    janurText: 'אוהבים קדרות ורוצים לשרוף את היצירות שלכם גם בבית? הכירו את ג׳נור — תנור קדרות קומפקטי ויעיל, כהמשך טבעי לעולם הקדרות.',
    janurCta: 'לפרטים על תנור ג׳נור',
  },

  en: {
    title: 'Pottery Workshops',
    icons: ['Relaxing', 'Pro creation', 'Team bonding', 'Take it home'],
    cta: 'Book a private workshop',
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
      // { icon: '👥', title: 'Small Groups', text: 'Personal attention for each participant' },
      { icon: '🌊', title: 'Perfect Location', text: 'Seaside workshop with a stunning location' },
      { icon: '🏠', title: 'We Come to You', text: 'To your home or business, anywhere in Israel' }
    ],

    workshopsTag: 'Our Workshops',
    workshopsTitle: 'Choose Your Workshop',
    workshopsSubtitle: 'From the first creation to the final glossy finish — pick the pottery experience that\'s right for you',
    workshopsCta: 'Book on WhatsApp',
    workshops: [
      {
        icon: '🏺',
        title: 'Wheel Throwing – A Personal, One-of-a-Kind Creation',
        subtitle: 'Single session',
        desc: 'A perfect workshop for beginners and advanced participants alike: shape your own ceramic piece on the potter\'s wheel by hand, from a lump of clay to a finished form. The piece stays with you to air-dry at home – no kiln and no waiting required.',
        color: '#d2691e',
        tags: ['Beginners & advanced', 'Up to 2 hours', 'Take it with you'],
        price: '₪250 per person',
        img: photo256,
      },
      {
        icon: '🔥',
        title: 'Full Ceramics with Kiln',
        subtitle: 'Creation & professional firing',
        desc: 'The complete experience: create on the wheel, then we fire your piece in our new professional ceramics kiln. Firing transforms the clay into strong, durable ceramic, ready for everyday use at home.',
        color: '#8b4513',
        tags: ['Durable final piece', 'Full process', 'Great for gifts'],
        price: 'From ₪350 per person',
        img: photo258,
      },
      {
        icon: '🎨',
        title: 'Glazing & Painting',
        subtitle: 'Color & final finish',
        desc: 'Add color and shine to a piece that has already been through its first (bisque) firing. Paint it with a professional glaze, then it\'s fired once more for a glossy, colorful, water-resistant finish.',
        color: '#daa520',
        tags: ['Glossy finish', 'Second firing', 'Fully personalized'],
        price: 'By arrangement',
        img: photo257,
      },
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
    janurTag: 'For those who want to keep creating at home',
    janurTitle: 'The Janur Pottery Kiln',
    janurText: 'Love pottery and want to fire your creations at home? Meet Janur — a compact and efficient pottery kiln, a natural next step for pottery lovers.',
    janurCta: 'Explore the Janur Kiln',
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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const [activeWorkshop, setActiveWorkshop] = useState(0);
  const activeW = t.workshops[activeWorkshop];


  const arrPhotoCarousel = [
    photo203, photo202, photo199, photo198, photo200, photo201, photo162, photo189, photo190, photo180,
    photo181, photo182, photo183, photo194, photo164, photo165, photo186, photo187, photo191, photo216,
    photo217, photo218, photo219, photo220, photo221, photo222, photo223, photo224, photo225, photo226,
    photo227, photo228, photo229, photo230, photo231, photo232, photo233, photo234, photo235, photo236,
    photo237, photo238, photo239, photo240, photo241, photo242, photo243, photo244, photo245, photo246,
    photo247, photo248, photo249, photo250, photo251, photo252, photo253, photo254, photo257
  ]

  return (
    <div id='mainDivPottery'>


      <FadeIn>
        {/* Hero Section - Pottery */}
        <section className="hero-section-pottery">
          <div className="hero-bg-pottery">
            <video
              src={mainVideoPottery} // תחליף בוידאו שלך
              poster={thumbNailPotteryMainVideo} // תחליף בתמונת תצוגה מקדימה
              autoPlay
              loop
              muted
              playsInline
              className="hero-video-pottery"
            />
            <div className="hero-overlay-pottery" />
          </div>

          <div className="hero-content-pottery">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h1 className="hero-title-pottery">{t.title}</h1>
              <p className="hero-subtitle-pottery">{t.subtitle}</p>


              <MainButtons language={language} languageSettings={languageSettings} />
              <Reviews language={language} />
            </motion.div>
          </div>
        </section>

        {/* Videos Section */}
        <div id='twoPotteryVideosAndIcons'>
          <div id='twoPotteryVideos'>
            <video id="video12" src={video12} autoPlay loop muted title="Pottery workshop video demo" />
            <video id="video13" src={video13} autoPlay loop muted title="Pottery workshop video demo" />
          </div>
        </div>






        <div id='explainPotteryDiv'>
          <p id='explainPotteryText' style={{
            direction: settings.direction,
            textAlign: settings.textAlign
          }}>{t.description}</p>
        </div>

        {/* קטע חדש - בחירת סוג סדנה (אובניים / קרמיקה עם תנור / גלזורה) */}
        <section className='workshopTypesSection' dir={settings.direction}>
          <div className='workshopTypesHeader'>
            <span className='workshopTypesTag'>{t.workshopsTag}</span>
            <h2 className='sectionTitle'>{t.workshopsTitle}</h2>
            <p className='workshopTypesSubtitle'>{t.workshopsSubtitle}</p>
          </div>

          <div className='workshopTabsNav'>
            {t.workshops.map((w, i) => (
              <button
                key={i}
                type='button'
                className={`workshopTab ${activeWorkshop === i ? 'is-active' : ''}`}
                style={{ '--wc': w.color }}
                onClick={() => setActiveWorkshop(i)}
              >
                <span className='workshopTab__icon'>{w.icon}</span>
                <span className='workshopTab__title'>{w.title}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode='wait'>
            <motion.div
              key={activeWorkshop}
              className='workshopPanel'
              style={{ '--wc': activeW.color }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3 }}
            >
              <div className='workshopPanel__img'>
                <img src={activeW.img} alt={activeW.title} loading='lazy' />
              </div>
              <div className='workshopPanel__text'>
                <span className='workshopPanel__sub'>{activeW.subtitle}</span>
                <h3>{activeW.title}</h3>
                <p>{activeW.desc}</p>
                <div className='workshopPanel__tags'>
                  {activeW.tags.map((tag, j) => (
                    <span key={j} className='workshopPanel__chip'>{tag}</span>
                  ))}
                </div>
                <div className='workshopPanel__footer'>
                  <span className='workshopPanel__price'>{activeW.price}</span>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      language === 'he'
                        ? `שלום! אשמח לפרטים ותיאום על ${activeW.title}`
                        : `Hi! I'd like details and to book the ${activeW.title}`
                    )}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='workshopPanel__cta'
                  >
                    {t.workshopsCta}
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

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



        <div className="textPhotoContainerPottery"></div>
        <p id='textPhoto161'>{t.galleryText}</p>

        <img
          id='photo204'
          src={photo204}
          loading="lazy"
          alt={altTexts.photo204[language]}
        />

        <section className='pottery-janur-teaser' dir={settings.direction}>
          <div className='pottery-janur-teaser__inner'>
            <div className='pottery-janur-teaser__image-wrap'>
              <img
                src={photo168}
                alt={language === 'he' ? 'תנור הקדרות ג׳נור' : 'Janur pottery kiln'}
                loading='lazy'
                className='pottery-janur-teaser__image'
              />
            </div>
            <div className='pottery-janur-teaser__content'>
              <span className='pottery-janur-teaser__tag'>{t.janurTag}</span>
              <h2>{t.janurTitle}</h2>
              <p>{t.janurText}</p>
              <Link
                to={language === 'en' ? '/en/janur' : '/janur'}
                className='pottery-janur-teaser__cta'
                onClick={(e) => {
                  e.preventDefault();

                  const targetPath = language === 'en' ? '/en/janur' : '/janur';

                  // Navigate first, then force the new route to the very top.
                  window.history.pushState({}, '', targetPath);
                  window.dispatchEvent(new PopStateEvent('popstate'));

                  requestAnimationFrame(() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
                    setTimeout(() => {
                      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
                    }, 50);
                  });
                }}
              >
                {t.janurCta}
                <span aria-hidden='true'>...</span>
              </Link>
            </div>
          </div>
        </section>


      </FadeIn>

      <FaqPottery language={language} languageSettings={languageSettings} />

      <Contact language={language} languageSettings={languageSettings} />
      <Footer language={language} languageSettings={languageSettings} />
    </div>
  )
}