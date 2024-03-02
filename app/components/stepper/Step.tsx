import React from "react";
import SuccessStep from "./SuccessStep";
import NextStep from "./NextStep";

const Step = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-3/4 justify-center">
        <ol className="flex flex-row w-full">
          <div className="flex basis-1/3">
            <SuccessStep stepLabel="1" stepData="บัญชี" finished={true}/>
          </div>
          <div className="flex basis-1/3">
            <NextStep stepLabel="2" stepData="ข้อมูลของยิม" lastStep={false}/>
          </div>
          <div className="flex basis-1/3">
            <NextStep stepLabel="3" stepData="ข้อมูลติดต่อ" lastStep={true}/>
          </div>
        </ol>
      </div>
    </div>
  );
};

export default Step;
