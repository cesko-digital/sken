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
      <body>
        <div className="max-w-[1024px] m-auto p-4 mt-10">
          <div className={customFont.variable}>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

const Footer = () => (
  <footer className="border-t-2 mt-20 pt-3 pb-10">
    <p>
      Sken digitální vyspělosti provozuje{" "}
      <a href="https://www.cesko.digital" className="typo-link">
        Česko.Digital
      </a>
    </p>
    <p>
      Zdrojový kód najdete{" "}
      <a href="https://github.com/cesko-digital/sken" className="typo-link">
        na GitHubu
      </a>
    </p>
    <p>
      Ilustrační foto{" "}
      <a
        href="https://www.freepik.com/free-photo/3d-flowing-cyber-particles-with-shallow-depth-field_9760752.htm"
        className="typo-link"
        rel="noreferrer"
      >
        kjpargeter
      </a>
    </p>
  </footer>
);
