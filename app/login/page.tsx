import React from "react";
import LoginButton from "../components/buttons/LoginButton";
import HomeButton from "../components/buttons/HomeButton";
import LanguageButton from "../components/buttons/LanguageButton";
import LoginForm from "../components/form/LoginForm";

const login = () => {
  return (
    <div className="flex h-screen flex-row bg-grey">
      <div className="basis-3/4 bg-white rounded-r-3xl">
        <div>
          <HomeButton />
          <LanguageButton />
        </div>
        <div>
          <p className="text-lg font-bold text-navy p-2 m-2">ยินดีต้อนรับ</p>
          <LoginForm />
          <LoginButton />
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
