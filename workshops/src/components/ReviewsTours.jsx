import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Reviews.css'

export default function Reviews({ language, languageSettings }) {
    const [dragConstraintReviews, setDragConstraintReviews] = useState(0);
    const carusel = useRef();
    const container = useRef();
    const scrollInterval = useRef();



    const reviewsHe = [
        {
            name: "כרמית",
            review: "מייקל נהנינו מאוד מהסיור אתמול. נהננו מהידע שלך מהאדיבות והיחס שלך. היה מעניין מאוד לשמוע על ההסטוריה והאומנות (פסיפסים) ואנחנו מעריכים את הידע שלך בתחומים האלו. תודה לך על ערב מקסים ונמליץ עלייך לחברים שלנו",
            rating: 5
        },
        {
            name: "סטודיו o2a",
            review: " אנחנו משרד אדריכלים של 11 אנשים ויצאנו ליום כיף בקיסריה. מייקל התאים את תוכן הסיור עבורינו. שם דגש על נושאים אדריכליים, סיקרן וחד לנו חידות. נהננו מאוד, הידע של מייקל מאוד מרשים! מומלץ בחום",
            rating: 5
        },
        {
            name: "לירון",
            review: "חגגנו יום הולדת ורצינו משהו קליל וייחודי בתנועה גם בשביל הילדים, מייקל התאים את התוכן והמקומות בהם עצרנו לפי הצורך של הקבוצה, היה מעניין מאוד 😊",
            rating: 5
        },
        {
            name: "הילה",
            review: "מייקל המקסים לקח אותנו לסיור מדהים, מהנה וטעים. חוויה ממש ! מאוד נהננו ולמדנו המון, פלטת גבינות מושלמת והדרכת קדרות מעניינת. מומלץ בחום",
            rating: 5
        },
        {
            name: "אמיר",
            review: "היה מקסים!",
            rating: 5
        },
        {
            name: "טלי",
            review: "יצאנו ליום כיף 6 בנות מהעבודה. חיפשנו חוויה איכותית ולא ארוכה מידי לקראת יום עמוס... הבחירה במייקל היתה מצוינת. ערכנו סיור קצר ומאד ממצה בעתיקות קיסריה ושמענו בשקיקה את הסיפורים השזורים בהיסטוריה של קיסריה. מייקל הפליא בידיעותיו, באופן העברת הדברים וביכולתו לרתק אותנו. ממליצה מאד. 🥂",
            rating: 5
        },
        {
            name: "סאן",
            review: "היה ממש טוב!",
            rating: 5
        },
        {
            name: "יאיר ",
            review: "היה מדהים מאוד מלמד ומעשיר תודה על התענוג!!!",
            rating: 5
        },
        {
            name: "צוות מורים",
            review: "כקבוצת מורים בת 12 משתתפים, חיפשנו דרך מיוחדת ומעשירה לסיים את שנת הלימודים – ומצאנו בדיוק את מה שחיפשנו עם מייקל! מייקל תכנן עבורנו מסלול מותאם אישית, תוך הקפדה על תוכן מרתק, מקומות מוצלים ונעימים – גם ביום קיץ חם במיוחד. סדנת קדרות מהנה שהייתה במקום ממוזג, הוסיפה חוויה יצירתית ומפתיעה. נהנינו מכל רגע. מומלץ לכל קבוצה שמחפשת חוויה איכותית ומעשירה.",
            rating: 5
        },
        {
            name: "חיים",
            review: "הסיור היה מרתק, האוכל היה טעים מאוד וממש הוסיף לחוויה, מייקל גם שר ממש יפה! וסדנת הקדרות עם אמיר היתה יוצאת דופן! ממש הפיקו לנו יום כיף. ממליץ בחום!",
            rating: 5
        },
        {
            name: "מיכאל לוי",
            review: "לא ציפיתי להרגיש כל כך מחובר להיסטוריה של קיסריה, ממש מסע בזמן! ממליץ...",
            rating: 5
        },
        {
            name: "נועה",
            review: "הסיור בקיסריה היה שילוב מושלם של תרבות, היסטוריה ונופים מרהיבים. המדריך היה סבלני וענה על כל שאלה שלנו, עם המון ידע והומור",
            rating: 5
        },
        {
            name: "אורן ותמר",
            review: "הסיור של מייקל היה פשוט תענוג! הוא שילב בצורה נהדרת את העבר עם ההווה, ונתן לנו לראות את קיסריה מזווית חדשה ומרגשת. הוא באמת מקצוען!",
            rating: 5
        },
        {
            name: "דנה ברנשטיין",
            review: "סיור מיוחד מאוד, ממליצה.",
            rating: 5
        },
        {
            name: "אבי",
            review: "סיור מאוד מעניין! סיירנו במקומות מיוחדים שלא כולם מכירים, ממש אחלה",
            rating: 5
        },
        {
            name: "חיים",
            review: "אהבתי מאוד, מומלץ!",
            rating: 5
        },
        {
            name: "שני",
            review: "הסיור היה מקצועי ומעניין, והאווירה הייתה מאוד אינטימית וייחודית. כיף לראות מדריך שמחובר כל כך למקום",
            rating: 5
        },
        {
            name: "דנה ברנשטיין",
            review: "הייתי בסיורים רבים, אבל הסיור של מייקל היה משהו מיוחד. הדרך שבה הוא בנה את הסיפור סביב כל אתר, – היה פשוט קסום. תודה מייקל על חוויה בלתי נשכחת!",
            rating: 5
        },
        {
            name: "דנה",
            review: "הסיור של מייקל בקיסריה היה חוויה מדהימה! הוא ידע לספר את ההיסטוריה בצורה כזאת שגרמה לי להרגיש כאילו אני חלק מהסיפור. גם הנוף המהמם של קיסריה ושלל הסיפורים, כל פרט היה מעניין. ממליצה בחום!",
            rating: 5
        },
    ]

    const reviewsEn = [
        {
            name: "Carmit",
            review: "Michael, we truly enjoyed yesterday's tour. We appreciated your knowledge, kindness, and approach. It was fascinating to hear about the history and art (mosaics), and we value your expertise in these fields. Thank you for a lovely evening; we will definitely recommend you to our friends.",
            rating: 5
        },
        {
            name: "Studio o2a",
            review: "We are an architectural firm of 11 people and went on a team-building day in Caesarea. Michael tailored the tour content for us, emphasizing architectural themes, sparking curiosity, and challenging us with riddles. We had a blast—Michael's knowledge is very impressive! Highly recommended.",
            rating: 5
        },
        {
            name: "Liron",
            review: "We celebrated a birthday and wanted something light, unique, and active for the kids as well. Michael adapted the content and the stops to the group's needs. It was very interesting! 😊",
            rating: 5
        },
        {
            name: "Hila",
            review: "The lovely Michael took us on an amazing, fun, and delicious tour. A real experience! We enjoyed it so much and learned a lot. The cheese platter was perfect and the pottery instruction was fascinating. Highly recommended.",
            rating: 5
        },
        {
            name: "Amir",
            review: "It was lovely!",
            rating: 5
        },
        {
            name: "Tali",
            review: "Six of us women went out for a fun day from work. We were looking for a high-quality experience that wasn't too long before a busy day... Choosing Michael was excellent. We had a brief and very comprehensive tour of the Caesarea antiquities and listened eagerly to the stories woven into its history. Michael excelled in his knowledge, delivery, and ability to captivate us. Highly recommended. 🥂",
            rating: 5
        },
        {
            name: "Sun",
            review: "It was really good!",
            rating: 5
        },
        {
            name: "Yair",
            review: "It was amazing, very educational and enriching. Thanks for the pleasure!!!",
            rating: 5
        },
        {
            name: "Teaching Staff",
            review: "As a group of 12 teachers, we were looking for a special and enriching way to end the school year—and we found exactly what we were looking for with Michael! Michael planned a personalized route for us, ensuring engaging content and pleasant, shaded spots—even on a particularly hot summer day. A fun pottery workshop in an air-conditioned space added a creative and surprising experience. We enjoyed every moment. Recommended for any group seeking a quality and enriching experience.",
            rating: 5
        },
        {
            name: "Chaim",
            review: "The tour was fascinating, the food was delicious and really added to the experience, and Michael also sings beautifully! The pottery workshop with Amir was exceptional! They truly put together a fun day for us. Highly recommend!",
            rating: 5
        },
        {
            name: "Michael Levi",
            review: "I didn't expect to feel so connected to the history of Caesarea—literally a journey through time! Recommend...",
            rating: 5
        },
        {
            name: "Noa",
            review: "The tour in Caesarea was a perfect blend of culture, history, and breathtaking views. The guide was patient and answered all our questions with plenty of knowledge and humor.",
            rating: 5
        },
        {
            name: "Oren and Tamar",
            review: "Michael's tour was simply a delight! He wonderfully combined the past with the present and gave us a new and exciting perspective on Caesarea. He’s a true professional!",
            rating: 5
        },
        {
            name: "Dana Bernstein",
            review: "A very special tour, I recommend it.",
            rating: 5
        },
        {
            name: "Avi",
            review: "Very interesting tour! We toured unique spots that not everyone knows, really great.",
            rating: 5
        },
        {
            name: "Chaim",
            review: "Loved it very much, recommended!",
            rating: 5
        },
        {
            name: "Shani",
            review: "The tour was professional and interesting, and the atmosphere was very intimate and unique. It's great to see a guide so connected to the place.",
            rating: 5
        },
        {
            name: "Dana Bernstein",
            review: "I've been on many tours, but Michael's was something special. The way he built the story around each site was simply magical. Thank you, Michael, for an unforgettable experience!",
            rating: 5
        },
        {
            name: "Dana",
            review: "Michael's tour in Caesarea was an amazing experience! He knew how to tell the history in a way that made me feel like I was part of the story. Between the stunning views of Caesarea and the wealth of stories, every detail was interesting. Highly recommend!",
            rating: 5
        }
    ];
    


    const settings = languageSettings[language];
    const reviews = language === 'he' ? reviewsHe : reviewsEn;


    useEffect(() => {
        const el = container.current;

        const stopAutoScroll = () => {
            clearInterval(scrollInterval.current);
        };

        const startAutoScroll = () => {
            if (scrollInterval.current) return; // למנוע כפילויות
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
            }, 30); // מהירות גלילה
        };

        startAutoScroll();

        el.addEventListener("touchstart", stopAutoScroll);
        el.addEventListener("touchend", startAutoScroll);
        el.addEventListener("touchcancel", startAutoScroll);

        return () => {
            clearInterval(scrollInterval.current);
            el.removeEventListener("touchstart", stopAutoScroll);
            el.removeEventListener("touchend", startAutoScroll);
            el.removeEventListener("touchcancel", startAutoScroll);
        };
    }, []);


    useEffect(() => {
        const updateWidth = () => {
            if (carusel.current && container.current) {
                setDragConstraintReviews(
                    carusel.current.scrollWidth - container.current.offsetWidth
                );
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    useEffect(() => {
        const scroll = () => {
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

        scrollInterval.current = setInterval(scroll, 30);

        return () => {
            clearInterval(scrollInterval.current);
        };
    }, []);

    const handleMouseEnter = () => {
        clearInterval(scrollInterval.current);
    };

    const handleMouseLeave = () => {
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



    return (
        <div id="reviewsContainer" className='reviewsContainerTours' style={{
            direction: "ltr",
          }}>
            <motion.div
                id="reviewsCarousel"
                ref={container}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ overflow: 'hidden', cursor: 'grab' }}
            >
                <motion.div
                    id="carouselInner"
                    ref={carusel}
                    drag="x"
                    dragConstraints={{ right: 0, left: -dragConstraintReviews }}

                    style={{
                        display: 'flex',
                        flexDirection: 'row',




                    }}

                >

                    {reviews.map((item, index) => (
                        <motion.div
                            className={
                                item.review.length > 190
                                    ? "long-review"
                                    : "reviewCard"
                            }
                            key={index}>
                            <div id='nameStar'>

                                <h3 >{item.name}  </h3>
                                <p id='stars'>{"★".repeat(item.rating)}</p>

                            </div>

                            <p>{item.review}</p>

                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}


