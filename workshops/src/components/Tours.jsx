import { React, useEffect } from 'react'
import { Link, useNavigate, } from 'react-router-dom';
import './Tours.css';
import FaqTours from './FaqTours';
import ReviewsTours from './ReviewsTours'
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
import thumbNailTours from './images/thumbNailTours.png'
import yam from './videos/yam.mp4'
import porfir from './videos/porfir.mp4'
import tandemCaesarea from './images/tandemCaesarea.jpeg';
import caesareaTour from './videos/caesareaTour.mp4';
import caesareaTour2 from './images/caesareaTour2.jpg';
import telAfek from './images/telAfek.jpg';
import telAfek2 from './images/telAfek2.jpg'
import telAfek3 from './images/telAfek3.jpg'
import telAfek4 from './images/telAfek4.jpg'
import apolonia from './images/apolonia.jpg'
import mekorotHayarkon from './images/mekorotHayarkon.jpg'
import cheesWine from './images/cheesWine.jpeg'
import BeitShearim from './images/BeitShearim.jpeg'
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useRef } from 'react';
import { motion } from "framer-motion";
import MainButtons from './MainButtons';

const images = {
    photo40, photo41, photo42, photo52, photo53, photo54, photo55, photo56,
    photo75, photo197, photo211, photo212, photo213, photo214, photo215, photo255,
    madregot, yam, porfir, tandemCaesarea, caesareaTour, caesareaTour2,
    telAfek, telAfek2, telAfek3, telAfek4, apolonia, mekorotHayarkon, cheesWine, thumbNailTours,
};

const arrPhotoCarousel = [
    photo42, photo52, photo197, photo212, photo213, photo214, photo215, photo255,
    tandemCaesarea, caesareaTour2, telAfek, telAfek2, telAfek3, telAfek4, apolonia, mekorotHayarkon, cheesWine,
];

const phoneNumber = '0523948920';

// Kept as emoji, not icon components — these were never actually rendered
// as react-icons (see EnhancedToursPage below, which reads Object.values(icons)).
const icons = {
    TbVip: '👑',
    // MdOutlineRecommend: '⭐',
    TbMapStar: '🗺️',
    PiCertificate: '🏆',
    FaWaze: '🧭',
    FaInstagram: '📷'
};

