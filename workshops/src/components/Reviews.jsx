import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Reviews.css'

export default function Reviews({ language, }) {
  const [dragConstraintReviews, setDragConstraintReviews] = useState(0);
  const carusel = useRef();
  const container = useRef();
  const scrollInterval = useRef();



  const reviewsHe = [
    {
      name: "Eden Azulay",
      review: "היתה סדנא מהנה ומאוד מרגיעה! אמיר לימד אותנו את הטכניקה, ואפשר לנו להתנסות באובניים הסביר ותיקן בסבלנות ובשמחה. וכל זאת עם הנוף בנמל קיסריה נהנו מאוד ממליצים בחום על הסדנא",
      rating: 5
    },
    {
      name: "ענת",
      review: "סדנא חוויתית וכייפית אמיר סובלני ומדריך מצויין מומלץ בחום",
      rating: 5
    },
    {
      name: "כרמית",
      review: "מייקל נהנינו מאוד מהסיור אתמול. נהננו מהידע שלך מהאדיבות והיחס שלך. היה מעניין מאוד לשמוע על ההסטוריה והאומנות (פסיפסים) ואנחנו מעריכים את הידע שלך בתחומים האלו. תודה לך על ערב מקסים ונמליץ עלייך לחברים שלנו",
      rating: 5
    },
    {
      name: "שיראל ונתי",
      review: " היינו הערב אצל אמיר בסדנא ושמחים מאוד על כך הייתה חוויה מהנה מאוד",
      rating: 5
    },
    {
      name: "סטודיו o2a",
      review: " אנחנו משרד אדריכלים של 11 אנשים ויצאנו ליום כיף בקיסריה. מייקל התאים את תוכן הסיור עבורינו. שם דגש על נושאים אדריכליים, סיקרן וחד לנו חידות. נהננו מאוד, הידע של מייקל מאוד מרשים! מומלץ בחום",
      rating: 5
    },
    {
      name: "קרן וארז",
      review: "סדנה סופר מהנה ואמיר פשוט בחור מרתק! אנרגיה ממש נעימה ומקום קטן וקסום בנוף הפסטורלי של נמל קיסריה סדנה באווירה נעימה ביתית ומאוד מאפשרת מומלץ בחום 🩷",
      rating: 5
    },
    {
      name: "ג׳יליאן",
      review: "הזמנתי את הסדנא הזוגית כהפתעה לבעלי והיה מושלם!! אמיר סיפר על עצמו והיה מרתק וגם העבודה היתה ממש מעולה הננו מכל רגע ואני ממליצה בחום",
      rating: 5
    },
    {
      name: "לירון",
      review: "חגגנו יום הולדת ורצינו משהו קליל וייחודי בתנועה גם בשביל הילדים, מייקל התאים את התוכן והמקומות בהם עצרנו לפי הצורך של הקבוצה, היה מעניין מאוד 😊",
      rating: 5
    },
    {
      name: "עינב ודלית",
      review: "החלטנו לצאת יום כיף של אמא ובת חיפשנו סדנת קרמיקה ומצאנו את הסדנה של אמיר בקיסריה מעבר למיקום המושלם אמיר העביר את הסדנה בצורה מעניינת מאוד שילב רקע היסטורי והתנסות עם הסבר והרבה סבלנות תודה רבה אמיר!",
      rating: 5
    },
    {
      name: "א.ל",
      review: "חוויה זוגית כיפית ונעימה במיקום מהמם! אמיר היה סבלני ושירותי והשרה אווירה נעימה🙂",
      rating: 5
    },
    {
      name: "נעם ועוז",
      review: "היתה סדנא נהדרת קיבלנו הרבה מידע מעניין והתנסינו בעבודה עם אבניים אמיר בעל ניסיון וסיפורים מרתקים נהננו מאד",
      rating: 5
    },
    {
      name: "הילה",
      review: "מייקל המקסים לקח אותנו לסיור מדהים, מהנה וטעים. חוויה ממש ! מאוד נהננו ולמדנו המון, פלטת גבינות מושלמת והדרכת קדרות מעניינת. מומלץ בחום",
      rating: 5
    },
    {
      name: "עדי ודביר",
      review: "היינו הבוקר בסדנה אצל אמיר והיה מעולה ההקדמה הייתה מעניינת מאוד וחיברה אותנו ליצירה שעשינו אמיר הסביר והדגים בנעימות ובנחת ודאג ששנינו נצא עם כלים גמורים מומלץ בחום 🙏",
      rating: 5
    },
    {
      name: "תמי ניב",
      review: "מקום פסטורלי מהיפים בארץ. אמיר בעל ידע עצום, מסביר ברוגע על הפעילות ועל הקשר להיסטוריה של המקום ונותן לעשות הכל לבד. אפשר להתנתק לרגע מהמולת החיים, לחזור לילדות, ולעבוד עם הידיים בכיף. חוויה נהדרת, תודה רבה אמיר!",
      rating: 5
    },
    {
      name: "ערן בנסל",
      review: "אמיר היה מקסים ונעים והכל זרם מצויין",
      rating: 5
    },
    {
      name: "אלמוג נחום",
      review: "היינו אצל אמיר בסדנת אובניים משפחתית (5 אנשים) ונהנינו מכל רגע! הוא היה סבלני, נעים, הסביר בצורה ברורה ונתן לכולנו להרגיש בנוח – גם למי שזו פעם ראשונה שלו עם חומר. הסדנה הייתה כיפית ויצירתית ויצאנו עם כלים שהכנו בעצמנו ועם חוויה משפחתית מיוחדת. ממליצים עליו בחום!",
      rating: 5
    },
    {
      name: "אמיר",
      review: "היה מקסים!",
      rating: 5
    },
    {
      name: "אדוה נוף",
      review: "חוויה שקטה רגועה ואינטימית מאד בסטודיו הנעים של אמיר קיבלנו שעתיים + של אסקפיזם טהור מאד נהנו כזוג גם מהשיח עם אמיר המקצועיות שלו והיצירה שיצאנו איתה מומלץ בחום",
      rating: 5
    },
    {
      name: "כרמל ודנה סו",
      review: "היינו בסדנא זוגית אצל אמיר והיה פשוט מ-ו-ש-ל-ם! אמיר תודה רבה לך על הסבלנות הנעימות הרוגע ההסברים המפורטים והרחבת הידע מומלץ בחום",
      rating: 5
    },
    {
      name: "טלי",
      review: "יצאנו ליום כיף 6 בנות מהעבודה. חיפשנו חוויה איכותית ולא ארוכה מידי לקראת יום עמוס... הבחירה במייקל היתה מצוינת. ערכנו סיור קצר ומאד ממצה בעתיקות קיסריה ושמענו בשקיקה את הסיפורים השזורים בהיסטוריה של קיסריה. מייקל הפליא בידיעותיו, באופן העברת הדברים וביכולתו לרתק אותנו. ממליצה מאד. 🥂",
      rating: 5
    },
    {
      name: "גיחה ואיתי פרויליך",
      review: "הייתה חוויה זוגית מחכימה וכייפית אמיר העשיר לנו את הידע והעביר לנו סדנה מהנה ביותר ממליצים בחום!",
      rating: 5
    },
    {
      name: "בני והילה",
      review: "התארחנו בסטודיו של אמיר לחגוג יום הולדת להילה בסדנה זוגית אווירה מאוד נעימה אמיר מקצוען יופי של הסברים מאוד מעניינים על נושא חומרים לסוגיהם נושא שימור ורסטורציה ארכיאולוגיה כללית ועוד היה כיף מומלץ בחום",
      rating: 5
    },
    {
      name: "גדעון",
      review: "חוויה נהדרת! הסדנא ענתה על הציפיות שלנו כזוג והרבה מעבר אמיר השקיע בכל פרט בסבלנות רבה ופרגון תודה רבה גם על הנכונות לשתף מנסיונך והידע העמוק על עולם עתיק וקסום",
      rating: 5
    },
    {
      name: "ניצן",
      review: "חוויה מהנה ומומלצת בחום! אמיר מקצועי וסבלני עם סיפורים והסברים מרתקים הסדנה נעשית באווירה נעימה ומזמינה נהננו מאוד!",
      rating: 5
    },
    {
      name: "עדי ואביבה",
      review: "סדנת קדרות עם ערך מוסף! מעבר לחוויה הנעימה והמהנה בהתנסות ביצירה באבניים אמיר מביא אתו הרבה ידע בתחום הארכיאולוגיה למדנו ונהנינו",
      rating: 5
    },
    {
      name: "יעלה",
      review: "היינו בסדנה של המשפחה לכבוד יום ההולדת של אבא שלי היה מרתק ומהנה במיוחד! אמיר היה מאוד סובלני ודאג שכולנו נצא מרוצים עם כלים מהממים היו אזעקות לקראת סוף הסדנאות ורצנו למרחב המוגן ליד בסיום האזעקות חזרנו לסטודיו וסיימנו את היצירות למרות האזעקות והטילים יצאנו מהסדנא מרוצים מאוד היה מרתק ופשוט תענוג",
      rating: 5
    },
    {
      name: "לין ועידן",
      review: "היינו בסדנה זוגית היה מושלם ממש! היה אלינו מאוד סבלני וממש עזר המון ידע בתחום ומרגיש שהוא באמת מקצועי חוויה מיוחדת ושונה לזוג לשבור שגרה ממש ממש כיף לגמרי ממליצים",
      rating: 5
    },
    {
      name: "מתן חלבי",
      review: "הייתה סדנה מהממת למדנו על כל החומרים וההיסטוריה ואז גם התנסנו בעצמנו חוויה זוגית כיפית ומגבשת אמיר מדריך עם המון סבלנות נותן טיפים ועזרה כשצריך והכי חשוב תחושה נעימה ורגועה עוד נחזור לסדנאות המשך",
      rating: 5
    },
    {
      name: "ירדן ואורן",
      review: "הייתה חוויה באמת מדהימה אמיר היה מאוד סבלני כלפי כולנו גם כלפי אנשים שהיה להם יותר קושי לבצע את המשימות היותר מוטוריקה עדינה הוא היה כל כך סבלני ותמיד ניסה לכוון עד שהצלחנו ליצור דבר באמת יפיפה בפן המנהלי היינו קבוצה גדולה של 11 אנשים וכולנו יצאנו עם תוצרים ביד ובסך הכל זו הייתה חוויה באמת מדהימה אסקפיזם טהור שאני ממליץ לכולם לעשות ובהזדמנות זו אני רוצה גם לומר המון תודה לאמיר ",
      rating: 5
    },
    {
      name: "ויקטוריה",
      review: "סדנא מהממת! מתנסים בשני סוגי חומרים ויוצאים עם הכלים הביתה שזה וואו 🥳 הכל נעשה בסבלנות ועם הסבר מקצועי ורגיש ☺️",
      rating: 5
    },
    {
      name: "גל ועומר",
      review: "חוויה זוגית כיפית ונעימה במיקום מדהים אמיר היה סבלני ומרתק בידע הרב שלו היה קשוב וסייע לנו בכל רגע שהיינו זקוקים לו תודה רבה אמיר נהנינו מאוד!",
      rating: 5
    },
    {
      name: "רחלי",
      review: "היינו בסדנה זוגית אצל אמיר היה מאד מלמד ואינפורמטיבי אמיר ליווה אותנו בסבלנות בכל שלב בהסברים וטיפים כדי לצאת בסוף עם תוצר ותחושת הצלחה וחוויה חיובית ממליצים",
      rating: 5
    },
    {
      name: "נואל",
      review: "הייתי היום בסדנת יחיד היה לי כיף אמיר מדריך מקצועי ומאוד נעים",
      rating: 5
    },
    {
      name: "שרי",
      review: "הפתעתי את בעלי ליום ההולדת והגענו לסדנת אובניים זוגית אצל אמיר. נהננו מכל רגע- גם מההסבר בהתחלה על עבודתו של אמיר כמשמר, וכמובן מהשלווה של היצירה בזמן שהכנו את כלי הקרמיקה וצבענו אותם בליווי הסבלני של אמיר. כל זה וברקע הנוף היפייפה של נמל קיסריה.",
      rating: 5
    },
    {
      name: "רז וסופיה",
      review: "הסדנה הייתה חוויה מצוינת ובאווירה ממש טובה, נהנינו מאוד. אמיר סבלני מאוד ומסביר פנים. מומלץ",
      rating: 5
    },
    {
      name: "Libi Dahan",
      review: "הייתה חוויה מעניינת, מיוחדת ומומלצת מאוד! אמיר מסביר הכל בצורה נפלאה ומאוד סבלני.",
      rating: 5
    },
    {
      name: "מעיין",
      review: "הגענו ליום הולדת של חברה והיה משגע אמיר נורא נחמד וסבלני נהנינו מאוד מומלץ בהחלט",
      rating: 5
    },
    {
      name: "איילת",
      review: "הלכתי עם חברה לסדנה זוגית של פיסול בחימר, אמיר היה נעים וסבלני מאוד. הסביר לנו על ההיסטוריה של החומר והמקום, בעזרתו פיסלנו בחימר כלי לבחירתנו. היצירה והאווירה במקום משרים אווירה של רוגע. מאוד מהנינו!! מומלץ!",
      rating: 5
    },
    {
      name: "אופירה כהן",
      review: "עשיתי את הסדנא אצל אמיר כמתנת יום הולדת לבעלי היה מדהים נהנו מאוד חוויה מיוחדת במינה ויצאנו עם תוצרים יפים אין לי ספק שעוד נחזור לסדנה נוספת אמיר היה סבלני ומסביר פנים היה כיף מומלץ",
      rating: 5
    },
    {
      name: "קובי הראל",
      review: "היה נהדר אמיר זרם מאוד אם קצב ההתקדמות שלנו הוסיף עומק והסברים חוויה נהדרת ליום הולדת מומלץ בחום!",
      rating: 5
    },
    {
      name: "שרון פורת",
      review: "היה בילוי מקסים! חגגנו יום הולדת לבעלי והגענו עם שלושת הילדים הבוגרים, כולם נהנו מאוד, אמיר סופר מקצועי וסופר נחמד, מומלץ בחום",
      rating: 5
    },
    {
      name: "גיא נימני",
      review: "היה מושלם! הגענו לבילוי לכבוד 15 שנות נישואים. אמיר מדהים, איש עשיר בידע נרחב וכל כך חברותי. נהננו לשמוע אותו, ללמוד ממנו וליצור בסדנא שלו. הפעם הבאה תהיה עם הילדים 🙂",
      rating: 5
    },
    {
      name: "שובל",
      review: "אמיר איש מדהים ומיוחד! משרה רוגע, ובעל סבלנות שלא נגמרת!! העביר לנו הסבר קצר, שם לנו מוזיקה נעימה שליוותה אותנו לאורך הסדנא והיה שירותי וקשוב. הסדנא היתה מקסימה ויצאנו עם אחלה של יצירות! תודה רבה!",
      rating: 5
    },
    {
      name: "מאי בן ברוך",
      review: "  היה ממש ממש כיף!! אדיר איש נעים מקסים וסובלני, הדריך אותנו הסביר לנו נתן לנו לאחר הסבר מאוד יפה לגשת לעבודה עם הטיפים וההסתכלות שלו, מאוד נהנו חוויה עצמאית ומוסברת היטב ומאוד כיפית, בוודאי שנחזור שוב!!!",
      rating: 5
    },
    {
      name: "אליאס",
      review: "אמיר על הכיפאק, מותק של בחור. הדריך אותנו והסביר בסובלנות שלב שלב, ככה שבסוף יצאנו עם כדים מהממים. מומלץ בחום.",
      rating: 5
    },
    {
      name: "צביקה ואורלי",
      review: "היה מעולה, אמיר מסביר בצורה נפלאה על עבודתו ועל החומרים, תודה.",
      rating: 5
    },
    {
      name: "דן שירן",
      review: "אחת הסדנאות הכי טובות שהיינו בה! אמיר בנאדם מדהים, סבלני, ומסביר בצורה מופלאה ממש! בלי קשר שהוא ממש מומחה בכל מה שקשור לקדרות הוא גם מביא איתו ניסיון ארכיאולוגי מטורף! במהלך הסדנה מקבלים הסבר תמציתי ולעניין. כחלק מההסברים אמיר שיתף מידע נדיר על הצלת אתר שהיה באפלה במשך 2,000 שנה, הקטקומבות היהודיות ברומא! באמת סדנה חובה לכולם.",
      rating: 5
    },
    {
      name: "יוני",
      review: "סדנא מומלצת מאד. לאחר הסבר ורקע על החומר וההיסטוריה שלו, ניגשים למלאכה ובעזרת אמיר שהוא איש מדהים, סבלני ונחמד, הצלחנו לעבוד על האבניים ולצאת עם מזכרת נחמדה. יכול להיות מתאים ומהנה לכל גיל. מומלץ בחום.",
      rating: 5
    },
    {
      name: "רעות וגיל",
      review: "היינו אצל אמיר בסדנת קרמיקה. אמיר הסביר בצורה מאוד מעניינת על ההיסטוריה והחומר. ויש לו ידע רב ומעניין על ארכיאולוגיה ושימור. אמיר היה מאוד סבלני ונעים ועזר לנו לצאת עם כלים למזכרת.",
      rating: 5
    },

    {
      name: "סופי וחיים",
      review: "באנו לסדנה של אמיר לחגוג את השש שנים שלנו יחד והיה פשוט מדהים ! מומלץ מאוד ! הסביר לנו באופן מפורט מאוד על התהליך ועל העבר של האבן בעבר ועל סוגים שונים, גם תהליך של היצירה הסביר הכל ועזר במידת הצורך., ממליצה",
      rating: 5
    },
    {
      name: "יאיר ",
      review: "היה מדהים מאוד מלמד ומעשיר תודה על התענוג!!!",
      rating: 5
    },
    {
      name: "דעאל ולירז",
      review: "אמיר היה מקסים, סבלני ומרתק, נהננו מאוד בסדנה ולמדנו ממנו הרבה, לגמרי ממליצים ומקווים לחזור בקרוב! תודה רבה אמיר 🙏🏻🫶🏻",
      rating: 5
    },
    {
      name: "זיו",
      review: "הגענו לסדנה לכבוד יום הולדת, 4 משתתפים, ממש ממש נהננו! היה כיף להתנסות ולהתעסק עם החומרים ועם המכונה, לשמוע סיפורים מעניינים מאמיר ולצאת בסיום עם התוצרים היפים שהכנו! תודה!",
      rating: 5
    },
    {
      name: "סאן",
      review: "היה ממש טוב!",
      rating: 5
    },
    {
      name: "טל",
      review: "מומלץ בחום, מעבר לסדנה היה מעשיר ומרתק, אמיר איש מקסים וסבלני, נהנו מאוד!",
      rating: 5
    },
    {
      name: "עדי, מירי טניה",
      review: "הסדנה מוצלחת מאוד. ההסבר בתחילה היה מעשיר ומעניין. אמיר אדיב מאוד וסבלני. נהנינו מאוד ואף למדנו.",
      rating: 5
    },
    {
      name: "שוהם טיילו",
      review: "אמיר מדהים. באמת,שנית כל, יצאנו עם יצירות מדהימותתתתת. אמיר נתן לנו יד חופשית לחומרים ולצבעים. באמת באמת באמת שאין חוויה כזו. ואין בן אדם כזה! אין ספק שנחזור אליו שוב! ",
      rating: 5
    },
    {
      name: "אדוה",
      review: "אמיר מדהים! איזה בן אדם צנוע ומעניין יצא לי לפגוש הייתה אווירה מעולה והסברים בפירוט רחב ! העבודות יצאו מדהימות ללא ספק נחזור!",
      rating: 5
    },
    {
      name: "עידו סגל",
      review: "חוויות קדרות מיוחדת ואישית, את היצירות עושים לבד עם הכוונה ועזרה של אמיר, אפשר לבחור מה שרוצים! בנוסף הנוף בנמל מהמם!",
      rating: 5
    },

  ]

  const reviewsEn = [
    {
      name: "Eden Azulay",
      review: "The workshop was enjoyable and very relaxing! Amir taught us the technique and patiently guided us through the pottery wheel with clarity and joy. All this with the beautiful view of Caesarea Harbor. We really enjoyed it and warmly recommend the workshop",
      rating: 5
    },
    {
      name: "Anat",
      review: "A fun and experiential workshop. Amir is patient and an excellent instructor. Highly recommended",
      rating: 5
    },
    {
      name: "Karmit",
      review: "Michael, we really enjoyed the tour yesterday. We appreciated your knowledge, kindness, and attitude. It was very interesting to hear about the history and the art (mosaics), and we value your expertise in these fields. Thank you for a wonderful evening, and we will recommend you to our friends",
      rating: 5
    },
    {
      name: "Shirel and Nati",
      review: "We were at Amir's workshop this evening and are very happy we came. It was a very enjoyable experience",
      rating: 5
    },
    {
      name: "Studio o2a",
      review: "We are an architectural firm with 11 people and went for a fun day in Caesarea. Michael tailored the tour content for us, focusing on architectural topics and challenging us with riddles. We really enjoyed it, Michael’s knowledge is very impressive! Highly recommended",
      rating: 5
    },
    {
      name: "Karen and Erez",
      review: "A super enjoyable workshop and Amir is simply fascinating! Really pleasant energy and a small, magical place with a pastoral view of Caesarea Harbor. The workshop had a cozy, welcoming atmosphere and was very accommodating. Highly recommended 🩷",
      rating: 5
    },
    {
      name: "Jillian",
      review: "I booked the couples workshop as a surprise for my husband and it was perfect! Amir shared about himself and was captivating. The work itself was excellent. We enjoyed every moment and I warmly recommend it",
      rating: 5
    },
    {
      name: "Liron",
      review: "We celebrated a birthday and wanted something light and unique with movement, also for the kids. Michael adapted the content and stops according to the group’s needs. It was very interesting 😊",
      rating: 5
    },
    {
      name: "Einav and Dalit",
      review: "We planned a mother-daughter fun day and looked for a ceramics workshop. We found Amir’s workshop in Caesarea. Beyond the perfect location, Amir conducted the workshop in a very engaging way, combining historical background with hands-on experience and plenty of patience. Thank you very much, Amir",
      rating: 5
    },
    {
      name: "A.L.",
      review: "A fun and pleasant couple’s experience in a beautiful location! Amir was patient, helpful, and created a pleasant atmosphere 🙂",
      rating: 5
    },
    {
      name: "Noam and Oz",
      review: "It was a wonderful workshop. We received a lot of interesting information and got to try working on the pottery wheel. Amir is experienced with fascinating stories. We really enjoyed it",
      rating: 5
    },
    {
      name: "Hila",
      review: "Lovely Michael took us on an amazing, fun, and delicious tour! A truly great experience. We enjoyed and learned a lot, with a perfect cheese platter and an interesting pottery lesson. Highly recommended",
      rating: 5
    },
    {
      name: "Adi and Dvir",
      review: "We were at Amir’s workshop this morning and it was excellent. The introduction was very interesting and connected us to the creation process. Amir explained and demonstrated gently and patiently, making sure we both left with finished pottery. Highly recommended 🙏",
      rating: 5
    },
    {
      name: "Tami Niv",
      review: "A beautiful pastoral place. Amir has vast knowledge, calmly explains the activity and its historical connection, and lets you do everything yourself. It’s a chance to disconnect from the noise of life, return to childhood, and work with your hands joyfully. A wonderful experience, thank you Amir",
      rating: 5
    },
    {
      name: "Eran Bensal",
      review: "Amir was lovely and pleasant and everything went smoothly",
      rating: 5
    },
    {
      name: "Almog Nahum",
      review: "We attended Amir’s family pottery workshop (5 people) and enjoyed every moment! He was patient, kind, clear in explanations, and made us all feel comfortable—even those using the material for the first time. The workshop was fun and creative, and we left with pottery we made ourselves and a special family experience. Highly recommended",
      rating: 5
    },
    {
      name: "Amir",
      review: "It was wonderful",
      rating: 5
    },
    {
      name: "Adva Nof",
      review: "A very quiet, calm, and intimate experience in Amir’s pleasant studio. We got over two hours of pure escape. We really enjoyed it as a couple, also the conversation with Amir, his professionalism, and the creation we made. Highly recommended",
      rating: 5
    },
    {
      name: "Carmel and Dana Su",
      review: "We were at Amir’s couples workshop and it was simply perfect! Amir, thank you very much for your patience, kindness, calmness, detailed explanations, and expanding our knowledge. Highly recommended",
      rating: 5
    },
    {
      name: "Tali",
      review: "We went on a fun day out with 6 girls from work. We wanted a quality and not too long experience before a busy day. Choosing Michael was excellent. We had a short, very comprehensive tour of Caesarea Antiquities and eagerly listened to the stories woven into Caesarea’s history. Michael was brilliant with his knowledge, presentation, and ability to captivate us. Highly recommend 🥂",
      rating: 5
    },
    {
      name: "Gicha and Itai Froilich",
      review: "It was an enlightening and fun couple’s experience. Amir enriched our knowledge and gave us a very enjoyable workshop. Highly recommended",
      rating: 5
    },
    {
      name: "Benny and Hila",
      review: "We visited Amir’s studio to celebrate Hila’s birthday with a couple’s workshop. Very pleasant atmosphere. Amir is a professional with great, very interesting explanations about materials, their types, preservation, restoration, archaeology, and more. It was fun and highly recommended",
      rating: 5
    },
    {
      name: "Gideon",
      review: "A wonderful experience! The workshop exceeded our expectations as a couple and much more. Amir invested in every detail with great patience and kindness. Thank you also for sharing your deep knowledge and experience about an ancient and magical world",
      rating: 5
    },
    {
      name: "Nitzan",
      review: "A fun and highly recommended experience! Amir is professional and patient with fascinating stories and explanations. The workshop is held in a pleasant and inviting atmosphere. We really enjoyed it",
      rating: 5
    },
    {
      name: "Adi and Aviva",
      review: "Pottery workshop with added value! Beyond the pleasant and enjoyable experience of working with clay, Amir brings a lot of knowledge in archaeology. We learned a lot and enjoyed ourselves",
      rating: 5
    },
    {
      name: "Ya’ala",
      review: "We attended a family workshop for my dad’s birthday. It was especially fascinating and enjoyable! Amir was very patient and ensured we all left satisfied with beautiful pottery. There were sirens near the end of the workshops and we ran to the protected area nearby. After the sirens, we returned to the studio and finished our creations despite the alerts and rockets. We left very satisfied; it was fascinating and simply a pleasure",
      rating: 5
    },
    {
      name: "Lin and Idan",
      review: "We attended a couples workshop that was absolutely perfect! Amir was very patient with us and helped a lot. He has great knowledge and feels truly professional. A special and different experience for couples to break routine—totally fun. Highly recommended",
      rating: 5
    },
    {
      name: "Matan Halabi",
      review: "It was an amazing workshop. We learned about all the materials and history, and then tried it ourselves. A fun and bonding couples experience. Amir is a patient instructor who gives tips and help when needed, and most importantly, creates a pleasant and calm atmosphere. We will definitely come back for more workshops",
      rating: 5
    },
    {
      name: "Yarden and Oren",
      review: "It was truly an amazing experience. Amir was very patient with all of us, including those who had more difficulty with the tasks requiring fine motor skills. He was so patient and always tried to guide us until we succeeded in creating something really beautiful. On the management side, we were a large group of 11 people and all left with finished pieces in hand. Overall, it was a truly amazing experience—pure escape. I recommend it to everyone and want to say a big thank you to Amir",
      rating: 5
    },
    {
      name: "Victoria",
      review: "Amazing workshop! We worked with two types of materials and took the pottery home, which was wow 🥳. Everything was done patiently and with professional and sensitive explanations ☺️",
      rating: 5
    },
    {
      name: "Gal and Omer",
      review: "A fun and pleasant couples experience in an amazing location. Amir was patient and fascinating with his vast knowledge, attentive and helpful whenever we needed him. Thank you very much, Amir, we really enjoyed it",
      rating: 5
    },
    {
      name: "Racheli",
      review: "We attended a couples workshop with Amir. It was very educational and informative. Amir patiently guided us at every step with explanations and tips to leave with a finished product and a sense of success and a positive experience. Highly recommended",
      rating: 5
    }
  ];




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
    <div id="reviewsContainer">
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
                item.review.length > 250
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
