import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";

export const metadata: Metadata = {
  title: "Ягодка — свежие ягоды с Камчатки",
  description: "Интернет-магазин свежих ягод, собранных на Камчатке.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#FF8C00",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FF8C00" />
      </head>
      <body>
        <CartProvider>
          <div className="relative mx-auto flex min-h-screen max-w-app flex-col bg-white shadow-sm">
            <Header />
            <main className="flex-1 pb-24">{children}</main>
            <TabBar />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
