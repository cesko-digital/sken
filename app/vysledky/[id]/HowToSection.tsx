import Markdoc, { renderers } from "@markdoc/markdoc";
import { promises as fs } from "fs";
import path from "path";
import React, { ReactNode } from "react";

export async function HowtoSection() {
  const source = await fs.readFile(
    path.join(process.cwd(), "/app/vysledky/[id]/howto.md"),
    "utf-8"
  );
  const ast = Markdoc.parse(source);
  const content = Markdoc.transform(ast, {
    nodes: {
      paragraph: { render: "Para" },
      list: { render: "List" },
      item: { render: "Item" },
      em: { render: "Em" },
      strong: { render: "Strong" },
      heading: { render: "Heading2" },
      link: {
        render: "Link",
        attributes: {
          href: {
            type: "String",
            required: true,
          },
        },
      },
    },
  });

  return (
    <div className="max-w-prose">
      {renderers.react(content, React, {
        components: {
          Para,
          List,
          Item,
          Link,
          Heading2,
          Em,
          Strong,
        },
      })}
    </div>
  );
}

//
// Content Components
//

type C = ({ children }: { children: ReactNode }) => ReactNode;

const Para: C = ({ children }) => <p className="mb-2">{children}</p>;

const List: C = ({ children }) => (
  <ul className="list-disc list-outside">{children}</ul>
);

const Item: C = ({ children }) => <li className="ml-6">{children}</li>;

const Heading2: C = ({ children }) => (
  <h2 className="typo-title2 mt-4 mb-2">{children}</h2>
);

const Em: C = ({ children }) => (
  <em style={{ fontStyle: "italic" }}>{children}</em>
);

const Strong: C = ({ children }) => (
  <strong className="font-normal typo-emphasis">{children}</strong>
);

const Link = ({ children, href }: { children: ReactNode; href: string }) => (
  <a href={href} className="typo-link">
    {children}
  </a>
);
