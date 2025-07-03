import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const translations = {
  he: {
    placeholders: {
      name: 'שם פרטי',
      email: 'אימייל',
      phone: 'מספר טלפון',
      message: 'הודעה',
    },
    buttonText: 'שלח',
    successMessage: 'תודה על פנייתך! נחזור אליך בהקדם.',
  },
  en: {
    placeholders: {
      name: 'First Name',
      email: 'Email',
      phone: 'Phone Number',
      message: 'Message',
    },
    buttonText: 'Send',
    successMessage: 'Thank you for your message! We will get back to you soon.',
  },
  // אפשר להוסיף שפות נוספות כאן
};

const ContactForm = ({ language, languageSettings }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const t = translations[language];
  const settings = languageSettings[language]

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      owner_name: 'Amir',
      user_name: name,
      user_email: email,
      user_phone: phone,
      message: message,
    };

    emailjs
      .send('service_hwjajxk', 'template_x5x2utb', templateParams, 'wL0TWpYxdl84ufXb-')
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          setSubmitted(true);
          setName('');
          setPhone('');
          setEmail('');
          setMessage('');
        },
        (err) => {
          console.error('Failed to send email. Error:', err);
        }
      );
  };

  return (
    <div className="formContainer" >
      <form onSubmit={handleSubmit} className="form" >
        <div className="formGroup" >
          <input style={{
            direction: settings.direction,
            textAlign: settings.textAlign
          }}
            placeholder={t.placeholders.name}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="formGroup">
          <input style={{
            direction: settings.direction,
            textAlign: settings.textAlign
          }}
            placeholder={t.placeholders.email}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="formGroup">
          <input style={{
            direction: settings.direction,
            textAlign: settings.textAlign
          }}
            placeholder={t.placeholders.phone}
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="formGroup">
          <textarea style={{
            direction: settings.direction,
            textAlign: settings.textAlign
          }}
            placeholder={t.placeholders.message}
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="textarea"
          />
        </div>
        <div className="formGroup">
          <button type="submit" className="button">
            {t.buttonText}
          </button>
          <br />
        </div>

        {submitted && <div className="successMessage"
          style={{
            direction: settings.direction,
          }} >
          {t.successMessage}
        </div>}
      </form>
    </div>
  );
};

export default ContactForm;
