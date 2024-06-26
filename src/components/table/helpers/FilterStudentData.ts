import { IStudentDataRow } from "../IStudentDataRow"

export function filterStudentData(data: IStudentDataRow[], currentSearchValue: string) {
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