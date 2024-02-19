import React from "react";
interface LoginHeaderPropTypes {
  title: string;
  subtitle: string;
}

const LoginHeader = ({ title, subtitle }: LoginHeaderPropTypes) => {
  return (
    <div className="w-full ">
      <h1 className="font-semibold text-4xl mb-4">{title}</h1>
      <h6 className=" font-normal text-lg">{subtitle}</h6>
    </div>
  );
};

export default LoginHeader;
