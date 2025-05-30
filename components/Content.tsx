import { ReactNode } from "react";

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

/** Basic styled Markdown components such as paragraphs or links */
export const ContentTags = { Para, List, Item, Link, Heading2, Em, Strong };
