"use client";

import { useAppSelector } from "@/src/lib/hooks";
import React from "react";
import StepOneForm from "./StepOneForm";
import StepTwoForm from "./StepTwoForm";
import StepThreeForm from "./StepThreeForm";

function StepForm() {
  const currentStep = useAppSelector((state) => state.register.currentStep);
  if (currentStep === 1) return <StepOneForm />;
  else if (currentStep === 2) return <StepTwoForm />;
  else if (currentStep === 3) return <StepThreeForm />;
}

export default StepForm;
