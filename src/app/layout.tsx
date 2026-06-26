import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ReactQueryProvider } from "@/components/query-provider";
import { Toaster } from "react-hot-toast";
import MomentumScrollProvider from "@/components/ui/MomentumScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://malvis-portfolio.vercel.app"),
  title: {
    default: "Chisom Malvis | Frontend Developer",
    template: "%s | Chisom Malvis",
  },
  description:
    "Frontend Developer specializing in modern web experiences with Next.js, React, and Tailwind CSS.",
  keywords: ["frontend developer", "next.js", "react", "web developer", "portfolio"],
  openGraph: {
    title: "Chisom Malvis | Frontend Developer",
    description: "Maximize Your Business Potential with Custom Web Development Solutions",
    url: "https://malvis-portfolio.vercel.app",
    siteName: "Chisom Malvis Portfolio",
    images: [{ url: "/home/Developer2.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chisom Malvis | Frontend Developer",
    description: "Frontend Developer",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// themeColor belongs in viewport, not metadata, per Next.js 13+ types
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialTheme = "dark";
  const initialThemeStyle = { colorScheme: "dark" };

  return (
    <html lang="en" className={initialTheme} style={initialThemeStyle}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <MomentumScrollProvider>
              <div id="smooth-wrapper">
                <div id="smooth-content">{children}</div>
                <Toaster position="top-right" />
              </div>
            </MomentumScrollProvider>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
