import React from 'react';
import { Link } from 'react-router-dom';
import './Terms.css';
import Contact from './Contact';
import Footer from './Footer';

// ⚠️ טיוטה — לא ייעוץ משפטי. יש להעביר לבדיקת עו"ד לפני פרסום.

const translations = {
  he: {
    direction: 'rtl',
    lastUpdated: 'עודכן לאחרונה: 21.07.2026',
    title: 'תנאי שימוש',
    sections: [
      {
        heading: '1. הסכמה לתנאים',
        body: [
          'ברוכים הבאים לאתר Genach Workshops (להלן: "האתר"), המופעל על ידי ג\'נאח חברה לשימור עתיקות ויצירת פסיפסים בע"מ (להלן: "אנחנו" או "בעל האתר").',
          'הכניסה לאתר והשימוש בו מהווים הסכמה מלאה לתנאי שימוש אלה. אם אינך מסכים לתנאים אלה, כולם או חלקם, אנא הימנע משימוש באתר.',
          'תנאים אלה חלים בנוסף למדיניות הפרטיות של האתר, ואינם מחליפים אותה.',
        ],
      },
      {
        heading: '2. מהות השירותים',
        body: [
          'האתר מציג מידע אודות סדנאות קדרות, סדנאות פסיפס, סיורים מודרכים ואירועי חברות המופעלים על ידינו, לרבות תמונות, תיאורים ומחירים משוערים.',
          'האתר אינו מאפשר רכישה או תשלום מקוון. תיאום והזמנה בפועל של סדנה, סיור או אירוע מתבצעים בתיאום אישי מולנו — בטלפון, בוואטסאפ או בטופס יצירת הקשר — ואינם נכנסים לתוקף אלא לאחר אישור מפורש מצדנו.',
          'המחירים, הזמינות ופרטי השירותים המוצגים באתר עשויים להשתנות ללא הודעה מוקדמת, ואינם מהווים הצעה מחייבת מצדנו.',
        ],
      },
      {
        heading: '3. ביטולים ושינויים',
        body: [
          'איננו גובים דמי ביטול מלקוחות שמבטלים הזמנה של סדנה, סיור או אירוע.',
          'עם זאת, נשמח לקבל הודעה מוקדמת ככל הניתן על ביטול או שינוי מועד, כדי לאפשר לנו להיערך בהתאם ולפנות את המקום ללקוחות אחרים.',
          'במקרים חריגים (כגון מזג אוויר קיצוני, כוח עליון או נסיבות בטיחותיות) אנו שומרים לעצמנו את הזכות לדחות או לבטל פעילות, ונפעל לתאם מועד חלופי בתיאום עם הלקוח.',
        ],
      },
      {
        heading: '4. שימוש נאות באתר',
        body: [
          'הנך מתחייב להשתמש באתר למטרות חוקיות בלבד, ולא לבצע כל פעולה העלולה לפגוע בתפקוד האתר, באבטחתו, או בזכויות צדדים שלישיים.',
          'חל איסור על: ניסיון לפרוץ לאתר או לשרתים המשרתים אותו; שימוש בכלים אוטומטיים לאיסוף תוכן מהאתר (Scraping) ללא רשות; העלאת תוכן פוגעני, מטעה או בלתי חוקי דרך טופס יצירת הקשר; וכל שימוש אחר שיש בו כדי לפגוע בנו או במשתמשים אחרים.',
        ],
      },
      {
        heading: '5. קניין רוחני',
        body: [
          'כל הזכויות בתכני האתר — לרבות טקסטים, תמונות, סרטונים, לוגו, עיצוב וקוד — שייכות לנו או לצדדים שלישיים שהעניקו לנו רישיון שימוש, ומוגנות בדיני זכויות יוצרים וקניין רוחני.',
          'אין להעתיק, לשכפל, להפיץ, לפרסם או לעשות כל שימוש מסחרי בתכני האתר ללא קבלת רשות מפורשת מראש ובכתב.',
        ],
      },
      {
        heading: '6. הגבלת אחריות',
        body: [
          'האתר והמידע בו מוצגים כפי שהם ("As Is"). אנו עושים מאמץ סביר לשמור על דיוק ועדכניות המידע, אך איננו מתחייבים כי המידע באתר מדויק, שלם או נקי משגיאות בכל עת.',
          'איננו אחראים לכל נזק, ישיר או עקיף, שייגרם כתוצאה משימוש באתר, מהסתמכות על המידע בו, מתקלות טכניות, או מגישה בלתי מורשית לנתונים.',
          'האתר עשוי לכלול קישורים לאתרים חיצוניים (כגון וואטסאפ, רשתות חברתיות, Get Your Guide). איננו אחראים לתוכן, למדיניות הפרטיות או לזמינות של אתרים חיצוניים אלה.',
          'סדנאות וסיורים עשויים להיות כפופים לתנאי מזג אוויר, בטיחות או כוח עליון, ואנו שומרים לעצמנו את הזכות לדחות, לשנות או לבטל פעילות מטעמים אלה, בהתאם לסעיף 3 לעיל.',
        ],
      },
      {
        heading: '7. שינויים בתנאי השימוש',
        body: [
          'אנו רשאים לעדכן תנאי שימוש אלה מעת לעת. שינויים מהותיים יפורסמו בעמוד זה עם ציון תאריך העדכון. המשך השימוש באתר לאחר פרסום שינויים מהווה הסכמה לתנאים המעודכנים.',
        ],
      },
      {
        heading: '8. דין וסמכות שיפוט',
        body: [
          'על תנאי שימוש אלה יחולו דיני מדינת ישראל בלבד. סמכות השיפוט הבלעדית בכל מחלוקת הנוגעת לאתר ו/או לתנאים אלה תהא נתונה לבתי המשפט המוסמכים במחוז חיפה (אזור חוף הכרמל).',
        ],
      },
      {
        heading: '9. יצירת קשר',
        body: [
          'לשאלות או הבהרות בנוגע לתנאי שימוש אלה, ניתן לפנות אלינו:',
          'טלפון: 052-394-8920',
          'דוא"ל: genach2@bezeqint.net',
        ],
      },
    ],
  },
  en: {
    direction: 'ltr',
    lastUpdated: 'Last updated: July 21, 2026',
    title: 'Terms of Use',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        body: [
          'Welcome to the Genach Workshops website (the "Site"), operated by Genach Company for Antiquities Preservation and Mosaic Creation Ltd. ("we", "us", or the "Site owner").',
          'By accessing and using the Site, you fully agree to these Terms of Use. If you do not agree to these terms, in whole or in part, please refrain from using the Site.',
          'These terms apply in addition to the Site\'s Privacy Policy and do not replace it.',
        ],
      },
      {
        heading: '2. Nature of the Services',
        body: [
          'The Site presents information about pottery workshops, mosaic workshops, guided tours, and corporate events that we operate, including photos, descriptions, and estimated prices.',
          'The Site does not support online purchases or payments. Actual booking of a workshop, tour, or event is coordinated with us personally — by phone, WhatsApp, or the contact form — and is only confirmed following our explicit approval.',
          'Prices, availability, and service details shown on the Site are subject to change without notice and do not constitute a binding offer on our part.',
        ],
      },
      {
        heading: '3. Cancellations and Changes',
        body: [
          'We do not charge a cancellation fee for customers who cancel a booked workshop, tour, or event.',
          'That said, we\'d appreciate as much advance notice as possible of a cancellation or date change, so we can plan accordingly and offer the slot to other customers.',
          'In exceptional cases (such as extreme weather, force majeure, or safety-related circumstances) we reserve the right to postpone or cancel an activity, and will work with the customer to arrange an alternative date.',
        ],
      },
      {
        heading: '4. Acceptable Use',
        body: [
          'You agree to use the Site only for lawful purposes, and not to take any action that could harm the Site\'s functionality, security, or the rights of third parties.',
          'The following are prohibited: attempting to breach the Site or its servers; using automated tools to scrape content from the Site without permission; submitting offensive, misleading, or unlawful content via the contact form; and any other use that could harm us or other users.',
        ],
      },
      {
        heading: '5. Intellectual Property',
        body: [
          'All rights in the Site\'s content — including text, images, videos, logo, design, and code — belong to us or to third parties who have granted us a license to use them, and are protected under copyright and intellectual property law.',
          'You may not copy, reproduce, distribute, publish, or make any commercial use of the Site\'s content without our prior express written permission.',
        ],
      },
      {
        heading: '6. Limitation of Liability',
        body: [
          'The Site and its content are provided "as is". We make reasonable efforts to keep the information accurate and up to date, but we do not guarantee that the Site\'s content is accurate, complete, or error-free at all times.',
          'We are not liable for any direct or indirect damage resulting from use of the Site, reliance on its content, technical malfunctions, or unauthorized access to data.',
          'The Site may include links to external websites (such as WhatsApp, social media, Get Your Guide). We are not responsible for the content, privacy practices, or availability of these external sites.',
          'Workshops and tours may be subject to weather, safety, or force majeure conditions, and we reserve the right to postpone, modify, or cancel an activity on these grounds, in accordance with Section 3 above.',
        ],
      },
      {
        heading: '7. Changes to These Terms',
        body: [
          'We may update these Terms of Use from time to time. Material changes will be posted on this page along with an updated date. Continued use of the Site after changes are posted constitutes acceptance of the updated terms.',
        ],
      },
      {
        heading: '8. Governing Law and Jurisdiction',
        body: [
          'These Terms of Use are governed solely by the laws of the State of Israel. Exclusive jurisdiction over any dispute relating to the Site and/or these terms shall lie with the competent courts of the Haifa District (Hof HaCarmel area).',
        ],
      },
      {
        heading: '9. Contact Us',
        body: [
          'For questions or clarifications regarding these Terms of Use, please contact us:',
          'Phone: 052-394-8920',
          'Email: genach2@bezeqint.net',
        ],
      },
    ],
  },
};

export default function Terms({ language = 'he', languageSettings }) {
  const t = translations[language];
  const settings = languageSettings ? languageSettings[language] : { direction: t.direction, textAlign: t.direction === 'rtl' ? 'right' : 'left' };
  const backToHomeText = language === 'he' ? 'חזרה לדף הבית' : 'Back to Home';

  return (
    <div id="termsPage" style={{ direction: settings.direction }}>
      <div className="terms-container">
        <h1 className="terms-title">{t.title}</h1>
        <p className="terms-updated">{t.lastUpdated}</p>

        {t.sections.map((section, i) => (
          <section key={i} className="terms-section">
            <h2 className="terms-heading">{section.heading}</h2>
            {section.body.map((paragraph, j) => (
              <p key={j} className="terms-paragraph">{paragraph}</p>
            ))}
          </section>
        ))}

        <Link
          id="hazara"
          to="/"
          className="terms-back-home"
          onClick={() => window.scrollTo(0, 0)}
        >
          {backToHomeText}
        </Link>
      </div>
      <Contact language={language} languageSettings={languageSettings} />
      <Footer language={language} languageSettings={languageSettings} />
    </div>
  );
}