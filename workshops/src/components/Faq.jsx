// AccordionWorkshops.jsx
import React, { useState } from "react";
import './Faq.css';
const workshopsData = [


    {
        title: "סדנאות קדרות",
        questions: [
            {
                q: "מה יוצרים?",
                a: "כל משתתף יוצר כלי אישי באובניים.",
            },
            {
                q: "מתי מקבלים את היצירה?",
                a: "מיד בסוף הסדנה.",
            },
            {
                q: "כמה יכולים להשתתף?",
                a: "ללא הגבלת משתתפים.",
            },
            {
                q: "לאילו גילאים זה מתאים?",
                a: "מתאים לילדים מגיל 7 ומעלה.",
            },
            {
                q: "האם צריך ניסיון קודם?",
                a: "ממש לא! הסדנה מתאימה גם למתחילים, ואנו מלווים אתכם שלב אחר שלב."
            },
            {
                q: "האם אפשר לצבוע את הכלי?",
                a: "בוודאי! ישנה אפשרות לצביעת הכלי במגוון צבעים."
            },
        ],
    },
    {
        title: "סדנאות פסיפסים בוטיק",
        questions: [
            {
                q: "מה יוצרים?",
                a: "כל משתתף יוצר פסיפס אישי.",
            },
            {
                q: "מתי מקבלים את היצירה?",
                a: "מיד בסוף הסדנה.",
            },
            {
                q: "כמה יכולים להשתתף?",
                a: "משתתף יחיד עד 10 משתתפים.",
            },
            {
                q: "לאילו גילאים זה מתאים?",
                a: "מתאים לילדים מגיל 7 ומעלה.",
            },
            {
                q: "מה עושים עם היצירה בסוף?",
                a: "כל משתתף יוצא עם יצירה מוגמרת הביתה – מוכנה לתלייה או להנחה על שולחן."
            },
            
        ],
    },
    {
        title: "סיורים מרתקים",
        questions: [
            {
                q: "איפה נטייל?",
                a: "נציג לכם מסלולים מדהימים לבחירתכם."
            },
            {
                q: "מתי ניתן לקבוע?",
                a: "בוקר, צהריים וסיור עששיות בערב.",
            },
            {
                q: "כמה יכולים להשתתף?",
                a: "1-50 משתתפים בסיור פרטי.",
            },
            {
                q: "לאילו גילאים זה מתאים?",
                a: "מתאים לכל הגילאים.",
            },
            {
                q: "האם הסיורים נגישים לעגלות/כיסאות גלגלים?",
                a: "רוב הסיורים נגישים – אנא ציינו זאת מראש."
            },
            {
                q: "האם אפשר להתאים את הסיור לקבוצה ספציפית?",
                a: "בהחלט! אנו מתאימים את הסיור לתחומי עניין, גיל, כושר פיזי וזמן פנוי."
            },
            {
                q: "האם הסיורים מתאימים לשומרי מסורת?",
                a: `בהחלט. אנו מתאימים את התוכן והלו"ז לפי הצורך, כולל הפסקות לתפילה ואוכל כשר.`
            },
            {
                q: "האם יש ביטוח לסיור?",
                a: "כן, אנו פועלים באישור משרד התיירות, עם ביטוח אחריות מקצועית כמורי דרך מוסמכים."
            },
            {
                q: "יש סיורים בשפות נוספות?",
                a: "כן. ניתן להזמין סיורים גם באנגלית ובאיטלקית."
            },
            {
                q: "אפשר לשלב סיור עם סדנה?",
                a: "בוודאי! ישנם מסלולים שכוללים סיור מרתק בהנחה ולאחריו סדנת קדרות או פסיפס בגלריה."
            },

        ],
    },
    {
        title: "סדנאות פסיפסים לחברות",
        questions: [
            {
                q: "מה יוצרים?",
                a: "פסיפס אחד גדול עבור משרדי החברה.",
            },
            {
                q: "מתי מקבלים את היצירה?",
                a: "מעט לאחר הסדנה כדי שנוכל לאחד את חלקי הפסיפס שלכם.",
            },
            {
                q: "כמה יכולים להשתתף? ",
                a: "ללא הגבלת משתתפים.",
            },
            {
                q: "למי זה מתאים?",
                a: "מתאים לכלל עובדי החברה.",
            },
        ],
    },
    {
        title: "שאלות כלליות",
        questions: [
            {
                q: "איך מזמינים סדנה או סיור?",
                a: "אפשר להזמין דרך האתר או בוואצאפ: 0523948920. נשמח לעזור בהתאמה אישית."
            },
            {
                q: "מה קורה במקרה של גשם?",
                a: "הפעילויות מתבצעות במקום מקורה, או במידת הצורך נדחות בתיאום מראש."
            },
            {
                q: "האם אפשר לקבל חשבונית?",
                a: "בהחלט. אנחנו מנפיקים קבלה כחוק לכל תשלום."
            },
            {
                q: "האם יש חניה במקום?",
                a: `כן, יש חניה חינמית בשפע בסמוך לאולם "יקבי קיסריה" שנמצא בסמוך לנמל קיסריה.`
            },
            {
                q: "האם הדרך אליכם נגישה?",
                a: "המקום נגיש, אך לא כל פעילות בהכרח מותאמת לכל מגבלה. נשמח לבחון יחד איתכם מראש את האפשרויות ולהתאים את החוויה."
            },
            {
                q: "אפשר להזמין סדנה כמתנת יום הולדת?",
                a: "בוודאי! זו מתנה מקורית ובלתי נשכחת – נשמח גם לצרף ברכה אישית."
            },
            {
                q: "האם יש לכם שובר מתנה דיגיטלי?",
                a: "כן! ניתן להזמין שובר במייל/וואטסאפ לכל אחת מהסדנאות או הסיורים."
            },
            {
                q: "יש לכם הטבות לאנשי מילואים?",

                a: "כן, הפעילות כלולה בסיוע חד-פעמי של עד 1,500 ש”ח למימון טיפול עבור משרתי מילואים ובני/בנות זוגם, ששירתו 30 יום ויותר בצו 8 במבצע חרבות ברזל. ניתן לפצל את הסכום למספר פעילויות ובמועדים שונים."
            },
        ]

    },

];

