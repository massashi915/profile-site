import type { Metadata } from "next";
import { Noto_Sans_JP, IBM_Plex_Mono, Cormorant } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "KISHINO MASASHI | フリーランスエンジニア / 業務自動化・AI活用支援",
  description:
    "事業の現場を知るエンジニアが、業務の詰まりを仕組みで解きます。LINE Bot・業務自動化・AI活用ツールの設計・開発・導入支援。",
  openGraph: {
    title: "KISHINO MASASHI | 業務自動化・AI活用支援",
    description:
      "事業の現場を知るエンジニアが、業務の詰まりを仕組みで解きます。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${ibmPlexMono.variable} ${cormorant.variable} antialiased`}
        style={{ fontFamily: "var(--jp)" }}
      >
        {children}
      </body>
    </html>
  );
}
