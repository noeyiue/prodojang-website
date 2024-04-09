import React from "react";
import { RegisterInputs } from "../../formtypes";
import { useForm } from "react-hook-form";

import NavButton from "../NavButton";
import { useAppDispatch, useAppSelector } from "@/src/lib/store/hooks";
import { updateRegisterFormData } from "@/src/lib/store/features/register/registerFormSlice";
import InputField from "../../../inputs/InputField";
import { usePostRegister } from "@/src/lib/api/auth";
import { IApiResponse } from "@/src/lib/api/apiType";
import { useRouter } from "next/router";


const StepThreeForm = () => {
  const router = useRouter()

  const formData = useAppSelector((state) => state.register.registerFormData);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    defaultValues: {
      ...formData,
    },
  });

  async function processData(data: RegisterInputs) {
    console.log(data);
    dispatch(updateRegisterFormData(data));
    // call api here if 400 navigate to main page
    const response: IApiResponse = await usePostRegister();
    if (response.ok) {
      router.push
    } else {
      // const errorMessage = await response.text();
      console.log(`Error: errorMessage}`);
      // console.log(`Error: ${errorMessage}`);

    }
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