export default function AccordionWorkshops() {
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
            [workshopIndex]:
                prev[workshopIndex] === questionIndex ? null : questionIndex,
        }));
    };

    return (




        <div className="accordion-wrapper">
            <header className="faq-header">
                <h2 className="faq-title">
                    שאלות ותשובות
                </h2>
                <hr className="faq-divider" />
            </header>
            {workshopsData.map((workshop, wi) => (
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
                        <span
                            className={`arrow ${openWorkshopIndex === wi ? "open" : ""}`}
                        />
                    </h3>

                    <div
                        className={`questions-wrapper ${openWorkshopIndex === wi ? "open" : ""
                            }`}
                    >
                        {workshop.questions.map((qItem, qi) => (
                            <div key={qi} className="question-item">
                                <button
                                    className="question-btn"
                                    onClick={() => toggleQuestion(wi, qi)}
                                    aria-expanded={
                                        openQuestionIndexes[wi] === qi ? "true" : "false"
                                    }
                                    aria-controls={`answer-${wi}-${qi}`}
                                    id={`question-${wi}-${qi}`}
                                >
                                    {qItem.q}
                                    <span
                                        className={`arrow small ${openQuestionIndexes[wi] === qi ? "open" : ""
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`answer-wrapper ${openQuestionIndexes[wi] === qi ? "open" : ""
                                        }`}
                                    id={`answer-${wi}-${qi}`}
                                    role="region"
                                    aria-labelledby={`question-${wi}-${qi}`}
                                >
                                    <p className="answer">{qItem.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}