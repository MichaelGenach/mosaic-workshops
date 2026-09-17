import './App.css';
import { useState, useEffect } from 'react';
import TagManager from 'react-gtm-module';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate
} from 'react-router-dom';

import Menu from './components/Menu';
import Home from './components/Home';
import Private from './components/Private';
import Company from './components/Company';
import Tours from './components/Tours';
import BikeTours from './components/BikeTours';
import FootTours from './components/FootTours';
import Pottery from './components/Pottery';
import Giftvouchers from './components/GiftVouchers';
import Janur from './components/Janur';
import HazharatNegishut from './components/HazharatNegishut';
import StickyWhatsappButton from './components/StickyWhatsappButton';
import Privacy from './components/Privacy';
import Terms from './components/Terms';


/* =========================
   PAGE / ROUTE MAP
   Single source of truth: every page listed once here
   automatically gets both a Hebrew route (e.g. /pottery)
   and an English route (e.g. /en/pottery).
========================= */

const pageRoutes = [
  { path: '/', Component: Home },
  { path: '/private', Component: Private },
  { path: '/company', Component: Company },
  { path: '/tours', Component: Tours },
  { path: '/bike-tours', Component: BikeTours },
  { path: '/foot-tours', Component: FootTours },
  { path: '/pottery', Component: Pottery },
  { path: '/gift-vouchers', Component: Giftvouchers },
  { path: '/janur', Component: Janur },
  { path: '/hazharatNegishut', Component: HazharatNegishut },
  { path: '/privacy', Component: Privacy },
  { path: '/terms', Component: Terms },
];

const toEnglishPath = (path) => (path === '/' ? '/en' : `/en${path}`);


/* =========================
   SEO
========================= */

