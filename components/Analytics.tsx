'use client';

import { useEffect } from 'react';

export default function Analytics() {
  useEffect(() => {

    const GA_ID = 'G-W6T7QF09ZQ';
    
    if (typeof window === 'undefined' || !GA_ID) {
      return;
    }

   
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}', {
        page_path: window.location.pathname,
      });
    `;
    document.head.appendChild(script2);

    // Rastrear scroll
    let scrollTracked = false;
    const handleScroll = () => {
      if (!scrollTracked && window.scrollY > 500) {
        scrollTracked = true;
        if ((window as any).gtag) {
          (window as any).gtag('event', 'scroll', {
            event_category: 'engagement',
            event_label: 'scrolled_500px',
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
