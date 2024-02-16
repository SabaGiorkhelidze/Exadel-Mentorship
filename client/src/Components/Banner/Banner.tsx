import { AiFillApple } from "react-icons/ai";
import BannerImage from "../../assets/Iphone_frame.png";
const Banner = () => {
  return (
    <div
      className=" absolute text-white bg-black w-[700px] h-[300px] rounded-sm"
      style={{
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="">
        <div className="absolute top-12 left-8 flex flex-row items-center gap-x-4 ">
          <AiFillApple className=" text-white text-5xl " />
          <h1 className="text-xl">Iphone 14 Series</h1>
        </div>
        <h1 className="absolute bottom-20 left-10 text-4xl">
          Up to 10% <br />
          Off Vaucher
        </h1>
        <img
          src={BannerImage}
          alt=""
          className=" absolute w-60 h-[270px] right-0 bottom-0"
        />
      </div>
    </div>
  );
};

export default Banner;
