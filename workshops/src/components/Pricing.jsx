import React, { useState } from 'react';
import './Pricing.css';
import { Link } from 'react-router-dom';

const translations = {
  he: {
    direction: 'rtl',
    title: 'חוויות ייחודיות',
    subtitle: 'סדנאות וסיורים מרתקים על חוף הים התיכון',
    potteryTitle: 'סדנת קדרות',
    potteryDesc: 'ללמוד לעבוד עם חימר כמו שעשו אלפי שנים',
    potteryFeature1: 'ליווי מיקצועי',
    potteryFeature2: 'יצירת כלי וצביעה',
    potteryFeature3: 'קחו הביתה את היצירה',
    potteryPrice: '250₪',
    mosaicTitle: 'סדנת פסיפס',
    mosaicDesc: 'טכניקה עתיקה ותוצאה שנשארת אצלכם',
    mosaicFeature1: 'ליווי מיקצועי',
    mosaicFeature2: 'טכניקות מקוריות',
    mosaicFeature3: 'קחו הביתה את היצירה',
    mosaicPrice: 'מ-250₪',
    companyTitle: 'אירועי חברות',
    companyDesc: 'יצירה, שיתוף פעולה וזמן איכות אמיתי',
    companyFeature1: 'ליווי מקצועי',
    companyFeature2: 'יצירת פסיפס קבוצתי משותף',
    companyFeature3: 'משתתפים ללא הגבלה',
    companyPrice: 'מחיר בהתאם לגודל היצירה',
    toursTitle: 'סיורים מרתקים',
    toursDesc: 'סיפורים ומקומות מדהימים שמעטים מכירים',
    toursFeature1: 'מדריך מוסמך',
    toursFeature2: 'מסלול מרתק לבחירתכם',
    toursFeature3: 'נופים מדהימים',
    toursPrice: 'מ-450₪',
    perPerson: 'לאדם',
    perTour: 'לסיור',
    bookNow: 'הזמינו',
    whatsIncluded: 'מה כלול?',
    mainNote: 'כל הסדנאות והסיורים כוללים חומרים מקצועיים, הדרכה אישית ואווירה קסומה',
    cta: 'צרו קשר עכשיו',
  },
  en: {
    direction: 'ltr',
    title: 'Unique Experiences',
    subtitle: 'Fascinating workshops and tours on the Mediterranean coast',
    potteryTitle: 'Pottery Workshop',
    potteryDesc: 'Learn to work with clay as people have done for thousands of years',
    potteryFeature1: 'Professional guidance',
    potteryFeature2: 'Crafting and painting your piece',
    potteryFeature3: 'Take your creation home',
    potteryPrice: '250₪',
    mosaicTitle: 'Mosaic Workshop',
    mosaicDesc: 'An ancient technique and a result you get to keep',
    mosaicFeature1: 'Professional guidance',
    mosaicFeature2: 'Original techniques',
    mosaicFeature3: 'Take your creation home',
    mosaicPrice: 'From 250₪',
    companyTitle: 'Corporate Events',
    companyDesc: 'Creation, collaboration, and genuine quality time',
    companyFeature1: 'Professional guidance',
    companyFeature2: 'Create a collaborative group mosaic',
    companyFeature3: 'Unlimited participants',
    companyPrice: 'Price depends on the size of the artwork',
    toursTitle: 'Fascinating Tours',
    toursDesc: 'Stories, places, and perspectives few people know',
    toursFeature1: 'Certified guide',
    toursFeature2: 'A captivating route of your choice',
    toursFeature3: 'Stunning landscapes',
    toursPrice: 'From 450₪',
    perPerson: 'per person',
    perTour: 'per group',
    bookNow: 'Book now',
    whatsIncluded: 'What’s included?',
    mainNote: 'All workshops and tours include professional materials, personal guidance, and a magical atmosphere',
    cta: 'Contact us now',
  },

};

