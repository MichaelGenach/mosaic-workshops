import React, { Fragment } from 'react';
import FadeIn from 'react-fade-in';
import { Link, useNavigate, } from 'react-router-dom'
import { motion } from "framer-motion"
import './Janur.css'
import Contact from './Contact';
import Footer from './Footer';
import BookingWidget from './BookingWidget';

import photo168 from './images/photo168.jpg'
import photo171 from './images/photo171.jpg'
import video5 from './videos/video5.mp4'

const translations = {
  he: {
    title: "ג'נור - תנור הקדרות המהפכני",
    description: [
      "תנור הקדרות הקטן שמשנה את חוקי המשחק!",
      `הכירו את "ג'נור" – תנור קדרות קומפקטי ויעיל, שמאפשר לכם ליצור יצירות קרמיקה איכותיות בנוחות של הבית, בלי הצורך בתנור קדרות מסורתי גדול, מסורבל ויקר.`,
      "✅ מתאים לשימוש ביתי – לא תופס מקום, קל להפעלה ולשימוש.",
      "✅ חסכוני ויעיל – מחמם לטמפרטורה אידיאלית לשריפת קרמיקה ומבטיח תוצאה איכותית.",
      "✅ מחיר משתלם ומהפכני – הופך את עולם הקדרות לנגיש לכל אחד!",
      "לפני הרכישה יש להיעזר בהדרכה של אמיר – היבואן הרשמי של תנור \"ג'נור\".",
      "צרו יצירות קרמיקה בקלות ובדיוק כמו שתמיד חלמתם!"
    ],
    videoTitle: "פותחים את תנור הקדרות ג'נור ורואים כלי חרס אדום לוהט",
    altPhoto171: "תמונה של תנור הקדרות ג'נור כשהוא פתוח עם כלי לוהט בפנים",
    altPhoto168: "תמונה של תנור הקדרות ג'נור כשהוא סגור"
  },
  en: {
    title: "Janur - The Revolutionary Pottery Kiln",
    description: [
      "The small pottery kiln that changes the game!",
      `Meet "Janur" – a compact and efficient pottery kiln that lets you create high-quality ceramic works comfortably at home, without needing a large, bulky, and expensive traditional kiln.`,
      "✅ Suitable for home use – space-saving, easy to operate and use.",
      "✅ Economical and efficient – heats to the ideal temperature for ceramic firing and guarantees quality results.",
      "✅ Affordable and revolutionary price – making the world of pottery accessible to everyone!",
      "Before purchasing, get guidance from Amir – the official importer of the 'Janur' kiln.",
      "Create ceramic works easily and just like you've always dreamed!"
    ],
    videoTitle: "Opening the Janur pottery kiln showing a glowing red ceramic piece inside",
    altPhoto171: "Photo of Janur pottery kiln open with a glowing hot ceramic piece inside",
    altPhoto168: "Photo of Janur pottery kiln closed"
  },
  it: {
    title: "Janur - Il forno per ceramica rivoluzionario",
    description: [
      "Il piccolo forno per ceramica che cambia le regole del gioco!",
      `Scopri "Janur" – un forno per ceramica compatto ed efficiente, che ti permette di creare opere ceramiche di alta qualità comodamente a casa, senza bisogno di un forno tradizionale grande, ingombrante e costoso.`,
      "✅ Adatto all'uso domestico – occupa poco spazio, facile da usare e maneggiare.",
      "✅ Economico ed efficiente – riscalda alla temperatura ideale per la cottura della ceramica garantendo un risultato di qualità.",
      "✅ Prezzo conveniente e rivoluzionario – rende il mondo della ceramica accessibile a tutti!",
      "Prima dell'acquisto, affidati alla guida di Amir – l'importatore ufficiale del forno \"Janur\".",
      "Crea opere di ceramica facilmente e proprio come hai sempre sognato!"
    ],
    videoTitle: "Apertura del forno per ceramica Janur con un pezzo di ceramica rosso incandescente all'interno",
    altPhoto171: "Foto del forno per ceramica Janur aperto con un pezzo di ceramica incandescente all'interno",
    altPhoto168: "Foto del forno per ceramica Janur chiuso"
  }
}

export default function Janur({ language, languageSettings }) {

  const t = translations[language];
  const settings = languageSettings[language];

  return (
    <div id='mainDivJanur'>
      <br /><br /><br />
      <FadeIn>
        <h1>{t.title}</h1>

        <div className="janur1">
          <p id="p1" style={{
            direction: settings.direction,
            textAlign: settings.textAlign
          }}>
            {t.description.map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br /><br />
              </React.Fragment>
            ))}
          </p>

          <video
            src={video5}
            autoPlay
            loop
            muted
            id='video5'
            title={t.videoTitle}
          />
        </div>

        <div id='JanurPhotosDiv'>
          <img
            id='photo171'
            src={photo171}
            loading="lazy"
            alt={t.altPhoto171}
          />
          <img
            id='photo168'
            src={photo168}
            loading="lazy"
            alt={t.altPhoto168}
          />
        </div>
      </FadeIn>

      <Contact language={language} languageSettings={languageSettings} />
      <Footer language={language} languageSettings={languageSettings} />
    </div>
  )
}