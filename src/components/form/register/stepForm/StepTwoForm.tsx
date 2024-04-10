"use client";

import React, { useState } from "react";
import { RegisterInputs } from "../../formtypes";
import { useForm } from "react-hook-form";

import NavButton from "../NavButton";
import { useAppDispatch, useAppSelector } from "@/src/lib/store/hooks";
import {
  setCurrentStep,
  updateRegisterFormData,
} from "@/src/lib/store/features/register/registerFormSlice";
import InputField from "../../../inputs/InputField";

import { Address, CreateInput } from "thai-address-autocomplete-react";
import toast from "react-hot-toast";

const InputThaiAddress = CreateInput();

const StepTwoForm = () => {
  const [address, setAddress] = useState<Address>({
    district: "", // ตำบล tambol
    amphoe: "", // อำเภอ amphoe
    province: "", // จังหวัด changwat
    zipcode: "", // รหัสไปรษณีย์ postal code
  });
  const [isSelectAddress, setIsSelectAddress] = useState<boolean>(false);

  const handleChange = (scope: string) => (value: string) => {
    setAddress((oldAddr: Address) => ({
      ...oldAddr,
      [scope]: value,
    }));
  };

  const handleSelect = (address: Address) => {
    setAddress(address);
    setIsSelectAddress(true);
    console.log(address);
  };

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
      ...formData,
    },
  });

  async function processData(data: RegisterInputs) {
    if (isSelectAddress) {
      console.log(data);
      data = {
        ...data,
        gym_district: address.district,
        gym_amphoe: address.amphoe,
        gym_province: address.province,
        gym_zip_code: address.zipcode,
      }
      console.log(data);
      dispatch(setCurrentStep(currentStep + 1));
      dispatch(updateRegisterFormData(data));
    } else {
      toast.error("กรุณาเลือกที่อยู่");
    }
    
  }
  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit(processData)}>
        <InputField
          id="gym_name"
          textlabel="ชื่อยิม"
          type="text"
          required={true}
          register={register}
          errors={errors}
        />
        <InputField
          id="gym_address_1"
          textlabel="ที่อยู่ - บรรทัดที่ 1"
          type="text"
          required={true}
          register={register}
          errors={errors}
        />
        <InputField
          id="gym_address_2"
          textlabel="ที่อยู่ - บรรทัดที่ 2 (ไม่จำเป็น)"
          type="text"
          required={false}
          register={register}
          errors={errors}
        />
        <div className="flex flex-row w-full">
          <div className="relative mt-5 w-full mr-2">
            <label className="text-base text-grey">ตำบล/แขวง</label>
            <InputThaiAddress.District
              value={address["district"]}
              onChange={handleChange("district")}
              onSelect={handleSelect}
              className="h-10"
            />
          </div>
          <div className="relative mt-5 w-full mr-2">
            <label className="text-base text-grey">อำเภอ/เขต</label>
            <InputThaiAddress.Amphoe
              value={address["amphoe"]}
              onChange={handleChange("amphoe")}
              onSelect={handleSelect}
              className="h-10"
            />
          </div>
          <div className="relative mt-5 w-full mr-2">
            <label className="text-base text-grey">จังหวัด</label>
            <InputThaiAddress.Province
              value={address["province"]}
              onChange={handleChange("province")}
              onSelect={handleSelect}
              className="h-10"
            />
          </div>
          <div className="relative mt-5 w-full">
            <label className="text-base text-grey">เลขไปรษณีย์</label>
            <InputThaiAddress.Zipcode
              value={address["zipcode"]}
              onChange={handleChange("zipcode")}
              onSelect={handleSelect}
              className="h-10"
            />
          </div>
        </div>
        <NavButton />
      </form>
    </div>
  );
};

export default StepTwoForm;
