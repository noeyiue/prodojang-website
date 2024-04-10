"use client";

import React, { useState } from "react";

import {
  ExclamationCircleIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { InputFieldProps } from "./inputstypes";

const InputField = ({
  type,
  id,
  textlabel,
  register,
  errors,
  required,
  minLength,
  maxLength,
  pattern,
  validate,
  className,
}: InputFieldProps) => {
  const isError = errors[id];
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  return (
    <div className="w-full">
      <div className={`relative mt-5 ${className}`}>
        <input
          className={`block w-full px-2.5 pb-2.5 pt-4 h-16 text-base text-grey bg-transparent rounded-lg border ${
            isError && required
              ? "border-red-500 focus:border-red-800"
              : "border-grey focus:border-navy"
          } appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer`}
          type={showPassword ? "text" : type}
          id={id}
          placeholder=" "
          {...register(`${id}`, {
            required: required && {
              value: required,
              message: `ต้องกรอก ${textlabel}`,
            },
            minLength: minLength && {
              value: minLength.value,
              message: minLength.message,
            },
            maxLength: maxLength && {
              value: maxLength.value,
              message: maxLength.message,
            },
            pattern: pattern && {
              value: pattern.value,
              message: pattern.message,
            },
            validate: validate,
          })}
        />
        {type === "password" && ( // Render eye button only for password inputs
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <EyeIcon
                className={` w-10 h-8 ${
                  isError && required ? "text-red-500" : "text-grey"
                }`}
              />
            ) : (
              <EyeSlashIcon
                className={` w-10 h-8 ${
                  isError && required ? "text-red-500" : "text-grey"
                }`}
              />
            )}
          </button>
        )}
        <label
          // className="absolute text-base text-grey dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-basebg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-navy peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          className={`flex absolute text-base dark:text-gray-400 ${
            isError && required
              ? "text-red-500 peer-focus:text-red-500"
              : "text-grey peer-focus:text-navy"
          } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-basebg dark:bg-gray-900 px-2 peer-focus:px-2  peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
        >
          {textlabel}
        </label>
      </div>
      <div className="flex flex-row mt-1">
        {isError && required && (
          <ExclamationCircleIcon className="flex text-red-500 w-5 h-5" />
        )}
        {errors[id] && (
          <span className="text-sm text-red-600 ml-1">
            {errors[id].message}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputField;
