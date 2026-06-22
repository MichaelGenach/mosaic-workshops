import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Contact from './Contact';
import Footer from './Footer';
import ReviewsTours from './ReviewsTours';
import MainButtons from './MainButtons';

import apolonia from './images/apolonia.jpg';
import telAfek from './images/telAfek.jpg';
import telAfek2 from './images/telAfek2.jpg';
import telAfek3 from './images/telAfek3.jpg';
import mekorotHayarkon from './images/mekorotHayarkon.jpg';
import photo197 from './images/photo197.jpg';
import photo211 from './images/photo211.jpg';
import caesareaTour2 from './images/caesareaTour2.jpg';
import cheesWine from './images/cheesWine.jpeg';
import caesareaTour from './videos/caesareaTour.mp4';
import thumbNailTours from './images/thumbNailTours.png';

const instaLink = 'https://www.instagram.com/art_music_explore/';

const T = {
    he: {
        dir: 'rtl',
        hero: {
            eyebrow: 'קיסריה ומרכז הארץ',
            title: 'סיורים רגליים',
            subtitle: 'מסע אל עבר 4,000 שנות היסטוריה — עיירות כנעניות, מבצרים צלבניים ונחלים יפיפיים'
        },
        stats: [
            { v: '24+', l: 'ביקורות מצוינות' },
            { v: '4.9★', l: 'דירוג ממוצע' },
            { v: '1.5–2h', l: 'משך הסיור' },
            { v: 'מ-500₪', l: 'לסיור' },
        ],
        destinations: {
            tag: 'היעדים שלנו',
            title: 'ארבעה עולמות — מסע אחד',
            items: [
                {
                    icon: '🏛️', title: 'קיסריה העתיקה', subtitle: 'עיר הקיסרים ברגל',
                    desc: 'מסע רגלי מרתק בלב קיסריה. שרידי הנמל הרומי, הזירה, העיר הצלבנית ואתרים נסתרים שמעטים מכירים.',
                    color: '#D4842A', tags: ['רומאים', 'צלבנים', 'קיסריה'],
                    img: caesareaTour2,
                },
                {
                    icon: '🏙️', title: 'תל אפק', subtitle: 'עיר הכנענים העתיקה',
                    desc: 'התל המרשים ביותר בישראל — 6,000 שנות עיר על עיר. נגלה שרידי ארמון כנעני ומכתבי אל-עמארנה.',
                    color: '#8B6914', tags: ['ארכיאולוגיה', 'כנענים', 'תל עתיק'],
                    img: telAfek,
                },
                {
                    icon: '🏰', title: 'אפולוניה', subtitle: 'מבצר צלבני על שפת הים',
                    desc: `מבצר עתיק על קצה המצוק, שבו כל חומה ומגדל מספרים על קרבות, כיבושים וסודות מהעבר — לצד נוף ים עוצמתי שקשה להפסיק להביט בו.`,
                    color: '#6B8F3A', tags: ['צלבנים', 'ים-תיכון', 'מבצר'],
                    img: apolonia,
                },
                {
                    icon: '🌿', title: 'מקורות הירקון', subtitle: 'טיול טבע מרגיע',
                    desc: 'נביעות מים צלולים, צמחייה ים-תיכונית עשירה — טיול קל ומרגיע בפארק הלאומי.',
                    color: '#2A7A4A', tags: ['טבע', 'נחלים', 'רגיעה'],
                    img: mekorotHayarkon,
                },
            ],
        },
        includes: {
            tag: 'מה כלול',
            title: 'הכל כלול',
            items: ['מדריך מוסמך ומומחה', 'כניסה לאתרים נסתרים', 'סיפורים וחידות מרתקים', 'תצפיות ייחודיות', 'מפות מיוחדות', 'חוויות בלתי נשכחות', 'ביטוח לכל המשתתפים',],
        },
        addons: {
            tag: 'העשירו את החוויה',
            title: 'תוספות לסיור',
            subtitle: 'כל תוספת מוזמנת מראש — ניצור עבורכם חוויה מושלמת',
            cta: 'הוסף בוואטסאפ',
            items: [
                { icon: '🧀', title: 'פלטת גבינות ויין', desc: 'גבינות בוטיק, לחם טרי, מטבלים ויין נבחר — עצירה מפנקת בסיום הסיור', price: '300₪', note: 'לכ-5 משתתפים', tag: 'פופולרי' },
                { icon: '🎸', title: 'נגינה בגיטרה', desc: 'מוסיקאי מקצועי מלווה את הסיור — ניגון חי שמוסיף אווירה בלתי נשכחת', price: 'לפי תיאום', note: 'לכל גודל קבוצה', tag: 'חווייתי' },
                { icon: '🍽️', title: 'ארוחה במסעדה מומלצת', desc: 'תיאום שולחן במסעדות הטובות ביותר בקיסריה — אנחנו מסדרים, אתם נהנים', price: 'לפי תיאום', note: 'דורש הזמנה מראש', tag: 'מומלץ' },
            ],
        },
        gallery: { tag: 'גלריה', title: 'רגעים מהשדה' },
        offer: { title: '25% הנחה על סיור נוסף', desc: 'בתוקף עד שנתיים מהסיור הקודם • חסכו כסף וחזרו לחוות עוד!', badge: 'הנחה' },
        book: { tag: 'הזמנה', title: 'מוכנים לצאת לדרך?', subtitle: 'צרו קשר ונתאים לכם את הסיור המושלם', whatsapp: 'הזמינו בוואטסאפ', call: 'התקשרו עכשיו' },
        guide: {
            tag: 'המדריך המרתק',
            title: 'מייקל — מורשת שמתעוררת לחיים',
            body: 'סיורים מרתקים וחווייתיים מלאי סיפורים יוצאי דופן ואווירה בלתי נשכחת, בהדרכת מדריך מוסמך עם ניסיון בשימור אתרי מורשת בארץ וברומא.',
            badge: 'מוסמך ובעל ניסיון'
        },
    },
    en: {
        dir: 'ltr',
        hero: {
            eyebrow: 'Caesarea & Central Israel',
            title: 'Walking Tours',
            subtitle: 'A journey through 4,000 years of history — Canaanite cities, Crusader fortresses, and serene nature trails',
        },
        stats: [
            { v: '24+', l: 'Excellent Reviews' },
            { v: '4.9★', l: 'Average Rating' },
            { v: '1.5–2h', l: 'Duration' },
            { v: 'From ₪500', l: 'Per Tour' },
        ],
        destinations: {
            tag: 'Our Destinations',
            title: 'Four Worlds — One Journey',
            items: [
                {
                    icon: '🏛️', title: 'Ancient Caesarea', subtitle: 'City of Emperors on Foot',
                    desc: 'An fascinating walking tour of Caesarea. Roman harbor ruins, the arena, Crusader city, and hidden sites few tourists ever see.',
                    color: '#D4842A', tags: ['Romans', 'Crusaders', 'Caesarea'],
                    img: caesareaTour2,
                },
                {
                    icon: '🏙️', title: 'Tel Afek', subtitle: 'The Ancient Canaanite City',
                    desc: "Israel's most impressive tel — 6,000 years of city upon city. We'll discover the Canaanite palace and El-Amarna letters.",
                    color: '#8B6914', tags: ['Archaeology', 'Canaanites', 'Ancient Tel'],
                    img: telAfek,
                },
                {
                    icon: '🏰', title: 'Apollonia', subtitle: 'Crusader Fortress on the Sea',
                    desc: 'An impressive fortress on a dramatic cape. Walls, towers, and storehouses tell tales of conquest and resilience.',
                    color: '#6B8F3A', tags: ['Crusaders', 'Mediterranean', 'Fortress'],
                    img: apolonia,
                },
                {
                    icon: '🌿', title: 'Yarkon Springs', subtitle: 'A Relaxing Nature Walk',
                    desc: 'Crystal-clear springs, rich Mediterranean vegetation — an easy, beautiful walk through the national park.',
                    color: '#2A7A4A', tags: ['Nature', 'Streams', 'Relaxation'],
                    img: mekorotHayarkon,
                },
            ],
        },
        includes: {
            tag: "What's Included",
            title: 'Everything Included',
            items: ['Expert, certified guide', 'Access to hidden sites', 'Fascinating stories & riddles', 'Unique viewpoints', 'Special maps', 'Unforgettable experiences', 'Insurance for all',],
        },
        addons: {
            tag: 'Enhance Your Experience',
            title: 'Tour Add-ons',
            subtitle: 'Every add-on is arranged in advance — we create a perfect experience for you',
            cta: 'Add via WhatsApp',
            items: [
                { icon: '🧀', title: 'Cheese & Wine Platter', desc: 'Artisan cheeses, fresh bread, dips & wine — an indulgent stop at the end of the tour', price: '₪300', note: 'For ~5 participants', tag: 'Popular' },
                { icon: '🎸', title: 'Live Guitar Music', desc: 'A professional musician joins the tour — live music adding a unique, unforgettable atmosphere', price: 'By arrangement', note: 'Any group size', tag: 'Experience' },
                { icon: '🍽️', title: 'Restaurant Reservation', desc: "Table at Caesarea's best restaurants — we arrange everything, you enjoy", price: 'By arrangement', note: 'Advance booking required', tag: 'Recommended' },
            ],
        },
        gallery: { tag: 'Gallery', title: 'Moments from the Field' },
        offer: { title: '25% Off Your another Tour', desc: 'Valid up to 2 years from your previous tour • Save and experience more!', badge: 'OFF' },
        book: { tag: 'Booking', title: 'Ready to Explore?', subtitle: "Contact us and we'll tailor the perfect tour for you", whatsapp: 'Book via WhatsApp', call: 'Call Now' },
        guide: {
            tag: 'Fascinating Guide',
            title: 'Michael — Bringing Heritage to Life',
            body: 'Fascinating and immersive tours filled with remarkable stories and an unforgettable atmosphere, led by a certified guide with experience in heritage preservation in Israel and Rome.',
            badge: 'Certified & Experienced'
        },
    },
};

