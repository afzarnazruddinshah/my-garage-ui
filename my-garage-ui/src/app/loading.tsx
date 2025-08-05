import { CircularProgress } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <div className="loader">
      <CircularProgress color="success" size={"50px"} />
    </div>
  );
}
