import React from "react";
import { StepProps } from "./stepperInterface";

const NextStep = ({ labelNum, labelData, lastStep }: StepProps) => {
  return (
    <div className="flex-row w-full">
      <div className="flex h-fit w-full">
        <div className="basis-1/3 flex">
          <div className="h-0 self-center border-2 mr-0.5 w-full border-grey" />
        </div>
        <div className="basis-1/3">
          <li className="flex justify-center w-full items-center text-base font-bold">
            <span className="flex items-center bg-basebg border border-grey justify-center w-10 h-10 text-grey rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
              {labelNum}
            </span>
          </li>
        </div>
        <div className="basis-1/3 flex">
          {!lastStep && <div className="h-0 self-center border-2 w-full ml-0.5 border-grey" />}
        </div>
      </div>
      <div className="flex-grow w-full">
        <p className={"text-center text-base text-grey"}>{labelData}</p>
      </div>
    </div>
  );
};

export default NextStep;
