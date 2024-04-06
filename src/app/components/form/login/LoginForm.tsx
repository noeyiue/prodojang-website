"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import MainButton from "../../buttons/MainButton";
import { LoginInputs } from "../formtypes";
import InputField from "../InputField";
import Link from "next/link";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => console.log(data);

  return (
    <div className="w-full h-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          id="username"
          textlabel="ชื่อผู้ใช้"
          type="text"
          isRequired={true}
          errors={errors}
          register={register}
        />
        <InputField
          id="password"
          textlabel="รหัสผ่าน"
          type="password"
          isRequired={true}
          errors={errors}
          register={register}
        />
        <div className="flex flex-row">
          <div className="flex items-center mb-4 basis-1/2">
            {/* <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-navy bg-gray-100 border-gray-300 rounded focus:text-navy dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ms-2 text-base font-medium text-grey dark:text-gray-300">จำฉันไว้ในระบบ</label> */}
          </div>
          <div className="flex basis-1/2">
            <Link
              href="/forgot-password"
              className="text-base text-grey ml-auto hover:text-blue-800"
            >
              ลืมรหัสผ่าน?
            </Link>
          </div>
        </div>
        <MainButton type="submit" buttonText="เข้าสู่ระบบ" />
        <p className="text-base text-grey">
          ยังไม่มีบัญชี?{" "}
          <Link
            href="/register"
            className="text-base text-navy hover:text-blue-800"
          >
            ลงทะเบียนบัญชีใหม่
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
