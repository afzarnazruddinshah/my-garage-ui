import { createSlice } from "@reduxjs/toolkit";

export const assignmentsSlice = createSlice({
  name: "counter",
  initialState: { isNewAssignDialogOpen: false },
  reducers: {
    updateNewAssgnView: (state, action) => {
      state.isNewAssignDialogOpen = action.payload;
    },
  },
});

export const { updateNewAssgnView } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
