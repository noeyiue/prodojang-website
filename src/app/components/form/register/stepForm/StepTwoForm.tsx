"use client";

import React from "react";
import { RegisterInputs } from "../../formtypes";
import { useForm } from "react-hook-form";

import NavButton from "../NavButton";
import { useAppDispatch, useAppSelector } from "@/src/lib/hooks";
import { setCurrentStep } from "@/src/lib/features/register/registerFormSlice";
import InputField from "../../../inputs/InputField";
import SelectField from "../../../inputs/SelectField";

const StepTwoForm = () => {
  const currentStep = useAppSelector((state) => state.register.currentStep);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterInputs>();

  async function processData(data: RegisterInputs) {
    console.log(data);
    dispatch(setCurrentStep(currentStep + 1));
  }
  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit(processData)}>
        <InputField
          id="gym_name"
          textlabel="ชื่อยิม"
          type="text"
          isRequired={true}
          register={register}
          errors={errors}
        />
        <InputField
          id="gym_address_1"
          textlabel="ที่อยู่ - บรรทัดที่ 1"
          type="text"
          isRequired={true}
          register={register}
          errors={errors}
        />
        <InputField
          id="gym_address_2"
          textlabel="ที่อยู่ - บรรทัดที่ 2 (ไม่จำเป็น)"
          type="text"
          isRequired={false}
          register={register}
          errors={errors}
        />
        <div className="flex flex-row w-full">
          <SelectField
            id="gym_city"
            textlabel="จังหวัด"
            isRequired={true}
            register={register}
            errors={errors}
            options={[
              {
                id: "male",
                title: "Male",
              },
              {
                id: "female",
                title: "Female",
              },
            ]}
            className="mr-2"
          />
          <SelectField
            id="gym_province"
            textlabel="อำเภอ/เขต"
            isRequired={true}
            register={register}
            errors={errors}
            options={[
              {
                id: "male",
                title: "Male",
              },
              {
                id: "female",
                title: "Female",
              },
            ]}
            className="mr-2"
          />
          <SelectField
            id="gym_zip_code"
            textlabel="เลขไปรษณีย์"
            isRequired={true}
            register={register}
            errors={errors}
            options={[
              {
                id: "male",
                title: "Male",
              },
              {
                id: "female",
                title: "Female",
              },
            ]}
          />
        </div>
        <NavButton />
      </form>
    </div>
  );
};

export default StepTwoForm;
