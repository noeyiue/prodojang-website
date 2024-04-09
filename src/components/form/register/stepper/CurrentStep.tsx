import React from "react";
import { StepProps } from "./stepperInterface";

const CurrentStep = ({ labelNum, labelData, firstStep, lastStep }: StepProps) => {
  return (
    <div className="flex-row w-full">
      <div className="flex h-fit w-full ">
        <div className="basis-1/3 flex">
          {!firstStep && <div className="h-0 self-center border-2 mr-0.5 w-full border-navy" />}
        </div>
        <div className="basis-1/3">
          <li className="flex justify-center w-full items-center text-base font-bold text-basebg ">
            <span className="flex items-center bg-navy border border-navy justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
              {labelNum}
            </span>
          </li>
        </div>
        <div className="basis-1/3 flex">
          {!lastStep && <div className="h-0 self-center border-2 mr-0.5 w-full border-grey" />}
        </div>
      </div>
      <div className="flex-grow w-full">
        <p className="text-base text-navy text-center font-bold">{labelData}</p>
      </div>
    </div>
  );
};

export default CurrentStep;
