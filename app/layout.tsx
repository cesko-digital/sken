import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const customFont = localFont({
  src: [
    { path: "../public/regular.woff2", weight: "400", style: "normal" },
    { path: "../public/semibold.woff2", weight: "600", style: "semibold" },
  ],
  variable: "--font-cd",
});

export const metadata: Metadata = {
  title: "Sken digitální vyspělosti",
  description:
    "Zjistěte, v jakých oblastech lze významně zlepšit fungování organizace pomocí digitálních nástrojů",
  openGraph: {
    images: "https://assets.cesko.digital/9e28afa2.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <head>
        <script
          defer
          data-domain="sken.nezisk.digital"
          src="https://plausible.io/js/script.outbound-links.js"
        ></script>
      </head>
      <body className={customFont.variable}>
        <div className="flex flex-col min-h-screen gap-20">
          <div className="w-full max-w-5xl m-auto p-4 mt-10">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

const Footer = () => (
  <footer className="py-8 px-4 border-t border-gray-200 bg-gray-50 text-gray-500">
    <div className="max-w-5xl mx-auto">
      <p>
        Sken digitální vyspělosti provozuje{" "}
        <a href="https://www.cesko.digital" className="typo-link text-gray-500">
          Česko.Digital
        </a>
      </p>
      <p>
        Zdrojový kód najdete{" "}
        <a
          href="https://github.com/cesko-digital/sken"
          className="typo-link text-gray-500"
        >
          na GitHubu
        </a>
      </p>
      <p>
        Ilustrační foto{" "}
        <a
          href="https://www.freepik.com/free-photo/3d-flowing-cyber-particles-with-shallow-depth-field_9760752.htm"
          className="typo-link text-gray-500"
          rel="noreferrer"
        >
          kjpargeter
        </a>
      </p>
    </div>
  </footer>
);
