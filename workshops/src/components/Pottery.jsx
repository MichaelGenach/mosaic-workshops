import { React, useState, useRef, useEffect } from 'react'
import FadeIn from 'react-fade-in';
import { Link, useNavigate, } from 'react-router-dom'
import { motion } from "framer-motion"
import './Pottery.css'
import BookingWidget from './BookingWidget';
import Contact from './Contact';
import Footer from './Footer';
import PhotoCarousel from './PhotoCarousel';
import photo161 from './images/photo161.jpg'
import photo162 from './images/photo162.jpg'
import photo163 from './images/photo163.jpg'
import photo164 from './images/photo164.jpg'
import photo165 from './images/photo165.jpg'
import photo174 from './images/photo174.jpg'
import photo180 from './images/photo180.jpg'
import photo181 from './images/photo181.jpg'
import photo182 from './images/photo182.jpg'
import photo183 from './images/photo183.jpg'
import photo186 from './images/photo186.jpg'
import photo187 from './images/photo187.jpg'
import photo189 from './images/photo189.jpg'
import photo190 from './images/photo190.jpg'
import photo191 from './images/photo191.jpg'
import photo194 from './images/photo194.jpg'
import photo198 from './images/photo198.jpg'
import photo199 from './images/photo199.jpg'
import photo200 from './images/photo200.jpg'
import photo201 from './images/photo201.jpg'
import photo202 from './images/photo202.jpg'
import photo203 from './images/photo203.jpg'
import photo204 from './images/photo204.jpg'
import photo205 from './images/photo205.jpg'
import photo206 from './images/photo206.jpg'
import photo207 from './images/photo207.jpg'
import photo208 from './images/photo208.jpg'
import photo209 from './images/photo209.jpg'
import photo210 from './images/photo210.jpg'
import photo216 from './images/photo216.jpg'
import photo217 from './images/photo217.jpg'
import photo218 from './images/photo218.jpg'
import photo219 from './images/photo219.jpg'
import photo220 from './images/photo220.jpg'
import photo221 from './images/photo221.jpg'
import photo222 from './images/photo222.jpg'
import photo223 from './images/photo223.jpg'
import photo224 from './images/photo224.jpg'
import photo225 from './images/photo225.jpg'
import photo226 from './images/photo226.jpg'
import photo227 from './images/photo227.jpg'
import photo228 from './images/photo228.jpg'
import photo229 from './images/photo229.jpg'
import photo230 from './images/photo230.jpg'
import photo231 from './images/photo231.jpg'
import photo232 from './images/photo232.jpg'
import photo233 from './images/photo233.jpg'
import photo234 from './images/photo234.jpg'
import photo235 from './images/photo235.jpg'
import photo236 from './images/photo236.jpg'
import photo237 from './images/photo237.jpg'
import photo238 from './images/photo238.jpg'
import photo239 from './images/photo239.jpg'
import photo240 from './images/photo240.jpg'
import photo241 from './images/photo241.jpg'
import photo242 from './images/photo242.jpg'
import photo243 from './images/photo243.jpg'
import photo244 from './images/photo244.jpg'
import photo245 from './images/photo245.jpg'
import photo246 from './images/photo246.jpg'
import photo247 from './images/photo247.jpg'
import photo248 from './images/photo248.jpg'
import photo249 from './images/photo249.jpg'
import photo250 from './images/photo250.jpg'
import photo251 from './images/photo251.jpg'
import photo252 from './images/photo252.jpg'
import photo253 from './images/photo253.jpg'
import photo254 from './images/photo254.jpg'


import video9 from './videos/video9.mp4'
import video12 from './videos/video12.mp4'
import video13 from './videos/video13.mp4'

import { HiUserGroup } from "react-icons/hi";
import { FaPaintBrush } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { GiCalendarHalfYear } from "react-icons/gi";
import { PiFlowerLotusBold } from "react-icons/pi";
import { FaHome } from "react-icons/fa";


