import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {



  return (
    <div>

      <footer className="footer">
        <p>© כל הזכויות שמורות ל- Genach Workshops</p>
        <Link
          to="/hazharatNegishut"
          id="hazharatNegishutLink"
          onClick={window.scrollTo(0, 0)}
        >
          הצהרת נגישות
        </Link>

      </footer>

    </div>
  )
}