function SEO({ language }) {
  const location = useLocation();

  useEffect(() => {
    const seoData = {
      he: {
        '/': {
          title: 'סדנאות פסיפס, קדרות וסיורים בקיסריה | Genach Workshops',
          description:
            'סדנאות פסיפס וקדרות, סיורים מודרכים ופעילויות מיוחדות בנמל קיסריה לזוגות, משפחות וקבוצות. חוויה יצירתית מול הים.'
        },

        '/private': {
          title: 'סדנאות פרטיות בקיסריה | פסיפס וקדרות | Genach Workshops',
          description:
            'סדנאות פסיפס וקדרות פרטיות בקיסריה לזוגות, משפחות וקבוצות. פעילות יצירתית ואישית באווירה מיוחדת בנמל קיסריה.'
        },

        '/company': {
          title: 'פעילויות גיבוש לחברות בקיסריה | Genach Workshops',
          description:
            'פעילויות גיבוש לחברות וקבוצות בקיסריה. סדנאות פסיפס וקדרות המשלבות יצירה, עבודת צוות ואווירה מיוחדת בנמל קיסריה.'
        },

        '/tours': {
          title: 'סיורים בקיסריה | סיורים מודרכים בנמל קיסריה',
          description:
            'סיורים מודרכים בקיסריה ובנמל קיסריה עם מדריך מוסמך. היכרות עם ההיסטוריה, העתיקות והסיפורים המיוחדים של קיסריה.'
        },

        '/bike-tours': {
          title: 'סיור אופניים בקיסריה | Genach Workshops',
          description:
            'סיור אופניים בקיסריה המשלב היסטוריה, נוף ואווירה מיוחדת. דרך חווייתית להכיר את קיסריה וסביבתה.'
        },

        '/foot-tours': {
          title: 'סיור רגלי בקיסריה | סיור מודרך בנמל קיסריה',
          description:
            'סיור רגלי מודרך בקיסריה ובנמל העתיק. היסטוריה, ארכאולוגיה וסיפורים מרתקים בליווי מדריך מוסמך.'
        },

        '/pottery': {
          title: 'סדנת קדרות בקיסריה | Genach Workshops',
          description:
            'סדנת קדרות חווייתית בקיסריה לזוגות, משפחות וקבוצות. מתנסים בעבודה עם חומר ויוצרים יצירה אישית באווירה נעימה מול הים.'
        },

        '/gift-vouchers': {
          title: 'שוברי מתנה לסדנאות וסיורים בקיסריה | Genach Workshops',
          description:
            'שוברי מתנה לסדנת קדרות, סדנת פסיפס או סיור מודרך בקיסריה. מתנה מקורית לזוגות, משפחה או חברים, בתוקף ל-24 חודשים.'
        },

        '/janur': {
          title: 'Janur | Genach Workshops',
          description:
            'מידע נוסף מבית Genach Workshops.'
        },

        '/hazharatNegishut': {
          title: 'הצהרת נגישות | Genach Workshops',
          description:
            'הצהרת הנגישות של אתר Genach Workshops.'
        },

        '/privacy': {
          title: 'מדיניות פרטיות | Genach Workshops',
          description:
            'מדיניות הפרטיות של אתר Genach Workshops.'
        },

        '/terms': {
          title: 'תנאי שימוש | Genach Workshops',
          description:
            'תנאי השימוש באתר Genach Workshops.'
        }
      },

      en: {
        '/': {
          title: 'Mosaic & Pottery Workshops in Caesarea | Genach Workshops',
          description:
            'Mosaic and pottery workshops, guided tours and creative experiences in Caesarea Harbor for couples, families and groups.'
        },

        '/private': {
          title: 'Private Workshops in Caesarea | Mosaic & Pottery',
          description:
            'Private mosaic and pottery workshops in Caesarea for couples, families and groups. A creative and personal experience by the sea.'
        },

        '/company': {
          title: 'Team Building Activities in Caesarea | Genach Workshops',
          description:
            'Creative team-building activities for companies and groups in Caesarea. Mosaic and pottery workshops combining creativity and teamwork.'
        },

        '/tours': {
          title: 'Guided Tours in Caesarea | Caesarea Harbor Tours',
          description:
            'Guided tours in Caesarea and Caesarea Harbor with a certified tour guide. Discover the history, archaeology and stories of ancient Caesarea.'
        },

        '/bike-tours': {
          title: 'Bike Tour in Caesarea | Genach Workshops',
          description:
            'A unique bike tour in Caesarea combining history, scenery and a fun way to discover the area.'
        },

        '/foot-tours': {
          title: 'Walking Tour in Caesarea | Guided Caesarea Tour',
          description:
            'A guided walking tour through Caesarea and its ancient harbor, combining history, archaeology and fascinating stories.'
        },

        '/pottery': {
          title: 'Pottery Workshop in Caesarea | Genach Workshops',
          description:
            'Hands-on pottery workshops in Caesarea for couples, families and groups. Create your own piece in a relaxed seaside atmosphere.'
        },

        '/gift-vouchers': {
          title: 'Gift Vouchers for Workshops & Tours in Caesarea | Genach Workshops',
          description:
            'Gift vouchers for a pottery workshop, mosaic workshop or guided tour in Caesarea. An original gift for couples, family or friends, valid for 24 months.'
        },

        '/janur': {
          title: 'Janur | Genach Workshops',
          description:
            'More information from Genach Workshops.'
        },

        '/hazharatNegishut': {
          title: 'Accessibility Statement | Genach Workshops',
          description:
            'Accessibility statement for the Genach Workshops website.'
        },

        '/privacy': {
          title: 'Privacy Policy | Genach Workshops',
          description:
            'Privacy policy for the Genach Workshops website.'
        },

        '/terms': {
          title: 'Terms of Use | Genach Workshops',
          description:
            'Terms of use for the Genach Workshops website.'
        }
      }
    };

    // Strip a leading /en so we can look up the shared page data
    // regardless of which language URL we're on.
    const basePath = location.pathname.startsWith('/en')
      ? (location.pathname.slice(3) || '/')
      : location.pathname;

    const currentLanguageData = seoData[language] || seoData.he;

    const pageData =
      currentLanguageData[basePath] ||
      currentLanguageData['/'];

    /* Title */
    document.title = pageData.title;

    /* Meta Description */
    let descriptionTag = document.querySelector(
      'meta[name="description"]'
    );

    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute(
      'content',
      pageData.description
    );

    /* Language */
    document.documentElement.lang =
      language === 'he' ? 'he' : 'en';

    /* Canonical */
    let canonicalTag = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }

    const canonicalUrl =
      `${window.location.origin}${location.pathname}`;

    canonicalTag.setAttribute(
      'href',
      canonicalUrl
    );

    /* Hreflang alternates — tells Google the he/en pages are
       language versions of the same page, not duplicate content */
    const hreflangs = [
      { hreflang: 'he', path: basePath },
      { hreflang: 'en', path: toEnglishPath(basePath) },
      { hreflang: 'x-default', path: basePath },
    ];

    hreflangs.forEach(({ hreflang, path }) => {
      let tag = document.querySelector(
        `link[rel="alternate"][hreflang="${hreflang}"]`
      );

      if (!tag) {
        tag = document.createElement('link');
        tag.setAttribute('rel', 'alternate');
        tag.setAttribute('hreflang', hreflang);
        document.head.appendChild(tag);
      }

      tag.setAttribute(
        'href',
        `${window.location.origin}${path}`
      );
    });

  }, [language, location.pathname]);

  return null;
}


