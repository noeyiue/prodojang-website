import React from "react";
import HomeButton from "../components/buttons/HomeButton";
import LanguageButton from "../components/buttons/LanguageButton";
import RegisterForm from "../components/form/register/RegisterForm";

const Register = () => {
  return (
    <div className="flex h-screen flex-row bg-grey">
      <div className="basis-1/4">
        <div className="text-4xl font-Outfit font-bold text-left mx-5 my-5">
          PRODOJANG
        </div>
      </div>
      <div className="basis-3/4 bg-basebg rounded-l-3xl flex flex-col">
        <div className="flex justify-end">
          <HomeButton />
          <LanguageButton />
        </div>
        <div className="grow flex items-center justify-center">
          <div className="w-3/4 h-3/4">
            <p className="text-lg font-bold text-navy p-2 m-2 text-left">
              สร้างบัญชีของคุณ
            </p>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
