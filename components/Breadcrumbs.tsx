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
    <div className="mt-6 flex flex-row max-sm:flex-col max-sm:text-sm">
      {rootedPath.map(({ label, path }) => (
        <div key={label}>
          <Link href={path} className="typo-link">
            {label}
          </Link>
          <span className="inline-block px-2">/</span>
        </div>
      ))}
      <span>{currentPage}</span>
    </div>
  );
};
