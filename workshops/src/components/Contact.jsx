import React from 'react';
import { FaWaze, FaInstagram } from "react-icons/fa";
import ContactForm from './ContactForm';
import Maps from './Maps';
import './Contact.css';

const translations = {
  he: {
    contactTitle: "יצירת קשר",
    whatsappText: "ניתן ליצור קשר גם דרך",
    whatsappLinkText: "WhatsApp",
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
    whatsappText: "You can also contact us via",
    whatsappLinkText: "WhatsApp",
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


  const settings = languageSettings[language]

  return (
    <div dir={direction}>
      <div id='contact'>
        <h1 id='yezirat'>{contactTitle}</h1>

        <ContactForm language={language} languageSettings={languageSettings} />

        <div className="contact-info-box" >
          <p className="whatsapp-line" style={{
            direction: settings.direction,

          }}>
            {whatsappText}{' '}
            <a
              id="topWhatsApp"
              href="https://wa.me/9720523948920"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <span className="whatsapp-icon" style={{
                direction: settings.direction,

              }}>
                <i className="bi bi-whatsapp"></i>
              </span>
              {whatsappLinkText}
            </a>
          </p>
          <p className="info-description" style={{
            direction: settings.direction,
          }}>{infoDescription}</p>
        </div>

        <h3 id='eich' className='f4' style={{
          direction: settings.direction,
        }}>{howToGetHereTitle}</h3>
        <div className="arrive">
          <p id='arriveText' style={{
            whiteSpace: "pre-line",
            direction: settings.direction,

          }} >
            {howToGetHereText}
          </p>
          <Maps />
        </div>

        <div id='darkDiv'>
          <h3 id='lifratim'>{contactDetailsTitle}</h3>

          <div id='pratim'>
            <a className='con' href={`tel:${phoneNumber.replace(/-/g, '')}`} alt="טלפון ליצירת קשר">
              {phoneNumber}
            </a>
            <a className='con' id='emailInfo' href={`mailto:${email}`} alt="אימייל ליצירת קשר">
              {email}
            </a>

            <div className="wwi">
              <a
                id='waze'
                href='https://waze.com/ul/hsvbbfh9q8'
                target="_blank"
                rel="noopener noreferrer"
                alt="לינק לוויז שמנווט אל בית העסק שלנו"
              >
                <FaWaze style={{ fontSize: '45px' }} />
              </a>

              <a
                id='whatsApp'
                href="https://wa.me/9720523948920"
                target="_blank"
                rel="noopener noreferrer"
                alt="לינק לוואצאפ של בעל העסק"
              >
                <span style={{ position: 'relative', right: '5px' }}>
                  <i className="bi bi-whatsapp" style={{ fontSize: '45px' }}></i>
                </span>
              </a>

              <a
                id='instagram'
                alt="לינק לאינסטגרם שלנו"
                href={instaLink || instaDefaultLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram style={{ fontSize: '45px' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
