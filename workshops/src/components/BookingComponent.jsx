import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import emailjs from "emailjs-com"; // Import EmailJS

const WorkshopWidget = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [date, setDate] = useState(new Date());
  const [participants, setParticipants] = useState(1);
  const [price, setPrice] = useState(0);
  const [paid, setPaid] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const workshops = [
    { name: "בדיקה", price: 0.01 },
    { name: 'יצירת פסיפס 15 על 15 ס"מ', price: 1000 },
    { name: "סדנת קרמיקה", price: 800 },
    { name: "סיור בנתניה", price: 500 },
  ];

  const handleWorkshopSelect = (workshop) => {
    setSelectedWorkshop(workshop);
    setShowCalendar(true);
    setPrice(workshop.price * participants);
  };

  const handleParticipantChange = (e) => {
    const newParticipants = Number(e.target.value);
    setParticipants(newParticipants);
    if (selectedWorkshop) {
      setPrice(selectedWorkshop.price * newParticipants);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  const sendEmail = () => {
    const templateParams = {
      name: customerDetails.name,
      email: customerDetails.email,
      phone: customerDetails.phone,
      workshop: selectedWorkshop.name,
      date: date.toLocaleDateString(),
      participants: participants,
      totalPrice: price,
    };

    emailjs.send(
      'service_hwjajxk', // Replace with your service ID
      'template_h4c518a', // Replace with your template ID
      templateParams,
      'wL0TWpYxdl84ufXb-' // Replace with your user ID (public key)
    ).then(() => {
      alert('Email sent successfully!');
    }).catch((error) => {
      console.error('Failed to send email:', error);
    });
  };

  const handlePaymentSuccess = () => {
    setPaid(true);
    sendEmail(); // Send email after payment success
    alert("תשלום בוצע בהצלחה!");
  };

  return (
    <div className="workshop-widget" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
      <h2>בחר את הסדנה שלך</h2>
      {!showCalendar ? (
        <div className="workshop-cards">
          {workshops.map((workshop) => (
            <div
              key={workshop.name}
              className="workshop-card"
              onClick={() => handleWorkshopSelect(workshop)}
            >
              <h3>{workshop.name}</h3>
              <p>מחיר לכל משתתף: {workshop.price} ש"ח</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="calendar-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '20px' }}>
          <button className="back-button" onClick={() => setShowCalendar(false)} style={{ marginBottom: '20px' }}>
            חזרה לבחירת סדנאות
          </button>
          <div className="calendar" style={{ flex: 1, textAlign: 'center' }}>
            <h3>בחר תאריך</h3>
            <Calendar locale="he-IL" onChange={setDate} value={date} />
          </div>
          <div className="participants-input" style={{ flex: 1, textAlign: 'center', marginLeft: '20px' }}>
            <label>
              מספר משתתפים:
              <input
                type="number"
                value={participants}
                min="1"
                onChange={handleParticipantChange}
                style={{ marginLeft: '5px', width: '50px' }}
              />
            </label>
            <h3>סך הכל: {price} ש"ח</h3>
            <div>
              <input
                type="text"
                name="name"
                placeholder="שמך"
                value={customerDetails.name}
                onChange={handleInputChange}
                required
                style={{ margin: '5px 0' }}
              />
              <input
                type="email"
                name="email"
                placeholder="אימייל"
                value={customerDetails.email}
                onChange={handleInputChange}
                required
                style={{ margin: '5px 0' }}
              />
              <input
                type="tel"
                name="phone"
                placeholder="טלפון"
                value={customerDetails.phone}
                onChange={handleInputChange}
                required
                style={{ margin: '5px 0' }}
              />
            </div>
            <PayPalScriptProvider
              options={{
                "client-id": "AbrM3G5d_Pg7FsGVcDlsRVwjACbRPPZDZ4xL6H98S0FA_ejPbQTod5krzJ3pHCIiU7yatfSTFzr_KD9w",
              }}
            >
              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: price.toString(),
                         
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then(() => {
                    handlePaymentSuccess();
                  });
                }}
              />
            </PayPalScriptProvider>
            {paid && <p>התשלום אושר! סיכום נשלח אליך במייל.</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkshopWidget;
