"use client";
import React from "react";
import { useForm } from "react-hook-form";
import MainButton from "../../buttons/MainButton";
import { LoginInputs, RegisterInputs } from "../formtypes";
import InputField from "../../inputs/InputField";
import Link from "next/link";
import { PAGE_ROUTES } from "@/src/lib/constants/routes";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>();
  const router = useRouter();


  async function onSubmit(data: LoginInputs) {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    const resJson = await response.json();
    if (resJson.success) {
      toast.success(resJson.message);
      router.push('/member/dashboard');
    } else {
      toast.error(resJson.message);
    }
  }

  return (
    <div className="w-full h-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          id="username"
          textlabel="ชื่อผู้ใช้"
          type="text"
          required={true}
          errors={errors}
          register={register}
        />
        <InputField
          id="password"
          textlabel="รหัสผ่าน"
          type="password"
          required={true}
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
