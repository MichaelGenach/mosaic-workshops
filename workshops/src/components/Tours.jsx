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
import photo255 from './images/photo255.jpg'
import madregot from './videos/madregot.mp4'
import yam from './videos/yam.mp4'
import porfir from './videos/porfir.mp4'
import tandemCaesarea from './images/tandemCaesarea.jpeg';
import caesareaTour from './images/caesareaTour.jpg';
import telAfek from './images/telAfek.jpg';
import telAfek2 from './images/telAfek2.jpg'
import telAfek3 from './images/telAfek3.jpg'
import apolonia from './images/apolonia.jpg'
import mekorotHayarkon from './images/mekorotHayarkon.jpg'
import cheesWine from './images/cheesWine.jpeg'

import { MdOutlineRecommend } from "react-icons/md";
import { TbVip } from "react-icons/tb";
import { TbMapStar } from "react-icons/tb";
import { PiCertificate } from "react-icons/pi";
import { FaWaze, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useRef } from 'react';
import { motion } from "framer-motion";

const images = {
    photo40,
    photo41,
    photo42,
    photo52,
    photo53,
    photo54,
    photo55,
    photo56,
    photo75,
    photo197,
    photo211,
    photo212,
    photo213,
    photo214,
    photo215,
    photo255,
    madregot,
    yam,
    porfir,
    tandemCaesarea,
    caesareaTour,
    telAfek,
    telAfek2,
    telAfek3,
    apolonia,
    mekorotHayarkon,
    cheesWine
};
const phoneNumber = '0523948920';


// Icons (using Unicode symbols for simplicity)
const icons = {
    TbVip: '👑',
    MdOutlineRecommend: '⭐',
    TbMapStar: '🗺️',
    PiCertificate: '🏆',
    FaWaze: '🧭',
    FaInstagram: '📷'
};

// Multilingual translations
const pageTranslations = {
    he: {

        addon: {
            title: 'תוספת חווייתית לסיור (אופציונלי)',
            text: 'פלטת גבינות איכותית, לחם טרי, מטבלים ויין – מושלם לעצירה רגועה מול הים',
            item1: 'מתאים לעד 5 משתתפים',
            item2: 'מוגש במהלך הסיור',
            priceNote: 'כתוספת לסיור'
          },

        title: 'סיורים פרטיים מרתקים בישראל',
        subtitle: 'גלו את הסודות הנסתרים של ארץ ישראל',
        icons: ['סיורים פרטיים', 'מטיילים ממליצים', 'מסלול לבחירתכם', 'מורה דרך מוסמך'],
        cta: 'לתיאום סיור פרטי',
        sectionTours: 'הסיורים שלנו',
        sectionGallery: 'גלריית תמונות',
        statsLabels: {
            tours: 'סיורים מוצלחים',
            customers: 'מטיילים מרוצים',
            rating: 'דירוג ממוצע',
            experience: 'שנות ניסיון',
            phoneNumber: "052-394-8920",


        },
        stats: {
            tours: 250,
            customers: 1600,
            rating: 5,
            experience: new Date().getFullYear() - 2017
        },
        modal: {
            about: 'על הסיור',
            highlights: 'מה נראה בסיור',
            includes: 'מה כלול במחיר',
            duration: 'משך הסיור',
            groupType: 'סוג הקבוצה',
            groupTypeValue: 'פרטית/מאורגנת',
            bookNow: 'הזמן עכשיו',
            whatsappLinkText: "הזמן עכשיו",
            gallery: 'גלריה',
            // perParticipant: 'למשתתף',
            reviews: 'ביקורות',
            moreDetails: 'לפרטים נוספים',

        }
    },
    en: {

        addon: {
            title: 'Optional Tour Add-on',
            text: 'A premium cheese platter with fresh bread, dips and wine – perfect for a relaxed seaside break',
            item1: 'Suitable for up to 5 participants',
            item2: 'Served during the tour',
            priceNote: 'Add-on to the tour'
        },

        title: 'Fascinating Private Tours in Israel',
        subtitle: 'Discover the hidden secrets of the Land of Israel',
        icons: ['Private Tours', 'Recommended by travelers', 'Customized route', 'Licensed guide'],
        cta: 'Book a private tour',
        sectionTours: 'Our Tours',
        sectionGallery: 'Photo Gallery',
        statsLabels: {
            tours: 'Successful Tours',
            customers: 'Happy Travelers',
            rating: 'Average Rating',
            experience: 'Years of Experience',
            phoneNumber: "052-394-8920",

        },
        stats: {
            tours: 250,
            customers: 1600,
            rating: 5,
            experience: new Date().getFullYear() - 2017
        },
        modal: {
            about: 'About the Tour',
            highlights: 'What we\'ll see',
            includes: 'What\'s included',
            duration: 'Duration',
            groupType: 'Group Type',
            groupTypeValue: 'Private/Organized',
            bookNow: 'Book Now',
            whatsappLinkText: "Book Now",
            gallery: 'Gallery',
            // perParticipant: 'per participant',
            reviews: 'reviews',
            moreDetails: 'More Details'
        }
    }
};