export default function Pricing({ language = 'he' }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const t = translations[language];
  const isRtl = t.direction === 'rtl';

  const cards = [
    {
      key: 'pottery',
      icon: '🏺',
      priceType: 'perPerson',
      link: '/pottery' // <-- מלא כאן את הנתיב לעמוד הקדרות
    },
    {
      key: 'mosaic',
      icon: '🎨',
      priceType: 'perPerson',
      link: '/private' // <-- מלא כאן את הנתיב לעמוד הפסיפס
    },
    {
      key: 'tours',
      icon: '🏛️',
      priceType: 'perTour',
      link: '/tours' // <-- מלא כאן את הנתיב לעמוד הסיורים
    },
    {
      key: 'company',
      icon: '🤝',
      priceType: 'custom',
      link: '/company' // <-- מלא כאן את הנתיב לעמוד אירועי חברות
    },

  ];

  return (
    <div className={`pricing-container ${isRtl ? 'rtl' : 'ltr'}`}>
      <div className="pricing-content">

        {/* Header */}
        <div className="pricing-header">
          <div className="pricing-header-decoration">
            <div className="pricing-header-line"></div>
            <span className="pricing-header-emoji">✨</span>
            <div className="pricing-header-line"></div>
          </div>

          <h2 className="pricing-title">{t.title}</h2>
          <p className="pricing-subtitle">{t.subtitle}</p>
        </div>

        {/* Cards Grid */}
        <div className="pricing-grid">
          {cards.map((card) => (
            <Link
              key={card.key}
              to={card.link}
              className="pricing-card-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div
                className="pricing-card-wrapper"
                onMouseEnter={() => setHoveredCard(card.key)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`pricing-card ${card.key} ${hoveredCard === card.key ? 'hovered' : ''}`}>

                  {/* Card Header */}
                  <div className="pricing-card-header">
                    <div className="pricing-card-header-bg"></div>
                    <div className="pricing-card-header-gradient"></div>

                    <div className="pricing-card-icon-wrapper">
                      <div className="pricing-card-icon-container">
                        <div className="pricing-card-icon-glow"></div>
                        <span className="pricing-card-icon">{card.icon}</span>
                      </div>
                    </div>

                    <div className="pricing-card-wave">
                      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="white"></path>
                      </svg>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="pricing-card-body">

                    {/* Title & Description */}
                    <div className="pricing-card-title-section">
                      <h3 className="pricing-card-title">{t[`${card.key}Title`]}</h3>
                      <p className="pricing-card-description">{t[`${card.key}Desc`]}</p>
                    </div>

                    {/* Features Box */}
                    <div className="pricing-card-features">
                      <div className="pricing-card-features-header">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{t.whatsIncluded}</span>
                      </div>
                      <div className="pricing-card-features-list">
                        {[1, 2, 3].map((num) => (
                          <div key={num} className="pricing-card-feature-item">
                            <div className="pricing-card-feature-icon">
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="pricing-card-feature-text">
                              {t[`${card.key}Feature${num}`]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price & Button */}
                    <div className="pricing-card-footer">
                      <div className="pricing-card-price-section">
                        {card.priceType === 'custom' ? (
                          <span className="pricing-card-price-custom">
                            {t[`${card.key}Price`]}
                          </span>
                        ) : (
                          <span className="pricing-card-price">
                            {t[`${card.key}Price`]}{' '}
                            <span className="pricing-card-price-unit-inline">
                              {t[card.priceType]}
                            </span>
                          </span>
                        )}
                      </div>


                      <a href="#contact" className="pricing-card-button" onClick={(e) => e.stopPropagation()}>
                        <div className="pricing-card-button-shine"></div>
                        <span className="pricing-card-button-text">{t.bookNow}</span>
                        <svg className={`pricing-card-button-arrow ${isRtl ? 'rtl' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pricing-bottom">

          {/* Info Card */}
          <div className="pricing-info-card">
            <div className="pricing-info-card-gradient"></div>

            <div className="pricing-info-card-content">
              <div className="pricing-info-card-emojis">
                <span className="pricing-info-card-emoji">🌊</span>
                <span className="pricing-info-card-emoji">✨</span>
                <span className="pricing-info-card-emoji">🎨</span>
              </div>
              <p className="pricing-info-card-text">{t.mainNote}</p>
            </div>
          </div>

          {/* CTA Button */}
          <a href="#contact" className="pricing-cta">
            <div className="pricing-cta-shine"></div>
            <span className="pricing-cta-text">{t.cta}</span>
            <svg className={`pricing-cta-arrow ${isRtl ? 'rtl' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}