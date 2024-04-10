"use client";

import React from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/src/lib/store/hooks";
import { setCurrentStep } from "@/src/lib/store/features/register/registerFormSlice";
import { PAGE_ROUTES } from "@/src/lib/constants/routes";
import { CheckIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';


function NavButton() {
  const currentStep = useAppSelector((state) => state.register.currentStep);
  const dispatch = useAppDispatch();
  const handlePrevious = () => {
    dispatch(setCurrentStep(currentStep - 1));
  };
  return (
    <div className="mt-5">
      <div className="flex justify-between">
        {currentStep != 1 && (
          <button
            className='flex btn w-1/3 mr-2 bg-basebg text-navy border-navy font-BaiJamjuree btn-sm sm:btn-sm md:btn-md lg:btn-lg hover:bg-gray "
    >'
            type="button"
            onClick={() => handlePrevious()}
          >
            <ChevronLeftIcon className="w-6 h-6" />
            ก่อนหน้า
          </button>
        )}
        <button
          className='flex btn w-1/3 font-BaiJamjuree bg-navy text-basebg btn-sm sm:btn-sm md:btn-md lg:btn-lg hover:bg-blue-800 "
    >'
          type="submit"
        >
          <span>{currentStep === 3 ? "ยืนยัน" : "ถัดไป"}</span>
          {currentStep === 3 ? (
            <CheckIcon className="w-6 h-6" />
          ) : (
            <ChevronRightIcon className="w-6 h-6" />
          )}
        </button>
      </div>
      <p className="text-base text-grey mt-2">
        มีบัญชีแล้ว?{" "}
        <Link href={PAGE_ROUTES.LOGIN} className="text-base text-navy hover:text-blue-800">
          เข้าสู่ระบบ
        </Link>
      </p>
    </div>
  );
}

export default NavButton;
