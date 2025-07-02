import { ReactNode } from "react";
import Image from "next/image";

const Box = ({ children }: { children: ReactNode }) => (
  <div className="box">{children}</div>
);

const Button = ({ href, title }: { href: string; title: string }) => (
  <div className="button-wrapper">
    <a href={href} target="_blank" className="button">
      {title}
    </a>
  </div>
);

const ContentTags = {
  Box,
  Button,
  Image,
};

export default ContentTags;
