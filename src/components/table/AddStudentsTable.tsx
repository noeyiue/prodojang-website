import SearchBox from "../inputs/SearchBox";
import {
  CalendarDaysIcon,
  IdentificationIcon,
  PhoneIcon,
  SparklesIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import StudentsDataRow from "./StudentsDataRow";
import MainButton from "../buttons/MainButton";


function AddStudentsTable() {

  return (
    <div className="flex flex-col">
      <SearchBox />
      <div className="w-full bg-gray-50">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-3 py-4">
                <div className="flex flex-row">
                    {/* <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 mr-1 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    /> */}
                  <IdentificationIcon className="w-4 h-4 mr-1" />
                  รหัสนักเรียน
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="w-full flex flex-row">
                  <UserIcon className="w-4 h-4 mr-1" />
                  ชื่อ-นามสกุล
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="w-full flex flex-row">
                  <SparklesIcon className="w-4 h-4 mr-1" />
                  ชื่อเล่น
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="w-full flex flex-row">
                  <UsersIcon className="w-4 h-4 mr-1" />
                  ชื่อผู้ปกครอง
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="w-full flex flex-row">
                  <PhoneIcon className="w-4 h-4 mr-1" />
                  เบอร์โทรศัพท์
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="w-full flex flex-row">
                  <CalendarDaysIcon className="w-4 h-4 mr-1" />
                  วันที่สมัคร
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                ลบข้อมูล
              </th>
            </tr>
          </thead>
          <StudentsDataRow />
        </table>
      </div>
      <MainButton type="submit" buttonText="ยืนยัน"/>
    </div>
  );
}

export default AddStudentsTable;
