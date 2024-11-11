import type { SiteConfig } from '@/types';
/**
 * Site configuration for SEO, Make sure to setup current values before deploying the site.
 * @type {SiteConfig}
 * @returns {SiteConfig} - Site configuration object.
 */
export const siteConfig: SiteConfig = {
  name: 'Pragyan | SKIT Jaipur',
  description: 'Website for Pragyan Hackathon at SKIT College Jaipur',
  url: 'https://pragyan.vercel.app',
  domain: 'pragyan.vercel.app',
  ogImage: {
    url: 'https://example.com/images/banner.png',
    width: 641,
    height: 321,
  },
  twitterHandle: '@httpsPrashant',
  links: {
    twitter: 'https://twitter.com/httpsPrashant',
  },
};
