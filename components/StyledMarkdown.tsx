import Markdoc, { Config } from "@markdoc/markdoc";
import React, { Fragment, ReactNode } from "react";

/** Render Markdown source as React nodes with our custom styles */
export const StyledMarkdown = ({ source }: { source: string }) => {
  const ast = Markdoc.parse(source);
  const content = Markdoc.transform(ast, config);
  return Markdoc.renderers.react(content, React, {
    components: { Para, List, Item, Heading },
  });
};

const config: Config = {
  nodes: {
    paragraph: { render: "Para" },
    list: { render: "List" },
    item: { render: "Item" },
    em: { render: "em" },
    strong: { render: "em" },
    heading: {
      children: ["inline"],
      render: "Heading",
      attributes: {
        level: { type: Number, required: true, default: 1 },
      },
    },
  },
};

const Heading = ({
  children,
  level,
}: {
  children: ReactNode;
  level: number;
}) => (
  <Fragment>
    {level === 1 && <h1 className="typo-head1 mt-4 mb-2">{children}</h1>}
    {level === 2 && <h2 className="typo-head2 mt-4 mb-2">{children}</h2>}
    {level === 3 && <h3 className="typo-head3 mt-4 mb-2">{children}</h3>}
  </Fragment>
);

type C = ({ children }: { children: ReactNode }) => ReactNode;

const Para: C = ({ children }) => <p className="mb-2">{children}</p>;
const Item: C = ({ children }) => (
  <li className="ml-6 text-balance">{children}</li>
);
const List: C = ({ children }) => (
  <ul className="list-disc list-outside">{children}</ul>
);
