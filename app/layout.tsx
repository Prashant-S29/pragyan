import './globals.css';
import { Metadata } from 'next';

// Fonts
import { fonts } from '@/fonts';

// utils
import { env, generateSeo, GoogleAnalytics } from '@/utils';

// Generate SEO metadata
export const metadata: Metadata = generateSeo({
  title: {
    template: '%s | Pragyan | SKIT Jaipur',
    default: 'Pragyan | SKIT Jaipur',
  },
  description: 'Website for Pragyan Hackathon at SKIT College Jaipur',
  url: '/',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.montserrat} antialiased`}>
        <GoogleAnalytics GA_TRACKING_ID={env.GA_TRACKING_ID} />
        {children}
      </body>
    </html>
  );
}
