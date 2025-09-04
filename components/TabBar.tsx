import { ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";

export type TabItemProps = {
  children: ReactNode;
  isActive?: boolean;
  href: string;
};

export const TabItem = ({ children, href, isActive = false }: TabItemProps) => (
  <Link
    href={href}
    className={clsx(
      "pb-[10px] -mb-[13px] px-2 cursor-pointer",
      !isActive && "hover:border-b-3 hover:border-gray-400",
      isActive && "border-b-3 border-it"
    )}
  >
    {children}
  </Link>
);

export const TabBar = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-row gap-8 border-b border-gray-300 mb-4 pb-3">
    {children}
  </div>
);
