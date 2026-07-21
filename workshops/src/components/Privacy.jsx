import React from 'react';
import { Link } from 'react-router-dom';
import './Privacy.css';
import Contact from './Contact';
import Footer from './Footer';

// ⚠️ טיוטה — לא ייעוץ משפטי. יש להעביר לבדיקת עו"ד לפני פרסום.

const translations = {
  he: {
    direction: 'rtl',
    lastUpdated: 'עודכן לאחרונה: 21.07.2026',
    title: 'מדיניות פרטיות',
    sections: [
      {
        heading: '1. כללי',
        body: [
          'מדיניות פרטיות זו חלה על השימוש באתר Genach Workshops (להלן: "האתר"), המופעל על ידי ג\'נאח חברה לשימור עתיקות ויצירת פסיפסים בע"מ (להלן: "אנחנו" או "בעל השליטה במאגר המידע").',
          'המדיניות מסבירה אילו נתונים אנו אוספים ממבקרים באתר, לשם מה, כיצד הם נשמרים ומועברים, ומהן זכויותיך בנוגע למידע זה, בהתאם לחוק הגנת הפרטיות, התשמ"א-1981, לרבות תיקון 13 לחוק.',
          'גלישה באתר ו/או שליחת פרטים דרך טופס יצירת הקשר מהווה הסכמה לתנאי מדיניות זו.',
        ],
      },
      {
        heading: '2. איזה מידע אנו אוספים',
        body: [
          'מידע שאתה מוסר לנו ביודעין: בעת מילוי טופס יצירת קשר באתר, אנו אוספים את הפרטים שאתה מזין — לרבות שם מלא, מספר טלפון וכתובת דוא"ל, וכל תוכן חופשי שתבחר לכתוב בפנייה.',
          'מידע הנאסף אוטומטית בעת גלישה: כתובת IP, סוג דפדפן ומכשיר, עמודים שנצפו, זמן שהייה באתר, ומקור ההגעה לאתר. מידע זה נאסף באמצעות Google Tag Manager, המשמש להפעלת כלי מדידה וניתוח שימוש באתר.',
          'קבצי Cookies: האתר משתמש בעוגיות לצורך תפעולו התקין ולצורך המדידה והפרסום המתוארים לעיל. ניתן לחסום עוגיות בהגדרות הדפדפן שלך, אך ייתכן שהדבר יפגע בתפקוד חלק מהאתר.',
          'האתר אינו כולל מנגנון רכישה או תשלום מקוון, ואיננו אוספים פרטי אמצעי תשלום.',
        ],
      },
      {
        heading: '3. מטרות השימוש במידע',
        body: [
          'מענה לפניות שנשלחות דרך טופס יצירת הקשר ותיאום סדנאות/סיורים.',
          'שיפור האתר וחוויית המשתמש, על בסיס ניתוח דפוסי גלישה מצטברים ואנונימיים ככל הניתן.',
          'פרסום ממוקד (רימרקטינג) המבוסס על פעילותך באתר, ככל שאנו מפעילים כלי פרסום כאלה דרך Google.',
          'עמידה בדרישות חוק ורגולציה.',
        ],
      },
      {
        heading: '4. מסירת מידע לצדדים שלישיים',
        body: [
          'איננו מוכרים את המידע האישי שלך לצדדים שלישיים.',
          'המידע עשוי להיות מועבר לספקי שירות הפועלים מטעמנו, ובכלל זה: Google (עבור Google Tag Manager וכלי המדידה/פרסום המופעלים דרכו), ו-EmailJS — שירות חיצוני המשמש אותנו לשליחת פניות שמולאו בטופס יצירת הקשר ישירות לתיבת הדואר האלקטרוני שלנו.',
          'ככל שתבחר ליצור איתנו קשר דרך WhatsApp, מספר הטלפון שלך יוצג לנו במסגרת אפליקציית WhatsApp, הכפופה למדיניות הפרטיות של Meta.',
          'ייתכן שחלק מספקי השירות הללו ממוקמים מחוץ לישראל, ולכן המידע עשוי לעבור עיבוד גם מחוץ לגבולות המדינה.',
          'לא נעביר את המידע לצד שלישי נוסף אלא אם נידרש לכך על פי דין, צו שיפוטי, או לצורך הגנה על זכויותינו החוקיות.',
        ],
      },
      {
        heading: '5. אבטחת מידע',
        body: [
          'האתר מתארח על גבי תשתית אירוח חיצונית התומכת בהצפנת תעבורה (HTTPS) כברירת מחדל. האתר עצמו הוא אתר סטטי ואינו כולל מסד נתונים או שרת אחורי (Backend) מטעמנו, ולכן אינו שומר את פרטי טופס יצירת הקשר בשום מאגר מידע בבעלותנו — הפנייה מועברת ישירות לתיבת הדואר האלקטרוני שלנו באמצעות שירות EmailJS.',
          'עם זאת, אין אפשרות להבטיח הגנה מוחלטת מפני כל פגיעה אפשרית, לרבות פגיעה אצל ספקי השירות החיצוניים המעורבים (כגון EmailJS, Google), והשימוש באתר הוא באחריותך.',
        ],
      },
      {
        heading: '6. משך שמירת המידע',
        body: [
          'פניות שנשלחות דרך טופס יצירת הקשר מגיעות אלינו כהודעת דואר אלקטרוני, ונשמרות בתיבת הדואר שלנו לצורך תיעוד עסקי, ללא מגבלת זמן קבועה מראש — בדומה לכל התכתבות עסקית רגילה.',
          'אם תבקש מאיתנו למחוק את פרטיך, נמחק את הפנייה הרלוונטית מתיבת הדואר שלנו באופן ידני, בתוך זמן סביר ממועד קבלת הבקשה (ראו סעיף 7 לזכויותיך).',
          'מידע הנאסף באמצעות Google Tag Manager וכלים המופעלים דרכו נשמר בהתאם למדיניות השמירה של Google, כפי שמפורט במדיניות הפרטיות שלה.',
        ],
      },
      {
        heading: '7. זכויותיך',
        body: [
          'בהתאם לחוק הגנת הפרטיות, בכל עת זכותך:',
          '• לעיין במידע האישי שלך המוחזק אצלנו.',
          '• לבקש תיקון של מידע שגוי או לא מעודכן.',
          '• לבקש מחיקת מידע, בכפוף לחובות שמירה חוקיות החלות עלינו.',
          '• להתנגד לשימוש במידע שלך לצרכי דיוור ישיר/פרסום, ולבקש הסרה מרשימות תפוצה.',
          'לצורך מימוש זכויות אלה, ניתן לפנות אלינו בפרטי הקשר המופיעים בסעיף 9 להלן. נשתדל להשיב לבקשתך בתוך זמן סביר ובהתאם לדרישות החוק.',
        ],
      },
      {
        heading: '8. שינויים במדיניות',
        body: [
          'אנו רשאים לעדכן מדיניות פרטיות זו מעת לעת. שינויים מהותיים יפורסמו בעמוד זה עם ציון תאריך העדכון. המשך השימוש באתר לאחר פרסום שינויים מהווה הסכמה לתנאים המעודכנים.',
        ],
      },
      {
        heading: '9. יצירת קשר',
        body: [
          'לשאלות, בקשות או תלונות בנוגע לפרטיותך, ניתן לפנות אלינו:',
          'טלפון: 052-394-8920',
          'דוא"ל: genach2@bezeqint.net',
        ],
      },
    ],
  },
  en: {
    direction: 'ltr',
    lastUpdated: 'Last updated: July 21, 2026',
    title: 'Privacy Policy',
    sections: [
      {
        heading: '1. General',
        body: [
          'This Privacy Policy applies to your use of the Genach Workshops website (the "Site"), operated by Genach Company for Antiquities Preservation and Mosaic Creation Ltd. ("we", "us", or the "data controller").',
          'This policy explains what data we collect from Site visitors, for what purposes, how it is stored and transferred, and your rights regarding that data, in accordance with the Israeli Privacy Protection Law, 1981, including Amendment 13.',
          'By browsing the Site and/or submitting details through the contact form, you consent to the terms of this policy.',
        ],
      },
      {
        heading: '2. What Information We Collect',
        body: [
          'Information you knowingly provide: when filling out the contact form, we collect the details you enter — including full name, phone number, email address, and any free text you choose to write in your inquiry.',
          'Information collected automatically while browsing: IP address, browser and device type, pages viewed, time spent on the Site, and referral source. This information is collected via Google Tag Manager, which is used to run usage measurement and analytics tools on the Site.',
          'Cookies: the Site uses cookies for its proper operation and for the measurement and advertising purposes described above. You may block cookies in your browser settings, though this may affect some Site functionality.',
          'The Site does not include an online purchase or payment mechanism, and we do not collect payment method details.',
        ],
      },
      {
        heading: '3. Purposes of Use',
        body: [
          'Responding to inquiries submitted through the contact form and coordinating workshops/tours.',
          'Improving the Site and user experience, based on aggregated and, where possible, anonymized browsing pattern analysis.',
          'Targeted advertising (remarketing) based on your activity on the Site, to the extent we run such advertising tools through Google.',
          'Compliance with legal and regulatory requirements.',
        ],
      },
      {
        heading: '4. Disclosure to Third Parties',
        body: [
          'We do not sell your personal information to third parties.',
          'Your information may be shared with service providers acting on our behalf, including: Google (for Google Tag Manager and the measurement/advertising tools run through it), and EmailJS — a third-party service we use to deliver contact form submissions directly to our email inbox.',
          'If you choose to contact us via WhatsApp, your phone number will be visible to us within the WhatsApp application, which is subject to Meta\'s own privacy policy.',
          'Some of these service providers may be located outside Israel, meaning your data may be processed outside the country.',
          'We will not transfer your information to any additional third party except where required by law, court order, or to protect our legal rights.',
        ],
      },
      {
        heading: '5. Data Security',
        body: [
          'The Site is hosted on external hosting infrastructure that supports encrypted traffic (HTTPS) by default. The Site itself is a static site and does not include a database or backend server of our own — it does not store contact form details in any database we own. Submissions are delivered directly to our email inbox via the EmailJS service.',
          'That said, no method of protection can be guaranteed as completely secure, including at the external service providers involved (such as EmailJS and Google), and use of the Site is at your own risk.',
        ],
      },
      {
        heading: '6. Data Retention',
        body: [
          'Inquiries submitted through the contact form reach us as an email message, and are retained in our inbox for business record-keeping, without a predetermined fixed time limit — similar to ordinary business correspondence.',
          'If you ask us to delete your details, we will manually delete the relevant inquiry from our inbox within a reasonable time of receiving your request (see Section 7, Your Rights).',
          'Information collected via Google Tag Manager and tools run through it is retained according to Google\'s own retention policy, as detailed in its privacy policy.',
        ],
      },
      {
        heading: '7. Your Rights',
        body: [
          'Under the Privacy Protection Law, you are entitled at any time to:',
          '• Access the personal information we hold about you.',
          '• Request correction of inaccurate or outdated information.',
          '• Request deletion of your information, subject to our legal retention obligations.',
          '• Object to the use of your information for direct marketing purposes and request removal from mailing lists.',
          'To exercise these rights, please contact us using the details in Section 9 below. We will respond to your request within a reasonable time and in accordance with legal requirements.',
        ],
      },
      {
        heading: '8. Changes to This Policy',
        body: [
          'We may update this Privacy Policy from time to time. Material changes will be posted on this page along with an updated date. Continued use of the Site after changes are posted constitutes acceptance of the updated terms.',
        ],
      },
      {
        heading: '9. Contact Us',
        body: [
          'For questions, requests, or complaints regarding your privacy, please contact us:',
          'Phone: 052-394-8920',
          'Email: genach2@bezeqint.net',
        ],
      },
    ],
  },
};

export default function Privacy({ language = 'he', languageSettings }) {
  const t = translations[language];
  const settings = languageSettings ? languageSettings[language] : { direction: t.direction, textAlign: t.direction === 'rtl' ? 'right' : 'left' };
  const backToHomeText = language === 'he' ? 'חזרה לדף הבית' : 'Back to Home';

  return (
    <div id="privacyPage" style={{ direction: settings.direction }}>
      <div className="privacy-container">
        <h1 className="privacy-title">{t.title}</h1>
        <p className="privacy-updated">{t.lastUpdated}</p>

        {t.sections.map((section, i) => (
          <section key={i} className="privacy-section">
            <h2 className="privacy-heading">{section.heading}</h2>
            {section.body.map((paragraph, j) => (
              <p key={j} className="privacy-paragraph">{paragraph}</p>
            ))}
          </section>
        ))}

        <Link
          id="hazara"
          to="/"
          className="privacy-back-home"
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