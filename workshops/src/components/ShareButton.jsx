import React, { useEffect, useState } from 'react';
import './ShareButton.css';

export default function ShareButton({ language = 'he' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);

  const isMobile =
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 768px)').matches;

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
      shareText:
        'סדנאות וסיורים מומלצים בקיסריה – לפרטים והמלצות:',
      smsDesktop:
        'שליחת SMS זמינה ישירות מהטלפון בלבד.',
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
      shareText:
        'Recommended workshops and tours in Caesarea – details and recommendations:',
      smsDesktop:
        'SMS sharing is available directly from a mobile phone only.',
    },
  };

  const t = translations[language] || translations.he;

  /*
   * -----------------------------------------
   * Mobile scroll behavior
   * -----------------------------------------
   */

  useEffect(() => {
    if (!isMobile) {
      setHideOnScroll(false);
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

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        setHideOnScroll(false);
      }, 300);
    };

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [isMobile]);

  /*
   * -----------------------------------------
   * Close with Escape
   * -----------------------------------------
   */

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', onKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  /*
   * -----------------------------------------
   * Helpers
   * -----------------------------------------
   */

  const getShareData = () => {
    const url = window.location.href;

    const title =
      language === 'en'
        ? 'Workshops and Tours in Caesarea'
        : 'סדנאות וסיורים בקיסריה';

    const text = t.shareText;

    return {
      url,
      title,
      text,
    };
  };

  const copyToClipboard = async (value) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
        return true;
      }

      /*
       * Fallback for browsers where Clipboard API
       * is unavailable.
       */
      const textarea = document.createElement('textarea');

      textarea.value = value;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      textarea.style.top = '0';

      document.body.appendChild(textarea);

      textarea.focus();
      textarea.select();

      const successful = document.execCommand('copy');

      document.body.removeChild(textarea);

      return successful;
    } catch (error) {
      console.error('Copy failed:', error);
      return false;
    }
  };

  const showCopiedMessage = () => {
    setShowCopied(true);

    setTimeout(() => {
      setShowCopied(false);
    }, 2000);
  };

  /*
   * -----------------------------------------
   * Main share button
   * -----------------------------------------
   */

  const handleMainShareClick = async () => {
    const { url, title, text } = getShareData();

    /*
     * On mobile, use the native operating-system
     * share dialog whenever it is available.
     */
    if (isMobile && navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
      } catch (error) {
        /*
         * User cancelling the native share dialog
         * is normal, so we intentionally do nothing.
         */
      }

      return;
    }

    /*
     * Desktop or mobile without native sharing:
     * open our custom menu.
     */
    setIsOpen((previous) => !previous);
  };

  /*
   * -----------------------------------------
   * Individual share actions
   * -----------------------------------------
   */

  const handleShare = async (platform) => {
    const { url, text } = getShareData();

    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);

    switch (platform) {
      /*
       * WhatsApp
       */
      case 'whatsapp': {
        const whatsappUrl =
          `https://wa.me/?text=${encodeURIComponent(
            `${text} ${url}`
          )}`;

        window.open(
          whatsappUrl,
          '_blank',
          'noopener,noreferrer'
        );

        break;
      }

      /*
       * Facebook
       */
      case 'facebook': {
        const facebookUrl =
          `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

        window.open(
          facebookUrl,
          '_blank',
          'noopener,noreferrer'
        );

        break;
      }

      /*
       * X / Twitter
       */
      case 'twitter': {
        const twitterUrl =
          `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;

        window.open(
          twitterUrl,
          '_blank',
          'noopener,noreferrer'
        );

        break;
      }

      /*
       * LinkedIn
       */
      case 'linkedin': {
        const linkedinUrl =
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

        window.open(
          linkedinUrl,
          '_blank',
          'noopener,noreferrer'
        );

        break;
      }

      /*
       * Telegram
       */
      case 'telegram': {
        const telegramUrl =
          `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;

        window.open(
          telegramUrl,
          '_blank',
          'noopener,noreferrer'
        );

        break;
      }

      /*
       * Instagram
       *
       * Instagram does not provide a normal web URL
       * that allows a third-party website to pre-populate
       * a post/story with arbitrary text.
       *
       * Therefore we copy the content first and open Instagram.
       */
      case 'instagram': {
        const shareContent = `${text} ${url}`;

        const copied = await copyToClipboard(shareContent);

        if (copied) {
          showCopiedMessage();
        }

        window.open(
          'https://www.instagram.com/',
          '_blank',
          'noopener,noreferrer'
        );

        break;
      }

      /*
       * Email
       *
       * Mobile:
       * use the device's mail application.
       *
       * Desktop:
       * open Gmail compose in the browser.
       */
      case 'email': {
        const emailBody = `${text}\n\n${url}`;

        if (isMobile) {
          window.location.href =
            `mailto:?body=${encodeURIComponent(emailBody)}`;
        } else {
          const gmailUrl =
            `https://mail.google.com/mail/?view=cm&fs=1&body=${encodeURIComponent(
              emailBody
            )}`;

          window.open(
            gmailUrl,
            '_blank',
            'noopener,noreferrer'
          );
        }

        break;
      }

      /*
       * SMS
       */
      case 'sms': {
        const smsBody = `${text} ${url}`;

        if (isMobile) {
          window.location.href =
            `sms:?body=${encodeURIComponent(smsBody)}`;
        } else {
          /*
           * SMS is not normally available as a native
           * desktop browser action.
           *
           * Instead, copy the message so the user can
           * send it from their phone.
           */
          const copied = await copyToClipboard(smsBody);

          if (copied) {
            showCopiedMessage();
          } else {
            window.alert(t.smsDesktop);
          }
        }

        break;
      }

      /*
       * Copy link
       */
      case 'copy': {
        const copied = await copyToClipboard(url);

        if (copied) {
          showCopiedMessage();
        }

        break;
      }

      default:
        break;
    }

    /*
     * Close the menu after selecting an option.
     */
    setIsOpen(false);
  };

  return (
    <div id="mainShare">

      {(!hideOnScroll || isOpen) && (
        <button
          type="button"
          className={`share-fab ${
            isOpen ? 'share-fab-open' : ''
          } ${
            isMobile && hideOnScroll && !isOpen
              ? 'share-fab-hidden'
              : ''
          }`}
          onClick={handleMainShareClick}
          aria-label={t.share}
          aria-haspopup="menu"
          aria-expanded={isOpen}
        >
          <i
            className={`bi ${
              isOpen
                ? 'bi-x-lg'
                : 'bi-share-fill'
            }`}
            aria-hidden="true"
          />
        </button>
      )}

      <div
        className={`share-menu ${
          isOpen ? 'share-menu-open' : ''
        }`}
        role="menu"
        aria-hidden={!isOpen}
      >
        {[
          'whatsapp',
          'facebook',
          'instagram',
          'twitter',
          'linkedin',
          'telegram',
          'email',
          'sms',
          'copy',
        ].map((platform) => (
          <button
            key={platform}
            type="button"
            role="menuitem"
            className={`share-option share-${platform}`}
            onClick={() => handleShare(platform)}
          >
            <span>
              {platform === 'copy'
                ? showCopied
                  ? t.copied
                  : t.copy
                : t[platform]}
            </span>
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="share-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}