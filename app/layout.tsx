import { ReactNode } from "react";
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
    "Zjistěte, jak může vaše nezisková organizace zvyšovat svou digitální vyspělost – a být tak úspěšnější při naplňování svého poslání. Nic to nestojí.",
  openGraph: {
    images: "https://assets.cesko.digital/251e94ef.jpg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="cs">
    <head>
      <script
        defer
        data-domain="sken.nezisk.digital"
        src="https://plausible.io/js/script.outbound-links.js"
      ></script>
      <link rel="shortcut icon" type="image/png" href="/logo.png" />
    </head>
    <body className={customFont.variable}>
      <div className="min-h-dvh flex flex-col">
        <Header />
        {children}
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </body>
  </html>
);

const Header = () => (
  <header className="content-wrapper mb-5">
    <a
      className="block max-sm:mx-auto bg-it w-[200px] p-5 cursor-pointer"
      href="https://cesko.digital"
      target="_blank"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.svg" alt="Česko.Digital" width="100%" />
    </a>
  </header>
);

const Footer = () => (
  <footer className="w-full bg-light-gray text-[#080825] py-8 pb-20 mt-20">
    <div className="content-wrapper flex flex-col md:flex-row justify-between">
      <p>
        Sken digitální vyspělosti provozuje{" "}
        <a
          href="https://www.cesko.digital"
          className="typo-link text-gray-500"
          target="_blank"
        >
          Česko.Digital
        </a>
      </p>
      <div>
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
    </div>
  </footer>
);

export default RootLayout;
