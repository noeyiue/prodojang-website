import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterState } from "./registerType";
import { RegisterInputs } from "@/src/components/form/formtypes";

const initialState: RegisterState = {
  currentStep: 1,
  registerFormData: {
    username: "",
    email: "",
    password: "",
    cpassword: "",
    firstname_th: "",
    lastname_th: "",
    firstname_en: "",
    lastname_en: "",
    gym_address_1: "",
    gym_address_2: "",
    gym_name: "",
    gym_zip_code: "",
    gym_province: "",
    gym_amphoe: "",
    gym_district: "",
    telephone: "",
  }
};

export const registerFormSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    updateRegisterFormData: (state, action: PayloadAction<Partial<RegisterInputs>>) => {
      state.registerFormData = {
        ...state.registerFormData,
        ...action.payload
      }
    }
  },
});

export const { setCurrentStep, updateRegisterFormData } = registerFormSlice.actions;
export default registerFormSlice.reducer;
