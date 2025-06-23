import { React, useEffect } from 'react'
import { Link, useNavigate, } from 'react-router-dom';
import './Tours.css'
import Contact from './Contact';
import BookingWidget from './BookingWidget';
import PhotoCarousel from './PhotoCarousel';
import FadeIn from 'react-fade-in';
import photo40 from './images/photo40.jpg'
import photo41 from './images/photo41.jpg'
import photo42 from './images/photo42.jpg'
import photo51 from './images/photo51.jpg'
import photo52 from './images/photo52.jpg'
import photo53 from './images/photo53.jpg'
import photo54 from './images/photo54.jpg'
import photo55 from './images/photo55.jpg'
import photo56 from './images/photo56.jpg'
import photo75 from './images/photo75.jpg'
import photo197 from './images/photo197.jpg'
import photo211 from './images/photo211.jpg'
import photo212 from './images/photo212.jpg'
import photo213 from './images/photo213.jpg'
import photo214 from './images/photo214.jpg'
import photo215 from './images/photo215.jpg'
import madregot from './videos/madregot.mp4'
import yam from './videos/yam.mp4'
import porfir from './videos/porfir.mp4'
import { MdOutlineRecommend } from "react-icons/md";
import { TbVip } from "react-icons/tb";
import { TbMapStar } from "react-icons/tb";
import { PiCertificate } from "react-icons/pi";
import { FaWaze, FaInstagram } from "react-icons/fa";



import { useRef } from 'react';
import { motion } from "framer-motion"

export default function Tours(props) {



    const arrPhotoCarousel = [photo215, photo56, , photo214, photo213, photo211, photo55, photo75,]

const instaLink = "https://www.instagram.com/art_music_explore/"




    return (

        <div id='mainDivTours' >
            <FadeIn>
                <br /><br /><br /><br />
                <h1 className='toursTitle'> סיורים מרתקים</h1>
                <br />
  

                <div id='twoToursVideosAndIcons'>



                    <div id='toursIconsDiv'>

                        <div className='toursIconsMiniDiv'>
                            <TbVip className='toursIcons' />
                            <p className='toursIconsText'>סיור פרטי</p>
                        </div>
                        <div className='toursIconsMiniDiv'>
                            <MdOutlineRecommend className='toursIcons' />
                            <p className='toursIconsText'>מטיילים ממליצים</p>
                        </div>
                        <div className='toursIconsMiniDiv'>
                            <TbMapStar className='toursIcons' />
                            <p className='toursIconsText'>מסלול לבחירתכם</p>
                        </div>
                        <div className='toursIconsMiniDiv' >
                            <PiCertificate className='toursIcons' />
                            <p className='toursIconsText' > מורה דרך מוסמך</p>
                        </div>
                    </div>

                    <div id='threeToursVideosDiv'>
                        <video id="madregot" src={madregot} autoPlay loop muted />
                        <video id="yam" src={yam} autoPlay loop muted />
                        <video id="porfir" src={porfir} autoPlay loop muted />
                    </div>


                </div>


              
                    <a href="#contact" id='CTATours' className='CTA'>לתיאום מיידי </a>
                    
               


                    <div id="tourExperience">
  <h2>🌅 דמיינו את זה...</h2>
  <p>
    אתם משוטטים בין חורבותיה הקסומות של קיסריה העתיקה. כל אבן לוחשת סיפור מהעבר,
    כל צעד מחבר אתכם לתרבות רומית מרהיבה.
  </p>

  <h3>🍷 ואז, עם שקיעת השמש…</h3>
  <p>
    נעצור מול נוף עוצר נשימה, שם יחכה לכם מגש טעימות עשיר:
  </p>

  <ul>
    <li>🧀 גבינות בוטיק בעבודת יד</li>
    <li>🍞 לחמים טריים וריחניים</li>
    <li>🍷 יין משובח שיחמיא לכל ביס</li>
  </ul>

  <p>🎶 כל זה מלוּוה במוזיקה חיה שתעטוף אתכם באווירה מושלמת.</p>
  <p>🎨 ולסיום – הדגמת קדרות חיה! האובניים מסתובבים, החימר מתעצב, ואתם עדים לרגע הקסם שבו חומר הופך לאמנות.</p>

  <h3>✨ מה תקבלו בסיור?</h3>
  <ul>
    <li>✅ חוויית סיור סוחפת שמחברת היסטוריה מרתקת לנופים מרהיבים</li>
    <li>✅ תובנות מקצועיות על עולם הארכיאולוגיה ושימור אתרים</li>
    <li>✅ סיפורים מרגשים שלא תמצאו באף ספר היסטוריה</li>
    <li>✅ טיפים בלעדיים על המקומות הסודיים של קיסריה</li>
    <li>✅ מדריך מוסמך ומומחה לשימור אתרים – מהצלת פסיפס הציפורים ועד הקטקומבות ברומא</li>
    <li>✅ חוויה בלתי נשכחת!</li>
  </ul>
</div>





<div id='carouselToursPhotos'>
                <PhotoCarousel  arrPhotoCarousel={arrPhotoCarousel} />
                </div>



            </FadeIn>


            <section class="pricing-section">
                <h2 class="pricing-title">🎟️ מחירים ותיאום סיורים</h2>

                <div class="pricing-grid">

                    <a href="#contact" className='pricingLink'>
                        <div class="price-card">
                            <h3>🏛️ סיורים מרתקים</h3>
                            <ul>
                                <li>📍 סיור קבוצתי: החל מ-500₪ לסיור </li>
                                <li>🕯️ סיור עששיות ערב: החל מ-500₪ לסיור </li>
                            </ul>
                        </div>
                    </a>
                </div>


                <p class="pricing-note">המחירים כוללים הדרכה מקצועית ואווירה מיוחדת מול הים 🌊</p>
                <a href="#contact" class="cta-button">📩 הזמינו עכשיו</a>
            </section>


            <Contact instaLink={instaLink} />

        </div>

    )
}
