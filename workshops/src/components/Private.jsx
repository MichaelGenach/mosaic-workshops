import { React, useState, useRef, useEffect } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import './Private.css'
import PhotoCarousel from './PhotoCarousel';
import Contact from './Contact';
import BookingWidget from './BookingWidget';
import FadeIn from 'react-fade-in';
import { FaWaze, FaInstagram } from "react-icons/fa";
import photo37 from './images/photo37.jpg'
import photo38 from './images/photo38.jpg'
import photo39 from './images/photo39.jpg'

import photo3 from './images/photo3.jpg'
import photo4 from './images/photo4.jpg'
import photo5 from './images/photo5.jpg'
import photo6 from './images/photo6.jpg'
import photo7 from './images/photo7.jpg'
import photo8 from './images/photo8.jpg'
// import photo9 from './images/photo9.jpg'
// import photo10 from './images/photo10.jpg'
import photo11 from './images/photo11.jpg'
// import photo12 from './images/photo12.jpg'
import photo13 from './images/photo13.jpg'
// import photo14 from './images/photo14.jpg'
import photo15 from './images/photo15.jpg'
import photo16 from './images/photo16.jpg'
import photo17 from './images/photo17.jpg'
import photo18 from './images/photo18.jpg'
import photo19 from './images/photo19.jpg'
import photo20 from './images/photo20.jpg'
import photo21 from './images/photo21.jpg'
// import photo22 from './images/photo22.jpg'
import photo23 from './images/photo23.jpg'
import photo24 from './images/photo24.jpg'
import photo25 from './images/photo25.jpg'
import photo26 from './images/photo26.jpg'
import photo27 from './images/photo27.jpg'
import photo28 from './images/photo28.jpg'
import photo29 from './images/photo29.jpg'
import photo30 from './images/photo30.jpg'
import photo31 from './images/photo31.jpg'
import photo32 from './images/photo32.jpg'
import photo33 from './images/photo33.jpg'
import photo76 from './images/photo76.jpg'
import photo77 from './images/photo77.jpg'
import photo78 from './images/photo78.jpg'
import photo79 from './images/photo79.jpg'
import photo80 from './images/photo80.jpg'
import photo81 from './images/photo81.jpg'
import photo82 from './images/photo82.jpg'
import photo83 from './images/photo83.jpg'
import photo84 from './images/photo84.jpg'
import photo85 from './images/photo85.jpg'
import photo86 from './images/photo86.jpg'
import photo87 from './images/photo87.jpg'
import photo88 from './images/photo88.jpg'
import photo89 from './images/photo89.jpg'
import photo90 from './images/photo90.jpg'
import photo91 from './images/photo91.jpg'
import photo92 from './images/photo92.jpg'
import photo93 from './images/photo93.jpg'
import photo94 from './images/photo94.jpg'
import photo95 from './images/photo95.jpg'
import photo96 from './images/photo96.jpg'
import photo97 from './images/photo97.jpg'
import photo103 from './images/photo103.jpg'
import photo104 from './images/photo104.jpg'
import photo105 from './images/photo105.jpg'
import photo106 from './images/photo106.jpg'
import photo109 from './images/photo109.jpg'
import photo110 from './images/photo110.jpg'
import photo111 from './images/photo111.jpg'
import photo112 from './images/photo112.jpg'
import photo113 from './images/photo113.jpg'
import photo114 from './images/photo114.jpg'
import photo115 from './images/photo115.jpg'
import photo116 from './images/photo116.jpg'
import photo117 from './images/photo117.jpg'
import photo119 from './images/photo119.jpg'
import photo120 from './images/photo120.jpg'
import photo125 from './images/photo125.jpg'
import photo126 from './images/photo126.jpg'
import photo127 from './images/photo127.jpg'
import photo128 from './images/photo128.jpg'
import photo129 from './images/photo129.jpg'
import photo130 from './images/photo130.jpg'
import photo131 from './images/photo131.jpg'
import photo132 from './images/photo132.jpg'
import photo133 from './images/photo133.jpg'
import photo134 from './images/photo134.jpg'
import photo135 from './images/photo135.jpg'
import photo136 from './images/photo136.jpg'
import photo137 from './images/photo137.jpg'
import photo138 from './images/photo138.jpg'
import photo139 from './images/photo139.jpg'
import photo140 from './images/photo140.jpg'
import photo141 from './images/photo141.jpg'
import photo142 from './images/photo142.jpg'
import photo143 from './images/photo143.jpg'
import photo144 from './images/photo144.jpg'
import photo145 from './images/photo145.jpg'
import photo149 from './images/photo149.jpg'
import photo150 from './images/photo150.jpg'
import photo151 from './images/photo151.jpg'
import photo152 from './images/photo152.jpg'
import photo153 from './images/photo153.jpg'
import photo154 from './images/photo154.jpg'
import photo156 from './images/photo156.jpg'
import photo157 from './images/photo157.jpg'
import photo158 from './images/photo158.jpg'
import photo159 from './images/photo159.jpg'
import photo160 from './images/photo160.jpg'



