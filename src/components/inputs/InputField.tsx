import React from "react";
import { InputFieldProps } from "./inputstypes";

const InputField = ({
  type,
  id,
  textlabel,
  register,
  errors,
  isRequired,
  className, 
}: InputFieldProps) => {
  return (
    <div className="w-full">
      <div className={`relative mt-5 ${className}`}>
        <input
          className="block w-full px-2.5 pb-2.5 pt-4 h-16 text-base text-grey bg-transparent rounded-lg border border-grey appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-navy peer"
          type={type}
          id={id}
          placeholder=" "
          {...register(`${id}`, { required: isRequired })}
        />
        <label className="absolute text-base text-grey dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-basebg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-navy peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
          {textlabel}
        </label>
      </div>
      {errors[`${id}`] && (
        <span className="text-sm text-red-600 ">ต้องกรอก {textlabel}</span>
      )}
    </div>
  );
};

export default InputField;
