import React from "react";

interface LoginInputPropTypes {
  placeholder: string;
  type: string
}

const LoginInputs = ({ placeholder, type }: LoginInputPropTypes) => {
  return (
    <div className="">
      <input
        type={type}
        className=" border-b-2 border-gray-300 focus:outline-none pb-1 text-lg w-full"
        placeholder={placeholder}
      />
    </div>
  );
};

export default LoginInputs;
