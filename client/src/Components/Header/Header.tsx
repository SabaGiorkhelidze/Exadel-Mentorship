import React from "react";

interface HeaderPropTypes {
  title: string;
  subTitle: string;
}

const Header = ({ title, subTitle }: HeaderPropTypes) => {
  return (
    <div className="">
      <div className="flex flex-row">
        <div className="w-4 h-8 bg-red-500 rounded-sm mr-4"></div>
      <h1 className="text-xl font-semibold text-red-500">{subTitle}</h1>
      </div>
      <div className="mt-2">
        <h1 className="text-3xl font-bold ">{title}</h1>
      </div>
    </div>
  );
};

export default Header;
