import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Mr. Lee | Portfolio",
  description: "Portfolio website for Matthew Lee",
  icons: {
    icon: [
      { url: "/MattLogo_Black.png", sizes: "any" }, // Default favicon.ico
      { url: "/MattLogo_Black.png", type: "image/png", sizes: "32x32" }, // Optional additional sizes
    ],
    // apple: { url: "/apple-icon.png", sizes: "180x180" }, // For Apple devices (optional)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
