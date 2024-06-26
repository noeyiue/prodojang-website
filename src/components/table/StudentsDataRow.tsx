"use client";

import React, { useEffect, useState } from "react";
import mockData from "./mockData.json";
import { useAppDispatch, useAppSelector } from "@/src/lib/store/hooks";
import { sortedDateData } from "./helpers/SortedDateData";
import { filterStudentData } from "./helpers/FilterStudentData";
import RowElement from "./RowElement";
import { updateNewStudent } from "@/src/lib/store/features/member/dojang-member/add-student/newStudentSlice";

function StudentsDataRow() {

  const newStudentList = useAppSelector((state) => state.newStudent);
  const currentSearchValue = useAppSelector((state) => state.memberFilter.searchValue);
  const sortDateOrder = useAppSelector((state) => state.memberFilter.sortDateOrder);
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateNewStudent(mockData))    
  }, []);  
  const studentInfoList = newStudentList.map(student => student.newStudentInfo);
  const sortedData = sortedDateData(studentInfoList, sortDateOrder);
  const filteredData = filterStudentData(sortedData, currentSearchValue);  

  return (
    <tbody>
        {filteredData.map((row, index) => (
          <RowElement key={index} row={row}/>
        ))}
    </tbody>
  );
}

export default StudentsDataRow;
