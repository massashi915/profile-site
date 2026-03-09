import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
      <body className={`${inter.variable} ${notoSansJP.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