/* =========================
   Language <-> URL sync
========================= */

function useUrlSyncedLanguage() {
  const [language, setLanguageState] = useState('he');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isEnglish =
      location.pathname === '/en' ||
      location.pathname.startsWith('/en/');

    setLanguageState(isEnglish ? 'en' : 'he');
  }, [location.pathname]);

  const setLanguage = (lang) => {
    const isCurrentlyEnglish =
      location.pathname === '/en' ||
      location.pathname.startsWith('/en/');

    if (lang === 'en' && !isCurrentlyEnglish) {
      navigate(toEnglishPath(location.pathname));
    } else if (lang === 'he' && isCurrentlyEnglish) {
      const stripped = location.pathname.slice(3);
      navigate(stripped === '' ? '/' : stripped);
    }
  };

  return [language, setLanguage];
}


/* =========================
   App content (lives inside BrowserRouter
   so it can use routing hooks)
========================= */

function AppContent() {

  const [language, setLanguage] = useUrlSyncedLanguage();

  const languageSettings = {
    he: {
      direction: 'rtl',
      textAlign: 'right'
    },
    en: {
      direction: 'ltr',
      textAlign: 'left'
    },
  };

  const fontsByLanguage = {
    he: "'Segoe UI', 'Helvetica Neue', sans-serif",
    en: "'Segoe UI', 'Helvetica Neue', sans-serif"
  };

  useEffect(() => {

    const initGtm = () =>
      TagManager.initialize({
        gtmId: 'GTM-ND4DK7X2'
      });

    if ('requestIdleCallback' in window) {

      const id = window.requestIdleCallback(
        initGtm,
        { timeout: 3000 }
      );

      return () =>
        window.cancelIdleCallback(id);

    } else {

      window.addEventListener(
        'load',
        initGtm,
        { once: true }
      );

      return () =>
        window.removeEventListener(
          'load',
          initGtm
        );
    }

  }, []);

  return (
    <div
      className="App"
      style={{
        fontFamily: fontsByLanguage[language]
      }}
    >

      <SEO language={language} />

      <Menu
        language={language}
        setLanguage={setLanguage}
        languageSettings={languageSettings}
      />

      <StickyWhatsappButton />

      <Routes>

        {pageRoutes.map(({ path, Component }) => (
          <Route
            key={`he-${path}`}
            path={path}
            element={
              <Component
                language={language}
                languageSettings={languageSettings}
              />
            }
          />
        ))}

        {pageRoutes.map(({ path, Component }) => (
          <Route
            key={`en-${path}`}
            path={toEnglishPath(path)}
            element={
              <Component
                language={language}
                languageSettings={languageSettings}
              />
            }
          />
        ))}

      </Routes>

    </div>
  );
}


/* =========================
   App
========================= */

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;