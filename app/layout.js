import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Vigyapun | Modern Marketing Solutions",
    template: "%s | Vigyapun",
  },
  description:
    "Vigyapun is a modern marketing studio helping brands grow with strategy, design, and digital campaigns.",
  metadataBase: new URL("https://vigyapun.com"),
  openGraph: {
    title: "Vigyapun | Modern Marketing Solutions",
    description:
      "Strategic branding, design, and digital marketing to help your business stand out.",
    url: "https://example.com",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="flex min-h-screen flex-col">
          <header>
            <Navbar />
          </header>
          <main className="flex-1">{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
