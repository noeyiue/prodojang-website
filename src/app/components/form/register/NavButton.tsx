"use client";

import React from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/src/lib/hooks";
import { setCurrentStep } from "@/src/lib/features/register/registerFormSlice";

function NavButton() {
  const currentStep = useAppSelector((state) => state.register.currentStep);
  const dispatch = useAppDispatch();
  const handlePrevious = () => {
    dispatch(setCurrentStep(currentStep-1));
  }
  return (
    <div className="mt-5">
      <div className="flex">
        <button
          className='btn font-BaiJamjuree btn-sm sm:btn-sm md:btn-md lg:btn-lg hover:bg-blue-800 bg-navy text-basebg w-1/2 my-2.5"
    >'
          type="button"
          onClick={() => handlePrevious()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          ก่อนหน้า
        </button>
        <button
          className='btn font-BaiJamjuree btn-sm sm:btn-sm md:btn-md lg:btn-lg hover:bg-blue-800 bg-navy text-basebg w-1/2 my-2.5"
    >'
          type="submit"
        >
          ถัดไป
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <p className="text-base text-grey mt-2">
        มีบัญชีแล้ว?{" "}
        <Link href="/login" className="text-base text-navy hover:text-blue-800">
          เข้าสู่ระบบ
        </Link>
      </p>
    </div>
  );
}

export default NavButton;
