import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INewStudentInfo, INewStudentState, ISetIsCheckedPayload } from "./INewStudent";

const initialState: INewStudentState[] = [];

export const newStudentSlice = createSlice({
  name: "newStudent",
  initialState,
  reducers: {
    updateNewStudent: (state, action: PayloadAction<INewStudentInfo[]>) => {
      action.payload.forEach((newStudentInfo) => {
        const index = state.findIndex(student => student.newStudentInfo.student_id === newStudentInfo.student_id);
        if (index !== -1) {
          state[index].newStudentInfo = newStudentInfo;
        } else {
          state.push({
            isSelected: false,
            newStudentInfo,
          });
        }
      })
    },
    setChecked: (state, action: PayloadAction<ISetIsCheckedPayload>) => {
      const { student_id, isChecked } = action.payload;
      const index = state.findIndex(student => student.newStudentInfo.student_id === student_id)
      if (index !== -1) {
        state[index].isSelected = isChecked;
      }
    },
    setAllChecked: (state, action: PayloadAction<boolean>) => {
      state.forEach(student => {
        student.isSelected = action.payload
      })
    }
  },
})

export const { updateNewStudent, setChecked, setAllChecked } = newStudentSlice.actions;
export default newStudentSlice.reducer;
