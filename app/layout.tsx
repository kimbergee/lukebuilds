import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lukebuildsri.com'),
  title: {
    default: 'Luke Builds',
    template: '%s | Luke Builds',
  },
  description: 'Contractor & Builder services in Providence, Rhode Island area.',
  openGraph: {
    title: 'Luke Builds',
    description: 'Contractor & Builder services in Providence, Rhode Island area.',
    url: 'https://lukebuildsri.com',
    siteName: 'Luke Builds',
    locale: 'en_US',
    type: 'website',
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>{children}</body>
    </html>
  );
}
