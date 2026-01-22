import React, { useState, useEffect } from 'react';
import './ShareButton.css';

export default function ShareButton({ language = 'he' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);

  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  const translations = {
    he: {
      share: 'שיתוף',
      whatsapp: 'WhatsApp',
      facebook: 'Facebook',
      twitter: 'Twitter',
      linkedin: 'LinkedIn',
      telegram: 'Telegram',
      instagram: 'Instagram',
      email: 'אימייל',
      sms: 'SMS',
      copy: 'העתק קישור',
      copied: '!הקישור הועתק',
      shareText: "סדנאות וסיורים מומלצים בקיסריה – לפרטים והמלצות:"
    },
    en: {
      share: 'Share',
      whatsapp: 'WhatsApp',
      facebook: 'Facebook',
      twitter: 'Twitter',
      linkedin: 'LinkedIn',
      telegram: 'Telegram',
      instagram: 'Instagram',
      email: 'Email',
      sms: 'SMS',
      copy: 'Copy Link',
      copied: 'Link Copied!',
      shareText: "Recommended workshops and tours in Caesarea – details and recommendations:"
    }
  };

  const t = translations[language];

  useEffect(() => {
    if (!isMobile) {
      setHideOnScroll(false); // ⬅️ בדסקטופ תמיד גלוי
      return;
    }
  
    let lastScrollY = window.scrollY;
    let scrollTimeout = null;
  
    const onScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > lastScrollY + 10) {
        setHideOnScroll(true);
      }
  
      if (currentScrollY < lastScrollY - 10) {
        setHideOnScroll(false);
      }
  
      lastScrollY = currentScrollY;
  
      if (scrollTimeout) clearTimeout(scrollTimeout);
  
      scrollTimeout = setTimeout(() => {
        setHideOnScroll(false);
      }, 300);
    };
  
    window.addEventListener('scroll', onScroll, { passive: true });
  
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [isMobile]);
  
  



  const handleMainShareClick = async () => {
    const url = window.location.href;
    const text = t.shareText;
    const title = 'סדנאות וסיורים בקיסריה';

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile && navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch {}
      return;
    }

    setIsOpen(prev => !prev);
  };

  const handleShare = async (platform) => {
    const url = window.location.href;
    const text = t.shareText;

    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'telegram':
        window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`);
        break;
      case 'instagram':
        await navigator.clipboard.writeText(text + ' ' + url);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
        window.open('https://www.instagram.com/');
        break;
      case 'email':
        window.location.href = `mailto:?body=${encodeURIComponent(text + '\n\n' + url)}`;
        break;
      case 'sms':
        window.location.href = `sms:?body=${encodeURIComponent(text + ' ' + url)}`;
        break;
      case 'copy':
        await navigator.clipboard.writeText(url);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
        break;
      default:
        break;
    }

    setIsOpen(false);
  };

  useEffect(() => {
    const onKeyDown = (e) => e.key === 'Escape' && setIsOpen(false);
    if (isOpen) document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <div id="mainShare">
     {(!hideOnScroll || isOpen) && (
 <button
 className={`share-fab
   ${isOpen ? 'share-fab-open' : ''}
   ${isMobile && hideOnScroll && !isOpen ? 'share-fab-hidden' : ''}
 `}
 onClick={handleMainShareClick}
 aria-label={t.share}
 aria-haspopup="menu"
 aria-expanded={isOpen}
>
 <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-share-fill'}`} />
</button>

)}


      <div
        className={`share-menu ${isOpen ? 'share-menu-open' : ''}`}
        role="menu"
        aria-hidden={!isOpen}
      >
        {['whatsapp','facebook','instagram','twitter','linkedin','telegram','email','sms','copy']
          .map(p => (
            <button
              key={p}
              role="menuitem"
              className={`share-option share-${p}`}
              onClick={() => handleShare(p)}
            >
              <span>{p === 'copy' ? (showCopied ? t.copied : t.copy) : t[p]}</span>
            </button>
        ))}
      </div>

      {isOpen && <div className="share-backdrop" onClick={() => setIsOpen(false)} />}
    </div>
  );
}
