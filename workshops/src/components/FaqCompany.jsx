// AccordionWorkshops.jsx
import React, { useState } from "react";
import './Faq.css';

// אובייקט תרגומים מלא עם כל השאלות והתשובות בעברית ובאנגלית
const translations = {
  he: {
    faqTitle: "שאלות ותשובות",
    direction: "rtl",
    workshops: [
      {
        title: "סדנאות פסיפסים לחברות",
        questions: [
          { q: "מה יוצרים?", a: "פסיפס אחד גדול עבור משרדי החברה" },
          { q: "מתי מקבלים את היצירה?", a: "מעט לאחר הסדנה כדי שנוכל לאחד את חלקי הפסיפס שלכם" },
          { q: "כמה יכולים להשתתף?", a: "ללא הגבלת משתתפים" },
          { q: "למי זה מתאים?", a: "מתאים לכלל עובדי החברה" },
        ],
      },
      {
        title: "שאלות כלליות",
        questions: [
          { q: "איך מזמינים סדנה או סיור?", a: "אפשר להזמין דרך האתר או בוואצאפ: 0523948920. נשמח לעזור בהתאמה אישית" },
          { q: "מה קורה במקרה של גשם?", a: "הפעילויות מתבצעות במקום מקורה, או במידת הצורך נדחות בתיאום מראש" },
          { q: "האם אפשר לקבל חשבונית?", a: "בהחלט. אנחנו מנפיקים קבלה כחוק לכל תשלום" },
          { q: "האם יש חניה במקום?", a: "כן, יש חניה חינמית בשפע בסמוך לאולם \"יקבי קיסריה\" שנמצא בסמוך לנמל קיסריה" },
          { q: "האם הדרך אליכם נגישה?", a: "המקום נגיש, אך לא כל פעילות בהכרח מותאמת לכל מגבלה. נשמח לבחון יחד איתכם מראש את האפשרויות ולהתאים את החוויה" },
          { q: "אפשר להזמין סדנה כמתנת יום הולדת?", a: "בוודאי! זו מתנה מקורית ובלתי נשכחת – נשמח גם לצרף ברכה אישית" },
          { q: "האם יש לכם שובר מתנה דיגיטלי?", a: "כן! ניתן להזמין שובר במייל/וואטסאפ לכל אחת מהסדנאות או הסיורים" },
          { q: "יש לכם הטבות לאנשי מילואים?", a: "כן, הפעילות כלולה בסיוע חד-פעמי של עד 1,500 ש\"ח למימון טיפול עבור משרתי מילואים ובני/בנות זוגם, ששירתו 30 יום ויותר בצו 8 במבצע חרבות ברזל. ניתן לפצל את הסכום למספר פעילויות ובמועדים שונים" },
        ],
      },
    ],
  },

  en: {
    faqTitle: "FAQ",
    direction: "ltr",
    workshops: [
     
      {
        title: "Boutique Mosaic Workshops",
        questions: [
          { q: "What do we create?", a: "Each participant creates a personal mosaic" },
          { q: "When do you get the creation?", a: "Immediately at the end of the workshop" },
          { q: "How many can participate?", a: "From a single participant up to 10 participants" },
          { q: "What ages is it suitable for?", a: "Suitable for all ages | Ages 7 and up" },
          { q: "What do you do with the creation at the end?", a: "Each participant leaves with a finished piece – ready to hang or place on a table" },
        ],
      },
      {
        title: "Corporate Mosaic Workshops",
        questions: [
          { q: "What do we create?", a: "One large mosaic for the company's offices" },
          { q: "When do you get the creation?", a: "Shortly after the workshop so we can assemble your mosaic pieces" },
          { q: "How many can participate?", a: "Unlimited participants" },
          { q: "Who is it suitable for?", a: "Suitable for all company employees" },
        ],
      },
      {
        title: "General Questions",
        questions: [
          { q: "How do I book a workshop or tour?", a: "You can book via the website or WhatsApp: 0523948920. We are happy to help with personalized arrangements" },
          { q: "What happens in case of rain?", a: "Activities take place indoors, or if needed, are postponed by prior arrangement" },
          { q: "Can I get an invoice?", a: "Absolutely. We issue a legal receipt for every payment" },
          { q: "Is there parking available?", a: "Yes, there is plenty of free parking near the 'Caesarea Winery' hall, close to the Caesarea port" },
          { q: "Is the venue accessible?", a: "The place is accessible, but not every activity is necessarily suited for all disabilities. We are happy to discuss options and tailor the experience in advance" },
          { q: "Can I book a workshop as a birthday gift?", a: "Definitely! It's an original and unforgettable gift – we can also include a personal greeting" },
          { q: "Do you have digital gift vouchers?", a: "Yes! You can order a voucher by email or WhatsApp for any workshop or tour" },
          { q: "Do you offer benefits for reservists?", a: "Yes, the activity is included in a one-time subsidy of up to 1,500 NIS to finance treatment for reservists and their spouses who served 30 days or more under Order 8 in Operation Iron Swords. The amount can be split for multiple activities and dates" },
        ],
      },
    ],
  },
};

