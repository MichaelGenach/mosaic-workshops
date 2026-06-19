import React, { useState, useEffect } from 'react';
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
};

const ContactForm = ({ language, languageSettings }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const t = translations[language];
  const settings = languageSettings[language];

  // ✅ EmailJS init
  useEffect(() => {
    emailjs.init('wL0TWpYxdl84ufXb-');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setSubmitted(false);

    const templateParams = {
      owner_name: 'Amir',
      user_name: name,
      user_email: email,
      user_phone: phone,
      message: message,
    };

    emailjs
      .send('service_8sig1v7', 'template_oarge8e', templateParams)
      .then(() => {
        setSubmitted(true);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('אירעה שגיאה בשליחת ההודעה. נסה שוב.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="form" autoComplete="on">
        
        {/* Name */}
        <div className="formGroup">
          <input
            style={{
              direction: settings.direction,
              textAlign: settings.textAlign,
            }}
            placeholder={t.placeholders.name}
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input"
          />
        </div>

        {/* Email */}
        <div className="formGroup">
          <input
            style={{
              direction: settings.direction,
              textAlign: settings.textAlign,
            }}
            placeholder={t.placeholders.email}
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
        </div>

        {/* Phone */}
        <div className="formGroup">
          <input
            style={{
              direction: settings.direction,
              textAlign: settings.textAlign,
            }}
            placeholder={t.placeholders.phone}
            type="tel"
            name="phone"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="input"
          />
        </div>

        {/* Message */}
        <div className="formGroup">
          <textarea
            style={{
              direction: settings.direction,
              textAlign: settings.textAlign,
            }}
            placeholder={t.placeholders.message}
            name="message"
            autoComplete="off"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="textarea"
          />
        </div>

        {/* Submit */}
        <div className="formGroup">
          <button
            type="submit"
            className="button"
            disabled={loading}
          >
            {loading ? 'שולח...' : t.buttonText}
          </button>
        </div>

        {/* Success Message */}
        {submitted && (
          <div
            className="successMessage"
            style={{ direction: settings.direction }}
          >
            {t.successMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
