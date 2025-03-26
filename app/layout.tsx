import type { Metadata } from "next";
import { Zen_Kurenaido } from 'next/font/google';
import "./globals.css";
import { Suspense } from "react";
import SplashScreen from "@/components/SplashScreen";
import { setTimeout } from "node:timers/promises";

const zenKurenaido = Zen_Kurenaido({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "PHILO! OFFICIAL SITE",
  description: "Created by K-Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="PHILO!" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={zenKurenaido.className}
      >
        <Suspense fallback={<SplashScreen />} >
          <LazyComponent />
          {children}
        </Suspense>
      </body>
    </html>
  );
}

async function LazyComponent() {
  await setTimeout(2000);
  return<></>;
}