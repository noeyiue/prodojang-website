"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { HomeIcon } from '@heroicons/react/24/outline';

const HomeButton = () => {

  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/")
  }

  return (
    <button
      className="btn btn-outline w-32 h-12 text-base hover:bg-slate-200 hover:text-black mx-2.5 my-2.5"
      onClick={handleHomeClick}
    >
      <HomeIcon className="w-7 h-7" />
      Home
    </button>
  );
};

export default HomeButton;
