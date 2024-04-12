import React from "react";
import { ProcessRegisterInputs, RegisterInputs } from "../../formtypes";
import { useForm } from "react-hook-form";

import NavButton from "../NavButton";
import { useAppDispatch, useAppSelector } from "@/src/lib/store/hooks";
import { updateRegisterFormData } from "@/src/lib/store/features/register/registerFormSlice";
import InputField from "../../../inputs/InputField";
import { usePostRegister } from "@/src/app/api/register/route";
import { IApiResponse } from "@/src/app/api/register/registerType";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { handleFormData } from "./handleFormData";


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
    dispatch(updateRegisterFormData(data));
    console.log(data);
    const processedData : ProcessRegisterInputs = handleFormData(data);
    console.log(processedData);
    
    const response: IApiResponse = await usePostRegister(processedData);
    if (response.ok) {
      toast.success('สร้างบัญชีสำเร็จ');
      router.push(`/login`);
    } else {
      const errorMessage = await response.text();
      console.log(`Error: ${errorMessage}`);
      toast.error(errorMessage);
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
            required={true}
            register={register}
            errors={errors}
            className="mr-2"
            pattern={{
              value: /^[ก-๏\s]+$/,
              message: "กรุณากรอกเป็นภาษาไทย",
            }}
          />
          <InputField
            id="lastname_th"
            textlabel="นามสกุล - ไทย"
            type="text"
            required={false}
            register={register}
            errors={errors}
            pattern={{
              value: /^[ก-๏\s]+$/,
              message: "กรุณากรอกเป็นภาษาไทย",
            }}
          />
          
        </div>
        <div className="flex flex-row justify-between w-full">
          <InputField
            id="firstname_en"
            textlabel="Firstname - En"
            type="text"
            required={true}
            register={register}
            errors={errors}
            className="mr-2"
            pattern={{
              value: /^[a-zA-Z\s]+$/,
              message: "กรุณากรอกเป็นภาษาอังกฤษ",
            }}
          />
          <InputField
            id="lastname_en"
            textlabel="Lastname - En"
            type="text"
            required={false}
            register={register}
            errors={errors}
            pattern={{
              value: /^[a-zA-Z\s]+$/,
              message: "กรุณากรอกเป็นภาษาอังกฤษ",
            }}
          />
        </div>
        <div className="flex justify-center w-full">
          <div className="w-3/5">
            <InputField
              id="email"
              textlabel="อีเมล"
              type="email"
              required={true}
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
              required={true}
              register={register}
              errors={errors}
              minLength={{
                value: 10,
                message: "หมายเลขโทรศัพท์ควรยาว 10 หลัก",
              }}
              maxLength={{
                value: 10,
                message: "หมายเลขโทรศัพท์ควรยาว 10 หลัก",
              }}
            />
          </div>
        </div>
        <NavButton />
      </form>
    </div>
  );
};

export default StepThreeForm;
