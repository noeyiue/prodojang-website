"use client";

import React from "react";
import { RegisterInputs } from "../../formtypes";
import { useForm } from "react-hook-form";

import NavButton from "../NavButton";
import { useAppDispatch, useAppSelector } from "@/src/lib/store/hooks";
import { setCurrentStep, updateRegisterFormData } from "@/src/lib/store/features/register/registerFormSlice";
import InputField from "../../../inputs/InputField";

const StepOneForm = () => {
  const currentStep = useAppSelector((state) => state.register.currentStep);
  const formData = useAppSelector((state) => state.register.registerFormData);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterInputs>({
    defaultValues: {
      ...formData
    }
  });

  async function processData(data: RegisterInputs) {
    console.log(data);
    dispatch(setCurrentStep(currentStep + 1));
    dispatch(updateRegisterFormData(data));
  }
  return (
    <div>
      <form onSubmit={handleSubmit(processData)}>
        <InputField
          id="username"
          textlabel="ชื่อผู้ใช้"
          type="text"
          isRequired={true}
          register={register}
          errors={errors}
        />
        <InputField
          id="password"
          textlabel="รหัสผ่าน"
          type="password"
          isRequired={true}
          register={register}
          errors={errors}
        />
        <InputField
          id="cpassword"
          textlabel="ยืนยันรหัสผ่าน"
          type="password"
          isRequired={true}
          register={register}
          errors={errors}
        />
        <NavButton />
      </form>
    </div>
  );
};

export default StepOneForm;
