"use client";

import React from "react";
import { RegisterInputs } from "../../formtypes";
import { useForm } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../../../../lib/store/hooks";
import {
  setCurrentStep,
  updateRegisterFormData,
} from "../../../../lib/store/features/register/registerFormSlice";
import InputField from "../../../inputs/InputField";
import NavButton from "../NavButton";

const StepOneForm = () => {
  const currentStep = useAppSelector((state) => state.register.currentStep);
  const formData = useAppSelector((state) => state.register.registerFormData);
  const dispatch = useAppDispatch();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    defaultValues: {
      ...formData,
    },
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
          required={true}
          minLength={{
            value: 3,
            message: "ชื่อผู้ใช้ต้องยาวอย่างน้อย 3 ตัวอักษร",
          }}
          maxLength={{
            value: 20,
            message: "ชื่อผู้ใช้ต้องห้ามเกิน 20 ตัวอักษร",
          }}
          pattern={{
            value: /^[a-zA-Z0-9][a-zA-Z0-9_]*[a-zA-Z0-9]$/,
            message: "ชื่อผู้ใช้ห้ามขึ้นต้นด้วย _ และห้ามมีอักษรพิเศษ",
          }}
          register={register}
          errors={errors}
        />
        <InputField
          id="password"
          textlabel="รหัสผ่าน"
          type="password"
          required={true}
          register={register}
          errors={errors}
          minLength={{
            value: 8,
            message: "รหัสผ่านต้องยาวอย่างน้อย 8 ตัวอักษร",
          }}
          pattern={{
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&+~|{}:;<>])[A-Za-z\d$@$!%*?&+~|{}:;<>]{8,15}$/,
            message:
              "รหัสผ่านต้องประกอบไปด้วยอักษรภาษาอังกฤษตัวพิมพ์ใหญ่ พิมพ์เล็ก ตัวเลข และสัญลักษณ์ อย่างน้อย 1 ตัว",
          }}
        />
        <InputField
          id="cpassword"
          textlabel="ยืนยันรหัสผ่าน"
          type="password"
          required={true}
          register={register}
          errors={errors}
          validate={(value: string) =>
            value === watch("password") || "รหัสผ่านไม่ตรงกัน"
          }
        />
        <NavButton />
      </form>
    </div>
  );
};

export default StepOneForm;
