import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Contact from './Contact';
import Footer from './Footer';
import ReviewsTours from './ReviewsTours';
import MainButtons from './MainButtons';

import tandemCaesarea from './images/tandemCaesarea.jpeg';
import photo213 from './images/photo213.jpg';
import photo214 from './images/photo214.jpg';
import photo215 from './images/photo215.jpg';
import caesareaTour2 from './images/caesareaTour2.jpg';
import cheesWine from './images/cheesWine.jpeg';
import caesareaTour from './videos/caesareaTour.mp4';
import thumbNailTours from './images/thumbNailTours.png';

const instaLink = 'https://www.instagram.com/art_music_explore/';

const T = {
    he: {
        dir: 'rtl',
        hero: {
            eyebrow: 'קיסריה מריטימה',
            title: 'סיורי אופניים',
            subtitle: 'רכיבה פנורמית לאורך חוף הים התיכון, בין אתרים ארכיאולוגיים עוצרי נשימה',
        },
        stats: [
            { v: '20+', l: 'ביקורות מצוינות' },
            { v: '4.8★', l: 'דירוג ממוצע' },
            { v: '1.5–2h', l: 'משך הסיור' },
            { v: '250₪', l: 'למשתתף' },
        ],
        about: {
            tag: 'על הסיור',
            title: 'חוויה שמשלבת ים, היסטוריה וטבע',
            body: 'סיור האופניים שלנו בקיסריה הוא חוויה ייחודית שמשלבת רכיבה נינוחה עם גילוי האתרים הארכיאולוגיים המרהיבים. נרכב לאורך קו החוף הציורי, נגלה אתרים סודיים שלא מופיעים בשום מדריך, ונהנה מנופים שיישארו חרוטים בזיכרונכם.',
            features: [
                { icon: '🚴', title: 'אופניים איכותיים', desc: 'ציוד מקצועי ומתוחזק' },
                { icon: '⛑️', title: 'ציוד בטיחות', desc: 'יש קסדות לכולם' },
                { icon: '🏛️', title: 'אתרים נסתרים', desc: 'כניסה לאזורים בלעדיים' },
                { icon: '☕', title: 'הפסקת קפה', desc: 'עצירה מול הים' },
            ],
        },
        highlights: {
            tag: 'מה נראה',
            title: 'עצירות מרהיבות לאורך המסלול',
            items: [
                { icon: '🌊', title: 'חוף קיסריה הציורי', desc: 'רכיבה עם גלי הים לצדנו' },
                { icon: '⚓', title: 'נמל קיסריה העתיק', desc: 'הנמל המפואר שהוקם לכבוד הקיסר' },
                { icon: '🏛️', title: 'האקוודוקט הרומי', desc: 'פלא הנדסי בן 2,000 שנה' },
                { icon: '🎨', title: 'פסיפסים מרהיבים', desc: 'אמנות רומית מרהיבה' },
                { icon: '🏰', title: 'העיר הצלבנית', desc: 'חומות מימי הביניים' },
                { icon: '🌅', title: 'תצפיות ייחודיות', desc: 'נקודות צילום מושלמות' },
            ],
        },
        includes: {
            tag: 'מה כלול',
            title: 'הכל כלול במחיר',
            items: ['אופניים איכותיים ומתוחזקים', 'קסדת בטיחות מותאמת', 'מדריך מוסמך ומנוסה',
            , 'כניסה לאתרים סודיים', 'סיפורים וחידות מרתקים', 'הפסקת קפה מול הים', 'תמונות זכרון ייחודיות'],
        },
        addons: {
            tag: 'העשירו את החוויה',
            title: 'תוספות לסיור',
            subtitle: 'כל תוספת מוזמנת מראש — ניצור עבורכם חוויה מושלמת',
            cta: 'הוסף בוואטסאפ',
            items: [
                { icon: '🧀', title: 'פלטת גבינות ויין', desc: 'גבינות בוטיק, לחם טרי, מטבלים ויין נבחר — עצירה מפנקת מול הים', price: '300₪', note: 'לכ-5 משתתפים', tag: 'פופולרי' },
                { icon: '🎸', title: 'נגינה בגיטרה', desc: 'מוסיקאי מקצועי מלווה את הסיור — ניגון חי שמוסיף אווירה בלתי נשכחת', price: 'לפי תיאום', note: 'לכל גודל קבוצה', tag: 'חווייתי' },
                { icon: '🍽️', title: 'ארוחה במסעדה מומלצת', desc: 'תיאום שולחן במסעדות הטובות ביותר בקיסריה — אנחנו מסדרים, אתם נהנים', price: 'לפי תיאום', note: 'דורש הזמנה מראש', tag: 'מומלץ' },
            ],
        },
        gallery: { tag: 'גלריה', title: 'רגעים מהסיור' },
        offer: { title: '25% הנחה על סיור נוסף', desc: 'בתוקף עד שנתיים מהסיור הקודם • חסכו כסף וחזרו לחוות עוד!', badge: 'הנחה' },
        book: { tag: 'הזמנה', title: 'מוכנים לצאת לדרך?', subtitle: 'צרו קשר ונתאים לכם את הסיור המושלם', whatsapp: 'הזמינו בוואטסאפ', call: 'התקשרו עכשיו' },
    },
    en: {
        dir: 'ltr',
        hero: {
            eyebrow: 'Caesarea Maritima',
            title: 'Bike Tours',
            subtitle: 'Panoramic cycling along the blue coastline, between breathtaking archaeological wonders',
        },
        stats: [
            { v: '20+', l: 'Excellent Reviews' },
            { v: '4.8★', l: 'Average Rating' },
            { v: '1.5–2h', l: 'Duration' },
            { v: '₪250', l: 'Per Person' },
        ],
        about: {
            tag: 'About the Tour',
            title: 'Sea, History & Nature — All in One',
            body: "Our Caesarea bike tour combines pleasant cycling with discovering the city's stunning archaeological sites. We ride the scenic coastline, discover secret spots no guidebook mentions, and enjoy views you'll remember for years.",
            features: [
                { icon: '🚴', title: 'Quality Bikes', desc: 'Professional & maintained' },
                { icon: '⛑️', title: 'Safety Gear', desc: 'Helmets & vests for all' },
                { icon: '🏛️', title: 'Hidden Sites', desc: 'Access to exclusive areas' },
                { icon: '☕', title: 'Coffee Break', desc: 'Stop by the sea' },
            ],
        },
        highlights: {
            tag: "What We'll See",
            title: 'Stunning Stops Along the Route',
            items: [
                { icon: '🌊', title: 'Scenic Caesarea Coast', desc: 'Riding with the sea beside us' },
                { icon: '⚓', title: 'Ancient Caesarea Port', desc: "King Herod's magnificent harbor" },
                { icon: '🏛️', title: 'Roman Aqueduct', desc: '2,000-year-old engineering marvel' },
                { icon: '🎨', title: 'Stunning Mosaics', desc: 'Roman art in stone' },
                { icon: '🏰', title: 'Crusader City', desc: 'Medieval walls & fortifications' },
                { icon: '🌅', title: 'Unique Viewpoints', desc: 'Perfect photography spots' },
            ],
        },
        includes: {
            tag: "What's Included",
            title: 'Everything in the Price',
            items: ['Quality, maintained bicycles', 'Fitted safety helmet', 'Licensed guide',
            , 'Access to secret sites', 'Fascinating stories & riddles', 'Coffee break by the sea', 'Memory photos'],
        },
        addons: {
            tag: 'Enhance Your Experience',
            title: 'Tour Add-ons',
            subtitle: 'Every add-on is arranged in advance — we create a perfect experience for you',
            cta: 'Add via WhatsApp',
            items: [
                { icon: '🧀', title: 'Cheese & Wine Platter', desc: 'Artisan cheeses, fresh bread, dips & wine — an indulgent seaside stop', price: '₪300', note: 'For ~5 participants', tag: 'Popular' },
                { icon: '🎸', title: 'Live Guitar Music', desc: 'A professional musician joins the tour — live music adding an unforgettable atmosphere', price: 'By arrangement', note: 'Any group size', tag: 'Experience' },
                { icon: '🍽️', title: 'Restaurant Reservation', desc: "Table at Caesarea's best restaurants — we arrange everything, you enjoy", price: 'By arrangement', note: 'Advance booking required', tag: 'Recommended' },
            ],
        },
        gallery: { tag: 'Gallery', title: 'Moments from the Tour' },
        offer: { title: '25% Off another Tour', desc: 'Valid up to 2 years from your previous tour • Save and experience more!', badge: 'OFF' },
        book: { tag: 'Booking', title: 'Ready to Ride?', subtitle: "Contact us and we'll tailor the perfect tour for you", whatsapp: 'Book via WhatsApp', call: 'Call Now' },
    },
};

