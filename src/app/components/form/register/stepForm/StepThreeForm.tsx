"use client";

import React from "react";
import { RegisterInputs } from "../../formtypes";
import { useForm } from "react-hook-form";

import NavButton from "../NavButton";
import { useAppDispatch, useAppSelector } from "@/src/lib/hooks";
import { setCurrentStep } from "@/src/lib/features/register/registerFormSlice";
import InputField from "../../InputField";

const StepThreeForm = () => {
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
    <div>
      <form onSubmit={handleSubmit(processData)}>
        
        <NavButton />
      </form>
    </div>
  );
};

export default StepThreeForm;
