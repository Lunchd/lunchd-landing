import type { Metadata } from "next";
import { Instrument_Serif, Albert_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const albertSans = Albert_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lunchd — New friends through lunch",
  description:
    "Lunchd helps adults make friends over lunch. One hour. One stranger. One table. Starting in London.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${albertSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
