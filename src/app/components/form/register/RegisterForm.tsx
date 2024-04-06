import React from "react";
import Step from "./stepper/Steps";
import StepForm from "./stepForm/StepForm";


const RegisterForm = () => {  
  return (
    <div className="flex-col">
      <Step />
      <StepForm />
    </div>
  );
};

export default RegisterForm;