export default function Pottery(props) {



  const arrPhotoCarousel = [,
    //  photo209, photo210,
    photo203, photo202, photo199, photo198, photo200, photo201, photo162, photo189, photo190, photo180,
    photo181, photo182, photo183, photo194, photo164, photo165, photo186, photo187, photo191, photo216, photo217, photo218, photo219, photo220,
    photo221, photo222, photo223, photo224, photo225, photo226, photo227, photo228, photo229, photo230,
    photo231, photo232, photo233, photo234, photo235, photo236, photo237, photo238, photo239, photo240,
    photo241, photo242, photo243, photo244, photo245, photo246, photo247, photo248, photo249, photo250,
    photo251, photo252, photo253, photo254]


  return (
    <div id='mainDivPottery'>
      <br /><br /><br />

      <FadeIn>
        <div id='headLine'>
          <h1> סדנאות קדרות </h1>

        </div>


        <div id='twoPotteryVideosAndIcons'>







          <div id='potteryIconsDiv'>

            <div className='potteryIconsMiniDiv'>
              <PiFlowerLotusBold className='potteryIcons' />
              <p className='potteryIconsText'> מרגיע</p>
            </div>
            <div className='potteryIconsMiniDiv'>
              <FaPaintBrush className='potteryIcons' />
              <p className='potteryIconsText'>יצירה מיקצועית</p>
            </div>
            <div className='potteryIconsMiniDiv'>
              <FaHeart className='potteryIcons' />
              <p className='potteryIconsText'>גיבוש והנאה</p>
            </div>
            <div className='potteryIconsMiniDiv'>
              <FaHome className='potteryIcons' />
              <p className='potteryIconsText'>לוקחים הביתה</p>
            </div>
          </div>

          <div id='twoPotteryVideos'>
            <video id="video13" src={video13} autoPlay loop muted title='וידאו המדגים תוצרים של סדנת הקדרות' />
            <video id="video12" src={video12} autoPlay loop muted title='וידאו המדגים תוצרים של סדנת הקדרות' />
          </div>


        </div>
        <br />
        <a href="#contact" id='CTAPottery' className='CTA'>לתיאום מיידי</a>
        <br />






        <div id='explainPotteryDiv'>
          <p id='explainPotteryText'>

            🌟 הזמינו את המשפחה, החברים או הצוות לעולם של יצירה, השראה וגילוי עצמי – בסדנת קדרות ייחודית שלא תשכחו!<br /><br />

            👐 על גלגל האובניים, תתנסו בעבודה עם חומרים איכותיים, תלמדו טכניקות מסורתיות לצד שיטות מודרניות, ותעצבו כלי קרמיקה בעבודת יד – בדיוק לפי הדמיון והסגנון האישי שלכם.<br /><br />

            ✨ אין צורך בניסיון קודם – רק סקרנות, חיוך ורצון ליצור משהו משלכם!<br /><br />

            📍 מושלם לימי גיבוש, אירועים משפחתיים או סתם מתנה מקורית לעצמכם.<br /><br />






            ✨ הסדנה מספקת: <br />
            ✅ שימוש בציוד מקצועי ברמה הגבוהה ביותר <br />
            ✅ הדרכה אישית ומקצועית ממומחים בעלי שם עולמי בתחום שימור העתיקות והמלאכות העתיקות <br />
            ✅ חוויה יצירתית שמתאימה לכל רמות הניסיון – גם למתחילים! <br /><br />
            ובסיום? יצירות הקרמיקה המרהיבות שלכם ילכו איתכם הביתה!  <br /><br />
          </p>
        </div>










        <PhotoCarousel arrPhotoCarousel={arrPhotoCarousel} />












        <div className="textPhotoContainerPottery"></div>
        <p id='textPhoto161'>פעילויות גיבוש </p>

        <img id='photo174' src={photo204} loading="lazy" alt="לקוחות מרוצים מציגים את יצירותיהם מול חזית הגלריה שלנו" />




      </FadeIn>


      <section class="pricing-section">
        <h2 class="pricing-title">🎟️ מחירים ותיאום סדנאות</h2>

        <div class="pricing-grid">

          <a href="#contact" className='pricingLink'>
            <div class="price-card">
              <h3>🏺 סדנאות קדרות</h3>
              <ul>

                <li>👨‍👩‍👧‍👦 מחיר לסדנה: 250₪ לאדם </li>
                {/* <li>🏢 סדנה לחברות: תמחור מותאם אישית</li> */}
              </ul>
            </div>
          </a>


        </div>


        <p class="pricing-note">המחירים כוללים חומרים, הדרכה מקצועית ואווירה מיוחדת מול הים 🌊</p>
        <a href="#contact" class="cta-button">📩 הזמינו עכשיו</a>
      </section>

      <Contact />
      <Footer />
    </div>
  )
}




