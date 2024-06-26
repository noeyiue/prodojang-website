"use client";

import { TrashIcon } from "@heroicons/react/24/outline";
import React from "react";

import { useAppDispatch, useAppSelector } from "@/src/lib/store/hooks";
import { setChecked } from "@/src/lib/store/features/member/dojang-member/add-student/newStudentSlice";
import { INewStudentInfo } from "@/src/lib/store/features/member/dojang-member/add-student/INewStudent";

interface RowElementProps {
  row: INewStudentInfo;
}

function RowElement({ row }: RowElementProps) {

  
  const newStudentList = useAppSelector((state) => state.newStudent);
  const student = newStudentList.find(student => student.newStudentInfo.student_id === row.student_id)
  
  const dispatch = useAppDispatch();

  const handleCheckboxChange = () => {    
    dispatch(setChecked({
      student_id: row.student_id,
      isChecked: !student?.isSelected,
    }));
  };

  return (
    <tr
      className={`${
        student?.isSelected
          ? "bg-indigo-50 border-l-4 border-l-blue-800 border-b border-b-transparent hover:bg-indigo-100"
          : "bg-white border-l-4 border-l-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      }`}
    >
      <td
        scope="row"
        className="w-fit px-3 py-4 italic whitespace-nowrap dark:text-white"
      >
        <input
          type="checkbox"
          checked={student?.isSelected}
          className="w-4 h-4 mr-2 text-blue-800 bg-gray-100 border-gray-300 rounded focus:ring-blue-800 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={() => handleCheckboxChange()}
        />
        {row.student_id}
      </td>
      <td className="w-1/6 px-6 py-4">{row.full_name}</td>
      <td className="w-1/8 px-6 py-4">{row.nickname}</td>
      <td className="w-1/8 px-6 py-4">{row.parent_name}</td>
      <td className="w-1/8 px-6 py-4">{row.phone_number}</td>
      <td className="w-1/8 px-6 py-4">{row.registration_date}</td>
      <td className="w-1/8 px-6 py-4">
        <TrashIcon className="w-4 h-4 hover:text-red-600" />
      </td>
    </tr>
  );
}

export default RowElement;
