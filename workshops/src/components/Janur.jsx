import { React, useState, useRef, useEffect } from 'react'
import FadeIn from 'react-fade-in';
import { Link, useNavigate, } from 'react-router-dom'
import { motion } from "framer-motion"
import './Janur.css'
import Contact from './Contact';
import BookingWidget from './BookingWidget';

import photo168 from './images/photo168.jpg'
import photo171 from './images/photo171.jpg'
import video5 from './videos/video5.mp4'


export default function Janur(props) {


  
    return (

    <div id='mainDivJanur'>

<br /><br /><br />
<FadeIn>

   <h1> ג'נור - תנור הקדרות המהפכני </h1>

<div className="janur1">
<p id="p1">
  תנור הקדרות הקטן שמשנה את חוקי המשחק!
  <br /><br />
  הכירו את "ג'נור" – תנור קדרות קומפקטי ויעיל, שמאפשר לכם ליצור יצירות קרמיקה איכותיות בנוחות של הבית, בלי הצורך בתנור קדרות מסורתי גדול, מסורבל ויקר.
  <br /><br />
  ✅ מתאים לשימוש ביתי – לא תופס מקום, קל להפעלה ולשימוש.
  <br />
  ✅ חסכוני ויעיל – מחמם לטמפרטורה אידיאלית לשריפת קרמיקה ומבטיח תוצאה איכותית.
  <br />
  ✅ מחיר משתלם ומהפכני – הופך את עולם הקדרות לנגיש לכל אחד!
  <br /><br />
  לפני הרכישה יש להיעזר בהדרכה של אמיר – היבואן הרשמי של תנור "ג'נור".<br />
  צרו יצירות קרמיקה בקלות ובדיוק כמו שתמיד חלמתם!
</p>

<video src={video5} autoPlay loop muted id='video5' />
</div>





<div id='JanurPhotosDiv'>
<img id='photo171' src={photo171} alt="" />
          <img id='photo168' src={photo168} alt="" />
     
      


       
        </div>





   








        </FadeIn>


      

        <Contact/>
    </div>


    
  )
}
