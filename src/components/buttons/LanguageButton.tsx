import React from "react";
import { ChevronDownIcon, LanguageIcon } from '@heroicons/react/24/outline';

const LanguageButton = () => {
  return (
    <button className="btn btn-outline w-24 h-12 text-base hover:bg-slate-200 hover:text-black mx-2.5 my-2.5">     
      <LanguageIcon className="w-7 h-7"/>
      <ChevronDownIcon className="w-6 h-6" />
    </button>
  );
};

export default LanguageButton;
