import React, { useState, useEffect } from 'react';
import './StickyWhatsappButton.css';

export default function StickyWhatsappButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let scrollTimeout;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // הצג רק אחרי 300px גלילה
            if (currentScrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // הסתר בזמן גלילה
            setIsScrolling(true);

            // הצג שוב אחרי דיליי של 1.5 שניות
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, 1500);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    return (
        <a
            className={`StickyWhatsappButton ${isVisible && !isScrolling ? 'show' : 'hide'}`}
            href="https://wa.me/9720523948920"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="לינק לוואצאפ של בעל העסק"
        >
            <i className="bi bi-whatsapp"></i>
    
        </a>
    );
}