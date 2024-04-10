import React from "react";
import Step from './Step';

const Steps = () => {
  return (
    <div className="flex justify-center mb-10">
      <div className="flex w-3/4 justify-center">
        <ol className="flex flex-row w-full">
          <div className="flex basis-1/3">
            <Step labelNum={1} labelData="บัญชี" />
          </div>
          <div className="flex basis-1/3">
            <Step labelNum={2} labelData="ข้อมูลของยิม"/>
          </div>
          <div className="flex basis-1/3">
            <Step labelNum={3} labelData="ข้อมูลติดต่อ"/>
          </div>
        </ol>
      </div>
    </div>
  );
};

export default Steps;
