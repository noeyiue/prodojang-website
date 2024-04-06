'use client';

import { useAppSelector } from '@/src/lib/hooks';
import React from 'react'
import CurrentStep from './CurrentStep';
import { StepProps } from './stepperInterface';
import SuccessStep from './SuccessStep';
import NextStep from './NextStep';

const Step = ({ labelNum, labelData } : StepProps) => {
  const currentStep = useAppSelector((state) => state.register.currentStep);
  if (labelNum === currentStep)
    return <CurrentStep labelNum={labelNum} labelData={labelData} firstStep={labelNum === 1} lastStep={labelNum === 3}/>
  else if (labelNum < currentStep)
    return <SuccessStep labelNum={labelNum} labelData={labelData} firstStep={labelNum === 1}/>
  else if (labelNum > currentStep)
    return <NextStep labelNum={labelNum} labelData={labelData} lastStep={labelNum === 3}/>
}

export default Step;