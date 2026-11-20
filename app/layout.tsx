import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Grain } from "@/components/ui/Grain";

// Variable weight (100–900) plus the width axis (62–125%) for wide labels.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mr. Lee · Matthew Ray Lee",
  description:
    "Matthew Ray Lee helps businesses modernize how they run: supply chains, data, and the systems behind them.",
  icons: {
    icon: [
      { url: "/MattLogo_Black.png", sizes: "any" },
      { url: "/MattLogo_Black.png", type: "image/png", sizes: "32x32" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        {/* Night ("dark") is the default for every visitor; no system theme. */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Grain />
        <Analytics />
      </body>
    </html>
  );
}
