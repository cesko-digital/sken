import { Fragment } from "react";
import Link from "next/link";

export type Crumb = { label: string; path: string };

export type Props = {
  path?: Crumb[];
  currentPage: string;
};

export const Breadcrumbs = ({ path = [], currentPage }: Props) => {
  const rootedPath: Crumb[] = [
    { label: "Sken digitální vyspělosti", path: "/" },
    ...path,
  ];
  return (
    <div>
      {rootedPath.map(({ label, path }) => (
        <Fragment key={label}>
          <Link href={path} className="typo-link">
            {label}
          </Link>
          <span className="inline-block px-2">/</span>
        </Fragment>
      ))}
      <span>{currentPage}</span>
    </div>
  );
};
