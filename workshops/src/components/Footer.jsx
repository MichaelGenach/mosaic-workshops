import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const translations = {
  he: {
    rightsText: "© כל הזכויות שמורות ל- Genach Workshops",
    accessibilityLinkText: "הצהרת נגישות",
  },
  en: {
    rightsText: "© All rights reserved to Genach Workshops",
    accessibilityLinkText: "Accessibility Statement",
  },
  // אפשר להוסיף שפות נוספות כאן בעתיד
};

export default function Footer({ language, languageSettings }) {
  const { rightsText, accessibilityLinkText } = translations[language];

  // תיקון: צריך לעטוף קריאת window.scrollTo בפונקציה כדי לא לקרוא מיד
  const handleClick = () => window.scrollTo(0, 0);
  const settings = languageSettings[language];

  return (
    <footer className="footer">
      <p style={{
        direction: settings.direction,

      }}>{rightsText}</p>
      <Link style={{
        direction: settings.direction,

      }}
        to="/hazharatNegishut"
        id="hazharatNegishutLink"
        onClick={handleClick}
      >
        {accessibilityLinkText}
      </Link>
    </footer>
  );
}
