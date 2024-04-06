import { configureStore } from "@reduxjs/toolkit";
import registerFormSlice from "./features/register/registerFormSlice";

export const store = () => {
  return configureStore({
    reducer: {
        register: registerFormSlice,
    },
  });
};

export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