const galleryImgs = [apolonia, telAfek, telAfek2, telAfek3, mekorotHayarkon, photo197, caesareaTour2, photo211];

export default function FootTours({ language = 'he', languageSettings }) {
    const t = T[language];
    const dir = t.dir;
    const [scrollY, setScrollY] = useState(0);
    const [activeImg, setActiveImg] = useState(null);
    const [activeDestination, setActiveDestination] = useState(0);

    useEffect(() => {
        const fn = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', fn, { passive: true });
        return () => window.removeEventListener('scroll', fn);
    }, []);

    const active = t.destinations.items[activeDestination];

    return (
        <div className="ft-page" dir={dir}>

            {/* HERO */}
            <section className="ft-hero">
                <div className="ft-hero__bg" style={{ transform: `translateY(${scrollY * 0.4}px)` }}>
                    <video src={caesareaTour} poster={thumbNailTours} autoPlay loop muted playsInline className="ft-hero__video" />
                    <div className="ft-hero__overlay" />
                    <div className="ft-hero__grain" />
                </div>
                <div className="ft-hero__content">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
                        <span className="ft-eyebrow">{t.hero.eyebrow}</span>
                        <h1 className="ft-hero__title">{t.hero.title}</h1>
                        <p className="ft-hero__subtitle">{t.hero.subtitle}</p>
                        <MainButtons language={language} languageSettings={languageSettings} />
                        <ReviewsTours language={language} languageSettings={languageSettings} />
                    </motion.div>
                </div>
                <div className="ft-hero__stats">
                    {t.stats.map((s, i) => (
                        <motion.div key={i} className="ft-stat"
                            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + i * 0.1 }}>
                            <strong>{s.v}</strong><span>{s.l}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* DESTINATIONS TABS */}
            <section className="ft-destinations-section">
                <div className="ft-section-header">
                    <span className="ft-tag">{t.destinations.tag}</span>
                    <h2 className="ft-section-title">{t.destinations.title}</h2>
                </div>
                <div className="ft-dest-tabs">
                    {t.destinations.items.map((d, i) => (
                        <button key={i}
                            className={`ft-dest-tab ${activeDestination === i ? 'is-active' : ''}`}
                            style={{ '--dc': d.color }}
                            onClick={() => setActiveDestination(i)}>
                            {d.icon} {d.title}
                        </button>
                    ))}
                </div>
                <AnimatePresence mode="wait">
                    <motion.div key={activeDestination} className="ft-dest-panel"
                        style={{ '--dc': active.color }}
                        initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.3 }}>
                        <div className="ft-dest-panel__text">
                            <span className="ft-dest-panel__sub">{active.subtitle}</span>
                            <h3>{active.title}</h3>
                            <p>{active.desc}</p>
                            <div className="ft-dest-panel__tags">
                                {active.tags.map((tag, j) => <span key={j} className="ft-dest-chip">{tag}</span>)}
                            </div>
                        </div>
                        <div className="ft-dest-panel__img">
                            <img src={active.img} alt={active.title} />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* GUIDE */}
            <section className="ft-guide-section">
                <motion.div className="ft-guide-card"
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}>
                    <div className="ft-guide-card__avatar">👨‍🏫</div>
                    <div className="ft-guide-card__text">
                        <span className="ft-tag">{t.guide.tag}</span>
                        <h3>{t.guide.title}</h3>
                        <p>{t.guide.body}</p>
                    </div>
                    <div className="ft-guide-card__badge">{t.guide.badge}</div>
                </motion.div>
            </section>

            {/* INCLUDES */}
            <section className="ft-includes-section">
                <div className="ft-section-header">
                    <span className="ft-tag">{t.includes.tag}</span>
                    <h2 className="ft-section-title">{t.includes.title}</h2>
                </div>
                <div className="ft-includes-grid">
                    {t.includes.items.map((item, i) => (
                        <motion.div key={i} className="ft-include"
                            initial={{ opacity: 0, x: dir === 'rtl' ? 18 : -18 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.06 }}
                            viewport={{ once: true }}>
                            <span className="ft-include__check">✓</span>
                            <span>{item}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* GALLERY */}
            <section className="ft-gallery-section">
                <div className="ft-section-header">
                    <span className="ft-tag ft-tag--amber">{t.gallery.tag}</span>
                    <h2 className="ft-section-title">{t.gallery.title}</h2>
                </div>
                <div className="ft-gallery-masonry">
                    {galleryImgs.map((img, i) => (
                        <motion.div key={i}
                            className={`ft-gallery-item ${i % 3 === 0 ? 'ft-gallery-item--tall' : ''}`}
                            style={{ backgroundImage: `url(${img})` }}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setActiveImg(img)} />
                    ))}
                </div>
            </section>

            {/* LIGHTBOX */}
            <AnimatePresence>
                {activeImg && (
                    <motion.div className="ft-lightbox"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setActiveImg(null)}>
                        <motion.img src={activeImg} alt=""
                            initial={{ scale: 0.84 }} animate={{ scale: 1 }} exit={{ scale: 0.84 }}
                            transition={{ type: 'spring', stiffness: 220 }} />
                        <button className="ft-lightbox__close" onClick={() => setActiveImg(null)}>✕</button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ADD-ONS */}
            <section className="ft-addons-section">
                <div className="ft-section-header">
                    <span className="ft-tag">{t.addons.tag}</span>
                    <h2 className="ft-section-title">{t.addons.title}</h2>
                    <p className="ft-addons-subtitle">{t.addons.subtitle}</p>
                </div>
                <div className="ft-addons-grid">
                    {t.addons.items.map((item, i) => (
                        <motion.div key={i} className="ft-addon-card"
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}>
                            <span className="ft-addon-card__tag">{item.tag}</span>
                            <div className="ft-addon-card__icon">{item.icon}</div>
                            <h4 className="ft-addon-card__title">{item.title}</h4>
                            <p className="ft-addon-card__desc">{item.desc}</p>
                            <div className="ft-addon-card__footer">
                                <div>
                                    <span className="ft-addon-card__price">{item.price}</span>
                                    <span className="ft-addon-card__note">{item.note}</span>
                                </div>
                                <a href="https://wa.me/9720523948920" target="_blank" rel="noopener noreferrer"
                                    className="ft-addon-card__btn">{t.addons.cta}</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* OFFER */}
            <section className="ft-offer-section">
                <motion.div className="ft-offer-card"
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <div className="ft-offer-card__emoji">🎉</div>
                    <div>
                        <h3>{t.offer.title}</h3>
                        <p>{t.offer.desc}</p>
                    </div>
                    <div className="ft-offer-card__badge">
                        <span>25%</span><small>{t.offer.badge}</small>
                    </div>
                </motion.div>
            </section>

            {/* BOOK */}
            <section className="ft-book-section">
                <span className="ft-tag ft-tag--amber">{t.book.tag}</span>
                <h2 className="ft-section-title ft-section-title--light">{t.book.title}</h2>
                <p className="ft-book-subtitle">{t.book.subtitle}</p>
                <div className="ft-book-actions">
                    <motion.a href="https://wa.me/9720523948920" target="_blank" rel="noopener noreferrer"
                        className="ft-btn ft-btn--wa" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                        <i className="bi bi-whatsapp" /> {t.book.whatsapp}
                    </motion.a>
                    <motion.a href="tel:0523948920" className="ft-btn ft-btn--call"
                        whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                        📞 {t.book.call}
                    </motion.a>
                </div>
            </section>

            <Contact id="contact" language={language} languageSettings={languageSettings} instaLink={instaLink} />
            <Footer language={language} languageSettings={languageSettings} />

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,700;1,500&family=Rubik:wght@300;400;500;600;700&display=swap');

                .ft-page {
                    font-family: 'Rubik', sans-serif;
                    background: #14100a; color: #ede0cc;
                    overflow-x: hidden;
                }

                /* HERO */
                .ft-hero {
                    position: relative; height: 100vh; min-height: 580px;
                    display: flex; flex-direction: column;
                    align-items: center; justify-content: center; overflow: hidden;
                }
                .ft-hero__bg { position: absolute; inset: 0; z-index: 0; }
                .ft-hero__video { width: 100%; height: 100%; object-fit: cover; }
                .ft-hero__overlay {
                    position: absolute; inset: 0;
                    background: linear-gradient(to bottom,
                        rgba(12,8,2,.5) 0%, rgba(16,10,4,.82) 55%, rgba(20,16,10,.97) 100%);
                }
                .ft-hero__grain {
                    position: absolute; inset: 0; z-index: 1; opacity: .04;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
                }
                .ft-hero__content {
                    position: relative; z-index: 2; text-align: center;
                    max-width: 760px; padding: 80px 1.5rem 1rem;
                    top:65px
                }
                .ft-eyebrow {
                    display: inline-block; margin-bottom: 1rem;
                    font-size: .78rem; font-weight: 500; letter-spacing: 3px;
                    text-transform: uppercase; color: #D4842A;
                    border: 1px solid rgba(212,132,42,.35);
                    padding: .32rem 1rem; border-radius: 100px;
                }
                .ft-hero__title {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: clamp(3.5rem, 9vw, 7rem);
                    font-weight: 900; line-height: .92; color: #f5ede0;
                    margin-bottom: 1.1rem;
                    text-shadow: 0 4px 40px rgba(0,0,0,.6);
                }
                .ft-hero__subtitle {
                    font-size: clamp(.95rem, 2.5vw, 1.2rem);
                    opacity: .75; line-height: 1.7;
                    max-width: 540px; margin: 0 auto 2rem;
                }
                .ft-hero__stats {
                    position: relative; z-index: 2;
                    display: flex; flex-wrap: wrap; justify-content: center;
                    background: rgba(212,132,42,.1);
                    border: 1px solid rgba(212,132,42,.22);
                    border-radius: 18px; overflow: hidden;
                    max-width: 580px; margin: 2.5rem auto 0;
                }
                .ft-stat {
                    display: flex; flex-direction: column; align-items: center;
                    padding: 1.1rem 1.8rem; flex: 1 1 110px;
                    border-inline-end: 1px solid rgba(212,132,42,.1);
                }
                .ft-stat:last-child { border: none; }
                .ft-stat strong {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 1.8rem; font-weight: 700; color: #D4842A;
                }
                .ft-stat span { font-size: .74rem; opacity: .5; margin-top: .15rem; text-align: center; }

                /* SHARED */
                .ft-section-header { text-align: center; margin-bottom: 2.5rem; }
                .ft-tag {
                    display: inline-block; font-size: .76rem; font-weight: 600;
                    letter-spacing: 2.5px; text-transform: uppercase;
                    color: #D4842A; border: 1px solid rgba(212,132,42,.3);
                    padding: .28rem .85rem; border-radius: 100px; margin-bottom: 1rem;
                }
                .ft-tag--amber { color: #D4842A; border-color: rgba(212,132,42,.3); }
                .ft-section-title {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: clamp(1.9rem, 4vw, 2.8rem);
                    font-weight: 700; color: #ede0cc; margin: 0;
                }
                .ft-section-title--light { color: #f5ede0; }

                /* DESTINATIONS */
                .ft-destinations-section { background: #1e1810; padding: 5.5rem 2rem; }
                .ft-dest-tabs {
                    display: flex; justify-content: center;
                    flex-wrap: wrap; gap: .8rem;
                    max-width: 900px; margin: 0 auto 2rem;
                }
                .ft-dest-tab {
                    display: flex; align-items: center; gap: .5rem;
                    padding: .65rem 1.4rem; border-radius: 100px;
                    border: 1px solid rgba(255,255,255,.1);
                    background: transparent; color: #8a7660;
                    font-size: .9rem; font-weight: 500; cursor: pointer;
                    transition: all .25s; font-family: 'Rubik', sans-serif;
                }
                .ft-dest-tab.is-active,
                .ft-dest-tab:hover {
                    background: var(--dc); border-color: var(--dc); color: #fff;
                }
                .ft-dest-panel {
                    max-width: 1100px; margin: 0 auto;
                    display: grid; grid-template-columns: 1fr 1fr;
                    gap: 3rem; align-items: center;
                    background: rgba(255,255,255,.03);
                    border: 1px solid rgba(255,255,255,.07);
                    border-top: 3px solid var(--dc);
                    border-radius: 0 0 24px 24px; padding: 2.5rem;
                }
                .ft-dest-panel__sub {
                    display: block; font-size: .78rem; font-weight: 600;
                    letter-spacing: 1.5px; text-transform: uppercase;
                    color: var(--dc); margin-bottom: .5rem;
                }
                .ft-dest-panel h3 {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 2rem; color: #f0e6d3; margin-bottom: .9rem;
                }
                .ft-dest-panel p { font-size: .97rem; line-height: 1.8; color: #8a7660; }
                .ft-dest-panel__tags { display: flex; flex-wrap: wrap; gap: .5rem; margin-top: 1.2rem; }
                .ft-dest-chip {
                    padding: .22rem .75rem; border-radius: 100px;
                    background: rgba(255,255,255,.06);
                    border: 1px solid rgba(255,255,255,.1);
                    font-size: .76rem; color: #8a7660;
                }
                .ft-dest-panel__img img {
                    width: 100%; height: 300px;
                    object-fit: cover; border-radius: 20px;
                    box-shadow: 0 20px 60px rgba(0,0,0,.5);
                }

                /* GUIDE */
                .ft-guide-section { background: #14100a; padding: 3rem 2rem; }
                .ft-guide-card {
                    max-width: 900px; margin: 0 auto;
                    display: flex; align-items: center; gap: 2.5rem;
                    background: rgba(212,132,42,.06);
                    border: 1px solid rgba(212,132,42,.2);
                    border-radius: 24px; padding: 2.5rem;
                }
                .ft-guide-card__avatar {
                    font-size: 3.5rem; flex-shrink: 0;
                    width: 80px; height: 80px;
                    display: flex; align-items: center; justify-content: center;
                    background: rgba(212,132,42,.12); border-radius: 50%;
                }
                .ft-guide-card__text h3 {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 1.5rem; color: #f0e6d3; margin-bottom: .5rem;
                }
                .ft-guide-card__text p { font-size: .92rem; color: #8a7660; line-height: 1.7; }
                .ft-guide-card__badge {
                    margin-inline-start: auto; flex-shrink: 0;
                    background: rgba(212,132,42,.12);
                    border: 1px solid rgba(212,132,42,.3);
                    padding: .55rem 1.3rem; border-radius: 100px;
                    font-size: .82rem; color: #D4842A; font-weight: 600; white-space: nowrap;
                }

                /* INCLUDES */
                .ft-includes-section { background: #1e1810; padding: 5.5rem 2rem; }
                .ft-includes-grid {
                    display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
                    gap: .9rem; max-width: 1000px; margin: 0 auto;
                }
                .ft-include {
                    display: flex; align-items: center; gap: .75rem;
                    background: rgba(212,132,42,.05);
                    border: 1px solid rgba(212,132,42,.12);
                    border-radius: 12px; padding: .9rem 1.1rem;
                    font-size: .9rem; color: #8a7660;
                }
                .ft-include__check {
                    width: 22px; height: 22px; flex-shrink: 0; border-radius: 50%;
                    background: rgba(212,132,42,.15); color: #D4842A;
                    font-size: .78rem; font-weight: 700;
                    display: flex; align-items: center; justify-content: center;
                }

                /* GALLERY */
                .ft-gallery-section { background: #14100a; padding: 5.5rem 2rem; }
                .ft-gallery-masonry {
                    columns: 3; gap: 1rem; max-width: 1200px; margin: 0 auto;
                }
                .ft-gallery-item {
                    break-inside: avoid; height: 200px; margin-bottom: 1rem;
                    background-size: cover; background-position: center;
                    border-radius: 14px; cursor: pointer;
                    box-shadow: 0 6px 24px rgba(0,0,0,.4);
                    transition: all .3s;
                }
                .ft-gallery-item--tall { height: 300px; }
                .ft-gallery-item:hover { box-shadow: 0 14px 40px rgba(212,132,42,.2); }

                /* LIGHTBOX */
                .ft-lightbox {
                    position: fixed; inset: 0; z-index: 9000;
                    background: rgba(0,0,0,.93);
                    display: flex; align-items: center; justify-content: center;
                    cursor: zoom-out; padding: 2rem;
                }
                .ft-lightbox img {
                    max-width: 90vw; max-height: 85vh;
                    border-radius: 16px; object-fit: contain;
                }
                .ft-lightbox__close {
                    position: absolute; top: 1.5rem; right: 1.5rem;
                    width: 44px; height: 44px; border-radius: 50%;
                    background: rgba(255,255,255,.1); border: none;
                    color: #fff; font-size: 1.2rem; cursor: pointer;
                    display: flex; align-items: center; justify-content: center;
                }

                /* ADD-ONS */
                .ft-addons-section { background: #1e1810; padding: 5.5rem 2rem; }
                .ft-addons-subtitle { font-size: .95rem; color: #6a5a48; margin-top: .5rem; }
                .ft-addons-grid {
                    display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
                    gap: 1.6rem; max-width: 1100px; margin: 0 auto;
                }
                .ft-addon-card {
                    background: #261e14;
                    border: 1px solid rgba(212,132,42,.15);
                    border-radius: 22px; padding: 1.9rem 1.6rem;
                    position: relative; display: flex; flex-direction: column;
                    transition: border-color .3s, box-shadow .3s;
                }
                .ft-addon-card::before {
                    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
                    background: linear-gradient(90deg, #D4842A, #8B6914);
                    border-radius: 22px 22px 0 0;
                }
                .ft-addon-card:hover {
                    border-color: rgba(212,132,42,.4);
                    box-shadow: 0 20px 50px rgba(0,0,0,.4);
                }
                .ft-addon-card__tag {
                    position: absolute; top: 1.2rem; inset-inline-end: 1.2rem;
                    background: rgba(212,132,42,.15); border: 1px solid rgba(212,132,42,.3);
                    color: #D4842A; font-size: .68rem; font-weight: 700;
                    letter-spacing: 1px; text-transform: uppercase;
                    padding: .18rem .6rem; border-radius: 100px;
                }
                .ft-addon-card__icon { font-size: 2.6rem; margin-bottom: .9rem; }
                .ft-addon-card__title {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 1.45rem; font-weight: 700;
                    color: #f0e6d3; margin-bottom: .55rem;
                }
                .ft-addon-card__desc {
                    font-size: .88rem; line-height: 1.7;
                    color: #8a7660; flex: 1; margin-bottom: 1.4rem;
                }
                .ft-addon-card__footer {
                    display: flex; align-items: center; justify-content: space-between;
                    gap: .8rem; border-top: 1px solid rgba(255,255,255,.06);
                    padding-top: 1.1rem; flex-wrap: wrap;
                }
                .ft-addon-card__price {
                    display: block;
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 1.65rem; font-weight: 700; color: #D4842A; line-height: 1;
                }
                .ft-addon-card__note { display: block; font-size: .72rem; color: #6a5a48; margin-top: .1rem; }
                .ft-addon-card__btn {
                    display: inline-block; white-space: nowrap;
                    padding: .58rem 1.1rem; border-radius: 100px;
                    background: linear-gradient(135deg, #25d366, #1aab55);
                    color: #fff; font-size: .8rem; font-weight: 700;
                    text-decoration: none; transition: all .25s;
                }
                .ft-addon-card__btn:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(37,211,102,.3); }

                /* OFFER */
                .ft-offer-section { background: #14100a; padding: 2rem 2rem 4rem; }
                .ft-offer-card {
                    max-width: 1000px; margin: 0 auto;
                    background: linear-gradient(135deg, #2a1e0e, #1e1408);
                    border: 1px solid rgba(212,132,42,.25);
                    border-radius: 24px; padding: 2.5rem 2rem;
                    display: flex; align-items: center; gap: 2rem;
                }
                .ft-offer-card__emoji { font-size: 3rem; flex-shrink: 0; }
                .ft-offer-card h3 {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 1.7rem; color: #f0e6d3; margin-bottom: .4rem;
                }
                .ft-offer-card p { font-size: .93rem; color: #8a7660; line-height: 1.5; }
                .ft-offer-card__badge {
                    margin-inline-start: auto; flex-shrink: 0;
                    background: rgba(212,132,42,.12);
                    border: 2px solid rgba(212,132,42,.35);
                    border-radius: 50%; width: 96px; height: 96px;
                    display: flex; flex-direction: column;
                    align-items: center; justify-content: center;
                }
                .ft-offer-card__badge span {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 2.1rem; font-weight: 700; color: #D4842A; line-height: 1;
                }
                .ft-offer-card__badge small { font-size: .7rem; color: #8a7660; letter-spacing: 1px; }

                /* BOOK */
                .ft-book-section {
                    background: linear-gradient(160deg, #1e1810, #14100a);
                    padding: 5.5rem 2rem; text-align: center;
                }
                .ft-book-subtitle { font-size: 1rem; color: #8a7660; margin-bottom: 2.5rem; }
                .ft-book-actions { display: flex; justify-content: center; gap: 1.2rem; flex-wrap: wrap; }
                .ft-btn {
                    display: inline-flex; align-items: center; gap: .65rem;
                    padding: 1rem 2.5rem; border-radius: 100px;
                    font-size: 1.02rem; font-weight: 600;
                    text-decoration: none; transition: all .3s;
                    border: none; cursor: pointer; font-family: 'Rubik', sans-serif;
                }
                .ft-btn--wa { background: #25d366; color: #fff; }
                .ft-btn--wa:hover { background: #1ebe59; box-shadow: 0 8px 28px rgba(37,211,102,.3); }
                .ft-btn--call {
                    background: transparent; color: #ede0cc;
                    border: 2px solid rgba(212,132,42,.3);
                }
                .ft-btn--call:hover { border-color: #D4842A; color: #D4842A; }

                /* MOBILE */
                @media (max-width: 900px) {
                    .ft-dest-panel { grid-template-columns: 1fr; }
                    .ft-dest-panel__img img { height: 210px; }
                    .ft-guide-card { flex-direction: column; text-align: center; }
                    .ft-guide-card__badge { margin: 0 auto; }
                    .ft-gallery-masonry { columns: 2; }
                    .ft-offer-card { flex-direction: column; text-align: center; }
                    .ft-offer-card__badge { margin: 0 auto; }
                    .ft-addons-grid { grid-template-columns: 1fr; }
                }
                @media (max-width: 600px) {
                    .ft-hero__stats { flex-direction: row; padding: 0 .5rem; }
                    .ft-stat { padding: .8rem .6rem; }
                    .ft-gallery-masonry { columns: 1; }
                    .ft-gallery-item, .ft-gallery-item--tall { height: 200px; }
                    .ft-addon-card__footer { flex-direction: column; align-items: flex-start; }
                    .ft-addon-card__btn { width: 100%; text-align: center; }
                    .ft-dest-tabs { gap: .5rem; }
                    .ft-dest-tab { font-size: .82rem; padding: .55rem 1rem; }
                    .ft-hero__subtitle {
                        font-size: clamp(.95rem, 2.5vw, 1.2rem);
                        opacity: .75; line-height: 1.7;
                        max-width: 340px; margin: 0 auto 2rem;
                    }
                    .ft-hero__content {
                        position: relative; z-index: 2; text-align: center;
                        max-width: 760px; padding: 80px 1.5rem 1rem;
                        top:0px
                    }
                }

                /* ── FIX: LTR hero content pushed behind navbar ── */
                /* Navbar height = 55px; add safe clearance only for LTR */
                [dir="ltr"] .ft-hero__content {
                    padding-top: 165px;
                }
            `}</style>
        </div>
    );
}