const toursTranslations = {
    he: {

        cesareaTours: {
            id: 'cesareaTours',
            title: "🏛️ סיורים בקיסריה",
            subtitle: "מסע חי ומוחשי אל קיסריה הקדומה",
            image: caesareaTour,
            description: "סיפור של עיר אחת, אימפריות מתחלפות ואתרים עוצרי נשימה",
            fullDescription: "קיסריה מריטימה - עיר הנמל המפוארת מזמינה אתכם למסע מרתק בזמן. במהלך הסיור נכיר את עתיקות קיסריה באופן מרתק, ונכיר גם מקומות פחות מוכרים ומרתקים לא פחות.",
            highlights: [
                "פסלים עתיקים",
                "פסיפסים מרהיבים",
                "נמל קיסריה העתיק",
                "העיר הצלבנית",
                "המזח העתיק",


            ],
            duration: "1-2 שעות",
            price: "מ-₪450 לסיור",
            phoneNumber: "052-394-8920",
            rating: 5.0,
            reviewsCount: 40,
            includes: [, "כניסה לאתרים סודיים", "חידות וסיפורים מרתקים", "תצפיות מרשימות", "תובנות מרתקות", "מדריך מוסמך ומומחה לשימור אתרים – מהצלת פסיפס הציפורים ועד הקטקומבות ברומא"],
            gallery: [photo197, photo211, photo213],
            color: '#667eea',


        },
        bikeTours: {
            id: 'bikeTours',
            title: "🚴 סיורי אופניים בקיסריה",
            subtitle: "רכיבה פנורמית עם נופים עוצרי נשימה",
            image: tandemCaesarea,
            description: "חוויית רכיבה מיוחדת המשלבת ים, היסטוריה וטבע",
            fullDescription: "סיור אופניים מרתק המשלב רכיבה נעימה עם גילוי האתרים הארכיאולוגיים המרתקים של קיסריה. נרכב לאורך חוף הים, נכיר את שבילי העיר העתיקה ונהנה מנופים עוצרי נשימה תוך כדי למידה מהנה על ההיסטוריה המרתקת של קיסריה.",
            highlights: [
                "רכיבה לאורך חוף קיסריה",
                "תצפית על נמל קיסריה העתיק",
                "ביקור באקוודוקט הרומי",
                "הפסקת קפה מול הים",
                "נופים מרשימים",
                "פסיפסים מרהיבים",
            ],
            duration: "1.5-2 שעות",
            price: "₪250 למשתתף",
            rating: 4.8,
            reviewsCount: 20,
            includes: ["אופניים איכותיים", "קסדת בטיחות", "מדריך מוסמך ומנוסה", "ביטוח", "כניסה לאתרים סודיים", "מדריך מוסמך ומומחה לשימור אתרים – מהצלת פסיפס הציפורים ועד הקטקומבות ברומא"],
            gallery: [photo213,
                photo214,
                photo215,],
            color: '#764ba2'
        },
        outsideTours: {
            id: 'outsideTours',
            title: "🌍 סיורים במרכז הארץ",
            subtitle: "גלו אתרים נסתרים ומרהיבים",
            image: apolonia,
            description: "מסעות מותאמים אישית לאתרים הנסתרים והיפים ביותר",
            fullDescription: "גלו את האתרים הנסתרים והמרתקים ביותר במרכז הארץ. מתל אפק העתיק ועד לכפרים הציוריים, כל סיור מותאם במיוחד לקבוצה שלכם ולתחומי העניין שלכם. נבקר באתרים ארכיאולוגיים, נהנה מנופים מדהימים ונגלה סודות מדהימים.",
            highlights: [
                "תל אפק - עיר הכנענים העתיקה",
                "אפולוניה - מבצר צלבני על הים",
                "מקורות הירקון - טיול טבע מהמם ומרגיע",
            ],
            duration: "1.5-2 שעות",
            price: "מ-₪450 לסיור",
            rating: 4.7,
            reviewsCount: 24,
            includes: ["מדריך מקצועי", "מפות מיוחדות", "נופים מדהימים", "טבע מרהיב", "מונומנטים מרשימים", "מדריך מוסמך ומומחה לשימור אתרים – מהצלת פסיפס הציפורים ועד הקטקומבות ברומא"],
            gallery: [images.telAfek3, images.mekorotHayarkon, images.telAfek2],
            color: '#ff9a56'
        }
    },
    en: {
       
        cesareaTours: {
            id: 'cesareaTours',
            title: "🏛️ Caesarea Tours",
            subtitle: "A vivid, immersive journey into ancient Caesarea",
            image: caesareaTour,
            description: "The story of one city, changing empires, and breathtaking sites",
            fullDescription: "Caesarea Maritima - the magnificent port city invites you on a fascinating journey through time. During the tour we'll get to know Caesarea's antiquities in an engaging way, including lesser-known yet equally fascinating spots.",
            highlights: [
                "Ancient statues",
                "Stunning mosaics",
                "Ancient Caesarea port",
                "The Crusader city",
                "The ancient pier",
            ],
            duration: "1-2 hours",
            price: "From ₪500 per tour",
            phoneNumber: "052-394-8920",
            rating: 5.0,
            reviewsCount: 40,
            includes: ["Licensed, experienced guide", "Access to hidden spots", "Riddles and fascinating stories", "Impressive viewpoints",
                "Fascinating insights", "A certified guide and expert in site preservation – from saving the bird mosaic to the catacombs in Rome"],
            gallery: [photo197, photo211, photo213],
            color: '#667eea'
        },
        bikeTours: {
            id: 'bikeTours',
            title: "🚴 Bike Tours in Caesarea",
            subtitle: "Panoramic cycling with breathtaking views",
            image: tandemCaesarea,
            description: "A unique cycling experience combining sea, history and nature",
            fullDescription: "A fascinating bike tour that combines pleasant cycling with discovering Caesarea's archaeological sites. We'll ride along the blue coastline, explore the ancient city paths and enjoy breathtaking views while learning about the fascinating history.",
            highlights: [
                "Riding along the coast of Caesarea",
                "View of the ancient port of Caesarea",
                "Visit to the Roman aqueduct",
                "Coffee break by the sea",
                "Impressive views",
                "Spectacular mosaics",
            ],
            duration: "1.5-2 hours",
            price: "₪250 per participant",
            rating: 4.8,
            reviewsCount: 20,
            includes: ["Quality bicycles", "Safety helmet", "Licensed, experienced guide", "Insurance", "Access to secret sites", "A certified guide and expert in site preservation – from saving the bird mosaic to the catacombs in Rome"],
            gallery: [photo213, photo214, photo215],
            color: '#764ba2'
        },
        outsideTours: {
            id: 'outsideTours',
            title: "🌍 Central Israel Tours",
            subtitle: "Discover hidden and spectacular sites",
            image: apolonia,
            description: "Customized journeys to the most hidden and beautiful sites",
            fullDescription: "Discover the most hidden and fascinating sites in central Israel. From ancient Tel Afek to picturesque villages, each tour is specially tailored to your group and areas of interest. We'll visit archaeological sites, enjoy stunning views, and uncover amazing secrets.",
            highlights: [
                "Tel Afek - the ancient Canaanite city",
                "Apollonia - a Crusader fortress on the sea",
                "Yarkon Springs (Mekorot HaYarkon) - a stunning, relaxing nature walk"
            ],
            duration: "1.5-2 hours",
            price: "From ₪450 per tour",
            rating: 4.7,
            reviewsCount: 24,
            includes: ["Professional guide", "Special maps", "Stunning views", "Spectacular nature", "Impressive monuments", "A certified guide and expert in site preservation – from saving the bird mosaic to the catacombs in Rome"],
            gallery: [images.telAfek3, images.mekorotHayarkon, images.telAfek2],
            color: '#ff9a56'
        }
    }
};