const pageTranslations = {
    he: {
        addons: {
            tag: 'העשירו את החוויה',
            title: 'תוספות לסיור',
            subtitle: 'כל תוספת מוזמנת מראש — ניצור עבורכם חוויה מושלמת',
            cta: 'הוסף בוואטסאפ',
            items: [
                { icon: '🧀', title: 'פלטת גבינות ויין', desc: 'גבינות בוטיק, לחם טרי, מטבלים ויין נבחר — עצירה מפנקת בסיום הסיור', price: '300₪', note: 'לכ-5 משתתפים', tag: 'פופולרי' },
                { icon: '🎸', title: 'חוויית מוזיקה חיה', desc: 'מוסיקאי מקצועי מלווה את הסיור — ניגון חי שמוסיף אווירה בלתי נשכחת', price: 'לפי תיאום', note: 'לכל גודל קבוצה', tag: 'חווייתי' },
                { icon: '🍽️', title: 'ארוחה במסעדה מומלצת', desc: 'תיאום שולחן במסעדות הטובות ביותר בקיסריה — אנחנו מסדרים, אתם נהנים', price: 'לפי תיאום', note: 'דורש הזמנה מראש', tag: 'מומלץ' },
            ],
        },
        specialOffer: {
            title: '25% הנחה על סיור נוסף',
            text: 'בתוקף עד שנתיים מהסיור הקודם • חסכו כסף ובואו לחוות עוד!',
            badge: 'הנחה'
        },
        heroEyebrow: 'סיורים מרתקים',
        title: `Michael's Tours`,
        subtitle: "סיורים מרתקים בהתאמה אישית, ניתן לשלב קולינריה משובחת, סדנאות אמן ומוזיקה חיה.",
        icons: ['סיורים פרטיים', 'מסלול לבחירתכם', 'מורה דרך מוסמך', 'מסלולים בכל הארץ'],
        cta: 'לתיאום סיור פרטי',
        sectionTours: 'הסיורים שלנו',
        sectionGallery: 'גלריית תמונות',
        tourTypes: {
            sectionTag: 'בחר את הסיור שלך',
            sectionTitle: 'איזה סיור מתאים לך?',
            tours: [
                {
                    id: 'cesareaTours',
                    icon: '🏛️',
                    accent: '#5a67d8',
                    bg: null,
                    badge: '🔥 פופולרי',
                    badgeType: 'popular',
                    title: 'סיורים בקיסריה – עיר הקיסרים',
                    subtitle: 'קיסריה מריטימה',
                    desc: 'מנמל מפואר לזירת גלדיאטורים — כל אבן כאן זוכרת סיפור אחר',
                    fullDescription: 'קיסריה מריטימה - עיר הנמל המפוארת מזמינה אתכם למסע מרתק בזמן. במהלך הסיור נכיר את עתיקות קיסריה באופן מרתק, ונכיר גם מקומות פחות מוכרים ומרתקים לא פחות.',
                    stats: [{ v: '5.0★', l: 'דירוג' }, { v: 'מ-450₪', l: 'לסיור' }, { v: '1–2h', l: 'משך' }],
                    price: 'מ-₪450 לסיור',
                    rating: 5.0,
                    reviewsCount: 40,
                    highlights: ['פסלים עתיקים', 'פסיפסים מרהיבים', 'נמל קיסריה העתיק', 'העיר הצלבנית', 'המזח העתיק'],
                    includes: ['מדריך מוסמך ומומחה', 'כניסה לאתרים נסתרים', 'סיפורים וחידות מרתקים', 'תצפיות ייחודיות'],
                    image: caesareaTour2,
                    dedicatedPage: null,
                },
                {
                    id: 'bikeTours',
                    icon: '🚴',
                    accent: '#0288d1',
                    bg: null,
                    badge: '⚡ חוויתי',
                    badgeType: 'experiential',
                    title: 'סיורי אופניים בקיסריה',
                    subtitle: 'קיסריה מריטימה',
                    desc: 'רכיבה פנורמית לאורך חוף הים, בין אתרים ארכיאולוגיים עוצרי נשימה',
                    fullDescription: 'סיור אופניים מרתק המשלב רכיבה נעימה עם גילוי האתרים הארכיאולוגיים המרתקים של קיסריה. נרכב לאורך חוף הים, נבקר באקוודוקט הרומי ונעצור לקפה מול הגלים. המחיר הבסיסי הוא לסיור זוגי, וגדל בהתאם לגודל הקבוצה.',
                    stats: [{ v: '4.8★', l: 'דירוג' }, { v: 'מ-500₪', l: 'לסיור' }, { v: '1.5–2h', l: 'משך' }],
                    price: 'מ-₪500 לסיור',
                    rating: 4.8,
                    reviewsCount: 20,
                    highlights: ['רכיבה לאורך חוף קיסריה', 'תצפית על נמל קיסריה העתיק', 'ביקור באקוודוקט הרומי', 'הפסקת קפה מול הים', 'נופים מרשימים', 'פסיפסים מרהיבים'],
                    includes: ['אופניים איכותיים', 'קסדת בטיחות', 'מדריך מוסמך ומנוסה', 'ביטוח', 'כניסה לאתרים סודיים'],
                    image: tandemCaesarea,
                    dedicatedPage: '/bike-tours',
                },
                {
                    id: 'yarkon',
                    icon: '🌿',
                    accent: '#2e7d32',
                    bg: null,
                    badge: '🌿 מגוון',
                    badgeType: 'varied',
                    title: 'תל אפק ומקורות הירקון',
                    subtitle: 'מרכז הארץ',
                    desc: 'מכנענים ועד עות\'מאנים — היסטוריה וטבע בסיור אחד בלתי נשכח',
                    fullDescription: 'גלו את האתרים הנסתרים והמרתקים ביותר במרכז הארץ. מתל אפק העתיק ועד מקורות הירקון — 4,000 שנות היסטוריה לצד טבע שופע ונחל זורם.',
                    stats: [{ v: '4.8★', l: 'דירוג' }, { v: 'מ-450₪', l: 'לסיור' }, { v: '1–2h', l: 'משך' }],
                    price: 'מ-₪450 לסיור',
                    rating: 4.8,
                    reviewsCount: 24,
                    highlights: ['תל אפק - עיר הכנענים העתיקה', 'אפולוניה - מבצר צלבני על הים', 'מקורות הירקון - טיול טבע מהמם ומרגיע'],
                    includes: ['מדריך מוסמך ומומחה', 'כניסה לאתרים נסתרים', 'סיפורים וחידות מרתקים', 'תצפיות ייחודיות'],
                    image: telAfek4,
                    dedicatedPage: '/foot-tours',
                },
                {
                    id: 'galilee',
                    icon: '🏛️',
                    accent: '#7b1fa2',
                    bg: null,
                    badge: '✦ מיוחד',
                    badgeType: 'special',
                    title: 'בית שערים וציפורי',
                    subtitle: 'הגליל התחתון',
                    desc: 'קברי חציבה יהודיים ופסיפסים מדהימים — שני אתרי מורשת עולמיים בסיור אחד',
                    fullDescription: 'בית שערים — אתר עולמי של קברי חציבה יהודיים מהתקופה הרומית. ציפורי — בירת הגליל העתיקה עם פסיפסים מדהימים ובית כנסת שמור. שני אתרים, סיור אחד בלתי נשכח.',
                    stats: [{ v: '4.9★', l: 'דירוג' }, { v: 'מ-600₪', l: 'לסיור' }, { v: '1–2h', l: 'משך' }],
                    price: 'מ-₪600 לסיור',
                    rating: 4.9,
                    reviewsCount: 18,
                    highlights: ['בית שערים – קברים יהודיים חשובים ומפוארים', 'ציפורי – בירת הגליל העתיקה', 'פסיפסים מהתקופה הרומית', 'בית כנסת שמור'],
                    includes: ['מדריך מוסמך ומומחה', 'כניסה לאתרים', 'סיפורים מרתקים', 'תצפיות ייחודיות'],
                    image: BeitShearim,
                    dedicatedPage: null,
                },
            ],
        },
        statsLabels: {
            tours: 'סיורים מוצלחים',
            customers: 'מטיילים מרוצים',
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
            reviews: 'ביקורות',
            moreDetails: 'לפרטים נוספים',
            fullPage: 'לעמוד המלא ←',
        }
    },
    en: {
        addons: {
            tag: 'Enhance Your Experience',
            title: 'Tour Add-ons',
            subtitle: 'Every add-on is arranged in advance — we create a perfect experience for you',
            cta: 'Add via WhatsApp',
            items: [
                { icon: '🧀', title: 'Cheese & Wine Platter', desc: 'Artisan cheeses, fresh bread, dips & wine — an indulgent stop at the end of the tour', price: '₪300', note: 'For ~5 participants', tag: 'Popular' },
                { icon: '🎸', title: 'Live Music Experience', desc: 'A professional musician joins the tour — live music adding a unique, unforgettable atmosphere', price: 'By arrangement', note: 'Any group size', tag: 'Experience' },
                { icon: '🍽️', title: 'Restaurant Reservation', desc: "Table at Caesarea's best restaurants — we arrange everything, you enjoy", price: 'By arrangement', note: 'Advance booking required', tag: 'Recommended' },
            ],
        },
        specialOffer: {
            title: '25% Off Your Next Tour',
            text: 'Valid up to 2 years from your previous tour • Save money and experience more!',
            badge: 'OFF'
        },
        heroEyebrow: 'Fascinating tours',
        title: `Michael's Tours`,
        subtitle: "Fascinating tours for small and large groups you absolutely don't want to miss",
        icons: ['Private Tours', 'Customized route', 'Licensed guide', 'Routes across Israel'],
        cta: 'Book a private tour',
        sectionTours: 'Our Tours',
        sectionGallery: 'Photo Gallery',
        tourTypes: {
            sectionTag: 'Choose Your Tour',
            sectionTitle: 'Which Tour is Right for You?',
            tours: [
                {
                    id: 'cesareaTours',
                    icon: '🏛️',
                    accent: '#5a67d8',
                    bg: null,
                    badge: '🔥 Popular',
                    badgeType: 'popular',
                    title: 'Caesarea Tours – City of Emperors',
                    subtitle: 'Caesarea Maritima',
                    desc: 'From magnificent harbor to gladiator arena — every stone remembers a different empire',
                    fullDescription: 'Caesarea Maritima - the magnificent port city invites you on a fascinating journey through time. Discover hidden and breathtaking spots most visitors never see.',
                    stats: [{ v: '5.0★', l: 'Rating' }, { v: 'From ₪450', l: 'Per Tour' }, { v: '1–2h', l: 'Duration' }],
                    price: 'From ₪450 per tour',
                    rating: 5.0,
                    reviewsCount: 40,
                    highlights: ['Ancient statues', 'Stunning mosaics', 'Ancient Caesarea port', 'The Crusader city', 'The ancient pier'],
                    includes: ['Licensed, experienced guide', 'Access to hidden spots', 'Riddles and fascinating stories', 'Impressive viewpoints'],
                    image: caesareaTour2,
                    dedicatedPage: null,
                },
                {
                    id: 'bikeTours',
                    icon: '🚴',
                    accent: '#0288d1',
                    bg: null,
                    badge: '⚡ Experiential',
                    badgeType: 'experiential',
                    title: 'Bike Tours in Caesarea',
                    subtitle: 'Caesarea Maritima',
                    desc: 'Panoramic cycling along the blue coastline, between breathtaking archaeological sites',
                    fullDescription: 'A fascinating bike tour combining pleasant cycling with discovering Caesarea\'s remarkable archaeological sites. We ride along the coast, visit the Roman aqueduct, and stop for coffee by the waves. The base price is for a couple\'s tour, and increases with group size.',
                    stats: [{ v: '4.8★', l: 'Rating' }, { v: 'From ₪500', l: 'Per Tour' }, { v: '1.5–2h', l: 'Duration' }],
                    price: 'From ₪500 per tour',
                    rating: 4.8,
                    reviewsCount: 20,
                    highlights: ['Riding along the Caesarea coast', 'View of the ancient port', 'Visit to the Roman aqueduct', 'Coffee break by the sea', 'Impressive views', 'Spectacular mosaics'],
                    includes: ['Quality bicycles', 'Safety helmet', 'Licensed guide', 'Insurance', 'Access to secret sites'],
                    image: tandemCaesarea,
                    dedicatedPage: '/bike-tours',
                },
                {
                    id: 'yarkon',
                    icon: '🌿',
                    accent: '#2e7d32',
                    bg: null,
                    badge: '🌿 Diverse',
                    badgeType: 'varied',
                    title: 'Tel Afek & Yarkon Springs',
                    subtitle: 'Central Israel',
                    desc: 'From Canaanites to Ottomans — history and nature in one unforgettable tour',
                    fullDescription: 'Discover the most hidden and fascinating sites in central Israel. From ancient Tel Afek to the Yarkon Springs — 4,000 years of history alongside lush nature and a flowing river.',
                    stats: [{ v: '4.8★', l: 'Rating' }, { v: 'From ₪450', l: 'Per Tour' }, { v: '1–2h', l: 'Duration' }],
                    price: 'From ₪450 per tour',
                    rating: 4.8,
                    reviewsCount: 24,
                    highlights: ['Tel Afek – the ancient Canaanite city', 'Apollonia – a Crusader fortress on the sea', 'Yarkon Springs – a stunning nature walk'],
                    includes: ['Professional guide', 'Access to hidden spots', 'Fascinating stories', 'Unique viewpoints'],
                    image: apolonia,
                    dedicatedPage: '/foot-tours',
                },
                {
                    id: 'galilee',
                    icon: '🏛️',
                    accent: '#7b1fa2',
                    bg: null,
                    badge: '✦ Exclusive',
                    badgeType: 'special',
                    title: 'Beit She\'arim & Tzippori',
                    subtitle: 'Lower Galilee',
                    desc: 'Ancient burial caves and stunning mosaics — two UNESCO World Heritage sites in one tour',
                    fullDescription: 'Beit She\'arim — a UNESCO World Heritage site of Jewish burial caves from the Roman period. Tzippori — the ancient capital of the Galilee with stunning mosaics and a preserved synagogue.',
                    stats: [{ v: '4.9★', l: 'Rating' }, { v: 'From ₪600', l: 'Per Tour' }, { v: '1–2h', l: 'Duration' }],
                    price: 'From ₪600 per tour',
                    rating: 4.9,
                    reviewsCount: 18,
                    highlights: ['Beit She\'arim – Jewish burial caves', 'Tzippori – ancient capital of the Galilee', 'Roman-era mosaics', 'Preserved ancient synagogue'],
                    includes: ['Expert licensed guide', 'Site entry', 'Fascinating stories', 'Unique viewpoints'],
                    image: BeitShearim,
                    dedicatedPage: null,
                },
            ],
        },
        statsLabels: {
            tours: 'Successful Tours',
            customers: 'Happy Travelers',
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
            reviews: 'reviews',
            moreDetails: 'More Details',
            fullPage: '→ Full Page',
        }
    }
};

