"use client";
import { store } from "@/store";
import * as React from "react";
import { Provider } from "react-redux";

export const StoreProvider = ({ children }: { children: any }) => {
  return <Provider store={store}>{children}</Provider>;
};
