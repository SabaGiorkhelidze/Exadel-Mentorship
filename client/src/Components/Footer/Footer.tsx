import React from "react";
import Playstore from "../../assets/playstore.png";
import Appstore from "../../assets/download-appstore.png";
import QRcode from "../../assets/Qrcode 1.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-end mt-16 pt-12 pb-6 bg-black">
      <div className="flex gap-5 justify-between items-start self-center px-5 mt-8 w-full max-w-[1170px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col flex-1 py-0.5 text-base leading-6 text-neutral-50">
          <div className="text-2xl font-bold tracking-wider leading-6 max-md:mr-1">
            Exclusive
          </div>
          <div className="mt-7 text-xl font-medium leading-7">Subscribe</div>
          <div className="mt-6 whitespace-nowrap">
            Get 10% off your first order
          </div>
          <div className="flex gap-5 justify-between px-4 py-3 mt-4 rounded border-solid border-[1.5px] border-[color:var(--Text,#FAFAFA)]">
            <div className="flex-auto">Enter your email</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d484ebf327e7f5f26c1b64221034aac01d7d563177d370a8bd83d7971ad4f72c?"
              className="w-6 aspect-square"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 text-base leading-6 text-neutral-50">
          <div className="text-xl font-medium leading-7">Support</div>
          <div className="mt-6 leading-6">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </div>
          <div className="mt-4">exclusive@gmail.com</div>
          <div className="mt-4">+88015-88888-9999</div>
        </div>
        <div className="flex flex-col flex-1 self-stretch text-base leading-6 whitespace-nowrap text-neutral-50">
          <div className="text-xl font-medium leading-7">Account</div>
          <div className="mt-6">My Account</div>
          <div className="mt-4">Login / Register</div>
          <div className="mt-4">Cart</div>
          <div className="mt-4">Wishlist</div>
          <div className="mt-4">Shop</div>
        </div>
        <div className="flex flex-col text-base leading-6 whitespace-nowrap basis-0 text-neutral-50">
          <div className="text-xl font-medium leading-7">Quick Link</div>
          <div className="mt-6">Privacy Policy</div>
          <div className="mt-4">Terms Of Use</div>
          <div className="mt-4">FAQ</div>
          <div className="mt-4">Contact</div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-xl font-medium leading-7 text-neutral-50">
            Download App
          </div>
          <div className="mt-6 text-xs font-medium leading-5 whitespace-nowrap text-neutral-50">
            Save $3 with App New User Only
          </div>
          <div className="flex gap-2 justify-between mt-2">
            <img
              loading="lazy"
              src={QRcode}
              className="my-auto w-20 aspect-square"
            />
            <div className="flex flex-col flex-1 items-center">
              <img
                loading="lazy"
                src={Appstore}
                className="aspect-[2.78] w-[110px]"
              />
              <img
                loading="lazy"
                src={Playstore}
                className="mt-1 aspect-[2.78] w-[110px]"
              />
            </div>
          </div>
          <div className="flex gap-5 justify-between pr-8 mt-6 max-md:pr-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/30ef1881c8ba382ad841b10dec22c4728e1ac56594cd8fd1b8fc54e4c0c91052?"
              className="w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a721ae6c30e94e4b857d8e59a3b4f46deae1fd17f8f5afdd6aa997ce595ef65?"
              className="w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0b67f52bb53b8c3b436cfc50867157e647c1cc5fa6f7cc373ba309b35f3d286?"
              className="w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/017f03fd6271e23e94e189db8506f53ec67e53623ecac07e20b0cc0e64aa481c?"
              className="w-6 aspect-square"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-16 pt-4 mt-16 w-full text-base leading-6 text-white whitespace-nowrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-1.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6b79712dbe7a2d336b37d7ebf70c7273efd1e0b2c367db9dc475f03fce05596?"
            className="my-auto w-5 aspect-square"
          />
          <div className="grow">Copyright Rimel 2022. All right reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
