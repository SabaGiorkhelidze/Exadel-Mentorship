import Image from "../assets/Side Image.png";
import InputLayout from "../Layouts/LoginPageLayouts/InputLayout";

const LoginPage = () => {
  return (
    <div className="flex flex-row  ">
      <div className=" w-1/2 h-auto ">
        <img src={Image} alt="" className="h-[88%] w-full" />
      </div>
      <div className=" w-1/2 px-32 flex items-start pt-16">
        <InputLayout />
      </div>
    </div>
  );
};

export default LoginPage;