const galleryImages = [tandemCaesarea, photo213, photo214, photo215, caesareaTour2];

export default function BikeTours({ language = 'he', languageSettings }) {
    const t = T[language];
    const dir = t.dir;
    const [scrollY, setScrollY] = useState(0);
    const [activeImg, setActiveImg] = useState(null);

    useEffect(() => {
        const fn = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', fn, { passive: true });
        return () => window.removeEventListener('scroll', fn);
    }, []);

    return (
        <div className="bt-page" dir={dir}>

            {/* HERO */}
            <section className="bt-hero">
                <div className="bt-hero__bg" style={{ transform: `translateY(${scrollY * 0.4}px)` }}>
                    <video src={caesareaTour} poster={thumbNailTours} autoPlay loop muted playsInline className="bt-hero__video" />
                    <div className="bt-hero__overlay" />
                </div>
                <div className="bt-hero__content">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
                        <span className="bt-eyebrow">{t.hero.eyebrow}</span>
                        <h1 className="bt-hero__title">{t.hero.title}</h1>
                        <p className="bt-hero__subtitle">{t.hero.subtitle}</p>
                        <MainButtons language={language} languageSettings={languageSettings} />
                        <ReviewsTours language={language} languageSettings={languageSettings} />
                    </motion.div>
                </div>
                <div className="bt-hero__stats">
                    {t.stats.map((s, i) => (
                        <motion.div key={i} className="bt-stat"
                            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + i * 0.1 }}>
                            <strong>{s.v}</strong><span>{s.l}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ABOUT */}
            <section className="bt-section bt-about">
                <div className="bt-about__inner">
                    <div className="bt-about__text">
                        <span className="bt-tag">{t.about.tag}</span>
                        <h2 className="bt-section-title">{t.about.title}</h2>
                        <p className="bt-body-text">{t.about.body}</p>
                    </div>
                    <div className="bt-features-grid">
                        {t.about.features.map((f, i) => (
                            <motion.div key={i} className="bt-feature"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}>
                                <span>{f.icon}</span>
                                <strong>{f.title}</strong>
                                <p>{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HIGHLIGHTS */}
            <section className="bt-section bt-highlights-section">
                <span className="bt-tag bt-tag--teal">{t.highlights.tag}</span>
                <h2 className="bt-section-title bt-section-title--light">{t.highlights.title}</h2>
                <div className="bt-highlights-grid">
                    {t.highlights.items.map((item, i) => (
                        <motion.div key={i} className="bt-highlight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.07 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03 }}>
                            <span className="bt-highlight__icon">{item.icon}</span>
                            <div><strong>{item.title}</strong><p>{item.desc}</p></div>
                        </motion.div>
                    ))}
                </div>
            </section>


            {/* GALLERY */}
            <section className="bt-section bt-gallery-section">
                <span className="bt-tag bt-tag--teal">{t.gallery.tag}</span>
                <h2 className="bt-section-title bt-section-title--light">{t.gallery.title}</h2>
                <div className="bt-gallery-grid">
                    {galleryImages.map((img, i) => (
                        <motion.div key={i} className={`bt-gallery-item bt-gallery-item--${i}`}
                            whileHover={{ scale: 1.03 }}
                            onClick={() => setActiveImg(img)}
                            style={{ backgroundImage: `url(${img})` }} />
                    ))}
                </div>
            </section>

            {/* LIGHTBOX */}
            <AnimatePresence>
                {activeImg && (
                    <motion.div className="bt-lightbox"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setActiveImg(null)}>
                        <motion.img src={activeImg} alt=""
                            initial={{ scale: 0.82 }} animate={{ scale: 1 }} exit={{ scale: 0.82 }}
                            transition={{ type: 'spring', stiffness: 220 }} />
                        <button className="bt-lightbox__close" onClick={() => setActiveImg(null)}>✕</button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ADD-ONS */}
            <section className="bt-section bt-addons-section">
                <div className="bt-section-header">
                    <span className="bt-tag">{t.addons.tag}</span>
                    <h2 className="bt-section-title">{t.addons.title}</h2>
                    <p className="bt-addons-subtitle">{t.addons.subtitle}</p>
                </div>
                <div className="bt-addons-grid">
                    {t.addons.items.map((item, i) => (
                        <motion.div key={i} className="bt-addon-card"
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}>
                            <span className="bt-addon-card__tag">{item.tag}</span>
                            <div className="bt-addon-card__icon">{item.icon}</div>
                            <h4 className="bt-addon-card__title">{item.title}</h4>
                            <p className="bt-addon-card__desc">{item.desc}</p>
                            <div className="bt-addon-card__footer">
                                <div>
                                    <span className="bt-addon-card__price">{item.price}</span>
                                    <span className="bt-addon-card__note">{item.note}</span>
                                </div>
                                <a href="https://wa.me/9720523948920" target="_blank" rel="noopener noreferrer"
                                    className="bt-addon-card__btn">{t.addons.cta}</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* OFFER */}
            <section className="bt-offer-section">
                <motion.div className="bt-offer-card"
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <div className="bt-offer-card__emoji">🎉</div>
                    <div>
                        <h3>{t.offer.title}</h3>
                        <p>{t.offer.desc}</p>
                    </div>
                    <div className="bt-offer-card__badge">
                        <span>25%</span><small>{t.offer.badge}</small>
                    </div>
                </motion.div>
            </section>

            {/* BOOK */}
            <section className="bt-book-section">
                <span className="bt-tag bt-tag--teal">{t.book.tag}</span>
                <h2 className="bt-section-title bt-section-title--light">{t.book.title}</h2>
                <p className="bt-book-subtitle">{t.book.subtitle}</p>
                <div className="bt-book-actions">
                    <motion.a href="https://wa.me/9720523948920" target="_blank" rel="noopener noreferrer"
                        className="bt-btn bt-btn--wa" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                        <i className="bi bi-whatsapp" /> {t.book.whatsapp}
                    </motion.a>
                    <motion.a href="tel:0523948920" className="bt-btn bt-btn--call"
                        whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                        📞 {t.book.call}
                    </motion.a>
                </div>
            </section>

            <Contact id="contact" language={language} languageSettings={languageSettings} instaLink={instaLink} />
            <Footer language={language} languageSettings={languageSettings} />

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;700;900&family=Rubik:wght@300;400;500;600;700&display=swap');

                .bt-page {
                    font-family: 'Rubik', sans-serif;
                    background: #0c1618; color: #ddeef0;
                    overflow-x: hidden;
                }

                /* HERO */
                .bt-hero {
                    position: relative; height: 100vh; min-height: 580px;
                    display: flex; flex-direction: column;
                    align-items: center; justify-content: center; overflow: hidden;
                }
                .bt-hero__bg { position: absolute; inset: 0; z-index: 0; }
                .bt-hero__video { width: 100%; height: 100%; object-fit: cover; }
                .bt-hero__overlay {
                    position: absolute; inset: 0;
                    background: linear-gradient(to bottom,
                        rgba(4,18,22,.45) 0%, rgba(8,24,30,.8) 55%, rgba(12,22,24,.97) 100%);
                }
                .bt-hero__content {
                    position: relative; z-index: 2; text-align: center;
                    max-width: 760px; padding: 80px 1.5rem 1rem;
                    top:65px
                }
                .bt-eyebrow {
                    display: inline-block; margin-bottom: 1rem;
                    font-size: .78rem; font-weight: 500; letter-spacing: 3px;
                    text-transform: uppercase; color: #2AA0B4;
                    border: 1px solid rgba(42,160,180,.35);
                    padding: .32rem 1rem; border-radius: 100px;
                }
                .bt-hero__title {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: clamp(3.2rem, 9vw, 6.5rem);
                    font-weight: 900; line-height: .95; color: #f0fafb;
                    margin-bottom: 1.1rem;
                    text-shadow: 0 4px 30px rgba(0,0,0,.5);
                }
                .bt-hero__subtitle {
                    font-size: clamp(.95rem, 2.5vw, 1.2rem);
                    opacity: .78; line-height: 1.7;
                    max-width: 540px; margin: 0 auto 2rem;
                }
                .bt-hero__stats {
                    position: relative; z-index: 2;
                    display: flex; flex-wrap: wrap; justify-content: center;
                    background: rgba(42,160,180,.1);
                    border: 1px solid rgba(42,160,180,.25);
                    border-radius: 18px; overflow: hidden;
                    max-width: 580px; margin: 2.5rem auto 0;
                }
                .bt-stat {
                    display: flex; flex-direction: column; align-items: center;
                    padding: 1.1rem 1.8rem; flex: 1 1 110px;
                    border-inline-end: 1px solid rgba(42,160,180,.12);
                }
                .bt-stat:last-child { border: none; }
                .bt-stat strong {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 1.8rem; font-weight: 700; color: #2AA0B4;
                }
                .bt-stat span { font-size: .74rem; opacity: .55; margin-top: .15rem; text-align: center; }

                /* SHARED */
                .bt-section { padding: 5.5rem 2rem; }
                .bt-tag {
                    display: inline-block; font-size: .76rem; font-weight: 600;
                    letter-spacing: 2.5px; text-transform: uppercase;
                    color: #1A7A8A; border: 1px solid rgba(26,122,138,.3);
                    padding: .28rem .85rem; border-radius: 100px; margin-bottom: 1rem;
                }
                .bt-tag--teal { color: #2AA0B4; border-color: rgba(42,160,180,.3); }
                .bt-section-title {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: clamp(1.9rem, 4vw, 2.8rem);
                    font-weight: 700; color: #cce8ee; margin-bottom: 2rem;
                }
                .bt-section-title--light { color: #e8f6f8; }
                .bt-section-header { text-align: center; margin-bottom: 2.5rem; }
                .bt-body-text { font-size: 1.05rem; line-height: 1.8; color: #7a9ea5; }

                /* ABOUT */
                .bt-about { background: #121e20; max-width: 100%; }
                .bt-about__inner {
                    max-width: 1200px; margin: 0 auto;
                    display: grid; grid-template-columns: 1fr 1fr;
                    gap: 4rem; align-items: center;
                }
                .bt-features-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
                .bt-feature {
                    background: rgba(42,160,180,.07);
                    border: 1px solid rgba(42,160,180,.15);
                    border-radius: 18px; padding: 1.4rem; cursor: default;
                }
                .bt-feature span { font-size: 2rem; display: block; margin-bottom: .5rem; }
                .bt-feature strong { display: block; font-size: .97rem; color: #cce8ee; margin-bottom: .25rem; }
                .bt-feature p { font-size: .85rem; color: #5a8890; margin: 0; }

                /* HIGHLIGHTS */
                .bt-highlights-section {
                    background: linear-gradient(160deg, #0c1e22, #0e2428);
                    max-width: 100%; text-align: center; padding: 5.5rem 2rem;
                }
                .bt-highlights-grid {
                    display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                    gap: 1.1rem; max-width: 1100px; margin: 0 auto; text-align: start;
                }
                .bt-highlight {
                    display: flex; align-items: flex-start; gap: 1rem;
                    background: rgba(255,255,255,.04);
                    border: 1px solid rgba(255,255,255,.07);
                    border-radius: 16px; padding: 1.3rem; cursor: default;
                    transition: border-color .3s;
                }
                .bt-highlight:hover { border-color: rgba(42,160,180,.3); }
                .bt-highlight__icon { font-size: 1.8rem; flex-shrink: 0; }
                .bt-highlight strong { display: block; color: #cce8ee; font-size: .95rem; margin-bottom: .2rem; }
                .bt-highlight p { font-size: .84rem; color: #5a8890; margin: 0; }

                /* INCLUDES */
                .bt-includes-section { background: #0c1618; max-width: 100%; text-align: center; padding: 5.5rem 2rem; }
                .bt-includes-grid {
                    display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
                    gap: .9rem; max-width: 1000px; margin: 0 auto; text-align: start;
                }
                .bt-include {
                    display: flex; align-items: center; gap: .75rem;
                    background: rgba(42,160,180,.06);
                    border: 1px solid rgba(42,160,180,.12);
                    border-radius: 12px; padding: .9rem 1.1rem;
                    font-size: .9rem; color: #7a9ea5;
                }
                .bt-include__check {
                    width: 22px; height: 22px; flex-shrink: 0; border-radius: 50%;
                    background: rgba(42,160,180,.15); color: #2AA0B4;
                    font-size: .8rem; font-weight: 700;
                    display: flex; align-items: center; justify-content: center;
                }

                /* GALLERY */
                .bt-gallery-section { background: #0e1e22; max-width: 100%; text-align: center; padding: 5.5rem 2rem; }
                .bt-gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    grid-template-rows: 250px 190px;
                    gap: .9rem; max-width: 1200px; margin: 0 auto;
                }
                .bt-gallery-item {
                    background-size: cover; background-position: center;
                    border-radius: 14px; cursor: pointer;
                    transition: all .3s;
                    box-shadow: 0 6px 24px rgba(0,0,0,.4);
                }
                .bt-gallery-item:hover { box-shadow: 0 14px 40px rgba(42,160,180,.25); }
                .bt-gallery-item--0 { grid-column: 1/4; }
                .bt-gallery-item--1 { grid-column: 4/7; }
                .bt-gallery-item--2 { grid-column: 1/3; }
                .bt-gallery-item--3 { grid-column: 3/5; }
                .bt-gallery-item--4 { grid-column: 5/7; }

                /* LIGHTBOX */
                .bt-lightbox {
                    position: fixed; inset: 0; z-index: 9000;
                    background: rgba(0,0,0,.92);
                    display: flex; align-items: center; justify-content: center;
                    cursor: zoom-out; padding: 2rem;
                }
                .bt-lightbox img {
                    max-width: 90vw; max-height: 85vh;
                    border-radius: 16px; object-fit: contain;
                }
                .bt-lightbox__close {
                    position: absolute; top: 1.5rem; right: 1.5rem;
                    width: 44px; height: 44px; border-radius: 50%;
                    background: rgba(255,255,255,.1); border: none;
                    color: #fff; font-size: 1.2rem; cursor: pointer;
                    display: flex; align-items: center; justify-content: center;
                }

                /* ADD-ONS */
                .bt-addons-section { background: #121e20; max-width: 100%; padding: 5.5rem 2rem; }
                .bt-addons-subtitle { font-size: .97rem; color: #5a8890; margin-top: .5rem; }
                .bt-addons-grid {
                    display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
                    gap: 1.6rem; max-width: 1100px; margin: 0 auto;
                }
                .bt-addon-card {
                    background: #17252a;
                    border: 1px solid rgba(42,160,180,.15);
                    border-radius: 22px; padding: 1.9rem 1.6rem;
                    position: relative; display: flex; flex-direction: column;
                    transition: border-color .3s, box-shadow .3s;
                }
                .bt-addon-card::before {
                    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
                    background: linear-gradient(90deg, #1A7A8A, #2AA0B4);
                    border-radius: 22px 22px 0 0;
                }
                .bt-addon-card:hover {
                    border-color: rgba(42,160,180,.4);
                    box-shadow: 0 20px 50px rgba(0,0,0,.4);
                }
                .bt-addon-card__tag {
                    position: absolute; top: 1.2rem; inset-inline-end: 1.2rem;
                    background: rgba(42,160,180,.15); border: 1px solid rgba(42,160,180,.3);
                    color: #2AA0B4; font-size: .68rem; font-weight: 700;
                    letter-spacing: 1px; text-transform: uppercase;
                    padding: .18rem .6rem; border-radius: 100px;
                }
                .bt-addon-card__icon { font-size: 2.6rem; margin-bottom: .9rem; }
                .bt-addon-card__title {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 1.45rem; font-weight: 700;
                    color: #cce8ee; margin-bottom: .55rem;
                }
                .bt-addon-card__desc {
                    font-size: .88rem; line-height: 1.7;
                    color: #5a8890; flex: 1; margin-bottom: 1.4rem;
                }
                .bt-addon-card__footer {
                    display: flex; align-items: center; justify-content: space-between;
                    gap: .8rem; border-top: 1px solid rgba(255,255,255,.06);
                    padding-top: 1.1rem; flex-wrap: wrap;
                }
                .bt-addon-card__price {
                    display: block;
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 1.65rem; font-weight: 700; color: #2AA0B4; line-height: 1;
                }
                .bt-addon-card__note { display: block; font-size: .72rem; color: #3a5e65; margin-top: .1rem; }
                .bt-addon-card__btn {
                    display: inline-block; white-space: nowrap;
                    padding: .58rem 1.1rem; border-radius: 100px;
                    background: linear-gradient(135deg, #25d366, #1aab55);
                    color: #fff; font-size: .8rem; font-weight: 700;
                    text-decoration: none; transition: all .25s;
                }
                .bt-addon-card__btn:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(37,211,102,.3); }

                /* OFFER */
                .bt-offer-section { background: #0c1618; padding: 2rem 2rem 4rem; }
                .bt-offer-card {
                    max-width: 1000px; margin: 0 auto;
                    background: linear-gradient(135deg, #0e2830, #0a1e24);
                    border: 1px solid rgba(42,160,180,.25);
                    border-radius: 24px; padding: 2.5rem 2rem;
                    display: flex; align-items: center; gap: 2rem;
                }
                .bt-offer-card__emoji { font-size: 3rem; flex-shrink: 0; }
                .bt-offer-card h3 {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 1.7rem; color: #cce8ee; margin-bottom: .4rem;
                }
                .bt-offer-card p { font-size: .93rem; color: #5a8890; line-height: 1.5; }
                .bt-offer-card__badge {
                    margin-inline-start: auto; flex-shrink: 0;
                    background: rgba(42,160,180,.12);
                    border: 2px solid rgba(42,160,180,.35);
                    border-radius: 50%; width: 96px; height: 96px;
                    display: flex; flex-direction: column;
                    align-items: center; justify-content: center;
                }
                .bt-offer-card__badge span {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 2.1rem; font-weight: 700; color: #2AA0B4; line-height: 1;
                }
                .bt-offer-card__badge small { font-size: .7rem; color: #5a8890; letter-spacing: 1px; }

                /* BOOK */
                .bt-book-section {
                    background: linear-gradient(160deg, #0a1e24, #0c1618);
                    padding: 5.5rem 2rem; text-align: center;
                }
                .bt-book-subtitle { font-size: 1rem; color: #5a8890; margin-bottom: 2.5rem; }
                .bt-book-actions { display: flex; justify-content: center; gap: 1.2rem; flex-wrap: wrap; }
                .bt-btn {
                    display: inline-flex; align-items: center; gap: .65rem;
                    padding: 1rem 2.5rem; border-radius: 100px;
                    font-size: 1.02rem; font-weight: 600;
                    text-decoration: none; transition: all .3s;
                    border: none; cursor: pointer; font-family: 'Rubik', sans-serif;
                }
                .bt-btn--wa { background: #25d366; color: #fff; }
                .bt-btn--wa:hover { background: #1ebe59; box-shadow: 0 8px 28px rgba(37,211,102,.3); }
                .bt-btn--call {
                    background: transparent; color: #cce8ee;
                    border: 2px solid rgba(42,160,180,.3);
                }
                .bt-btn--call:hover { border-color: #2AA0B4; color: #2AA0B4; }

                /* MOBILE */
                @media (max-width: 900px) {
                    .bt-about__inner { grid-template-columns: 1fr; gap: 2.5rem; }
                    .bt-gallery-grid { grid-template-columns: repeat(2,1fr); grid-template-rows: unset; }
                    .bt-gallery-item--0,.bt-gallery-item--1,.bt-gallery-item--2,
                    .bt-gallery-item--3,.bt-gallery-item--4 { grid-column: unset; height: 190px; }
                    .bt-offer-card { flex-direction: column; text-align: center; }
                    .bt-offer-card__badge { margin: 0 auto; }
                }
                @media (max-width: 600px) {
                    .bt-hero__subtitle {
                        font-size: clamp(.95rem, 2.5vw, 1.2rem);
                        opacity: .78; line-height: 1.7;
                        max-width: 340px; margin: 0 auto 2rem;
                    }
                    .bt-hero__content {
                        position: relative; z-index: 2; text-align: center;
                        max-width: 760px; padding: 80px 1.5rem 1rem;
                        top:0px
                    }
                    .bt-hero__stats { flex-direction: row; }
                    .bt-stat { padding: .8rem .7rem; }
                    .bt-features-grid { grid-template-columns: 1fr; }
                    .bt-addons-grid { grid-template-columns: 1fr; }
                    .bt-gallery-grid { grid-template-columns: 1fr; }
                    .bt-gallery-item--0,.bt-gallery-item--1,.bt-gallery-item--2,
                    .bt-gallery-item--3,.bt-gallery-item--4 { height: 200px; }
                    .bt-addon-card__footer { flex-direction: column; align-items: flex-start; }
                    .bt-addon-card__btn { width: 100%; text-align: center; }
                }

                /* ── FIX: LTR hero content pushed behind navbar ── */
                /* Navbar height = 55px; add safe clearance only for LTR */
                [dir="ltr"] .bt-hero__content {
                    padding-top: 165px;
                }
            `}</style>
        </div>
    );
}