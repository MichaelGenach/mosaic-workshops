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
        title: "סדנאות קדרות",
        questions: [
          { q: "מה יוצרים?", a: "כל משתתף יוצר כלי אישי באובניים." },
          { q: "מתי מקבלים את היצירה?", a: "מיד בסוף הסדנה." },
          { q: "כמה יכולים להשתתף?", a: "ללא הגבלת משתתפים." },
          { q: "לאילו גילאים זה מתאים?", a: "מתאים לילדים מגיל 7 ומעלה." },
          { q: "האם צריך ניסיון קודם?", a: "ממש לא! הסדנה מתאימה גם למתחילים, ואנו מלווים אתכם שלב אחר שלב." },
          { q: "האם אפשר לצבוע את הכלי?", a: "בוודאי! ישנה אפשרות לצביעת הכלי במגוון צבעים." },
        ],
      },
      {
        title: "סדנאות פסיפסים בוטיק",
        questions: [
          { q: "מה יוצרים?", a: "כל משתתף יוצר פסיפס אישי." },
          { q: "מתי מקבלים את היצירה?", a: "מיד בסוף הסדנה." },
          { q: "כמה יכולים להשתתף?", a: "משתתף יחיד עד 10 משתתפים." },
          { q: "לאילו גילאים זה מתאים?", a: "מתאים לילדים מגיל 7 ומעלה." },
          { q: "מה עושים עם היצירה בסוף?", a: "כל משתתף יוצא עם יצירה מוגמרת הביתה – מוכנה לתלייה או להנחה על שולחן." },
        ],
      },
      {
        title: "סיורים מרתקים",
        questions: [
          { q: "איפה נטייל?", a: "נציג לכם מסלולים מדהימים לבחירתכם." },
          { q: "מתי ניתן לקבוע?", a: "בוקר, צהריים וסיור עששיות בערב." },
          { q: "כמה יכולים להשתתף?", a: "1-50 משתתפים בסיור פרטי." },
          { q: "לאילו גילאים זה מתאים?", a: "מתאים לכל הגילאים." },
          { q: "האם הסיורים נגישים לעגלות/כיסאות גלגלים?", a: "רוב הסיורים נגישים – אנא ציינו זאת מראש." },
          { q: "האם אפשר להתאים את הסיור לקבוצה ספציפית?", a: "בהחלט! אנו מתאימים את הסיור לתחומי עניין, גיל, כושר פיזי וזמן פנוי." },
          { q: "האם הסיורים מתאימים לשומרי מסורת?", a: "בהחלט. אנו מתאימים את התוכן והלו\"ז לפי הצורך, כולל הפסקות לתפילה ואוכל כשר." },
          { q: "האם יש ביטוח לסיור?", a: "כן, אנו פועלים באישור משרד התיירות, עם ביטוח אחריות מקצועית כמורי דרך מוסמכים." },
          { q: "יש סיורים בשפות נוספות?", a: "כן. ניתן להזמין סיורים גם באנגלית ובאיטלקית." },
          { q: "אפשר לשלב סיור עם סדנה?", a: "בוודאי! ישנם מסלולים שכוללים סיור מרתק בהנחה ולאחריו סדנת קדרות או פסיפס בגלריה." },
        ],
      },
      {
        title: "סדנאות פסיפסים לחברות",
        questions: [
          { q: "מה יוצרים?", a: "פסיפס אחד גדול עבור משרדי החברה." },
          { q: "מתי מקבלים את היצירה?", a: "מעט לאחר הסדנה כדי שנוכל לאחד את חלקי הפסיפס שלכם." },
          { q: "כמה יכולים להשתתף?", a: "ללא הגבלת משתתפים." },
          { q: "למי זה מתאים?", a: "מתאים לכלל עובדי החברה." },
        ],
      },
      {
        title: "שאלות כלליות",
        questions: [
          { q: "איך מזמינים סדנה או סיור?", a: "אפשר להזמין דרך האתר או בוואצאפ: 0523948920. נשמח לעזור בהתאמה אישית." },
          { q: "מה קורה במקרה של גשם?", a: "הפעילויות מתבצעות במקום מקורה, או במידת הצורך נדחות בתיאום מראש." },
          { q: "האם אפשר לקבל חשבונית?", a: "בהחלט. אנחנו מנפיקים קבלה כחוק לכל תשלום." },
          { q: "האם יש חניה במקום?", a: "כן, יש חניה חינמית בשפע בסמוך לאולם \"יקבי קיסריה\" שנמצא בסמוך לנמל קיסריה." },
          { q: "האם הדרך אליכם נגישה?", a: "המקום נגיש, אך לא כל פעילות בהכרח מותאמת לכל מגבלה. נשמח לבחון יחד איתכם מראש את האפשרויות ולהתאים את החוויה." },
          { q: "אפשר להזמין סדנה כמתנת יום הולדת?", a: "בוודאי! זו מתנה מקורית ובלתי נשכחת – נשמח גם לצרף ברכה אישית." },
          { q: "האם יש לכם שובר מתנה דיגיטלי?", a: "כן! ניתן להזמין שובר במייל/וואטסאפ לכל אחת מהסדנאות או הסיורים." },
          { q: "יש לכם הטבות לאנשי מילואים?", a: "כן, הפעילות כלולה בסיוע חד-פעמי של עד 1,500 ש”ח למימון טיפול עבור משרתי מילואים ובני/בנות זוגם, ששירתו 30 יום ויותר בצו 8 במבצע חרבות ברזל. ניתן לפצל את הסכום למספר פעילויות ובמועדים שונים." },
        ],
      },
    ],
  },

  en: {
    faqTitle: "FAQ",
    direction: "ltr",
    workshops: [
      {
        title: "Pottery Workshops",
        questions: [
          { q: "What do we create?", a: "Each participant creates a personal pottery piece on the wheel." },
          { q: "When do you get the creation?", a: "Immediately at the end of the workshop." },
          { q: "How many can participate?", a: "Unlimited participants." },
          { q: "What ages is it suitable for?", a: "Suitable for children aged 7 and up." },
          { q: "Is prior experience needed?", a: "Not at all! The workshop is suitable for beginners, and we guide you step by step." },
          { q: "Can the pottery be painted?", a: "Definitely! There is an option to paint the pottery in a variety of colors." },
        ],
      },
      {
        title: "Boutique Mosaic Workshops",
        questions: [
          { q: "What do we create?", a: "Each participant creates a personal mosaic." },
          { q: "When do you get the creation?", a: "Immediately at the end of the workshop." },
          { q: "How many can participate?", a: "From a single participant up to 10 participants." },
          { q: "What ages is it suitable for?", a: "Suitable for children aged 7 and up." },
          { q: "What do you do with the creation at the end?", a: "Each participant leaves with a finished piece – ready to hang or place on a table." },
        ],
      },
      {
        title: "Exciting Tours",
        questions: [
          { q: "Where will we tour?", a: "We will present you with amazing routes to choose from." },
          { q: "When can we schedule?", a: "Morning, afternoon, and evening lantern tours." },
          { q: "How many can participate?", a: "1-50 participants in a private tour." },
          { q: "What ages is it suitable for?", a: "Suitable for all ages." },
          { q: "Are the tours accessible for strollers/wheelchairs?", a: "Most tours are accessible – please specify in advance." },
          { q: "Can the tour be customized for a specific group?", a: "Absolutely! We tailor the tour to interests, age, physical ability, and available time." },
          { q: "Are the tours suitable for observant participants?", a: "Definitely. We adjust the content and schedule as needed, including breaks for prayer and kosher food." },
          { q: "Is there insurance for the tour?", a: "Yes, we operate with approval from the Ministry of Tourism, with professional liability insurance as certified guides." },
          { q: "Are tours available in other languages?", a: "Yes. Tours can be arranged in English and Italian as well." },
          { q: "Can a tour be combined with a workshop?", a: "Certainly! There are routes that include a fascinating discounted tour followed by a pottery or mosaic workshop at the gallery." },
        ],
      },
      {
        title: "Corporate Mosaic Workshops",
        questions: [
          { q: "What do we create?", a: "One large mosaic for the company's offices." },
          { q: "When do you get the creation?", a: "Shortly after the workshop so we can assemble your mosaic pieces." },
          { q: "How many can participate?", a: "Unlimited participants." },
          { q: "Who is it suitable for?", a: "Suitable for all company employees." },
        ],
      },
      {
        title: "General Questions",
        questions: [
          { q: "How do I book a workshop or tour?", a: "You can book via the website or WhatsApp: 0523948920. We are happy to help with personalized arrangements." },
          { q: "What happens in case of rain?", a: "Activities take place indoors, or if needed, are postponed by prior arrangement." },
          { q: "Can I get an invoice?", a: "Absolutely. We issue a legal receipt for every payment." },
          { q: "Is there parking available?", a: "Yes, there is plenty of free parking near the 'Caesarea Winery' hall, close to the Caesarea port." },
          { q: "Is the venue accessible?", a: "The place is accessible, but not every activity is necessarily suited for all disabilities. We are happy to discuss options and tailor the experience in advance." },
          { q: "Can I book a workshop as a birthday gift?", a: "Definitely! It’s an original and unforgettable gift – we can also include a personal greeting." },
          { q: "Do you have digital gift vouchers?", a: "Yes! You can order a voucher by email or WhatsApp for any workshop or tour." },
          { q: "Do you offer benefits for reservists?", a: "Yes, the activity is included in a one-time subsidy of up to 1,500 NIS to finance treatment for reservists and their spouses who served 30 days or more under Order 8 in Operation Iron Swords. The amount can be split for multiple activities and dates." },
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
