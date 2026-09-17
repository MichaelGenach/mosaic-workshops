
import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from 'react-fade-in';
import './GiftVouchers.css';
import Contact from './Contact';
import Footer from './Footer';

import potteryPhoto from './images/photo257.jpeg';
import toursPhoto from './images/caesareaTour2.jpg';
import openPhoto from './images/thumbNailTours.png';
import mosaicPhoto from './images/photo37.jpg';

const whatsappNumber = '9720523948920';

const translations = {
  he: {
    tag: 'מתנה שנשארת לתמיד',
    title: 'שוברי מתנה',
    subtitle: 'חוויה יצירתית בנמל קיסריה — מתנה מקורית לזוגות, למשפחה או לחברים, בלי לדעת בדיוק מתי יגיעו',

    occasionsTag: 'מושלם עבור',
    occasionsTitle: 'לכל אירוע יש שובר מתאים',
    occasions: [
      { icon: '🎂', label: 'יום הולדת' },
      { icon: '💍', label: 'יום נישואין' },
      { icon: '🏢', label: 'מתנה לעובדים' },
      { icon: '🥂', label: 'גיבוש או רווקות' },
      { icon: '💛', label: 'סתם כי בא לכם' },
    ],

    howTag: 'איך זה עובד',
    howTitle: 'שלושה צעדים פשוטים',
    steps: [
      { icon: '💬', title: 'בוחרים שובר', text: 'בוחרים את הסדנה או הסיור המתאימים, או משאירים את זה פתוח למקבל/ת המתנה' },
      { icon: '💳', title: 'מתאמים ומשלמים', text: 'יוצרים איתנו קשר בוואטסאפ, סוגרים פרטים ומקבלים את השובר האישי שלכם' },
      { icon: '🎁', title: 'מממשים מתי שנוח', text: 'תוקף השובר 24 חודשים ממועד הרכישה — אפשר לתאם מועד בכל זמן שנוח' },
    ],

    popularLabel: 'הכי מבוקש',
    ctaLabel: 'בחרו שובר זה',
    vouchers: [
      {
        photo: potteryPhoto,
        badge: 'סדנת קדרות',
        title: 'שובר לסדנת קדרות',
        subtitle: 'יצירה אישית על גלגל האבניים',
        desc: 'שובר לסדנת קדרות בנמל קיסריה — לבחירה בין יצירה בלבד, קרמיקה מלאה עם שריפה בתנור, או גלזורה וצביעה.',
        price: 'מ-250₪',
        popular: true,
      },
      {
        photo: mosaicPhoto,
        badge: 'סדנת פסיפס',
        title: 'שובר לסדנת פסיפס',
        subtitle: 'יצירה בוטיקית מול הים',
        desc: 'שובר לסדנת פסיפס פרטית או זוגית בגלריה שלנו בקיסריה — חוויה יצירתית ורגועה מול נוף הים.',
        price: 'לפי תיאום',
      },
      {
        photo: toursPhoto,
        badge: 'סיור מודרך',
        title: 'שובר לסיור מודרך',
        subtitle: 'סיור רגלי או אופניים בקיסריה',
        desc: 'שובר לסיור מודרך בנמל קיסריה ובעתיקותיה, בליווי מדריך מוסמך — לבחירה בין סיור רגלי לסיור אופניים.',
        price: 'מ-450₪',
      },
      {
        photo: openPhoto,
        badge: 'שובר פתוח',
        title: 'שובר לבחירה חופשית',
        subtitle: 'המתנה המושלמת כשלא בטוחים',
        desc: 'שובר גמיש שהמקבל/ת יכולים לממש בכל אחת מהסדנאות או הסיורים שלנו, לפי מה שיתאים להם.',
        price: 'לפי בחירה',
      },
    ],

    terms: {
      tag: 'פרטים חשובים',
      title: 'מימוש השובר',
      ribbon: 'השובר כולל פעילות יצירתית מלאה בליווי מדריך מוסמך',
      includedLabel: 'כלול בשובר',
      included: [
        { icon: '📅', text: 'תוקף שימוש: 24 חודשים ממועד הקנייה' },
        { icon: '👥', text: 'מיועד לשני משתתפים (אלא אם צוין אחרת)' },
        { icon: '🎓', text: 'ליווי מלא של הדרכה מקצועית' },
        { icon: '📍', text: 'מיקום מדהים בנמל קיסריה ועוד' },
      ],
      noteLabel: 'לשימת לב',
      notes: [
        { icon: '🪪', text: 'יש להציג את השובר המקורי בעת השימוש' },
        { icon: '📞', text: 'לתיאום מועד הפעילות יש ליצור קשר מראש' },
        { icon: '🚫', text: 'אינו ניתן להעברה או להמרה במזומן' },
        { icon: '🔗', text: 'אינו ניתן לשימוש עם מבצעים אחרים' },
      ],
    },

    closing: {
      title: 'עדיין לא בטוחים איזה שובר לבחור?',
      subtitle: 'ספרו לנו קצת על מי שמקבל את המתנה — נמליץ על השובר שהכי יתאים',
      cta: 'דברו איתנו בוואטסאפ',
    },
    signature: 'Genach Workshops',
  },

  en: {
    tag: 'A Gift That Lasts Forever',
    title: 'Gift Vouchers',
    subtitle: 'A creative experience at Caesarea Harbor — an original gift for couples, families or friends, without having to know exactly when they will use it',

    occasionsTag: 'Perfect For',
    occasionsTitle: 'There\'s a Voucher for Every Occasion',
    occasions: [
      { icon: '🎂', label: 'Birthday' },
      { icon: '💍', label: 'Anniversary' },
      { icon: '🏢', label: 'Corporate Gift' },
      { icon: '🥂', label: 'Team Building or Bachelorette Party' },
      { icon: '💛', label: 'Just Because' },
    ],

    howTag: 'How It Works',
    howTitle: 'Three Simple Steps',
    steps: [
      {
        icon: '💬',
        title: 'Choose a Voucher',
        text: 'Choose the suitable workshop or tour, or leave the choice open for the gift recipient',
      },
      {
        icon: '💳',
        title: 'Arrange & Pay',
        text: 'Contact us on WhatsApp, finalize the details, and receive your personal voucher',
      },
      {
        icon: '🎁',
        title: 'Redeem Whenever It Suits You',
        text: 'The voucher is valid for 24 months from the date of purchase — you can schedule a date whenever convenient',
      },
    ],

    popularLabel: 'Most Requested',
    ctaLabel: 'Choose This Voucher',
    vouchers: [
      {
        photo: potteryPhoto,
        badge: 'Pottery Workshop',
        title: 'Pottery Workshop Voucher',
        subtitle: 'A Personal Creation on the Pottery Wheel',
        desc: 'A voucher for a pottery workshop at Caesarea Harbor — choose between creation only, a full ceramics experience including kiln firing, or glazing and painting.',
        price: 'From ₪250',
        popular: true,
      },
      {
        photo: mosaicPhoto,
        badge: 'Mosaic Workshop',
        title: 'Mosaic Workshop Voucher',
        subtitle: 'A Boutique Creation Overlooking the Sea',
        desc: 'A voucher for a private or couples’ mosaic workshop at our gallery in Caesarea — a creative and relaxing experience overlooking the sea.',
        price: 'By Arrangement',
      },
      {
        photo: toursPhoto,
        badge: 'Guided Tour',
        title: 'Guided Tour Voucher',
        subtitle: 'A Walking or Bicycle Tour in Caesarea',
        desc: 'A voucher for a guided tour of Caesarea Harbor and its antiquities, accompanied by a certified guide — choose between a walking tour and a bicycle tour.',
        price: 'From ₪450',
      },
      {
        photo: openPhoto,
        badge: 'Open Voucher',
        title: 'Free-Choice Voucher',
        subtitle: 'The Perfect Gift When You Are Not Sure',
        desc: 'A flexible voucher that the recipient can use for any of our workshops or tours, according to what suits them best.',
        price: 'Recipient’s Choice',
      },
    ],

    terms: {
      tag: 'Important Details',
      title: 'How to Redeem',
      ribbon: 'The voucher includes a complete creative activity accompanied by a certified guide',
      includedLabel: 'Included in the Voucher',
      included: [
        { icon: '📅', text: 'Validity: 24 months from the date of purchase' },
        { icon: '👥', text: 'Intended for two participants (unless stated otherwise)' },
        { icon: '🎓', text: 'Full professional guidance' },
        { icon: '📍', text: 'A wonderful location at Caesarea Harbor and more' },
      ],
      noteLabel: 'Please Note',
      notes: [
        { icon: '🪪', text: 'The original voucher must be presented when using it' },
        { icon: '📞', text: 'Please contact us in advance to schedule the activity' },
        { icon: '🚫', text: 'Cannot be transferred or exchanged for cash' },
        { icon: '🔗', text: 'Cannot be used together with other promotions' },
      ],
    },

    closing: {
      title: 'Still Not Sure Which Voucher to Choose?',
      subtitle: 'Tell us a little about the gift recipient — we’ll recommend the voucher that suits them best',
      cta: 'Contact Us on WhatsApp',
    },
    signature: 'Genach Workshops',
  },
};

