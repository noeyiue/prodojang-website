export interface INewStudentInfo {
  student_id: string;
  full_name: string;
  nickname: string;
  parent_name: string;
  phone_number: string;
  registration_date: string;
}

export interface INewStudentState {
  isSelected: boolean;
  newStudentInfo: INewStudentInfo;
}

export interface ISetIsCheckedPayload {
    student_id: string;
    isChecked: boolean;
  }
