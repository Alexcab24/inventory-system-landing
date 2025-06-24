import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InventorySystem Project",
  description: "Open multi-tenant inventory management platform. Project presentation, architecture, and registration flow.",
  openGraph: {
    title: "InventorySystem Project",
    description: "Open multi-tenant inventory management platform. Project presentation, architecture, and registration flow.",
    url: "https://inventorysystem.example.com/",
    siteName: "InventorySystem Project",
    images: [
      {
        url: "/favicon.svg",
        width: 64,
        height: 64,
        alt: "InventorySystem Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "InventorySystem Project",
    description: "Open multi-tenant inventory management platform. Project presentation, architecture, and registration flow.",
    images: ["/favicon.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
