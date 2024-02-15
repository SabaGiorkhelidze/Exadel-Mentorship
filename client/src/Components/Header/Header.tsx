import React from "react";

interface HeaderPropTypes {
  title: string;
}

const Header = ({ title }: HeaderPropTypes) => {
  return <div><h1 className="text-xl font-semibold">{title}</h1></div>;
};

export default Header;
