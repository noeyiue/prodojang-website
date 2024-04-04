import React from 'react'
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
      </form>
    </div>
  )
}

export default StepOneForm