export default function Private(props) {

  const instaLink = "https://www.instagram.com/genach_mosaic_workshop/"


  const arrPhotoCarousel = [
    photo149, photo153, photo151,
    photo39, photo3, photo4, photo5, photo6, photo7, photo8, photo11, photo13,
    photo15, photo16, photo17, photo18, photo19, photo20, photo21, photo23, photo24, photo25,
    photo26, photo27, photo28, photo29, photo30, photo31, photo76, photo78, photo79, photo81,
    photo82, photo84, photo85, photo87, photo89, photo90, photo91, photo93, photo95, photo96,
    photo97, photo104, photo105, photo106, photo110, photo111, photo112, photo113,
    photo114, photo115, photo116, photo117, photo119, photo120, photo128, photo132,
    photo133, photo138, photo139, photo140, photo142,
  ]



  return (

    <div id='mainDivPrivate' >
      <br /><br /><br />
      <FadeIn>


        <h1 id='titlePrivate' > סדנאות פסיפס בוטיק </h1>


        <PhotoCarousel arrPhotoCarousel={arrPhotoCarousel} />




        <p id='subTitlePrivate'>
          🎨 הצטרפו אלינו לסדנת פסיפס ייחודית בגלריית פסיפסים עתיקה מול הים, והפכו את יצירותיכם לאומנות אמיתית!<br />
          👩‍🎨 בסדנה תיהנו מליווי צמוד של מומחי פסיפס ושימור עם ניסיון עשיר בתחום, שיסייעו לכם ליצור פסיפס מרהיב שתוכלו לקחת הביתה בסיום הסדנה.<br /><br />

          ✨ הסדנה מספקת:<br />
          ✅ ליווי מקצועי של מומחי פסיפס ושימור עתיקות<br />
          ✅ עמדת קפה עם כיבוד קל<br />
          ✅ מוזיקה לבחירה ליצירת אווירה נוחה ומרגשת<br />
          ✅ זמן יצירה אישי עם תמיכה אישית של אנשי מקצוע<br /><br />

          🏛️ בגלריה שלנו אנו מייצרים ומוכרים פסיפסים בשיטה עתיקה ובסטנדרט גבוה, ומעבירים את הידע המקצועי שלנו בצורה חווייתית ומעשירה.<br />
          🚀 הצטרפו אלינו לחוויה אומנותית ומלמדת!
        </p>

        <div id='CTAPrivate'>
          <a href="#contact" className='CTA'>לתיאום מיידי</a>
        </div>




        <img id='photo37' src={photo37} alt="" />






        <p id='textPhoto38'>  חוויה מגבשת ויצירתית  </p>
        <img id='photo38' src={photo103} alt="" />



















      </FadeIn>





      <section class="pricing-section">
        <h2 class="pricing-title">🎟️ מחירים ותיאום סדנאות</h2>

        <div class="pricing-grid">


          <a href="#contact" className='pricingLink'>
            <div class="price-card">
              <h3>🖼️ סדנאות פסיפס</h3>
              <ul>

                <li>👨‍👩‍👧‍👦 מחיר לסדנה: החל מ-250₪ לאדם </li>
                {/* <li>🏢 סדנה לחברות: תמחור מותאם אישית</li> */}
              </ul>
            </div>
          </a>

        </div>


        <p class="pricing-note">המחירים כוללים חומרים, הדרכה מקצועית ואווירה מיוחדת מול הים 🌊</p>
        <a href="#contact" class="cta-button">📩 הזמן עכשיו</a>
      </section>




      <Contact instaLink={instaLink} />


    </div>

  )
}











