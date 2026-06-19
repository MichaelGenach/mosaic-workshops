import './Home.css'


import React from 'react'

export default function MainButtons({ language, languageSettings }) {


    const translate = {
        he: {
            contact: "ליצירת קשר",
            order: "לפרטים והזמנות",
            microcopy: "ללא מקדמה • מענה אישי ומהיר"
        },
        en: {
            contact: "Contact Us",
            order: "Talk to us",
            microcopy: "No obligation • Personal & fast response"
        }
    };

    const settings = languageSettings[language];
    const t = translate[language];



    return (
        <div style={{direction: settings.direction}}>
            <div id='lepirteiVeLasadnaDiv'>

                <a href="https://wa.me/9720523948920" target="_blank" rel="noopener noreferrer">
                    <button id='lehazmana'>
                         {t.order} <i className="bi bi-whatsapp" id='W'></i>
                    </button>
                </a>
                <a href="#contact">
                    <button id='leyezirat'>{t.contact}</button>
                </a>

            </div>
            <p id="hero-microcopy">
                {t.microcopy}
            </p>

        </div>
    )
}


