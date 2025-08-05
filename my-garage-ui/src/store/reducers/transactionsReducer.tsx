import { createSlice } from "@reduxjs/toolkit";

export const transactionsSlice = createSlice({
  name: "counter",
  initialState: { currentPage: 1, direction: "forward", pageCursors: {} },
  reducers: {
    updateCurrentPage: (state, action) => {
      state.currentPage = action.payload.currentPage;
      state.direction = action.payload.direction;
    },
    updatePageCursors: (state, action) => {
      state.pageCursors = { ...state.pageCursors, ...action.payload };
    },
  },
});

export const { updateCurrentPage, updatePageCursors } = transactionsSlice.actions;

export default transactionsSlice.reducer;
