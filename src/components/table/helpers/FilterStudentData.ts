import { INewStudentInfo } from "@/src/lib/store/features/member/dojang-member/add-student/INewStudent";


export function filterStudentData(data: INewStudentInfo[], currentSearchValue: string) {
return (
    data.filter(row => {
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
      })
  )
}