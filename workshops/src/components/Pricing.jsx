import React from 'react';
import './Pricing.css';
import { Link } from 'react-router-dom';

// אובייקט תרגומים
const translations = {
  he: {
    direction: 'rtl',
    title: 'מחירים ותיאום סדנאות וסיורים',
    potteryTitle: 'סדנאות קדרות',
    potteryPrice: '👨‍👩‍👧‍👦 מחיר לסדנה: 250₪ לאדם',
    mosaicTitle: 'סדנאות פסיפס',
    mosaicPrice: '👨‍👩‍👧‍👦 מחיר לסדנה: החל מ-250₪ לאדם ',
    companyTitle: ' סדנאות לוגו פסיפס לחברות',
    companyPrice: '🧑‍💼 סדנה לחברות: תמחור מותאם אישית',
    toursTitle: 'סיורים מרתקים',
    toursPrice1: '📍 סיור קבוצתי: החל מ-500₪ לסיור',
    toursPrice2: '🕯️ סיור עששיות ערב: החל מ-500₪ לסיור',
    note: 'המחירים כוללים חומרים, הדרכה מקצועית ואווירה מיוחדת מול הים 🌊',
    cta: '📩 הזמינו עכשיו',
  },
  en: {
    direction: 'ltr',
    title: 'Prices and Workshop/Tour Scheduling',
    potteryTitle: 'Pottery Workshops',
    potteryPrice: '👨‍👩‍👧‍👦Workshop price: 250₪ per person',
    mosaicTitle: 'Mosaic Workshops',
    mosaicPrice: '👨‍👩‍👧‍👦 Workshop price: from 250₪ per person',
    companyTitle:'Mosaic Logo Workshops for Companies',
    companyPrice:'🧑‍💼 Corporate workshops: custom pricing',
    toursTitle: ' Exciting Tours',
    toursPrice1: '📍 Group tour: from 500₪ per tour',
    toursPrice2: '🕯️ Evening lantern tour: from 500₪ per tour',
    note: 'Prices include materials, professional guidance, and a special atmosphere by the sea 🌊',
    cta: '📩 Book Now',
  },
};

export default function Pricing({ language }) {
  // אם השפה לא קיימת בטרנסליישנס, נשתמש בעברית כברירת מחדל
  const t = translations[language]

  return (
    <div className={t.direction === 'rtl' ? 'rtl' : 'ltr'}>
      <section className="pricing-section">
        <h2 className="pricing-title">🎟️ {t.title}</h2>

        <div className="pricing-grid">
          <Link className="pricingLink" to={'./pottery'} onClick={() => window.scrollTo(0, 0)}>
            <div className="price-card">
              <h3>🏺 {t.potteryTitle}</h3>
              <ul>
                <li>{t.potteryPrice}</li>
              </ul>
            </div>
          </Link>

          <Link className="pricingLink" to={'./private'} onClick={() => window.scrollTo(0, 0)}>
            <div className="price-card">
              <h3>🖼️ {t.mosaicTitle}</h3>
              <ul>
                <li>{t.mosaicPrice}</li>
              </ul>
            </div>
          </Link>

          <Link className="pricingLink" to={'./company'} onClick={() => window.scrollTo(0, 0)}>
            <div className="price-card">
              <h3>🏢 {t.companyTitle}</h3>
              <ul>
                <li>{t.companyPrice}</li>
              </ul>
            </div>
          </Link>

          <Link className="pricingLink" to={'./tours'} onClick={() => window.scrollTo(0, 0)}>
            <div className="price-card">
              <h3>🏛️ {t.toursTitle}</h3>
              <ul>
                <li>{t.toursPrice1}</li>
                <li>{t.toursPrice2}</li>
              </ul>
            </div>
          </Link>
        </div>

        <p className="pricing-note">{t.note}</p>
        <a href="#contact" className="cta-button">{t.cta}</a>
      </section>
    </div>
  );
}
