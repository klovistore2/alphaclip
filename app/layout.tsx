import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider"; // Importer le nouveau provider


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "yatubbb - AI Image & Video Generation Platform",
  description: "Create, edit, and share AI-generated images and videos with yatubbb. Turn your ideas into stunning visuals with our user-friendly AI tools.",
  keywords: ["AI", "image generation", "video generation", "artificial intelligence", "creative tools"],
  authors: [{ name: "yatubbb Team" }],
  creator: "yatubbb",
  publisher: "yatubbb",
  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    languages: {
      'en-US': '/en',
      'fr-FR': '/fr'
    },
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "yatubbb",
    title: "yatubbb - AI Image & Video Generation Platform",
    description: "Create, edit, and share AI-generated images and videos with yatubbb. Turn your ideas into stunning visuals with our user-friendly AI tools.",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "yatubbb - AI Image & Video Generation Platform"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "yatubbb - AI Image & Video Generation Platform",
    description: "Create, edit, and share AI-generated images and videos with yatubbb",
    images: ["https://yourdomain.com/twitter-image.jpg"],
    creator: "@yatubbb"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
