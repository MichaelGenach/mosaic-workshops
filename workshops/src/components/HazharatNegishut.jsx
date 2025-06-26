import React from 'react'
import { Link } from 'react-router-dom'
import './HazharatNegishut.css'
import Contact from './Contact'
import Footer from './Footer'
export default function HazharatNegishut() {
    return (
        <div>

            <div className="accessibility-statement">
                <h2>הצהרת נגישות</h2>
                <p>
                    באתר Genach Workshops אנו פועלים להבטיח חוויית גלישה נגישה ונוחה לכלל המשתמשים, מתוך מחויבות לאפשר שוויון הזדמנויות וגלישה מכבדת עבור אנשים עם מוגבלויות.
                </p>
                <h3>התאמות נגישות שבוצעו באתר:</h3>
                <ul>
                    <li>האתר כולל כפתור נגישות צף בפינה הימנית התחתונה ("נגיש לי") המאפשר התאמה אישית של צבעים, גודל טקסט ועוד.</li>
                    <li>האתר ניתן לניווט מלא באמצעות מקלדת, באמצעות מקש <strong>Tab</strong>, <strong>Shift + Tab</strong> ו-<strong>Enter</strong>.</li>
                </ul>
                <h3>יצירת קשר בנושא נגישות:</h3>
                <p>
                    במידה ונתקלתם בקושי או בעיה הקשורה לנגישות באתר, נשמח שתעדכנו אותנו ואנו נעשה כמיטב יכולתנו לסייע ולפתור את הבעיה.
                </p>
                <p>
                    ניתן ליצור קשר באמצעים המופיעים באתר, כולל טופס יצירת קשר, קישורים בתחתית הדפים ואמצעי ההתקשרות האחרים או דרך המספר: 0523948920.
                </p>
            </div>
            <Link id='hazara' to={'/'} onClick={window.scrollTo(0, 0)}>חזרה לדף הבית</Link>
            <Contact />
            <Footer />
        </div>
    )
}