let instaLink = "https://www.instagram.com/art_music_explore/";

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting && !isVisible) setIsVisible(true); },
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
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return <div ref={ref} className="animated-counter">{count}{suffix}</div>;
};

const TourCard = ({ data, t, language, index }) => {
    const [open, setOpen] = useState(false);
    const direction = language === 'he' ? 'rtl' : 'ltr';

    const openModal = () => {
        setOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            <motion.div
                className="uc-card"
                style={{ '--uc-accent': data.accent }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                onClick={openModal}
            >
                <div className="uc-img-wrap">
                    <div className="uc-img-accent" />
                    {data.badge && (
                        <div className={`uc-badge uc-badge-${data.badgeType}`}>
                            {data.badge}
                        </div>
                    )}
                    <img src={data.image} alt={data.title} className="uc-img" />
                    <div className="uc-img-overlay" />
                    <div className="uc-rating-pill">
                        ★ {data.rating} ({data.reviewsCount} {t.modal.reviews})
                    </div>
                    <div className="uc-icon-badge">{data.icon}</div>
                </div>
                <div className="uc-body">
                    <p className="uc-sub">{data.subtitle}</p>
                    <h3 className="uc-title">{data.title}</h3>
                    <p className="uc-desc">{data.desc}</p>
                    <div className="uc-stats">
                        {data.stats.map((s, i) => (
                            <div key={i} className="uc-stat">
                                <strong>{s.v}</strong>
                                <span>{s.l}</span>
                            </div>
                        ))}
                    </div>
                    <div className="uc-footer">
                        <span className="uc-price">{data.price}</span>
                        <span className="uc-cta-hint"> {t.modal.moreDetails} </span>
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="uc-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="uc-modal"
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 60 }}
                            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                            onClick={e => e.stopPropagation()}
                            dir={direction}
                        >
                            <div className="uc-modal-hero">
                                <img src={data.image} alt={data.title} className="uc-modal-img" />
                                <div className="uc-modal-hero-overlay">
                                    <span className="uc-modal-eyebrow">{data.subtitle}</span>
                                    <h2 className="uc-modal-title">{data.title}</h2>
                                    <div className="uc-modal-rating-pill">
                                        ★ {data.rating}/5 ({data.reviewsCount} {t.modal.reviews})
                                    </div>
                                </div>
                                <button className="uc-close" onClick={closeModal}>✕</button>
                            </div>

                            <div className="uc-modal-body">
                                <div className="uc-modal-stats">
                                    {data.stats.map((s, i) => (
                                        <div key={i} className="uc-modal-stat">
                                            <strong style={{ color: data.accent }}>{s.v}</strong>
                                            <span>{s.l}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="uc-modal-desc">{data.fullDescription}</p>

                                <h4 className="uc-modal-section-title">✨ {t.modal.highlights}</h4>
                                <ul className="uc-highlights">
                                    {data.highlights.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            style={{ borderColor: data.accent + '99' }}
                                            initial={{ opacity: 0, x: language === 'he' ? 10 : -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.06 }}
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>

                                <h4 className="uc-modal-section-title">🎁 {t.modal.includes}</h4>
                                <ul className="uc-includes">
                                    {data.includes.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.06 }}
                                        >
                                            ✅ {item}
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Actions */}
                                <div className="uc-modal-actions">
                                    <a
                                        href="https://wa.me/9720523948920"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="uc-btn-primary"
                                        style={{ background: data.accent }}
                                    >
                                        {t.modal.bookNow}
                                        <span className="uc-whatsapp-icon">
                                            <i className="bi bi-whatsapp" />
                                        </span>
                                    </a>
                                    <a
                                        href={`tel:0523948920`}
                                        className="uc-btn-secondary"
                                        style={{ borderColor: data.accent, color: data.accent }}
                                    >
                                        📞 {t.modal.bookNow}
                                    </a>
                                </div>

                                {data.dedicatedPage && (
                                    <Link
                                        to={data.dedicatedPage}
                                        className="uc-full-page-link"
                                        style={{ color: data.accent, borderColor: data.accent + '44' }}
                                        onClick={() => { closeModal(); window.scrollTo(0, 0); }}
                                    >
                                        {t.modal.fullPage}
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default function EnhancedToursPage({ language = 'he', languageSettings }) {
    const [scrollY, setScrollY] = useState(0);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const lastScrollY = useRef(0);

    // Real lazy-loading for the three videos section: the <video> tags are
    // only rendered (and therefore only start downloading) once this div
    // actually scrolls into view, instead of on page load.
    const [videosVisible, setVideosVisible] = useState(false);
    const videosSectionRef = useRef(null);

    useEffect(() => {
        const el = videosSectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVideosVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' } // start a little before it's fully in view
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const t = pageTranslations[language] || pageTranslations.he;
    const tt = t.tourTypes;
    const direction = language === 'he' ? 'rtl' : 'ltr';

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);
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

    return (
        <div className="enhanced-tours-page" dir={direction}>

            {/* HERO */}
            <section className="hero-section-tours">
                <div className="hero-bg" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
                    <video src={caesareaTour} poster={thumbNailTours} autoPlay loop muted playsInline className="hero-video" />
                    <div className="hero-overlay" />
                </div>
                <div className="hero-content-tours">
                    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
                        <span className="hero-eyebrow">{t.heroEyebrow}</span>
                        <h1 className="hero-title-tours">{t.title}</h1>
                        <p className="hero-subtitle-tours">{t.subtitle}</p>
                        <MainButtons language={language} languageSettings={languageSettings} />
                        <ReviewsTours language={language} languageSettings={languageSettings} />
                    </motion.div>
                </div>
            </section>

            {/* TOUR CARDS */}
            <section className="uc-section" dir={direction}>
                <div className="uc-header">
                    <span className="uc-eyebrow">{tt.sectionTag}</span>
                    <h2 className="uc-section-title">{tt.sectionTitle}</h2>
                </div>
                <div className="uc-grid">
                    {tt.tours.map((tour, index) => (
                        <TourCard
                            key={tour.id}
                            data={tour}
                            t={t}
                            language={language}
                            index={index}
                        />
                    ))}
                </div>
            </section>

                  {/* ADD-ONS — צבעי הדף: לבן / כחול-אינדיגו */}
                  <section className="tours-addons-section">
                <div className="tours-addons-header">
                    <span className="tours-addons-eyebrow">{t.addons.tag}</span>
                    <h2 className="tours-addons-title">{t.addons.title}</h2>
                    <p className="tours-addons-subtitle">{t.addons.subtitle}</p>
                </div>
                <div className="tours-addons-grid">
                    {t.addons.items.map((item, i) => (
                        <motion.div
                            key={i}
                            className="tours-addon-card"
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <span className="tours-addon-card__tag">{item.tag}</span>
                            <div className="tours-addon-card__icon">{item.icon}</div>
                            <h4 className="tours-addon-card__title">{item.title}</h4>
                            <p className="tours-addon-card__desc">{item.desc}</p>
                            <div className="tours-addon-card__footer">
                                <div>
                                    <span className="tours-addon-card__price">{item.price}</span>
                                    <span className="tours-addon-card__note">{item.note}</span>
                                </div>
                                <a
                                    href="https://wa.me/9720523948920"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="tours-addon-card__btn"
                                >
                                    {t.addons.cta}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* THREE VIDEOS — lazily mounted, see videosVisible above */}
            <div id='threeToursVideosDiv' ref={videosSectionRef}>
                {videosVisible && (
                    <>
                        <video id="madregot" src={madregot} autoPlay loop muted preload="none" playsInline
                            controls={false} disablePictureInPicture
                            controlsList="nodownload nofullscreen noremoteplayback"
                            style={{ pointerEvents: 'none' }} />
                        <video id="yam" src={yam} autoPlay loop muted preload="none" playsInline
                            controls={false} disablePictureInPicture
                            controlsList="nodownload nofullscreen noremoteplayback"
                            style={{ pointerEvents: 'none' }} />
                        <video id="porfir" src={porfir} autoPlay loop muted preload="none" playsInline
                            controls={false} disablePictureInPicture
                            controlsList="nodownload nofullscreen noremoteplayback"
                            style={{ pointerEvents: 'none' }} />
                    </>
                )}
            </div>

            {/* PHOTO CAROUSEL */}
            <PhotoCarousel arrPhotoCarousel={arrPhotoCarousel} />

            {/* FEATURES */}
            <section className="features-section-tours">
                <div className="features-grid-tours">
                    {t.icons.map((text, index) => (
                        <motion.div key={index} className="feature-card-tours"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, scale: 1.02 }}>
                            <div className="feature-icon-tours">{Object.values(icons)[index]}</div>
                            <p>{text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SPECIAL OFFER */}
            <section className="special-offer-section">
                <motion.div className="special-offer-card"
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }} viewport={{ once: true }}>
                    <div className="offer-icon-large">🎉</div>
                    <div className="offer-main-content">
                        <h3 className="offer-main-title">
                            {language === 'he' ? '25% הנחה על סיור נוסף' : '25% Discount on another Tour'}
                        </h3>
                        <p className="offer-main-text">
                            {language === 'he'
                                ? 'בתוקף עד שנתיים מהסיור הקודם • חסכו כסף וחזרו לחוות עוד!'
                                : 'Valid up to 2 years from previous tour • Save money and come back for more!'}
                        </p>
                    </div>
                    <div className="offer-discount-badge">
                        <span className="discount-amount">25%</span>
                        <span className="discount-text">{language === 'he' ? 'הנחה' : 'OFF'}</span>
                    </div>
                </motion.div>
            </section>

      

            <FaqTours language={language} languageSettings={languageSettings} />
            <Contact id="contact" language={language} languageSettings={languageSettings} instaLink={instaLink} />
            <Footer language={language} languageSettings={languageSettings} />
        </div>
    );
}