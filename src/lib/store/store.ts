import { configureStore } from "@reduxjs/toolkit";
import registerFormSlice from "./features/register/registerFormSlice";
import userSlice from "./features/user/userSlice";
import memberFilterSlice from "./features/member/dojang-member/memberFilterSlice";



export const store = () => {
  return configureStore({
    reducer: {
        register: registerFormSlice,
        user: userSlice,
        memberFilter: memberFilterSlice,
    },
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
