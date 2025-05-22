import { ReactNode } from "react";

type Wrapper = ({ children }: { children: ReactNode }) => ReactNode;

export const ChartWrapper: Wrapper = ({ children }) => (
  <div className="bg-gray-50 border-[1px] border-gray-300 p-4 pt-6 pl-0">
    {children}
  </div>
);

export const TextWrapper: Wrapper = ({ children }) => (
  <div className="max-w-prose flex flex-col gap-2 text-balance">{children}</div>
);

export const first = <A, B>(pair: [A, B]) => pair[0];
export const second = <A, B>(pair: [A, B]) => pair[1];
