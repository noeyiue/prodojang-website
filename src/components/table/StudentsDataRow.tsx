"use client";

import React, { useEffect, useState } from "react";
import { IStudentDataRow } from "./IStudentDataRow";
import mockData from "./mockData.json";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useAppSelector } from "@/src/lib/store/hooks";

function StudentsDataRow() {
  const [data, setData] = useState<IStudentDataRow[]>([]);
  const currentSearchValue = useAppSelector((state) => state.memberFilter.searchValue);

  useEffect(() => {
    setData(mockData);
  }, []);
  
  const filteredData = data.filter(row => {
    if (currentSearchValue && currentSearchValue !== "") {
      return [
        row.student_id,
        row.full_name,
        row.nickname,
      ].some(value => 
        typeof value === 'string' && value.includes(currentSearchValue)
      );
    } else {
      return true; 
    }
  });

  return (
    <tbody>
        {filteredData.map((row, index) => (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td
                scope="row"
                className="w-fit px-3 py-4 italic whitespace-nowrap dark:text-white"
              >
                <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 mr-1 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                {row.student_id}
              </td>
              <td className="w-1/6 px-6 py-4">{row.full_name}</td>
              <td className="w-1/8 px-6 py-4">{row.nickname}</td>
              <td className="w-1/8 px-6 py-4">{row.parent_name}</td>
              <td className="w-1/8 px-6 py-4">{row.phone_number}</td>
              <td className="w-1/8 px-6 py-4">{row.registration_date}</td>
              <td className="w-1/8 px-6 py-4">
                <TrashIcon className="w-4 h-4 hover:text-red-600"/>
              </td>
            </tr>
        ))}
    </tbody>
  );
}

export default StudentsDataRow;
