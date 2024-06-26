"use client";

import { setSearchValue } from "@/src/lib/store/features/member/dojang-member/memberFilterSlice";
import { useAppDispatch } from "@/src/lib/store/hooks";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function SearchBox() {
  const { register, watch } = useForm();
  const dispatch = useAppDispatch();

  const searchValue = watch("search");
  
  useEffect(() => {
    dispatch(setSearchValue(searchValue));
  }, [searchValue])

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  

  return (
    <form className="relative max-w-md mb-7" onSubmit={handleSubmit}>
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full p-3 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="ค้นหาด้วยรหัส, ชื่อ-นามสกุล, ชื่อเล่น"
        {...register("search")}
      />
      <button type="submit" style={{ display: "none" }} />
    </form>
  );
}

export default SearchBox;
