import React from 'react'
import { RegisterInputs } from '../formtypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputFieldRegis from './InputFieldRegis';

const StepTwoForm = () => {
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
        <InputFieldRegis id="gym_name" textlabel="ชื่อยิม" type="text" register={register}/>
        <InputFieldRegis id="gym_address_1" textlabel="ที่อยู่ - บรรทัด 1" type="text" register={register}/>
        <InputFieldRegis id="gym_address_2" textlabel="ที่อยู่ - บรรทัด 2" type="text" register={register}/>
      </form>
    </div>
  )
}

export default StepTwoForm