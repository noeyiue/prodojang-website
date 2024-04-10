import React from "react";
import { StepProps } from "./stepperInterface";

const SuccessStep = ({ labelNum, labelData, firstStep }: StepProps) => {
  return (
    <div className="flex-row w-full">
      <div className="flex h-fit w-full ">
        <div className="basis-1/3 flex">
          {!firstStep && <div className="h-0 self-center border-2 w-full ml-0.5 border-navy" />}
        </div>
        <div className="basis-1/3">
          <li className="flex justify-center w-full items-center text-base font-bold text-basebg ">
            <span className="flex items-center bg-navy border border-navy justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
              {labelNum}
            </span>
          </li>
        </div>
        <div className="basis-1/3 flex">
          <div className="h-0 self-center border-2 w-full ml-0.5 border-navy" />
        </div>
      </div>
      <div className="flex-grow w-full">
        <p className="text-base text-navy text-center">{labelData}</p>
      </div>
    </div>
  );
};

export default SuccessStep;
