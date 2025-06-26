import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { FaWaze, FaInstagram } from "react-icons/fa";
import ContactForm from './ContactForm';
import Maps from './Maps'



export default function Contact(props) {








  return (

    <div>

      <div id='contact'>
        <h1 id='yezirat'>
          יצירת קשר
        </h1>


        <ContactForm />

        <div className="contact-info-box">
          <p className="whatsapp-line">
            ניתן ליצור קשר גם דרך{' '}
            <a
              id="topWhatsApp"
              href="https://wa.me/9720523948920"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <span className="whatsapp-icon">
                <i className="bi bi-whatsapp"></i>
              </span>
              WhatsApp
            </a>
          </p>
          <p className="info-description">
            זמינים 24/6, מענה מהיר בכל אמצעי ההתקשרות, ללא תשלום מקדמות, כולל הטבות לאנשי מילואים.
          </p>
        </div>












        <h3 id='eich' className='f4'>
          איך מגיעים?
        </h3>
        <div className="arrive">
          <p id='arriveText'>
            כותבים בוויז: "יקבי קיסריה",
            חניון עפר חינמי, ונכנסים לנמל קיסריה, עלות כניסה: 18 ש"ח,
            הדרך אלינו מונגשת, קיים מרחב מוגן.
          </p>
          <Maps />
        </div>


        <div id='darkDiv'>
          <h3 id='lifratim'>
            לפרטים והזמנות מיידיות: אמיר
          </h3>

          <div id='pratim'>
            <a className='con' href="tel:0523948920" alt="טלפון ליצירת קשר">052-394-8920</a>
            <a className='con' id='emailInfo' href="mailto:genach2@bezeqint.net" alt="אימייל ליצירת קשר">genach2@bezeqint.net</a>




            <div className="wwi">
              <a id='waze' href='https://waze.com/ul/hsvbbfh9q8' target="_blank" rel="noopener noreferrer" alt="לינק לוויז שמנווט אל בית העסק שלנו">
                <FaWaze style={{ fontSize: '45px' }} />
              </a>

              <a id='whatsApp' href="https://wa.me/9720523948920" target="_blank" rel="noopener noreferrer" alt="לינק לוואצאפ של בעל העסק">
                <span style={{ position: 'relative', right: '5px' }}>
                  <i className="bi bi-whatsapp" style={{ fontSize: '45px' }}></i>
                </span>
              </a>

              <a id='instagram' alt="לינק לאינסטגרם שלנו"

                href={props.instaLink || "https://www.instagram.com/pottery_caesarea?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"} // ברירת מחדל לעמוד פנימי

                target="_blank" rel="noopener noreferrer">
                <FaInstagram style={{ fontSize: '45px' }} />
              </a>

            </div>


          </div>

        </div>

      </div>





    </div>
  )
}
