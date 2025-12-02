import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Header from "@/components/Header";
import ThemeProvider from "@/components/ThemeProvider";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://eryze.io"),
  title: {
    default: "Eryze Studio - Innovation in Motion",
    template: "%s - Eryze Studio",
  },
  description:
    "Rise above the ordinary. Build what moves the world.",
  keywords: [
    "Eryze",
    "Anastasia Yakimovska",
    "portfolio",
    "engineering",
    "semiconductor",
    "design",
    "product management",
    "startup",
    "Southeast Europe",
    "innovation",
  ],
  authors: [{ name: "Eryze Studio" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Eryze Studio",
    title: "Eryze Studio - Innovation in Motion",
    description: "Rise above the ordinary. Build what moves the world.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eryze Studio - Innovation in Motion",
    description: "Rise above the ordinary. Build what moves the world.",
    creator: "@eryze",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="border-t border-border py-8 text-sm">
          <div className="mx-auto max-w-6xl px-6 grid gap-4 md:grid-cols-3 items-center">
            <div className="text-muted-foreground">© 2025 Eryze Studio - Built with clarity and motion.</div>
            <nav className="flex justify-center gap-6">
              <Link href="/#about" className="underline decoration-dashed [animation:underline_6s_linear_infinite]">About</Link>
              <Link href="/#services" className="underline decoration-dashed [animation:underline_6s_linear_infinite]">Studio</Link>
              <Link href="/labs" className="underline decoration-dashed [animation:underline_6s_linear_infinite]">Labs</Link>
              <Link href="/contact" className="underline decoration-dashed [animation:underline_6s_linear_infinite]">Contact</Link>
            </nav>
            <div className="flex justify-end gap-4 text-muted-foreground">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.behance.net/" target="_blank" rel="noreferrer">Behance</a>
            </div>
          </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
