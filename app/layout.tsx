import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const customFont = localFont({
  variable: "--font-cd",
  src: [
    { path: "../public/regular.woff2", weight: "400", style: "normal" },
    { path: "../public/semibold.woff2", weight: "600", style: "semibold" },
  ],
});

export const metadata: Metadata = {
  title: "Sken digitální vyspělosti",
  description: "TBD: Stručný popisek",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        <title>Sken digitální vyspělosti</title>
        <script
          defer
          data-domain="sken.nezisk.digital"
          src="https://plausible.io/js/script.outbound-links.js"
        ></script>
      </head>
      <body>
        <main className={customFont.variable}>{children}</main>
        <footer>
          <p>
            Sken digitální vyspělosti provozuje{" "}
            <a href="https://www.cesko.digital">Česko.Digital</a>.
          </p>
          <p>
            Zdrojový kód najdete{" "}
            <a href="https://github.com/cesko-digital/sken">na GitHubu</a>.
          </p>
        </footer>
      </body>
    </html>
  );
}
