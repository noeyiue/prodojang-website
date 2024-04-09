import React from "react";
import LoginButton from "../../components/buttons/MainButton";
import HomeButton from "../../components/buttons/HomeButton";
import LanguageButton from "../../components/buttons/LanguageButton";
import LoginForm from "../../components/form/login/LoginForm";

const login = () => {
  return (
    <div className="flex h-screen flex-row bg-grey">
      <div className="basis-3/4 bg-basebg rounded-r-3xl flex flex-col">
        <div className="flex justify-start">
          <HomeButton />
          <LanguageButton />
        </div>
        <div className="grow flex items-center justify-center">
          <div className="w-7/12 h-1/2">
            <p className="text-lg font-bold text-navy p-2 m-2 text-right">
              ยินดีต้อนรับ
            </p>
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="basis-1/4">
        <div className="text-4xl font-Outfit font-bold text-right mx-5 my-5">
          PRODOJANG
        </div>
      </div>
    </div>
  );
};

export default login;
