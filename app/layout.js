import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Providers from "./providers";

export const metadata = {
  title: {
    template: "%s | Habesha Kitchen",
    default: " Habesha Kitchen",
  },
  description: "Traditional Ethiopian dishes: tibs, kitfo, doro wat, shiro and more.",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>
          <Header />
          <div className="page">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
