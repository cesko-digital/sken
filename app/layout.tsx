import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <head>
        <title>Sken digitální vyspělosti</title>
        <script
          defer
          data-domain="sken.nezisk.digital"
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body>
        <main>{children}</main>
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
