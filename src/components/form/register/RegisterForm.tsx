import React from "react";
import Step from "./stepper/Steps";
import StepForm from "./stepForm/StepForm";

const RegisterForm = () => {
  return (
    <div className="flex justify-center h-full">
      <div className="flex-col w-5/6">
        <Step />
        <StepForm />
      </div>
    </div>
  );
};

export default RegisterForm;
