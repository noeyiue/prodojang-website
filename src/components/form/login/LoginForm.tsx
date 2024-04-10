"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import MainButton from "../../buttons/MainButton";
import { LoginInputs } from "../formtypes";
import InputField from "../../inputs/InputField";
import Link from "next/link";
import { PAGE_ROUTES } from "@/src/lib/constants/routes";

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
        <MainButton type="submit" buttonText="เข้าสู่ระบบ" />
        <div className="flex flex-row">
          <div className="flex items-center mb-4 basis-1/2">
            <p className="text-base text-grey">
            ยังไม่มีบัญชี?{" "}
            <Link
              href={PAGE_ROUTES.REGISTER}
              className="text-base text-navy hover:text-blue-800"
            >
              ลงทะเบียนบัญชีใหม่
            </Link>
          </p>
          </div>
          <div className="flex basis-1/2">
            <Link
              href={PAGE_ROUTES.FORGOT_PASSWORD}
              className="text-base text-navy ml-auto hover:text-blue-800"
            >
              ลืมรหัสผ่าน?
            </Link>
          </div>
        </div>
        
      </form>
    </div>
  );
};

export default LoginForm;
