import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterState } from "./registerType";

const initialState: RegisterState = {
  currentStep: 1,
};

export const registerFormSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {},
  },
});

export const { setCurrentStep } = registerFormSlice.actions;
export default registerFormSlice.reducer;
