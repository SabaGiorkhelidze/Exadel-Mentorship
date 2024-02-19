import Button from "../../Components/Buttons/Button";
import LoginInputs from "../../Components/Inputs/LoginInputs";
import LoginHeader from "../../Components/LoginHeader/LoginHeader";
const InputLayout = () => {
  return (
    <div className="flex flex-col gap-10  w-full py-4">
      <LoginHeader
        title="Log In to Exclusive"
        subtitle="enter your details below"
      />

      <div className="flex gap-10 flex-col">
        <LoginInputs placeholder="Email or Phone Number" type="text" />
        <LoginInputs placeholder="Password" type="password" />
      </div>

      <div className="flex flex-row w-full  justify-around items-center">
        <Button text="Log in" />
        <h1 className="font-semibold text-red-500">Forgot Password?</h1>
      </div>
    </div>
  );
};

export default InputLayout;