export default function GiftVouchers({ language, languageSettings }) {
  const t = translations[language];
  const settings = languageSettings[language];

  const waHref = (voucherTitle) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      language === 'he'
        ? `שלום! אשמח לפרטים ולרכישה של ${voucherTitle}`
        : `Hi! I’d like more details and would like to purchase ${voucherTitle}`
    )}`;

  const waHrefGeneric = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    language === 'he'
      ? 'שלום! אשמח לעזרה בבחירת שובר מתנה מתאים'
      : 'Hi! I’d like help choosing the right gift voucher'
  )}`;

  return (
    <div id="gv-main" dir={settings.direction}>
      <FadeIn>
        <section className="gv-hero">
          <span className="gv-hero__tag">{t.tag}</span>
          <h1 className="gv-hero__title">{t.title}</h1>
          <p className="gv-hero__subtitle">{t.subtitle}</p>
        </section>

        <section className="gv-occasions-section">
          <div className="gv-section-header">
            <span className="gv-tag">{t.occasionsTag}</span>
            <h2 className="gv-section-title">{t.occasionsTitle}</h2>
          </div>
          <div className="gv-occasions-row">
            {t.occasions.map((occ, i) => (
              <span key={i} className="gv-occasion-chip">
                <span className="gv-occasion-chip__icon">{occ.icon}</span>
                {occ.label}
              </span>
            ))}
          </div>
        </section>

        <section className="gv-how-section">
          <div className="gv-section-header">
            <span className="gv-tag">{t.howTag}</span>
            <h2 className="gv-section-title">{t.howTitle}</h2>
          </div>
          <div className="gv-steps-grid">
            {t.steps.map((step, i) => (
              <motion.div
                key={i}
                className="gv-step"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="gv-step__number">{i + 1}</div>
                <div className="gv-step__icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="gv-vouchers-section">
          <div className="gv-vouchers-grid">
            {t.vouchers.map((v, i) => (
              <motion.div
                key={i}
                className="gv-voucher"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="gv-voucher__frame">
                  {v.popular && (
                    <div className="gv-voucher__ribbon">{t.popularLabel}</div>
                  )}

                  <div className="gv-voucher__photo-wrap">
                    <img
                      src={v.photo}
                      alt={v.title}
                      loading="lazy"
                      className="gv-voucher__photo"
                    />
                    <div className="gv-voucher__photo-overlay" />
                    <div className="gv-voucher__badge">
                      <span>{v.badge}</span>
                    </div>
                  </div>

                  <div className="gv-voucher__body">
                    <div className="gv-voucher__corner gv-voucher__corner--bl" />
                    <div className="gv-voucher__corner gv-voucher__corner--br" />

                    <h3 className="gv-voucher__title">{v.title}</h3>
                    <div className="gv-voucher__divider" />
                    <span className="gv-voucher__subtitle">{v.subtitle}</span>
                    <p className="gv-voucher__desc">{v.desc}</p>

                    <div className="gv-voucher__footer">
                      <span className="gv-voucher__price">{v.price}</span>
                      <a
                        href={waHref(v.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gv-voucher__cta"
                      >
                        {t.ctaLabel}
                      </a>
                    </div>

                    <div className="gv-voucher__signature">{t.signature}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="gv-terms-section">
          <div className="gv-section-header">
            <span className="gv-tag">{t.terms.tag}</span>
            <h2 className="gv-section-title">{t.terms.title}</h2>
          </div>

          <div className="gv-terms-card">
            <div className="gv-terms-banner">
              <span className="gv-terms-banner__ornament">✦</span>
              {t.terms.ribbon}
              <span className="gv-terms-banner__ornament">✦</span>
            </div>

            <div className="gv-terms-columns">
              <div className="gv-terms-col gv-terms-col--included">
                <h4 className="gv-terms-col__title">
                  <span className="gv-terms-col__title-icon gv-terms-col__title-icon--good">✓</span>
                  {t.terms.includedLabel}
                </h4>
                {t.terms.included.map((item, i) => (
                  <div key={i} className="gv-terms-row-item">
                    <span className="gv-terms-row-item__icon gv-terms-row-item__icon--good">{item.icon}</span>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="gv-terms-divider" />

              <div className="gv-terms-col gv-terms-col--note">
                <h4 className="gv-terms-col__title">
                  <span className="gv-terms-col__title-icon gv-terms-col__title-icon--note">!</span>
                  {t.terms.noteLabel}
                </h4>
                {t.terms.notes.map((item, i) => (
                  <div key={i} className="gv-terms-row-item">
                    <span className="gv-terms-row-item__icon gv-terms-row-item__icon--note">{item.icon}</span>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="gv-closing-section">
          <div className="gv-closing-card">
            <h3>{t.closing.title}</h3>
            <p>{t.closing.subtitle}</p>
            <a
              href={waHrefGeneric}
              target="_blank"
              rel="noopener noreferrer"
              className="gv-closing-cta"
            >
              {t.closing.cta}
            </a>
          </div>
        </section>
      </FadeIn>

      <Contact language={language} languageSettings={languageSettings} />
      <Footer language={language} languageSettings={languageSettings} />
    </div>
  );
}