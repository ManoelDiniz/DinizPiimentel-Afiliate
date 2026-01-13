'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SeoMetrics() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view for SEO metrics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_path: pathname,
        page_title: document.title,
      });
    }

    // Track time on page (engagement metric)
    const startTime = Date.now();

    return () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'engagement', {
          event_category: 'User Engagement',
          event_label: pathname,
          value: timeOnPage,
          metric_id: 'time_on_page',
        });
      }
    };
  }, [pathname]);

  return null;
}
