import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";

import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "T3 Stack with Better-Auth | xeesol.net",
  description: "A T3 Stack boilerplate with Better-Auth integration, featuring Next.js, TypeScript, Tailwind CSS, tRPC, and Prisma for full-stack type-safety",
  metadataBase: new URL("https://t3.xeesol.net"),
  authors: [{ name: "xeesol.net" }],
  openGraph: {
    type: "website",
    url: "https://t3.xeesol.net",
    title: "T3 Stack with Better-Auth | xeesol",
    description: "A T3 Stack boilerplate with Better-Auth integration, featuring Next.js, TypeScript, Tailwind CSS, tRPC, and Prisma for full-stack type-safety",
    siteName: "T3 Stack with Better-Auth",
  },
  twitter: {
    card: "summary_large_image",
    title: "T3 Stack with Better-Auth | xeesol",
    description: "A T3 Stack boilerplate with Better-Auth integration, featuring Next.js, TypeScript, Tailwind CSS, tRPC, and Prisma for full-stack type-safety",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  alternates: {
    canonical: "https://t3.xeesol.net",
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} dark`} suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "T3 Stack with Better-Auth",
              description: "A T3 Stack boilerplate with Better-Auth integration",
              url: "https://t3.xeesol.net",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://t3.xeesol.net/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            })
          }}
        />
      </head>
      <body cz-shortcut-listen="true">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
