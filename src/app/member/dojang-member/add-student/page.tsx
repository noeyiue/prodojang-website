import Slidebar from "@/src/components/layout/Slidebar";
import UserNavbar from "@/src/components/layout/UserNavbar";
import AddStudentsTable from "@/src/components/table/AddStudentsTable";
import React from "react";

function addStudent() {
  return (
    <div className="w-full">
      <Slidebar />
      <UserNavbar />
      <div className="mt-24 ml-72 mr-8 mb-3">
          <p className="lg:text-3xl sm:text-xl font-black text-black p-2 m-2">ยืนยันสมาชิก</p>
          <AddStudentsTable />
      </div>
    </div>
  );
}

export default addStudent;
