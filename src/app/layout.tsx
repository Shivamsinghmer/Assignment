import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// Removed: import '@fontsource/clash-display/variable.css';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import AiChatWidget from '@/components/ui/ai-chat-widget';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Removed: const clashDisplayVariable = 'Clash Display Variable';

export const metadata: Metadata = {
  title: {
    default: 'SoftSell Revolution - Resell Your Software Licenses',
    template: '%s | SoftSell Revolution',
  },
  description: 'SoftSell Revolution is the secure, transparent marketplace for enterprise software license resale. Transform unused software licenses into revenue.',
  openGraph: {
    title: 'SoftSell Revolution - Resell Your Software Licenses',
    description: 'Join the SoftSell marketplace to buy and sell unused enterprise software licenses securely and efficiently.',
    url: 'https://softsell.revolution', // Replace with actual domain
    siteName: 'SoftSell Revolution',
    images: [
      {
        url: 'https://placehold.co/1200x630.png?text=SoftSell+Revolution', // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: 'SoftSell Revolution platform for software license resale',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoftSell Revolution - Resell Your Software Licenses',
    description: 'The future of software license management. Buy and sell with confidence on SoftSell Revolution.',
    // images: ['https://placehold.co/1200x630.png?text=SoftSell+Revolution'], // Replace with actual Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@1&display=swap" rel="stylesheet" />
      </head>
      <body 
        className={`${inter.variable} font-sans antialiased`}
        // Removed style prop: style={{ '--font-clash-display': clashDisplayVariable } as React.CSSProperties}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
          <AiChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
