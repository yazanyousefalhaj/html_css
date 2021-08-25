import React from "react";

interface Props {
  href: string
  text: string
}

export const NavLink: React.FC<Props> = ({ href, text }) => {
  return <a href={href}>{text}</a>;
};
