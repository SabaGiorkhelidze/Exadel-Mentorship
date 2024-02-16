import React from "react";

interface HeaderPropTypes {
  title: string;
  subTitle: string;
}

const Header = ({ title, subTitle }: HeaderPropTypes) => {
  return (
    <div className="border-2 border-black">
      <div className="flex flex-row">
        <div className="w-4 h-8 bg-red-500 rounded-sm mr-4"></div>
      <h1 className="text-xl font-semibold text-red-500">{subTitle}</h1>
      </div>
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
    </div>
  );
};

export default Header;
