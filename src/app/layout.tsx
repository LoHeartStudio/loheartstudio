import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://loheartstudio.com"),
  title: {
    default: "LoHeartStudio | Lo-fi craft for the web.",
    template: "%s | LoHeartStudio",
  },
  description:
    "Lo-fiで温度のあるWebを作る、ソロスタジオ。ひとつずつ、ていねいに。手ざわりのあるWebを、あなたのブランドに。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://loheartstudio.com",
    siteName: "LoHeartStudio",
    title: "LoHeartStudio | Lo-fi craft for the web.",
    description:
      "Lo-fiで温度のあるWebを作る、ソロスタジオ。ひとつずつ、ていねいに。",
    images: [
      {
        url: "/images/logo-sns.png",
        width: 1200,
        height: 630,
        alt: "LoHeartStudio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LoHeartStudio | Lo-fi craft for the web.",
    description:
      "Lo-fiで温度のあるWebを作る、ソロスタジオ。ひとつずつ、ていねいに。",
    images: ["/images/logo-sns.png"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