let instaLink = "https://www.instagram.com/art_music_explore/";

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        let startTime = null;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOutCubic * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return (
        <div ref={ref} className="animated-counter">
            {count}{suffix}
        </div>
    );
};

// Interactive Photo Carousel
const InteractiveCarousel = ({ images, autoPlay = true }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoPlay);

    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isPlaying, images.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (


        <div className="interactive-carousel">
            <div className="carousel-container">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt={`תמונה ${currentIndex + 1}`}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="carousel-image"
                    />
                </AnimatePresence>

                <div className="carousel-controls">
                    <button onClick={togglePlay} className="play-pause-btn">
                        {isPlaying ? '⏸️' : '▶️'}
                    </button>
                </div>
            </div>

            <div className="carousel-dots">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
};

// Main Component
export default function EnhancedToursPage({ language = 'he', languageSettings }) {
    const [selectedTour, setSelectedTour] = useState(null);
    const [scrollY, setScrollY] = useState(0);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0); // שמירת מיקום גלילה
    const lastScrollY = useRef(0);

    // Get translations based on language
    const t = pageTranslations[language] || pageTranslations.he;
    const toursData = toursTranslations[language] || toursTranslations.he;

    // Handle scroll effects
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);

            // Hide/show header based on scroll direction
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setIsHeaderVisible(false);
            } else {
                setIsHeaderVisible(true);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const openModal = (tourId) => {
        // שמירת מיקום הגלילה הנוכחי
        setScrollPosition(window.scrollY);
        setSelectedTour(tourId);
        document.body.style.overflow = 'hidden';

        // שמירה בהיסטוריה של הדפדפן
        window.history.pushState({ modalOpen: true, tourId, scrollPosition: window.scrollY }, '');
    };

    const closeModal = () => {
        setSelectedTour(null);
        document.body.style.overflow = 'unset';

        // חזרה למיקום הגלילה הקודם
        setTimeout(() => {
            window.scrollTo(0, scrollPosition);
        }, 0);

        // חזרה בהיסטוריה
        if (window.history.state && window.history.state.modalOpen) {
            window.history.back();
        }
    };

    // טיפול בלחיצה על כפתור החזרה של הדפדפן
    useEffect(() => {
        const handlePopState = (event) => {
            if (selectedTour) {
                setSelectedTour(null);
                document.body.style.overflow = 'unset';

                // שחזור מיקום הגלילה
                const savedScrollPosition = event.state?.scrollPosition || scrollPosition;
                setTimeout(() => {
                    window.scrollTo(0, savedScrollPosition);
                }, 0);
            }
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [selectedTour, scrollPosition]);

    const tourData = selectedTour ? toursData[selectedTour] : null;

    // Set direction based on language
    const direction = language === 'he' ? 'rtl' : 'ltr';
    const settings = languageSettings[language];

































    return (
        <div className="enhanced-tours-page" dir={direction}>
            {/* Hero Section with Parallax */}
            <section className="hero-section-tours">
                <div
                    className="hero-bg"
                    style={{
                        transform: `translateY(${scrollY * 0.5}px)`,
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${images.caesareaTour})`
                    }}
                />

                <div className="hero-content-tours">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <h1 className="hero-title-tours">{t.title}</h1>
                        <p className="hero-subtitle-tours">{t.subtitle}</p>

                        <div className="hero-stats-tours">
                            <div className="stat-item-tours">
                                <AnimatedCounter end={t.stats.tours} suffix="+" />
                                <span>{t.statsLabels.tours}</span>
                            </div>
                            <div className="stat-item-tours">
                                <AnimatedCounter end={t.stats.customers} suffix="+" />
                                <span>{t.statsLabels.customers}</span>
                            </div>
                            <div className="stat-item-tours">
                                <AnimatedCounter end={t.stats.rating} duration={2500} />
                                <span>{t.statsLabels.rating}</span>
                            </div>
                            <div className="stat-item-tours">
                                <AnimatedCounter end={t.stats.experience} />
                                <span>{t.statsLabels.experience}</span>
                            </div>
                        </div>

                        <motion.button
                            className="hero-cta-tours"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        >
                            {t.cta} ✨
                        </motion.button>
                    </motion.div>
                </div>
            </section>


            <div id='threeToursVideosDiv'>
                <video
                    id="madregot"
                    src={madregot}
                    autoPlay
                    loop
                    muted
                    preload="none"
                    playsInline
                    controls={false}
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                    style={{ pointerEvents: 'none' }}
                />
                <video
                    id="yam"
                    src={yam}
                    autoPlay
                    loop
                    muted
                    preload="none"
                    playsInline
                    controls={false}
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplaybook"
                    style={{ pointerEvents: 'none' }}
                />
                <video
                    id="porfir"
                    src={porfir}
                    autoPlay
                    loop
                    muted
                    preload="none"
                    playsInline
                    controls={false}
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                    style={{ pointerEvents: 'none' }}
                />
            </div>








            {/* Features Section */}
            <section className="features-section-tours">
                <div className="features-grid-tours">
                    {t.icons.map((text, index) => (
                        <motion.div
                            key={index}
                            className="feature-card-tours"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, scale: 1.02 }}
                        >
                            <div className="feature-icon-tours">
                                {Object.values(icons)[index]}
                            </div>
                            <p>{text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

 {/* Testimonials Section */}
 <section className="testimonials-section-tours"  style={{
          direction: settings.direction,
        }}>
  <motion.h2
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="section-title-tours"
  >
    {language === 'he' ? 'מה אומרים המטיילים שלנו' : 'What Our Travelers Say'}
  </motion.h2>

  <div className="testimonials-grid-tours">
    {(language === 'he'
      ? [
          {
            name: 'שרה לוי',
            tour: 'סיור בקיסריה העתיקה',
            text: 'חוויה בלתי נשכחת! מייקל היה מקצועי ומרתק, הנופים היו עוצרי נשימה והארגון היה מושלם. מומלץ בחום לכל המשפחה!',
            rating: 5
          },
          {
            name: 'דוד אברהם',
            tour: 'סיור בקיסריה העתיקה',
            text: ',גילינו פינות נסתרות ומרתקות שלא ידענו עליהן. הסיפורים ההיסטוריים והידע הארכיאולוגי של מייקל הפכו את הסיור לחוויה מיוחדת במינה. בהחלט נחזור לסיורים נוספים!',
            rating: 5
          },
          {
            name: 'מיכל ברג',
            tour: 'סיור בתל אפק',
            text: 'הטבע המדהים, המקצועיות והאווירה הנעימה יצרו חוויה מושלמת. תודה על היום המיוחד.',
            rating: 5
          }
        ]
      : [
          {
            name: 'Sarah Levy',
            tour: 'Ancient Caesarea Tour',
            text: 'An unforgettable experience! Michael was professional and fascinating, the views were breathtaking, and the organization was perfect. Highly recommended for the whole family!',
            rating: 5
          },
          {
            name: 'David Cohen',
            tour: 'Ancient Caesarea Tour',
            text: 'We discovered hidden and fascinating corners we didn\'t know about. Michael\'s historical stories and archaeological knowledge made the tour a unique experience. We\'ll definitely return for more tours!',
            rating: 5
          },
          {
            name: 'Michelle Abraham',
            tour: 'Tel Afek Tour',
            text: 'The stunning nature, professionalism, and pleasant atmosphere created a perfect experience. Thank you for the special day.',
            rating: 5
          }
        ]
    ).map((testimonial, index) => (
      <motion.div
        key={index}
        className="testimonial-card-tours"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        viewport={{ once: true }}
        whileHover={{ y: -8, scale: 1.02 }}
      >
        <div className="testimonial-stars-tours">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i} className="star-tours">⭐</span>
          ))}
        </div>

        <p className="testimonial-text-tours">
          "{testimonial.text}"
        </p>

        <div className="testimonial-author-tours">
          <div className="author-avatar-tours">
            {testimonial.name.charAt(0)}
          </div>
          <div className="author-info-tours">
            <h4 className="author-name-tours">{testimonial.name}</h4>
            <p className="author-tour-tours">{testimonial.tour}</p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>



            <section className="tour-addon-section">
  <div className="tour-addon-card">

    <div className="tour-addon-image">
      <img
        src={cheesWine}
        alt={language === 'he'
          ? 'פלטת גבינות, לחם טרי ויין'
          : 'Cheese platter with bread and wine'}
      />
    </div>

    <div className="tour-addon-content">
      <h3 className='tour-addon-title'>{t.addon.title}</h3>
      <p className='tour-addon-text'>{t.addon.text}</p>
    </div>

    <div className="tour-addon-price">
      <span className="addon-price">300₪</span>
      <span className="addon-note">{t.addon.priceNote}</span>
    </div>

  </div>
</section>

 

            {/* Tours Section */}
            <section id="tours" className="tours-section">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="section-title-tours"
                >
                    {t.sectionTours}
                </motion.h2>

                <div className="tours-grid">
                    {Object.values(toursData).map((tour, index) => (
                        <motion.div
                            key={tour.id}
                            className="tour-card-enhanced"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            onClick={() => openModal(tour.id)}
                        >
                            <div className="card-image-container">
                                <img src={tour.image} alt={tour.title} className="card-image" />
                                <div className="image-overlay">
                                    <div className="rating-badge">
                                        ⭐ {tour.rating} ({tour.reviewsCount} {t.modal.reviews})
                                    </div>
                                </div>
                            </div>

                            <div className="card-content-tours">
                                <h3 className="card-title">{tour.title}</h3>
                                <p className="card-subtitle">{tour.subtitle}</p>
                                <p className="card-description">{tour.description}</p>

                                <div className="card-meta-tours">
                                    <span className="duration">🕒 {tour.duration}</span>
                                    <span className="price" style={{ color: tour.color }}>
                                        {tour.price}
                                    </span>
                                </div>

                                <motion.button
                                    className="card-cta-tours"
                                    style={{ background: `linear-gradient(45deg, ${tour.color}, ${tour.color}dd)` }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {t.modal.moreDetails}
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="gallery-section">
                <h2 className="section-title">{t.sectionGallery}</h2>
                <InteractiveCarousel
                    images={[
                        photo197,
                        photo211,
                        photo213,
                        photo214,
                        photo255,

                    ]}
                />
            </section>






            {/* Modal */}
            <AnimatePresence>
                {selectedTour && tourData && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="modal-content-enhanced"
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 50 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            onClick={(e) => e.stopPropagation()}
                            dir={direction}
                        >
                            <button className="close-btn-enhanced" onClick={closeModal}>
                                ✕
                            </button>

                            <div className="modal-hero-enhanced">
                                <img src={tourData.image} alt={tourData.title} />
                                <div className="modal-hero-overlay">
                                    <h1>{tourData.title}</h1>
                                    <p>{tourData.subtitle}</p>
                                    <div className="modal-rating">
                                        ⭐ {tourData.rating}/5 ({tourData.reviewsCount} {t.modal.reviews})
                                    </div>
                                </div>
                            </div>

                            <div className="modal-body-enhanced">
                                <div className="modal-grid">
                                    <div className="modal-main">
                                        <section>
                                            <h3>🎯 {t.modal.about}</h3>
                                            <p>{tourData.fullDescription}</p>
                                        </section>

                                        <section>
                                            <h3>✨ {t.modal.highlights}</h3>
                                            <ul className="highlights-list">
                                                {tourData.highlights.map((item, index) => (
                                                    <motion.li
                                                        key={index}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                    >
                                                        {item}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </section>

                                        <section>
                                            <h3>🎁 {t.modal.includes}</h3>
                                            <ul className="includes-list">
                                                {tourData.includes.map((item, index) => (
                                                    <motion.li
                                                        key={index}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                    >
                                                        ✅ {item}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </section>
                                    </div>

                                    <div className="modal-sidebar">
                                        <div className="booking-card">
                                            <div className="price-display">
                                                <span className="price-amount">{tourData.price}</span>
                                                <span className="price-per">{t.modal.perParticipant}</span>
                                            </div>

                                            <div className="tour-details">
                                                <div className="detail-row">
                                                    <span>🕒 {t.modal.duration}</span>
                                                    <span>{tourData.duration}</span>
                                                </div>
                                                <div className="detail-row">
                                                    <span>👥 {t.modal.groupType}</span>
                                                    <span>{t.modal.groupTypeValue}</span>
                                                </div>
                                            </div>

                                            <motion.a
                                                className="book-btn"
                                                href={`tel:${'0523948920'}`}
                                                style={{ background: tourData.color }}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                {t.modal.bookNow} 📞
                                            </motion.a>
                                            <a
                                                href="https://wa.me/9720523948920"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="whatsapp-link"
                                                id='whatsapp-link-tours'
                                            >
                                                {t.modal.whatsappLinkText}
                                                <span className="whatsapp-icon">
                                                    <i className="bi bi-whatsapp"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>


                                <section className="gallery-section-modal">
                                    <h3 id='t.modal.gallery'>📸 {t.modal.gallery}</h3>
                                    <div className="modal-gallery-grid">
                                        {tourData.gallery.map((img, index) => (
                                            <motion.div
                                                key={index}
                                                className="gallery-item-modal"
                                                style={{ backgroundImage: `url(${img})` }}
                                                whileHover={{ scale: 1.05 }}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: index * 0.1 }}
                                            />
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Contact
                id="contact"
                language={language}
                languageSettings={languageSettings}
                instaLink={instaLink}
            />
            <Footer language={language} languageSettings={languageSettings} />
        </div>
    );
}

