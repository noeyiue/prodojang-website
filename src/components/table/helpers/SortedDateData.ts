import { INewStudentInfo } from "@/src/lib/store/features/member/dojang-member/add-student/INewStudent";
import { SortDateOrder } from "@/src/lib/store/features/member/dojang-member/IMemberFilter";

export function sortedDateData(data: INewStudentInfo[], order: SortDateOrder) {
  return [...data].sort((a, b) => {
    const [dayA, monthA, yearA] = a.registration_date.split('-').map(Number);
    const [dayB, monthB, yearB] = b.registration_date.split('-').map(Number);

    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);

    if (order === SortDateOrder.NEWEST_OLDEST) {
      return Number(dateA) - Number(dateB);
    } else {
      return Number(dateB) - Number(dateA);
    }
  });
}
