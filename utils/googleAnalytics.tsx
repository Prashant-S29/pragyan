'use client';

import Script from 'next/script';

export const GoogleAnalytics = ({ GA_TRACKING_ID }: { GA_TRACKING_ID: string }): JSX.Element => (
  <>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} strategy="afterInteractive" />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `}
    </Script>
  </>
);
