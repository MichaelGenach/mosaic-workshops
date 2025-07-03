import React from 'react'
import { Link } from 'react-router-dom'
import './HazharatNegishut.css'
import Contact from './Contact'
import Footer from './Footer'

const translations = {
  he: {
    accessibilityTitle: 'הצהרת נגישות',
    accessibilityIntro: 'באתר Genach Workshops אנו פועלים להבטיח חוויית גלישה נגישה ונוחה לכלל המשתמשים, מתוך מחויבות לאפשר שוויון הזדמנויות וגלישה מכבדת עבור אנשים עם מוגבלויות.',
    accessibilityAdjustmentsTitle: 'התאמות נגישות שבוצעו באתר:',
    accessibilityAdjustmentsList: [
      'האתר כולל כפתור נגישות צף בפינה הימנית התחתונה ("נגיש לי") המאפשר התאמה אישית של צבעים, גודל טקסט ועוד.',
      'האתר ניתן לניווט מלא באמצעות מקלדת, באמצעות מקש Tab, Shift + Tab ו- Enter.',
    ],
    contactAccessibilityTitle: 'יצירת קשר בנושא נגישות:',
    contactAccessibilityText1: 'במידה ונתקלתם בקושי או בעיה הקשורה לנגישות באתר, נשמח שתעדכנו אותנו ואנו נעשה כמיטב יכולתנו לסייע ולפתור את הבעיה.',
    contactAccessibilityText2: 'ניתן ליצור קשר באמצעים המופיעים באתר, כולל טופס יצירת קשר, קישורים בתחתית הדפים ואמצעי ההתקשרות האחרים או דרך המספר: 0523948920.',
    backToHome: 'חזרה לדף הבית',
  },
  en: {
    accessibilityTitle: 'Accessibility Statement',
    accessibilityIntro: 'At Genach Workshops website, we strive to ensure an accessible and comfortable browsing experience for all users, committed to providing equal opportunity and respectful browsing for people with disabilities.',
    accessibilityAdjustmentsTitle: 'Accessibility adaptations made on the site:',
    accessibilityAdjustmentsList: [
      'The site includes a floating accessibility button at the bottom right corner ("Accessible for me") allowing customization of colors, text size, and more.',
      'The site is fully navigable via keyboard, using Tab, Shift + Tab, and Enter keys.',
    ],
    contactAccessibilityTitle: 'Contact regarding accessibility:',
    contactAccessibilityText1: 'If you encounter any difficulty or issue related to accessibility on the site, please let us know and we will do our best to assist and resolve the problem.',
    contactAccessibilityText2: 'You can contact us using the means listed on the site, including the contact form, footer links, other contact methods, or via phone: 0523948920.',
    backToHome: 'Back to Home',
  },
  // כאן אפשר להוסיף שפות נוספות בקלות
}

export default function HazharatNegishut({ language, languageSettings }) {
  const t = translations[language];
  const settings = languageSettings[language];


  return (
    <div>
      <div className="accessibility-statement" style={{
        direction: settings.direction,
        textAlign: settings.textAlign
      }}>
        <h2>{t.accessibilityTitle}</h2>
        <p>{t.accessibilityIntro}</p>

        <h3>{t.accessibilityAdjustmentsTitle}</h3>
        <ul>
          {t.accessibilityAdjustmentsList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>{t.contactAccessibilityTitle}</h3>
        <p>{t.contactAccessibilityText1}</p>
        <p>{t.contactAccessibilityText2}</p>
      </div>

      <Link
        id="hazara"
        to="/"
        onClick={() => window.scrollTo(0, 0)}
      >
        {t.backToHome}
      </Link>


      <Contact language={language} languageSettings={languageSettings} />
      <Footer language={language} languageSettings={languageSettings} />
    </div>
  )
}