export default function AccordionWorkshops({ language, languageSettings }) {
  const { faqTitle, direction, workshops } = translations[language];
  const settings = languageSettings[language];

  const [openWorkshopIndex, setOpenWorkshopIndex] = useState(null);
  const [openQuestionIndexes, setOpenQuestionIndexes] = useState({});

  const toggleWorkshop = (index) => {
    if (openWorkshopIndex === index) {
      setOpenWorkshopIndex(null);
      setOpenQuestionIndexes({});
    } else {
      setOpenWorkshopIndex(index);
      setOpenQuestionIndexes({});
    }
  };

  const toggleQuestion = (workshopIndex, questionIndex) => {
    setOpenQuestionIndexes((prev) => ({
      ...prev,
      [workshopIndex]: prev[workshopIndex] === questionIndex ? null : questionIndex,
    }));
  };




  return (
    <div className="accordion-wrapper" style={{
      direction: settings.direction,
      textAlign: settings.textAlign
    }}>
      <header className="faq-header">
        <h2 className="faq-title">{faqTitle}</h2>
        <hr className="faq-divider" />
      </header>

      {workshops.map((workshop, wi) => (
        <section key={wi} className="workshop-section">
          <h3
            className="workshop-title"
            onClick={() => toggleWorkshop(wi)}
            aria-expanded={openWorkshopIndex === wi}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") toggleWorkshop(wi);
            }}
          >
            {workshop.title}
            <span className={`arrow ${openWorkshopIndex === wi ? "open" : ""}`} />
          </h3>

          <div className={`questions-wrapper ${openWorkshopIndex === wi ? "open" : ""}`}>
            {workshop.questions.map((qItem, qi) => (
              <div key={qi} className="question-item">
                <button
                style={{
                  direction: settings.direction,
                  textAlign: settings.textAlign
                }}
                  className="question-btn"
                  onClick={() => toggleQuestion(wi, qi)}
                  aria-expanded={openQuestionIndexes[wi] === qi ? "true" : "false"}
                  aria-controls={`answer-${wi}-${qi}`}
                  id={`question-${wi}-${qi}`}
                >
                  {qItem.q}
                  <span className={`arrow small ${openQuestionIndexes[wi] === qi ? "open" : ""}`} />
                </button>
                <div
                  className={`answer-wrapper ${openQuestionIndexes[wi] === qi ? "open" : ""}`}
                  id={`answer-${wi}-${qi}`}
                  role="region"
                  aria-labelledby={`question-${wi}-${qi}`}
                >
                  <p className="answer" style={{
                    direction: settings.direction,
                    textAlign: settings.textAlign
                  }}>{qItem.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}