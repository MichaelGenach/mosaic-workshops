import React, { useState } from 'react';
import './ShareButton.css';

export default function ShareButton({ language = 'he' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

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
      shareText: 'אני מעוניין בסדנאות וסיורים בקיסריה – מומלץ מאוד!'
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
      shareText: 'I\'m interested in workshops and tours in Caesarea – highly recommended!'
    }
  };



  const handleMainShareClick = async () => {
    const text = t.shareText;
    const url = window.location.href;
    const title = 'סדנאות וסיורים בקיסריה';
  
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  
    if (isMobile && navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch (err) {
        // גם אם המשתמש ביטל – לא עושים כלום
      }
      return; // ⬅️ קריטי: במובייל יוצאים תמיד
    }
  
    // דסקטופ בלבד
    setIsOpen((prev) => !prev);
  };
  
  
  




  const handleShare = async (platform) => {
    const url = window.location.href;
    const text = t.shareText;
    const title = 'Genach Workshops';

    switch (platform) {
      case 'whatsapp':
        window.open(
          `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
          '_blank',
          'noopener,noreferrer'
        );
        break;

      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
          '_blank',
          'noopener,noreferrer'
        );
        break;

      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
          '_blank',
          'noopener,noreferrer'
        );
        break;

      case 'linkedin':
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          '_blank',
          'noopener,noreferrer'
        );
        break;

      case 'telegram':
        window.open(
          `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
          '_blank',
          'noopener,noreferrer'
        );
        break;

      case 'instagram':
        try {
          await navigator.clipboard.writeText(text + ' ' + url);
          setShowCopied(true);
          setTimeout(() => setShowCopied(false), 2000);
          window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer');
        } catch (err) {
          console.error('Instagram share failed:', err);
        }
        break;

        case 'email': {
          const subject = encodeURIComponent(title);
          const body = encodeURIComponent(text + '\n\n' + url);
        
          const mailto = `mailto:?subject=${subject}&body=${body}`;
          const gmail = `https://mail.google.com/mail/?view=cm&fs=1&su=${subject}&body=${body}`;
        
          // ניסיון ראשון: mail client מקומי
          window.location.href = mailto;
        
          // fallback ל-Gmail (אחרי השהייה קטנה)
          setTimeout(() => {
            window.open(gmail, '_blank', 'noopener,noreferrer');
          }, 300);
        
          break;
        }
        

      case 'sms':
        window.location.href =
          `sms:?body=${encodeURIComponent(text + ' ' + url)}`;
        break;

      case 'copy':
        try {
          await navigator.clipboard.writeText(url);
          setShowCopied(true);
          setTimeout(() => setShowCopied(false), 2000);
        } catch (err) {
          console.error('Failed to copy:', err);
        }
        break;

      default:
        break;
    }

    setIsOpen(false);
  };


  const t = translations[language];
  return (
    <div id='mainShare' >
      <button
        className={`share-fab ${isOpen ? 'share-fab-open' : ''}`}
        onClick={handleMainShareClick}
        aria-label={t.share}
      >
        <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-share-fill'}`} />
      </button>

      <div className={`share-menu ${isOpen ? 'share-menu-open' : ''}`}>
        <button className="share-option share-whatsapp" onClick={() => handleShare('whatsapp')}>
          <i className="bi bi-whatsapp" /><span>{t.whatsapp}</span>
        </button>

        <button className="share-option share-facebook" onClick={() => handleShare('facebook')}>
          <i className="bi bi-facebook" /><span>{t.facebook}</span>
        </button>

        <button className="share-option share-instagram" onClick={() => handleShare('instagram')}>
          <i className="bi bi-instagram" /><span>{t.instagram}</span>
        </button>

        <button className="share-option share-twitter" onClick={() => handleShare('twitter')}>
          <i className="bi bi-twitter-x" /><span>{t.twitter}</span>
        </button>

        <button className="share-option share-linkedin" onClick={() => handleShare('linkedin')}>
          <i className="bi bi-linkedin" /><span>{t.linkedin}</span>
        </button>

        <button className="share-option share-telegram" onClick={() => handleShare('telegram')}>
          <i className="bi bi-telegram" /><span>{t.telegram}</span>
        </button>

        <button className="share-option share-email" onClick={() => handleShare('email')}>
          <i className="bi bi-envelope-fill" /><span>{t.email}</span>
        </button>

        <button className="share-option share-sms" onClick={() => handleShare('sms')}>
          <i className="bi bi-chat-dots-fill" /><span>{t.sms}</span>
        </button>

        <button className="share-option share-copy" onClick={() => handleShare('copy')}>
          <i className="bi bi-link-45deg" />
          <span>{showCopied ? t.copied : t.copy}</span>
        </button>
      </div>

      {isOpen && <div className="share-backdrop" onClick={() => setIsOpen(false)} />}
    </div>
  );
}
