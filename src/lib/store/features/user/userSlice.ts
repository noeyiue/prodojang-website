import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserinfo, IUserState } from "./IUser";

const initialState: IUserState = {
  userInfo: {
    username: "",
    gym_name: "",
    firstname_th: "",
    lastname_th: "",
    email: "",
    telephone: "",
    user_role: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserData: (state, action: PayloadAction<Partial<IUserinfo>>) => {
      state.userInfo = {
        ...state.userInfo,
        ...action.payload,
      };
    },
  },
});

export const { updateUserData } = userSlice.actions;
export default userSlice.reducer;
