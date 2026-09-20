"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GOOGLE_ANALYTICS_ID = "G-E9YV2PSXZL";

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const analyticsWindow = window as AnalyticsWindow;
    analyticsWindow.gtag?.("config", GOOGLE_ANALYTICS_ID, {
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ANALYTICS_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
