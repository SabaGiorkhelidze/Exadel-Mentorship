import React from "react";

const Navbar = () => {
  return (
    <div className="w-full border-2 border-black">
      {/* wrapper */}
      <div className="border-2 border-red-500 flex justify-around items-center flex-row py-3 px-4">
        {/* header - logo */}
        <div>
          <h1 className="font-bold text-xl">Exclusive</h1>
        </div>
        {/* links - routing */}
        <div className="flex flex-row justify-between px-2 items-center border-2 border-yellow-300">
          <div className="mx-4"><h1>links</h1></div>
          <div className="mx-4"><h1>links</h1></div>
          <div className="mx-4"><h1>links</h1></div>
          <div className="mx-4"><h1>links</h1></div>


        </div>
        {/* search */}
        {/* <div><h1>Search</h1></div> */}
        {/* icons */}
        <div className="flex flex-row">
          <h1 className="mx-2">Search</h1>
          <h1>icons</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
