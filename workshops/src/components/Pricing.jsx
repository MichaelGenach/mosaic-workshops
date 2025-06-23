import React from 'react'
import './Pricing.css'
import { Link, useNavigate, } from 'react-router-dom';
export default function Pricing() {
    return (
        <div>

            <section class="pricing-section">
                <h2 class="pricing-title">🎟️ מחירים ותיאום סדנאות וסיורים</h2>

                <div class="pricing-grid">

                <Link className='pricingLink' to={'./pottery'} onClick={() => window.scrollTo(0, 0)}>
                        <div class="price-card">
                            <h3>🏺 סדנאות קדרות</h3>
                            <ul>

                                <li>👨‍👩‍👧‍👦 מחיר לסדנה: 250₪ לאדם </li>
                                {/* <li>🏢 סדנה לחברות: תמחור מותאם אישית</li> */}
                            </ul>
                        </div>
                    </Link>

                <Link className='pricingLink' to={'./private'} onClick={() => window.scrollTo(0, 0)}>
                        <div class="price-card">
                            <h3>🖼️ סדנאות פסיפס</h3>
                            <ul>

                                <li>👨‍👩‍👧‍👦 מחיר לסדנה: החל מ-250₪ לאדם </li>
                                {/* <li>🏢 סדנה לחברות: תמחור מותאם אישית</li> */}
                            </ul>
                        </div>
                    </Link>


                    <Link className='pricingLink' to={'./company'} onClick={() => window.scrollTo(0, 0)}>
                        <div class="price-card">
                            <h3>🏢 סדנאות לוגו פסיפס לחברות</h3>
                            <ul>
{/* 
                                <li> מחיר לסדנה: 250₪ לאדם </li> */}
                                <li>🧑‍💼 סדנה לחברות: תמחור מותאם אישית</li>
                            </ul>
                        </div>
                    </Link>

                    <Link className='pricingLink' to={'./tours'} onClick={() => window.scrollTo(0, 0)}>
                        <div class="price-card">
                            <h3>🏛️ סיורים מרתקים</h3>
                            <ul>
                                <li>📍 סיור קבוצתי: החל מ-500₪ לסיור </li>
                                <li>🕯️ סיור עששיות ערב: החל מ-500₪ לסיור </li>
                            </ul>
                        </div>
                    </Link>
                </div>


                <p class="pricing-note">המחירים כוללים חומרים, הדרכה מקצועית ואווירה מיוחדת מול הים 🌊</p>
                <a href="#contact" class="cta-button">📩 הזמינו עכשיו</a>
            </section>





        </div >
    )
}
