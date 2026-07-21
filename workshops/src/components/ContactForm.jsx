import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
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
    consentPrefix: 'קראתי ואני מסכים/ה ל',
    consentLinkText: 'מדיניות הפרטיות',
    consentError: 'יש לאשר את מדיניות הפרטיות לפני שליחת הטופס',
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
    consentPrefix: 'I have read and agree to the',
    consentLinkText: 'Privacy Policy',
    consentError: 'Please confirm the Privacy Policy before submitting',
  },
};

const ContactForm = ({ language, languageSettings }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [consentChecked, setConsentChecked] = useState(false);
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

    // Belt-and-suspenders: the checkbox is already `required`, but we also
    // guard here in case that gets removed/changed later.
    if (!consentChecked) {
      alert(t.consentError);
      return;
    }

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
        setConsentChecked(false);
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

        {/* Privacy consent checkbox — required per Amendment 13 */}
        <div className="formGroup consentGroup" style={{ direction: settings.direction }}>
          <label className="consentLabel">
            <input
              type="checkbox"
              name="consent"
              checked={consentChecked}
              onChange={(e) => setConsentChecked(e.target.checked)}
              required
              className="consentCheckbox"
            />
            <span>
              {t.consentPrefix}{' '}
              <Link to="/privacy" target="_blank" rel="noopener noreferrer" className="consentLink">
                {t.consentLinkText}
              </Link>
            </span>
          </label>
        </div>

        {/* Submit */}
        <div className="formGroup">
          <button
            type="submit"
            className="button"
            disabled={loading || !consentChecked}
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