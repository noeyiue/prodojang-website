import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMemberFilter, SortDateOrder } from "./IMemberFilter";

const initialState: IMemberFilter = {
  searchValue: "",
  sortDateOrder: SortDateOrder.NEWEST_OLDEST,
};

export const memberFilterSlice = createSlice({
  name: "memberFilter",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    reverseSortDateOrder: (state) => {
      if (state.sortDateOrder === SortDateOrder.OLDEST_NEWEST) {
        state.sortDateOrder = SortDateOrder.NEWEST_OLDEST
      } else {
        state.sortDateOrder = SortDateOrder.OLDEST_NEWEST
      }
    },
  },
});

export const { setSearchValue, reverseSortDateOrder } = memberFilterSlice.actions;
export default memberFilterSlice.reducer;
