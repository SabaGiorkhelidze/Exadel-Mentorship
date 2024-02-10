import SearchBar from "../SearchBar/SearchBar";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="w-full  py-1 border-b-2 border-gray-300">
      {/* wrapper */}
      <div className=" flex justify-around items-center flex-row py-3 px-4">
        {/* header - logo */}
        <div>
          <h1 className="font-bold text-xl">Exclusive</h1>
        </div>
        {/* links - routing */}
        <div className="flex flex-row justify-between px-2 items-center ">
          <div className="mx-4 font-semibold text-lg underline">
            <h1 className="">Home</h1>
          </div>
          <div className="mx-4 font-semibold text-lg">
            <h1>Contact</h1>
          </div>
          <div className="mx-4 font-semibold text-lg">
            <h1>About</h1>
          </div>
          <div className="mx-4 font-semibold text-lg">
            <h1>Sign Up</h1>
          </div>
        </div>
        {/* search */}
        {/* icons */}
        <div className="flex flex-row justify-between items-center">
          <div className="mr-[24px]">
            <SearchBar />
          </div>
          <div className="flex flex-row items-center">
            <AiOutlineHeart className="text-2xl mr-[16px]"/>
            <AiOutlineShoppingCart className='text-2xl'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
