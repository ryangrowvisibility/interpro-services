import type { Metadata } from "next";
import { Bitter, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Interpro Services | Interlocking & Landscaping in Pickering, Ajax & the GTA",
  description:
    "Family-owned interlocking and landscaping company with 10+ years of experience. Interlock patios, walkways, steps, retaining walls, artificial turf, pergolas, decks and fences across Toronto, Durham and the GTA. 5.0 stars from 18 Google reviews. Call (647) 561-9743.",
  openGraph: {
    title: "Interpro Services | Interlocking & Landscaping in the GTA",
    description:
      "Interlock patios, walkways, turf, pergolas and decks across Pickering, Ajax, Durham and Toronto. Finished when we say. Call (647) 561-9743.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-CA" className={`${bitter.variable} ${hanken.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
