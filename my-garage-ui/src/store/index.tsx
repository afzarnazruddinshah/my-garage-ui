import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./reducers/transactionsReducer";
import assignmentsReducer from "./reducers/assignmentsReducer";
export interface IPageCursors {
  [pageNo: number]: {
    first?: string;
    last?: string;
  };
}
export interface ITransactionsState {
  currentPage: number;
  direction: string;
  pageCursors: IPageCursors;
}

export interface IAssignmentsState {
  isNewAssignDialogOpen: boolean;
}
export interface IStoreState {
  transactions: ITransactionsState;
  assignments: IAssignmentsState;
}
export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    assignments: assignmentsReducer,
  },
});
// Infer the type of makeStore
// export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = AppStore["dispatch"];
