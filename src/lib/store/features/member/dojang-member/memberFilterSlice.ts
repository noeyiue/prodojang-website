import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMemberFilter } from "./memberFilterType";

const initialState: IMemberFilter = {
  searchValue: "",
};

export const memberFilterSlice = createSlice({
  name: "memberFilter",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = memberFilterSlice.actions;
export default memberFilterSlice.reducer;
