"use client";

import React from "react";
import Step from "../../stepper/Step";
import NextStep from "../../stepper/NextStep";
import StepOneForm from "./StepOneForm";


const RegisterForm = () => {
  
  return (
    <div className="flex-col">
      <Step />
      <StepOneForm />
    </div>
  );
};

export default RegisterForm;
