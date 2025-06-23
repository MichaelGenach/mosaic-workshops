import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      owner_name: 'Amir',
      user_name: name,
      user_email: email,
      user_phone: phone,
      message: message,
    };

    emailjs.send('service_hwjajxk', 'template_x5x2utb', templateParams, 'wL0TWpYxdl84ufXb-')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSubmitted(true);
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
      }, (err) => {
        console.error('Failed to send email. Error:', err);
      });
  };

  return (

    <div className="formContainer">
 
      <form onSubmit={handleSubmit} className="form">
    
        <div className="formGroup">
   
          <input
            placeholder='שם פרטי'
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="formGroup">

          <input
            placeholder='אימייל'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="formGroup">

          <input
            placeholder='מספר טלפון'
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="formGroup">

          <textarea
            placeholder='הודעה'
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="textarea"
          />
        </div>
        <div className="formGroup">
          <button type="submit" className="button">
            Send
          </button>
        <br /> 
     
          </div>

          {submitted && (
        <div className="successMessage">
          Thank you for your message! We will get back to you soon.
          
        </div>
    
      )}

      </form>

    </div>
  );
};

export default ContactForm;
