import { ModeToggle } from '@/components/mode-toggle';
import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  title: 'Long Distance Moving Price Calculator',
  description: 'Calculate your long distance moving price',
  // manifest: '/site.webmanifest',
  // other: {
  //   'apple-mobile-web-app-status-bar-style': 'black-translucent',
  //   'mobile-web-app-capable': 'yes',
  // },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
  openGraph: {
    title: 'Long Distance Moving Price Calculator',
    description: 'Calculate your long distance moving price',
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: 'Long Distance Moving Price Calculator',
    // images: '/og-image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-muted dark:bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="flex justify-end items-center p-4">
            <ModeToggle />
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
