import { configureStore } from "@reduxjs/toolkit";
import registerFormSlice from "./features/register/registerFormSlice";
import userSlice from "./features/user/userSlice";


export const store = () => {
  return configureStore({
    reducer: {
        register: registerFormSlice,
        user: userSlice,
    },
  });
};

export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
