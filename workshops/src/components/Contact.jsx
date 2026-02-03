import React from 'react';
import { FaWaze, FaInstagram } from "react-icons/fa";
import ContactForm from './ContactForm';
import Maps from './Maps';
import './Contact.css';

const translations = {
  he: {
    contactTitle: "יצירת קשר",
    whatsappLinkText: "לפרטים והזמנות",
    infoDescription: "זמינים 24/6, מענה מהיר בכל אמצעי ההתקשרות, ללא תשלום מקדמות, כולל הטבות לאנשי מילואים.",
    howToGetHereTitle: "איך מגיעים?",
    howToGetHereText: `כותבים בוויז: "יקבי קיסריה",
      חניון עפר חינמי, ונכנסים לנמל קיסריה, עלות כניסה: 18 ש"ח,
      הדרך אלינו מונגשת, קיים מרחב מוגן.`,
    contactDetailsTitle: "לפרטים והזמנות מיידיות: אמיר",
    phoneNumber: "052-394-8920",
    email: "genach2@bezeqint.net",
    instaDefaultLink: "https://www.instagram.com/pottery_caesarea?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
    direction: "rtl",
  },
  en: {
    contactTitle: "Contact Us",

    whatsappLinkText: "Order now via WhatsApp",
    infoDescription: "Available 24/6, quick response through all contact means, no advance payments, including benefits for reservists.",
    howToGetHereTitle: "How to get here?",
    howToGetHereText: `Write in Waze: "Caesarea Winery",
      Free dirt parking, enter Caesarea port, entrance fee: 18 NIS,
      The way to us is accessible, protected space available.`,
    contactDetailsTitle: "For immediate details and bookings: Amir",
    phoneNumber: "052-394-8920",
    email: "genach2@bezeqint.net",
    instaDefaultLink: "https://www.instagram.com/pottery_caesarea?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
    direction: "ltr",
  },
};

export default function Contact({ language, instaLink, languageSettings }) {
  const {
    contactTitle,
    whatsappText,
    whatsappLinkText,
    infoDescription,
    howToGetHereTitle,
    howToGetHereText,
    contactDetailsTitle,
    phoneNumber,
    email,
    instaDefaultLink,
    direction,
  } = translations[language];

  const settings = languageSettings[language];

  return (
    <section id='contact' className="contact-section" dir={direction}>
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="hero-content">
          <h1 className="contact-title">{contactTitle}</h1>
          <div className="title-decoration"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="contact-container">

        {/* Contact Form Section */}
        <div className="form-section">
          <ContactForm language={language} languageSettings={languageSettings} />
        </div>

        {/* Info Card */}
        <div className="info-card" style={{ direction: settings.direction }}>
          <div className="info-header">

            <p className="whatsapp-text">
              {whatsappText}{' '}
              <a style={{ marginTop: '10px' }}
                href="https://wa.me/9720523948920"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"

              >

                {whatsappLinkText}
                <span className="whatsapp-icon">
                  <i className="bi bi-whatsapp"></i>
                </span>
              </a>
            </p>
          </div>
          <p className="info-description">{infoDescription}</p>
        </div>

        {/* Directions Section */}
        <div className="directions-section">

          <div className="directions-content">
            <h3 className="section-title" style={{ direction: settings.direction }}>
              {howToGetHereTitle}
            </h3>

            <div className="directions-text-container">
              <p className="directions-text" style={{ direction: settings.direction }}>
                {howToGetHereText}
              </p>
            </div>

            <div className="map-container">
              <Maps />
            </div>

          </div>
        </div>

        {/* Contact Details Footer */}
        <div className="contact-footer">
          <div className="footer-content">
            <h3 className="contact-details-title">{contactDetailsTitle}</h3>

            <div className="contact-methods">
              <div className="contact-info">
                <a
                  className="contact-link phone-link"
                  href={`tel:${phoneNumber.replace(/-/g, '')}`}
                  aria-label="טלפון ליצירת קשר"
                >
                  <i className="bi bi-telephone-fill"></i>
                  {phoneNumber}
                </a>

                <a
                  className="contact-link email-link"
                  href={`mailto:${email}`}
                  aria-label="אימייל ליצירת קשר"
                >
                  <i className="bi bi-envelope-fill"></i>
                  {email}
                </a>
              </div>

              <div className="social-links">
                <a
                  className="social-link waze-link"
                  href="https://waze.com/ul/hsvbbfh9q8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="לינק לוויז שמנווט אל בית העסק שלנו"
                >
                  <FaWaze />
                  <span className="tooltip">ניווט בוויז</span>
                </a>

                <a
                  className="social-link whatsapp-link"
                  href="https://wa.me/9720523948920"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="לינק לוואצאפ של בעל העסק"
                >
                  <i className="bi bi-whatsapp"></i>
                  <span className="tooltip">WhatsApp</span>
                </a>

                <a
                  className="social-link instagram-link"
                  href={instaLink || instaDefaultLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="לינק לאינסטגרם שלנו"
                >
                  <FaInstagram />
                  <span className="tooltip">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}