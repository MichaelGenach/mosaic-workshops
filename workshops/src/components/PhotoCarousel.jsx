import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

export default function PhotoCarousel(props) {
  const scrollInterval = useRef(null);
  const container = useRef(null);
  const carusel = useRef(null);
  const [dragConstraint, setDragConstraint] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [wideImages, setWideImages] = useState({});

  // זיהוי מצב פלאפון
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // גלילה אוטומטית התחלתית
  useEffect(() => {
    const el = container.current;
    const stopAuto = () => clearInterval(scrollInterval.current);
    const startAuto = () => {
      if (scrollInterval.current) return;
      scrollInterval.current = setInterval(() => {
        if (carusel.current) {
          carusel.current.scrollLeft += 1;
          if (
            carusel.current.scrollLeft + carusel.current.offsetWidth >=
            carusel.current.scrollWidth
          ) {
            carusel.current.scrollLeft = 0;
          }
        }
      }, 50);
    };
    startAuto();
    el.addEventListener('touchstart', stopAuto);
    el.addEventListener('touchend', startAuto);
    el.addEventListener('touchcancel', startAuto);
    return () => {
      clearInterval(scrollInterval.current);
      el.removeEventListener('touchstart', stopAuto);
      el.removeEventListener('touchend', startAuto);
      el.removeEventListener('touchcancel', startAuto);
    };
  }, []);

  // חישוב dragConstraint
  useEffect(() => {
    const updateWidth = () => {
      if (carusel.current && container.current) {
        const newC = carusel.current.scrollWidth - container.current.offsetWidth;
        setDragConstraint(newC > 0 ? newC : 0);
      }
    };

    const waitImages = async () => {
      const imgs = carusel.current?.querySelectorAll('img');
      if (!imgs) return updateWidth();
      await Promise.all(Array.from(imgs).map(img => img.complete ? Promise.resolve() : new Promise(r => { img.onload = img.onerror = r; })));
      updateWidth();
    };

    waitImages();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [props.arrPhotoCarousel]);

  // גלילה שניה
  useEffect(() => {
    const auto = () => {
      if (container.current) {
        container.current.scrollLeft += 1;
        if (
          container.current.scrollLeft >=
          container.current.scrollWidth - container.current.clientWidth
        ) {
          container.current.scrollLeft = 0;
        }
      }
    };
    scrollInterval.current = setInterval(auto, 30);
    return () => clearInterval(scrollInterval.current);
  }, []);

  const stopDrag = () => clearInterval(scrollInterval.current);
  const startDrag = () => {
    scrollInterval.current = setInterval(() => {
      if (container.current) {
        container.current.scrollLeft += 1;
        if (
          container.current.scrollLeft >=
          container.current.scrollWidth - container.current.clientWidth
        ) {
          container.current.scrollLeft = 0;
        }
      }
    }, 30);
  };

  const handleImageLoad = (e, index) => {
    const w = e.target.naturalWidth;
    if (w > 400) {
      setWideImages(prev => ({ ...prev, [index]: true }));
    }
  };

  const shuffledPhotos = useMemo(() => {
    const cleaned = props.arrPhotoCarousel.filter(Boolean);
    const arr = [...cleaned];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [props.arrPhotoCarousel]);

  return (
    <div>
      <div id="caruselDiv">
        <motion.div
          id="carousel"
          ref={container}
          onMouseEnter={stopDrag}
          onMouseLeave={startDrag}
          style={{ overflow: 'hidden', cursor: 'grab' }}
        >
          <motion.div
            id="InnerCarousel"
            ref={carusel}
            drag="x"
            dragConstraints={{ right: 0, left: -dragConstraint }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            style={{
              display: 'flex',
              flexDirection: 'row',
              cursor: isDragging ? 'grabbing' : 'grab',
            }}
          >
            {shuffledPhotos.map((item, index) => (
              <motion.div
                key={`${item}-${index}`}
                className="item"
                style={{
                  margin: '0 10px',
                  flexShrink: 0,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={item}
                  loading= "auto"
                  alt="תמונה הממחישה את סדנאות היצירה והסיורים המרתקים שלנו, נופים יפים, לקוחות מרוצים ומהלך הסדנאות והסיורים"
                  onLoad={(e) => handleImageLoad(e, index)}
                  onError={() => console.log('Image failed to load:', item)}
                  style={
                    isMobile && wideImages[index]
                      ? { maxWidth: '400px', display: 'block', margin: '0 auto' }
                      : { maxHeight: '400px' }
                  }
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
