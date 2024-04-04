import React from 'react'
import InputField from "../login/InputFieldLogin";
import Link from "next/link";
import MainButton from "../../buttons/MainButton";
import { RegisterInputs } from '../formtypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputFieldRegis from './InputFieldRegis';

const StepOneForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<RegisterInputs>();
    
      const onSubmit: SubmitHandler<RegisterInputs> = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputFieldRegis id="username" textlabel="ชื่อผู้ใช้" type="text" register={register}/>
        <InputFieldRegis id="password" textlabel="รหัสผ่าน" type="text" register={register}/>
        <InputFieldRegis id="cpassword" textlabel="ยืนยันรหัสผ่าน" type="text" register={register}/>
        <MainButton type="submit" buttonText="ถัดไป"/>
        <p className="text-base text-grey">มีบัญชีเรียบร้อย? <Link href="/login" className="text-base text-navy hover:text-blue-800">เข้าสู่ระบบ</Link></p>
      </form>
    </div>
  )
}

export default StepOneForm