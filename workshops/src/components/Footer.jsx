import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const translations = {
  he: {
    rightsText: "© כל הזכויות שמורות ל- Genach Workshops",
    accessibilityLinkText: "הצהרת נגישות",
    privacyLinkText: "מדיניות פרטיות",
    termsLinkText: "תנאי שימוש",
  },
  en: {
    rightsText: "© All rights reserved to Genach Workshops",
    accessibilityLinkText: "Accessibility Statement",
    privacyLinkText: "Privacy Policy",
    termsLinkText: "Terms of Use",
  },
  // אפשר להוסיף שפות נוספות כאן בעתיד
};

export default function Footer({ language, languageSettings }) {
  const { rightsText, accessibilityLinkText, privacyLinkText, termsLinkText } = translations[language];

  // תיקון: צריך לעטוף קריאת window.scrollTo בפונקציה כדי לא לקרוא מיד
  const handleClick = () => window.scrollTo(0, 0);
  const settings = languageSettings[language];

  return (
    <footer className="footer">
      <p style={{
        direction: settings.direction,

      }}>{rightsText}</p>

      <div className="footer-links" style={{ direction: settings.direction }}>
        <Link
          id="hazharatNegishutLink"
          className="footer-link"
          to="/hazharatNegishut"
          onClick={handleClick}
        >
          {accessibilityLinkText}
        </Link>

        <Link
          id="privacyPolicyLink"
          className="footer-link"
          to="/privacy"
          onClick={handleClick}
        >
          {privacyLinkText}
        </Link>

        <Link
          id="termsOfUseLink"
          className="footer-link"
          to="/terms"
          onClick={handleClick}
        >
          {termsLinkText}
        </Link>
      </div>
    </footer>
  );
}