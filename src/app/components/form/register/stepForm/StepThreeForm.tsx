import React from "react";
import { RegisterInputs } from "../../formtypes";
import { useForm } from "react-hook-form";

import NavButton from "../NavButton";
import { useAppDispatch, useAppSelector } from "@/src/lib/hooks";
import { setCurrentStep } from "@/src/lib/features/register/registerFormSlice";
import InputField from "../../../inputs/InputField";

const StepThreeForm = () => {
  const currentStep = useAppSelector((state) => state.register.currentStep);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();

  async function processData(data: RegisterInputs) {
    console.log(data);
    dispatch(setCurrentStep(currentStep + 1));
  }

  return (
    <div>
      <form onSubmit={handleSubmit(processData)}>
        <div className="flex flex-row justify-between w-full">
          <InputField
            id="firstname_th"
            textlabel="ชื่อจริง - ไทย"
            type="text"
            isRequired={true}
            register={register}
            errors={errors}
            className="mr-2"
          />
          <InputField
            id="lastname_th"
            textlabel="นามสกุล - ไทย"
            type="text"
            isRequired={false}
            register={register}
            errors={errors}
          />
        </div>
        <div className="flex flex-row justify-between w-full">
          <InputField
            id="firstname_en"
            textlabel="Firstname - En"
            type="text"
            isRequired={true}
            register={register}
            errors={errors}
            className="mr-2"
          />
          <InputField
            id="lastname_en"
            textlabel="Lastname - En"
            type="text"
            isRequired={false}
            register={register}
            errors={errors}
          />
        </div>
        <div className="flex justify-center w-full">
          <div className="w-3/5">
            <InputField
              id="email"
              textlabel="อีเมล"
              type="email"
              isRequired={true}
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="w-3/5">
            <InputField
              id="telephone"
              textlabel="หมายเลขโทรศัพท์"
              type="number"
              isRequired={true}
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <NavButton />
      </form>
    </div>
  );
};

export default StepThreeForm;
