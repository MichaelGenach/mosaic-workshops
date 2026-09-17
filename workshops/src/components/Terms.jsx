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

          'הכניסה לאתר והשימוש בו מהווים הסכמה לתנאי שימוש אלה. אם אינך מסכים לתנאים אלה, כולם או חלקם, אנא הימנע מהשימוש באתר.',

          'תנאי שימוש אלה חלים בנוסף למדיניות הפרטיות של האתר ואינם מחליפים אותה.',

        ],

      },

      {

        heading: '2. מהות השירותים',

        body: [

          'האתר מציג מידע אודות סדנאות קדרות, סדנאות פסיפס, סיורים מודרכים, אירועי חברות ושירותים נוספים המוצעים על ידינו, לרבות תמונות, תיאורים ומחירים.',

          'האתר אינו מאפשר רכישה או תשלום מקוון. תיאום והזמנה של סדנה, סיור או אירוע מתבצעים בתיאום אישי מולנו — בטלפון, בוואטסאפ או בטופס יצירת הקשר — והזמנה אינה נחשבת מאושרת או מחייבת מצדנו אלא לאחר קבלת אישור מפורש מאיתנו.',

          'המחירים, הזמינות, מועדי הפעילות ופרטי השירותים המוצגים באתר עשויים להשתנות מעת לעת ללא הודעה מוקדמת, ואינם מהווים הצעה מחייבת להתקשרות.',

        ],

      },

      {

        heading: '3. ביטולים, שינויים ואי-הגעה',

        body: [

          'אנו משתדלים לאפשר ללקוחות גמישות מרבית בנוגע לביטול או שינוי הזמנות.',

          'ביטול הזמנה שנעשה מבעוד מועד לא יחויב בדרך כלל בדמי ביטול, בהתאם למדיניות העסק ובכפוף להוראות כל דין.',

          'עם זאת, ביטול בהתראה קצרה מאוד, ובפרט ביטול בסמוך למועד תחילת הסדנה, הסיור או האירוע, וכן אי-הגעה ללא הודעה מוקדמת, עלולים לגרום לנו נזק והוצאות, לרבות שמירת מקום, הכנת חומרים וציוד, הקצאת כוח אדם ואובדן האפשרות להזמין לקוחות אחרים.',

          'במקרים כאמור, אנו רשאים לגבות דמי ביטול או סכום אחר המותר על פי דין, בהתאם לנסיבות המקרה ולתנאים שנמסרו ללקוח בעת ביצוע ההזמנה.',

          'גובה דמי הביטול, ככל שייגבו, ייקבע בכפוף להוראות הדין החלות על העסקה, ולא יעלה על הסכום המותר על פי דין.',

          'במקרים חריגים ומוצדקים, אנו רשאים לוותר על דמי הביטול, כולם או חלקם, לפי שיקול דעתנו.',

          'במקרה של שינוי מועד, ניתן לפנות אלינו ונעשה מאמץ סביר לאפשר את שינוי המועד בהתאם לזמינות.',

          'במקרים חריגים, לרבות מזג אוויר קיצוני, מצב ביטחוני, נסיבות בטיחותיות, כוח עליון או נסיבות אחרות שאינן בשליטתנו, אנו רשאים לדחות, לשנות או לבטל פעילות. במקרה כזה נעשה מאמץ סביר לתאם עם הלקוח מועד חלופי, בהתאם לנסיבות ולזמינות.',

          'הוראות סעיף זה כפופות תמיד לזכויות המוקנות לצרכן על פי דין, לרבות הוראות חוק הגנת הצרכן והתקנות מכוחו, ככל שהן חלות על העסקה.',

        ],

      },

      {

        heading: '4. שימוש נאות באתר',

        body: [

          'הנך מתחייב להשתמש באתר למטרות חוקיות בלבד ולא לבצע כל פעולה העלולה לפגוע בתפקוד האתר, באבטחתו או בזכויותינו או בזכויות צדדים שלישיים.',

          'בין היתר, חל איסור על: ניסיון לפרוץ לאתר או לשרתים המשרתים אותו; ניסיון להשיג גישה בלתי מורשית למידע או למערכות; שימוש בכלים אוטומטיים לצורך איסוף, העתקה או כרייה של תכנים מהאתר (Scraping) ללא רשות מראש; העלאת תוכן פוגעני, מטעה, מאיים או בלתי חוקי באמצעות טופס יצירת הקשר; ביצוע פעולה העלולה להכביד באופן בלתי סביר על תשתיות האתר; וכל שימוש אחר העלול לגרום נזק לנו, לאתר או למשתמשים אחרים.',

        ],

      },

      {

        heading: '5. קניין רוחני',

        body: [

          'כל הזכויות בתכני האתר, לרבות טקסטים, תמונות, סרטונים, לוגו, עיצוב, גרפיקה, קוד ותכנים אחרים, שייכות לנו או לצדדים שלישיים שהעניקו לנו רישיון שימוש בהם, ומוגנות על פי דיני זכויות היוצרים והקניין הרוחני.',

          'אין להעתיק, לשכפל, להפיץ, לפרסם, לשנות, להציג בפומבי או לעשות שימוש מסחרי בתכני האתר ללא קבלת אישור מפורש מראש ובכתב מבעל הזכויות.',

          'אין באמור כדי לגרוע מזכויות המותרות על פי דין.',

        ],

      },

      {

        heading: '6. הגבלת אחריות',

        body: [

          'האתר והתכנים המוצגים בו ניתנים כפי שהם ("As Is").',

          'אנו עושים מאמץ סביר לשמור על כך שהמידע באתר יהיה נכון ועדכני, אולם ייתכנו טעויות, אי-דיוקים, שינויים או השמטות, ואיננו מתחייבים שהמידע באתר יהיה מדויק, מלא או מעודכן בכל עת.',

          'אין לראות במידע המוצג באתר התחייבות לכך ששירות מסוים יהיה זמין במועד מסוים או במחיר מסוים. פרטי ההזמנה הסופיים ייקבעו בתיאום מולנו.',

          'איננו אחראים, בכפוף לכל דין, לנזק שנגרם כתוצאה מתקלה טכנית, הפסקת פעילות האתר, שימוש באתר, הסתמכות על מידע שאינו מעודכן או גישה בלתי מורשית למערכות.',

          'האתר עשוי לכלול קישורים לשירותים ואתרים חיצוניים, לרבות WhatsApp, רשתות חברתיות ואתרי הזמנת שירותים כגון GetYourGuide. איננו אחראים לתוכן, לזמינות, לאבטחה או למדיניות הפרטיות של אתרים ושירותים אלה, והשימוש בהם כפוף לתנאיהם ולמדיניות שלהם.',

          'פעילויות המוצעות על ידינו עשויות להיות מושפעות מתנאי מזג אוויר, מצב ביטחוני, שיקולי בטיחות, כוח עליון או נסיבות אחרות שאינן בשליטתנו. במקרים כאלה אנו רשאים לדחות, לשנות או לבטל פעילות בהתאם לסעיף 3 לעיל.',

        ],

      },

      {

        heading: '7. שינויים בתנאי השימוש',

        body: [

          'אנו רשאים לעדכן תנאי שימוש אלה מעת לעת. שינויים מהותיים יפורסמו בעמוד זה ויצוין בו מועד העדכון האחרון.',

          'המשך השימוש באתר לאחר פרסום שינוי מהותי יהווה הסכמה לתנאים המעודכנים, ככל שהדבר מותר על פי דין.',

        ],

      },

      {

        heading: '8. דין וסמכות שיפוט',

        body: [

          'על תנאי שימוש אלה יחולו דיני מדינת ישראל בלבד.',

          'כל מחלוקת הנוגעת לאתר או לתנאי שימוש אלה תידון בהתאם לדין הישראלי ובפני בית המשפט המוסמך לפי הדין.',

          'אין באמור בסעיף זה כדי לגרוע מזכויות צרכניות או מסמכות שיפוט המוקנות ללקוח על פי דין.',

        ],

      },

      {

        heading: '9. יצירת קשר',

        body: [

          'לשאלות, בקשות או הבהרות בנוגע לתנאי שימוש אלה, ניתן לפנות אלינו:',

          'טלפון: 052-394-8920',

          'דוא"ל: [genach2@bezeqint.net](mailto:genach2@bezeqint.net)',

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

          'Welcome to the Genach Workshops website (the "Site"), operated by Genach Company for Antiquities Preservation and Mosaic Creation Ltd. ("we", "us", or the "Site Owner").',

          'By accessing or using the Site, you agree to these Terms of Use. If you do not agree to these terms, in whole or in part, please refrain from using the Site.',

          'These Terms of Use apply in addition to the Site\'s Privacy Policy and do not replace it.',

        ],

      },

      {

        heading: '2. Services',

        body: [

          'The Site provides information about pottery workshops, mosaic workshops, guided tours, corporate events, and other services offered by us, including photographs, descriptions, and prices.',

          'The Site does not provide online purchasing or payment. Arrangements and bookings for workshops, tours, or events are made directly with us by telephone, WhatsApp, or through the contact form. A booking is not considered confirmed or binding on us until we have expressly confirmed it.',

          'Prices, availability, schedules, and service details displayed on the Site may change from time to time without prior notice and do not constitute a binding offer.',

        ],

      },

      {

        heading: '3. Cancellations, Changes, and No-Shows',

        body: [

          'We strive to provide our customers with reasonable flexibility regarding cancellations and changes to bookings.',

          'Cancellations made sufficiently in advance will generally not be subject to a cancellation fee, in accordance with our business policy and subject to applicable law.',

          'However, a cancellation made at very short notice, particularly shortly before the scheduled start of a workshop, tour, or event, as well as a failure to attend without prior notice, may cause us losses and expenses, including reserved capacity, preparation of materials and equipment, allocation of staff, and the loss of the opportunity to accept other customers.',

          'In such cases, we may charge a cancellation fee or other amount permitted by law, taking into account the circumstances of the cancellation and the terms communicated to the customer at the time of booking.',

          'Any cancellation fee charged will be determined in accordance with applicable law and will not exceed the amount permitted by law.',

          'In exceptional or justified circumstances, we may, at our discretion, waive all or part of any cancellation fee.',

          'If you wish to change the date of your booking, you may contact us, and we will make reasonable efforts to accommodate the requested change, subject to availability.',

          'In exceptional circumstances, including extreme weather, security conditions, safety concerns, force majeure, or other circumstances beyond our reasonable control, we may postpone, modify, or cancel an activity. In such cases, we will make reasonable efforts to coordinate an alternative date with the customer, subject to the circumstances and availability.',

          'This section is always subject to any rights granted to consumers under applicable law, including the Israeli Consumer Protection Law and regulations enacted thereunder, to the extent applicable to the transaction.',

        ],

      },

      {

        heading: '4. Acceptable Use',

        body: [

          'You agree to use the Site only for lawful purposes and not to engage in any activity that may harm the Site, its security, our rights, or the rights of third parties.',

          'The following are prohibited: attempting to hack or gain unauthorized access to the Site or its servers; attempting to obtain unauthorized access to information or systems; using automated tools to collect, copy, extract, or scrape content from the Site without prior permission; submitting offensive, misleading, threatening, or unlawful content through the contact form; performing actions that may place an unreasonable burden on the Site\'s infrastructure; and any other use that may cause harm to us, the Site, or other users.',

        ],

      },

      {

        heading: '5. Intellectual Property',

        body: [

          'All rights in the content of the Site, including text, photographs, videos, logos, design, graphics, code, and other materials, are owned by us or by third parties who have granted us permission to use them, and are protected under applicable copyright and intellectual property laws.',

          'You may not copy, reproduce, distribute, publish, modify, publicly display, or commercially use any content from the Site without the prior express written permission of the applicable rights holder.',

          'Nothing in this section shall limit any rights permitted by law.',

        ],

      },

      {

        heading: '6. Limitation of Liability',

        body: [

          'The Site and its content are provided on an "As Is" basis.',

          'We make reasonable efforts to ensure that the information presented on the Site is accurate and up to date. However, errors, inaccuracies, changes, or omissions may occur, and we do not guarantee that the information on the Site will always be accurate, complete, or current.',

          'Information displayed on the Site should not be considered a guarantee that a particular service will be available at a particular time or at a particular price. Final booking details will be determined directly with us.',

          'To the extent permitted by applicable law, we shall not be liable for damages resulting from technical failures, interruption of the Site, use of the Site, reliance on outdated information, or unauthorized access to systems.',

          'The Site may contain links to external websites and services, including WhatsApp, social media platforms, and service-booking websites such as GetYourGuide. We are not responsible for the content, availability, security, or privacy practices of such external websites or services. Your use of such services is subject to their respective terms and privacy policies.',

          'Activities offered by us may be affected by weather conditions, security situations, safety considerations, force majeure, or other circumstances beyond our reasonable control. In such cases, we may postpone, modify, or cancel an activity in accordance with Section 3 above.',

        ],

      },

      {

        heading: '7. Changes to These Terms',

        body: [

          'We reserve the right to update these Terms of Use from time to time. Material changes will be published on this page, together with the date of the latest update.',

          'Your continued use of the Site after material changes have been published constitutes acceptance of the updated Terms, to the extent permitted by applicable law.',

        ],

      },

      {

        heading: '8. Governing Law and Jurisdiction',

        body: [

          'These Terms of Use shall be governed exclusively by the laws of the State of Israel.',

          'Any dispute relating to the Site or these Terms of Use shall be governed by Israeli law and brought before the court having jurisdiction under applicable law.',

          'Nothing in this section shall limit any consumer rights or jurisdiction granted to a customer under applicable law.',

        ],

      },

      {

        heading: '9. Contact Us',

        body: [

          'For questions, requests, or clarifications regarding these Terms of Use, you may contact us:',

          'Phone: 052-394-8920',

          'Email: [genach2@bezeqint.net](mailto:genach2@bezeqint.net)',

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