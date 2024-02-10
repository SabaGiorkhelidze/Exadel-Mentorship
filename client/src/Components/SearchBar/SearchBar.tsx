import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const SearchBar = () => {
  return (
    <div className="   ">
      <div className="w-full flex flex-row items-center border-2 border-black rounded-[4px]">
        <input
          type="text"
          placeholder="search"
          className=" text-sm  w-full   py-1 px-2 focus:outline-none "
        />
        <span className="  flex items-center cursor-pointer">
          {/* <button> */}
          <AiOutlineSearch className="text-xl" />
          {/* </button> */}
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
